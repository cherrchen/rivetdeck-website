/**
 * Draft — Rivetdeck changelog page. Designed, intentionally not published.
 *
 * Lives under a private folder (`_changelog`) so Next.js does not route it and
 * nothing links here. To launch it:
 *
 *  1. Move this file to `app/[lang]/changelog/page.tsx` and retype the params
 *     as `PageProps<'/[lang]/changelog'>` once route types exist.
 *  2. Add `{ path: '/changelog', priority: 0.6 }` to `PAGES` in `app/sitemap.ts`.
 *  3. Add `'changelog'` to `pages` in `scripts/build-pages.mjs` and to
 *     `pluginPages` in `scripts/verify-pages.mjs` (the social name is
 *     `rivetdeck-changelog`); give it an `opengraph-image.tsx` sibling.
 *  4. Add a `Changelog` item to the home page header nav.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChangelogReleases } from '@/components/changelog/releases'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { RivetMark } from '@/components/ui/logo'
import { isLocale, localePath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { pageMetadata } from '@/lib/i18n/metadata'
import { RELEASE } from '@/lib/releases'
import { links, withBasePath } from '@/lib/site'

const PATH = '/changelog'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).home.changelog.meta
  return pageMetadata({ locale: lang, path: PATH, title: t.title, description: t.description, siteName: 'Rivetdeck' })
}

export default async function RivetdeckChangelogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  const t = dict.home
  const c = t.changelog
  const newTab = dict.common.opensInNewTab
  const home = withBasePath(localePath(lang, '/'))
  const releases = c.releases
  const latest = releases[0]

  const nav = [
    { label: c.nav.home, href: home },
    { label: c.releaseNotes, href: links.rivetdeck.releases, external: true },
    { label: t.nav.github, href: links.rivetdeck.repo, external: true },
  ]

  const footerColumns = [
    {
      title: t.footer.rivetdeck.title,
      links: [
        { label: t.footer.rivetdeck.features, href: `${localePath(lang, '/')}#features` },
        { label: t.footer.rivetdeck.plugins, href: `${localePath(lang, '/')}#plugins` },
        { label: t.footer.rivetdeck.download, href: `${localePath(lang, '/')}#download` },
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
    <div data-identity="rivetdeck">
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
        cta={{ label: t.cta, href: `${home}#download` }}
      />

      <main id="main">
        <section aria-labelledby="cl-hero-title">
          <Container className="pt-20 pb-12 sm:pt-28">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-fg-muted">
              <span className="text-fg">Rivetdeck</span>
              <span>{latest ? fmt(c.metaLine, { count: releases.length, version: latest.tag ?? `v${latest.version}` }) : null}</span>
            </div>
            <h1 id="cl-hero-title" className="mt-6 max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.045em] text-balance sm:text-[56px] lg:text-[64px]">
              {c.title}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-7 text-fg-muted">{c.lead}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-fg-subtle">{c.note}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href={home} variant="secondary" newTab={newTab}>
                {c.nav.home}
              </ButtonLink>
              <ButtonLink href={links.rivetdeck.releases} variant="ghost" newTab={newTab}>
                GitHub Releases ↗
              </ButtonLink>
            </div>
          </Container>
        </section>

        <Container className="pb-24">
          <ChangelogReleases releases={releases} repo={links.rivetdeck.repo} locale={lang} newTab={newTab} t={{ ...c, kinds: {} }} />
        </Container>
      </main>

      <SiteFooter columns={footerColumns} note={t.footer.note} newTab={newTab} />
    </div>
  )
}
