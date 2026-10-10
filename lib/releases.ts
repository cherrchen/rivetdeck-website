/**
 * Rivetdeck release data. Every asset name and size below was read from the
 * GitHub Release `v0.2.0-beta.2` of cherrchen/rivetdeck (published 2026-10-09).
 * Nothing here is invented: a platform without a published asset is not listed.
 * Update this file together with a new release; the download links point at the
 * release asset URLs, never at a mirror.
 */

import { links } from './site'

export interface ReleaseAsset {
  /** Exact file name on the GitHub Release. */
  file: string
  /** Size in bytes, as reported by GitHub. */
  bytes: number
  /** What the file is, shown next to the button. */
  kind: string
  /** Primary download for its row. */
  primary?: boolean
}

export interface PlatformDownloads {
  id: 'macos' | 'windows' | 'linux'
  name: string
  /** Architectures with at least one published installer. */
  note: string
  assets: readonly ReleaseAsset[]
}

export const RELEASE = {
  tag: 'v0.2.0-beta.2',
  version: '0.2.0-beta.2',
  prerelease: true,
  publishedAt: '2026-10-09',
  url: `${links.rivetdeck.releases}/tag/v0.2.0-beta.2`,
  checksums: 'SHA256SUMS.txt',
} as const

export function assetUrl(file: string): string {
  return `${links.rivetdeck.releases}/download/${RELEASE.tag}/${file}`
}

export function formatSize(bytes: number): string {
  return `${Math.round(bytes / 1_000_000)} MB`
}

export const DOWNLOADS: readonly PlatformDownloads[] = [
  {
    id: 'macos',
    name: 'macOS',
    note: 'Apple Silicon and Intel',
    assets: [
      { file: 'Rivetdeck-0.2.0-beta.2-mac-arm64.dmg', bytes: 290_461_425, kind: 'Apple Silicon · DMG', primary: true },
      { file: 'Rivetdeck-0.2.0-beta.2-mac-x64.dmg', bytes: 297_299_055, kind: 'Intel · DMG' },
      { file: 'Rivetdeck-0.2.0-beta.2-mac-arm64.zip', bytes: 302_238_853, kind: 'Apple Silicon · ZIP' },
      { file: 'Rivetdeck-0.2.0-beta.2-mac-x64.zip', bytes: 309_225_560, kind: 'Intel · ZIP' },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    note: 'x64 and ARM64 installers',
    assets: [
      { file: 'Rivetdeck-0.2.0-beta.2-win-x64.exe', bytes: 358_507_719, kind: 'x64 · installer', primary: true },
      { file: 'Rivetdeck-0.2.0-beta.2-win-arm64.exe', bytes: 337_997_668, kind: 'ARM64 · installer' },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    note: 'AppImage and DEB, x64 and ARM64',
    assets: [
      { file: 'Rivetdeck-0.2.0-beta.2-linux-x86_64.AppImage', bytes: 282_779_817, kind: 'x64 · AppImage', primary: true },
      { file: 'Rivetdeck-0.2.0-beta.2-linux-arm64.AppImage', bytes: 284_281_306, kind: 'ARM64 · AppImage' },
      { file: 'Rivetdeck-0.2.0-beta.2-linux-amd64.deb', bytes: 212_826_572, kind: 'x64 · DEB' },
      { file: 'Rivetdeck-0.2.0-beta.2-linux-arm64.deb', bytes: 207_206_540, kind: 'ARM64 · DEB' },
    ],
  },
]
