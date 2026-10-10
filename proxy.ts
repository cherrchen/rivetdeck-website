import { NextResponse, type NextRequest } from 'next/server'
import { LOCALE_COOKIE } from '@/lib/i18n/config'
import { routeRequest } from '@/lib/i18n/routing'

const ONE_YEAR = 60 * 60 * 24 * 365

/**
 * Marks the request Next issues when it follows a locale rewrite, so the second
 * proxy pass serves `/en/...`.
 */
const LOCALE_REWRITE = 'x-rivetdeck-locale-rewrite'

/**
 * Locale routing. English is served at the unprefixed URLs and other locales
 * under their prefix; see `routeRequest` for the rules. Responses depend on the
 * language header and the choice cookie, so they say so in `Vary`.
 */
export function proxy(request: NextRequest) {
  const decision = routeRequest({
    pathname: request.nextUrl.pathname,
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    acceptLanguage: request.headers.get('accept-language'),
    internalRewrite: request.headers.get(LOCALE_REWRITE) === '1',
  })

  let response: NextResponse
  if (decision.kind === 'rewrite') {
    const url = request.nextUrl.clone()
    url.pathname = decision.pathname
    const headers = new Headers(request.headers)
    headers.set(LOCALE_REWRITE, '1')
    response = NextResponse.rewrite(url, { request: { headers } })
  } else if (decision.kind === 'redirect') {
    const url = request.nextUrl.clone()
    url.pathname = decision.pathname
    response = NextResponse.redirect(url, decision.status)
  } else {
    response = NextResponse.next()
  }

  if (decision.kind !== 'rewrite' && decision.setCookie) {
    response.cookies.set(LOCALE_COOKIE, decision.setCookie, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' })
  }
  response.headers.append('Vary', 'Accept-Language, Cookie')
  return response
}

export const config = {
  // Skip internals, files with an extension and the generated social images,
  // whose URLs carry their own locale prefix.
  matcher: ['/((?!_next|api|.*\\..*|.*opengraph-image).*)'],
}
