/**
 * Git plugin compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-plugin-git, read on `main`. The released package (v0.2.7)
 * covers all seventeen releases, from `0.1.5-rc.2` through `0.2.1-rc.2`.
 *
 * `since` names the plugin release that first listed the release: v0.2.2
 * introduced the exact allowlist (before that, `>=0.1.5-rc.2 <0.2.0` was a
 * range), v0.2.3 added 0.1.7-rc.2, v0.2.4 added the 0.2.0 candidates,
 * v0.2.5 added 0.2.1-alpha.2, v0.2.6 added 0.1.5-rc.3, 0.2.1-alpha.1 and
 * 0.2.1-alpha.3, and v0.2.7 added the rest of the 0.2.1 line through rc.2.
 *
 * Row notes are localized: they live in the dictionaries under `git.compat.notes`,
 * keyed by `id`.
 */
import type { CompatPlatform, CompatRow, CompatStatus } from './compat'

export const GIT_PLUGIN_VERSION = '0.2.7'

const row = (release: string, status: CompatStatus, since: string): CompatRow => ({ id: release, release, status, since })

export const GIT_COMPAT_ROWS: readonly CompatRow[] = [
  row('0.1.5-rc.2', 'verified', 'v0.2.0'),
  row('0.1.5-rc.3', 'verified', 'v0.2.6'),
  row('0.1.6-alpha.1', 'verified', 'v0.2.2'),
  row('0.1.6-alpha.2', 'verified', 'v0.2.2'),
  row('0.1.7-alpha.1', 'verified', 'v0.2.2'),
  row('0.1.7-alpha.2', 'verified', 'v0.2.2'),
  row('0.1.7-rc.1', 'verified', 'v0.2.2'),
  row('0.1.7-rc.2', 'verified', 'v0.2.3'),
  row('0.2.0-rc.1', 'verified', 'v0.2.4'),
  row('0.2.0-rc.2', 'verified', 'v0.2.4'),
  row('0.2.1-alpha.1', 'verified', 'v0.2.6'),
  row('0.2.1-alpha.2', 'verified', 'v0.2.5'),
  row('0.2.1-alpha.3', 'verified', 'v0.2.6'),
  row('0.2.1-alpha.4', 'verified', 'v0.2.7'),
  row('0.2.1-alpha.5', 'verified', 'v0.2.7'),
  row('0.2.1-rc.1', 'verified', 'v0.2.7'),
  row('0.2.1-rc.2', 'verified', 'v0.2.7'),
  { id: 'other', release: null, status: 'unsupported', since: '—' },
]

export const GIT_COMPAT_PLATFORMS = [
  { id: 'macos', name: 'macOS', status: 'verified' },
  { id: 'linux', name: 'Linux', status: 'verified' },
  { id: 'windows', name: 'Windows', status: 'verified' },
] as const satisfies readonly CompatPlatform[]
