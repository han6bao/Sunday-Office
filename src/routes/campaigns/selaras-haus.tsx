import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts } from "../../sunday/case-kit";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/selaras-haus")({
  head: () => seoHead("/campaigns/selaras-haus"),
  component: SelarasHausPage,
});

/* Grouped: the rooms, then the session */
const PHOTOS = [
  { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", cap: "the lounge" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-13.jpg", cap: "the chairs" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-02.jpg", cap: "the treatment room" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-03.jpg", cap: "the table" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-04.jpg", cap: "the station" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-05.jpg", cap: "the corner" },
];

const HERO = "/assets/campaigns/angie-tiara-beauty/at-01.jpg";

const SECTIONS: { label: string; range: readonly [number, number]; hero?: boolean }[] = [
  { label: "THE ROOMS · 6 · SCROLL →", range: [0, 6], hero: true },
];


function SelarasHausPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">INTERIOR PHOTOGRAPHY · BEAUTY BOUTIQUE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Selaras Haus.
        </h1>
        <p className="so-micro mt-3">BY ANGIE TIARA · SKIN, SCALP + MAKEUP BOUTIQUE · TACOMA · PHOTOS BY HANA HONG</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Selaras Haus, Angie Tiara's skin, scalp and makeup boutique in Tacoma" },
            { k: "WHAT I DID", v: "Interior photos of her new space for her social media and branding" },
          ]}
        />
        <CaseCover src="/assets/campaigns/angie-tiara-beauty/at-13.jpg" alt="Inside Selaras Haus, a beauty boutique in Tacoma, interior photography" pos="center" />

        {/* Who she is | the studio — two columns */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE OWNER</p>
              <p style={{ marginTop: 12, lineHeight: 1.55 }}>
                <strong>Selaras Haus</strong> is a skin, scalp and makeup boutique
                by <strong>Angie Tiara</strong>, a makeup artist and licensed
                esthetician. She does makeup, facials and head spa treatments:
                scalp analysis, double wash, steam, exfoliation and a warm herbal
                rinse.
              </p>
            </div>
          </div>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE STUDIO</p>
              <p style={{ marginTop: 12, lineHeight: 1.55 }}>
                Her brand-new space is at <strong>1001 Pacific
                Ave</strong> in downtown Tacoma. I photographed the
                treatment room, the gold water arch over the sink, the
                gold-framed mirror at the station and the hydrangeas in
                the corner.
              </p>
            </div>
          </div>
        </div>

        {/* The feel */}
        <div className="so-at-feel">
          <p className="so-micro">THE FEEL</p>
          <p className="so-at-feel-t">
            Angie wants the space to feel natural, soft and warm from the
            moment people walk in. I shot it with that in mind.
          </p>
        </div>

        {/* Frames — organized by room / session */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">PHOTOS BY HANA HONG · 6</p>
          {SECTIONS.map((sec) => (
            <div key={sec.label} style={{ marginTop: 34 }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em" }}>
                {sec.label}
              </p>
              {sec.hero ? (
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    overflowX: "auto",
                    paddingBottom: 10,
                    marginTop: 16,
                  }}
                >
                  {/* the hero frame — long and tall, everything else scrolls beside it */}
                  <button
                    className="so-photo-cell"
                    type="button"
                    onClick={() => setOpen(sec.range[0])}
                    aria-label={PHOTOS[sec.range[0]].cap}
                    style={{ flex: "0 0 auto", width: "min(520px, 86vw)", padding: 0, background: "none", border: 0, cursor: "pointer", textAlign: "left" }}
                  >
                    <img
                      src={HERO}
                      alt={PHOTOS[sec.range[0]].cap}
                      loading="lazy"
                      style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 18 }}
                    />
                  </button>
                  {PHOTOS.slice(sec.range[0] + 1, sec.range[1]).map((ph, i) => {
                    const idx = sec.range[0] + 1 + i;
                    return (
                      <button
                        key={ph.src}
                        className="so-photo-cell"
                        type="button"
                        onClick={() => setOpen(idx)}
                        aria-label={ph.cap}
                        style={{ flex: "0 0 auto", width: "min(380px, 72vw)", padding: 0, background: "none", border: 0, cursor: "pointer", textAlign: "left" }}
                      >
                        <img
                          src={ph.src}
                          alt={ph.cap}
                          loading="lazy"
                          style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 14 }}
                        />
                        <span className="so-photo-cap">
                          {String(idx + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="so-photo-grid mt-4">
                  {PHOTOS.slice(sec.range[0], sec.range[1]).map((ph, i) => {
                    const idx = sec.range[0] + i;
                    return (
                      <button
                        key={ph.src}
                        className="so-photo-cell"
                        type="button"
                        onClick={() => setOpen(idx)}
                        aria-label={ph.cap}
                      >
                        <img src={ph.src} alt={ph.cap} loading="lazy" />
                        <span className="so-photo-cap">
                          {String(idx + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What she uses them for */}
        <div className="so-at-use">
          <p className="so-micro">WHAT THE PHOTOS ARE FOR</p>
          <p className="so-at-use-t">
            The photos show clients what the space feels like before they
            book. Angie uses them across her social media and branding for{" "}
            <strong>Selaras Haus</strong>.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT SELARAS HAUS</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/selarashaus/" target="_blank" rel="noreferrer">
              @SELARASHAUS →
            </a>
            <a className="so-link-jump" href="https://atiarabeauty.glossgenius.com/about" target="_blank" rel="noreferrer">
              BOOK WITH ANGIE →
            </a>
          </div>
          <p className="so-micro" style={{ marginTop: 14, textAlign: "center", color: "var(--color-stone)", letterSpacing: "0.1em" }}>
            1001 PACIFIC AVE · TACOMA, WA
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