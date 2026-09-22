import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { archive } from "../sunday/content";
import { byTag, entryTags } from "../sunday/archive";
import type { ArchiveEntry, ProjectTag } from "../sunday/content";

export const Route = createFileRoute("/archive")({
  component: ArchiveIndex,
});

const PASSWORD = "sundayoffice";

const ROOMS = [
  { t: "Brand + Identity →", h: "/branding", d: "The world behind the work — strategy, identity, image, digital, direction, content." },
  { t: "Websites + Digital →", h: "/websites", d: "Where the world lives — websites, digital experiences, landing pages, interactive work." },
  { t: "Photography + Moving Image →", h: "/photography", d: "What the world looks like — photography, campaigns, reels, brand films, music visuals." },
  { t: "Creative Direction + Social →", h: "/creative-direction-content", d: "How the world comes together — concept development, campaigns, art direction, social + content direction." },
];

function countOf(tag: ProjectTag): number {
  return byTag(tag).length;
}

function ProjectRow({ e }: { e: ArchiveEntry }) {
  const href = e.url ?? null;
  const label = href
    ? href.startsWith("/campaigns")
      ? "OPEN CASE →"
      : "VISIT SITE →"
    : "IN THE VAULT";
  return (
    <div
      style={{
        borderTop: "1px solid var(--ax-line)",
        padding: "20px 0",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        gap: 10,
      }}
    >
      <span className="so-micro" style={{ color: "var(--ax-muted)", minWidth: 92 }}>
        {e.file}
      </span>
      <div style={{ flex: 1, minWidth: 240 }}>
        <p style={{ fontWeight: 600, color: "var(--ax-ink)" }}>{e.title}</p>
        <p className="so-micro" style={{ marginTop: 3, color: "var(--ax-muted)", letterSpacing: "0.14em" }}>
          {entryTags(e)}
        </p>
        {e.blurb ? (
          <p style={{ marginTop: 6, fontSize: 13.5, color: "var(--ax-muted)", maxWidth: "64ch", lineHeight: 1.6 }}>
            {e.blurb}
          </p>
        ) : null}
      </div>
      {href ? (
        <a className="so-link-jump" href={href} style={{ fontSize: 12, color: "var(--ax-ink)" }}>
          {label}
        </a>
      ) : (
        <span className="so-micro" style={{ color: "var(--ax-muted)" }}>
          {label}
        </span>
      )}
    </div>
  );
}

const chip: CSSProperties = {
  border: "1px solid var(--ax-line)",
  borderRadius: 999,
  padding: "8px 14px",
  cursor: "pointer",
  letterSpacing: "0.12em",
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  transition: "background 0.2s ease, color 0.2s ease",
};

