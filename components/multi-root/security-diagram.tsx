/**
 * Architecture figure for the security section. It mirrors §3–§7 of
 * docs/architecture/multi-root-workspace.md at plugin tag v0.1.5.
 */

const stroke = 'var(--border-strong)'

function Box({ x, y, w, h, title, lines, accent = false }: { x: number; y: number; w: number; h: number; title: string; lines: readonly string[]; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={accent ? 'var(--accent-soft)' : 'var(--bg)'} stroke={accent ? 'var(--accent)' : stroke} strokeWidth={1.25} />
      <text x={x + 14} y={y + 24} fill="var(--fg)" fontSize={14} fontWeight={600} fontFamily="var(--font-sans)">
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={line} x={x + 14} y={y + 46 + i * 17} fill="var(--fg-muted)" fontSize={12} fontFamily="var(--font-mono)">
          {line}
        </text>
      ))}
    </g>
  )
}

function Arrow({ d }: { d: string }) {
  return <path d={d} fill="none" stroke="var(--fg-subtle)" strokeWidth={1.4} markerEnd="url(#sec-arrow)" />
}

export function SecurityDiagram() {
  return (
    <figure>
      <div className="hidden rounded-xl border border-border-strong bg-bg p-5 md:block">
        <svg viewBox="0 0 1000 470" role="img" aria-labelledby="sec-title sec-desc" className="h-auto w-full">
          <title id="sec-title">Multi-root Workspace enforcement architecture</title>
          <desc id="sec-desc">
            Agent file tools reach an in-process fence and agent bash and terminal reach a kernel sandbox. Both ask one workspace scope. The scope is fed by a registry that validates and persists roots, and grants a root only while its canonical path equals the recorded path. A compatibility gate at startup refuses unsupported DSH releases, and an unrecognized sandbox profile fails closed.
          </desc>
          <defs>
            <marker id="sec-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 10 5 0 10z" fill="var(--fg-subtle)" />
            </marker>
          </defs>

          <Box x={10} y={60} w={200} h={90} title="File tools" lines={['read · write · edit']} />
          <Box x={10} y={230} w={200} h={90} title="Shell tools" lines={['bash · terminal / PTY']} />

          <Arrow d="M210 105 H290" />
          <Arrow d="M210 275 H290" />

          <Box x={290} y={50} w={260} h={110} title="In-process fence" lines={['ctx.fs · writes and edits', 'denies paths outside the scope']} />
          <Box x={290} y={220} w={260} h={110} title="Kernel sandbox" lines={['ctx.sandbox · Seatbelt, bwrap,', 'Landlock · unrecognized → refuse']} />

          <Arrow d="M550 105 H610 C 625 105 625 175 640 175" />
          <Arrow d="M550 275 H610 C 625 275 625 205 640 205" />

          <Box x={640} y={130} w={170} h={110} title="Workspace scope" lines={['ctx.multiRootScope', 'grant iff realpath ==', 'recordedPath']} accent />

          <Arrow d="M810 185 H850" />
          <Box x={850} y={130} w={140} h={110} title="Registry" lines={['validated', 'per primary root', 'one authority']} />

          <rect x={10} y={380} width={980} height={70} rx={10} fill="var(--bg-subtle)" stroke={stroke} strokeWidth={1.25} strokeDasharray="6 5" />
          <text x={28} y={408} fill="var(--fg)" fontSize={14} fontWeight={600} fontFamily="var(--font-sans)">
            Startup compatibility gate
          </text>
          <text x={28} y={431} fill="var(--fg-muted)" fontSize={12} fontFamily="var(--font-mono)">
            Exact DSH release allowlist. If the release is not listed, the fence, sandbox, registry and instruction rows do not start.
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-fg-subtle md:mt-3">Enforcement path of the released plugin (v0.1.5). The numbered controls below list what each part guarantees and what it does not.</figcaption>
    </figure>
  )
}
