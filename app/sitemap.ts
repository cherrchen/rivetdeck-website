import type { MetadataRoute } from 'next'
import { defaultLocale, localeConfig, localePath, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { RELEASE } from '@/lib/releases'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

const en = getDictionary(defaultLocale)
const gitLatest = en.git.changelog.releases.at(0)?.date
const themeStudioLatest = en.themeStudio.changelog.releases.at(0)?.date
const multiRootLatest = en.multiRoot.changelog.releases.at(0)?.date

const PAGES = [
  { path: '/', priority: 1, lastModified: RELEASE.publishedAt },
  { path: '/plugins/git', priority: 0.9, lastModified: gitLatest },
  { path: '/plugins/theme-studio', priority: 0.9, lastModified: themeStudioLatest },
  { path: '/plugins/multi-root-workspace', priority: 0.9, lastModified: multiRootLatest },
  { path: '/plugins/git/changelog', priority: 0.6, lastModified: gitLatest },
  { path: '/plugins/theme-studio/changelog', priority: 0.6, lastModified: themeStudioLatest },
  { path: '/plugins/multi-root-workspace/changelog', priority: 0.6, lastModified: multiRootLatest },
] as const

/** One entry per page and locale; each lists every language version so crawlers can pair them. */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (locale: (typeof locales)[number], path: string) => siteUrl(localePath(locale, path))

  return PAGES.flatMap(({ path, priority, lastModified }) =>
    locales.map((locale) => ({
      url: abs(locale, path),
      lastModified,
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
