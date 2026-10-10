import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { DownloadPanel, HeroActions } from '@/components/home/download'
import { ThemePreview } from '@/components/home/theme-preview'
import { ButtonLink } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Container } from '@/components/ui/container'
import { GitHubIcon } from '@/components/ui/icons'
import { RivetMark } from '@/components/ui/logo'
import { Rich } from '@/components/ui/rich'
import { Section } from '@/components/ui/section'
import { Frame, Screenshot } from '@/components/ui/screenshot'
import { isLocale, localePath, type Locale } from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'
import { fmt, formatDate } from '@/lib/i18n/format'
import { pageMetadata } from '@/lib/i18n/metadata'
import { RELEASE, assetUrl } from '@/lib/releases'
import { SHOTS } from '@/lib/screenshots'
import { links } from '@/lib/site'

const PATH = '/'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).home.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, siteName: 'Rivetdeck' })
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.home
  const newTab = dict.common.opensInNewTab

  const nav = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.plugins, href: '#plugins' },
    { label: t.nav.download, href: '#download' },
    { label: t.nav.github, href: links.rivetdeck.repo, external: true },
  ]

  const footerColumns = [
    {
      title: t.footer.rivetdeck.title,
      links: [
        { label: t.footer.rivetdeck.features, href: '#features' },
        { label: t.footer.rivetdeck.plugins, href: '#plugins' },
        { label: t.footer.rivetdeck.download, href: '#download' },
        { label: fmt(t.footer.rivetdeck.release, { tag: RELEASE.tag }), href: RELEASE.url },
      ],
    },
    {
      title: t.footer.plugins.title,
      links: [
        { label: t.footer.plugins.git, href: links.git.repo },
        { label: t.footer.plugins.themeStudio, href: links.themeStudio.repo },
        { label: t.footer.plugins.multiRoot, href: localePath(lang, '/plugins/multi-root-workspace') },
      ],
    },
    {
      title: t.footer.source.title,
      links: [
        { label: t.footer.source.repo, href: links.rivetdeck.repo },
        { label: t.footer.source.license, href: links.rivetdeck.license },
        { label: t.footer.source.issues, href: links.rivetdeck.issues },
      ],
    },
    {
      title: t.footer.upstream.title,
      links: [
        { label: t.footer.upstream.harness, href: links.upstream },
        { label: t.footer.upstream.brand, href: links.rivetdeck.brandGuidelines },
      ],
    },
  ]

  return (
    <>
      <SiteHeader
        locale={lang}
        path={PATH}
        common={dict.common}
        brand={
          <Link href={localePath(lang, '/')} className="flex items-center gap-2.5 font-semibold tracking-[-0.02em]" aria-label={t.brandHome}>
            <RivetMark />
            Rivetdeck
          </Link>
        }
        items={nav}
        cta={{ label: t.cta, href: '#download' }}
      />

      <main id="main" data-identity="rivetdeck">
        <Hero dict={dict} />
        <Features dict={dict} />
        <Plugins dict={dict} locale={lang} />
        <Download dict={dict} locale={lang} />
        <OpenSource dict={dict} />
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </>
  )
}

function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.home
  const newTab = dict.common.opensInNewTab
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="pt-16 pb-12 sm:pt-24">
        <a
          href={RELEASE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rise inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg px-3 py-1 font-mono text-xs text-fg-muted hover:text-fg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-warn" aria-hidden="true" />
          {fmt(t.hero.badge, { tag: RELEASE.tag })}
          <span className="sr-only">{newTab}</span>
        </a>
        <h1 id="hero-title" className="rise rise-1 mt-6 max-w-4xl text-[40px] leading-[1.04] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-8 text-fg-muted">{t.hero.lead}</p>
        <HeroActions t={t.download} hero={t.hero} repo={links.rivetdeck.repo} newTab={newTab} />
        <p className="mt-4 text-sm text-fg-subtle">{t.hero.meta}</p>
      </Container>

      <Container className="pb-20">
        <Frame>
          <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} priority crop="aspect-[16/9] object-cover object-top" sizes="(min-width: 1200px) 1136px, 100vw" />
        </Frame>
        <p className="mt-3 text-sm text-fg-subtle">{t.hero.caption}</p>
      </Container>
    </section>
  )
}

