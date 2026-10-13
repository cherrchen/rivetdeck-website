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

/** Git mark: a branch forking off a trunk inside the deck. */
export function GitMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
      <path d="M12 5v6.5" stroke="var(--bg)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 11.5c3 0 4.5 1.6 4.5 4" stroke="var(--bg)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="5" r="1.6" fill="var(--bg)" />
      <circle cx="16.5" cy="19" r="1.6" fill="var(--bg)" />
      <circle cx="12" cy="14.5" r="1.6" fill="var(--bg)" />
    </svg>
  )
}

/** Theme Studio mark: four swatch cards fanned across the deck. */
export function PaletteMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
      <rect x="5.4" y="8.2" width="5.6" height="7.6" rx="1.6" fill="var(--bg)" />
      <rect x="9.2" y="8.2" width="5.6" height="7.6" rx="1.6" fill="var(--bg)" opacity="0.66" />
      <rect x="13" y="8.2" width="5.6" height="7.6" rx="1.6" fill="var(--bg)" opacity="0.33" />
    </svg>
  )
}
