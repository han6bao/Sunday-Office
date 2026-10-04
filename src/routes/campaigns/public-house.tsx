import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/public-house")({
  head: () => seoHead("/campaigns/public-house"),
  component: PublicHousePage,
});

/* Venue photography for Public House, made for their social media. */
const PHOTOS = [
  { src: "/assets/campaigns/soul-social/ss-01.jpg", cap: "the arch" },
  { src: "/assets/campaigns/soul-social/ss-02.jpg", cap: "public house, on screen" },
  { src: "/assets/campaigns/soul-social/ss-03.jpg", cap: "the sign" },
  { src: "/assets/campaigns/soul-social/ss-04.jpg", cap: "behind the bar" },
  { src: "/assets/campaigns/soul-social/ss-05.jpg", cap: "the bottles" },
];


const SPACE_STEPS = [
  {
    t: "THE BACK BAR",
    d: "One lit arch with shelves up to the ceiling. The light sits under the bottles, so the whole wall glows.",
  },
  {
    t: "THE LIGHT",
    d: "Warm amber under the shelves and neon over the glass, with the rest of the room kept dark. I shot it the way it looks in person.",
  },
  {
    t: "THE ROOM",
    d: "Dark wood, foil ductwork across the ceiling and a view straight into a white-tiled kitchen. An old Pioneer Square building with a lot of character.",
  },
  {
    t: "THE FORMAT",
    d: "Everything is vertical, so the photos drop straight into stories and posts without cropping.",
  },
]


function PublicHousePage() {
  const [open, setOpen] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">VENUE PHOTOGRAPHY · BAR + EVENT SPACE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Public House.
        </h1>
        <p className="so-micro mt-3">
          210 OCCIDENTAL AVE S · PIONEER SQUARE · SEATTLE
        </p>
        <p className="so-micro mt-2" style={{ color: "var(--color-stone)" }}>
          PHOTOS BY HANA
        </p>
        <CaseCover src="/assets/campaigns/soul-social/ss-04-bw.jpg" alt="Behind the bar at Public House, Pioneer Square Seattle, black and white" pos="center 40%" />

        {/* The night — the text, with the flyer up beside it */}
        <div
          className="so-case-cols"
          style={{ marginTop: 44, alignItems: "start", gap: 36 }}
        >
          <div style={{ maxWidth: "58ch" }}>
            <p className="so-micro">THE SHOOT</p>
            <p style={{ marginTop: 12, lineHeight: 1.55 }}>
              Photos of <strong>Public House</strong>, a bar and event space in
              Pioneer Square, made for their social media. I shot the space
              itself: the lit back bar, the neon, the bottles and the tile. Every
              photo is vertical, so it can go straight into stories and posts.
            </p>

            {/* The space — the box sits right under the paragraph */}
            <div style={{ marginTop: 56, scrollMarginTop: 120 }}>
              <p className="so-micro" style={{ paddingBottom: 10 }}>THE SPACE</p>
              <div
                role="button"
                tabIndex={0}
                aria-label="The space, tap for the next"
                onClick={() => setStep((s) => (s + 1) % SPACE_STEPS.length)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setStep((s) => (s + 1) % SPACE_STEPS.length);
                  }
                }}
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "left",
                  borderTop: "1px solid var(--color-sepia)",
                  borderBottom: "1px solid var(--color-sepia)",
                  padding: "22px 2px 20px",
                  cursor: "pointer",
                  color: "inherit",
                  font: "inherit",
                }}
              >
                <p
                  className="so-micro"
                  style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}
                >
                  {SPACE_STEPS[step].t}
                </p>
                <p
                  key={step}
                  className="so-chapter-fade"
                  style={{ margin: "12px 0 0", lineHeight: 1.55 }}
                >
                  {SPACE_STEPS[step].d}
                </p>
                <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 20 }}>
                  {SPACE_STEPS.map((_, d) => (
                    <span
                      key={d}
                      aria-hidden
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: d === step ? "var(--color-verm)" : "var(--color-sepia)",
                        display: "inline-block",
                      }}
                    />
                  ))}
                  <span
                    className="so-micro"
                    style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}
                  >
                    TAP FOR THE NEXT →
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="so-ph-note">
            <img src={PHOTOS[1].src} alt="Public House sign on screen" loading="lazy" />
          </div>
        </div>

        {/* Frames — long and vertical, the way they were shot */}
        <div style={{ marginTop: 72 }}>
          <p className="so-micro">VENUE PHOTOS · 5 · BY HANA</p>
          <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)" }}>
            VERTICAL 9:16 · MADE FOR STORIES + POSTS
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              overflowX: "auto",
              paddingBottom: 10,
              marginTop: 16,
            }}
          >
            {PHOTOS.map((ph, i) => (
              <button
                key={ph.src}
                className="so-photo-cell"
                type="button"
                onClick={() => setOpen(i)}
                aria-label={ph.cap}
                style={{
                  flex: "0 0 auto",
                  width: "min(240px, 58vw)",
                  display: "block",
                  padding: 0,
                  background: "none",
                  border: 0,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <img
                  src={ph.src}
                  alt={ph.cap}
                  loading="lazy"
                  style={{
                    width: "100%",
                    aspectRatio: "9 / 16",
                    objectFit: "cover",
                    borderRadius: 14,
                    display: "block",
                  }}
                />
                <span className="so-photo-cap" style={{ fontSize: 12 }}>
                  {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The room */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT PUBLIC HOUSE</p>
          <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
            <a
              className="so-link-jump"
              href="https://www.instagram.com/publichouseseattle/"
              target="_blank"
              rel="noreferrer"
            >
              PUBLIC HOUSE · @PUBLICHOUSESEATTLE →
            </a>
          </div>
          <p
            className="so-micro"
            style={{
              marginTop: 14,
              textAlign: "center",
              color: "var(--color-stone)",
              letterSpacing: "0.1em",
            }}
          >
            210 OCCIDENTAL AVE S · SEATTLE, WA · PIONEER SQUARE
          </p>
        </div>

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
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
    </div>
  );
}
