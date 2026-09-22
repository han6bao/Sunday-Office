import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/exhibition")({
  component: ExhibitionPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/exhibition/exh1.jpg", cap: "NO GUIDANCE studio — face front" },
  { src: "/assets/campaigns/exhibition/exh2.jpg", cap: "Exhibition · owner, straight on" },
  { src: "/assets/campaigns/exhibition/exh3.jpg", cap: "Exhibition · looking down" },
  { src: "/assets/campaigns/exhibition/exh4.jpg", cap: "Exhibition · cap grip" },
  { src: "/assets/campaigns/exhibition/exh5.jpg", cap: "Yellow hoodie, concrete room" },
  { src: "/assets/campaigns/exhibition/exh6.jpg", cap: "2.T.W. Studios — over the shoulder" },
  { src: "/assets/campaigns/exhibition/exh7.jpg", cap: "Hood up, eyes closed" },
  { src: "/assets/campaigns/exhibition/exh8.jpg", cap: "Exhibition · full length" },
  { src: "/assets/campaigns/exhibition/exh9.jpg", cap: "Headscarf, gold, controller print" },
  { src: "/assets/campaigns/exhibition/exh10.jpg", cap: "We are not playing" },
  { src: "/assets/campaigns/exhibition/exh11.jpg", cap: "Eye tee — full length" },
  { src: "/assets/campaigns/exhibition/exh12.jpg", cap: "The eye, against the wall" },
  { src: "/assets/campaigns/exhibition/exh13.jpg", cap: "Down at his feet" },
  { src: "/assets/campaigns/exhibition/exh14.jpg", cap: "Beanie, eyes low" },
];

/* Editorial layout — every row fills the full width: wide openers, portrait
   pairs, one full-bleed band. Spans of a 6-column grid. */
const LAYOUT: { s: number; a: string }[] = [
  { s: 6, a: "21 / 9" }, // 01 NO GUIDANCE studio — opens wide
  { s: 3, a: "4 / 5" }, // 02 owner straight on
  { s: 3, a: "4 / 5" }, // 03 looking down
  { s: 4, a: "16 / 10" }, // 04 cap grip
  { s: 2, a: "4 / 5" }, // 05 yellow hoodie
  { s: 3, a: "4 / 5" }, // 06 over the shoulder
  { s: 3, a: "4 / 5" }, // 07 hood up
  { s: 6, a: "21 / 9" }, // 08 full length — the band
  { s: 3, a: "4 / 5" }, // 09 headscarf
  { s: 3, a: "4 / 5" }, // 10 we are not playing
  { s: 4, a: "16 / 10" }, // 11 eye tee
  { s: 2, a: "4 / 5" }, // 12 the eye
  { s: 3, a: "4 / 5" }, // 13 down at his feet
  { s: 3, a: "4 / 5" }, // 14 beanie
];

const OWNER = [
  {
    t: "WHO HE IS",
    d: "Exhibition is a streetwear label out of the Pacific Northwest — and the owner is the face of it. The brand runs on his world: bold typography, tech-washed motifs, and the kind of look that doesn't ask to be understood, it just is.",
  },
  {
    t: "THE BRAND",
    d: "The INTL script, the memory card, the eye, the controller — carried across tees, hoodies, denim and cut-and-sew pieces. It reads like a file dump of a generation: lo-fi, direct, and everywhere at once.",
  },
  {
    t: "THE DROP",
    d: "For the campaign we shot the work in the raw — exposed concrete, hard light, a wall that has seen things. The clothes stay the hero; the people in them make the story.",
  },
];

const PLAY = [
  {
    t: "THE MOVE",
    d: "For a clothing brand, this is the creative way out: partner with people who make. A shoot like this is marketing strategy and content strategy in one — the drop gets its visuals, and the artists get their platform moment.",
  },
  {
    t: "THE PARTNERS",
    d: "Partnering with creators isn't a favor — it's the campaign. The photographers, the musicians, the cast — everyone's content feeds everyone else. One project, a dozen platforms, all carrying the same world.",
  },
  {
    t: "THE CAST",
    d: "The owner himself, painters, rappers, producers and personalities from across Seattle's creative scene — curated with Soniq Reign. The drop isn't just clothes anymore; it's the people wearing them.",
  },
];

const THOUGHT = [
  {
    t: "THE SHOOT",
    d: "My thought process is always the light and the pose. Most people in the frame aren't models — so the job is making the angles, the light and the directions do the work, so someone who's never posed walks away looking like they do it daily.",
  },
  {
    t: "THE EDIT",
    d: "Keep it raw enough to feel real, polished enough to feel professional. The concrete stays gritty, the prints stay loud, and the grade stays consistent so the whole set reads like one world.",
  },
  {
    t: "THE FEEDBACK",
    d: "The real win is what people say after: \"I don't really model, but you made me look and feel great.\" That's the whole point — the camera is the excuse to make someone feel seen.",
  },
];

const ARTISTS = [
  { name: "Kenshi Killzzz", handle: "@kenshikilla", note: "Artist · He Rules Us All" },
  { name: "Alexis Brooke", handle: "@alexxisbrooke", note: "Artist" },
  { name: "G.u.a.p.p.o", handle: "@slg_guappo", note: "Artist · Stop Playn W Me" },
  { name: "MUNDY.", handle: "@munhundreds", note: "Artist · In Your Life" },
  { name: "Soniq Reign", handle: "@soniqrei", note: "Partner · Sonic Unity, Uplifting Community" },
];

function ExhibitionPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [owner, setOwner] = useState(0);
  const [play, setPlay] = useState(0);
  const [thought, setThought] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · SUMMER 2026 · STREETWEAR + CREATORS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Exhibition.
        </h1>
        <p className="so-micro mt-3">EXHIBITION.INTERNATIONAL · @exhibition.intl · SEATTLE</p>
        <p style={{ marginTop: 22, maxWidth: "54ch", lineHeight: 1.75 }}>
          A streetwear drop, shot in the raw. The owner, the cast, the
          clothes — one campaign, everyone carried to the same world.
        </p>
        <hr className="so-rule mt-6" />

        {/* The frames — one full-width editorial grid */}
        <div style={{ marginTop: 40 }}>
          <p className="so-micro">THE CAMPAIGN — 14 FRAMES · PHOTOS BY HANA</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", columnGap: 14, rowGap: 20, marginTop: 14, alignItems: "start" }}>
            {PHOTOS.map((ph, i) => {
              const L = LAYOUT[i];
              return (
                <button
                  key={ph.src}
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={ph.cap}
                  className="so-photo-cell"
                  style={{ gridColumn: `span ${L.s}`, display: "block", padding: 0, background: "none", border: 0, cursor: "pointer", textAlign: "left" }}
                >
                  <img
                    src={ph.src}
                    alt={ph.cap}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: L.a, objectFit: "cover", borderRadius: 14, display: "block" }}
                  />
                  <span className="so-photo-cap" style={{ fontSize: 12 }}>
                    {String(i + 1).padStart(2, "0")} · {ph.cap}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The play — why brands + creators partner */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">THE PLAY</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {play + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPlay((s) => (s + 1) % PLAY.length)}
            style={{
              width: "100%",
              display: "block",
              textAlign: "left",
              background: "none",
              border: 0,
              borderTop: "1px solid var(--color-sepia)",
              padding: "16px 2px 10px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
              {PLAY[play].t}
            </p>
            <p key={play} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {PLAY[play].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {PLAY.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === play ? "var(--color-verm)" : "var(--color-sepia)",
                    display: "inline-block",
                  }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* Frames 08–10 */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">FRAMES 08–10 · PHOTOS BY HANA</p>
          <div className="so-photo-grid mt-3">
            {PHOTOS.slice(7, 10).map((ph, i) => (
              <button key={ph.src} className="so-photo-cell" type="button" onClick={() => setOpen(i + 7)} aria-label={ph.cap}>
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">{String(i + 8).padStart(2, "0")} · {ph.cap}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The partnership + cast — side by side */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div style={{ maxWidth: "58ch" }}>
            <p className="so-micro">THE PARTNERSHIP</p>
            <p style={{ marginTop: 12, lineHeight: 1.78 }}>
              For this campaign we partnered with{" "}
              <a href="/campaigns/soniqreign" style={{ color: "var(--color-verm)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                Soniq Reign →
              </a>{" "}
              — "Sonic Unity, Uplifting Community" — to bring local artists
              and musicians into the frame and curate the cast modelling the
              drop.
            </p>
          </div>
          <div>
            <p className="so-micro">THE CAST</p>
            <div className="mt-4" style={{ display: "grid", gap: 12 }}>
              {ARTISTS.map((a) => (
              <div
                key={a.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderBottom: "1px solid var(--color-sepia)",
                  paddingBottom: 10,
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{a.name}</div>
                  <div className="so-micro" style={{ marginTop: 4, color: "var(--color-stone)" }}>
                    {a.note}
                  </div>
                </div>
                <a
                  className="so-micro"
                  href={`https://www.instagram.com/${a.handle.replace("@", "")}/`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--color-verm)", textDecoration: "none" }}
                >
                  {a.handle} →
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* My thought process */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">MY THOUGHT PROCESS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {thought + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setThought((s) => (s + 1) % THOUGHT.length)}
            style={{
              width: "100%",
              display: "block",
              textAlign: "left",
              background: "none",
              border: 0,
              borderTop: "1px solid var(--color-sepia)",
              padding: "16px 2px 10px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
              {THOUGHT[thought].t}
            </p>
            <p key={thought} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {THOUGHT[thought].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {THOUGHT.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === thought ? "var(--color-verm)" : "var(--color-sepia)",
                    display: "inline-block",
                  }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* Lightbox */}
        {open !== null && (
          <div
            className="lb-overlay so-photo-lb"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            <div className="so-photo-lb-card">
              <img src={PHOTOS[open].src} alt={PHOTOS[open].cap} />
              <div className="so-photo-lb-meta">
                <span className="so-micro">{PHOTOS[open].cap}</span>
                <button className="lb-btn" aria-label="Close" onClick={() => setOpen(null)}>
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        {/* The advice — can I help */}
        <div
          style={{
            marginTop: 56,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "#131210",
            color: "#f5f2ea",
            padding: "28px 30px",
          }}
        >
          <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
            CAN I HELP YOU BUILD IT?
          </p>
          <p className="so-serif" style={{ fontSize: "clamp(22px, 3vw, 32px)", marginTop: 12, lineHeight: 1.25 }}>
            The advice is free.
          </p>
          <p style={{ marginTop: 10, maxWidth: "58ch", lineHeight: 1.75, color: "rgba(245,242,234,0.85)" }}>
            Whether you're a brand that needs a campaign or an artist that
            needs frames, I'll tell you straight what I'd do — no pitch,
            no pressure. Ask me anything.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 20 }}>
            <a
              href="/#office-hours"
              style={{
                textDecoration: "none",
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
              ASK ME ANYTHING →
            </a>
            <a
              href="/campaigns/leon-thomas"
              style={{
                textDecoration: "none",
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
              SEE ANOTHER CAMPAIGN →
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