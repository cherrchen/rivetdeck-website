/**
 * Theme Studio compatibility data.
 *
 * Source of truth: `SUPPORTED_DSH_RELEASES` in `src/compat/dsh-version.ts` of
 * cherrchen/dsh-theme-studio, read on `main`. All twelve releases are in the
 * published v0.1.4 package; the plugin carries no runtime gate, so the list is
 * a verification claim enforced by `peerDependencies` at install time.
 *
 * `since` names the plugin release that first listed the release: v0.1.0
 * shipped with six, v0.1.1 added the 0.1.7 release candidates, v0.1.3 added
 * the 0.2.0 candidates and v0.1.4 added the 0.2.1 alphas.
 *
 * Row notes are localized: they live in the dictionaries under
 * `themeStudio.compat.notes`, keyed by `id`.
 */
import type { CompatRow, CompatStatus } from './compat'

export const THEME_STUDIO_PLUGIN_VERSION = '0.1.4'

const row = (release: string, status: CompatStatus, since: string): CompatRow => ({ id: release, release, status, since })

export const THEME_STUDIO_COMPAT_ROWS: readonly CompatRow[] = [
  row('0.1.5-rc.2', 'verified', 'v0.1.0'),
  row('0.1.5-rc.3', 'verified', 'v0.1.0'),
  row('0.1.6-alpha.1', 'verified', 'v0.1.0'),
  row('0.1.6-alpha.2', 'verified', 'v0.1.0'),
  row('0.1.7-alpha.1', 'verified', 'v0.1.0'),
  row('0.1.7-alpha.2', 'verified', 'v0.1.0'),
  row('0.1.7-rc.1', 'verified', 'v0.1.1'),
  row('0.1.7-rc.2', 'verified', 'v0.1.1'),
  row('0.2.0-rc.1', 'verified', 'v0.1.3'),
  row('0.2.0-rc.2', 'verified', 'v0.1.3'),
  row('0.2.1-alpha.1', 'verified', 'v0.1.4'),
  row('0.2.1-alpha.2', 'verified', 'v0.1.4'),
  { id: 'other', release: null, status: 'unsupported', since: '—' },
]
