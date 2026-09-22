import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/kenshi-killz")({
  component: KenshiKillzPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/kenshi-killz/kk-01.jpg", cap: "frame 01 · MILTON" },
  { src: "/assets/campaigns/kenshi-killz/kk-02.jpg", cap: "frame 02 · the field" },
  { src: "/assets/campaigns/kenshi-killz/kk-03.jpg", cap: "frame 03 · tv + keffiyeh" },
  { src: "/assets/campaigns/kenshi-killz/kk-04.jpg", cap: "frame 04 · built to" },
  { src: "/assets/campaigns/kenshi-killz/kk-05.jpg", cap: "frame 05 · the needle" },
  { src: "/assets/campaigns/kenshi-killz/kk-06.jpg", cap: "frame 06 · coins" },
];

function KenshiKillzPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · TV · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Kenshi Killz.
        </h1>
        <p className="so-micro mt-3">@KENSHIKILLA · SEATTLE · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Kenshi Killz</strong> (@kenshikilla) is a Seattle artist
            with a stage presence you can't look away from — big sounds,
            bigger fits, and a voice that carries. Around the community
            she's a fixture: a co-founder of{" "}
            <strong>For The Girls PNW</strong> (@forthegirlspnw), lifting up
            the women of the scene, while her own music runs loud — full
            album <em>He Rules Us All</em> out now on Bandcamp. She's
            performed at the <strong>Capitol Hill Block Party</strong>,
            headlined Belltown Bloom's "Rock Can Roll" at Sunset Tavern,
            and keeps the city's stages hot.
          </p>
        </div>

        {/* TV performance */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE TV PERFORMANCE</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Before the promo pictures came the picture that moved: her{" "}
            <strong>television-style performance</strong>, shot live with{" "}
            <strong>ReelClip</strong> — one person, one camera, straight to
            the screen, built for her to post and push. Hana helped with the{" "}
            <strong>location and overall assistance</strong> behind that
            session — making sure the room was right before the lights
            came up.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/reelclip">
              REELCLIP — TV PERFORMANCES →
            </a>
          </div>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SHOOT — PROMO PHOTOS BY HANA</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            The keffiyeh over her shoulders, the coin headpiece catching
            the sun, MILTON on the jersey like a family name. That vintage
            TV on the ledge just sat there like it was waiting for a
            signal. Six frames, golden hour, the Space Needle in the
            corner. Shot for her promo — grainy, bright, no apologies.
          </p>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 6 · BY HANA</p>
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
                  {String(i + 1).padStart(2, "0")} · {ph.cap}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT KENSHI</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "14px 30px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/kenshikilla/" target="_blank" rel="noreferrer">
              @KENSHIKILLA — INSTAGRAM →
            </a>
            <a className="so-link-jump" href="https://killzzz.bandcamp.com/album/he-rules-us-all" target="_blank" rel="noreferrer">
              "HE RULES US ALL" — BANDCAMP →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/forthegirlspnw/" target="_blank" rel="noreferrer">
              @FORTHEGIRLSPNW —
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