function Features({ dict }: { dict: Dictionary }) {
  const t = dict.home.features
  return (
    <Section id="features" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Frame caption={t.caption}>
          <Screenshot shot={SHOTS.home} alt={dict.shots.home} sizes="(min-width: 1200px) 640px, 100vw" />
        </Frame>
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
          {t.items.map((f) => (
            <div key={f.title} className="bg-bg p-5">
              <dt className="text-[15px] font-medium">{f.title}</dt>
              <dd className="mt-1.5 text-sm leading-6 text-fg-muted">{f.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

function Plugins({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.home.plugins
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="plugins" tone="subtle" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <div className="grid gap-6 lg:grid-cols-2">
        <PluginCard name="Git" status={t.preinstalled} href={links.git.repo} summary={t.gitSummary} sourceLabel={t.sourceOnGithub} newTab={newTab}>
          <Frame>
            <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} crop="aspect-[5/4] object-cover object-right-top" sizes="(min-width: 1200px) 560px, 100vw" />
          </Frame>
        </PluginCard>

        <PluginCard name="Theme Studio" status={t.preinstalled} href={links.themeStudio.repo} summary={t.themeStudioSummary} sourceLabel={t.sourceOnGithub} newTab={newTab}>
          <Frame>
            <Screenshot shot={SHOTS.themes} alt={dict.shots.themes} crop="aspect-[5/4] object-cover object-center" sizes="(min-width: 1200px) 560px, 100vw" />
          </Frame>
        </PluginCard>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-bg p-5 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{t.tryThemes.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-fg-muted">{t.tryThemes.lead}</p>
          </div>
        </div>
        <div className="mt-6">
          <ThemePreview t={dict.themePreview} />
        </div>
        <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
          <Frame caption={t.tryThemes.captionNordic}>
            <Image src="/screenshots/app-theme-nordic-dark.png" alt={dict.shots.nordicDark} width={2880} height={1800} sizes="(min-width: 1200px) 540px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
          <Frame caption={t.tryThemes.captionClaude}>
            <Image src="/screenshots/app-theme-claude-light.png" alt={dict.shots.claudeLight} width={2880} height={1800} sizes="(min-width: 1200px) 540px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
        </div>
      </div>

      <Link
        href={localePath(locale, '/plugins/multi-root-workspace')}
        className="group mt-6 grid gap-8 rounded-xl border border-border-strong bg-bg p-5 transition-colors hover:border-fg sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"
      >
        <div>
          <span className="inline-flex rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-xs text-fg-muted">{t.multiRoot.badge}</span>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Multi-root Workspace</h3>
          <p className="mt-3 max-w-md text-[15px] leading-7 text-fg-muted">{t.multiRoot.body}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
            {t.multiRoot.cta}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
        <Frame>
          <Screenshot shot={SHOTS.folders} alt={dict.shots.folders} sizes="(min-width: 1200px) 600px, 100vw" />
        </Frame>
      </Link>
    </Section>
  )
}

function PluginCard({
  name,
  status,
  href,
  summary,
  sourceLabel,
  newTab,
  children,
}: {
  name: string
  status: string
  href: string
  summary: string
  sourceLabel: string
  newTab: string
  children: React.ReactNode
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-bg p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{name}</h3>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent">{status}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-fg-muted">{summary}</p>
      <div className="mt-5">{children}</div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-medium text-fg hover:underline">
        {sourceLabel} <span aria-hidden="true">↗</span>
        <span className="sr-only">{newTab}</span>
      </a>
    </article>
  )
}

function Download({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.home.download
  const newTab = dict.common.opensInNewTab
  return (
    <Section
      id="download"
      eyebrow={t.eyebrow}
      title={t.title}
      lead={
        <Rich
          text={fmt(t.lead, { version: RELEASE.version, date: formatDate(RELEASE.publishedAt, locale) })}
          tags={{ v: (c) => <span className="font-mono text-fg">{c}</span> }}
        />
      }
    >
      <DownloadPanel t={t} newTab={newTab} />

      <p className="mt-5 text-sm leading-6 text-fg-subtle">
        <Rich
          text={fmt(t.verify, { file: RELEASE.checksums })}
          tags={{
            sums: (c) => (
              <a className="text-fg underline underline-offset-2" href={assetUrl(RELEASE.checksums)}>
                {c}
              </a>
            ),
            release: (c) => (
              <a className="text-fg underline underline-offset-2" href={RELEASE.url} target="_blank" rel="noopener noreferrer">
                {c}
                <span className="sr-only">{newTab}</span>
              </a>
            ),
          }}
        />
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02em]">{t.source.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-fg-muted">{t.source.body}</p>
        </div>
        <CodeBlock
          title="shell"
          copy={dict.common.copy}
          lines={[
            'git clone https://github.com/cherrchen/rivetdeck.git',
            'cd rivetdeck',
            'pnpm install',
            'pnpm run build',
            'pnpm --filter @dsh-electron/dsh-electron start',
          ]}
        />
      </div>
    </Section>
  )
}

function OpenSource({ dict }: { dict: Dictionary }) {
  const t = dict.home.openSource
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="open-source" tone="subtle" eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.facts.map((fact) => (
          <div key={fact.title} className="rounded-xl border border-border bg-bg p-5">
            <h3 className="font-medium">{fact.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{fact.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={links.rivetdeck.repo} variant="secondary" newTab={newTab}>
          <GitHubIcon /> {t.repo}
        </ButtonLink>
        <ButtonLink href={links.upstream} variant="ghost" newTab={newTab}>
          {t.upstream}
        </ButtonLink>
      </div>
    </Section>
  )
}
