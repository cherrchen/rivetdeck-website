import Link from 'next/link'
import { Container } from './ui/container'

export interface FooterColumn {
  title: string
  links: readonly { label: string; href: string }[]
}

export function SiteFooter({ columns, note, newTab }: { columns: readonly FooterColumn[]; note: string; newTab: string }) {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-medium">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const external = /^https?:/.test(link.href)
                  const className = 'text-sm text-fg-muted transition-colors hover:text-fg'
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
        <p className="mt-12 max-w-3xl border-t border-border pt-6 text-xs leading-6 text-fg-subtle">{note}</p>
      </Container>
    </footer>
  )
}
