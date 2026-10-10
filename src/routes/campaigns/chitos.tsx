import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { SiteFooter } from "../../sunday/site-footer";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";
import type { CSSProperties } from "react";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/chitos")({
  head: () => seoHead("/campaigns/chitos"),
  component: ChitosPage,
});

const BRAND = [
  {
    t: "WHO HE IS",
    d: "CHITO is the graffiti-era visual artist behind Chitos International, known for his monochrome hand. His work has appeared with Givenchy, Veilance and Issey Miyake, and he fronted the Supreme SS23 campaign alongside Highway for THEM Magazine.",
  },
  {
    t: "WHAT THEY SELL",
    d: "Monochrome street luxury: clothing and collectible pieces, released in drops. The current one is CHITOss26, sold direct from the brand. The marks on the clothes are the same ones he paints on walls.",
  },
  {
    t: "THE FOLLOWING",
    d: "A large following on Instagram at @chito.international, and an audience that shows up when pieces drop.",
  },
  {
    t: "THE CLIENTELE",
    d: "People from the Seattle scene and street-luxury buyers, mostly artists and the people around them. The brand depends on being seen, so the images need to reach the right people.",
  },
];

const PHOTOS = [
  { src: "/assets/campaigns/highway-chitos/hc01.jpg", cap: "Count Boss · frame 01" },
  { src: "/assets/campaigns/highway-chitos/hc02.jpg", cap: "Count Boss · frame 02" },
  { src: "/assets/campaigns/highway-chitos/hc03.jpg", cap: "Count Boss · frame 03" },
];

const BLACK: CSSProperties = {
  background: "color-mix(in srgb, var(--color-paper) 72%, #fffaf2)",
  aspectRatio: "1 / 1",
  borderRadius: 14,
  border: "1px dashed var(--color-sepia)",
  display: "block",
};

function ChitosPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">GRAFFITI · FASHION · ART DIRECTION</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 88px)", marginTop: 14 }}>
          Chitos International.
        </h1>
        <p className="so-micro mt-3">CHITO · GRAFFITI-ERA VISUAL ARTIST · SEATTLE</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Chitos International, CHITO's Seattle street-luxury brand" },
            { k: "WHAT I DID", v: "Creative direction, photos and clips for the Count Boss shoot" },
            { k: "RESULT", v: "The brand ran Count Boss as its advertisement" },
          ]}
        />

        <CaseRead label="THE HOUSE OF CHITO" items={BRAND.map((x) => ({ t: x.t, d: x.d }))} />

        {/* The campaign — used as their ad */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE CAMPAIGN · COUNT BOSS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            "COUNT BOSS" is the shoot that put Highway and CHITO in the same
            photos, and the brand ran it as their advertisement. The set went
            on their feed with the pieces on display, and it tied Seattle's
            music and graffiti scenes into the brand's identity. We shot it in
            black and white at street level. I did the creative direction, and
            the photos are below.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/highway">
              HIGHWAY · THE FACE OF COUNT BOSS →
            </a>
          </div>
        </div>

        {/* Keep going — the bigger rooms */}
        <div style={{ marginTop: 44, maxWidth: "58ch", borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro">KEEP GOING · MORE OF THE WORK</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            If you're building a brand like Chitos International, here's how I can help with the brand, the direction and the content.
          </p>
          <div className="mt-3" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a className="so-link-jump" href="/branding">
              BUILD THE BRAND · WORLD BUILDING →
            </a>
            <a className="so-link-jump" href="/creative-direction-content">
              CAMPAIGNS + CONTENT · CREATIVE DIRECTION & SOCIAL →
            </a>
            <a className="so-link-jump" href="/photography">
              THE PHOTOGRAPHY · MORE CAMPAIGNS →
            </a>
          </div>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 64, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>01 · THE FRAMES · 3 · PHOTOS BY HANA</p>
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


        {/* From the post — clips */}
        <div style={{ marginTop: 56, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
          <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>02 · FROM THE POST · CLIPS BY HANA</p>
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
                  alt={`Count Boss, clip from the set`}
                  loading="lazy"
                  style={{ width: "100%", display: "block", borderRadius: 14, border: "1px solid var(--color-sepia)", background: "#0e0e10" }}
                />
              </a>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
            THE CLIPS ARE ON THE POST · @HIGHWAY2009 · TAP TO OPEN →
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
      <SiteFooter />
    </div>
  );
}