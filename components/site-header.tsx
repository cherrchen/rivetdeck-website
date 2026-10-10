import type { ReactNode } from 'react'
import { LanguageSwitcher } from './language-switcher'
import { Container } from './ui/container'
import { MobileMenu, type NavItem } from './ui/mobile-menu'
import { ThemeToggle } from './ui/theme-toggle'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries'

/** Sticky header shared by every page; the brand and links are supplied per page. */
export function SiteHeader({
  brand,
  items,
  cta,
  locale,
  path,
  common,
}: {
  brand: ReactNode
  items: readonly NavItem[]
  cta?: { label: string; href: string }
  locale: Locale
  /** Unprefixed path of the current page, used by the language switch. */
  path: string
  common: Dictionary['common']
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="relative flex h-14 items-center justify-between gap-3">
        {brand}
        <nav aria-label={common.primaryNav} className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
              {item.external ? <span className="sr-only">{common.opensInNewTab}</span> : null}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          {cta ? (
            <a
              href={cta.href}
              className="hidden h-9 items-center rounded-md bg-inverse-bg px-3.5 text-sm font-medium text-inverse-fg hover:opacity-90 sm:inline-flex"
            >
              {cta.label}
            </a>
          ) : null}
          <LanguageSwitcher locale={locale} path={path} labelTemplate={common.switchLanguage} />
          <ThemeToggle label={common.themeToggle} />
          <MobileMenu
            items={cta ? [...items, { label: cta.label, href: cta.href }] : items}
            labels={{ open: common.menuOpen, close: common.menuClose, nav: common.mobileNav }}
          />
        </div>
      </Container>
    </header>
  )
}
