'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { THEMES, type ThemeColors } from '@/lib/themes'

type Mode = 'auto' | 'light' | 'dark'

const MODE_IDS: readonly Mode[] = ['auto', 'light', 'dark']

/** Maps a palette to CSS custom properties; `light-dark()` then follows `color-scheme`. */
function vars(light: ThemeColors, dark: ThemeColors): React.CSSProperties {
  const out: Record<string, string> = {}
  for (const key of Object.keys(light) as (keyof ThemeColors)[]) {
    out[`--t-${key}`] = `light-dark(${light[key]}, ${dark[key]})`
  }
  return out as React.CSSProperties
}

const swatch = (name: keyof ThemeColors) => ({ background: `var(--t-${name})` })

/**
 * Interactive preview of the eight Theme Studio palettes plus Default. It is a
 * reduced rendering of the app chrome using the real palette values, not a
 * screenshot; real captures appear next to it.
 */
export function ThemePreview({ t }: { t: Dictionary['themePreview'] }) {
  const [selected, setSelected] = useState('nordic')
  const [mode, setMode] = useState<Mode>('auto')
  const theme = THEMES.find((t) => t.id === selected) ?? THEMES[0]!
  const scheme = mode === 'auto' ? undefined : mode

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
      <div>
        <div role="group" aria-label={t.groupLabel} className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {THEMES.map((palette) => {
            const active = palette.id === selected
            return (
              <button
                key={palette.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(palette.id)}
                style={{ ...vars(palette.light, palette.dark), colorScheme: scheme }}
                className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                  active ? 'border-fg bg-bg-muted' : 'border-border hover:bg-bg-subtle'
                }`}
              >
                <span aria-hidden="true" className="grid h-6 w-9 shrink-0 grid-cols-2 overflow-hidden rounded border border-border-strong">
                  <span style={swatch('base')} />
                  <span style={swatch('accent')} />
                  <span style={swatch('surface')} />
                  <span style={swatch('text')} />
                </span>
                <span className="font-medium">{palette.name}</span>
              </button>
            )
          })}
        </div>
        <fieldset className="mt-4 min-w-0">
          <legend className="mb-2 text-xs font-medium text-fg-subtle">{t.appearance}</legend>
          <div className="inline-flex rounded-md border border-border p-0.5">
            {MODE_IDS.map((id) => (
              <label key={id} className="cursor-pointer">
                <input
                  type="radio"
                  name="preview-mode"
                  value={id}
                  checked={mode === id}
                  onChange={() => setMode(id)}
                  className="peer sr-only"
                />
                <span className="block rounded px-2.5 py-1 text-xs text-fg-muted peer-checked:bg-inverse-bg peer-checked:text-inverse-fg peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                  {t.modes[id]}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <div
          aria-hidden="true"
          style={{ ...vars(theme.light, theme.dark), colorScheme: scheme, background: 'var(--t-base)', color: 'var(--t-text)' }}
          className="grid min-h-[260px] grid-cols-[34%_minmax(0,1fr)] overflow-hidden sm:aspect-[16/10] sm:grid-cols-[26%_minmax(0,1fr)_30%] rounded-xl border border-border-strong text-[10px] leading-4 sm:text-[11px]"
        >
          <div className="flex flex-col gap-2 p-3" style={{ background: 'var(--t-sidebar)' }}>
            <div className="font-semibold">Rivetdeck</div>
            <div className="rounded px-2 py-1.5 text-center" style={{ background: 'var(--t-surface)' }}>
              {t.mock.newSession}
            </div>
            <div style={{ color: 'var(--t-muted)' }}>{t.mock.plugins}</div>
            <div className="mt-1" style={{ color: 'var(--t-muted)' }}>
              {t.mock.workspaces}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm" style={swatch('accent')} />
              web
            </div>
            <div className="rounded px-2 py-1" style={{ background: 'var(--t-surface)' }}>
              {t.mock.newSession}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <div className="font-medium">{t.mock.title}</div>
            <div className="w-full rounded-lg p-2.5" style={{ background: 'var(--t-surface)' }}>
              <div style={{ color: 'var(--t-muted)' }}>{t.mock.placeholder}</div>
              <div className="mt-4 flex items-center justify-between">
                <span style={{ color: 'var(--t-muted)' }}>{t.mock.sandbox}</span>
                <span className="grid h-5 w-5 place-items-center rounded-full" style={{ background: 'var(--t-accent)', color: 'var(--t-base)' }}>
                  ↑
                </span>
              </div>
            </div>
          </div>
          <div className="hidden flex-col gap-1.5 border-l p-3 sm:flex" style={{ borderColor: 'color-mix(in srgb, var(--t-text) 14%, transparent)' }}>
            <div className="font-mono" style={{ color: 'var(--t-muted)' }}>
              feat/checkout-flow
            </div>
            <div className="rounded py-1 text-center font-medium" style={{ background: 'var(--t-accent)', color: 'var(--t-base)' }}>
              Commit
            </div>
            {['Cart.tsx', 'config.ts'].map((f) => (
              <div key={f} className="flex items-center justify-between">
                <span>{f}</span>
                <span className="font-semibold" style={{ color: 'var(--t-accent)' }}>
                  M
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <span>NOTES.md</span>
              <span style={{ color: 'var(--t-muted)' }}>U</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-fg-subtle" aria-live="polite">
          <span className="font-medium text-fg">{theme.name}</span> — {t.descriptions[theme.id as keyof typeof t.descriptions]} {t.caption}
        </p>
      </div>
    </div>
  )
}
