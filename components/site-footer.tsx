import Link from 'next/link'
import { Container } from './ui/container'

export interface FooterColumn {
  title: string
  links: readonly { label: string; href: string }[]
}

export function SiteFooter({ columns, note, newTab }: { columns: readonly FooterColumn[]; note: string; newTab: string }) {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-(--cols)" style={{ '--cols': `repeat(${columns.length}, minmax(0, 1fr))` } as React.CSSProperties}>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] font-medium">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const external = /^https?:/.test(link.href)
                  const className = 'text-[13px] text-fg-subtle transition-colors hover:text-fg'
                  if (link.href.startsWith('/')) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      </li>
                    )
                  }
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={className}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {link.label}
                        {external ? <span className="sr-only">{newTab}</span> : null}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-3xl text-xs leading-6 whitespace-pre-line text-fg-subtle">{note}</p>
      </Container>
    </footer>
  )
}
