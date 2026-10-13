/**
 * Multi-root Workspace compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-plugin-multi-root-workspace, read on `main`. All eleven
 * releases are in the published package (v0.1.6); the plugin refuses to start
 * its gated rows on anything else. Status is declared per row; it is never
 * derived from semver ordering because the plugin supports an exact list, not
 * a range.
 *
 * - `verified`     in the released allowlist; exercised by the plugin's CI matrix.
 * - `partial`      works with a documented limit (platform rows only).
 * - `unreleased`   accepted only on the development branch; not in the npm package.
 * - `unsupported`  not on any list; the gated rows do not start.
 *
 * Row notes are localized: they live in the dictionaries under `multiRoot.compat.notes`,
 * keyed by `id`.
 */
import type { CompatPlatform, CompatRow, CompatStatus } from './compat'

export type { CompatStatus, CompatRow }

export const COMPAT_PLUGIN_VERSION = '0.1.6'

const row = (release: string, status: CompatStatus, since: string): CompatRow => ({ id: release, release, status, since })

export const COMPAT_ROWS: readonly CompatRow[] = [
  row('0.1.5-rc.2', 'verified', 'v0.1.1'),
  row('0.1.6-alpha.1', 'verified', 'v0.1.1'),
  row('0.1.6-alpha.2', 'verified', 'v0.1.2'),
  row('0.1.7-alpha.1', 'verified', 'v0.1.2'),
  row('0.1.7-alpha.2', 'verified', 'v0.1.3'),
  row('0.1.7-rc.1', 'verified', 'v0.1.3'),
  row('0.1.7-rc.2', 'verified', 'v0.1.4'),
  row('0.2.0-rc.1', 'verified', 'v0.1.5'),
  row('0.2.0-rc.2', 'verified', 'v0.1.5'),
  row('0.2.1-alpha.1', 'verified', 'v0.1.6'),
  row('0.2.1-alpha.2', 'verified', 'v0.1.6'),
  { id: 'other', release: null, status: 'unsupported', since: '—' },
]

export const COMPAT_PLATFORMS = [
  { id: 'macos', name: 'macOS', status: 'verified' },
  { id: 'linux', name: 'Linux', status: 'verified' },
  { id: 'windows', name: 'Windows', status: 'verified' },
] as const satisfies readonly CompatPlatform[]
