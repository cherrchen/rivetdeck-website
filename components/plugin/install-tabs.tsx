'use client'

import { useId, useState } from 'react'
import { CodeBlock } from '@/components/ui/code-block'
import type { CopyLabels } from '@/components/ui/copy-button'

const SOURCES = ['npm', 'tarball', 'github', 'local'] as const
type Source = (typeof SOURCES)[number]

/** Localized labels for the source switch, provided by the page's dictionary section. */
export interface InstallTabsCopy {
  label: string
  npm: { label: string; note: string }
  tarball: { label: string; note: string }
  github: { label: string; note: string }
  local: { label: string; note: string }
}

/** Everything the four install commands need to know about one plugin package. */
export interface InstallSpec {
  /** npm package name, e.g. `@dsh-electron/dsh-plugin-git`. */
  package: string
  /** Released version, used for the GitHub `#v…` pin and the default tarball name. */
  version: string
  /** `owner/repo` on GitHub. */
  repo: string
  /** Tarball file name; defaults to the `pnpm pack` output for the package. */
  tarball?: string
  /** Install command for a local checkout; defaults to `pnpm install`. */
  installCommand?: string
  /** Extra lines before the install step of a local checkout (e.g. `export CI=true`). */
  localPrelude?: readonly string[]
}

function sourceLines(source: Source, spec: InstallSpec): string[] {
  const add = 'dsh plugin --profile web add'
  const dir = spec.repo.split('/')[1] ?? spec.repo
  const tarball = spec.tarball ?? `${spec.package.replace(/^@/, '').replaceAll('/', '-')}-${spec.version}.tgz`
  switch (source) {
    case 'npm':
      return [`${add} ${spec.package}`, 'dsh --profile web']
    case 'tarball':
      return [`pnpm pack ${spec.package}`, `${add} ./${tarball}`]
    case 'github':
      return [`${add} github:${spec.repo}#v${spec.version}`]
    case 'local':
      return [
        `git clone https://github.com/${spec.repo}.git`,
        `cd ${dir}`,
        ...(spec.localPrelude ?? []),
        spec.installCommand ?? 'pnpm install',
        'pnpm build',
        `${add} "$PWD"`,
      ]
  }
}

/** Source switch that shows the four README install methods; every panel stays in the DOM for crawlers. */
export function InstallTabs({ spec, t, copy }: { spec: InstallSpec; t: InstallTabsCopy; copy: CopyLabels }) {
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
        const lines = sourceLines(id, spec)
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
