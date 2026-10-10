import Image from 'next/image'
import type { ScreenshotSpec } from '@/lib/screenshots'

/**
 * A native Rivetdeck screenshot in both appearances. Only the one matching the
 * active theme is displayed; the hidden one is lazy and is never fetched.
 */
export function Screenshot({
  shot,
  alt,
  sizes = '(min-width: 1200px) 1136px, 100vw',
  priority = false,
  className = '',
  crop,
}: {
  shot: ScreenshotSpec
  /** Localized description of the capture. */
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
  /** Tailwind classes that crop the capture, e.g. `aspect-square object-cover object-right-top`. */
  crop?: string
}) {
  const fit = crop ?? ''
  const common = {
    width: shot.width,
    height: shot.height,
    sizes,
    className: `h-auto w-full ${fit} ${className}`,
  }
  return (
    <>
      <Image {...common} alt={alt} src={`/screenshots/${shot.name}-light.png`} priority={priority} loading={priority ? undefined : 'lazy'} className={`${common.className} dark:hidden`} />
      <Image {...common} alt={alt} src={`/screenshots/${shot.name}-dark.png`} loading="lazy" className={`${common.className} hidden dark:block`} />
    </>
  )
}

/**
 * Bordered frame that gives screenshots a consistent edge on both themes.
 * `fade` dissolves the lower part of the capture into the page background.
 */
export function Frame({ children, caption, fade = false }: { children: React.ReactNode; caption?: string; fade?: boolean }) {
  return (
    <figure>
      <div className={`overflow-hidden rounded-xl border border-border bg-surface ${fade ? 'fade-bottom' : ''}`}>{children}</div>
      {caption ? <figcaption className="mt-3 text-[13px] text-fg-subtle">{caption}</figcaption> : null}
    </figure>
  )
}
