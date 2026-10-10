/** Original Rivetdeck mark: a rivet (disc with a point) seated in a rounded deck. */
export function RivetMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
      <circle cx="12" cy="12" r="5.5" fill="var(--bg)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  )
}

/** Multi-root mark: three roots joining one workspace node. */
export function RootsMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="5" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="5" cy="19" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="19" cy="19" r="2.2" fill="currentColor" stroke="none" />
      <path d="M12 7.2V12M5 16.8V13.5c0-.8.7-1.5 1.5-1.5h11c.8 0 1.5.7 1.5 1.5v3.3M12 12v4.8" />
    </svg>
  )
}
