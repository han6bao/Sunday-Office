import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/kenshi-killz")({
  head: () => seoHead("/campaigns/kenshi-killz"),
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
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · TV · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Kenshi Killz.
        </h1>
        <p className="so-micro mt-3">@KENSHIKILLA · SEATTLE · PHOTOS BY HANA</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Kenshi Killz, Seattle artist" },
            { k: "WHAT I DID", v: "Promo photos, plus location and on-set help for her ReelClip TV performance" },
          ]}
        />
        <CaseCover src="/assets/campaigns/kenshi-killz/kk-03.jpg" alt="Kenshi Killz, Seattle artist promo photography" pos="center 35%" />

        {/* The artist */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE ARTIST</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Kenshi Killz</strong> (@kenshikilla) is a Seattle artist
            and a co-founder of <strong>For The Girls PNW</strong>{" "}
            (@forthegirlspnw), which supports women in the local scene. Her
            album <em>He Rules Us All</em> is out on Bandcamp. She has played
            the <strong>Capitol Hill Block Party</strong> and headlined
            Belltown Bloom's "Rock Can Roll" at Sunset Tavern.
          </p>
        </div>

        {/* TV performance */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE TV PERFORMANCE</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Before the promo photos, she filmed a{" "}
            <strong>TV-style performance</strong> with{" "}
            <strong>ReelClip</strong>, one videographer and one camera, for
            her to post and promote. I helped with the{" "}
            <strong>location and general assistance</strong> for that
            session and had the room ready before filming started.
          </p>
        </div>

        {/* The shoot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SHOOT · PROMO PHOTOS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            She wore a keffiyeh over her shoulders, a coin headpiece and a
            jersey with MILTON across it. We set a vintage TV on the ledge
            and shot at golden hour, with the Space Needle in the corner of
            the frame. The photos were for her promo, so I kept them grainy
            and bright.
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

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT KENSHI</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/kenshikilla/" target="_blank" rel="noreferrer">
              @KENSHIKILLA · INSTAGRAM →
            </a>
            <a className="so-link-jump" href="https://killzzz.bandcamp.com/album/he-rules-us-all" target="_blank" rel="noreferrer">
              "HE RULES US ALL" · BANDCAMP →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/forthegirlspnw/" target="_blank" rel="noreferrer">
              @FORTHEGIRLSPNW →
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