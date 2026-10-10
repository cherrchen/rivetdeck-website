/**
 * Hero diagram: one agent session, one scope, two enforcers, a primary root
 * plus additional roots, and a directory that stays out of scope.
 * All names and paths are example data and the figure says so.
 */

const stroke = 'var(--border-strong)'

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  tag,
  tone = 'plain',
  dashed = false,
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  tag?: string
  tone?: 'plain' | 'accent' | 'muted'
  dashed?: boolean
}) {
  const border = tone === 'accent' ? 'var(--accent)' : stroke
  const fill = tone === 'accent' ? 'var(--accent-soft)' : tone === 'muted' ? 'var(--bg-subtle)' : 'var(--bg)'
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={border} strokeWidth={1.25} strokeDasharray={dashed ? '5 5' : undefined} />
      <text x={x + 14} y={y + 24} fill="var(--fg)" fontSize={14} fontWeight={600} fontFamily="var(--font-sans)">
        {title}
      </text>
      {sub ? (
        <text x={x + 14} y={y + 44} fill="var(--fg-muted)" fontSize={12} fontFamily="var(--font-mono)">
          {sub}
        </text>
      ) : null}
      {tag ? (
        <text x={x + 14} y={y + h - 12} fill={tone === 'accent' ? 'var(--accent)' : 'var(--fg-subtle)'} fontSize={11} fontFamily="var(--font-mono)">
          {tag}
        </text>
      ) : null}
    </g>
  )
}

function Flow({ d, blocked = false }: { d: string; blocked?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={blocked ? 'var(--bad)' : 'var(--accent)'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray={blocked ? '2 6' : undefined}
      className={blocked ? undefined : 'flow-line'}
    />
  )
}

export function TopologyDiagram() {
  return (
    <figure>
      <div className="rounded-xl border border-border-strong bg-bg p-3 sm:p-5">
        <svg
          viewBox="0 0 1000 450"
          role="img"
          aria-labelledby="topo-title topo-desc"
          className="hidden h-auto w-full md:block"
        >
          <title id="topo-title">Multi-root Workspace topology</title>
          <desc id="topo-desc">
            An agent session uses one scope. The scope is enforced by an in-process file fence and a kernel sandbox. Three roots are granted: the primary root web, and additional roots api and design-system. The directory Documents is not in scope and is not granted write access.
          </desc>

          <Node x={10} y={160} w={210} h={110} title="Agent session" sub="cwd = primary root" tag="read · write · edit · bash" />

          <Flow d="M220 215 H320" />

          <rect x={320} y={50} width={310} height={330} rx={14} fill="var(--bg-subtle)" stroke={stroke} strokeWidth={1.25} />
          <text x={340} y={80} fill="var(--fg)" fontSize={14} fontWeight={600} fontFamily="var(--font-sans)">
            Workspace scope
          </text>
          <text x={340} y={100} fill="var(--fg-muted)" fontSize={12} fontFamily="var(--font-mono)">
            one authorization source
          </text>
          <Node x={340} y={130} w={270} h={80} title="In-process fence" sub="file tools · writes and edits" />
          <Node x={340} y={230} w={270} h={110} title="Kernel sandbox" sub="bash and terminal" tag="Seatbelt · bwrap · Landlock" />

          <Flow d="M630 175 H700 C 720 175 720 85 740 85 H760" />
          <Flow d="M630 215 H700 C 720 215 720 205 740 205 H760" />
          <Flow d="M630 255 H700 C 720 255 720 325 740 325 H760" />
          <Flow d="M630 300 H690 C 705 300 705 400 720 400 H730" blocked />

          <Node x={760} y={40} w={230} h={90} title="web" sub="~/code/web" tag="primary · session origin" tone="accent" />
          <Node x={760} y={160} w={230} h={90} title="api" sub="~/code/api" tag="additional root" tone="accent" />
          <Node x={760} y={280} w={230} h={90} title="design-system" sub="~/code/design-system" tag="additional root" tone="accent" />
          <Node x={760} y={385} w={230} h={55} title="~/Documents" tone="muted" dashed />
          <text x={900} y={433} fill="var(--bad)" fontSize={11} fontFamily="var(--font-mono)" textAnchor="middle">
            no write access
          </text>
        </svg>

        <svg
          viewBox="0 0 360 620"
          role="img"
          aria-labelledby="topo-m-title topo-m-desc"
          className="h-auto w-full md:hidden"
        >
          <title id="topo-m-title">Multi-root Workspace topology</title>
          <desc id="topo-m-desc">
            An agent session uses one scope enforced by an in-process fence and a kernel sandbox. The primary root web and the additional roots api and design-system are granted. The directory Documents is not granted write access.
          </desc>
          <Node x={10} y={8} w={340} h={78} title="Agent session" sub="cwd = primary root" tag="read · write · edit · bash" />
          <Flow d="M180 86 V120" />
          <rect x={10} y={120} width={340} height={170} rx={14} fill="var(--bg-subtle)" stroke={stroke} strokeWidth={1.25} />
          <text x={26} y={146} fill="var(--fg)" fontSize={14} fontWeight={600} fontFamily="var(--font-sans)">
            Workspace scope
          </text>
          <Node x={24} y={160} w={312} h={52} title="In-process fence" sub="file tools" />
          <Node x={24} y={222} w={312} h={56} title="Kernel sandbox" sub="bash · terminal" />
          <Flow d="M28 290 V478 M28 346 H56 M28 412 H56 M28 478 H56" />
          <Node x={56} y={318} w={294} h={56} title="web" sub="~/code/web · primary" tone="accent" />
          <Node x={56} y={384} w={294} h={56} title="api" sub="~/code/api · additional" tone="accent" />
          <Node x={56} y={450} w={294} h={56} title="design-system" sub="~/code/design-system" tone="accent" />
          <Flow d="M28 478 V562 H56" blocked />
          <Node x={56} y={534} w={294} h={56} title="~/Documents" sub="no write access" tone="muted" dashed />
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-fg-subtle">Example topology with illustrative paths. Write access is decided by one scope; a directory outside it is not granted.</figcaption>
    </figure>
  )
}
