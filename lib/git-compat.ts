/**
 * Git plugin compatibility data.
 *
 * Source of truth: `src/compat/dsh-version.ts` of cherrchen/dsh-plugin-git,
 * read at each release tag. One row per published plugin version, newest
 * first, listing the exact DSH releases that version supports.
 *
 * v0.1.0 through v0.2.1 predate the exact allowlist: their package declared
 * `@deepseek-ai/dsh-*` peers as ranges (`>=0.1.2-alpha.4 <0.2.0` at v0.1.0,
 * `>=0.1.5-rc.2 <0.2.0` from v0.2.0), shown here as the declared range. The
 * exact list landed in v0.2.2 and only grows afterwards.
 */
import type { CompatPlatform, CompatVersionRow } from './compat'

export const GIT_PLUGIN_VERSION = '0.2.7'

const exact = (release: string, dsh: readonly string[]): CompatVersionRow => ({ release, dsh })
const range = (release: string, range: string): CompatVersionRow => ({ release, range })

export const GIT_COMPAT_VERSIONS: readonly CompatVersionRow[] = [
  exact('v0.2.7', [
    '0.2.1-rc.2', '0.2.1-rc.1', '0.2.1-alpha.5', '0.2.1-alpha.4',
    '0.2.1-alpha.3', '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2',
    '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2',
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3',
    '0.1.5-rc.2',
  ]),
  exact('v0.2.6', [
    '0.2.1-alpha.3', '0.2.1-alpha.2', '0.2.1-alpha.1', '0.2.0-rc.2',
    '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2',
    '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.3',
    '0.1.5-rc.2',
  ]),
  exact('v0.2.5', [
    '0.2.1-alpha.2', '0.2.0-rc.2', '0.2.0-rc.1', '0.1.7-rc.2',
    '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2',
    '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.2.4', [
    '0.2.0-rc.2', '0.2.0-rc.1', '0.1.7-rc.2', '0.1.7-rc.1',
    '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2', '0.1.6-alpha.1',
    '0.1.5-rc.2',
  ]),
  exact('v0.2.3', [
    '0.1.7-rc.2', '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1',
    '0.1.6-alpha.2', '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  exact('v0.2.2', [
    '0.1.7-rc.1', '0.1.7-alpha.2', '0.1.7-alpha.1', '0.1.6-alpha.2',
    '0.1.6-alpha.1', '0.1.5-rc.2',
  ]),
  range('v0.2.1', '>=0.1.5-rc.2 <0.2.0'),
  range('v0.2.0', '>=0.1.5-rc.2 <0.2.0'),
  range('v0.1.0', '>=0.1.2-alpha.4 <0.2.0'),
]

export const GIT_COMPAT_PLATFORMS = [
  { id: 'macos', name: 'macOS', status: 'verified' },
  { id: 'linux', name: 'Linux', status: 'verified' },
  { id: 'windows', name: 'Windows', status: 'verified' },
] as const satisfies readonly CompatPlatform[]
