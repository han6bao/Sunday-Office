import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/angie-tiara-beauty")({
  component: AngieTiaraBeautyPage,
});

/* Grouped: the rooms, then the session */
const PHOTOS = [
  { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", cap: "the lounge" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-13.jpg", cap: "the chairs" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-02.jpg", cap: "the treatment room" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-03.jpg", cap: "the table" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-04.jpg", cap: "the station" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-05.jpg", cap: "the corner" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-08.jpg", cap: "the machine" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-09.jpg", cap: "at the sink" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-11.jpg", cap: "the gold arch" },
];

const HERO = "/assets/campaigns/angie-tiara-beauty/hero-lounge.png";

const SECTIONS: { label: string; range: readonly [number, number]; hero?: boolean }[] = [
  { label: "THE ROOMS — 6", range: [0, 6], hero: true },
  { label: "IN THE SESSION — 3", range: [6, 9] },
];

const PROCESS_STEPS = [
  { t: "LISTEN", d: "Understand what the work needs to do before the camera comes out. For Angie: warm and natural, nothing overdone — with room for the moments that call for a little flash." },
  { t: "SHOOT", d: "Shoot the studio as it is — the rooms, the machine mid-glow, the arch mid-spray. Photographed straight, graded warm, kept real." },
  { t: "HAND OFF", d: "Simple, real, done. Frames she can post the way she works, without over-editing — the range, not just one note." },
];

function AngieTiaraBeautyPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">BEAUTY · STUDIO · CONTENT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Angie Tiara Beauty.
        </h1>
        <p className="so-micro mt-3">ANGIE TIARA · MAKEUP + ESTHETICS · TACOMA · PHOTOS BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* Who she is | the studio — two columns */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE BEAUTY</p>
              <p style={{ marginTop: 12, lineHeight: 1.75 }}>
                <strong>Angie Tiara Beauty</strong> (@angietiarabeauty) is
                Angie — a makeup artist and licensed esthetician. She does
                makeup application and facials, and she's building a real
                name for her <strong>head spa</strong> work: scalp
                analysis, double wash, steam, exfoliation, and a warm
                herbal rinse people drive over for.
              </p>
            </div>
          </div>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE STUDIO</p>
              <p style={{ marginTop: 12, lineHeight: 1.75 }}>
                Her own studio, opened recently at <strong>1001 Pacific
                Ave</strong> in downtown Tacoma. The photos basically sell
                the place: the clean treatment room, the gold water arch
                over the sink, the gold-framed mirror at the station,
                hydrangeas in the corner. Calm, warm, professional — the
                room matches the work.
              </p>
            </div>
          </div>
        </div>

        {/* The content — a tap through */}
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
            <p className="so-micro">MY PROCESS</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {step + 1} / 3 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStep((s) => (s + 1) % PROCESS_STEPS.length)}
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
              {PROCESS_STEPS[step].t}
            </p>
            <p key={step} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {PROCESS_STEPS[step].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {PROCESS_STEPS.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === step ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* Frames — organized by room / session */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 9 · BY HANA</p>
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
                    style={{ flex: "0 0 auto", width: "min(330px, 70vw)", padding: 0, background: "none", border: 0, cursor: "pointer", textAlign: "left" }}
                  >
                    <img
                      src={HERO}
                      alt={PHOTOS[sec.range[0]].cap}
                      loading="lazy"
                      style={{ width: "100%", height: "auto", display: "block", borderRadius: 18 }}
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
                        style={{ flex: "0 0 auto", width: "min(220px, 50vw)", padding: 0, background: "none", border: 0, cursor: "pointer", textAlign: "left" }}
                      >
                        <img
                          src={ph.src}
                          alt={ph.cap}
                          loading="lazy"
                          style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block", borderRadius: 14 }}
                        />
                        <span className="so-photo-cap">
                          {String(idx + 1).padStart(2, "0")} · {ph.cap}
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
                          {String(idx + 1).padStart(2, "0")} · {ph.cap}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT ANGIE TIARA BEAUTY</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/angietiarabeauty/" target="_blank" rel="noreferrer">
              @ANGIETIARABEAUTY →
            </a>
            <a className="so-link-jump" href="https://atiarabeauty.glossgenius.com/about" target="_blank" rel="noreferrer">
              BOOK — GLOSSGENIUS →
            </a>
          </div>
          <p className="so-micro" style={{ marginTop: 14, textAlign: "center", color: "var(--color-stone)", letterSpacing: "0.1em" }}>
            1001 PACIFIC AVE · TACOMA, WA · SEATTLE–TACOMA
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