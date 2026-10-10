import type { ReactNode } from 'react'
import { Container } from './container'

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  lead?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-24 sm:py-32">
      <Container>
        {eyebrow ? <p className="mb-4 text-sm text-fg-subtle">{eyebrow}</p> : null}
        <h2
          id={`${id}-title`}
          className="max-w-3xl text-[32px] leading-[1.1] font-medium tracking-[-0.04em] text-balance sm:text-[44px] sm:leading-[1.05]"
        >
          {title}
        </h2>
        {lead ? <p className="mt-5 max-w-2xl text-base leading-7 text-fg-muted sm:text-[17px]">{lead}</p> : null}
        <div className="mt-14">{children}</div>
      </Container>
    </section>
  )
}
