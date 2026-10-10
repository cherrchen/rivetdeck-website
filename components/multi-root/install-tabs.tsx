'use client'

import { useId, useState } from 'react'
import { CodeBlock } from '@/components/ui/code-block'
import { MULTI_ROOT_PACKAGE } from '@/lib/site'

const PROFILES = [
  { id: 'web', label: 'Web profile', note: 'Run DSH in the browser or headless server.' },
  { id: 'desktop', label: 'Desktop profile', note: 'Electron desktop; the install method is identical.' },
] as const

/** Profile switch that rewrites the install commands; both panels exist in the DOM for crawlers. */
export function InstallTabs() {
  const [active, setActive] = useState<(typeof PROFILES)[number]['id']>('web')
  const base = useId()

  return (
    <div>
      <div role="tablist" aria-label="DSH profile" className="inline-flex rounded-md border border-border p-0.5">
        {PROFILES.map((p) => (
          <button
            key={p.id}
            id={`${base}-tab-${p.id}`}
            role="tab"
            type="button"
            aria-selected={active === p.id}
            aria-controls={`${base}-panel-${p.id}`}
            tabIndex={active === p.id ? 0 : -1}
            onClick={() => setActive(p.id)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const next = active === 'web' ? 'desktop' : 'web'
                setActive(next)
                document.getElementById(`${base}-tab-${next}`)?.focus()
              }
            }}
            className={`rounded px-3 py-1.5 text-sm transition-colors ${active === p.id ? 'bg-inverse-bg text-inverse-fg' : 'text-fg-muted hover:text-fg'}`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {PROFILES.map((p) => (
        <div key={p.id} id={`${base}-panel-${p.id}`} role="tabpanel" aria-labelledby={`${base}-tab-${p.id}`} hidden={active !== p.id} className="mt-4">
          <p className="mb-3 text-sm text-fg-subtle">{p.note}</p>
          <CodeBlock
            title={`install · ${p.id}`}
            lines={[`dsh plugin --profile ${p.id} add ${MULTI_ROOT_PACKAGE}`, `dsh --profile ${p.id}`]}
          />
        </div>
      ))}
    </div>
  )
}
