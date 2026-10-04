import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts } from "../../sunday/case-kit";
import type { CSSProperties } from "react";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/bar-bistro")({
  head: () => seoHead("/campaigns/bar-bistro"),
  component: BarBistroPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/bar-bistro/bb-01.jpg", cap: "the candle round" },
  { src: "/assets/campaigns/bar-bistro/bb-02.jpg", cap: "shrimp + risotto" },
  { src: "/assets/campaigns/bar-bistro/bb-03.jpg", cap: "strawberry cake" },
  { src: "/assets/campaigns/bar-bistro/bb-04.jpg", cap: "the peach" },
  { src: "/assets/campaigns/bar-bistro/bb-05.jpg", cap: "the mojito" },
  { src: "/assets/campaigns/bar-bistro/bb-06.jpg", cap: "the trio" },
  { src: "/assets/campaigns/bar-bistro/bb-07.jpg", cap: "sunlight service" },
];

/* Editorial hierarchy — cocktail trios up top, full-table centerpiece, sunny closer */
const LAYOUT: { s: number; a: string }[] = [
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 6, a: "21 / 9" },
];

const BLACK: CSSProperties = {
  background: "color-mix(in srgb, var(--color-paper) 72%, #fffaf2)",
  aspectRatio: "4 / 5",
  borderRadius: 14,
  border: "1px dashed var(--color-sepia)",
  display: "block",
};

function BarBistroPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FOOD · DRINKS · CONTENT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Bar Bistro.
        </h1>
        <p className="so-micro mt-3">NEW AMERICAN · TACOMA · PHOTOS BY HANA HONG</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Bar Bistro, a New American restaurant and bar in Tacoma" },
            { k: "WHAT I DID", v: "Food and drink photos for their social media, plus a table shoot with Tacoma Uncovered" },
          ]}
        />
        <CaseCover src="/assets/campaigns/bar-bistro/bb-01.jpg" alt="Cocktails at Bar Bistro, Tacoma, food and drink photography" pos="center 55%" />

        {/* The spot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SPOT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            A New American restaurant in east Tacoma at 1718 99th St E. The
            menu is built on Northwest flavors, with a full kitchen and bar.
            Every Sunday they run{" "}
            <strong>Sunday Supper</strong>, served family-style in limited
            portions until it runs out.
          </p>
        </div>

        {/* The social */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SOCIAL</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            I shoot the food and drink photos for their social media. I keep
            the edit dark and warm.
          </p>
        </div>

        {/* The influencers */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE COLLAB · TACOMA FOOD INFLUENCERS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Tacoma Uncovered</strong>, a Tacoma food account, came in
            and we shot the whole table together.{" "}
            <a className="so-link-jump" href="https://www.instagram.com/tacoma_uncovered/" target="_blank" rel="noreferrer">
              @TACOMA_UNCOVERED →
            </a>
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">PHOTOS BY HANA HONG · 7</p>
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
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT BAR BISTRO</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto", alignItems: "baseline" }}>
            <a className="so-link-jump" href="http://barbistrotacoma.com/" target="_blank" rel="noreferrer">
              BARBISTROTACOMA.COM →
            </a>
          </div>
          <p className="so-micro" style={{ marginTop: 14, textAlign: "center", color: "var(--color-stone)", letterSpacing: "0.1em" }}>
            1718 99TH ST E · TACOMA, WA · (253) 537-3655
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