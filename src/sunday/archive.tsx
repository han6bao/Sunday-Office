import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { archive, archivePanels } from "./content";
import type { ArchiveEntry, PanelTag, ProjectTag } from "./content";

/* ---- The dark room: espresso / near-black, cream type ---- */
export const DARK = {
  bg: "#131210",
  panel: "#1b1a17",
  cream: "#eae6dc",
  soft: "#d8d3c7",
  muted: "#9b968a",
  gold: "#cbbfa2",
  line: "rgba(236, 230, 216, 0.14)",
} as const;

export function byTag(tag: ProjectTag): ArchiveEntry[] {
  return archive.filter((a) => a.tags?.includes(tag as never));
}

export function panelById(id: string) {
  return archivePanels.find((p) => p.id === id)!;
}

export function entryTags(e: ArchiveEntry): string {
  return (e.tags ?? []).join(" · ");
}

export function tileHref(e: ArchiveEntry): string | null {
  return e.url ?? null;
}

/* ---- Motion preset used across the archive ---- */
/* cubic-bezier(0.22, 1, 0.36, 1) — mutable tuple for framer-motion */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: EASE },
};

/* ---- Dark page shell (the "after hours" room) ---- */
export function DarkPage({
  no,
  micro,
  accent,
  title,
  intro,
  sideLink,
  children,
}: {
  no: string;
  micro: string;
  accent?: string;
  title: string;
  intro: string;
  sideLink?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <div style={{ background: DARK.bg, color: DARK.cream, minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/archive" className="so-arrow" style={{ color: DARK.muted }}>
          <span className="arr">←</span> Back to the Archive
        </a>
        <p className="so-micro" style={{ color: accent ?? DARK.gold, marginTop: 48 }}>
          {micro}
        </p>
        <h1
          className="so-serif"
          style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14, lineHeight: 0.95 }}
        >
          {title}
        </h1>
        <p className="so-micro" style={{ color: DARK.muted, marginTop: 14 }}>
          {no}
        </p>
        <p style={{ marginTop: 26, maxWidth: "58ch", lineHeight: 1.78, color: DARK.soft }}>
          {intro}
        </p>
        <hr style={{ border: "none", borderTop: `1px solid ${DARK.line}`, margin: "34px 0 40px" }} />
        {children}
        <div style={{ marginTop: 72, display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="/archive"
            className="so-arrow"
            style={{ color: DARK.gold, fontWeight: 600 }}
          >
            ← The Archive
          </a>
          {sideLink ? (
            <a
              href={sideLink.href}
              className="so-micro"
              style={{
                color: DARK.gold,
                letterSpacing: "0.14em",
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
            >
              {sideLink.label}
            </a>
          ) : null}
          <span className="so-micro" style={{ color: DARK.muted }}>
            SUNDAY OFFICE · AFTER HOURS
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---- Single work tile, image-led (dark + light worlds) ---- */
export function WorkTile({
  e,
  dark = false,
  ratio = "4 / 3",
  over = false,
  big = false,
  dropTag,
}: {
  e: ArchiveEntry;
  dark?: boolean;
  ratio?: string;
  over?: boolean;
  big?: boolean;
  /** Hide this tag from the card's tag line (e.g. the panel you're already in). */
  dropTag?: string;
}) {
  const href = tileHref(e);
  const cream = dark ? DARK.cream : "var(--color-ink)";
  const muted = dark ? DARK.muted : "var(--color-stone)";
  const inner = (
    <motion.div {...rise} style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          aspectRatio: ratio,
          borderRadius: big ? 20 : 14,
          overflow: "hidden",
          background: dark ? DARK.panel : "#e9e2ea",
          border: dark ? `1px solid ${DARK.line}` : "1px solid var(--color-sepia)",
        }}
      >
        {e.image ? (
          <img
            src={e.image}
            alt={e.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : e.logo ? (
          <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", background: e.color ?? "#0e0e10" }}>
            <img
              src={e.logo}
              alt={e.title}
              loading="lazy"
              style={{ maxWidth: "58%", maxHeight: "58%", objectFit: "contain" }}
            />
          </div>
        ) : e.logotext ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              background: e.color ?? "#e31b23",
              fontFamily: "var(--font-serif)",
              color: e.logotext.color ?? "#fff9e5",
              fontSize: big ? "clamp(22px, 3vw, 40px)" : "clamp(16px, 2.2vw, 28px)",
              textAlign: "center",
              padding: 16,
            }}
          >
            <span>
              {e.logotext.main}
              {e.logotext.sub ? (
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", marginTop: 8, opacity: 0.85 }}>
                  {e.logotext.sub}
                </span>
              ) : null}
            </span>
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%", background: "#0e0e10" }} />
        )}
        {over && href ? (
          <span
            className="so-micro"
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              color: "#fff",
              background: "rgba(14,10,6,0.72)",
              padding: "6px 10px",
              borderRadius: 999,
              letterSpacing: "0.14em",
            }}
          >
            VIEW →
          </span>
        ) : null}
      </div>
      <p
        className="so-micro"
        style={{ marginTop: 10, color: muted, letterSpacing: "0.16em" }}
      >
        {e.file}
        {(e.tags ?? []).filter((t2) => t2 !== dropTag).length > 0
          ? " · " + (e.tags ?? []).filter((t2) => t2 !== dropTag).join(" · ")
          : ""}
      </p>
      <p style={{ marginTop: 3, fontWeight: 600, color: cream, fontSize: 15 }}>
        {e.title.split(" · ").slice(1).join(" · ") || e.title}
      </p>
      {e.blurb ? (
        <p style={{ marginTop: 3, lineHeight: 1.6, color: muted, fontSize: 13 }}>{e.blurb}</p>
      ) : null}
    </motion.div>
  );
  return href ? (
    <a href={href} style={{ textDecoration: "none", display: "block" }}>
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ---- Light preview shell (still the pale-lilac office) ---- */
export function PreviewPage({
  no,
  micro,
  title,
  intro,
  enterLabel,
  enterHref,
  foot,
  sideLink,
  children,
}: {
  no: string;
  micro: string;
  title: string;
  intro: string;
  enterLabel: string;
  enterHref: string;
  foot: string;
  sideLink?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/archive" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to the Archive
        </a>
        <p className="so-micro so-micro-red">{micro}</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(38px, 7vw, 84px)", marginTop: 14 }}>
          {title}
        </h1>
        <p className="so-micro mt-3">{no}</p>
        <p style={{ marginTop: 22, maxWidth: "58ch", lineHeight: 1.78 }}>{intro}</p>
        <hr className="so-rule mt-6" />
        <div style={{ marginTop: 28 }}>{children}</div>
        <div
          style={{
            marginTop: 56,
            padding: "28px 0",
            borderTop: "1px solid var(--color-sepia)",
            borderBottom: "1px solid var(--color-sepia)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <span className="so-micro">{foot}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <a
              href={enterHref}
              className="so-nav-link cta"
              style={{ textDecoration: "none", margin: 0 }}
            >
              {enterLabel} →
            </a>
            {sideLink ? (
              <a
                href={sideLink.href}
                className="so-micro"
                style={{
                  color: "var(--color-verm)",
                  letterSpacing: "0.14em",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                }}
              >
                {sideLink.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}