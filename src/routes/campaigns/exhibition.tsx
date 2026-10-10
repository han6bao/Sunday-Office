import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { SiteFooter } from "../../sunday/site-footer";
import { useState } from "react";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/exhibition")({
  head: () => seoHead("/campaigns/exhibition"),
  component: ExhibitionPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/exhibition/exh1.jpg", cap: "NO GUIDANCE studio, face front" },
  { src: "/assets/campaigns/exhibition/exh2.jpg", cap: "Exhibition · owner, straight on" },
  { src: "/assets/campaigns/exhibition/exh3.jpg", cap: "Exhibition · looking down" },
  { src: "/assets/campaigns/exhibition/exh4.jpg", cap: "Exhibition · cap grip" },
  { src: "/assets/campaigns/exhibition/exh5.jpg", cap: "Yellow hoodie, concrete room" },
  { src: "/assets/campaigns/exhibition/exh6.jpg", cap: "2.T.W. Studios, over the shoulder" },
  { src: "/assets/campaigns/exhibition/exh7.jpg", cap: "Hood up, eyes closed" },
  { src: "/assets/campaigns/exhibition/exh8.jpg", cap: "Exhibition · full length" },
  { src: "/assets/campaigns/exhibition/exh9.jpg", cap: "Headscarf, gold, controller print" },
  { src: "/assets/campaigns/exhibition/exh10.jpg", cap: "We are not playing" },
  { src: "/assets/campaigns/exhibition/exh11.jpg", cap: "Eye tee, full length" },
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
    d: "Exhibition is a streetwear label from the Pacific Northwest, and the owner is the face of it. The brand uses bold typography and tech-washed motifs.",
  },
  {
    t: "THE BRAND",
    d: "The INTL script, the memory card, the eye and the controller show up across tees, hoodies, denim and cut-and-sew pieces. The graphics feel lo-fi and direct, like a camera roll printed onto clothes.",
  },
  {
    t: "THE DROP",
    d: "For the campaign we shot it raw, with exposed concrete and hard light. The clothes are the focus, and the people wearing them carry the story.",
  },
];

const PLAY = [
  {
    t: "THE MOVE",
    d: "For a clothing brand, it makes sense to partner with local creatives. A shoot like this covers your marketing and your content at the same time. The drop gets its photos, and the artists get seen.",
  },
  {
    t: "THE PARTNERS",
    d: "The creators are a big part of the campaign. The photographers, the musicians and the cast all post, so one project shows up on many people's pages at once.",
  },
  {
    t: "THE CAST",
    d: "The owner himself, plus painters, rappers, producers and personalities from Seattle's creative scene. We picked the cast with Soniq Reign, so the drop features the people as much as the clothes.",
  },
];

const THOUGHT = [
  {
    t: "THE SHOOT",
    d: "I always start with the light and the pose. Most people in these photos aren't models, so it's on me to get the angles, light and directions right. I want someone who has never posed to come away looking comfortable.",
  },
  {
    t: "THE EDIT",
    d: "I kept the edit raw enough to feel real and clean enough to look professional. The concrete stays gritty and the prints stay bold, with one consistent color grade across the set.",
  },
  {
    t: "THE FEEDBACK",
    d: "My favorite part is what people say after: \"I don't really model, but you made me look and feel great.\" That's what I'm going for when I photograph someone.",
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

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · SUMMER 2026 · STREETWEAR + CREATORS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Exhibition.
        </h1>
        <p className="so-micro mt-3">EXHIBITION.INTERNATIONAL · @exhibition.intl · SEATTLE</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Exhibition, Pacific Northwest streetwear label" },
            { k: "WHAT I DID", v: "Campaign photos, posing direction, editing" },
            { k: "YEAR", v: "Summer 2026" },
          ]}
        />
        <p style={{ marginTop: 22, maxWidth: "54ch", lineHeight: 1.55 }}>
          Campaign photos for a streetwear drop, with the owner and a cast of Seattle creatives wearing the clothes.
        </p>

        {/* The frames — one full-width editorial grid */}
        <div style={{ marginTop: 40 }}>
          <p className="so-micro">THE CAMPAIGN · 14 FRAMES · PHOTOS BY HANA</p>
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
                    {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <CaseRead label="THE PLAY" items={PLAY.map((x) => ({ t: x.t, d: x.d }))} />

        {/* The partnership + cast — side by side */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div style={{ maxWidth: "58ch" }}>
            <p className="so-micro">THE PARTNERSHIP</p>
            <p style={{ marginTop: 12, lineHeight: 1.55 }}>
              For this campaign we partnered with{" "}
              Soniq Reign{" "}
              ("Sonic Unity, Uplifting Community") to bring local artists
              and musicians into the shoot and pick the cast modelling the
              drop.
            </p>
          </div>
          <div>
            <p className="so-micro">THE CAST</p>
            <div className="mt-4" style={{ display: "grid", gap: 12 }}>
              {ARTISTS.map((a) => (
              <div
                key={a.name}
                className="so-credit-row"
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

        <CaseRead label="MY THOUGHT PROCESS" items={THOUGHT.map((x) => ({ t: x.t, d: x.d }))} />

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
          <p style={{ marginTop: 10, maxWidth: "58ch", lineHeight: 1.55, color: "rgba(245,242,234,0.85)" }}>
            If you're a brand that needs a campaign or an artist who needs photos, I'll tell you honestly what I'd do, with no sales pitch. Ask me anything.
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
      <SiteFooter />
    </div>
  );
}