function ArchiveIndex() {
  const [active, setActive] = useState<ProjectTag | "ALL">("ALL");
  const listRef = useRef<HTMLDivElement>(null);
  const [authed, setAuthed] = useState(false);
  const [val, setVal] = useState("");
  const [err, setErr] = useState(false);

  if (!authed) {
    return (
      <div className="block" style={{ minHeight: "100dvh" }}>
        <div className="so-shell" style={{ paddingTop: 140, paddingBottom: 80 }}>
          <p className="so-micro so-micro-red">PRIVATE FILE ROOM · STAFF ONLY</p>
          <h1 className="so-serif" style={{ fontSize: "clamp(36px, 7vw, 84px)", marginTop: 14 }}>
            The Archive.
          </h1>
          <p className="so-micro mt-3">TYPE THE KEY TO OPEN EVERY FILE.</p>
          <div style={{ marginTop: 32, maxWidth: 420 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="password"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                  setErr(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (val.trim().toLowerCase() === PASSWORD) setAuthed(true);
                    else setErr(true);
                  }
                }}
                placeholder="the key"
                autoComplete="off"
                style={{
                  flex: 1,
                  border: "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "11px 18px",
                  background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
                  font: "inherit",
                  color: "inherit",
                  outline: "none",
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (val.trim().toLowerCase() === PASSWORD) setAuthed(true);
                  else setErr(true);
                }}
                style={{ background: "#131210", color: "#f5f2ea", border: 0, borderRadius: 999, padding: "11px 20px", fontWeight: 700, letterSpacing: "0.12em", fontSize: 12, cursor: "pointer" }}
              >
                OPEN →
              </button>
            </div>
            {err && (
              <p className="so-micro" style={{ marginTop: 12, color: "var(--color-verm)", letterSpacing: "0.14em" }}>
                NOPE — TRY AGAIN.
              </p>
            )}
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

  const shown = useMemo<ArchiveEntry[]>(() => {
    const rows = active === "ALL" ? [...archive] : byTag(active);
    return rows.sort((a, b) => a.file.localeCompare(b.file));
  }, [active]);

  const pick = (t: ProjectTag | "ALL") => {
    setActive(t);
    requestAnimationFrame(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="block" style={{ minHeight: "100dvh", background: "var(--ax-bg)", color: "var(--ax-ink)" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40, color: "var(--ax-ink)" }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>
        <p className="so-micro so-micro-red">FILE NO. 005 · THE ARCHIVE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          The Archive.
        </h1>
        <p style={{ marginTop: 20, maxWidth: "58ch", lineHeight: 1.78, color: "var(--ax-muted)" }}>
          One archive. Every part of the world. Browse by discipline or
          open the full collection.
        </p>

        {/* The four rooms */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro so-micro-red">WHAT WE DO · THE FOUR ROOMS</p>
          <p className="so-serif" style={{ fontSize: "clamp(30px, 4.4vw, 50px)", marginTop: 14, lineHeight: 1.15, maxWidth: "22ch" }}>
            We build worlds.
          </p>
          <p style={{ marginTop: 12, maxWidth: "52ch", color: "var(--ax-ink)" }}>
            Four rooms, every part of the work. Start with one or build
            the whole world.
          </p>
                    <div
            style={{
              margin: "38px auto 0",
              maxWidth: "86ch",
              border: "1px solid var(--ax-line)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {ROOMS.map((r, i) => (
                <a
                  key={r.t}
                  href={r.h}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    borderTop: i >= 2 ? "1px solid var(--ax-line)" : "none",
                    borderLeft: i % 2 === 1 ? "1px solid var(--ax-line)" : "none",
                    padding: "26px 26px 22px",
                    minHeight: 170,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-verm)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ax-ink)")}
                >
                  <p className="so-serif" style={{ fontSize: "clamp(18px, 2.3vw, 26px)", margin: 0, color: "var(--ax-muted)" }}>
                    {r.t}
                  </p>
                  <p className="so-micro" style={{ marginTop: 8, color: "var(--ax-muted)", lineHeight: 1.6, letterSpacing: "0.06em" }}>
                    {r.d}
                  </p>
                  <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                    OPEN →
                  </p>
                </a>
              ))}
            </div>
          </div>
          </div>

        {/* All projects */}
        <div ref={listRef} id="projects" style={{ marginTop: 64, scrollMarginTop: 84 }}>
          <p className="so-micro" style={{ color: "var(--ax-muted)" }}>
            ALL PROJECTS
          </p>
          <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
            <div>
              <p className="so-micro" style={{ color: "var(--ax-muted)", letterSpacing: "0.22em", fontWeight: 600 }}>
                FILTER BY TAG
              </p>
              <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 8 }}>
                {(["ALL", "PHOTOGRAPHY", "BRANDING + IDENTITY", "WEBSITES", "CREATIVE DIRECTION", "CONTENT + SOCIAL", "MOVING IMAGE"] as (ProjectTag | "ALL")[]).map((t) => {
                  const label = t === "ALL" ? `ALL · ${archive.length}` : `${t} · ${countOf(t)}`;
                  return (
                    <button
                      key={t}
                      onClick={() => pick(t)}
                      className="so-micro"
                      style={{
                        ...chip,
                        color: active === t ? "var(--ax-active-ink)" : "var(--ax-chip-ink)",
                        background: active === t ? "var(--ax-active-bg)" : "var(--ax-chip)",
                        borderColor: active === t ? "var(--ax-active-bg)" : "var(--ax-line)",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 26 }}>
            {shown.map((e) => (
              <ProjectRow key={e.file} e={e} />
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <a href="/" className="so-arrow" style={{ color: "var(--ax-ink)" }}>
              <span className="arr">←</span> Back to Sunday Office
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}