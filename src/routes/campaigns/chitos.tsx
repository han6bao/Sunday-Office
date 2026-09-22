import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import type { CSSProperties } from "react";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/chitos")({
  component: ChitosPage,
});

const BRAND = [
  {
    t: "WHO HE IS",
    d: "CHITO is the graffiti-era visual artist behind Chitos International — an instantly recognizable monochrome hand. His work has shown up across Givenchy, Veilance and Issey Miyake, and he fronted the Supreme SS23 campaign alongside Highway for THEM Magazine. Seattle's fringe star of the fashion world.",
  },
  {
    t: "WHAT THEY SELL",
    d: "Street luxury in monochrome — clothing and collectible pieces, dropped like records. Right now it's CHITOss26, available direct from the brand. Same marks on the clothes as on the walls: the product is the art.",
  },
  {
    t: "THE FOLLOWING",
    d: "94,371 followers on Instagram at @chito.international — a real audience that moves when pieces drop. The kind of following that turns one post into a waiting list.",
  },
  {
    t: "THE CLIENTELE",
    d: "Celebrity clientele, Seattle scene clientele, street-luxury buyers — artists and the people around them. The brand runs on visibility: the right look in front of the right people, at the right time.",
  },
];

const PHOTOS = [
  { src: "/assets/campaigns/highway-chitos/hc01.jpg", cap: "Count Boss · frame 01" },
  { src: "/assets/campaigns/highway-chitos/hc02.jpg", cap: "Count Boss · frame 02" },
  { src: "/assets/campaigns/highway-chitos/hc03.jpg", cap: "Count Boss · frame 03" },
];

const BLACK: CSSProperties = {
  background: "#0e0e10",
  aspectRatio: "1 / 1",
  borderRadius: 14,
  border: "1px solid rgba(236, 231, 221, 0.12)",
  display: "block",
};

function ChitosPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [brand, setBrand] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">GRAFFITI · FASHION · ART DIRECTION</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 88px)", marginTop: 14 }}>
          Chitos International.
        </h1>
        <p className="so-micro mt-3">CHITO · GRAFFITI-ERA VISUAL ARTIST · SEATTLE</p>
        <hr className="so-rule mt-6" />

        {/* The house of Chito — tap through */}
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
            <p className="so-micro">THE HOUSE OF CHITO</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {brand + 1} / 4 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setBrand((s) => (s + 1) % BRAND.length)}
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
              {BRAND[brand].t}
            </p>
            <p key={brand} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {BRAND[brand].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {BRAND.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === brand ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* The campaign — used as their ad */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE CAMPAIGN — COUNT BOSS</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            "COUNT BOSS" is a campaign — the shoot that brought Highway and
            CHITO into one frame, and the brand ran it as their
            advertisement. Used for promotion: the set on the feed, the
            pieces on display, Seattle's music and graffiti scenes as brand
            identity. Monochrome, street-level, built to sell the world.
            Creative direction by Hana; the frames live right here.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/highway">
              HIGHWAY — THE FACE OF COUNT BOSS →
            </a>
          </div>
        </div>

        {/* Keep going — the bigger rooms */}
        <div style={{ marginTop: 44, maxWidth: "58ch", borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro">KEEP GOING — WHERE THE WORK LIVES</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            One campaign is one frame. Chitos International is a whole
            world — and there are rooms here for building it, directing it
            and keeping it alive.
          </p>
          <div className="mt-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a className="so-link-jump" href="/branding">
              BUILD THE BRAND — WORLD BUILDING →
            </a>
            <a className="so-link-jump" href="/creative-direction-content">
              CAMPAIGNS + CONTENT — CREATIVE DIRECTION & SOCIAL →
            </a>
            <a className="so-link-jump" href="/photography">
              THE PHOTOGRAPHY — MORE CAMPAIGNS →
            </a>
          </div>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 64, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>01 · THE FRAMES — 3 · BY HANA</p>
          <div className="so-photo-grid mt-6">
            {PHOTOS.map((ph, i) => (
              <button
                key={ph.src}
                className="so-photo-cell"
                type="button"
                onClick={() => setOpen(i)}
                aria-label={ph.cap}
              >
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  FRAME {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* More frames placeholder */}
        <div style={{ marginTop: 56, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>02 · MORE FRAMES — TO BE PLACED</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 8 }}>
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <div style={BLACK} />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  FRAME 0{n + 3} · TO BE PLACED
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* From the post — clips */}
        <div style={{ marginTop: 56, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>03 · FROM THE POST — CLIPS BY HANA</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 12 }}>
            {["clip-01", "clip-02", "clip-03"].map((c) => (
              <a
                key={c}
                href="https://www.instagram.com/p/DY9dDCtGy0H/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "block" }}
              >
                <img
                  src={`/assets/campaigns/highway-chitos/clips/${c}.gif`}
                  alt={`Count Boss — clip from the set`}
                  loading="lazy"
                  style={{ width: "100%", display: "block", borderRadius: 14, border: "1px solid var(--color-sepia)", background: "#0e0e10" }}
                />
              </a>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
            THE CLIPS LIVE ON THE POST — @HIGHWAY2009 · OPENING THE FILE →
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