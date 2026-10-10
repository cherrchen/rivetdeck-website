import type { ReactNode } from 'react'
import { Container } from './container'

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = 'plain',
}: {
  id: string
  eyebrow: string
  title: string
  lead?: ReactNode
  children: ReactNode
  tone?: 'plain' | 'subtle'
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-border py-20 sm:py-28 ${tone === 'subtle' ? 'bg-bg-subtle' : ''}`}
    >
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">
          {title}
        </h2>
        {lead ? <p className="mt-4 max-w-2xl text-base leading-7 text-fg-muted sm:text-lg">{lead}</p> : null}
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  )
}
