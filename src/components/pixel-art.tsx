import { PALETTE } from "@/content/pixel-art"

type Props = { rows: readonly string[]; size: number; label?: string; className?: string }

function runs(rows: readonly string[]) {
  return rows.flatMap((row, y) => {
    const out: { x: number; y: number; width: number; fill: string }[] = []
    for (let x = 0; x < row.length; ) {
      let end = x + 1
      while (end < row.length && row[end] === row[x]) end++
      if (row[x] !== ".") out.push({ x, y, width: end - x, fill: PALETTE[row[x]] })
      x = end
    }
    return out
  })
}

export function PixelArt({ rows, size, label, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${rows.length} ${rows.length}`}
      shapeRendering="crispEdges"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {runs(rows).map((r) => (
        <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.width} height={1} fill={r.fill} />
      ))}
    </svg>
  )
}
