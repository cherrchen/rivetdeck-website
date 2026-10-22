/**
 * Rivetdeck release data. Every GitHub asset name and size below was read from
 * the GitHub Release `v0.2.0-beta.5` of cherrchen/rivetdeck (published
 * 2026-10-21). Nothing here is invented: a platform without a published asset
 * is not listed. Update this file together with a new release; the download
 * links point at the release asset URLs, never at a mirror.
 *
 * Windows lists the Microsoft Store first, then the GitHub installers. The
 * Store build of this release is package version 1.0.54.0 (the release's
 * `store-request-54.json` names tag `v0.2.0-beta.5` and both architectures;
 * `store-published-54.json` reports it published).
 */

import { links } from './site'

export type PlatformId = 'macos' | 'windows' | 'linux'
export type Arch = 'arm64' | 'x64'
export type Channel = 'store' | 'github'
export type AssetFormat = 'dmg' | 'zip' | 'exe' | 'appimage' | 'deb' | 'store'

export interface DownloadOption {
  platform: PlatformId
  channel: Channel
  format: AssetFormat
  /** Architecture of the file; the Store listing serves both and is `universal`. */
  arch: Arch | 'universal'
  /** Exact asset name on the GitHub Release; absent for the Store listing. */
  file?: string
  /** Size in bytes as reported by GitHub; absent for the Store listing. */
  bytes?: number
  /** Where the user goes. */
  href: string
}

export const RELEASE = {
  tag: 'v0.2.0-beta.5',
  version: '0.2.0-beta.5',
  prerelease: true,
  publishedAt: '2026-10-21',
  url: `${links.rivetdeck.releases}/tag/v0.2.0-beta.5`,
  checksums: 'SHA256SUMS.txt',
  storePackageVersion: '1.0.54.0',
} as const

export function assetUrl(file: string): string {
  return `${links.rivetdeck.releases}/download/${RELEASE.tag}/${file}`
}

export function formatSize(bytes: number): string {
  return `${Math.round(bytes / 1_000_000)} MB`
}

function github(platform: PlatformId, format: AssetFormat, arch: Arch, suffix: string, bytes: number): DownloadOption {
  const file = `Rivetdeck-${RELEASE.version}-${suffix}`
  return { platform, channel: 'github', format, arch, file, bytes, href: assetUrl(file) }
}

/**
 * Options per platform in recommendation order: the first entry is the default,
 * and within a platform, earlier entries are preferred over later ones.
 */
export const DOWNLOADS: Record<PlatformId, readonly DownloadOption[]> = {
  macos: [
    github('macos', 'dmg', 'arm64', 'mac-arm64.dmg', 290_628_666),
    github('macos', 'dmg', 'x64', 'mac-x64.dmg', 297_476_842),
    github('macos', 'zip', 'arm64', 'mac-arm64.zip', 302_386_657),
    github('macos', 'zip', 'x64', 'mac-x64.zip', 309_373_366),
  ],
  windows: [
    { platform: 'windows', channel: 'store', format: 'store', arch: 'universal', href: links.rivetdeck.microsoftStore },
    github('windows', 'exe', 'x64', 'win-x64.exe', 358_720_066),
    github('windows', 'exe', 'arm64', 'win-arm64.exe', 338_206_620),
  ],
  linux: [
    github('linux', 'appimage', 'x64', 'linux-x86_64.AppImage', 282_919_119),
    github('linux', 'appimage', 'arm64', 'linux-arm64.AppImage', 284_420_434),
    github('linux', 'deb', 'x64', 'linux-amd64.deb', 212_924_636),
    github('linux', 'deb', 'arm64', 'linux-arm64.deb', 207_158_152),
  ],
}

export const PLATFORM_ORDER: readonly PlatformId[] = ['macos', 'windows', 'linux']

export interface Recommendation {
  platform: PlatformId
  /** The one download to offer first. */
  primary: DownloadOption
  /** Every other option of the platform, with the user's architecture first. */
  others: readonly DownloadOption[]
  /** Architecture the choice was made for: the detected one, or the platform default when the browser cannot tell. */
  assumedArch: Arch
}

/**
 * Chooses the primary download for a platform.
 *
 * Windows: the Microsoft Store listing always comes first (it serves both
 * architectures), and the GitHub installer for the user's architecture is the
 * first alternative. macOS and Linux: the first option whose architecture
 * matches; `arch === null` (undetectable) assumes arm64 on macOS and x64 on
 * Linux, the common cases.
 */
export function recommend(platform: PlatformId, arch: Arch | null, options: Record<PlatformId, readonly DownloadOption[]> = DOWNLOADS): Recommendation {
  const all = options[platform]
  const assumedArch: Arch = arch ?? (platform === 'macos' ? 'arm64' : 'x64')
  const first = all[0]
  if (!first) throw new Error(`No downloads published for ${platform}`)
  const primary = platform === 'windows' ? (all.find((o) => o.channel === 'store') ?? first) : (all.find((o) => o.arch === assumedArch) ?? first)
  const rank = (o: DownloadOption) => (o.arch === assumedArch ? 0 : o.arch === 'universal' ? 0 : 1)
  const others = all.filter((o) => o !== primary).sort((a, b) => rank(a) - rank(b))
  return { platform, primary, others, assumedArch }
}
