import { describe, expect, it } from 'vitest'
import { defaultLocale, isLocale, localePath, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { fmt, formatDate, parseRich, richTags } from '@/lib/i18n/format'
import { negotiateLocale, routeRequest } from '@/lib/i18n/routing'

describe('negotiateLocale', () => {
  it('falls back to the default locale without a usable header', () => {
    expect(negotiateLocale(undefined)).toBe(defaultLocale)
    expect(negotiateLocale('')).toBe(defaultLocale)
    expect(negotiateLocale('fr-FR,de;q=0.8')).toBe(defaultLocale)
    expect(negotiateLocale('*')).toBe(defaultLocale)
  })

  it('maps every Chinese variant to zh', () => {
    for (const header of ['zh', 'zh-CN', 'zh-TW', 'zh-Hans-CN', 'ZH-hk,en;q=0.5']) expect(negotiateLocale(header)).toBe('zh')
  })

  it('ranks by q-value and keeps header order for ties', () => {
    expect(negotiateLocale('en;q=0.5,zh;q=0.9')).toBe('zh')
    expect(negotiateLocale('zh;q=0.4,en-US;q=0.9')).toBe('en')
    expect(negotiateLocale('en,zh')).toBe('en')
    expect(negotiateLocale('zh,en')).toBe('zh')
  })

  it('skips languages the visitor refuses with q=0', () => {
    expect(negotiateLocale('zh;q=0,en')).toBe('en')
  })

  it('skips unsupported languages that rank higher', () => {
    expect(negotiateLocale('fr,ja;q=0.9,zh;q=0.1')).toBe('zh')
  })
})

describe('routeRequest', () => {
  it('rewrites unprefixed paths to the default locale without changing the URL', () => {
    expect(routeRequest({ pathname: '/', acceptLanguage: 'en-US' })).toEqual({ kind: 'rewrite', pathname: '/en' })
    expect(routeRequest({ pathname: '/plugins/multi-root-workspace' })).toEqual({ kind: 'rewrite', pathname: '/en/plugins/multi-root-workspace' })
  })

  it('redirects unprefixed paths to /zh when the browser prefers Chinese', () => {
    expect(routeRequest({ pathname: '/', acceptLanguage: 'zh-CN,zh;q=0.9' })).toEqual({ kind: 'redirect', pathname: '/zh', status: 307 })
    expect(routeRequest({ pathname: '/plugins/multi-root-workspace', acceptLanguage: 'zh' })).toMatchObject({
      pathname: '/zh/plugins/multi-root-workspace',
    })
  })

  it('lets the remembered choice beat the browser language', () => {
    expect(routeRequest({ pathname: '/', cookie: 'en', acceptLanguage: 'zh-CN' })).toEqual({ kind: 'rewrite', pathname: '/en' })
    expect(routeRequest({ pathname: '/', cookie: 'zh', acceptLanguage: 'en-US' })).toMatchObject({ kind: 'redirect', pathname: '/zh' })
    expect(routeRequest({ pathname: '/', cookie: 'xx', acceptLanguage: 'zh' })).toMatchObject({ kind: 'redirect', pathname: '/zh' })
  })

  it('serves /zh as is and remembers it once', () => {
    expect(routeRequest({ pathname: '/zh', acceptLanguage: 'en' })).toEqual({ kind: 'next', setCookie: 'zh' })
    expect(routeRequest({ pathname: '/zh/plugins/multi-root-workspace', cookie: 'zh' })).toEqual({ kind: 'next' })
  })

  it('sends /en/... to the canonical unprefixed URL and remembers English', () => {
    expect(routeRequest({ pathname: '/en', acceptLanguage: 'zh' })).toEqual({ kind: 'redirect', pathname: '/', status: 308, setCookie: 'en' })
    expect(routeRequest({ pathname: '/en/plugins/multi-root-workspace' })).toMatchObject({ pathname: '/plugins/multi-root-workspace', status: 308 })
  })
})

describe('locale helpers', () => {
  it('builds paths without a prefix for the default locale', () => {
    expect(localePath('en', '/')).toBe('/')
    expect(localePath('zh', '/')).toBe('/zh')
    expect(localePath('zh', '/plugins/multi-root-workspace')).toBe('/zh/plugins/multi-root-workspace')
    expect(localePath('en', '/plugins/multi-root-workspace')).toBe('/plugins/multi-root-workspace')
  })

  it('recognizes only supported locales', () => {
    expect(isLocale('zh')).toBe(true)
    expect(isLocale('fr')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })
})

describe('format helpers', () => {
  it('fmt fills placeholders and leaves unknown ones visible', () => {
    expect(fmt('Hello {name}, {n} items', { name: 'A', n: 2 })).toBe('Hello A, 2 items')
    expect(fmt('{missing}', {})).toBe('{missing}')
  })

  it('parseRich splits tagged segments', () => {
    expect(parseRich('a <b>x</b> c')).toEqual([
      { tag: null, text: 'a ' },
      { tag: 'b', text: 'x' },
      { tag: null, text: ' c' },
    ])
    expect(richTags('<a>1</a> <code>2</code>')).toEqual(['a', 'code'])
  })

  it('formats dates per locale without shifting the day', () => {
    expect(formatDate('2026-10-09', 'en')).toBe('October 9, 2026')
    expect(formatDate('2026-10-09', 'zh')).toBe('2026年10月9日')
  })
})

/** Flattens a dictionary into `path → string` entries. */
function flatten(value: unknown, path = ''): [string, string][] {
  if (typeof value === 'string') return [[path, value]]
  if (Array.isArray(value)) return value.flatMap((item, i) => flatten(item, `${path}[${i}]`))
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([k, v]) => flatten(v, path ? `${path}.${k}` : k))
  return []
}

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()

describe('dictionaries', () => {
  const reference = new Map(flatten(getDictionary('en')))

  for (const locale of locales.filter((l) => l !== defaultLocale)) {
    describe(locale, () => {
      const entries = flatten(getDictionary(locale))

      it('has exactly the keys of the default locale, including array lengths', () => {
        expect(entries.map(([k]) => k).sort()).toEqual([...reference.keys()].sort())
      })

      it('keeps the same placeholders and rich tags in every string', () => {
        for (const [key, text] of entries) {
          const source = reference.get(key) ?? ''
          expect(placeholders(text), key).toEqual(placeholders(source))
          expect([...richTags(text)].sort(), key).toEqual([...richTags(source)].sort())
        }
      })

      it('has no empty strings', () => {
        for (const [key, text] of entries) expect(text.trim(), key).not.toBe('')
      })
    })
  }

  it('translates the visible copy', () => {
    expect(getDictionary('zh').home.hero.title).not.toBe(getDictionary('en').home.hero.title)
    expect(getDictionary('zh').multiRoot.hero.lead).toMatch(/[\u4e00-\u9fff]/)
  })
})
