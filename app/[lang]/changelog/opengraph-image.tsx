import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Rivetdeck changelog: every release'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Rivetdeck · unofficial desktop distribution',
    title: 'Changelog',
    subtitle: 'Every published Rivetdeck release, newest first.',
    accent: '#98a5ff',
  })
}
