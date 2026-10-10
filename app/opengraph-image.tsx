import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Rivetdeck: DeepSeek Harness as a desktop app'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOg({
    eyebrow: 'Rivetdeck · unofficial desktop distribution',
    title: 'DeepSeek Harness, as a desktop app.',
    subtitle: 'macOS, Windows and Linux. Git and Theme Studio preinstalled. MIT.',
    accent: '#98a5ff',
  })
}
