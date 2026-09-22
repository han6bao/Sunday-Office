import type { CSSProperties } from "react";

/* ============================================================
   SUNDAY OFFICE — hand-built 2D marks (no photography).
   Sun (6 rays) · 福祿壽 blessing stamp · 創作 seal ·
   porcelain & line motifs used as placeholder art.
   ============================================================ */

/** The Sunday Office sun: a small printer's mark with SIX rays. */
export function SunMark({
  size = 40,
  color = "var(--color-gold-deep)",
  ring = true,
  className,
}: {
  size?: number;
  color?: string;
  ring?: boolean;
  className?: string;
}) {
  const c = size / 2;
  const r1 = size * 0.2;
  const r2 = size * 0.405;
  const rays: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 * Math.PI) / 180;
    rays.push({
      x1: c + r1 * Math.cos(a),
      y1: c + r1 * Math.sin(a),
      x2: c + r2 * Math.cos(a),
      y2: c + r2 * Math.sin(a),
    });
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label="Sunday Office sun mark"
    >
      {ring && (
        <circle
          cx={c}
          cy={c}
          r={size * 0.46}
          fill="none"
          stroke={color}
          strokeWidth={Math.max(1, size * 0.012)}
          opacity={0.55}
        />
      )}
      <circle cx={c} cy={c} r={r1} fill={color} />
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke={color}
          strokeWidth={Math.max(1.2, size * 0.02)}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** The blessing stamp: 福祿壽 (Fortune · Prosperity · Longevity) as a printed red circle. */
