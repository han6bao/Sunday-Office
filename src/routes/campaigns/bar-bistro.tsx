import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import type { CSSProperties } from "react";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/bar-bistro")({
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
  background: "#0e0e10",
  aspectRatio: "4 / 5",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

function BarBistroPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FOOD · DRINKS · CONTENT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Bar Bistro.
        </h1>
        <p className="so-micro mt-3">TACOMA · EAT · DRINK · LIVE · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* Hero — the spread above the text */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--color-sepia)",
            marginTop: 26,
            background: "#0e0d0b",
          }}
        >
          <img
            src="/assets/campaigns/bar-bistro/bb-08.jpg"
            alt="The three plates at Bar Bistro"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* The spot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SPOT</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            New American in east Tacoma — 1718 99th St E. Eat, drink,
            live: Northwest flavors, a serious kitchen and bar. Every
            Sunday: <strong>Sunday Supper</strong> — family-style, limited,
            gone when it's gone.
          </p>
        </div>

        {/* The social */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SOCIAL</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The frames that feed their socials — dark, warm, made to make
            people hungry.
          </p>
        </div>

        {/* The influencers */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE COLLAB — TACOMA FOOD INFLUENCERS</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Tacoma Uncovered</strong> came through, and the whole
            table got covered at once.{" "}
            <a className="so-link-jump" href="https://www.instagram.com/tacoma_uncovered/" target="_blank" rel="noreferrer">
              @TACOMA_UNCOVERED →
            </a>
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 7 · BY HANA</p>
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