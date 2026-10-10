import { Fragment, type ReactNode } from 'react'
import { parseRich } from '@/lib/i18n/format'

/** Renders one dictionary string, mapping each `<tag>inner</tag>` to a React element from `tags`. */
export function Rich({ text, tags }: { text: string; tags: Record<string, (children: string) => ReactNode> }) {
  return (
    <>
      {parseRich(text).map((part, i) => {
        if (!part.tag) return <Fragment key={i}>{part.text}</Fragment>
        const render = tags[part.tag]
        return <Fragment key={i}>{render ? render(part.text) : part.text}</Fragment>
      })}
    </>
  )
}

export function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-bg-muted px-1.5 py-0.5 text-[13px]">{children}</code>
}
