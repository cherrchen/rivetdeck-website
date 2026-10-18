import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PluginChangelogPage } from '@/components/changelog/plugin-page'
import { JsonLd } from '@/components/json-ld'
import { PaletteMark } from '@/components/ui/logo'
import { CHANGELOG_SOURCE_FILE, THEME_STUDIO_DOC_LINKS } from '@/lib/changelog'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { pageMetadata } from '@/lib/i18n/metadata'
import { breadcrumbList } from '@/lib/jsonld'
import { links, THEME_STUDIO_PACKAGE } from '@/lib/site'
import { THEME_STUDIO_PLUGIN_VERSION } from '@/lib/theme-studio-compat'

const PLUGIN_PATH = '/plugins/theme-studio'
const PATH = `${PLUGIN_PATH}/changelog`

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/theme-studio/changelog'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).themeStudio.changelog.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, keywords: t.keywords, siteName: 'Theme Studio for DSH' })
}

export default async function ThemeStudioChangelogPage({ params }: PageProps<'/[lang]/plugins/theme-studio/changelog'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.themeStudio
  const pluginSection = localePath(lang, PLUGIN_PATH)
  return (
    <>
      <JsonLd
        data={breadcrumbList(lang, [
          { path: '/', name: 'Rivetdeck' },
          { path: PLUGIN_PATH, name: 'Theme Studio' },
          { path: PATH, name: t.nav.changelog },
        ])}
      />
      <PluginChangelogPage
      locale={lang}
      dict={dict}
      t={t}
      c={t.changelog}
      cfg={{
        pluginPath: PLUGIN_PATH,
        packageName: THEME_STUDIO_PACKAGE,
        identity: 'theme-studio',
        brand: (
          <>
            <span className="text-accent">
              <PaletteMark />
            </span>
            <span>Theme Studio</span>
          </>
        ),
        brandAria: t.brandHome,
        repo: links.themeStudio.repo,
        npm: links.themeStudio.npm,
        issues: links.themeStudio.issues,
        docs: [
          { label: t.footer.docs.readme, href: links.themeStudio.readme },
          { label: t.footer.docs.tokens, href: links.themeStudio.tokens },
        ],
        anchors: [
          { label: t.footer.plugin.features, href: `${pluginSection}#features` },
          { label: t.footer.plugin.palettes, href: `${pluginSection}#palettes` },
          { label: t.footer.plugin.install, href: `${pluginSection}#install` },
          { label: t.footer.plugin.compatibility, href: `${pluginSection}#compatibility` },
        ],
        docLinks: THEME_STUDIO_DOC_LINKS,
        sourceFile: CHANGELOG_SOURCE_FILE.themeStudio,
        latestVersion: THEME_STUDIO_PLUGIN_VERSION,
      }}
    />
    </>
  )
}
