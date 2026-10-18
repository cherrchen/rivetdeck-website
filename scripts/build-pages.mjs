import { cp, mkdir, rename, rm, symlink, writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { verifyPages } from './verify-pages.mjs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const workspace = path.join(root, '.pages-build')
const configuredPath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/rivetdeck-website'
const basePath = configuredPath === '/' ? '' : configuredPath
if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/') || !/^\/[\w/-]+$/.test(basePath))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a path like /rivetdeck-website (no trailing slash).')
}
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cherrchen.github.io'
if (new URL(siteUrl).pathname !== '/') {
  throw new Error('NEXT_PUBLIC_SITE_URL must be an origin; set the repository path using NEXT_PUBLIC_BASE_PATH.')
}

// Build a separate route tree: the server deployment keeps its locale proxy,
// while Pages gets real English routes instead of server-side rewrites.
await rm(workspace, { recursive: true, force: true })
await mkdir(workspace, { recursive: true })
for (const entry of ['app', 'components', 'lib', 'public', 'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'next.config.ts', 'postcss.config.mjs', 'tsconfig.json']) {
  await cp(path.join(root, entry), path.join(workspace, entry), { recursive: true })
}
await symlink(path.join(root, 'node_modules'), path.join(workspace, 'node_modules'), 'dir')
await mkdir(path.join(workspace, 'app/(localized)'), { recursive: true })
await rename(path.join(workspace, 'app/[lang]'), path.join(workspace, 'app/(localized)/[lang]'))
// Unknown URLs use the exported 404.html; catch-all routes cannot be exported.
await rm(path.join(workspace, 'app/(localized)/[lang]/[...rest]'), { recursive: true })
const localized = '@/app/(localized)/[lang]'
const english = path.join(workspace, 'app/(english)')
await mkdir(english, { recursive: true })
await writeFile(path.join(english, 'layout.tsx'), `import Layout from '${localized}/layout'
import type { ReactNode } from 'react'
export { metadata, viewport } from '${localized}/layout'
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return Layout({ children, params: Promise.resolve({ lang: 'en' }) })
}
`)
const pages = [
  '',
  'plugins/git',
  'plugins/git/changelog',
  'plugins/theme-studio',
  'plugins/theme-studio/changelog',
  'plugins/multi-root-workspace',
  'plugins/multi-root-workspace/changelog',
]
for (const route of pages) {
  const target = path.join(english, route)
  await mkdir(target, { recursive: true })
  const source = `${localized}${route ? `/${route}` : ''}`
  await writeFile(path.join(target, 'page.tsx'), `import Page, { generateMetadata as localizedMetadata } from '${source}/page'
const props = { params: Promise.resolve({ lang: 'en' }), searchParams: Promise.resolve({}) }
export function generateMetadata() { return localizedMetadata(props) }
export default function EnglishPage() { return Page(props) }
`)

}

// File-convention OG routes inside multiple root layouts can get inconsistent
// generated hashes in a static export. Use stable, explicitly declared URLs.
const socialName = (route) => {
  if (route === '') return 'rivetdeck'
  const segments = route.split('/')
  const leaf = segments.at(-1)
  return leaf === 'changelog' ? `${segments.at(-2)}-changelog` : leaf
}
for (const route of pages) {
  const name = socialName(route)
  const original = path.join(workspace, 'app/(localized)/[lang]', route, 'opengraph-image.tsx')
  await rename(original, path.join(workspace, `lib/pages-${name}-og.tsx`))
  const target = path.join(workspace, 'app/social', `${name}.png`)
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, 'route.ts'), `import Image from '@/lib/pages-${name}-og'
export const dynamic = 'force-static'
export function GET() { return Image() }
`)
}

const result = spawnSync(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack'], {
  cwd: workspace,
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl },
})
if (result.error) throw result.error
if (result.status !== 0) process.exit(result.status ?? 1)
await writeFile(path.join(workspace, 'out/.nojekyll'), '')
await verifyPages(path.join(workspace, 'out'), siteUrl, basePath)
// Only replace the previous export after a successful build and URL verification.
await rm(path.join(root, 'out'), { recursive: true, force: true })
await cp(path.join(workspace, 'out'), path.join(root, 'out'), { recursive: true })
console.log(`GitHub Pages export: ${path.join(root, 'out')} (${siteUrl}${basePath}/)`)
