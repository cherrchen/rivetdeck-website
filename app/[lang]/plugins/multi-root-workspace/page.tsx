import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { BeforeAfter } from '@/components/multi-root/before-after'
import { SecurityDiagram } from '@/components/multi-root/security-diagram'
import { TopologyDiagram } from '@/components/multi-root/topology-diagram'
import { CompatTable } from '@/components/plugin/compat-table'
import { FeatureRow } from '@/components/plugin/feature-row'
import { Step } from '@/components/plugin/install-step'
import { InstallTabs } from '@/components/plugin/install-tabs'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { RootsMark } from '@/components/ui/logo'
import { Code, Rich } from '@/components/ui/rich'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { pageMetadata } from '@/lib/i18n/metadata'
import { COMPAT_PLATFORMS, COMPAT_PLUGIN_VERSION, COMPAT_ROWS } from '@/lib/multi-root-compat'
import { SHOTS } from '@/lib/screenshots'
import { links, MULTI_ROOT_PACKAGE, withBasePath } from '@/lib/site'

const PATH = '/plugins/multi-root-workspace'

const INSTALL_SPEC = {
  package: MULTI_ROOT_PACKAGE,
  version: COMPAT_PLUGIN_VERSION,
  repo: 'cherrchen/dsh-plugin-multi-root-workspace',
  localPrelude: ['export CI=true'],
} as const

type PageDict = Dictionary['multiRoot']

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/multi-root-workspace'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).multiRoot.meta
  return pageMetadata({
    locale: lang,
    path: PATH,
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    siteName: 'Multi-root Workspace for DSH',
  })
}

export default async function MultiRootPage({ params }: PageProps<'/[lang]/plugins/multi-root-workspace'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.multiRoot
  const newTab = dict.common.opensInNewTab

  const nav = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.security, href: '#security' },
    { label: t.nav.install, href: '#install' },
    { label: t.nav.compatibility, href: '#compatibility' },
    { label: t.nav.github, href: links.multiRoot.repo, external: true },
    { label: t.nav.npm, href: links.multiRoot.npm, external: true },
  ]

  const footerColumns = [
    {
      title: t.footer.plugin.title,
      links: [
        { label: t.footer.plugin.features, href: '#features' },
        { label: t.footer.plugin.security, href: '#security' },
        { label: t.footer.plugin.install, href: '#install' },
        { label: t.footer.plugin.compatibility, href: '#compatibility' },
      ],
    },
    {
      title: t.footer.docs.title,
      links: [
        { label: t.footer.docs.readme, href: links.multiRoot.readme },
        { label: t.footer.docs.architecture, href: links.multiRoot.architecture },
        { label: t.footer.docs.changelog, href: links.multiRoot.changelog },
      ],
    },
    {
      title: t.footer.source.title,
      links: [
        { label: t.footer.source.repo, href: links.multiRoot.repo },
        { label: t.footer.source.npm, href: links.multiRoot.npm },
        { label: t.footer.source.issues, href: links.multiRoot.issues },
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
    <div data-identity="multi-root">
      <SiteHeader
        locale={lang}
        path={PATH}
        common={dict.common}
        brand={
          <a href={withBasePath(localePath(lang, PATH))} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label={t.brandHome}>
            <span className="text-accent">
              <RootsMark />
            </span>
            <span className="hidden min-[420px]:inline">Multi-root Workspace</span>
            <span className="min-[420px]:hidden">Multi-root</span>
          </a>
        }
        items={nav}
        cta={{ label: t.cta, href: '#install' }}
      />

      <main id="main">
        <Hero dict={dict} />
        <Problem t={t} />
        <Features dict={dict} />
        <Security dict={dict} />
        <Install dict={dict} />
        <Compatibility dict={dict} />
        <FinalCta dict={dict} />
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </div>
  )
}

function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.multiRoot.hero
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="mr-hero-title">
      <Container className="pt-20 pb-6 sm:pt-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-fg-muted">
          <a href={links.multiRoot.changelog} target="_blank" rel="noopener noreferrer" className="font-mono text-fg hover:underline hover:underline-offset-4">
            v{COMPAT_PLUGIN_VERSION}
            <span className="sr-only">
              {t.changelog}
              {newTab}
            </span>
          </a>
          <span>MIT · npm · macOS · Linux</span>
        </div>
        <h1 id="mr-hero-title" className="mt-6 max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
          {t.titleLine1}
          <br />
          <span className="text-fg-subtle">{t.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-fg-muted">{t.lead}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.multiRoot.architecture} variant="secondary" newTab={newTab}>
            {t.architecture}
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
        <TopologyDiagram t={dict.multiRoot.topology} />
      </Container>
    </section>
  )
}

