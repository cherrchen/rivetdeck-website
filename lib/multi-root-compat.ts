/**
 * Multi-root Workspace compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-plugin-multi-root-workspace, read at each release tag. One row
 * per published plugin version, newest first, listing the exact DSH releases
 * that version supports. The plugin refuses to start its gated rows on any
 * release outside the list. Support is declared per row; it is never derived
 * from semver ordering because the plugin supports an exact list, not a range.
 *
 * v0.1.0 predates the exact allowlist (the compat gate landed in v0.1.1): its
 * package declared `@deepseek-ai/dsh-*` peers as the `>=0.1.2-alpha.4 <0.2.0`
 * range, shown here as the declared range.
 */
import type { CompatPlatform, CompatVersionRow } from './compat'

export type { CompatStatus, CompatVersionRow } from './compat'

export const COMPAT_PLUGIN_VERSION = '0.1.8'

const exact = (release: string, dsh: readonly string[]): CompatVersionRow => ({ release, dsh })
const range = (release: string, range: string): CompatVersionRow => ({ release, range })

export const COMPAT_VERSIONS: readonly CompatVersionRow[] = [
  exact('v0.1.8', [
    '0.2.1-rc.2', '0.2.1-rc.1', '0.2.1-alpha.5', '0.2.1-alpha.4',
    '0.2.1-alpha.3', '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2',
    '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2',
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.7', [
    '0.2.1-rc.2', '0.2.1-rc.1', '0.2.1-alpha.5', '0.2.1-alpha.4',
    '0.2.1-alpha.3', '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2',
    '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2',
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.6', [
    '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2', '0.2.0-rc.1',
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.5', [
    '0.2.0-rc.2', '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1',
    '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1',
    '0.1.5-rc.2',
  ]),
  exact('v0.1.4', [
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.3', [
    '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2',
    '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.2', [
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.1.1', [
    '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  range('v0.1.0', '>=0.1.2-alpha.4 <0.2.0'),
]

export const COMPAT_PLATFORMS = [
  { id: 'macos', name: 'macOS', status: 'verified' },
  { id: 'linux', name: 'Linux', status: 'verified' },
  { id: 'windows', name: 'Windows', status: 'verified' },
] as const satisfies readonly CompatPlatform[]