/** One feature: copy on one side, a visual on the other; `reverse` swaps the sides on wide screens. */
export function FeatureRow({
  kicker,
  title,
  body,
  points,
  visual,
  reverse = false,
}: {
  kicker: string
  title: string
  body: string
  points: readonly string[]
  visual: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className={reverse ? 'lg:order-2' : undefined}>
        <p className="text-sm text-fg-subtle">{kicker}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-balance sm:text-3xl">{title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-fg-muted">{body}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-fg-muted">
              <span aria-hidden="true" className="mt-0.5 text-accent">
                →
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={`min-w-0 ${reverse ? 'lg:order-1' : ''}`}>{visual}</div>
    </div>
  )
}
