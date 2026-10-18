import { withBasePath } from '@/lib/site'
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
  const url = withBasePath(localePath(locale, path))
  const languages: Record<string, string> = { 'x-default': withBasePath(localePath(defaultLocale, path)) }
  for (const l of locales) languages[localeConfig[l].hreflang] = withBasePath(localePath(l, path))

  // build-pages.mjs exports one stable social image per page under /social/.
  const segments = path.split('/').filter(Boolean)
  const leaf = segments.at(-1)
  const socialName = path === '/' ? 'rivetdeck' : leaf === 'changelog' ? `${segments.at(-2)}-changelog` : (leaf ?? 'rivetdeck')
  const images = process.env.GITHUB_PAGES === 'true' ? [withBasePath(`/social/${socialName}.png`)] : undefined

  return {
    title,
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      ...(images ? { images } : {}),
      url,
      siteName,
      title,
      description,
      locale: localeConfig[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeConfig[l].ogLocale),
    },
    twitter: { card: 'summary_large_image', title, description, ...(images ? { images } : {}) },
  }
}
