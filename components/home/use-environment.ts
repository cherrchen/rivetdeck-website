'use client'

import { useSyncExternalStore } from 'react'
import { archFromHint, detectPlatform, UNKNOWN_ENVIRONMENT, type Environment } from '@/lib/platform'

interface UserAgentData {
  platform?: string
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }>
}

let current: Environment | undefined
const listeners = new Set<() => void>()

function read(): Environment {
  if (current) return current
  const nav = navigator as Navigator & { userAgentData?: UserAgentData }
  const platform = detectPlatform({
    userAgent: nav.userAgent,
    uaDataPlatform: nav.userAgentData?.platform,
    maxTouchPoints: nav.maxTouchPoints,
  })
  current = { platform, arch: null, checked: true }

  // The CPU architecture is only available asynchronously, and only in Chromium.
  if (platform && nav.userAgentData?.getHighEntropyValues) {
    nav.userAgentData.getHighEntropyValues(['architecture']).then(
      (values) => {
        const arch = archFromHint(values.architecture)
        if (arch && current) {
          current = { ...current, arch }
          for (const listener of listeners) listener()
        }
      },
      () => {
        // The browser refused the high-entropy hint; the platform default applies.
      },
    )
  }
  return current
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/**
 * The visitor's desktop platform and, where the browser exposes it, CPU
 * architecture. The server snapshot is "unknown", so statically rendered HTML
 * is neutral and the client refines it after hydration without a mismatch.
 */
export function useEnvironment(): Environment {
  return useSyncExternalStore(subscribe, read, () => UNKNOWN_ENVIRONMENT)
}
