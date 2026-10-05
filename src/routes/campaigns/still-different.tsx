import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/still-different")({
  head: () => seoHead("/campaigns/still-different"),
  component: StillDifferentPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/still-different/sd-01.jpg", cap: "the light" },
  { src: "/assets/campaigns/still-different/sd-02.jpg", cap: "the couch" },
  { src: "/assets/campaigns/still-different/sd-03.jpg", cap: "the rack, the TV" },
  { src: "/assets/campaigns/still-different/sd-04.jpg", cap: "shopping the rack" },
  { src: "/assets/campaigns/still-different/sd-05.jpg", cap: "ETC · TACOMA" },
  { src: "/assets/campaigns/still-different/sd-06.jpg", cap: "mic in hand" },
];

function StillDifferentPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · GEAR · SHOOT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Still Different.
        </h1>
        <p className="so-micro mt-3">IN ETC TACOMA · PHOTOS BY HANA</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Still Different, 206 hip-hop MC" },
            { k: "WHAT I DID", v: "Artist photos at ETC, a Tacoma streetwear label" },
          ]}
        />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Still Different</strong> is an MC with deep roots in the
            206 hip-hop scene. He has used that name since his first project
            in 2013. He is most at home performing live.
          </p>
        </div>

        {/* The gear */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE GEAR · ETC TACOMA</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            For this shoot he wore <strong>ETC</strong>, a streetwear label
            from Tacoma. The jacket says <strong>ETC · 1996 OFFICIAL
            DREAM</strong> on the sleeve, <strong>TACOMA</strong> across the
            front, and has a big red C on the back.
          </p>
        </div>

        {/* Tacoma */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">WHY TACOMA MATTERS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Tacoma is the port town just south of Seattle. It has its own
            hip-hop, streetwear and DIY show scene. Tacoma is his hometown,
            and the jacket puts the name right across his chest.
          </p>
        </div>

        {/* The TV segment */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE TV SEGMENT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            The same visit included a TV-performance segment filmed by{" "}
            <strong>ReelClip</strong>, with one videographer and one camera.
            The photos on this page are from my camera.
          </p>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SHOOT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            The room was white, with bright ceiling lights, a rack of tees
            and a vintage mic on a stand. He pointed up at the light
            fixture and sat back on the orange couch. We didn't change
            anything in the room. I took these six photos.
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES · 6 · PHOTOS BY HANA</p>
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
                  {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                </span>
              </button>
            ))}
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