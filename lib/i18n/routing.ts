import { defaultLocale, isLocale, localePath, locales, type Locale } from './config'

/**
 * Picks the best supported locale from an `Accept-Language` header value.
 * Entries are ranked by q-value (stable for ties) and matched on the primary
 * language subtag, so `zh-TW` and `zh-Hans` both select `zh`.
 */
export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale
  const ranked = acceptLanguage
    .split(',')
    .map((part, index) => {
      const [tag = '', ...params] = part.trim().split(';')
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='))
      const weight = q ? Number.parseFloat(q.slice(2)) : 1
      return { tag: tag.trim().toLowerCase(), weight: Number.isNaN(weight) ? 0 : weight, index }
    })
    .filter((entry) => entry.tag && entry.tag !== '*' && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index)

  for (const { tag } of ranked) {
    const primary = tag.split('-')[0]
    const match = locales.find((locale) => locale === primary)
    if (match) return match
  }
  return defaultLocale
}

export type RouteDecision =
  /** Serve the request as it is. `setCookie` records an explicit locale choice. */
  | { kind: 'next'; setCookie?: Locale }
  /** Serve another internal path without changing the URL. */
  | { kind: 'rewrite'; pathname: string }
  /** Send the browser to another URL. */
  | { kind: 'redirect'; pathname: string; status: 307 | 308; setCookie?: Locale }

/**
 * Locale routing for one request path.
 *
 * - `/zh/...`  is served as is and remembered as the visitor's choice.
 * - `/en/...`  redirects to the unprefixed path and remembers English, so the
 *   explicit choice is not undone by the browser language. When Next runs the
 *   proxy again on the rewritten `/en/...` URL, that internal request is served.
 * - anything else is unprefixed: the remembered choice wins, then
 *   `Accept-Language`; a non-default locale redirects to its prefix, the
 *   default locale is rewritten to `/en/...` internally and keeps its URL.
 */
export function routeRequest({
  pathname,
  cookie,
  acceptLanguage,
  internalRewrite = false,
}: {
  pathname: string
  cookie?: string | undefined
  acceptLanguage?: string | null | undefined
  /** True when this call is Next re-entering the proxy on a locale rewrite. */
  internalRewrite?: boolean
}): RouteDecision {
  const [, first = '', ...rest] = pathname.split('/')
  const tail = rest.length ? `/${rest.join('/')}` : ''

  if (isLocale(first)) {
    if (first === defaultLocale) {
      if (internalRewrite) return { kind: 'next' }
      return { kind: 'redirect', pathname: tail || '/', status: 308, setCookie: defaultLocale }
    }
    return cookie === first ? { kind: 'next' } : { kind: 'next', setCookie: first }
  }

  const preferred = isLocale(cookie) ? cookie : negotiateLocale(acceptLanguage)
  if (preferred === defaultLocale) {
    return { kind: 'rewrite', pathname: `/${defaultLocale}${pathname === '/' ? '' : pathname}` }
  }
  return { kind: 'redirect', pathname: localePath(preferred, pathname), status: 307 }
}
