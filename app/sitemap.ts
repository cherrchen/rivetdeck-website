import type { MetadataRoute } from 'next'
import { defaultLocale, localeConfig, localePath, locales } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site'

const PAGES = [
  { path: '/', priority: 1 },
  { path: '/plugins/multi-root-workspace', priority: 0.9 },
] as const

/** One entry per page and locale; each lists every language version so crawlers can pair them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const abs = (locale: (typeof locales)[number], path: string) => new URL(localePath(locale, path), base).toString()

  return PAGES.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: abs(locale, path),
      changeFrequency: 'weekly' as const,
      priority,
      alternates: {
        languages: {
          'x-default': abs(defaultLocale, path),
          ...Object.fromEntries(locales.map((l) => [localeConfig[l].hreflang, abs(l, path)])),
        },
      },
    })),
  )
}