function Problem({ t }: { t: PageDict }) {
  return (
    <Section id="problem" eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.lead}>
      <BeforeAfter t={t.problem} />
    </Section>
  )
}

function Features({ dict }: { dict: Dictionary }) {
  const t = dict.multiRoot.features
  const [listComment, manageComment] = t.management.commands
  const commands = [
    listComment ?? '',
    '/workspace-folders',
    manageComment ?? '',
    '/workspace-folders add ~/code/another-repo',
    '/workspace-folders alias 1 payments',
    '/workspace-folders reveal 1',
    '/workspace-folders remove 1',
  ]

  return (
    <Section id="features" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <div className="space-y-20">
        <FeatureRow
          kicker={t.roots.kicker}
          title={t.roots.title}
          body={t.roots.body}
          points={t.roots.points}
          visual={
            // Match the dialog's 40px corners at 1280 × 944 without cropping its content.
            <Frame caption={t.roots.caption} borderRadius="3.125% / 4.2373%">
              <Screenshot shot={SHOTS.foldersDialog} alt={dict.shots.foldersDialog} sizes="(min-width: 1400px) 640px, 100vw" />
            </Frame>
          }
        />

        <FeatureRow reverse kicker={t.tools.kicker} title={t.tools.title} body={t.tools.body} points={t.tools.points} visual={<ToolsVisual t={t.tools} />} />

        <FeatureRow
          kicker={t.management.kicker}
          title={t.management.title}
          body={t.management.body}
          points={t.management.points}
          visual={
            <CodeBlock
              title={t.management.codeTitle}
              prompt=""
              lines={commands}
              copyText={commands.filter((line) => !line.startsWith('#')).join('\n')}
              copy={dict.common.copy}
            />
          }
        />

        <CrossRepo t={t.crossRepo} />

        <InstructionsFeature t={t.instructions} />
      </div>
    </Section>
  )
}

