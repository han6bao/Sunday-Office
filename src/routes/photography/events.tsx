import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photography/events")({
  component: EventsPage,
});

const IMGS = [
  { src: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/campaigns/leon-thomas" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", h: "/campaigns/dj-prashant-hiyu" },
  { src: "/assets/campaigns/dj-wzrd/dj-05.jpg", h: "/campaigns/dj-wzrd" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-03.jpg", h: "/campaigns/dj-prashant-hiyu" },
  { src: "/assets/campaigns/dj-prashant-hiyu/djp-08.jpg", h: "/campaigns/dj-prashant-hiyu" },
];

function EventsPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/photography" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Photography
        </a>

        <p className="so-micro so-micro-red">PHOTOGRAPHY · EVENTS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 96px)", marginTop: 14 }}>
          Events.
        </h1>
        <p className="so-micro mt-3" style={{ color: "var(--color-stone)", letterSpacing: "0.1em" }}>
          EVENTS + CULTURE — NIGHTLIFE, PERFORMANCES + LIVE COVERAGE
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginTop: 34 }}>
          {IMGS.map((im) => (
            <a key={im.src} href={im.h} style={{ display: "block", textDecoration: "none", borderRadius: 14, border: "1px solid var(--color-sepia)", overflow: "hidden" }}>
              <img
                src={im.src}
                alt="Event coverage"
                loading="lazy"
                style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", display: "block", transition: "opacity 0.25s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </a>
          ))}
          {[1].map((k) => (
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