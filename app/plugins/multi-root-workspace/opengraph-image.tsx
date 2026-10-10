import { ogSize, renderOg } from '@/lib/og'

export const alt = 'Multi-root Workspace: one workspace, multiple roots, for DSH'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOg({
    eyebrow: 'Multi-root Workspace · plugin for DSH',
    title: 'One Workspace. Multiple Roots.',
    subtitle: 'Native read, write, edit and bash across a primary root and additional roots.',
    accent: '#4fe0c0',
  })
}
