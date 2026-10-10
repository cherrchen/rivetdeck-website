import type { Arch, PlatformId } from './releases'

export interface PlatformSignals {
  userAgent: string
  /** `navigator.userAgentData.platform`, when the browser provides it. */
  uaDataPlatform?: string | undefined
  maxTouchPoints?: number | undefined
}

/**
 * Desktop platform of the visitor's browser, or `null` for phones, tablets,
 * Chromebooks and anything unrecognized. Mobile systems are excluded because
 * none of the installers can run there.
 */
export function detectPlatform({ userAgent, uaDataPlatform, maxTouchPoints = 0 }: PlatformSignals): PlatformId | null {
  const hint = uaDataPlatform?.toLowerCase()
  if (hint) {
    if (hint === 'windows') return 'windows'
    if (hint === 'macos') return maxTouchPoints > 1 ? null : 'macos'
    if (hint === 'linux') return 'linux'
    return null
  }
  const ua = userAgent
  if (/Android|iPhone|iPad|iPod|CrOS/i.test(ua)) return null
  if (/Windows/i.test(ua)) return 'windows'
  // iPadOS 13+ reports a Macintosh user agent; real Macs have no multi-touch screen.
  if (/Macintosh|Mac OS X/i.test(ua)) return maxTouchPoints > 1 ? null : 'macos'
  if (/Linux|X11/i.test(ua)) return 'linux'
  return null
}

/** Maps `getHighEntropyValues(['architecture'])` to a download architecture. */
export function archFromHint(architecture: string | undefined): Arch | null {
  if (!architecture) return null
  const value = architecture.toLowerCase()
  if (value === 'arm') return 'arm64'
  if (value === 'x86') return 'x64'
  return null
}

/** What the browser could tell about the visitor's system. */
export interface Environment {
  platform: PlatformId | null
  /** `null` when the browser does not expose the CPU architecture. */
  arch: Arch | null
  /** `true` once a browser was inspected; `false` for server rendering. */
  checked: boolean
}

export const UNKNOWN_ENVIRONMENT: Environment = { platform: null, arch: null, checked: false }
