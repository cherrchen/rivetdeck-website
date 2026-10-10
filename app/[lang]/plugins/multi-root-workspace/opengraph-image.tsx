import { locales } from '@/lib/i18n/config'
import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Multi-root Workspace: one workspace, multiple roots, for DSH'
export const size = ogSize
export const contentType = 'image/png'

/** Both locales share the English card, so each is rendered once at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function Image() {
  return renderOg({
    eyebrow: 'Multi-root Workspace · plugin for DSH',
    title: 'One Workspace. Multiple Roots.',
    subtitle: 'Native read, write, edit and bash across a primary root and additional roots.',
    accent: '#4fe0c0',
  })
}
