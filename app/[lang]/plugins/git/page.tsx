import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { CompatTable } from '@/components/plugin/compat-table'
import { FeatureRow } from '@/components/plugin/feature-row'
import { Step } from '@/components/plugin/install-step'
import { InstallTabs } from '@/components/plugin/install-tabs'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { GitMark } from '@/components/ui/logo'
import { Code, Rich } from '@/components/ui/rich'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { pageMetadata } from '@/lib/i18n/metadata'
import { GIT_COMPAT_PLATFORMS, GIT_COMPAT_ROWS, GIT_PLUGIN_VERSION } from '@/lib/git-compat'
import { SHOTS } from '@/lib/screenshots'
import { GIT_PACKAGE, links, withBasePath } from '@/lib/site'

const PATH = '/plugins/git'

const INSTALL_SPEC = {
  package: GIT_PACKAGE,
  version: GIT_PLUGIN_VERSION,
  repo: 'cherrchen/dsh-plugin-git',
} as const

type PageDict = Dictionary['git']

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/git'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).git.meta
  return pageMetadata({
    locale: lang,
    path: PATH,
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    siteName: 'Git for DSH',
  })
}

export default async function GitPage({ params }: PageProps<'/[lang]/plugins/git'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.git
  const newTab = dict.common.opensInNewTab

  const nav = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.design, href: '#design' },
    { label: t.nav.install, href: '#install' },
    { label: t.nav.compatibility, href: '#compatibility' },
    { label: t.nav.github, href: links.git.repo, external: true },
    { label: t.nav.npm, href: links.git.npm, external: true },
  ]

  const footerColumns = [
    {
      title: t.footer.plugin.title,
      links: [
        { label: t.footer.plugin.features, href: '#features' },
        { label: t.footer.plugin.design, href: '#design' },
        { label: t.footer.plugin.install, href: '#install' },
        { label: t.footer.plugin.compatibility, href: '#compatibility' },
      ],
    },
    {
      title: t.footer.docs.title,
      links: [
        { label: t.footer.docs.readme, href: links.git.readme },
        { label: t.footer.docs.architecture, href: links.git.architecture },
        { label: t.footer.docs.changelog, href: links.git.changelog },
      ],
    },
    {
      title: t.footer.source.title,
      links: [
        { label: t.footer.source.repo, href: links.git.repo },
        { label: t.footer.source.npm, href: links.git.npm },
        { label: t.footer.source.issues, href: links.git.issues },
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
    <div data-identity="git">
      <SiteHeader
        locale={lang}
        path={PATH}
        common={dict.common}
        brand={
          <a href={withBasePath(localePath(lang, PATH))} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label={t.brandHome}>
            <span className="text-accent">
              <GitMark />
            </span>
            <span>Git</span>
          </a>
        }
        items={nav}
        cta={{ label: t.cta, href: '#install' }}
      />

      <main id="main">
        <Hero dict={dict} />
        <Features dict={dict} />
        <Design dict={dict} />
        <Install dict={dict} />
        <Compatibility dict={dict} />
        <FinalCta dict={dict} />
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </div>
  )
}

function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.git.hero
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="git-hero-title">
      <Container className="pt-20 pb-6 sm:pt-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-fg-muted">
          <a href={links.git.changelog} target="_blank" rel="noopener noreferrer" className="font-mono text-fg hover:underline hover:underline-offset-4">
            v{GIT_PLUGIN_VERSION}
            <span className="sr-only">
              {t.changelog}
              {newTab}
            </span>
          </a>
          <span>MIT · npm · macOS · Linux · Windows</span>
        </div>
        <h1 id="git-hero-title" className="mt-6 max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
          {t.titleLine1}
          <br />
          <span className="text-fg-subtle">{t.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-fg-muted">{t.lead}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.git.readme} variant="secondary" newTab={newTab}>
            {t.readme}
          </ButtonLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          {t.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-fg-subtle" />
              {bullet}
            </li>
          ))}
        </ul>
      </Container>
      <Container className="pt-8 pb-20">
        <Frame caption={t.shotCaption}>
          <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} sizes="(min-width: 1400px) 1336px, 100vw" />
        </Frame>
      </Container>
    </section>
  )
}

