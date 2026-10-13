import { describe, expect, it } from 'vitest'
import { generateMetadata as homeMetadata } from '@/app/[lang]/page'
import { generateMetadata as gitMetadata } from '@/app/[lang]/plugins/git/page'
import { generateMetadata as multiRootMetadata } from '@/app/[lang]/plugins/multi-root-workspace/page'
import { generateMetadata as themeStudioMetadata } from '@/app/[lang]/plugins/theme-studio/page'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'
import { locales } from '@/lib/i18n/config'

const meta = (fn: (props: never) => Promise<import('next').Metadata>, lang: string) =>
  // The page props only carry `params`; the typegen helper types are not needed in tests.
  fn({ params: Promise.resolve({ lang }) } as never)

describe('page metadata', () => {
  it('gives each page its own title, description and canonical path per locale', async () => {
    const [home, git, themeStudio, multiRoot, homeZh, multiRootZh] = await Promise.all([
      meta(homeMetadata, 'en'),
      meta(gitMetadata, 'en'),
      meta(themeStudioMetadata, 'en'),
      meta(multiRootMetadata, 'en'),
      meta(homeMetadata, 'zh'),
      meta(multiRootMetadata, 'zh'),
    ])
    expect(new Set([home.title, git.title, themeStudio.title, multiRoot.title]).size).toBe(4)
    expect(home.alternates?.canonical).toBe('/')
    expect(git.alternates?.canonical).toBe('/plugins/git')
    expect(themeStudio.alternates?.canonical).toBe('/plugins/theme-studio')
    expect(multiRoot.alternates?.canonical).toBe('/plugins/multi-root-workspace')
    expect(homeZh.alternates?.canonical).toBe('/zh')
    expect(multiRootZh.alternates?.canonical).toBe('/zh/plugins/multi-root-workspace')
    expect(homeZh.title).not.toEqual(home.title)
    expect(homeZh.description).toMatch(/[\u4e00-\u9fff]/)
  })

  it('declares hreflang alternates for every locale and x-default', async () => {
    const home = await meta(homeMetadata, 'zh')
    expect(home.alternates?.languages).toEqual({ 'x-default': '/', 'en': '/', 'zh-CN': '/zh' })
    expect(home.openGraph).toMatchObject({ locale: 'zh_CN', alternateLocale: ['en_US'] })
  })

  it('does not present the plugin pages as part of Rivetdeck', async () => {
    for (const lang of locales) {
      for (const fn of [gitMetadata, themeStudioMetadata, multiRootMetadata]) {
        const m = await meta(fn, lang)
        expect(String(m.title)).not.toMatch(/rivetdeck/i)
        expect(String(m.description)).not.toMatch(/rivetdeck/i)
      }
    }
  })

  it('declares Open Graph and Twitter cards on every page in both locales', async () => {
    for (const fn of [homeMetadata, gitMetadata, themeStudioMetadata, multiRootMetadata]) {
      for (const lang of locales) {
        const m = await meta(fn, lang)
        expect(m.openGraph?.title).toBe(m.title)
        expect(m.twitter).toMatchObject({ card: 'summary_large_image' })
      }
    }
  })

  it('returns no metadata for an unknown locale', async () => {
    expect(await meta(homeMetadata, 'fr')).toEqual({})
  })

  it('lists every page in every locale in the sitemap, with alternates, and links it from robots', () => {
    const entries = sitemap()
    expect(entries.map((e) => new URL(e.url).pathname)).toEqual([
      '/',
      '/zh',
      '/plugins/git',
      '/zh/plugins/git',
      '/plugins/theme-studio',
      '/zh/plugins/theme-studio',
      '/plugins/multi-root-workspace',
      '/zh/plugins/multi-root-workspace',
    ])
    for (const entry of entries) expect(Object.keys(entry.alternates?.languages ?? {})).toEqual(['x-default', 'en', 'zh-CN'])
    expect(String(robots().sitemap)).toMatch(/\/sitemap\.xml$/)
  })
})
