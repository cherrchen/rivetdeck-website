/** Site-wide constants: canonical origin and every external link used by the pages. */

/** Next adds this prefix to Link URLs; plain anchors and image sources need it explicitly. */
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
}

/** Absolute public URL, including the repository path on GitHub Pages. */
export function siteUrl(path: string): string {
  return new URL(withBasePath(path), getSiteUrl()).toString()
}

/**
 * Canonical origin. `NEXT_PUBLIC_SITE_URL` wins; otherwise the Vercel production
 * hostname, then localhost. No production domain is hard-coded.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return new URL(explicit)
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercel) return new URL(`https://${vercel}`)
  return new URL('http://localhost:3000')
}

const rivetdeckRepo = 'https://github.com/cherrchen/rivetdeck'
const multiRootRepo = 'https://github.com/cherrchen/dsh-plugin-multi-root-workspace'

export const links = {
  rivetdeck: {
    repo: rivetdeckRepo,
    releases: `${rivetdeckRepo}/releases`,
    license: `${rivetdeckRepo}/blob/develop/LICENSE`,
    brandGuidelines: `${rivetdeckRepo}/blob/develop/BRAND_GUIDELINES.md`,
    issues: `${rivetdeckRepo}/issues`,
    /** Product page of the Windows Store listing (product id from apps/electron/windows-store.json of the app repository). */
    microsoftStore: 'https://apps.microsoft.com/detail/9P5FQ7D2PQVQ',
  },
  upstream: 'https://github.com/deepseek-ai/deepseek-harness',
  git: {
    repo: 'https://github.com/cherrchen/dsh-plugin-git',
  },
  themeStudio: {
    repo: 'https://github.com/cherrchen/dsh-theme-studio',
  },
  multiRoot: {
    repo: multiRootRepo,
    npm: 'https://www.npmjs.com/package/@dsh-electron/dsh-plugin-multi-root-workspace',
    changelog: `${multiRootRepo}/blob/v0.1.5/CHANGELOG.en.md`,
    architecture: `${multiRootRepo}/blob/v0.1.5/docs/architecture/multi-root-workspace.md`,
    readme: `${multiRootRepo}/blob/v0.1.5/README.en.md`,
    issues: `${multiRootRepo}/issues`,
    adr: {
      dialect: `${multiRootRepo}/blob/v0.1.5/docs/decisions/ADR-0003-dialect-grant-widening.md`,
      lease: `${multiRootRepo}/blob/v0.1.5/docs/decisions/ADR-0007-registry-authority-lease.md`,
      panel: `${multiRootRepo}/blob/v0.1.5/docs/decisions/ADR-0008-panel-session-derived-authority.md`,
      compat: `${multiRootRepo}/blob/v0.1.5/docs/decisions/ADR-0009-dsh-compat-contract.md`,
      instructions: `${multiRootRepo}/blob/v0.1.5/docs/decisions/ADR-0010-additional-root-instruction-scope.md`,
    },
  },
} as const

export const MULTI_ROOT_PACKAGE = '@dsh-electron/dsh-plugin-multi-root-workspace'
