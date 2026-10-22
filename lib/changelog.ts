/**
 * Shared changelog model for the release-history pages.
 *
 * Copy stays in the dictionaries (`<plugin>.changelog.releases`, one entry per
 * published version, newest first); this module owns the structural types and
 * the repo-relative documentation targets that `<tag>` markup in items links
 * to. Item markup follows the dictionary convention: `<code>`, `<b>` and one
 * named tag per entry of the plugin's `DocLinks` map.
 */
import type { Locale } from './i18n/config'

export type ChangelogKind = 'added' | 'changed' | 'fixed' | 'removed' | 'deprecated' | 'security' | 'upgrade'

export interface ChangelogSection {
  /** Standard Keep-a-Changelog group; the chip label comes from `kinds[kind]`. Loose-typed so dictionary data widens into it. */
  kind?: ChangelogKind | (string & {})
  /** Verbatim section label; overrides `kind` for non-standard headings. */
  title?: string
  items: readonly string[]
}

export interface ChangelogRelease {
  version: string
  /** ISO date `YYYY-MM-DD`, rendered per locale. */
  date: string
  /** Actual git tag when it does not follow `v<version>` (legacy tag names). */
  tag?: string
  /** Optional paragraph between the version heading and the first section. */
  lead?: string
  sections?: readonly ChangelogSection[]
}

/** Display + link name of a release. */
export const tagOf = (release: Pick<ChangelogRelease, 'version' | 'tag'>) => release.tag ?? `v${release.version}`

/** GitHub URLs for one release entry. `from`/`to`/`ref` are full tag names. */
export const compareUrl = (repo: string, from: string, to: string) => `${repo}/compare/${from}...${to}`
export const releaseUrl = (repo: string, ref: string) => `${repo}/releases/tag/${ref}`
export const blobUrl = (repo: string, ref: string, path: string) => `${repo}/blob/${ref}/${path}`

/**
 * Link targets used inside changelog items, keyed by the `<tag>` name in the
 * dictionary string. A plain string is one path; `{ en, zh }` picks the side of
 * the repository's bilingual pair matching the page locale.
 */
export type DocLinks = Record<string, string | { en: string; zh: string }>

export const GIT_DOC_LINKS: DocLinks = {
  readmeInstallation: { en: 'README.md#installation', zh: 'README.zh.md#installation' },
  tbWindowsFlood: 'docs/troubleshooting/windows-desktop-console-flood.md',
}

export const THEME_STUDIO_DOC_LINKS: DocLinks = {}

export const MULTI_ROOT_DOC_LINKS: DocLinks = {
  adr0007: 'docs/decisions/ADR-0007-registry-authority-lease.md',
  adr0008: 'docs/decisions/ADR-0008-panel-session-derived-authority.md',
  adr0009: 'docs/decisions/ADR-0009-dsh-compat-contract.md',
  adr0010: 'docs/decisions/ADR-0010-additional-root-instruction-scope.md',
  adr0011: 'docs/decisions/ADR-0011-multi-root-workspace-consumers.md',
  adr0013: 'docs/decisions/ADR-0013-per-root-and-per-tool-access.md',
  adr0014: 'docs/decisions/ADR-0014-root-limit-and-provider-conflict.md',
  adr0015: 'docs/decisions/ADR-0015-files-tab-plugin-owned-browsing.md',
  adr0016: 'docs/decisions/ADR-0016-files-tab-native-tree-fork.md',
  adr0017: 'docs/decisions/ADR-0017-three-state-root-access-and-sandbox-modes.md',
  adr0020: 'docs/decisions/ADR-0020-windows-normal-deny-groups.md',
  adr0021: 'docs/decisions/ADR-0021-auto-review-context-companion.md',
  adr0022: 'docs/decisions/ADR-0022-auto-review-loader-entry.md',
  autoReviewReadme: { en: 'src/auto-review/README.en.md', zh: 'src/auto-review/README.md' },
  tbInstallApproval: 'docs/troubleshooting/install-stops-at-build-approval.md',
  tbRegistryOwner: 'docs/troubleshooting/registry-owned-by-another-process.md',
  tbUnsupported: 'docs/troubleshooting/unsupported-dsh-release.md',
}

/** Which file of each repository's bilingual changelog pair a locale reads. */
export const CHANGELOG_SOURCE_FILE: Record<'git' | 'themeStudio' | 'multiRoot', Record<Locale, string>> = {
  git: { en: 'CHANGELOG.md', zh: 'CHANGELOG.zh.md' },
  themeStudio: { en: 'CHANGELOG.en.md', zh: 'CHANGELOG.md' },
  multiRoot: { en: 'CHANGELOG.en.md', zh: 'CHANGELOG.md' },
}
