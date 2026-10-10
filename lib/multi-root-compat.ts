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
 */

export type CompatStatus = 'verified' | 'partial' | 'unreleased' | 'unsupported'

export interface CompatRow {
  /** Exact DSH release string, or a description for the catch-all row. */
  release: string
  status: CompatStatus
  /** Plugin release that first added the exact version to the allowlist. */
  since: string
  note: string
}

export const COMPAT_PLUGIN_VERSION = '0.1.5'

export const COMPAT_ROWS: readonly CompatRow[] = [
  { release: '0.1.5-rc.2', status: 'verified', since: 'v0.1.1', note: 'Baseline of the compatibility contract.' },
  { release: '0.1.6-alpha.1', status: 'verified', since: 'v0.1.1', note: 'Sandbox confinement is asynchronous from this release.' },
  { release: '0.1.6-alpha.2', status: 'verified', since: 'v0.1.2', note: 'Same shapes as 0.1.6-alpha.1; panel session lookup fixed.' },
  { release: '0.1.7-alpha.1', status: 'verified', since: 'v0.1.2', note: 'Needs adapters: session format 4, in-process plugin packages, bash execute().result().' },
  { release: '0.1.7-alpha.2', status: 'verified', since: 'v0.1.3', note: 'Same shapes as 0.1.7-alpha.1.' },
  { release: '0.1.7-rc.1', status: 'verified', since: 'v0.1.3', note: 'Install enforces an exact peerDependencies match from this release.' },
  { release: '0.1.7-rc.2', status: 'verified', since: 'v0.1.4', note: 'Same shapes as 0.1.7-rc.1.' },
  { release: '0.2.0-rc.1', status: 'verified', since: 'v0.1.5', note: 'DSH 0.2 release candidate.' },
  { release: '0.2.0-rc.2', status: 'verified', since: 'v0.1.5', note: 'The runtime inside Rivetdeck 0.2.0-beta.2.' },
  { release: '0.2.1-alpha.1', status: 'unreleased', since: 'development branch', note: 'Dynamic working directories; not in the published package.' },
  { release: '0.2.1-alpha.2', status: 'unreleased', since: 'development branch', note: 'Development pin; not in the published package.' },
  { release: 'Any other release', status: 'unsupported', since: '—', note: 'The gated rows do not start; the harness behaves as if the plugin were not installed.' },
]

export const COMPAT_STATUS_LABEL: Record<CompatStatus, string> = {
  verified: 'Verified',
  partial: 'Partial',
  unreleased: 'Development only',
  unsupported: 'Unsupported',
}

export const COMPAT_PLATFORMS = [
  { name: 'macOS', mechanism: 'Seatbelt profile plus in-process fence', status: 'verified' as const },
  { name: 'Linux', mechanism: 'bwrap or Landlock plus in-process fence', status: 'verified' as const },
  {
    name: 'Windows',
    mechanism: 'Released: in-process fence for file tools only; bash cannot write additional roots. A root-set ACL runner exists on the development branch.',
    status: 'partial' as const,
  },
]
