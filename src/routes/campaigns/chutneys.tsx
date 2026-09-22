import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/chutneys")({
  component: ChutneysPage,
});

const SHOTS = [
  { src: "/assets/campaigns/chutneys/ch-01.jpg", cap: "PLATE 01" },
  { src: "/assets/campaigns/chutneys/ch-02.jpg", cap: "PLATE 02" },
  { src: "/assets/campaigns/chutneys/ch-03.jpg", cap: "PLATE 03" },
  { src: "/assets/campaigns/chutneys/ch-04.jpg", cap: "PLATE 04" },
];

function ChutneysPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FILM · FOOD · PROMOTION</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Chutneys.
        </h1>
        <p className="so-micro mt-3">NORTH INDIAN · BELLEVUE · COMMERCIAL & CAMPAIGN BY HANA</p>
        <hr className="so-rule mt-6" />

        {/* The spot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SPOT</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Chutneys is an upscale North Indian restaurant in the heart of
            downtown Bellevue — an elevated journey through the flavors of
            modern Mumbai. The kitchen fuses comfort food and street-food
            favorites with Chinese-inspired dishes, each plate made with
            care and a lot of heart: familiar, warm, and a little
            unexpected, the way Indian food in a new city should be.
          </p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            It's a dining room and an event kitchen in one. For gatherings
            of any size, the catering side brings live cooking and rich
            regional flavors straight to the party — from intimate dinners
            to full celebrations. Find it at City Square, 938 110th Ave NE
            #5, Bellevue.
          </p>
        </div>

        {/* The commercial — hosted on-site */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">THE COMMERCIAL — MADE FOR CHUTNEYS BELLEVUE</p>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 16,
              overflow: "hidden",
              background: "#0e0d0b",
              marginTop: 14,
              border: "1px solid var(--color-sepia)",
            }}
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster="/assets/campaigns/chutneys/ch-01.jpg"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", background: "#0e0d0b" }}
            >
              <source src="/assets/campaigns/chutneys/commercial.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
            PLAYED FROM THE OFFICE'S OWN VAULT · MADE FOR CHUTNEYS BELLEVUE
          </p>
        </div>

        {/* The campaign */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE CAMPAIGN</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Beyond the film — the still frames that feed the feeds. Promo
            photography for Chutneys' socials and their website: the plates,
            the room, the color of the food. Seasoned, plated, and graded
            in the office.
          </p>
        </div>

        {/* The photos */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">THE PHOTOS — BY HANA</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, marginTop: 12 }}>
            {SHOTS.map((s) => (
              <div key={s.src}>
                <img
                  src={s.src}
                  alt={s.cap}
                  loading="lazy"
                  style={{ width: "100%", display: "block", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 14 }}
                />
                <p className="so-micro" style={{ marginTop: 10 }}>
                  {s.cap}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro" style={{ textAlign: "center" }}>VISIT CHUTNEYS</p>
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "14px 30px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://chutneysinbellevue.com/" target="_blank" rel="noreferrer">
              CHUTNEYSINBELLEVUE.COM →
            </a>
            <span className="so-micro" style={{ color: "var(--color-stone)" }}>
              CITY SQUARE · 938 110TH AVE NE #5 · BELLEVUE · +1 425-467-0867
            </span>
          </div>
        </div>

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