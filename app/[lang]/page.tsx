import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
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
import { rivetdeckApp } from '@/lib/jsonld'
import { RELEASE, assetUrl } from '@/lib/releases'
import { SHOTS } from '@/lib/screenshots'
import { links, withBasePath } from '@/lib/site'

const PATH = '/'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).home.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, keywords: t.keywords, siteName: 'Rivetdeck' })
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
        { label: t.footer.plugins.git, href: localePath(lang, '/plugins/git') },
        { label: t.footer.plugins.themeStudio, href: localePath(lang, '/plugins/theme-studio') },
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
      <JsonLd data={rivetdeckApp(lang, dict.home.meta.description)} />
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
    <section aria-labelledby="hero-title">
      <Container className="pt-5">
        <p className="text-center text-[13px] text-fg-muted">
          {fmt(t.hero.badge, { tag: RELEASE.tag })}
          <a href={RELEASE.url} target="_blank" rel="noopener noreferrer" className="ml-4 font-medium text-fg hover:underline hover:underline-offset-4">
            {t.hero.releaseNotes}
            <span aria-hidden="true" className="ml-1">
              ›
            </span>
            <span className="sr-only">{newTab}</span>
          </a>
        </p>
      </Container>

      <Container className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:items-end">
          <div>
            <h1 id="hero-title" className="max-w-3xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-7 text-fg-muted">{t.hero.lead}</p>
            <HeroActions t={t.download} hero={t.hero} repo={links.rivetdeck.repo} newTab={newTab} />
          </div>
          <ul className="space-y-1.5 border-l border-border pl-5 text-sm text-fg-muted lg:mb-1">
            {t.hero.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <Frame fade>
          <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} priority crop="aspect-[16/9] object-cover object-top" sizes="(min-width: 1400px) 1336px, 100vw" />
        </Frame>
        <p className="mt-3 text-[13px] text-fg-subtle">{t.hero.caption}</p>
      </Container>
    </section>
  )
}

