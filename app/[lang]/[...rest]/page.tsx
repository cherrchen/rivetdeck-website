import { notFound } from 'next/navigation'

/** Catches every unknown path under a locale so the localized `not-found.tsx` renders with a 404 status. */
export default function CatchAll() {
  notFound()
}
