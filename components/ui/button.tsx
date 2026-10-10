import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex h-10 items-center justify-center gap-2 rounded-full px-[18px] text-sm font-medium whitespace-nowrap transition-[background-color,color,transform] duration-150 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary: 'bg-inverse-bg text-inverse-fg hover:bg-inverse-hover',
  secondary: 'border border-border-strong bg-surface text-fg hover:bg-bg-subtle',
  ghost: 'px-3 text-fg-muted hover:text-fg',
}

export function ButtonLink({
  href,
  variant = 'primary',
  children,
  className = '',
  external,
  newTab,
}: {
  href: string
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
  /** Localized screen-reader suffix for links that open a new tab; required so no locale shows English. */
  newTab: string
}) {
  const isExternal = external ?? /^https?:/.test(href)
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {isExternal ? <span className="sr-only">{newTab}</span> : null}
    </a>
  )
}
