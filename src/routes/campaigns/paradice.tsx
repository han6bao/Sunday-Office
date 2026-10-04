import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/paradice")({
  head: () => seoHead("/campaigns/paradice"),
  component: ParadicePage,
});

const PHOTOS = [
  { src: "/assets/campaigns/paradice/pz01.jpg", cap: "Paisley, face down, hands in pockets" },
  { src: "/assets/campaigns/paradice/pz02.jpg", cap: "The back, with the PARADICE seal on the windbreaker" },
  { src: "/assets/campaigns/paradice/pz03.jpg", cap: "Hood pulled, hand to the chest" },
  { src: "/assets/campaigns/paradice/pz04.jpg", cap: "Looking down at the RADICE half-mark" },
  { src: "/assets/campaigns/paradice/pz05.jpg", cap: "PARADICE script at chest level" },
  { src: "/assets/campaigns/paradice/pz06.jpg", cap: "BRIDGE piece, adjusting the zip" },
  { src: "/assets/campaigns/paradice/pz07.jpg", cap: "Hands out, mid-verse" },
  { src: "/assets/campaigns/paradice/pz08.jpg", cap: "The smile, collar held" },
  { src: "/assets/campaigns/paradice/pz09.jpg", cap: "Arms out, in motion" },
];

const ARTIST = [
  {
    t: "WHO HE IS",
    d: "Itz Pz (Peezy, if you know him) is a Seattle rapper who makes music with his group and team in the ReelClip circle. His releases include Life of Pz, EFFORTLESS and the YN TAKEOVER EP.",
  },
  {
    t: "THE PICTURES",
    d: "I shot him in the paisley session before the deal. He used the pictures for his socials and promotions, and then a lot of people started using these photos as their own profile pictures on Twitter and other apps.",
  },
  {
    t: "THE SIGNING",
    d: "A couple of months after the shoot, he signed to Empire Records, the label that released Kendrick Lamar's Section.80. These photos are from right before that, at the end of his independent run.",
  },
];

const THOUGHT = [
  {
    t: "THE LIGHT",
    d: "I helped set up the lighting for this one: straight studio, hard even light against a white wall. That setup shows the print and his face clearly.",
  },
  {
    t: "THE EDIT",
    d: "I edited it dark and gritty, with high saturation and a lo-fi grain that keeps the clothes looking real. There was no set dressing, so the paisley print does most of the work.",
  },
  {
    t: "THE WHY",
    d: "One artist's pictures can promote him, the brand he's wearing and the circle behind him. The artist gets promo photos and the clothing brand gets a campaign from the same shoot.",
  },
];

function ParadicePage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · ARTIST × STREETWEAR · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Itz Pz.
        </h1>
        <p className="so-micro mt-3">SHOT IN THE PAISLEY SESSION × PARADICE WORLDWIDE · REELCLIP CIRCLE · BEFORE THE EMPIRE SIGNING</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Itz Pz, Seattle rapper, in Paradice Worldwide" },
            { k: "WHAT I DID", v: "Studio photos, lighting setup, editing" },
            { k: "RESULT", v: "He used the photos for his socials and promo, and fans started using them as their profile pictures" },
          ]}
        />
        <CaseCover src="/assets/campaigns/paradice/pz05.jpg" alt="Itz Pz for Paradice Worldwide, Seattle streetwear campaign" pos="center 30%" />

        <CaseRead label="THE ARTIST" items={ARTIST.map((x) => ({ t: x.t, d: x.d }))} />

        {/* The brand */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE BRAND · PARADICE WORLDWIDE</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Paradice Worldwide is a streetwear label from South Seattle, run
            by Ari Glass and Harry "Clean" out of 2919 Rainier Ave S. Their
            motto is "TAKING CHANCES.": heavyweight pattern work, dice and
            destiny references, and the paisley print that became their
            signature. The store sells the clothing and hosts creative work in the same space.
          </p>
        </div>

        <CaseRead label="MY THOUGHT PROCESS" items={THOUGHT.map((x) => ({ t: x.t, d: x.d }))} />

        {/* For artists + brands */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR ARTISTS + CLOTHING BRANDS</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            If you're an artist, these are photos you can promote yourself with. If you're a clothing brand, this shows your pieces worn by people your customers follow. One shoot can cover both.
          </p>
        </div>

        {/* The circle */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE CIRCLE</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            The session comes out of the same creative circle as{" "}
            <strong>Soniq Reign</strong> and <strong>ReelClip</strong>:
            artists, labels and studios around Seattle who keep working
            together from one shoot to the next.
          </p>
        </div>

        {/* The look */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE LOOK · GRITTY / ALT / HIGH SATURATION</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Straight studio and unretouched, with the edit pushed hard. I kept
            it dark and gritty so the paisley print stands out.
          </p>
        </div>

        {/* The artist card */}
        <div style={{ marginTop: 36 }}>
          <div className="so-stack-sm" style={{ display: "grid", gridTemplateColumns: "minmax(180px, 260px) 1fr", gap: 24, marginTop: 14, alignItems: "start" }}>
            <img
              src="/assets/campaigns/paradice/itzpz-cover.jpg"
              alt="YN TAKEOVER Pt. 1 EP cover"
              loading="lazy"
              style={{ width: "100%", display: "block", borderRadius: 14, aspectRatio: "1 / 1", objectFit: "cover" }}
            />
            <div>
              <p style={{ lineHeight: 1.55 }}>
                <strong>Itz Pz</strong> is out now with the <em>YN TAKEOVER
                Pt. 1</em> EP (2026), his first record since signing with
                Empire Records. I shot the paisley session below before the
                deal, and the EP came right after.
              </p>
              <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a className="so-link-jump" href="https://open.spotify.com/album/3zjU0GNnGqslUioWMdnYG1" target="_blank" rel="noreferrer">
                  YN TAKEOVER PT. 1 · SPOTIFY →
                </a>
                <a className="so-link-jump" href="https://open.spotify.com/artist/26FIRgKw5rjzNaeGY5Nrr2" target="_blank" rel="noreferrer">
                  ITZ PZ · ARTIST PAGE →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The numbers — live from his Spotify */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <p className="so-micro">HIS NUMBERS · SPOTIFY</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 20,
              borderTop: "1px solid var(--color-sepia)",
              marginTop: 12,
              paddingTop: 16,
            }}
          >
            <div>
              <p className="so-serif" style={{ fontSize: 30, margin: 0 }}>
                20,945
              </p>
              <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                MONTHLY LISTENERS
              </p>
            </div>
            <div>
              <p className="so-serif" style={{ fontSize: 30, margin: 0 }}>
                281,599
              </p>
              <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                TOP TRACK · CLAP SUM
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE SESSION · 9 FRAMES · PHOTOS BY HANA HONG</p>
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