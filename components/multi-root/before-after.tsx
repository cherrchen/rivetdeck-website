import type { Dictionary } from '@/lib/i18n/dictionaries'
import { fmt } from '@/lib/i18n/format'

function Chip({ children, tone = 'plain' }: { children: React.ReactNode; tone?: 'plain' | 'accent' }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-xs ${
        tone === 'accent' ? 'border-accent bg-accent-soft text-fg' : 'border-border-strong bg-surface text-fg-muted'
      }`}
    >
      {children}
    </span>
  )
}

/** Side-by-side comparison of one-session-per-repository and one session with several roots. */
export function BeforeAfter({ t }: { t: Dictionary['multiRoot']['problem'] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-xl border border-border bg-surface p-6">
        <p className="text-sm text-fg-subtle">{t.without.label}</p>
        <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">{t.without.title}</h3>
        <div className="mt-6 space-y-3" aria-hidden="true">
          {['web', 'api', 'design-system'].map((repo, i) => (
            <div key={repo} className="flex items-center gap-3">
              <Chip>{fmt(t.without.session, { n: i + 1 })}</Chip>
              <span className="h-px flex-1 bg-border-strong" />
              <Chip>{repo}</Chip>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
          {t.without.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
      <article className="rounded-xl border border-accent bg-surface p-6">
        <p className="text-sm text-fg-subtle">{t.with.label}</p>
        <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">{t.with.title}</h3>
        <div className="mt-6 flex flex-wrap items-center gap-3" aria-hidden="true">
          <Chip tone="accent">{t.with.session}</Chip>
          <span className="h-px w-6 bg-accent" />
          <div className="flex flex-wrap gap-2">
            <Chip tone="accent">web</Chip>
            <Chip tone="accent">api</Chip>
            <Chip tone="accent">design-system</Chip>
          </div>
        </div>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
          {t.with.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}