function Features({ dict }: { dict: Dictionary }) {
  const t = dict.home.features
  return (
    <Section id="features" title={t.title}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,1fr)] lg:gap-16">
        <div>
          <Frame caption={t.caption}>
            <Screenshot shot={SHOTS.home} alt={dict.shots.home} sizes="(min-width: 1400px) 680px, 100vw" />
          </Frame>
        </div>
        <div>
          <p className="text-pretty text-xl leading-[1.45] tracking-[-0.015em] text-fg-subtle">
            <Rich text={t.lead} tags={{ b: (c) => <span className="text-fg">{c}</span> }} />
          </p>
          <h3 className="mt-10 text-[13px] text-fg-subtle">{t.listLabel}</h3>
          <dl className="mt-4 space-y-6">
            {t.items.map((f) => (
              <div key={f.title}>
                <dt className="text-sm font-medium">{f.title}</dt>
                <dd className="mt-1 text-pretty text-sm leading-6 text-fg-muted">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

function Plugins({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.home.plugins
  const newTab = dict.common.opensInNewTab
  return (
    <Section id="plugins" title={t.title} lead={t.lead}>
      <div className="grid gap-3 lg:grid-cols-2">
        <PluginCard name="Git" status={t.preinstalled} href={localePath(locale, '/plugins/git')} sourceHref={links.git.repo} summary={t.gitSummary} pageLabel={t.pluginPage} sourceLabel={t.sourceOnGithub} newTab={newTab}>
          <Screenshot shot={SHOTS.gitDiff} alt={dict.shots.gitDiff} crop="aspect-[16/10] object-cover object-right-top" sizes="(min-width: 1400px) 600px, 100vw" />
        </PluginCard>

        <PluginCard name="Theme Studio" status={t.preinstalled} href={localePath(locale, '/plugins/theme-studio')} sourceHref={links.themeStudio.repo} summary={t.themeStudioSummary} pageLabel={t.pluginPage} sourceLabel={t.sourceOnGithub} newTab={newTab}>
          <Screenshot shot={SHOTS.themes} alt={dict.shots.themes} crop="aspect-[16/10] object-cover object-center" sizes="(min-width: 1400px) 600px, 100vw" />
        </PluginCard>
      </div>

      <div className="mt-3 rounded-xl border border-border bg-surface p-6 sm:p-10">
        <h3 className="text-xl font-medium tracking-[-0.02em]">{t.tryThemes.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-fg-muted">{t.tryThemes.lead}</p>
        <div className="mt-8">
          <ThemePreview t={dict.themePreview} />
        </div>
        <div className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          <Frame caption={t.tryThemes.captionNordic}>
            <Image src={withBasePath('/screenshots/app-theme-nordic-dark.png')} alt={dict.shots.nordicDark} width={2880} height={1800} sizes="(min-width: 1400px) 620px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
          <Frame caption={t.tryThemes.captionClaude}>
            <Image src={withBasePath('/screenshots/app-theme-claude-light.png')} alt={dict.shots.claudeLight} width={2880} height={1800} sizes="(min-width: 1400px) 620px, 100vw" loading="lazy" className="h-auto w-full" />
          </Frame>
        </div>
      </div>

      <Link
        href={localePath(locale, '/plugins/multi-root-workspace')}
        className="group mt-3 grid gap-10 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:items-center"
      >
        <div>
          <p className="text-[13px] text-fg-subtle">{t.multiRoot.badge}</p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">Multi-root Workspace</h3>
          <p className="mt-3 max-w-md text-[15px] leading-7 text-fg-muted">{t.multiRoot.body}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
            {t.multiRoot.cta}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              ›
            </span>
          </span>
        </div>
        <Frame>
          <Screenshot shot={SHOTS.folders} alt={dict.shots.folders} sizes="(min-width: 1400px) 650px, 100vw" />
        </Frame>
      </Link>
    </Section>
  )
}

function PluginCard({
  name,
  status,
  href,
  sourceHref,
  summary,
  pageLabel,
  sourceLabel,
  newTab,
  children,
}: {
  name: string
  status: string
  /** Internal plugin page path. */
  href: string
  /** Upstream repository URL. */
  sourceHref: string
  summary: string
  pageLabel: string
  sourceLabel: string
  newTab: string
  children: React.ReactNode
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border bg-bg-subtle px-6 pt-6 sm:px-8 sm:pt-8">
        <div className="overflow-hidden rounded-t-lg border border-b-0 border-border bg-surface">{children}</div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-baseline gap-3">
          <h3 className="text-lg font-medium tracking-[-0.02em]">{name}</h3>
          <span className="text-[13px] text-fg-subtle">{status}</span>
        </div>
        <p className="mt-2 max-w-md text-sm leading-6 text-fg-muted">{summary}</p>
        <div className="mt-auto flex items-center gap-4 pt-6 text-sm font-medium">
          <Link href={href} className="text-fg hover:underline hover:underline-offset-4">
            {pageLabel}
            <span aria-hidden="true" className="ml-1">
              ›
            </span>
          </Link>
          <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="text-fg-subtle hover:text-fg">
            {sourceLabel}
            <span className="sr-only">{newTab}</span>
          </a>
        </div>
      </div>
    </article>
  )
}

function Download({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.home.download
  const newTab = dict.common.opensInNewTab
  return (
    <Section
      id="download"
      title={t.title}
      lead={
        <Rich
          text={fmt(t.lead, { version: RELEASE.version, date: formatDate(RELEASE.publishedAt, locale) })}
          tags={{ v: (c) => <span className="font-mono text-[0.92em] text-fg">{c}</span> }}
        />
      }
    >
      <DownloadPanel t={t} newTab={newTab} />

      <p className="mt-5 text-[13px] leading-6 text-fg-subtle">
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

      <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.02em]">{t.source.title}</h3>
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
    <Section id="open-source" title={t.title} lead={t.lead}>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {t.facts.map((fact) => (
          <div key={fact.title} className="border-t border-border pt-6">
            <h3 className="text-[15px] font-medium">{fact.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{fact.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href={links.rivetdeck.repo} variant="secondary" newTab={newTab}>
          <GitHubIcon /> {t.repo}
        </ButtonLink>
        <ButtonLink href={links.upstream} variant="ghost" newTab={newTab}>
          {t.upstream}
          <span aria-hidden="true">›</span>
        </ButtonLink>
      </div>
    </Section>
  )
}
