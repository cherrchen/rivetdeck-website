import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemePreview } from '@/components/home/theme-preview'
import { CompatTable } from '@/components/plugin/compat-table'
import { FeatureRow } from '@/components/plugin/feature-row'
import { Step } from '@/components/plugin/install-step'
import { InstallTabs } from '@/components/plugin/install-tabs'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { PaletteMark } from '@/components/ui/logo'
import { Code, Rich } from '@/components/ui/rich'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { pageMetadata } from '@/lib/i18n/metadata'
import { THEME_STUDIO_COMPAT_ROWS, THEME_STUDIO_PLUGIN_VERSION } from '@/lib/theme-studio-compat'
import { SHOTS } from '@/lib/screenshots'
import { links, THEME_STUDIO_PACKAGE, withBasePath } from '@/lib/site'
import { THEMES } from '@/lib/themes'

const PATH = '/plugins/theme-studio'

const INSTALL_SPEC = {
  package: THEME_STUDIO_PACKAGE,
  version: THEME_STUDIO_PLUGIN_VERSION,
  repo: 'cherrchen/dsh-theme-studio',
  installCommand: 'pnpm install --frozen-lockfile',
} as const

type PageDict = Dictionary['themeStudio']

export async function generateMetadata({ params }: PageProps<'/[lang]/plugins/theme-studio'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).themeStudio.meta
  return pageMetadata({
    locale: lang,
    path: PATH,
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    siteName: 'Theme Studio for DSH',
  })
}

export default async function ThemeStudioPage({ params }: PageProps<'/[lang]/plugins/theme-studio'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.themeStudio
  const newTab = dict.common.opensInNewTab

  const nav = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.palettes, href: '#palettes' },
    { label: t.nav.install, href: '#install' },
    { label: t.nav.compatibility, href: '#compatibility' },
    { label: t.nav.github, href: links.themeStudio.repo, external: true },
    { label: t.nav.npm, href: links.themeStudio.npm, external: true },
  ]

  const footerColumns = [
    {
      title: t.footer.plugin.title,
      links: [
        { label: t.footer.plugin.features, href: '#features' },
        { label: t.footer.plugin.palettes, href: '#palettes' },
        { label: t.footer.plugin.install, href: '#install' },
        { label: t.footer.plugin.compatibility, href: '#compatibility' },
      ],
    },
    {
      title: t.footer.docs.title,
      links: [
        { label: t.footer.docs.readme, href: links.themeStudio.readme },
        { label: t.footer.docs.tokens, href: links.themeStudio.tokens },
        { label: t.footer.docs.changelog, href: links.themeStudio.changelog },
      ],
    },
    {
      title: t.footer.source.title,
      links: [
        { label: t.footer.source.repo, href: links.themeStudio.repo },
        { label: t.footer.source.npm, href: links.themeStudio.npm },
        { label: t.footer.source.issues, href: links.themeStudio.issues },
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
    <div data-identity="theme-studio">
      <SiteHeader
        locale={lang}
        path={PATH}
        common={dict.common}
        brand={
          <a href={withBasePath(localePath(lang, PATH))} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label={t.brandHome}>
            <span className="text-accent">
              <PaletteMark />
            </span>
            <span>Theme Studio</span>
          </a>
        }
        items={nav}
        cta={{ label: t.cta, href: '#install' }}
      />

      <main id="main">
        <Hero dict={dict} />
        <Features dict={dict} />
        <Install dict={dict} />
        <Compatibility dict={dict} />
        <FinalCta dict={dict} />
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </div>
  )
}

function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.themeStudio.hero
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="ts-hero-title">
      <Container className="pt-20 pb-6 sm:pt-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-fg-muted">
          <a href={links.themeStudio.changelog} target="_blank" rel="noopener noreferrer" className="font-mono text-fg hover:underline hover:underline-offset-4">
            v{THEME_STUDIO_PLUGIN_VERSION}
            <span className="sr-only">
              {t.changelog}
              {newTab}
            </span>
          </a>
          <span>MIT · npm</span>
        </div>
        <h1 id="ts-hero-title" className="mt-6 max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
          {t.titleLine1}
          <br />
          <span className="text-fg-subtle">{t.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-fg-muted">{t.lead}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.themeStudio.readme} variant="secondary" newTab={newTab}>
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
          <Screenshot shot={SHOTS.themes} alt={dict.shots.themes} sizes="(min-width: 1400px) 1336px, 100vw" />
        </Frame>
      </Container>
    </section>
  )
}

