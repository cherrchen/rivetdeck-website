import type { Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'
import { COMPAT_PLATFORMS, COMPAT_PLUGIN_VERSION, COMPAT_ROWS, type CompatStatus } from '@/lib/multi-root-compat'

type T = Dictionary['multiRoot']['compat']

const icon: Record<CompatStatus, string> = { verified: '✓', partial: '◐', unreleased: '◇', unsupported: '✕' }
const tone: Record<CompatStatus, string> = {
  verified: 'text-ok border-ok/40',
  partial: 'text-warn border-warn/40',
  unreleased: 'text-fg-muted border-border-strong',
  unsupported: 'text-bad border-bad/40',
}

export function StatusBadge({ status, label }: { status: CompatStatus; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${tone[status]}`}>
      <span aria-hidden="true">{icon[status]}</span>
      {label}
    </span>
  )
}

/** Support matrix rendered from `lib/multi-root-compat.ts`; status is declared, never computed from semver. */
export function CompatTable({ t }: { t: T }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border" tabIndex={0} role="region" aria-label={t.region}>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">{fmt(t.caption, { version: COMPAT_PLUGIN_VERSION })}</caption>
          <thead className="bg-bg-subtle text-xs text-fg-subtle">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.release}</th>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.status}</th>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.since}</th>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.notes}</th>
            </tr>
          </thead>
          <tbody>
            {COMPAT_ROWS.map((row) => (
              <tr key={row.id} className="border-t border-border align-top">
                <th scope="row" className={`px-4 py-3 text-[13px] font-medium ${row.release ? 'font-mono whitespace-nowrap' : ''}`}>{row.release ?? t.otherRelease}</th>
                <td className="px-4 py-3"><StatusBadge status={row.status} label={t.status[row.status]} /></td>
                <td className="px-4 py-3 font-mono text-xs whitespace-nowrap text-fg-subtle">{row.since === 'dev' ? t.sinceDev : row.since}</td>
                <td className="px-4 py-3 text-fg-muted">{t.notes[row.id as keyof typeof t.notes]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 text-lg font-medium tracking-[-0.02em]">{t.platforms}</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {COMPAT_PLATFORMS.map((p) => (
          <li key={p.id} className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">{p.name}</span>
              <StatusBadge status={p.status} label={t.status[p.status]} />
            </div>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{t.platformNotes[p.id]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
