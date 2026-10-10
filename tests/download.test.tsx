// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
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
    expect(screen.getAllByRole('link').every((link) => !link.getAttribute('href')?.endsWith('.zip'))).toBe(true)
  })

  it('explains that phones cannot install once the browser was inspected', () => {
    env = { platform: null, arch: null, checked: true }
    render(<DownloadPanel t={t} newTab={newTab} />)
    expect(screen.getByText(t.mobileNotice)).toBeTruthy()
  })

  it.each(['x64', 'arm64', null] as const)('leads with the Microsoft Store on Windows (%s) and offers both installers', (arch) => {
    env = { platform: 'windows', arch, checked: true }
    const { container } = render(<DownloadPanel t={t} newTab={newTab} />)
    const recommended = container.firstElementChild as HTMLElement
    fireEvent.click(within(recommended).getByRole('button', { name: t.action.other }))
    const links_ = within(recommended).getAllByRole('link')
    expect(links_[0]?.getAttribute('href')).toBe(links.rivetdeck.microsoftStore)
    expect(links_[0]?.textContent).toContain(t.store.action)
    expect(links_[0]?.getAttribute('target')).toBe('_blank')
    expect(within(recommended).getByRole('link', { name: /Windows \(ARM64\)/ }).getAttribute('href')).toMatch(/win-arm64\.exe$/)
    expect(within(recommended).getByRole('link', { name: /Windows \(x64\)/ }).getAttribute('href')).toMatch(/win-x64\.exe$/)
  })

  it.each(['x64', 'arm64', null] as const)('shows the Chinese Windows download labels (%s)', (arch) => {
    env = { platform: 'windows', arch, checked: true }
    const zh = getDictionary('zh')
    render(<DownloadPanel t={zh.home.download} newTab={zh.common.opensInNewTab} />)
    const primary = screen.getByRole('link', { name: /从 Microsoft Store 获取/ })
    expect(primary.getAttribute('href')).toBe(links.rivetdeck.microsoftStore)
    expect(screen.queryByRole('region')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: '其他下载' }))
    const dropdown = screen.getByRole('region', { name: '其他下载' })
    expect(within(dropdown).getAllByRole('list')).toHaveLength(1)
    expect(within(dropdown).getAllByRole('link')).toHaveLength(8)
    expect(within(dropdown).getByRole('link', { name: /Windows 版（x64）/ }).getAttribute('href')).toMatch(/win-x64\.exe$/)
    expect(within(dropdown).getByRole('link', { name: /Windows 版（arm64）/ }).getAttribute('href')).toMatch(/win-arm64\.exe$/)
    expect(within(dropdown).getAllByRole('link').every((link) => !link.getAttribute('href')?.endsWith('.zip'))).toBe(true)
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

  it('keeps all alternative downloads in the split button dropdown', () => {
    env = { platform: 'linux', arch: 'arm64', checked: true }
    render(<DownloadPanel t={t} newTab={newTab} />)
    const toggle = screen.getByRole('button', { name: t.action.other })
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(screen.queryByRole('region', { name: t.action.other })).toBeNull()
    expect(screen.getByRole('link').getAttribute('href')).toMatch(/linux-arm64\.AppImage$/)

    fireEvent.click(toggle)
    const dropdown = screen.getByRole('region', { name: t.action.other })
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(within(dropdown).queryAllByRole('heading')).toHaveLength(0)
    expect(within(dropdown).getAllByRole('list')).toHaveLength(1)
    const options = within(dropdown).getAllByRole('link')
    expect(options).toHaveLength(8)
    expect(options.every((link) => !link.getAttribute('href')?.endsWith('.zip'))).toBe(true)
    expect(within(dropdown).getByRole('link', { name: /macOS \(Apple Silicon\)/ }).getAttribute('href')).toMatch(/mac-arm64\.dmg$/)
    expect(within(dropdown).getByRole('link', { name: /Linux \(ARM64\) · DEB/ }).getAttribute('href')).toMatch(/linux-arm64\.deb$/)

    fireEvent.keyDown(dropdown, { key: 'Escape' })
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(toggle)

    fireEvent.click(toggle)
    fireEvent.pointerDown(document.body)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
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