function Features({ dict }: { dict: Dictionary }) {
  const t = dict.themeStudio.features
  return (
    <Section id="features" eyebrow={t.palettes.kicker} title={t.palettes.title} lead={t.palettes.body}>
      <div id="palettes">
        <ThemePreview t={dict.themePreview} />
        <p className="mt-4 text-sm leading-6 text-fg-subtle">{t.palettes.note}</p>
      </div>

      <div className="mt-20 space-y-20">
        <FeatureRow kicker={t.row.kicker} title={t.row.title} body={t.row.body} points={t.row.points} visual={<SettingsRowVisual t={t.row} />} />

        <FeatureRow reverse kicker={t.preview.kicker} title={t.preview.title} body={t.preview.body} points={t.preview.points} visual={<MenuVisual t={t.preview} />} />
      </div>

      <div className="mt-20">
        <p className="text-sm text-fg-subtle">{t.boundaries.kicker}</p>
        <h3 className="mt-3 max-w-2xl text-2xl font-medium tracking-[-0.03em] text-balance sm:text-3xl">{t.boundaries.title}</h3>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-fg-muted">{t.boundaries.body}</p>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.boundaries.items.map((item, i) => (
            <li key={item.title} className="bg-surface p-5">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-accent font-mono text-xs text-accent">{i + 1}</span>
              <h4 className="mt-4 font-medium">{item.title}</h4>
              <p className="mt-1.5 text-sm leading-6 text-fg-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-bg-subtle p-5 sm:p-6">
        <h3 className="font-medium">{dict.themeStudio.limits.title}</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
          {dict.themeStudio.limits.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function SettingsRowVisual({ t }: { t: PageDict['features']['row'] }) {
  const nordic = THEMES.find((theme) => theme.id === 'nordic') ?? THEMES[0]!
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <ul className="divide-y divide-border">
        <li className="flex items-center justify-between px-5 py-4">
          <span className="text-sm text-fg-muted">{t.mock.above}</span>
          <span className="text-[13px] text-fg-subtle">System</span>
        </li>
        <li className="flex items-center justify-between bg-accent-soft px-5 py-4">
          <span className="text-sm font-medium">{t.mock.label}</span>
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] font-medium">
            <span className="inline-flex overflow-hidden rounded-sm">
              {[nordic.light.accent, nordic.light.muted, nordic.light.surface, nordic.light.base].map((color) => (
                <span key={color} className="h-3 w-1.5" style={{ background: color }} />
              ))}
            </span>
            {t.mock.value}
          </span>
        </li>
        <li className="flex items-center justify-between px-5 py-4">
          <span className="text-sm text-fg-muted">{t.mock.below}</span>
          <span className="text-[13px] text-fg-subtle">13</span>
        </li>
      </ul>
    </div>
  )
}

function MenuVisual({ t }: { t: PageDict['features']['preview'] }) {
  const applied = THEMES.find((theme) => theme.id === 'graphite') ?? THEMES[0]!
  const previewing = THEMES.find((theme) => theme.id === 'nordic') ?? THEMES[0]!
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <p className="border-b border-border px-5 py-3 text-xs font-medium text-fg-subtle">{t.menuTitle}</p>
      <ul className="divide-y divide-border/70">
        {[
          { theme: applied, note: t.menuApplied, highlight: false },
          { theme: previewing, note: t.menuPreview, highlight: true },
        ].map(({ theme, note, highlight }) => (
          <li key={theme.id} className={`flex items-center justify-between px-5 py-3.5 ${highlight ? 'bg-accent-soft/60' : ''}`}>
            <span className="inline-flex items-center gap-2.5 text-sm">
              <span className="inline-flex overflow-hidden rounded-sm">
                {[theme.light.accent, theme.light.muted, theme.light.surface, theme.light.base].map((color) => (
                  <span key={color} className="h-3 w-1.5" style={{ background: color }} />
                ))}
              </span>
              {theme.name}
            </span>
            <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${highlight ? 'text-accent' : 'bg-accent-soft text-accent'}`}>{note}</span>
          </li>
        ))}
        <li className="flex items-center justify-between px-5 py-3.5">
          <span className="text-sm text-fg-muted">Default</span>
          <span className="text-[11px] text-fg-subtle">{t.menuDefault}</span>
        </li>
      </ul>
    </div>
  )
}

function Install({ dict }: { dict: Dictionary }) {
  const t = dict.themeStudio.install
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
            lines={['allowBuilds:', `  '${THEME_STUDIO_PACKAGE}': true`]}
            copyText={`allowBuilds:\n  '${THEME_STUDIO_PACKAGE}': true`}
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
  const t = dict.themeStudio.compat
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="compatibility" eyebrow={t.eyebrow} title={t.title} lead={fmt(t.lead, { version: THEME_STUDIO_PLUGIN_VERSION })}>
      <CompatTable t={t} rows={THEME_STUDIO_COMPAT_ROWS} version={THEME_STUDIO_PLUGIN_VERSION} />
      <p className="mt-6 text-sm leading-6 text-pretty break-keep text-fg-subtle">
        <Rich
          text={t.footnote}
          tags={{
            contract: (c) => (
              <a className="whitespace-nowrap text-fg underline underline-offset-2" href={links.themeStudio.compatDoc} target="_blank" rel="noopener noreferrer">
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
  const t = dict.themeStudio.finalCta
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="ts-cta-title" className="py-24 sm:py-32">
      <Container className="text-center">
        <h2 id="ts-cta-title" className="mx-auto max-w-2xl text-[32px] leading-[1.08] font-medium tracking-[-0.04em] text-balance sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-fg-muted">{t.lead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#install" newTab={newTab}>
            {t.install}
          </ButtonLink>
          <ButtonLink href={links.themeStudio.repo} variant="secondary" newTab={newTab}>
            {t.github}
          </ButtonLink>
          <ButtonLink href={links.themeStudio.npm} variant="ghost" newTab={newTab}>
            {THEME_STUDIO_PACKAGE} ↗
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
