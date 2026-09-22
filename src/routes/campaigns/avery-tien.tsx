import { createFileRoute } from "@tanstack/react-router";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/avery-tien")({
  component: AveryTienPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/avery-tien/at01.jpg", cap: "Avery · portrait 01" },
  { src: "/assets/campaigns/avery-tien/at02.jpg", cap: "Avery · portrait 02" },
];

function AveryTienPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FASHION · PORTRAITS · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Avery Tien.
        </h1>
        <p className="so-micro mt-3">TIEN · SEATTLE, WA · ALT FASHION DESIGNER</p>
        <hr className="so-rule mt-6" />

        {/* The designer */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE DESIGNER</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            <strong>Avery Tien</strong> is a self-taught fashion designer
            working under the label <strong>TIEN</strong> — unique shapes
            and silhouettes built from repurposed materials, garments with
            memory in them. He shows at <strong>Bumbershoot</strong>'s
            Fashion District, where the clothing designers get seen, and
            he's a fixture of Seattle's alternative scene. His own words:
            "I'm trying to push the envelope on people's creativity and
            self-expression, and the best way I've found to do that is
            with clothing."
          </p>
        </div>

        {/* The community */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE COMMUNITY</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            He's usually at the <strong>Seattle art walk</strong> every
            first Thursday of the month — a regular face showing the work
            and holding space for the scene. Bumbershoot 2025 brought{" "}
            <strong>Rockstar Dreams</strong> to the Fashion District runway,
            and he returned in 2026 as a Merchant Village fashion merchant.
            Runway and market both: fringe shorts, black-and-leather
            shorts, a billed cargo vest that first walked the runway. A
            lot of what he does, he does for this community.
          </p>
        </div>

        {/* The style */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE STYLE</p>
          <p style={{ marginTop: 12, lineHeight: 1.75 }}>
            Seattle fashion, but not the clean version. Repurposed
            materials, reassembled instead of remade — hard-wearing
            streetwear with a little folk-horror romance in it. Worn-in,
            built, one of a kind. Nothing off the rack; everything was
            found, then rebuilt.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro" style={{ textAlign: "center" }}>SEE HIS WORK</p>
          <div className="mt-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "14px 30px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/averytien/" target="_blank" rel="noreferrer">
              INSTAGRAM — @AVERYTIEN →
            </a>
            <a className="so-link-jump" href="https://averytien.com/" target="_blank" rel="noreferrer">
              AVERYTIEN.COM →
            </a>
          </div>
        </div>

        {/* Portraits */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE FRAMES — PORTRAITS BY HANA</p>
          <div className="so-photo-grid mt-6">
            {PHOTOS.map((ph, i) => (
              <div key={ph.src} className="so-photo-cell">
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  {String(i + 1).padStart(2, "0")} · {ph.cap}
                </span>
              </div>
            ))}
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