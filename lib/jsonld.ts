import { localePath, type Locale } from './i18n/config'
import { RELEASE } from './releases'
import { links, siteUrl } from './site'

type JsonObject = Record<string, unknown>

const AUTHOR = { '@type': 'Person', name: 'cherrchen', url: 'https://github.com/cherrchen' } as const
const FREE = { '@type': 'Offer', price: '0', priceCurrency: 'USD' } as const
const DESKTOP_OS = 'macOS, Windows, Linux'
const HARNESS = { '@type': 'SoftwareApplication', name: 'DeepSeek Harness', url: links.upstream } as const

/** BreadcrumbList for the plugin and changelog pages. */
export function breadcrumbList(locale: Locale, items: readonly { path: string; name: string }[]): JsonObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: siteUrl(localePath(locale, item.path)),
    })),
  }
}

/** SoftwareApplication describing Rivetdeck itself, shown on the home page. */
export function rivetdeckApp(locale: Locale, description: string): JsonObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Rivetdeck',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: DESKTOP_OS,
    softwareVersion: RELEASE.version,
    description,
    url: siteUrl(localePath(locale, '/')),
    downloadUrl: RELEASE.url,
    license: links.rivetdeck.license,
    isBasedOn: HARNESS,
    offers: FREE,
    author: AUTHOR,
    sameAs: [links.rivetdeck.repo],
  }
}

/** SoftwareApplication describing a plugin, shown on its product page. */
export function pluginApp({
  locale,
  path,
  changelogPath,
  name,
  version,
  description,
  npm,
  repo,
}: {
  locale: Locale
  path: string
  changelogPath: string
  name: string
  version: string
  description: string
  npm: string
  repo: string
}): JsonObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: DESKTOP_OS,
    softwareVersion: version,
    description,
    url: siteUrl(localePath(locale, path)),
    downloadUrl: npm,
    installUrl: npm,
    releaseNotes: siteUrl(localePath(locale, changelogPath)),
    softwareRequirements: HARNESS,
    offers: FREE,
    author: AUTHOR,
    sameAs: [repo, npm],
  }
}
