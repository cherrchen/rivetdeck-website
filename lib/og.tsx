import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }

/** Renders a 1200x630 social card with the page's own title, subtitle and accent. */
export function renderOg({ eyebrow, title, subtitle, accent }: { eyebrow: string; title: string; subtitle: string; accent: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0a0a0a',
          color: '#ededed',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#a1a1a1' }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: accent }} />
          {eyebrow}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, color: '#ffffff' }}>{title}</div>
          <div style={{ marginTop: 28, fontSize: 34, lineHeight: 1.35, color: '#a1a1a1', maxWidth: 960 }}>{subtitle}</div>
        </div>
        <div style={{ height: 6, width: 160, background: accent }} />
      </div>
    ),
    ogSize,
  )
}