function Features({ dict }: { dict: Dictionary }) {
  const t = dict.git.features
  return (
    <Section id="features" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <div className="space-y-20">
        <FeatureRow
          kicker={t.changes.kicker}
          title={t.changes.title}
          body={t.changes.body}
          points={t.changes.points}
          visual={
            <Frame caption={t.changes.caption}>
              <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} crop="aspect-[16/11] object-cover object-right-top" sizes="(min-width: 1400px) 640px, 100vw" />
            </Frame>
          }
        />

        <FeatureRow reverse kicker={t.diff.kicker} title={t.diff.title} body={t.diff.body} points={t.diff.points} visual={<DiffVisual t={t.diff} />} />

        <FeatureRow kicker={t.graph.kicker} title={t.graph.title} body={t.graph.body} points={t.graph.points} visual={<GraphVisual t={t.graph} />} />

        <FeatureRow reverse kicker={t.composer.kicker} title={t.composer.title} body={t.composer.body} points={t.composer.points} visual={<ComposerVisual t={t.composer} />} />

        <FeatureRow
          kicker={t.generation.kicker}
          title={t.generation.title}
          body={t.generation.body}
          points={t.generation.points}
          visual={
            <CodeBlock
              title={t.generation.configTitle}
              prompt=""
              lines={['plugins:', `  - entry: ${GIT_PACKAGE}`, '    config:', '      commitMessage:', '        mode: custom', '        provider: anthropic', '        model: claude-haiku-4-5']}
              copyText={`plugins:\n  - entry: ${GIT_PACKAGE}\n    config:\n      commitMessage:\n        mode: custom\n        provider: anthropic\n        model: claude-haiku-4-5`}
              copy={dict.common.copy}
            />
          }
        />
      </div>
    </Section>
  )
}

