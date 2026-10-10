import type { Metadata } from 'next'
import { defaultLocale, localeConfig, localePath, locales, type Locale } from './config'

/**
 * Metadata shared by every localized page: a canonical URL in the page's own
 * locale, `hreflang` alternates for all locales (with `x-default` pointing at
 * the default locale), and Open Graph / Twitter cards.
 *
 * @param path Unprefixed path such as `/` or `/plugins/multi-root-workspace`.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  siteName,
  keywords,
}: {
  locale: Locale
  path: string
  title: string
  description: string
  siteName: string
  keywords?: readonly string[]
}): Metadata {
  const url = localePath(locale, path)
  const languages: Record<string, string> = { 'x-default': localePath(defaultLocale, path) }
  for (const l of locales) languages[localeConfig[l].hreflang] = localePath(l, path)

  return {
    title,
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      url,
      siteName,
      title,
      description,
      locale: localeConfig[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeConfig[l].ogLocale),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
