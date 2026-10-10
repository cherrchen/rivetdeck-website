import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'

async function exists(file) {
  try { return (await stat(file)).isFile() } catch { return false }
}

/** Verify exported URLs against actual files, including the social image metadata. */
export async function verifyPages(directory, origin, basePath) {
  for (const file of ['404.html', '.nojekyll', 'sitemap.xml', 'robots.txt', 'social/rivetdeck.png', 'social/multi-root-workspace.png']) {
    assert(await exists(path.join(directory, file)), `Missing export: ${file}`)
  }
  const pages = ['index.html', 'zh/index.html', 'plugins/multi-root-workspace/index.html', 'zh/plugins/multi-root-workspace/index.html']
  let checked = 0
  for (const page of pages) {
    const html = await readFile(path.join(directory, page), 'utf8')
    for (const match of html.matchAll(/<(?:a|link|script|img|meta)\b[^>]*>/g)) {
      const tag = match[0]
      const socialImage = /(?:property|name)="(?:og:image|twitter:image)"/.test(tag)
      const attributes = socialImage ? /\bcontent="([^"]+)"/g : /\b(?:href|src)="([^"]+)"/g
      for (const [, raw] of tag.matchAll(attributes)) {
        const value = raw.replaceAll('&amp;', '&')
        if (!value.startsWith('/') && !value.startsWith(`${origin}/`)) continue
        if (value.startsWith('//')) continue
        const url = new URL(value, origin)
        assert(!basePath || url.pathname === basePath || url.pathname.startsWith(`${basePath}/`), `${page}: URL lacks repository prefix: ${value}`)
        const file = path.join(directory, decodeURIComponent(url.pathname.slice(basePath.length)).replace(/^\//, ''))
        assert(await exists(file) || await exists(path.join(file, 'index.html')), `${page}: URL has no exported file: ${value}`)
        checked++
      }
    }
  }
  console.log(`Verified ${checked} exported URLs across ${pages.length} public pages.`)
}
