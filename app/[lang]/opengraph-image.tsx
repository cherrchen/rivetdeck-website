import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Rivetdeck: DeepSeek Harness as a desktop app'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Rivetdeck · unofficial desktop distribution',
    title: 'DeepSeek Harness, as a desktop app.',
    subtitle: 'macOS, Windows and Linux. Git and Theme Studio preinstalled. MIT.',
    accent: '#98a5ff',
  })
}