export function BlessingStamp({
  size = 120,
  color = "var(--color-emboss)",
}: {
  size?: number;
  color?: string;
}) {
  const charSize = size * 0.26;
  const c = size / 2;
  const R = size * 0.46;
  const jitter = [1, 0.98, 1.04, 0.96, 1.05, 0.97, 1.0, 0.94, 1.045, 0.97, 1.06, 0.985];
  const pts = jitter.map((f, i) => {
    const a = (i / jitter.length) * Math.PI * 2;
    const rr = R * f;
    return `${(c + rr * Math.cos(a)).toFixed(1)},${(c + rr * Math.sin(a)).toFixed(1)}`;
  });
  const ring = `M${pts.join(" L")} Z`;
  const HIGHLIGHT = "rgba(255,255,255,0.55)"; // light catches the raised top edge
  const SHADOW = "rgba(30,22,34,0.4)";         // dark sits in the recessed bottom edge
  const dy = Math.max(0.8, size * 0.006);      // relief depth

  const chars = ["福", "祿", "壽"];
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Three blessings — fortune, prosperity, longevity"
      style={{ overflow: "visible" }}
    >
      {/* Raised outer ring: dark below, light above, main tone in between */}
      <path d={ring} fill="none" stroke={SHADOW} strokeWidth={size * 0.014} transform={`translate(0, ${dy})`} strokeLinejoin="round" opacity={0.9} />
      <path d={ring} fill="none" stroke={HIGHLIGHT} strokeWidth={size * 0.014} transform={`translate(0, ${-dy})`} strokeLinejoin="round" opacity={0.9} />
      <path d={ring} fill="none" stroke={color} strokeWidth={size * 0.017} strokeLinejoin="round" opacity={0.96} />

      {/* inner hairline */}
      <circle cx={c} cy={c} r={size * 0.42} fill="none" stroke={color} strokeWidth={size * 0.0035} opacity={0.4} />

      {/* Raised characters: shadow, highlight, then body */}
      {chars.map((ch, i) => {
        const y = size * (0.38 + i * 0.24);
        const common = {
          x: c,
          y,
          textAnchor: "middle" as const,
          fontSize: charSize,
          fontFamily: "var(--font-cjk), 'KaiTi', 'STKaiti', serif",
        };
        return (
          <g key={ch}>
            <text {...common} transform={`translate(0, ${dy})`} fill={SHADOW} opacity={0.85}>
              {ch}
            </text>
            <text {...common} transform={`translate(0, ${-dy})`} fill={HIGHLIGHT} opacity={0.9}>
              {ch}
            </text>
            <text {...common} fill={color} opacity={0.97} style={{ fontFamily: "var(--font-cjk), 'KaiTi', 'STKaiti', serif" }}>
              {ch}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** 創作 — "creation". A single red editorial seal. */
export function CreationSeal({
  size = 46,
  color = "var(--color-red)",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size * 1.2}
      height={size}
      viewBox="0 0 58 48"
      role="img"
      aria-label="Creation"
      style={{ display: "block" }}
    >
      <rect width="58" height="48" fill={color} opacity={0.92} rx={3} />
      <text
        x="29"
        y="26"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        fontFamily="var(--font-cjk), 'KaiTi', 'STKaiti', serif"
        fill="#f3ede2"
        style={{ fontFamily: "var(--font-cjk), 'KaiTi', 'STKaiti', serif" }}
      >
        創作
      </text>
    </svg>
  );
}

export type MotifName =
  | "sun"
  | "porcelain"
  | "stem"
  | "monogram"
  | "sunburst"
  | "ring";

const MOTIF_COLOR = "#9fb09c";
const MOTIF_DIM = "rgba(159, 176, 156, 0.6)";

/** A small cobalt / gold line motif used as placeholder art inside photo frames. */
export function Motif({
  name,
  width = 56,
  color = MOTIF_COLOR,
  className,
}: {
  name: MotifName;
  width?: number;
  color?: string;
  className?: string;
}) {
  switch (name) {
    case "sun":
      return <SunMark size={width} color={color} className={className} />;
    case "monogram":
      return (
        <svg
          width={width}
          height={width * 0.8}
          viewBox="0 0 60 48"
          className={className}
          aria-hidden
        >
          <text
            x="30"
            y="33"
            textAnchor="middle"
            fontSize="34"
            fontFamily="var(--font-editorial), Georgia, serif"
            fill={color}
            opacity={0.75}
          >
            S
          </text>
          <circle
            cx="30"
            cy="10"
            r="6"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity={0.6}
          />
          {[0, 60, 120, 180, 240, 300].map((d) => (
            <line
              key={d}
              x1={30 + 8 * Math.cos((d * Math.PI) / 180)}
              y1={10 + 8 * Math.sin((d * Math.PI) / 180)}
              x2={30 + 12 * Math.cos((d * Math.PI) / 180)}
              y2={10 + 12 * Math.sin((d * Math.PI) / 180)}
              stroke={color}
              strokeWidth="1.3"
              opacity={0.6}
            />
          ))}
        </svg>
      );
    case "porcelain":
      return (
        <svg width={width} height={width} viewBox="0 0 64 64" className={className} aria-hidden>
          <g fill="none" stroke={color} strokeWidth={1.4}>
            <circle cx="32" cy="26" r="12" />
            <circle cx="32" cy="26" r="7" opacity={0.6} />
            <path d="M32 38 v10" />
            <path d="M32 48 q8 0 8 6 M32 48 q-8 0 -8 6" opacity={0.8} />
            <path d="M20 26 q0 -8 12 -8 M44 26 q0 -8 -12 -8" opacity={0.45} />
          </g>
        </svg>
      );
    case "stem":
      return (
        <svg width={width} height={width * 1.1} viewBox="0 0 48 52" className={className} aria-hidden>
          <g fill="none" stroke={color} strokeWidth={1.4} strokeLinecap="round">
            <path d="M24 50 C22 34 22 20 24 6 C26 20 26 34 24 50 Z" />
            <path d="M24 42 Q16 38 12 30 M24 34 Q10 28 6 22" opacity={0.7} />
            <path d="M24 42 Q32 38 36 30 M24 34 Q38 28 42 22" opacity={0.7} />
            <path d="M24 14 c-4 -2 -6 -6 -6 -10 M24 14 c4 -2 6 -6 6 -10" opacity={0.6} />
          </g>
        </svg>
      );
    case "sunburst":
      return (
        <svg width={width} height={width} viewBox="0 0 64 64" className={className} aria-hidden>
          <g stroke={color} strokeWidth={1.1} opacity={0.55}>
            {Array.from({ length: 16 }).map((_, i) => {
              const a = ((i + 0.5) * 360) / 16;
              const rad = (a * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={32 + 12 * Math.cos(rad)}
                  y1={32 + 12 * Math.sin(rad)}
                  x2={32 + 30 * Math.cos(rad)}
                  y2={32 + 30 * Math.sin(rad)}
                />
              );
            })}
          </g>
          <circle cx="32" cy="32" r="6" fill={color} opacity={0.65} />
        </svg>
      );
    case "ring":
    default:
      return (
        <svg width={width} height={width} viewBox="0 0 64 64" className={className} aria-hidden>
          <g fill="none" stroke={color} strokeWidth={1.3} opacity={0.6}>
            <circle cx="32" cy="32" r="16" />
            <circle cx="32" cy="32" r="10" opacity={0.5} />
            <path d="M32 8 v6 M32 50 v6 M8 32 h6 M50 32 h6" />
          </g>
        </svg>
      );
  }
}

/** Photo placeholder frame — an elegant box where photography will be placed. */
export function FramePlate({
  motif = "porcelain",
  ratio = "tall",
  caption,
  className,
  style,
}: {
  motif?: MotifName;
  ratio?: "tall" | "wide" | "square";
  caption?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={
        "frame " +
        (ratio === "tall"
          ? "frame-tall"
          : ratio === "wide"
            ? "frame-wide"
            : "frame-square") +
        (className ? " " + className : "")
      }
      style={style}
      role="img"
      aria-label={caption ?? "Photography placeholder"}
    >
      <Motif name={motif} width={ratio === "square" ? 52 : 46} className="frame-art" />
      {caption && <span className="frame-caption">{caption}</span>}
    </div>
  );
}

/** A porcelain-blue edge wave used as a very subtle cultural detail. */
export function PorcelainEdge({
  color = "var(--color-navy-soft)",
  height = 14,
  className,
}: {
  color?: string;
  height?: number;
  className?: string;
}) {
  const w = 60;
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${w} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <g fill="none" stroke={color} strokeWidth={1} opacity={0.7}>
        <path d={`M0 ${height / 2} q${w / 8} -${height} ${w / 4} 0 t${w / 4} 0 t${w / 4} 0 t${w / 4} 0`} />
        <path d={`M0 ${height / 2 + 3} q${w / 8} -${height} ${w / 4} 0 t${w / 4} 0 t${w / 4} 0 t${w / 4} 0`} opacity={0.4} />
      </g>
    </svg>
  );
}