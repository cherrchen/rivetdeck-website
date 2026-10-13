import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Theme Studio: eight palettes for DSH'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Theme Studio · plugin for DSH',
    title: 'Eight palettes. One click away.',
    subtitle: 'A Themes row in Settings → General with hover preview, click to apply, and a Default that restores the official appearance.',
    accent: '#c4b0f2',
  })
}
