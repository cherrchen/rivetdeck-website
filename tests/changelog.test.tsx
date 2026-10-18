// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { existsSync } from 'node:fs'
import { afterEach, describe, expect, it } from 'vitest'
import { ChangelogReleases } from '@/components/changelog/releases'
import {
  blobUrl,
  CHANGELOG_SOURCE_FILE,
  compareUrl,
  GIT_DOC_LINKS,
  MULTI_ROOT_DOC_LINKS,
  releaseUrl,
  tagOf,
  THEME_STUDIO_DOC_LINKS,
  type ChangelogRelease,
} from '@/lib/changelog'
import { GIT_PLUGIN_VERSION } from '@/lib/git-compat'
import { richTags } from '@/lib/i18n/format'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { COMPAT_PLUGIN_VERSION } from '@/lib/multi-root-compat'
import { links } from '@/lib/site'
import { THEME_STUDIO_PLUGIN_VERSION } from '@/lib/theme-studio-compat'

const en = getDictionary('en')
const zh = getDictionary('zh')

afterEach(cleanup)

const PLUGINS = [
  { dict: en.git.changelog, zhDict: zh.git.changelog, docs: GIT_DOC_LINKS, repo: links.git.repo, latest: GIT_PLUGIN_VERSION },
  { dict: en.themeStudio.changelog, zhDict: zh.themeStudio.changelog, docs: THEME_STUDIO_DOC_LINKS, repo: links.themeStudio.repo, latest: THEME_STUDIO_PLUGIN_VERSION },
  { dict: en.multiRoot.changelog, zhDict: zh.multiRoot.changelog, docs: MULTI_ROOT_DOC_LINKS, repo: links.multiRoot.repo, latest: COMPAT_PLUGIN_VERSION },
] as const

const itemStrings = (releases: readonly ChangelogRelease[]) => [
  ...releases.flatMap((r) => (r.lead ? [r.lead] : [])),
  ...releases.flatMap((r) => (r.sections ?? []).flatMap((s) => s.items)),
]

