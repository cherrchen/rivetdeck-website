// @vitest-environment jsdom
import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DownloadPanel, HeroActions } from '@/components/home/download'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Environment } from '@/lib/platform'
import { links } from '@/lib/site'

let env: Environment
vi.mock('@/components/home/use-environment', () => ({ useEnvironment: () => env }))

const dict = getDictionary('en')
const t = dict.home.download
const newTab = dict.common.opensInNewTab
const SERVER: Environment = { platform: null, arch: null, checked: false }

afterEach(cleanup)
beforeEach(() => {
  env = SERVER
})

const hero = () => render(<HeroActions t={t} hero={dict.home.hero} repo={links.rivetdeck.repo} newTab={newTab} />)

describe('DownloadPanel', () => {
  it('lists every platform before the system is known', () => {
    render(<DownloadPanel t={t} newTab={newTab} />)
    for (const name of ['macOS', 'Windows', 'Linux']) expect(screen.getByRole('heading', { name })).toBeTruthy()
    expect(screen.queryByText(t.recommended)).toBeNull()
    expect(screen.queryByText(t.mobileNotice)).toBeNull()
  })

  it('explains that phones cannot install once the browser was inspected', () => {
    env = { platform: null, arch: null, checked: true }
    render(<DownloadPanel t={t} newTab={newTab} />)
    expect(screen.getByText(t.mobileNotice)).toBeTruthy()
  })

  it('leads with the Microsoft Store on Windows and offers the GitHub installers second', () => {
    env = { platform: 'windows', arch: 'x64', checked: true }
    const { container } = render(<DownloadPanel t={t} newTab={newTab} />)
    const recommended = container.firstElementChild as HTMLElement
    const links_ = within(recommended).getAllByRole('link')
    expect(links_[0]?.getAttribute('href')).toBe(links.rivetdeck.microsoftStore)
    expect(links_[0]?.textContent).toContain(t.store.action)
    expect(links_[1]?.getAttribute('href')).toMatch(/win-x64\.exe$/)
    expect(within(recommended).getByText(t.store.githubHeading)).toBeTruthy()
  })

  it('recommends the matching macOS build and hints at Intel when the architecture is unknown', () => {
    env = { platform: 'macos', arch: null, checked: true }
    const { container } = render(<DownloadPanel t={t} newTab={newTab} />)
    const recommended = container.firstElementChild as HTMLElement
    expect(within(recommended).getAllByRole('link')[0]?.getAttribute('href')).toMatch(/mac-arm64\.dmg$/)
    expect(within(recommended).getByRole('link', { name: 'Intel build' }).getAttribute('href')).toMatch(/mac-x64\.dmg$/)
  })

  it('recommends the Intel build when the browser reports x64 on macOS', () => {
    env = { platform: 'macos', arch: 'x64', checked: true }
    const { container } = render(<DownloadPanel t={t} newTab={newTab} />)
    expect(within(container.firstElementChild as HTMLElement).getAllByRole('link')[0]?.getAttribute('href')).toMatch(/mac-x64\.dmg$/)
  })

  it('keeps the other platforms under a collapsed "other versions" disclosure', () => {
    env = { platform: 'linux', arch: 'arm64', checked: true }
    const { container } = render(<DownloadPanel t={t} newTab={newTab} />)
    const details = container.querySelector('details') as HTMLDetailsElement
    expect(details.open).toBe(false)
    expect(details.textContent).toContain(t.otherVersions)
    expect(within(details).getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual(['macOS', 'Windows', 'Linux'])
    expect(within(container.firstElementChild as HTMLElement).getAllByRole('link')[0]?.getAttribute('href')).toMatch(/linux-arm64\.AppImage$/)
  })
})

describe('HeroActions', () => {
  it('jumps to the download section before the system is known', () => {
    hero()
    const link = screen.getByRole('link', { name: dict.home.hero.downloadGeneric })
    expect(link.getAttribute('href')).toBe('#download')
  })

  it('offers the Store from the hero on Windows and says where the download comes from', () => {
    env = { platform: 'windows', arch: null, checked: true }
    hero()
    const link = screen.getByRole('link', { name: /Download for Windows/ })
    expect(link.getAttribute('href')).toBe(links.rivetdeck.microsoftStore)
    expect(screen.getByText(new RegExp(dict.home.hero.via.store))).toBeTruthy()
    expect(screen.getByRole('link', { name: dict.home.hero.otherVersions }).getAttribute('href')).toBe('#download')
  })

  it('offers the GitHub file on macOS', () => {
    env = { platform: 'macos', arch: 'arm64', checked: true }
    hero()
    expect(screen.getByRole('link', { name: /Download for macOS/ }).getAttribute('href')).toMatch(/mac-arm64\.dmg$/)
    expect(screen.getByText(new RegExp(dict.home.hero.via.github))).toBeTruthy()
  })
})
