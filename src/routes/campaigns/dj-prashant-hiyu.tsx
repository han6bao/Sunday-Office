import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/dj-prashant-hiyu")({
  component: BoatPartyPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-04.jpg", cap: "the stage" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-14.jpg", cap: "the girls" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-11.jpg", cap: "polka dots" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-12.jpg", cap: "at the rail" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-13.jpg", cap: "behind the booth" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", cap: "the deck" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-10.jpg", cap: "the rail" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-02.jpg", cap: "the room" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-05.jpg", cap: "the group" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-03.jpg", cap: "the crew" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-07.jpg", cap: "the booth" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-06.jpg", cap: "hands up" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-08.jpg", cap: "over the water" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-09.jpg", cap: "behind the decks" },
];

/* Editorial hierarchy — wide stage opener, portrait crops, one full-width, pairs */
const LAYOUT: { s: number; a: string }[] = [
  { s: 4, a: "16 / 10" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 6, a: "21 / 9" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 3, a: "16 / 10" },
  { s: 3, a: "16 / 10" },
  { s: 3, a: "16 / 10" },
  { s: 3, a: "16 / 10" },
  { s: 6, a: "16 / 10" },
];

const DEEP = [
  {
    t: "THE HIYU",
    d: "The Hiyu is Seattle's old ferry boat, turned into a floating venue — million-dollar reno, two open decks, two bar lounges. It sails Lake Union, Lake Washington and Puget Sound, boarding at MOHAI off Terry Ave N. Basically the city's party ferry.",
  },
  {
    t: "THE DJ",
    d: "DJ Prashant (Prashant Kakad) calls himself a full-time party starter. Straight out of Mumbai, came to the U.S. for grad school, got the engineering job at Intel — and quit it to start Bollywood Dreams Entertainment, because the music was never going to be the side gig. Singer, MC, choreographer, DJ — he blends Hollywood and Bollywood into something that gets everyone off the wall, Mumbai or Seattle.",
  },
  {
    t: "THE CULTURE",
    d: "This is the Indian American thing, out in the open. Y2K nostalgia through a Desi lens — the 2000s club hits and the Bollywood bangers are the same decade, no separating them. Kids raised on both soundtracks showing up dressed like 2003 and dancing to Punjabi on a ferry. The culture doesn't stay home — it takes the skyline.",
  },
  {
    t: "OUTSIDE THE BOX",
    d: "Hana shot the night — the crowd, the DJ, the whole deck — but it was never just event photography. Working the social angle with the Hiyu's team and DJ Prashant, she treated the deck like a set: frames built to move, moments made to post. The pictures aren't documentation, they're promotion — the night becomes content the event keeps using.",
  },
];

function BoatPartyPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [deep, setDeep] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · EVENT · BOAT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Iconic 2000s Boat Party.
        </h1>
        <p className="so-micro mt-3">DJ PRASHANT · HOLLYWOOD × BOLLYWOOD · ON THE HIYU · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        <div className="so-reel-row">
          <div> {/* text column */}

        {/* The event */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE EVENT</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Four hours on the water, Y2K outfits in full effect. Boarding
            at 7, sail at 8, and then it's just Seattle spinning past.
            Three rooms, three vibes — Prashant outside doing Bollywood,
            Punjabi and 2000s club hits, EDM in the Salish room, reggaeton
            in Pau Hana. Lil Jon to Sunidhi Chauhan, one night, no stops.</p>
        </div>

        {/* The intro — super short */}
        <div style={{ marginTop: 20, maxWidth: "58ch" }}>
          <p style={{ lineHeight: 1.78 }}>
            <strong>The Hiyu</strong> — a state ferry turned Seattle's
            premier floating arts, entertainment and event venue on Lake
            Union — posted my work from the night. A venue this central to
            Seattle culture putting the photos on their own feed is the
            kind of support that keeps a scene alive: 12.5K views and
            counting. The night itself was hosted by{" "}
            <strong>DJ Prashant</strong>, owner of{" "}
            <a href="https://www.instagram.com/jaiho.seattle/" target="_blank" rel="noreferrer" style={{ color: "var(--color-verm)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              @jaiho.seattle →
            </a>
            , who runs Indian American and Indian nightlife through the
            city — some of it themed, all of it bringing the culture to
            life.
          </p>
        </div>

        {/* Go deeper — tap through */}
        <div
          style={{
            marginTop: 40,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">GO DEEPER</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {deep + 1} / 4 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDeep((s) => (s + 1) % DEEP.length)}
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
              {DEEP[deep].t}
            </p>
            <p key={deep} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {DEEP[deep].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {DEEP.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === deep ? "var(--color-verm)" : "var(--color-sepia)",
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
          </div>
          <div className="so-reel-side" style={{ position: "sticky", top: 84 }}>
            <div
              style={{
                aspectRatio: "9 / 16",
                borderRadius: 18,
                border: "1px solid rgba(236, 231, 221, 0.16)",
                background: "#131210",
                display: "grid",
                placeItems: "center",
                padding: 14,
                textAlign: "center",
              }}
            >
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em", lineHeight: 1.9 }}>
                SOCIAL REEL · TO BE PLACED
                <br />
                THE HIYU × DJ PRASHANT
              </p>
            </div>
          </div>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 14 · BY HANA</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", columnGap: 14, rowGap: 20, marginTop: 14, alignItems: "start" }}>
            {PHOTOS.map((ph, i) => {
              const L = LAYOUT[i];
              return (
                <button
                  key={ph.src}
                  className="so-photo-cell"
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={ph.cap}
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

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>THE NIGHT, CONTINUED</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "14px 30px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.eventbrite.com/e/iconic-2000s-boat-party-dj-prashant-hollywood-x-bollywood-the-hiyu-tickets-1999005770070" target="_blank" rel="noreferrer">
              THE EVENT — EVENTBRITE →
            </a>
            <a className="so-link-jump" href="https://onthehiyu.com/" target="_blank" rel="noreferrer">
              ON THE HIYU →
            </a>
            <a className="so-link-jump" href="https://dreamsperfected.com/djprashant/" target="_blank" rel="noreferrer">
              DJ PRASHANT — BOLLYWOOD DREAMS →
            </a>
          </div>
          <p className="so-micro" style={{ marginTop: 14, textAlign: "center", color: "var(--color-stone)", letterSpacing: "0.1em" }}>
            THE HIYU · 860 TERRY AVE N · SEATTLE
          </p>
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

                <CaseBookingCta />

<div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}