describe('changelog data', () => {
  it('lists every release newest-first with unique versions and ISO dates', () => {
    for (const { dict } of PLUGINS) {
      const releases = dict.releases
      const versions = releases.map((r) => r.version)
      expect(new Set(versions).size, 'duplicate version').toBe(versions.length)
      const dates = releases.map((r) => Date.parse(r.date))
      expect([...dates].sort((a, b) => b - a)).toEqual(dates)
      for (const r of releases) expect(r.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(releases.length).toBeGreaterThan(3)
    }
  })

  it('starts each changelog with the version the site advertises', () => {
    for (const { dict, latest } of PLUGINS) expect(dict.releases[0]?.version).toBe(latest)
  })

  it('keeps versions, dates and section kinds identical across locales', () => {
    for (const { dict, zhDict } of PLUGINS) {
      const shape = (rs: readonly ChangelogRelease[]) =>
        rs.map((r) => ({ v: r.version, d: r.date, k: (r.sections ?? []).map((s) => s.kind ?? s.title), n: (r.sections ?? []).map((s) => s.items.length) }))
      expect(shape(zhDict.releases)).toEqual(shape(dict.releases))
    }
  })

  it('resolves every doc tag used in items through the plugin DocLinks map — and nothing more', () => {
    for (const { dict, docs } of PLUGINS) {
      const used = new Set(itemStrings(dict.releases).flatMap((s) => richTags(s)))
      for (const builtin of ['b', 'code']) used.delete(builtin)
      expect([...used].sort()).toEqual(Object.keys(docs).sort())
    }
  })

  it('maps each locale to the matching file of the bilingual changelog pair', () => {
    expect(CHANGELOG_SOURCE_FILE.git).toEqual({ en: 'CHANGELOG.md', zh: 'CHANGELOG.zh.md' })
    expect(CHANGELOG_SOURCE_FILE.themeStudio).toEqual({ en: 'CHANGELOG.en.md', zh: 'CHANGELOG.md' })
    expect(CHANGELOG_SOURCE_FILE.multiRoot).toEqual({ en: 'CHANGELOG.en.md', zh: 'CHANGELOG.md' })
  })
})

describe('changelog URLs', () => {
  const repo = 'https://github.com/cherrchen/dsh-plugin-git'
  it('builds release, compare and blob links from full tag names', () => {
    expect(releaseUrl(repo, 'v0.2.7')).toBe(`${repo}/releases/tag/v0.2.7`)
    expect(compareUrl(repo, 'v0.1.0', 'v0.2.0')).toBe(`${repo}/compare/v0.1.0...v0.2.0`)
    expect(blobUrl(repo, 'v0.2.7', 'docs/x.md')).toBe(`${repo}/blob/v0.2.7/docs/x.md`)
    expect(tagOf({ version: '0.2.7' })).toBe('v0.2.7')
    expect(tagOf({ version: '0.1.0-rc.7', tag: 'electron-dsh-v0.1.0-rc.7' })).toBe('electron-dsh-v0.1.0-rc.7')
  })
})

describe('ChangelogReleases', () => {
  const t = en.git.changelog
  const newTab = ' (opens in a new tab)'

  it('renders version headings and section headings without diff links', () => {
    render(<ChangelogReleases releases={t.releases} repo={links.git.repo} docs={GIT_DOC_LINKS} locale="en" newTab={newTab} t={t} />)

    const latest = screen.getByRole('heading', { name: /v0\.2\.7/ })
    expect(latest.querySelector('a')?.getAttribute('href')).toBe(releaseUrl(links.git.repo, 'v0.2.7'))
    expect(latest.textContent).toContain('Latest')

    expect(document.querySelector('a[href*="compare"]')).toBeNull()

    for (const kind of ['Added', 'Changed', 'Fixed', 'Removed']) expect(screen.getAllByText(kind).length).toBeGreaterThan(0)
  })

  it('renders item markup — bold, code and per-release-pinned doc links', () => {
    render(<ChangelogReleases releases={t.releases} repo={links.git.repo} docs={GIT_DOC_LINKS} locale="en" newTab={newTab} t={t} />)
    const leadLinks = screen.getAllByRole('link', { name: /installation/ })
    expect(leadLinks.map((l) => l.getAttribute('href'))).toContain(blobUrl(links.git.repo, 'v0.2.1', 'README.md#installation'))
    expect(document.querySelectorAll('article code').length).toBeGreaterThan(0)
  })

  it('resolves bilingual doc pairs per locale', () => {
    render(<ChangelogReleases releases={zh.git.changelog.releases} repo={links.git.repo} docs={GIT_DOC_LINKS} locale="zh" newTab={newTab} t={zh.git.changelog} />)
    const docLinks = screen.getAllByRole('link').filter((l) => l.getAttribute('href')?.includes('README.zh.md'))
    expect(docLinks.length).toBeGreaterThan(0)
    expect(docLinks[0]?.getAttribute('href')).toBe(blobUrl(links.git.repo, 'v0.2.1', 'README.zh.md#installation'))
  })
})

describe('Rivetdeck changelog draft', () => {
  it('stays unrouted while the design lives under a private folder', () => {
    expect(existsSync('app/[lang]/_changelog/page.tsx')).toBe(true)
    expect(existsSync('app/[lang]/changelog/page.tsx')).toBe(false)
  })

  it('mirrors the GitHub release history including legacy tag names', () => {
    const releases = en.home.changelog.releases
    expect(releases[0]).toMatchObject({ version: '0.2.0-beta.4', date: '2026-10-17' })
    expect(releases).toContainEqual(expect.objectContaining({ tag: 'electron-dsh-v0.1.0-rc.7' }))
    expect(zh.home.changelog.releases.map((r) => r.version)).toEqual(releases.map((r) => r.version))
    expect(releases.length).toBeGreaterThan(30)
  })
})
