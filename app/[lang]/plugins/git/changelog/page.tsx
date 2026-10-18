import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PluginChangelogPage } from '@/components/changelog/plugin-page'
import { JsonLd } from '@/components/json-ld'
import { GitMark } from '@/components/ui/logo'
import { CHANGELOG_SOURCE_FILE, GIT_DOC_LINKS } from '@/lib/changelog'
import { GIT_PLUGIN_VERSION } from '@/lib/git-compat'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { pageMetadata } from '@/lib/i18n/metadata'
import { breadcrumbList } from '@/lib/jsonld'
import { GIT_PACKAGE, links } from '@/lib/site'

const PLUGIN_PATH = '/plugins/git'
const PATH = `${PLUGIN_PATH}/changelog`

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/git/changelog'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).git.changelog.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, keywords: t.keywords, siteName: 'Git for DSH' })
}

export default async function GitChangelogPage({ params }: PageProps<'/[lang]/plugins/git/changelog'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.git
  const pluginSection = localePath(lang, PLUGIN_PATH)
  return (
    <>
      <JsonLd
        data={breadcrumbList(lang, [
          { path: '/', name: 'Rivetdeck' },
          { path: PLUGIN_PATH, name: 'Git' },
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
        packageName: GIT_PACKAGE,
        identity: 'git',
        brand: (
          <>
            <span className="text-accent">
              <GitMark />
            </span>
            <span>Git</span>
          </>
        ),
        brandAria: t.brandHome,
        repo: links.git.repo,
        npm: links.git.npm,
        issues: links.git.issues,
        docs: [
          { label: t.footer.docs.readme, href: links.git.readme },
          { label: t.footer.docs.architecture, href: links.git.architecture },
        ],
        anchors: [
          { label: t.footer.plugin.features, href: `${pluginSection}#features` },
          { label: t.footer.plugin.design, href: `${pluginSection}#design` },
          { label: t.footer.plugin.install, href: `${pluginSection}#install` },
          { label: t.footer.plugin.compatibility, href: `${pluginSection}#compatibility` },
        ],
        docLinks: GIT_DOC_LINKS,
        sourceFile: CHANGELOG_SOURCE_FILE.git,
        latestVersion: GIT_PLUGIN_VERSION,
      }}
    />
    </>
  )
}
