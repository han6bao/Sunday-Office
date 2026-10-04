import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/dj-prashant-hiyu")({
  head: () => seoHead("/campaigns/dj-prashant-hiyu"),
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
    d: "The Hiyu is an old Seattle ferry that got a million-dollar renovation and became a floating venue, with two open decks and two bar lounges. It sails Lake Union, Lake Washington and Puget Sound, boarding at MOHAI off Terry Ave N. Basically the city's party ferry.",
  },
  {
    t: "THE DJ",
    d: "DJ Prashant (Prashant Kakad) calls himself a full-time party starter. He grew up in Mumbai, came to the U.S. for grad school and landed an engineering job at Intel. Then he quit to start Bollywood Dreams Entertainment, because music was never going to be his side gig. He sings, MCs, choreographs and DJs, and his Hollywood and Bollywood mixes get everyone off the wall, in Mumbai or Seattle.",
  },
  {
    t: "THE CULTURE",
    d: "This is Indian American culture out in the open. It's Y2K nostalgia through a Desi lens, since the 2000s club hits and the Bollywood bangers came from the same decade. People raised on both soundtracks showed up dressed like it was 2003 and danced to Punjabi music on a ferry, with the whole skyline behind them.",
  },
  {
    t: "OUTSIDE THE BOX",
    d: "I shot the night: the crowd, the DJ, the whole deck. I worked with the Hiyu's team and DJ Prashant on the social side, so I treated the deck like a set and shot with posting in mind. The photos work as promotion, and the event can keep using them long after the night is over.",
  },
];

function BoatPartyPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [deep, setDeep] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · EVENT · BOAT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Iconic 2000s Boat Party.
        </h1>
        <p className="so-micro mt-3">DJ PRASHANT · HOLLYWOOD × BOLLYWOOD · ON THE HIYU · PHOTOS BY HANA</p>
        <CaseCover src="/assets/campaigns/dj-prashant-hiyu/djp-04.jpg" alt="Iconic 2000s Boat Party on the Hiyu, Seattle event photography" pos="center" />

        <div className="so-reel-row is-solo">
          <div> {/* text column */}

        {/* The event */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE EVENT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Four hours on the water, Y2K outfits in full effect. Boarding
            at 7, sail at 8, and then it's just Seattle spinning past.
            There were three rooms: Prashant outside playing Bollywood,
            Punjabi and 2000s club hits, EDM in the Salish room, and reggaeton
            in Pau Hana. Lil Jon to Sunidhi Chauhan, all in one night.</p>
        </div>

        {/* The intro — super short */}
        <div style={{ marginTop: 20, maxWidth: "58ch" }}>
          <p style={{ lineHeight: 1.55 }}>
            <strong>The Hiyu</strong>, a former state ferry that's now a
            floating arts, entertainment and event venue on Lake Union,
            posted my work from the night. Having a venue that big in Seattle post my photos on their own feed meant a lot, and the post passed 12.5K views. The night itself was hosted by{" "}
            <strong>DJ Prashant</strong>, owner of{" "}
            <a href="https://www.instagram.com/jaiho.seattle/" target="_blank" rel="noreferrer" style={{ color: "var(--color-verm)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              @jaiho.seattle →
            </a>
            , who runs Indian and Indian American nightlife around the
            city. Some of his events are themed, and all of them celebrate
            the culture.
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
            <p key={deep} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.55, maxWidth: "62ch" }}>
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
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES · 14 · BY HANA</p>
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
                    {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>THE NIGHT, CONTINUED</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.eventbrite.com/e/iconic-2000s-boat-party-dj-prashant-hollywood-x-bollywood-the-hiyu-tickets-1999005770070" target="_blank" rel="noreferrer">
              THE EVENT · EVENTBRITE →
            </a>
            <a className="so-link-jump" href="https://onthehiyu.com/" target="_blank" rel="noreferrer">
              ON THE HIYU →
            </a>
            <a className="so-link-jump" href="https://dreamsperfected.com/djprashant/" target="_blank" rel="noreferrer">
              DJ PRASHANT · BOLLYWOOD DREAMS →
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