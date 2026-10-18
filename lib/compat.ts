/**
 * Shared compatibility-matrix types for the DSH plugin pages.
 *
 * Each plugin declares an exact list of verified DSH releases — never a semver
 * range — so the tables render one row per plugin version with the support set
 * that version ships, as declared in `src/compat/dsh-version.ts` at its tag.
 *
 * - `verified`     in the released allowlist; exercised by the plugin's CI matrix.
 * - `partial`      works with a documented limit (platform rows only).
 * - `unreleased`   accepted only on the development branch; not in the npm package.
 * - `unsupported`  not on any list.
 */
export type CompatStatus = 'verified' | 'partial' | 'unreleased' | 'unsupported'

export interface CompatVersionRow {
  /** Plugin release tag, e.g. `'v0.2.7'` — doubles as the changelog anchor id. */
  release: string
  /** Exact DSH releases this plugin version supports. Mutually exclusive with `range`. */
  dsh?: readonly string[]
  /** Declared peer range, for releases that predate the exact allowlist. */
  range?: string
}

export interface CompatPlatform {
  /** Key of the localized platform note. */
  id: string
  name: string
  status: CompatStatus
}
