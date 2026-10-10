import { describe, expect, it } from 'vitest'
import { COMPAT_ROWS } from '@/lib/multi-root-compat'
import { DOWNLOADS, PLATFORM_ORDER, RELEASE, recommend } from '@/lib/releases'
import { links } from '@/lib/site'
import { THEMES } from '@/lib/themes'

describe('release downloads', () => {
  const options = Object.values(DOWNLOADS).flat()
  const files = options.flatMap((o) => (o.file ? [o] : []))

  it('points every GitHub asset at the release it names', () => {
    for (const o of files) {
      expect(o.file).toContain(RELEASE.version)
      expect(o.href).toBe(`${links.rivetdeck.releases}/download/${RELEASE.tag}/${o.file}`)
    }
  })

  it('has no duplicate files and a size for every file', () => {
    expect(new Set(files.map((o) => o.file)).size).toBe(files.length)
    for (const o of files) expect(o.bytes).toBeGreaterThan(1_000_000)
  })

  it('offers the Microsoft Store first on Windows, then the GitHub installers', () => {
    const windows = DOWNLOADS.windows
    expect(windows[0]).toMatchObject({ channel: 'store', href: links.rivetdeck.microsoftStore })
    expect(windows.slice(1).every((o) => o.channel === 'github')).toBe(true)
    expect(windows.slice(1).map((o) => o.arch)).toEqual(['x64', 'arm64'])
  })

  it('offers only GitHub files on macOS and Linux', () => {
    for (const id of ['macos', 'linux'] as const) expect(DOWNLOADS[id].every((o) => o.channel === 'github')).toBe(true)
  })

  it('marks the release as a pre-release', () => {
    expect(RELEASE.prerelease).toBe(true)
  })
})

describe('recommend', () => {
  it('always leads with the Store on Windows and lists the matching installer first among the rest', () => {
    for (const arch of [null, 'x64', 'arm64'] as const) expect(recommend('windows', arch).primary.channel).toBe('store')
    expect(recommend('windows', 'x64').others[0]?.arch).toBe('x64')
    expect(recommend('windows', 'arm64').others[0]?.arch).toBe('arm64')
    expect(recommend('windows', null).others.map((o) => o.channel)).toEqual(['github', 'github'])
  })

  it('picks the build that matches the architecture on macOS', () => {
    expect(recommend('macos', 'arm64').primary).toMatchObject({ format: 'dmg', arch: 'arm64' })
    expect(recommend('macos', 'x64').primary).toMatchObject({ format: 'dmg', arch: 'x64' })
  })

  it('assumes Apple Silicon on macOS and x64 on Linux when the architecture is unknown', () => {
    expect(recommend('macos', null)).toMatchObject({ assumedArch: 'arm64', primary: { arch: 'arm64' } })
    expect(recommend('linux', null)).toMatchObject({ assumedArch: 'x64', primary: { format: 'appimage', arch: 'x64' } })
    expect(recommend('linux', 'arm64').primary).toMatchObject({ format: 'appimage', arch: 'arm64' })
  })

  it('never repeats the primary option and keeps every other option reachable', () => {
    for (const id of PLATFORM_ORDER) {
      const r = recommend(id, null)
      expect(r.others).not.toContain(r.primary)
      expect(r.others).toHaveLength(DOWNLOADS[id].length - 1)
    }
  })
})

describe('multi-root compatibility matrix', () => {
  it('lists the nine released allowlist entries as verified, in order', () => {
    const verified = COMPAT_ROWS.filter((r) => r.status === 'verified').map((r) => r.release)
    expect(verified).toEqual([
      '0.1.5-rc.2',
      '0.1.6-alpha.1',
      '0.1.6-alpha.2',
      '0.1.7-alpha.1',
      '0.1.7-alpha.2',
      '0.1.7-rc.1',
      '0.1.7-rc.2',
      '0.2.0-rc.1',
      '0.2.0-rc.2',
    ])
  })

  it('keeps development-branch releases out of the verified set', () => {
    const dev = COMPAT_ROWS.filter((r) => r.status === 'unreleased').map((r) => r.release)
    expect(dev).toEqual(['0.2.1-alpha.1', '0.2.1-alpha.2'])
    for (const r of COMPAT_ROWS.filter((x) => x.status === 'unreleased')) expect(r.since).toBe('dev')
  })

  it('ends with an unsupported catch-all row and has unique releases', () => {
    expect(COMPAT_ROWS.at(-1)?.status).toBe('unsupported')
    expect(new Set(COMPAT_ROWS.map((r) => r.release)).size).toBe(COMPAT_ROWS.length)
  })
})

describe('theme palettes', () => {
  it('has Default plus the eight Theme Studio builtins with valid hex colors', () => {
    expect(THEMES.map((t) => t.id)).toEqual(['default', 'claude', 'codex', 'claude-cream', 'graphite', 'oled', 'nordic', 'paper', 'warm'])
    for (const t of THEMES) {
      for (const mode of [t.light, t.dark]) {
        for (const color of Object.values(mode)) expect(color).toMatch(/^#[0-9a-fA-F]{6}$/)
      }
    }
  })
})

describe('external links', () => {
  const flat = (o: unknown): string[] => (typeof o === 'string' ? [o] : Object.values(o as object).flatMap(flat))

  it('are absolute https URLs', () => {
    for (const url of flat(links)) expect(url).toMatch(/^https:\/\/[^\s]+$/)
  })

  it('pin Multi-root documentation to the released tag', () => {
    expect(links.multiRoot.architecture).toContain('/blob/v0.1.5/')
    expect(links.multiRoot.adr.compat).toContain('/blob/v0.1.5/')
  })
})
