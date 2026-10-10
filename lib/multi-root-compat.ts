/**
 * Multi-root Workspace compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-plugin-multi-root-workspace, read at the tag `v0.1.5` (the
 * latest release) and on the development branch `feat/dsh-0.2.1-alpha.2-compat`.
 * Status is declared per row; it is never derived from semver ordering because
 * the plugin supports an exact list, not a range.
 *
 * - `verified`     in the released allowlist; exercised by the plugin's CI matrix.
 * - `partial`      works with a documented limit (platform rows only).
 * - `unreleased`   accepted only on the development branch; not in the npm package.
 * - `unsupported`  not on any list; the gated rows do not start.
 *
 * Row notes are localized: they live in the dictionaries under `multiRoot.compat.notes`,
 * keyed by `id`.
 */

export type CompatStatus = 'verified' | 'partial' | 'unreleased' | 'unsupported'

export interface CompatRow {
  /** Key of the localized note; equals `release` for real releases. */
  id: string
  /** Exact DSH release string, or `null` for the catch-all row (its label is localized). */
  release: string | null
  status: CompatStatus
  /** Plugin release that first added the exact version to the allowlist, or `dev` for the development branch only. */
  since: string
}

export const COMPAT_PLUGIN_VERSION = '0.1.5'

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
  row('0.2.1-alpha.1', 'unreleased', 'dev'),
  row('0.2.1-alpha.2', 'unreleased', 'dev'),
  { id: 'other', release: null, status: 'unsupported', since: '—' },
]

export const COMPAT_PLATFORMS = [
  { id: 'macos', name: 'macOS', status: 'verified' },
  { id: 'linux', name: 'Linux', status: 'verified' },
  { id: 'windows', name: 'Windows', status: 'partial' },
] as const satisfies readonly { id: string; name: string; status: CompatStatus }[]
