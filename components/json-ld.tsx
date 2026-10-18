/**
 * JSON-LD structured data. Rendered as a native script tag per the Next.js
 * guide; `<` is escaped so a string can never break out of the element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
