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

/** Multi-root mark: a workspace deck holding one primary root and two additional roots. */
export function RootsMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
      <rect x="5" y="5.2" width="7.2" height="13.6" rx="2.2" fill="var(--bg)" />
      <rect x="13.2" y="5.2" width="5.8" height="6.2" rx="1.8" fill="var(--bg)" />
      <rect x="13.2" y="12.6" width="5.8" height="6.2" rx="1.8" fill="var(--bg)" />
    </svg>
  )
}
