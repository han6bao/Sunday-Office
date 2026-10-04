import { createFileRoute } from "@tanstack/react-router";
import { CaseCover } from "../../sunday/case-cover";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/chutneys")({
  head: () => seoHead("/campaigns/chutneys"),
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
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FILM · FOOD · PROMOTION</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Chutneys.
        </h1>
        <p className="so-micro mt-3">NORTH INDIAN · BELLEVUE · COMMERCIAL AND PHOTOS BY HANA HONG</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Chutneys, a North Indian restaurant in downtown Bellevue" },
            { k: "WHAT I DID", v: "A commercial, plus promo photos for their social media and website, shot and edited by me" },
          ]}
        />
        <CaseCover src="/assets/campaigns/chutneys/ch-02.jpg" alt="Chutneys Bellevue, Indian food photography" pos="center" />

        {/* The spot */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE SPOT</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Chutneys is an upscale North Indian restaurant in downtown
            Bellevue, serving modern Mumbai flavors. The menu mixes comfort
            food and street-food favorites with Chinese-inspired dishes.
          </p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            They also cater, from small dinners to big celebrations, with
            live cooking and regional dishes. The restaurant is at City
            Square, 938 110th Ave NE #5, Bellevue.
          </p>
        </div>

        {/* The commercial — hosted on-site */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">THE COMMERCIAL</p>
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
            A COMMERCIAL MADE FOR CHUTNEYS BELLEVUE
          </p>
        </div>

        {/* The campaign */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE CAMPAIGN</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Along with the commercial, I shot promo photos for Chutneys'
            social media and website. I photographed the plates and the
            dining room, and I did all the editing.
          </p>
        </div>

        {/* The photos */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">PHOTOS BY HANA HONG</p>
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
          <div className="mt-3" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
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