import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/avery-tien")({
  head: () => seoHead("/campaigns/avery-tien"),
  component: AveryTienPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/avery-tien/at01.jpg", cap: "Avery · portrait 01" },
  { src: "/assets/photography/avery-02.jpg", cap: "Avery · full length, with the bike" },
];

function AveryTienPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FASHION · PORTRAITS · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Avery Tien.
        </h1>
        <p className="so-micro mt-3">TIEN · SEATTLE, WA · ALT FASHION DESIGNER</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Avery Tien, Seattle fashion designer (TIEN)" },
            { k: "WHAT I DID", v: "Portraits" },
          ]}
        />

        {/* The designer */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE DESIGNER</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Avery Tien</strong> is a self-taught fashion designer
            who works under the label <strong>TIEN</strong>. He makes
            unusual shapes out of repurposed materials. In his words: "I'm
            trying to push the envelope on people's creativity and
            self-expression, and the best way I've found to do that is
            with clothing."
          </p>
        </div>

        {/* The community */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE COMMUNITY</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            He shows his work at the <strong>Seattle art walk</strong> on the
            first Thursday of most months. At <strong>Bumbershoot</strong>{" "}
            2025 he brought <strong>Rockstar Dreams</strong> to the Fashion
            District runway, and in 2026 he came back as a Merchant Village
            fashion merchant.
          </p>
        </div>

        {/* The style */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE STYLE</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            He rebuilds found materials into new clothes, so every piece is
            one of a kind. The look is tough streetwear
            with a bit of folk-horror romance.
          </p>
        </div>

        {/* Links */}
        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro" style={{ textAlign: "center" }}>SEE HIS WORK</p>
          <div className="mt-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://www.instagram.com/averytien/" target="_blank" rel="noreferrer">
              INSTAGRAM · @AVERYTIEN →
            </a>
            <a className="so-link-jump" href="https://averytien.com/" target="_blank" rel="noreferrer">
              AVERYTIEN.COM →
            </a>
          </div>
        </div>

        {/* Portraits */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE PHOTOS · PHOTOS BY HANA</p>
          <div className="so-photo-grid mt-6">
            {PHOTOS.map((ph, i) => (
              <div key={ph.src} className="so-photo-cell">
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">
                  {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
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