function DiffVisual({ t }: { t: PageDict['features']['diff'] }) {
  const rows = [
    { address: 'dsh-resource://git/diff/src%2Fcart.tsx/staged', label: t.addressStaged },
    { address: 'dsh-resource://git/diff/src%2Fcart.tsx/worktree', label: t.addressWorktree },
  ]
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <p className="border-b border-border px-5 py-3 text-xs font-medium text-fg-subtle">{t.addressesTitle}</p>
      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li key={row.address} className="px-5 py-4">
            <code className="block break-all font-mono text-[13px] text-fg">{row.address}</code>
            <p className="mt-1.5 text-xs font-medium text-accent">{row.label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GraphVisual({ t }: { t: PageDict['features']['graph'] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <span className="font-mono text-[13px] font-medium">main</span>
        <div className="ml-auto flex gap-1.5">
          {['Auto', 'All', 'First-parent'].map((scope, i) => (
            <span key={scope} className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${i === 0 ? 'bg-accent text-accent-soft' : 'bg-bg-subtle text-fg-subtle'}`}>
              {scope}
            </span>
          ))}
        </div>
      </div>
      <ul className="divide-y divide-border/70">
        {t.mock.map((commit) => (
          <li key={commit.subject} className="flex items-center gap-3 px-5 py-3">
            <svg width="16" height="20" viewBox="0 0 16 20" className="shrink-0" aria-hidden="true">
              <line x1="8" y1="0" x2="8" y2="20" stroke="var(--border-strong)" strokeWidth="2" />
              {commit.lane === 'merge' ? <path d="M4 20 Q4 10 8 10" stroke="var(--accent)" strokeWidth="2" fill="none" /> : null}
              <circle cx="8" cy="10" r="4" fill={commit.lane === 'merge' ? 'var(--accent)' : 'var(--fg-subtle)'} stroke="var(--surface)" strokeWidth="1.5" />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium">{commit.subject}</p>
              <p className="text-xs text-fg-subtle">{commit.meta}</p>
            </div>
            {commit.refs ? <span className="shrink-0 rounded-md bg-accent-soft px-1.5 py-0.5 font-mono text-[11px] font-medium text-accent">{commit.refs}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ComposerVisual({ t }: { t: PageDict['features']['composer'] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="rounded-lg border border-border bg-bg-subtle p-3.5">
        <p className="pb-3 text-[13px] text-fg-subtle">{t.mock.placeholder}</p>
        <div className="flex items-center gap-2 border-t border-border pt-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-accent-soft px-2 py-1 text-[11px] font-medium text-accent">
            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 3v12" />
              <path d="M18 9a3 3 0 0 0-3-3H6" />
              <circle cx="6" cy="18" r="2.4" />
              <circle cx="18" cy="9" r="0.5" fill="currentColor" />
            </svg>
            {t.mock.branch}
          </span>
          <span className="rounded-md bg-bg-muted px-2 py-1 text-[11px] font-medium text-fg-subtle">{t.mock.changes}</span>
        </div>
      </div>
    </div>
  )
}

function Design({ dict }: { dict: Dictionary }) {
  const t = dict.git.design
  return (
    <Section id="design" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {t.controls.map((control, i) => (
          <li key={control.title} className="bg-surface p-5">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-medium">{control.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{control.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Install({ dict }: { dict: Dictionary }) {
  const t = dict.git.install
  const code = { code: (c: string) => <Code>{c}</Code> }
  return (
    <Section id="install" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <ol className="space-y-10">
        <Step n="1" title={t.step1.title} body={t.step1.body}>
          <InstallTabs spec={INSTALL_SPEC} t={t.tabs} copy={dict.common.copy} />
        </Step>
        <Step n="2" title={t.step2.title} body={<Rich text={t.step2.body} tags={code} />}>
          <CodeBlock
            title="pnpm-workspace.yaml"
            prompt=""
            lines={['allowBuilds:', `  '${GIT_PACKAGE}@git+https://github.com/cherrchen/dsh-plugin-git#v${GIT_PLUGIN_VERSION}': true`]}
            copyText={`allowBuilds:\n  '${GIT_PACKAGE}@git+https://github.com/cherrchen/dsh-plugin-git#v${GIT_PLUGIN_VERSION}': true`}
            copy={dict.common.copy}
          />
        </Step>
        <Step n="3" title={t.step3.title} body={t.step3.body}>
          <div className="rounded-xl border border-ok/40 bg-surface p-5">
            <p className="text-sm leading-6 text-fg-muted">{t.step3.note}</p>
          </div>
        </Step>
      </ol>

      <div className="mt-12 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-fg-muted sm:p-6">
        <h3 className="font-medium text-fg">{t.other.title}</h3>
        <ul className="mt-3 space-y-2">
          <li>{t.other.preinstalled}</li>
          <li>
            <Rich text={t.other.desktop} tags={code} />
          </li>
          <li>
            <Rich text={t.other.source} tags={code} />
          </li>
        </ul>
      </div>
    </Section>
  )
}

function Compatibility({ dict }: { dict: Dictionary }) {
  const t = dict.git.compat
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="compatibility" eyebrow={t.eyebrow} title={t.title} lead={fmt(t.lead, { version: GIT_PLUGIN_VERSION })}>
      <CompatTable t={t} rows={GIT_COMPAT_ROWS} platforms={GIT_COMPAT_PLATFORMS} version={GIT_PLUGIN_VERSION} />
      <p className="mt-6 text-sm leading-6 text-pretty break-keep text-fg-subtle">
        <Rich
          text={t.footnote}
          tags={{
            contract: (c) => (
              <a className="whitespace-nowrap text-fg underline underline-offset-2" href={links.git.compatDoc} target="_blank" rel="noopener noreferrer">
                {c}
                <span className="sr-only">{newTab}</span>
              </a>
            ),
          }}
        />
      </p>
    </Section>
  )
}

function FinalCta({ dict }: { dict: Dictionary }) {
  const t = dict.git.finalCta
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="git-cta-title" className="py-24 sm:py-32">
      <Container className="text-center">
        <h2 id="git-cta-title" className="mx-auto max-w-2xl text-[32px] leading-[1.08] font-medium tracking-[-0.04em] text-balance sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fg-muted">{t.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.git.repo} variant="secondary" newTab={newTab}>
            {t.github}
          </ButtonLink>
          <ButtonLink href={links.git.npm} variant="ghost" newTab={newTab}>
            {GIT_PACKAGE} ↗
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
