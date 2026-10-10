import { COMPAT_PLATFORMS, COMPAT_PLUGIN_VERSION, COMPAT_ROWS, COMPAT_STATUS_LABEL, type CompatStatus } from '@/lib/multi-root-compat'

const icon: Record<CompatStatus, string> = { verified: '✓', partial: '◐', unreleased: '◇', unsupported: '✕' }
const tone: Record<CompatStatus, string> = {
  verified: 'text-ok border-ok/40',
  partial: 'text-warn border-warn/40',
  unreleased: 'text-fg-muted border-border-strong',
  unsupported: 'text-bad border-bad/40',
}

export function StatusBadge({ status }: { status: CompatStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${tone[status]}`}>
      <span aria-hidden="true">{icon[status]}</span>
      {COMPAT_STATUS_LABEL[status]}
    </span>
  )
}

/** Support matrix rendered from `lib/multi-root-compat.ts`; status is declared, never computed from semver. */
export function CompatTable() {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border" tabIndex={0} role="region" aria-label="DSH release support matrix">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">Supported DSH releases for plugin version {COMPAT_PLUGIN_VERSION} and the development branch</caption>
          <thead className="bg-bg-subtle text-xs text-fg-subtle">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">DSH release</th>
              <th scope="col" className="px-4 py-3 font-medium">Status</th>
              <th scope="col" className="px-4 py-3 font-medium">Added in</th>
              <th scope="col" className="px-4 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {COMPAT_ROWS.map((row) => (
              <tr key={row.release} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-3 font-mono text-[13px] font-medium whitespace-nowrap">{row.release}</th>
                <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                <td className="px-4 py-3 font-mono text-xs whitespace-nowrap text-fg-subtle">{row.since}</td>
                <td className="px-4 py-3 text-fg-muted">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 text-lg font-semibold tracking-[-0.02em]">Platforms</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {COMPAT_PLATFORMS.map((p) => (
          <li key={p.name} className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">{p.name}</span>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{p.mechanism}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
