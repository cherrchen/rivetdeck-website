/** One numbered install step: copy on the left, a code block or control on the right. */
export function Step({ n, title, body, children }: { n: string; title: string; body: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
      <div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-accent font-mono text-sm text-accent">{n}</span>
        <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-fg-muted">{body}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </li>
  )
}
