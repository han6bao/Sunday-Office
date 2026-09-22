import type { ReactNode } from "react";

/** Shared service-page template — one world, each room with its own door. */
export function ServicePage({
  micro,
  title,
  sub,
  blurb,
  includes,
  archiveLabel,
  archiveHref,
}: {
  micro: string;
  title: string;
  sub: string;
  blurb: ReactNode;
  includes: string[];
  archiveLabel: string;
  archiveHref: string;
}) {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">{micro}</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          {title}
        </h1>
        <p className="so-micro mt-3">{sub}</p>
        <hr className="so-rule mt-6" />

        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ROOM</p>
          <div style={{ marginTop: 12, lineHeight: 1.78 }}>{blurb}</div>
        </div>

        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">WHAT'S INCLUDED</p>
          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {includes.map((n) => (
              <div key={n} style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}>
                <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                  —
                </span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            padding: "26px 28px",
            borderRadius: 18,
            background: "#131210",
            color: "#f5f2ea",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <p className="so-micro" style={{ maxWidth: "44ch", color: "#f5f2ea" }}>
            LET'S TALK ABOUT WHAT THIS ROOM CAN DO FOR YOUR WORLD.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/#office-hours"
              style={{
                textDecoration: "none",
                margin: 0,
                background: "#f5f2ea",
                color: "#131210",
                borderRadius: 999,
                padding: "11px 20px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              BUILD YOUR WORLD →
            </a>
            <a
              href={archiveHref}
              style={{
                textDecoration: "none",
                margin: 0,
                border: "1px solid #f5f2ea",
                color: "#f5f2ea",
                borderRadius: 999,
                padding: "11px 20px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              {archiveLabel}
            </a>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}

/** Case-page closer — one easy booking link at the end of every case study. */
export function CaseBookingCta({ note }: { note?: string }) {
  return (
    <div
      style={{
        marginTop: 44,
        padding: "26px 28px",
        borderRadius: 18,
        background: "#131210",
        color: "#f5f2ea",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <p className="so-micro" style={{ maxWidth: "46ch", lineHeight: 1.8, color: "#f5f2ea" }}>
        {note ?? "INTO SOMETHING LIKE THIS? YOUR PROJECT DESERVES THE SAME TREATMENT."}
      </p>
      <a
        href="/#office-hours"
        style={{
          textDecoration: "none",
          margin: 0,
          background: "#f5f2ea",
          color: "#131210",
          borderRadius: 999,
          padding: "11px 20px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          fontSize: 12,
          whiteSpace: "nowrap",
        }}
      >
        START A PROJECT →
      </a>
    </div>
  );
}
