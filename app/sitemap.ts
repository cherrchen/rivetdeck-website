import type { MetadataRoute } from 'next'
import { defaultLocale, localeConfig, localePath, locales } from '@/lib/i18n/config'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

const PAGES = [
  { path: '/', priority: 1 },
  { path: '/plugins/git', priority: 0.9 },
  { path: '/plugins/theme-studio', priority: 0.9 },
  { path: '/plugins/multi-root-workspace', priority: 0.9 },
  { path: '/plugins/git/changelog', priority: 0.6 },
  { path: '/plugins/theme-studio/changelog', priority: 0.6 },
  { path: '/plugins/multi-root-workspace/changelog', priority: 0.6 },
] as const

/** One entry per page and locale; each lists every language version so crawlers can pair them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (locale: (typeof locales)[number], path: string) => siteUrl(localePath(locale, path))

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
