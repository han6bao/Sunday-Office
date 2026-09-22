import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photography/creative")({
  component: CreativePhotographyPage,
});

const IMGS = [
  { src: "/assets/campaigns/exhibition/exh2.jpg", h: "/campaigns/exhibition" },
  { src: "/assets/campaigns/still-different/sd-05.jpg", h: "/campaigns/still-different" },
  { src: "/assets/campaigns/exhibition/exh6.jpg", h: "/campaigns/exhibition" },
];

function CreativePhotographyPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/photography" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Photography
        </a>

        <p className="so-micro so-micro-red">PHOTOGRAPHY · CREATIVE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 96px)", marginTop: 14 }}>
          Creative.
        </h1>
        <p className="so-micro mt-3" style={{ color: "var(--color-stone)", letterSpacing: "0.1em" }}>
          CREATIVE + EDITORIAL — CONCEPTUAL, ARTISTS, FASHION + VISUAL EXPERIMENTATION
        </p>

        <a href="/campaigns/exhibition" style={{ display: "block", textDecoration: "none", borderRadius: 16, border: "1px solid var(--color-sepia)", overflow: "hidden" }}>
          <img
            src="/assets/campaigns/exhibition/exh8.jpg"
            alt="Creative work"
            loading="lazy"
            style={{ width: "100%", aspectRatio: "21 / 9", objectFit: "cover", display: "block", transition: "opacity 0.25s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </a>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginTop: 14 }}>
          {IMGS.map((im) => (
            <a key={im.src} href={im.h} style={{ display: "block", textDecoration: "none", borderRadius: 14, border: "1px solid var(--color-sepia)", overflow: "hidden" }}>
              <img
                src={im.src}
                alt="Creative detail"
                loading="lazy"
                style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", display: "block", transition: "opacity 0.25s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>
          ))}
          {[1, 2, 3].map((k) => (
            <div
              key={k}
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                borderRadius: 14,
                border: "1px dashed var(--color-sepia)",
                background: "color-mix(in srgb, var(--color-paper) 80%, #fffaf2)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em", textAlign: "center", lineHeight: 1.9 }}>
                IMAGE — TO BE ADDED
              </p>
            </div>
          ))}
        </div>

        <a
          href="/photography"
          className="so-micro"
          style={{ display: "inline-block", marginTop: 18, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none" }}
        >
          ALL PHOTOGRAPHY →
        </a>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}