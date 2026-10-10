import { CopyButton, type CopyLabels } from './copy-button'

/**
 * Shell/command block. `lines` are rendered verbatim; the copied text is
 * `copyText` when given, otherwise the lines without comments or blank lines.
 */
export function CodeBlock({
  lines,
  title,
  copyText,
  prompt = '$',
  copy,
}: {
  lines: readonly string[]
  title?: string
  copyText?: string
  prompt?: string
  copy: CopyLabels
}) {
  const text =
    copyText ?? lines.filter((l) => l.trim() && !l.trim().startsWith('#')).join('\n')
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
        <span className="font-mono text-xs text-fg-subtle">{title ?? 'shell'}</span>
        <CopyButton text={text} labels={copy} />
      </figcaption>
      <pre className="overflow-x-auto px-4 py-3 text-[13px] leading-6 [overflow-wrap:anywhere]" tabIndex={0}>
        <code>
          {lines.map((line, i) => {
            const isComment = line.trim().startsWith('#')
            return (
              <span key={i} className="block whitespace-pre-wrap">
                {line === '' ? (
                  ' '
                ) : isComment ? (
                  <span className="text-fg-subtle">{line}</span>
                ) : (
                  <>
                    <span className="select-none text-fg-subtle">{prompt} </span>
                    {line}
                  </>
                )}
              </span>
            )
          })}
        </code>
      </pre>
    </figure>
  )
}
