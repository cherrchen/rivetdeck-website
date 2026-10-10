'use client'

import { useId, useState } from 'react'
import { CodeBlock } from '@/components/ui/code-block'
import type { CopyLabels } from '@/components/ui/copy-button'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { MULTI_ROOT_PACKAGE } from '@/lib/site'

const PROFILES = ['web', 'desktop'] as const

/** Profile switch that rewrites the install commands; both panels exist in the DOM for crawlers. */
export function InstallTabs({ t, copy }: { t: Dictionary['multiRoot']['install']['tabs']; copy: CopyLabels }) {
  const [active, setActive] = useState<(typeof PROFILES)[number]>('web')
  const base = useId()

  return (
    <div>
      <div role="tablist" aria-label={t.label} className="inline-flex rounded-md border border-border p-0.5">
        {PROFILES.map((id) => (
          <button
            key={id}
            id={`${base}-tab-${id}`}
            role="tab"
            type="button"
            aria-selected={active === id}
            aria-controls={`${base}-panel-${id}`}
            tabIndex={active === id ? 0 : -1}
            onClick={() => setActive(id)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const next = active === 'web' ? 'desktop' : 'web'
                setActive(next)
                document.getElementById(`${base}-tab-${next}`)?.focus()
              }
            }}
            className={`rounded px-3 py-1.5 text-sm transition-colors ${active === id ? 'bg-inverse-bg text-inverse-fg' : 'text-fg-muted hover:text-fg'}`}
          >
            {t[id].label}
          </button>
        ))}
      </div>
      {PROFILES.map((id) => (
        <div key={id} id={`${base}-panel-${id}`} role="tabpanel" aria-labelledby={`${base}-tab-${id}`} hidden={active !== id} className="mt-4">
          <p className="mb-3 text-sm text-fg-subtle">{t[id].note}</p>
          <CodeBlock title={`install · ${id}`} copy={copy} lines={[`dsh plugin --profile ${id} add ${MULTI_ROOT_PACKAGE}`, `dsh --profile ${id}`]} />
        </div>
      ))}
    </div>
  )
}
