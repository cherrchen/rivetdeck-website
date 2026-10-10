'use client'

import { useId, useState } from 'react'
import { CodeBlock } from '@/components/ui/code-block'
import type { CopyLabels } from '@/components/ui/copy-button'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { COMPAT_PLUGIN_VERSION } from '@/lib/multi-root-compat'
import { MULTI_ROOT_PACKAGE } from '@/lib/site'

const SOURCES = ['npm', 'tarball', 'github', 'local'] as const
type Source = (typeof SOURCES)[number]

const TARBALL = `dsh-electron-dsh-plugin-multi-root-workspace-${COMPAT_PLUGIN_VERSION}.tgz`
const GITHUB = `github:cherrchen/dsh-plugin-multi-root-workspace#v${COMPAT_PLUGIN_VERSION}`
const REPO = 'https://github.com/cherrchen/dsh-plugin-multi-root-workspace.git'

function sourceLines(source: Source): string[] {
  const add = `dsh plugin --profile web add`
  switch (source) {
    case 'npm':
      return [`${add} ${MULTI_ROOT_PACKAGE}`, 'dsh --profile web']
    case 'tarball':
      return [`pnpm pack ${MULTI_ROOT_PACKAGE}`, `${add} ./${TARBALL}`]
    case 'github':
      return [`${add} ${GITHUB}`]
    case 'local':
      return [
        `git clone ${REPO}`,
        'cd dsh-plugin-multi-root-workspace',
        'export CI=true',
        'pnpm install',
        'pnpm build',
        `${add} "$PWD"`,
      ]
  }
}

/** Source switch that shows the four README install methods; every panel stays in the DOM for crawlers. */
export function InstallTabs({ t, copy }: { t: Dictionary['multiRoot']['install']['tabs']; copy: CopyLabels }) {
  const [active, setActive] = useState<Source>('npm')
  const base = useId()

  return (
    <div>
      <div role="tablist" aria-label={t.label} className="inline-flex flex-wrap rounded-md border border-border p-0.5">
        {SOURCES.map((id) => (
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
                e.preventDefault()
                const i = SOURCES.indexOf(active)
                const next = SOURCES[(i + (e.key === 'ArrowRight' ? 1 : -1) + SOURCES.length) % SOURCES.length]
                if (!next) return
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
      {SOURCES.map((id) => {
        const lines = sourceLines(id)
        return (
          <div key={id} id={`${base}-panel-${id}`} role="tabpanel" aria-labelledby={`${base}-tab-${id}`} hidden={active !== id} className="mt-4">
            <p className="mb-3 text-sm text-fg-subtle">{t[id].note}</p>
            <CodeBlock title={`install · ${id}`} copy={copy} lines={lines} />
          </div>
        )
      })}
    </div>
  )
}
