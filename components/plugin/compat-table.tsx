import type { CompatPlatform, CompatStatus, CompatVersionRow } from '@/lib/compat'

/** Localized labels a plugin page must provide for the matrix. */
export interface CompatCopy {
  region: string
  caption: string
  columns: { version: string; supported: string }
  /** Badge on the row of the currently published plugin version. */
  latest: string
  /** Hint after a peer-range cell for releases predating the exact allowlist. */
  rangeNote: string
  /** Heading for the platform cards; omit (with `platforms`) for platform-agnostic plugins. */
  platforms?: string
  status: Record<CompatStatus, string>
  platformNotes?: Record<string, string>
}

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

/**
 * Per-version support matrix: one row per published plugin version, each
 * listing the exact DSH releases it supports (or the declared peer range for
 * versions that predate the allowlist). Version cells link to the changelog
 * anchor when `changelogPath` is given. Data is declared, never derived from
 * semver ordering.
 */
export function CompatTable({
  t,
  rows,
  platforms = [],
  version,
  changelogPath,
}: {
  t: CompatCopy
  rows: readonly CompatVersionRow[]
  platforms?: readonly CompatPlatform[]
  version: string
  /** Localized route of the changelog page; version cells link to `#<tag>` anchors there. */
  changelogPath?: string
}) {
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border" tabIndex={0} role="region" aria-label={t.region}>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">{t.caption}</caption>
          <thead className="bg-bg-subtle text-xs text-fg-subtle">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.version}</th>
              <th scope="col" className="px-4 py-3 font-medium">{t.columns.supported}</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(0, 5).map((row) => (
              <tr key={row.release} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-3 font-mono text-[13px] font-medium whitespace-nowrap">
                  {changelogPath ? (
                    <a href={`${changelogPath}#${row.release}`} className="hover:underline hover:underline-offset-4">{row.release}</a>
                  ) : (
                    row.release
                  )}
                  {row.release === `v${version}` ? (
                    <span className="ml-2 rounded-md bg-accent-soft px-1.5 py-0.5 font-sans text-[11px] font-medium text-accent">{t.latest}</span>
                  ) : null}
                </th>
                <td className="px-4 py-3">
                  {row.dsh ? (
                    <ul className="flex flex-wrap gap-1.5">
                      {row.dsh.map((v) => (
                        <li key={v} className="rounded border border-border bg-bg-subtle px-1.5 py-0.5 font-mono text-xs whitespace-nowrap text-fg-muted">
                          {v}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-[13px] text-fg-muted">
                      <code className="font-mono">{row.range}</code>
                      <span className="ml-1.5 text-xs text-fg-subtle">({t.rangeNote})</span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {platforms.length > 0 && (
        <>
          <h3 className="mt-10 text-lg font-medium tracking-[-0.02em]">{t.platforms}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {platforms.map((p) => (
              <li key={p.id} className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{p.name}</span>
                  <StatusBadge status={p.status} label={t.status[p.status]} />
                </div>
                <p className="mt-2 text-sm leading-6 text-fg-muted">{t.platformNotes?.[p.id]}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
