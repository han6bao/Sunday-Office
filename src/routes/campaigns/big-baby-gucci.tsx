import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/big-baby-gucci")({
  head: () => seoHead("/campaigns/big-baby-gucci"),
  component: BigBabyGucciPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/big-baby-gucci/bbg-01.jpg", cap: "frame 01 · the set" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-02.jpg", cap: "frame 02 · the crowd" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-03.jpg", cap: "frame 03 · into the mic" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-04.jpg", cap: "frame 04 · the wall" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-05.jpg", cap: "frame 05 · the light" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-06.jpg", cap: "frame 06 · the sweat" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-07.jpg", cap: "frame 07 · through the smoke" },
  { src: "/assets/campaigns/big-baby-gucci/bbg-08.jpg", cap: "frame 08 · the tattooed arm" },
];

function BigBabyGucciPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · LIVE · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Big Baby Gucci.
        </h1>
        <p className="so-micro mt-3">BIGBABYGUCCI · LIVE SET · PHOTOS BY HANA</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Big Baby Gucci, Charlotte rapper" },
            { k: "WHAT I DID", v: "Live photos of his set" },
            { k: "RESULT", v: "His collective, Better Temperatures, reposted the photos" },
          ]}
        />
        <hr className="so-rule mt-6" />

        {/* Hero */}
        <button
          className="so-photo-cell"
          type="button"
          onClick={() => setOpen(0)}
          aria-label={PHOTOS[0].cap}
          style={{ display: "block", width: "100%", marginTop: 26, borderRadius: 20, overflow: "hidden" }}
        >
          <img
            src={PHOTOS[0].src}
            alt={PHOTOS[0].cap}
            loading="lazy"
            style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block" }}
          />
          <span className="so-photo-cap" style={{ fontSize: 12 }}>
            THE HERO · {PHOTOS[0].cap.toUpperCase()} · CLICK TO EXPAND
          </span>
        </button>

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Big Baby Gucci</strong> (BIGBABYGUCCI) is a rapper from
            Charlotte, North Carolina. He has been putting out music since
            2016, and "Drop Top Lexus" in 2019 was the song that put him on.
            He also has a Seattle connection: he's on <strong>"Keep It
            Going"</strong> with <strong>G Rhodz & Sxurce</strong>.
          </p>
        </div>

        {/* The night */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE NIGHT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            The room was smoky and sepia toned, with hard white lights. He
            kept his cap backwards, his shades down and the mic at his mouth
            the whole time. By the middle of the set his tank top was soaked.
            There was an anime face on the brick wall behind him. These are
            eight photos I took during that one set.
          </p>
        </div>

        {/* The collective */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE COLLECTIVE · BETTER TEMPERATURES</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Better Temperatures</strong> is the label he started in
            2024 as a home for his friends. <strong>Austin Skinner</strong>{" "}
            and <strong>30ROCK</strong> are on it. The crew was at the show,
            and when they saw the photos they reposted them right away.
          </p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/bettertemperatures/" target="_blank" rel="noreferrer">
              @BETTERTEMPERATURES →
            </a>
            <a className="so-link-jump" href="https://bettertemperatures.com/" target="_blank" rel="noreferrer">
              BETTERTEMPERATURES.COM →
            </a>
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>LISTEN</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://open.spotify.com/artist/1ra8ujbJcZrV5aUjcfzFKs" target="_blank" rel="noreferrer">
              BIGBABYGUCCI · SPOTIFY →
            </a>
          </div>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE PHOTOS · 8 · PHOTOS BY HANA</p>
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