import type { ReactNode } from 'react'
import { ChangelogReleases } from '@/components/changelog/releases'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Container } from '@/components/ui/container'
import { blobUrl, type ChangelogRelease, type DocLinks } from '@/lib/changelog'
import { localePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { links, withBasePath } from '@/lib/site'

/** The plugin dictionary keys the changelog shell consumes (all three plugin pages share them). */
export interface PluginShellDict {
  nav: { github: string; npm: string }
  brandHome: string
  cta: string
  footer: {
    plugin: { title: string } & Record<string, string>
    docs: { title: string; changelog: string } & Record<string, string>
    source: { title: string; repo: string; npm: string; issues: string }
    plugins: { title: string; git: string; themeStudio: string; multiRoot: string }
    ecosystem: { title: string; rivetdeck: string; harness: string }
    note: string
  }
}

/** The `changelog` subtree of a plugin dictionary entry. */
export interface PluginChangelogCopy {
  meta: { title: string; description: string }
  nav: { plugin: string }
  title: string
  lead: string
  metaLine: string
  latest: string
  compare: string
  releaseNotes: string
  kinds: Record<string, string>
  releases: readonly ChangelogRelease[]
}

/** Everything a plugin changelog page needs that cannot live in the dictionary. */
export interface PluginChangelogConfig {
  /** Route of the introduction page, e.g. `/plugins/git`. */
  pluginPath: string
  /** npm package shown in the hero line. */
  packageName: string
  /** Brand row of the header: mark + label; links back to the plugin page. */
  brand: ReactNode
  /** aria-label of the brand link. */
  brandAria: string
  /** Page-level accent identity (`data-identity`). */
  identity: string
  repo: string
  npm: string
  issues: string
  /** External doc links of the footer Docs column (README/architecture/tokens). */
  docs: readonly { label: string; href: string }[]
  /** Footer "Plugin" column: section anchors on the introduction page. */
  anchors: readonly { label: string; href: string }[]
  /** `<tag>` → repo-relative doc path map used inside items. */
  docLinks?: DocLinks
  /** Repository changelog file per locale (see `CHANGELOG_SOURCE_FILE`). */
  sourceFile: Record<Locale, string>
  /** Latest published version; pins the source-file link. */
  latestVersion: string
}

/**
 * Scaffold of a plugin `/changelog` route: header with the back link, a hero
 * with package + source-file actions, the release list and the standard footer.
 */
export function PluginChangelogPage({
  locale: lang,
  dict,
  t,
  c,
  cfg,
}: {
  locale: Locale
  dict: Dictionary
  t: PluginShellDict
  c: PluginChangelogCopy
  cfg: PluginChangelogConfig
}) {
  const newTab = dict.common.opensInNewTab
  const pluginPath = withBasePath(localePath(lang, cfg.pluginPath))
  const releases = c.releases
  const sourceFile = cfg.sourceFile[lang]

  const nav = [
    { label: c.nav.plugin, href: pluginPath },
    { label: t.nav.github, href: cfg.repo, external: true },
    { label: t.nav.npm, href: cfg.npm, external: true },
  ]

  const footerColumns = [
    { title: t.footer.plugin.title, links: cfg.anchors },
    {
      title: t.footer.docs.title,
      links: [...cfg.docs, { label: t.footer.docs.changelog, href: localePath(lang, `${cfg.pluginPath}/changelog`) }],
    },
    {
      title: t.footer.source.title,
      links: [
        { label: t.footer.source.repo, href: cfg.repo },
        { label: t.footer.source.npm, href: cfg.npm },
        { label: t.footer.source.issues, href: cfg.issues },
      ],
    },
    {
      title: t.footer.plugins.title,
      links: [
        { label: t.footer.plugins.git, href: localePath(lang, '/plugins/git') },
        { label: t.footer.plugins.themeStudio, href: localePath(lang, '/plugins/theme-studio') },
        { label: t.footer.plugins.multiRoot, href: localePath(lang, '/plugins/multi-root-workspace') },
      ],
    },
    {
      title: t.footer.ecosystem.title,
      links: [
        { label: t.footer.ecosystem.rivetdeck, href: localePath(lang, '/') },
        { label: t.footer.ecosystem.harness, href: links.upstream },
      ],
    },
  ]

  return (
    <div data-identity={cfg.identity}>
      <SiteHeader
        locale={lang}
        path={`${cfg.pluginPath}/changelog`}
        common={dict.common}
        brand={
          <a href={pluginPath} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label={cfg.brandAria}>
            {cfg.brand}
          </a>
        }
        items={nav}
        cta={{ label: t.cta, href: `${pluginPath}#install` }}
      />

      <main id="main">
        <section aria-labelledby="cl-hero-title">
          <Container className="pt-20 pb-12 sm:pt-28">
            <h1 id="cl-hero-title" className="max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
              {c.title}
            </h1>
            <a
              href={blobUrl(cfg.repo, `v${cfg.latestVersion}`, sourceFile)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 font-mono text-[13px] text-fg-muted transition-colors hover:text-fg"
            >
              {cfg.packageName}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">{newTab}</span>
            </a>
          </Container>
        </section>

        <Container className="pb-24">
          <ChangelogReleases releases={releases} repo={cfg.repo} docs={cfg.docLinks} locale={lang} newTab={newTab} t={c} />
        </Container>
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </div>
  )
}
