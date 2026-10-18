import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Git for DSH changelog: every release'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Git · plugin for DSH',
    title: 'Changelog',
    subtitle: 'Every published release of the Git plugin, newest first.',
    accent: '#ff9c6b',
  })
}
