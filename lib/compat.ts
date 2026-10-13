/**
 * Shared compatibility-matrix types for the DSH plugin pages.
 *
 * Each plugin declares an exact list of verified DSH releases — never a semver
 * range — so the tables render a `status` that is declared per row, not derived
 * from version ordering.
 *
 * - `verified`     in the released allowlist; exercised by the plugin's CI matrix.
 * - `partial`      works with a documented limit (platform rows only).
 * - `unreleased`   accepted only on the development branch; not in the npm package.
 * - `unsupported`  not on any list.
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

export interface CompatPlatform {
  /** Key of the localized platform note. */
  id: string
  name: string
  status: CompatStatus
}
