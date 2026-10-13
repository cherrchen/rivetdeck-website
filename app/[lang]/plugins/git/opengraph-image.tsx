import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Git for DSH: status, diffs and commits in the right sidebar'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Git · plugin for DSH',
    title: 'The repository, inside the session.',
    subtitle: 'Local Git status, staged and working-tree diffs, a lane graph and branch controls in the right sidebar.',
    accent: '#ff9c6b',
  })
}
