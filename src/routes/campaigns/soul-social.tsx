import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";
import { useState } from "react";

export const Route = createFileRoute("/campaigns/soul-social")({
  component: SoulSocialPage,
});

/* The room — not the party. Frames of the space itself, plus the flyer. */
const PHOTOS = [
  { src: "/assets/campaigns/soul-social/ss-01.jpg", cap: "the arch" },
  { src: "/assets/campaigns/soul-social/ss-02.jpg", cap: "public house, on screen" },
  { src: "/assets/campaigns/soul-social/ss-03.jpg", cap: "the sign" },
  { src: "/assets/campaigns/soul-social/ss-04.jpg", cap: "behind the bar" },
  { src: "/assets/campaigns/soul-social/ss-05.jpg", cap: "the bottles" },
];

const INVITE = "/assets/campaigns/soul-social/ss-06.jpg";

const LAYOUT: { s: number; a: string }[] = [
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 2, a: "4 / 5" },
  { s: 3, a: "4 / 5" },
  { s: 3, a: "4 / 5" },
];

const SPACE_STEPS = [
  {
    t: "THE ARCH",
    d: "The back bar — one lit arch, shelves stacked to the ceiling. The light comes from underneath the bottles, so the room glows instead of shining.",
  },
  {
    t: "THE GLOW",
    d: "Amber under the shelves, the neon over the glass. Most of the room stays dark on purpose — that's the whole look, and it's why it photographs the way it does.",
  },
  {
    t: "THE ROOM",
    d: "Dark wood bar, foil-wrapped ductwork across the ceiling, a pass straight through to a white-tiled kitchen. Old building, Pioneer Square — the pieces were already there, they just needed to be seen.",
  },
  {
    t: "THE INVITE",
    d: "Soul Social, Saturday 9.26.26, 10pm to 2am — the flyer did its job, the room did the rest.",
  },
];

const HOSTS = [
  { label: "Q’D UP — INSTAGRAM →", href: "https://www.instagram.com/2qd.up/" },
  { label: "CASA DE LIPA — INSTAGRAM →", href: "https://www.instagram.com/casa.de.lipa/" },
  { label: "GIRL STAR LAB — INSTAGRAM →", href: "https://www.instagram.com/girlstarlab/" },
  { label: "PUBLIC HOUSE — INSTAGRAM →", href: "https://www.instagram.com/publichouseseattle/" },
];

function SoulSocialPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">EVENT · SPACE · CONTENT</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 92px)", marginTop: 14 }}>
          Soul Social.
        </h1>
        <p className="so-micro mt-3">
          PUBLIC HOUSE · PIONEER SQUARE · SEATTLE · SATURDAY 9.26.26
        </p>
        <p className="so-micro mt-2" style={{ color: "var(--color-stone)" }}>
          PHOTOS BY HANA
        </p>
        <hr className="so-rule mt-6" />

        {/* The night — and what was actually photographed */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE NIGHT</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            One night at <strong>Public House</strong> on Occidental — Soul
            Social, 10pm to 2am, put on by <strong>Q’D UP</strong>,{" "}
            <strong>Casa de Lipa</strong>, <strong>Girl Star Lab</strong> and the
            house itself. I wasn’t there for the crowd. I shot the room it
            happened in: the arch, the glow, the bottles, the tile, the sign
            over the glass. That’s the part nobody thinks to photograph, and
            it’s usually the reason people walk in.
          </p>
        </div>

        {/* The space — tap through it */}
        <div style={{ marginTop: 40, maxWidth: "62ch" }}>
          <p className="so-micro">THE SPACE</p>
          <button
            type="button"
            onClick={() => setStep((s) => (s + 1) % SPACE_STEPS.length)}
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
              marginTop: 10,
            }}
          >
            <p
              className="so-micro"
              style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}
            >
              {SPACE_STEPS[step].t}
            </p>
            <p
              key={step}
              className="so-chapter-fade"
              style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}
            >
              {SPACE_STEPS[step].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {SPACE_STEPS.map((_, d) => (
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
              <span
                className="so-micro"
                style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}
              >
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* Frames */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — 5 · BY HANA</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              columnGap: 14,
              rowGap: 20,
              marginTop: 14,
              alignItems: "start",
            }}
          >
            {PHOTOS.map((ph, i) => {
              const L = LAYOUT[i];
              return (
                <button
                  key={ph.src}
                  className="so-photo-cell"
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={ph.cap}
                  style={{
                    gridColumn: `span ${L.s}`,
                    display: "block",
                    padding: 0,
                    background: "none",
                    border: 0,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={ph.src}
                    alt={ph.cap}
                    loading="lazy"
                    style={{
                      width: "100%",
                      aspectRatio: L.a,
                      objectFit: "cover",
                      borderRadius: 14,
                      display: "block",
                    }}
                  />
                  <span className="so-photo-cap" style={{ fontSize: 12 }}>
                    {String(i + 1).padStart(2, "0")} · {ph.cap}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The invite */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE INVITE</p>
          <div
            className="so-case-cols"
            style={{ marginTop: 16, alignItems: "start", gap: 32 }}
          >
            <div>
              <img
                src={INVITE}
                alt="The Soul Social flyer — Public House, 9.26.26"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: 420,
                  borderRadius: 14,
                  display: "block",
                  border: "1px solid var(--color-sepia)",
                }}
              />
              <span className="so-photo-cap" style={{ fontSize: 12 }}>
                SOUL SOCIAL · PUBLIC HOUSE · 9.26.26
              </span>
            </div>
            <div style={{ maxWidth: "48ch" }}>
              <p style={{ lineHeight: 1.75 }}>
                The flyer ran a green tile wall, a red bag and four names across
                the top. Everything on it turned out to be true — the tile, the
                gold in the shelves, the room with the lights low.
              </p>
              <p className="so-micro" style={{ marginTop: 24, color: "var(--color-stone)" }}>
                POWERED BY
              </p>
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px 26px",
                }}
              >
                {HOSTS.map((h) => (
                  <a
                    key={h.href}
                    className="so-link-jump"
                    href={h.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {h.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The room */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>THE ROOM</p>
          <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
            <a
              className="so-link-jump"
              href="https://www.instagram.com/publichouseseattle/"
              target="_blank"
              rel="noreferrer"
            >
              PUBLIC HOUSE — @PUBLICHOUSESEATTLE →
            </a>
          </div>
          <p
            className="so-micro"
            style={{
              marginTop: 14,
              textAlign: "center",
              color: "var(--color-stone)",
              letterSpacing: "0.1em",
            }}
          >
            210 OCCIDENTAL AVE S · SEATTLE, WA · PIONEER SQUARE
          </p>
        </div>

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
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
    </div>
  );
}
