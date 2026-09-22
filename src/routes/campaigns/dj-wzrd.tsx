import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/dj-wzrd")({
  component: DjWzrdPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/dj-wzrd/dj-01.jpg", cap: "frame 01 · the room" },
  { src: "/assets/campaigns/dj-wzrd/dj-02.jpg", cap: "frame 02 · at the decks" },
  { src: "/assets/campaigns/dj-wzrd/dj-03.jpg", cap: "frame 03 · hands on" },
  { src: "/assets/campaigns/dj-wzrd/dj-04.jpg", cap: "frame 04 · the booth" },
  { src: "/assets/campaigns/dj-wzrd/dj-05.jpg", cap: "frame 05 · into the mic" },
  { src: "/assets/campaigns/dj-wzrd/dj-06.jpg", cap: "frame 06 · the halo" },
];

function DjWzrdPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">DJ · NIGHTLIFE · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          DJ WZRD.
        </h1>
        <p className="so-micro mt-3">AT CULTURA · CAPITOL HILL · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* The DJ */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE DJ</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>DJ WZRD</strong> is a world-touring DJ and producer who
            plays music that doesn't care about borders — Mexico, Los
            Angeles, Seattle, Canada, Sacramento — with a set list built on
            instinct: <em>"If I don't understand the language of a song,
            I'll still play it if it has a good vibe."</em> He's performed
            at the 10th Anniversary of EDC Mexico, holds a residency at
            Six Flags Mexico, appears on Pitbull's <em>Globalization</em>{" "}
            (Ritmolucion) on SiriusXM and on TV Azteca, and his YouTube
            has pulled over 16 million views. White frames, gold VZZRD
            chain, and a crowd-reading superpower.
          </p>
        </div>

        {/* The venue */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE VENUE — CULTURA</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Cultura Seattle</strong> — "Seattle's #1 Latin club,"
            planted in the heart of <strong>Capitol Hill</strong> at{" "}
            <strong>916 E Pike St</strong>. Reggaeton, dembow, merengue and
            cumbia nights with international DJs, VIP tables, bottle
            service, and lasers through the smoke. This was one of those
            nights — sold out, and nobody's forgotten it.
          </p>
        </div>

        {/* The night */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE NIGHT</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Pink and purple light, the place packed, and one guy in white
            frames up above it all. Hands on the decks, mic pulled in,
            chain catching the strobe. The halo shot is the one that says
            it best — the whole night in a single frame — and the room
            shot underneath just backs it up: packed, loud, nowhere to
            move.
          </p>
        </div>

        {/* The promo */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE PROMO</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            He reposted the shot. One tap and the whole night went back
            out on his feed — booth, crowd, chain, all of it. No caption
            needed. That's the promo doing its job.
          </p>
        </div>

        {/* Frames — hero halo, room under, then the middle four */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 6 · BY HANA</p>

          {/* hero */}
          <button
            className="so-photo-cell"
            type="button"
            onClick={() => setOpen(5)}
            aria-label={PHOTOS[5].cap}
            style={{ display: "block", width: "100%", marginTop: 14, borderRadius: 20, overflow: "hidden" }}
          >
            <img
              src={PHOTOS[5].src}
              alt={PHOTOS[5].cap}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block" }}
            />
            <span className="so-photo-cap" style={{ fontSize: 12 }}>
              THE HERO — {PHOTOS[5].cap.toUpperCase()} · CLICK TO EXPAND
            </span>
          </button>

          {/* the room */}
          <button
            className="so-photo-cell"
            type="button"
            onClick={() => setOpen(0)}
            aria-label={PHOTOS[0].cap}
            style={{ display: "block", width: "100%", marginTop: 22, borderRadius: 18, overflow: "hidden" }}
          >
            <img
              src={PHOTOS[0].src}
              alt={PHOTOS[0].cap}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "21 / 9", objectFit: "cover", display: "block" }}
            />
            <span className="so-photo-cap" style={{ fontSize: 12 }}>
              THE ROOM — {PHOTOS[0].cap.toUpperCase()}
            </span>
          </button>

          {/* the middle four — one row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14, marginTop: 22 }}>
            {PHOTOS.slice(1, 5).map((ph, i) => (
              <button
                key={ph.src}
                className="so-photo-cell"
                type="button"
                onClick={() => setOpen(1 + i)}
                aria-label={ph.cap}
              >
                <img src={ph.src} alt={ph.cap} loading="lazy" style={{ aspectRatio: "4 / 5", objectFit: "cover" }} />
                <span className="so-photo-cap">
                  {String(2 + i).padStart(2, "0")} · {ph.cap}
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