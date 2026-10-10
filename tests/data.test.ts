import { describe, expect, it } from 'vitest'
import { COMPAT_ROWS } from '@/lib/multi-root-compat'
import { assetUrl, DOWNLOADS, RELEASE } from '@/lib/releases'
import { links } from '@/lib/site'
import { THEMES } from '@/lib/themes'

describe('release downloads', () => {
  const assets = DOWNLOADS.flatMap((p) => p.assets)

  it('points every asset at the GitHub release it names', () => {
    for (const a of assets) {
      expect(a.file).toContain(RELEASE.version)
      expect(assetUrl(a.file)).toBe(`${links.rivetdeck.releases}/download/${RELEASE.tag}/${a.file}`)
    }
  })

  it('has one primary download per platform and no duplicate files', () => {
    for (const p of DOWNLOADS) expect(p.assets.filter((a) => a.primary)).toHaveLength(1)
    expect(new Set(assets.map((a) => a.file)).size).toBe(assets.length)
  })

  it('marks the release as a pre-release', () => {
    expect(RELEASE.prerelease).toBe(true)
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
    for (const r of COMPAT_ROWS.filter((x) => x.status === 'unreleased')) expect(r.since).toBe('development branch')
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
