import { describe, expect, it } from 'vitest'
import { archFromHint, detectPlatform } from '@/lib/platform'

const UA = {
  windows: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
  mac: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  linux: 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
  android: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36',
  iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148',
  chromeos: 'Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 Chrome/130.0 Safari/537.36',
}

describe('detectPlatform', () => {
  it('recognizes desktop systems from the user agent', () => {
    expect(detectPlatform({ userAgent: UA.windows })).toBe('windows')
    expect(detectPlatform({ userAgent: UA.mac })).toBe('macos')
    expect(detectPlatform({ userAgent: UA.linux })).toBe('linux')
  })

  it('returns null for phones and Chromebooks, which cannot run the installers', () => {
    expect(detectPlatform({ userAgent: UA.android })).toBeNull()
    expect(detectPlatform({ userAgent: UA.iphone })).toBeNull()
    expect(detectPlatform({ userAgent: UA.chromeos })).toBeNull()
  })

  it('treats a touch-screen Macintosh (iPadOS) as not a Mac', () => {
    expect(detectPlatform({ userAgent: UA.mac, maxTouchPoints: 5 })).toBeNull()
    expect(detectPlatform({ userAgent: UA.mac, maxTouchPoints: 0 })).toBe('macos')
  })

  it('prefers the userAgentData platform when it is present', () => {
    expect(detectPlatform({ userAgent: UA.android, uaDataPlatform: 'Windows' })).toBe('windows')
    expect(detectPlatform({ userAgent: UA.windows, uaDataPlatform: 'macOS' })).toBe('macos')
    expect(detectPlatform({ userAgent: UA.windows, uaDataPlatform: 'Android' })).toBeNull()
    expect(detectPlatform({ userAgent: UA.windows, uaDataPlatform: 'Chrome OS' })).toBeNull()
  })

  it('returns null when nothing is recognized', () => {
    expect(detectPlatform({ userAgent: '' })).toBeNull()
  })
})

describe('archFromHint', () => {
  it('maps CPU architecture hints to download architectures', () => {
    expect(archFromHint('arm')).toBe('arm64')
    expect(archFromHint('x86')).toBe('x64')
    expect(archFromHint('')).toBeNull()
    expect(archFromHint(undefined)).toBeNull()
    expect(archFromHint('riscv')).toBeNull()
  })
})
