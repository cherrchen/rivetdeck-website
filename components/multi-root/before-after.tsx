function Chip({ children, tone = 'plain' }: { children: React.ReactNode; tone?: 'plain' | 'accent' }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-xs ${
        tone === 'accent' ? 'border-accent bg-accent-soft text-fg' : 'border-border-strong bg-bg text-fg-muted'
      }`}
    >
      {children}
    </span>
  )
}

/** Side-by-side comparison of one-session-per-repository and one session with several roots. */
export function BeforeAfter() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-xl border border-border bg-bg p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">Without the plugin</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">One session, one writable root</h3>
        <div className="mt-6 space-y-3" aria-hidden="true">
          {['web', 'api', 'design-system'].map((repo, i) => (
            <div key={repo} className="flex items-center gap-3">
              <Chip>session {i + 1}</Chip>
              <span className="h-px flex-1 bg-border-strong" />
              <Chip>{repo}</Chip>
            </div>
          ))}
        </div>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
          <li>A change that spans repositories needs one session per repository.</li>
          <li>You carry context between sessions by hand.</li>
          <li>The agent cannot edit the API contract and its client in one turn.</li>
        </ul>
      </article>
      <article className="rounded-xl border border-accent bg-bg p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">With Multi-root Workspace</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">One session, a primary root plus N more</h3>
        <div className="mt-6 flex flex-wrap items-center gap-3" aria-hidden="true">
          <Chip tone="accent">session 1</Chip>
          <span className="h-px w-6 bg-accent" />
          <div className="flex flex-wrap gap-2">
            <Chip tone="accent">web</Chip>
            <Chip tone="accent">api</Chip>
            <Chip tone="accent">design-system</Chip>
          </div>
        </div>
        <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
          <li>The agent reads, edits and runs commands across every registered root.</li>
          <li>Each root keeps its own Git history and its own instruction files.</li>
          <li>The session working directory does not change; only the writable scope widens.</li>
        </ul>
      </article>
    </div>
  )
}