function ToolsVisual({ t }: { t: PageDict['features']['tools'] }) {
  const kept = ['read', 'write', 'edit', 'bash', 'terminal']
  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="text-xs font-medium text-fg-subtle">{t.unchanged}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {kept.map((tool) => (
          <li key={tool} className="rounded-md border border-border-strong bg-bg-subtle px-3 py-1.5 font-mono text-sm">
            {tool}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs font-medium text-fg-subtle">{t.notAdded}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li className="rounded-md border border-dashed border-border-strong px-3 py-1.5 font-mono text-sm text-fg-subtle line-through decoration-fg-subtle">workspace_*</li>
      </ul>
      <p className="mt-6 text-xs font-medium text-fg-subtle">{t.widened}</p>
      <p className="mt-3 rounded-md border border-accent bg-accent-soft px-3 py-2.5 text-sm">{t.question}</p>
    </div>
  )
}

function CrossRepo({ t }: { t: PageDict['features']['crossRepo'] }) {
  return (
    <div>
      <p className="text-sm text-fg-subtle">{t.kicker}</p>
      <h3 className="mt-3 max-w-2xl text-2xl font-medium tracking-[-0.03em] text-balance sm:text-3xl">{t.title}</h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-fg-muted">{t.body}</p>
      <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <li key={step.title} className="bg-surface p-5">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-accent font-mono text-xs text-accent">{i + 1}</span>
            <h4 className="mt-4 font-medium">{step.title}</h4>
            <p className="mt-1.5 text-sm leading-6 text-fg-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function InstructionsFeature({ t }: { t: PageDict['features']['instructions'] }) {
  const roots = [
    { name: 'web', file: 'AGENTS.md', note: t.notes.primary },
    { name: 'api', file: 'AGENTS.md', note: t.notes.additional },
    { name: 'design-system', file: 'CLAUDE.md', note: t.notes.additional },
  ]
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="text-sm text-fg-subtle">{t.kicker}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-balance sm:text-3xl">{t.title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-fg-muted">{t.body}</p>
        <figure className="mt-6 rounded-xl border border-border bg-surface p-5" aria-label={t.figure}>
          <ul className="space-y-2.5">
            {roots.map((root, i) => (
              <li key={`${root.name}-${i}`} className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border bg-bg-subtle px-3 py-2">
                <span className="font-mono text-sm">
                  {root.name}/<span className="text-accent">{root.file}</span>
                </span>
                <span className="text-xs text-fg-subtle">{root.note}</span>
              </li>
            ))}
          </ul>
          <figcaption className="mt-3 text-xs text-fg-subtle">{t.exampleRoots}</figcaption>
        </figure>
      </div>
      <div className="rounded-xl border border-border bg-surface p-6">
        <h4 className="font-medium">{t.limitsTitle}</h4>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-fg-muted marker:text-accent">
          {t.limits.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Security({ dict }: { dict: Dictionary }) {
  const t = dict.multiRoot.security
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="security" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <SecurityDiagram t={t.diagram} />
      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {t.controls.map((control, i) => (
          <li key={control.title} className="bg-surface p-5">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-medium">{control.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{control.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-border bg-bg-subtle p-5 sm:p-6">
        <h3 className="font-medium">{t.limits.title}</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
          {t.limits.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={links.multiRoot.architecture} variant="secondary" newTab={newTab}>
            {t.limits.architecture}
          </ButtonLink>
          <ButtonLink href={links.multiRoot.adr.dialect} variant="ghost" newTab={newTab}>
            {t.limits.dialect}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

function Install({ dict }: { dict: Dictionary }) {
  const t = dict.multiRoot.install
  const newTab = dict.common.opensInNewTab
  const code = { code: (c: string) => <Code>{c}</Code> }
  return (
    <Section id="install" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <ol className="space-y-10">
        <Step n="1" title={t.step1.title} body={t.step1.body}>
          <InstallTabs spec={INSTALL_SPEC} t={t.tabs} copy={dict.common.copy} />
        </Step>
        <Step n="2" title={t.step2.title} body={<Rich text={t.step2.body} tags={code} />}>
          <CodeBlock title="pnpm-workspace.yaml" prompt="" lines={['allowBuilds:', '  koffi: true']} copyText={'allowBuilds:\n  koffi: true'} copy={dict.common.copy} />
        </Step>
        <Step n="3" title={t.step3.title} body={t.step3.body}>
          <CodeBlock
            title={dict.multiRoot.features.management.codeTitle}
            prompt=""
            lines={['/workspace-folders add ~/code/another-repo', '/workspace-folders']}
            copyText="/workspace-folders add ~/code/another-repo"
            copy={dict.common.copy}
          />
          <p className="mt-3 text-sm text-fg-subtle">{t.step3.note}</p>
        </Step>
      </ol>

      <div className="mt-12 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-fg-muted sm:p-6">
        <h3 className="font-medium text-fg">{t.other.title}</h3>
        <ul className="mt-3 space-y-2">
          <li>
            <Rich
              text={t.other.tarball}
              tags={{
                ...code,
                readme: (c) => (
                  <a className="text-fg underline underline-offset-2" href={`${links.multiRoot.readme}#installation`} target="_blank" rel="noopener noreferrer">
                    {c}
                    <span className="sr-only">{newTab}</span>
                  </a>
                ),
              }}
            />
          </li>
          <li>
            <Rich text={t.other.source} tags={code} />
          </li>
          <li>{t.other.rivetdeck}</li>
        </ul>
      </div>
    </Section>
  )
}

function Compatibility({ dict }: { dict: Dictionary }) {
  const t = dict.multiRoot.compat
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="compatibility" eyebrow={t.eyebrow} title={t.title} lead={fmt(t.lead, { version: COMPAT_PLUGIN_VERSION })}>
      <CompatTable t={t} rows={COMPAT_ROWS} platforms={COMPAT_PLATFORMS} version={COMPAT_PLUGIN_VERSION} />
      <p className="mt-6 text-sm leading-6 text-pretty break-keep text-fg-subtle">
        <Rich
          text={t.footnote}
          tags={{
            contract: (c) => (
              <a className="whitespace-nowrap text-fg underline underline-offset-2" href={links.multiRoot.adr.compat} target="_blank" rel="noopener noreferrer">
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
  const t = dict.multiRoot.finalCta
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="mr-cta-title" className="py-24 sm:py-32">
      <Container className="text-center">
        <h2 id="mr-cta-title" className="mx-auto max-w-2xl text-[32px] leading-[1.08] font-medium tracking-[-0.04em] text-balance sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fg-muted">{t.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.multiRoot.repo} variant="secondary" newTab={newTab}>
            {t.github}
          </ButtonLink>
          <ButtonLink href={links.multiRoot.npm} variant="ghost" newTab={newTab}>
            {MULTI_ROOT_PACKAGE} ↗
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
