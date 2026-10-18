import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PluginChangelogPage } from '@/components/changelog/plugin-page'
import { RootsMark } from '@/components/ui/logo'
import { CHANGELOG_SOURCE_FILE, MULTI_ROOT_DOC_LINKS } from '@/lib/changelog'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { pageMetadata } from '@/lib/i18n/metadata'
import { COMPAT_PLUGIN_VERSION } from '@/lib/multi-root-compat'
import { links, MULTI_ROOT_PACKAGE } from '@/lib/site'

const PLUGIN_PATH = '/plugins/multi-root-workspace'
const PATH = `${PLUGIN_PATH}/changelog`

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/multi-root-workspace/changelog'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).multiRoot.changelog.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, siteName: 'Multi-root Workspace for DSH' })
}

export default async function MultiRootChangelogPage({ params }: PageProps<'/[lang]/plugins/multi-root-workspace/changelog'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.multiRoot
  const pluginSection = localePath(lang, PLUGIN_PATH)
  return (
    <PluginChangelogPage
      locale={lang}
      dict={dict}
      t={t}
      c={t.changelog}
      cfg={{
        pluginPath: PLUGIN_PATH,
        packageName: MULTI_ROOT_PACKAGE,
        identity: 'multi-root',
        brand: (
          <>
            <span className="text-accent">
              <RootsMark />
            </span>
            <span className="hidden min-[420px]:inline">Multi-root Workspace</span>
            <span className="min-[420px]:hidden">Multi-root</span>
          </>
        ),
        brandAria: t.brandHome,
        repo: links.multiRoot.repo,
        npm: links.multiRoot.npm,
        issues: links.multiRoot.issues,
        docs: [
          { label: t.footer.docs.readme, href: links.multiRoot.readme },
          { label: t.footer.docs.architecture, href: links.multiRoot.architecture },
        ],
        anchors: [
          { label: t.footer.plugin.features, href: `${pluginSection}#features` },
          { label: t.footer.plugin.security, href: `${pluginSection}#security` },
          { label: t.footer.plugin.install, href: `${pluginSection}#install` },
          { label: t.footer.plugin.compatibility, href: `${pluginSection}#compatibility` },
        ],
        docLinks: MULTI_ROOT_DOC_LINKS,
        sourceFile: CHANGELOG_SOURCE_FILE.multiRoot,
        latestVersion: COMPAT_PLUGIN_VERSION,
      }}
    />
  )
}
