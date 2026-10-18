/**
 * Theme Studio compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-theme-studio, read at each release tag. One row per published
 * plugin version, newest first, listing the exact DSH releases that version
 * supports. The plugin carries no runtime gate, so the list is a verification
 * claim enforced by `peerDependencies` at install time.
 */
import type { CompatVersionRow } from './compat'

export const THEME_STUDIO_PLUGIN_VERSION = '0.1.5'

const exact = (release: string, dsh: readonly string[]): CompatVersionRow => ({ release, dsh })

export const THEME_STUDIO_COMPAT_VERSIONS: readonly CompatVersionRow[] = [
  exact('v0.1.5', [
    '0.2.1-rc.2', '0.2.1-rc.1', '0.2.1-alpha.5', '0.2.1-alpha.4',
    '0.2.1-alpha.3', '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2',
    '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2',
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3',
    '0.1.5-rc.2',
  ]),
  exact('v0.1.4', [
    '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2', '0.2.0-rc.1',
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3', '0.1.5-rc.2',
  ]),
  exact('v0.1.3', [
    '0.2.0-rc.2', '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1',
    '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1',
    '0.1.5-rc.3', '0.1.5-rc.2',
  ]),
  exact('v0.1.2', [
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3', '0.1.5-rc.2',
  ]),
  exact('v0.1.1', [
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3', '0.1.5-rc.2',
  ]),
  exact('v0.1.0', [
    '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1',
    '0.1.5-rc.3', '0.1.5-rc.2',
  ]),
]
