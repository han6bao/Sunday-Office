import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

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
        <CaseCover src="/assets/campaigns/still-different/sd-05.jpg" alt="Still Different at ETC Tacoma, artist photography" pos="center 35%" />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Still Different</strong> is an MC with deep roots in the
            206 hip-hop scene. He's gone by that name since his first
            project in 2013 and never traded it for an easier one. Live
            shows are where he's most at home: straight to the mic, no
            frills, the way the local circuit likes it.
          </p>
        </div>

        {/* The gear */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE GEAR · ETC TACOMA</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            For this shoot he wore <strong>ETC</strong>, a Tacoma
            streetwear label that puts its hometown right on the chest. The
            jacket says <strong>ETC · 1996 OFFICIAL DREAM</strong> on
            the sleeve and spells <strong>TACOMA</strong> across the front,
            with the big red C on the back. No borrowed logos or LA
            labels. The gear is made in T-Town for T-Town, and he showed
            up in it.
          </p>
        </div>

        {/* Tacoma */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">WHY TACOMA MATTERS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Tacoma is the port town down the road from Seattle, and it has
            always had to build its own thing while the bigger city got the
            attention. That's where its scene came from: hip-hop,
            streetwear, DIY shows and artists working hard with nobody
            watching. The city on the jacket is his hometown, and wearing it across your chest tells people exactly where you're from.
          </p>
        </div>

        {/* The TV segment */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE TV SEGMENT · A SEPARATE THING</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            The same visit included a television-performance segment shot
            with{" "}
            <strong>ReelClip</strong> (one videographer, one camera), but
            that has its own page. These frames are the other side of the
            visit: the artist, the gear and the room, straight from my camera.
          </p>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SHOOT · PHOTOS BY HANA</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            White room, bright ceiling lights, a rack of tees and a vintage
            mic on a stand. He pointed up at the light fixture, sat on the
            orange couch like he owned it, and let the jacket do the rest.
            Six frames, and we didn't need to dress the set at all.
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES · 6</p>
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