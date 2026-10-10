import type { ReactNode } from 'react'
import { Container } from './ui/container'
import { MobileMenu, type NavItem } from './ui/mobile-menu'
import { ThemeToggle } from './ui/theme-toggle'

/** Sticky header shared by every page; the brand and links are supplied per page. */
export function SiteHeader({
  brand,
  items,
  cta,
}: {
  brand: ReactNode
  items: readonly NavItem[]
  cta?: { label: string; href: string }
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="relative flex h-14 items-center justify-between gap-4">
        {brand}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
              {item.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {cta ? (
            <a
              href={cta.href}
              className="hidden h-9 items-center rounded-md bg-inverse-bg px-3.5 text-sm font-medium text-inverse-fg hover:opacity-90 sm:inline-flex"
            >
              {cta.label}
            </a>
          ) : null}
          <ThemeToggle />
          <MobileMenu items={cta ? [...items, { label: cta.label, href: cta.href }] : items} />
        </div>
      </Container>
    </header>
  )
}
