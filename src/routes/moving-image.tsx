import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/moving-image")({
  component: MovingImagePage,
});

const LANES = [
  {
    t: "ARTISTS + MUSIC",
    sub: "MUSIC VIDEOS · VISUALIZERS · RELEASE CONTENT",
    img: "/assets/campaigns/jaydyn-f/jd-09.jpg",
    h: "/campaigns/jaydyn-f",
  },
  {
    t: "BRANDS + CAMPAIGNS",
    sub: "BRAND FILMS · CAMPAIGN MOTION · SOCIAL",
    img: "/assets/campaigns/exhibition/exh8.jpg",
    h: "/campaigns/exhibition",
  },
  {
    t: "EVENTS + CULTURE",
    sub: "RECAPS · PERFORMANCES · DOCUMENTARY MOMENTS",
    img: "/assets/campaigns/leon-thomas/night-02.jpg",
    h: "/campaigns/leon-thomas",
  },
];

const NOTES = [
  { t: "START WITH THE IDEA", d: "Not every project needs motion. When it does, it should have a reason to move." },
  { t: "ONE SHOOT, MORE THAN ONE CUT", d: "Hero film, vertical cuts, teasers, loops and still frames can come from the same production." },
  { t: "POLISHED OR RAW", d: "Clean commercial work or something stranger. The treatment follows the world." },
];

const LINKS = [
  { t: "Creative Direction →", h: "/creative-direction-content", d: "The idea behind it" },
  { t: "Photography →", h: "/photography", d: "The stills beside it" },
  { t: "Social + Content →", h: "/creative-direction-content", d: "Where it keeps moving" },
];

function MovingImagePage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SERVICES · MOVING IMAGE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Moving Image.
        </h1>
        <p className="so-micro mt-3">MOTION, ONE CAPABILITY INSIDE A BIGGER CREATIVE SYSTEM</p>

        <div style={{ marginTop: 24, maxWidth: "58ch" }}>
          <p style={{ margin: 0, lineHeight: 1.75 }}>
            Music videos, brand films, event recaps, content for the feed —
            motion that moves the world around it.
          </p>
        </div>

        {/* The featured film — big 16:9 */}
        <div style={{ marginTop: 40 }}>
          <a
            href="/campaigns/jaydyn-f"
            style={{ position: "relative", display: "block", textDecoration: "none", borderRadius: 20, overflow: "hidden", border: "1px solid var(--color-sepia)" }}
          >
            <img
              src="/assets/campaigns/jaydyn-f/jd-07.jpg"
              alt="Jaydyn F. — in motion"
              loading="lazy"
              style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.12)",
              }}
            >
              <span
                style={{
                  width: 74,
                  height: 74,
                  borderRadius: 999,
                  background: "#f5f2ea",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
                }}
              >
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "22px solid #131210",
                    borderTop: "14px solid transparent",
                    borderBottom: "14px solid transparent",
                    marginLeft: 5,
                  }}
                />
              </span>
            </span>
          </a>
          <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", letterSpacing: "0.12em" }}>
            STILL FROM · JAYDYN F. — IN MOTION · BY HANA
          </p>
        </div>

        {/* Three lanes */}
        <div style={{ marginTop: 56 }}>
          <div className="so-cases" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
            {LANES.map((l) => (
              <a
                key={l.t}
                href={l.h}
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={l.img}
                  alt={l.t}
                  loading="lazy"
                  style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 16, display: "block", border: "1px solid var(--color-sepia)" }}
                />
                <p className="so-micro" style={{ marginTop: 12, letterSpacing: "0.14em", fontWeight: 700 }}>
                  {l.t}
                </p>
                <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.08em", lineHeight: 1.7 }}>
                  {l.sub}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Editorial notes */}
        <div style={{ marginTop: 56, maxWidth: "72ch" }}>
          {NOTES.map((n) => (
            <div key={n.t} style={{ borderTop: "1px solid var(--color-sepia)", padding: "16px 2px 14px" }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                {n.t}
              </p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.78 }}>
                {n.d}
              </p>
            </div>
          ))}
        </div>

        {/* Motion doesn't live alone */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">MOTION DOESN'T LIVE ALONE.</p>
          <div style={{ marginTop: 6, display: "grid", gap: 0 }}>
            {LINKS.map((r) => (
              <a
                key={r.t}
                href={r.h}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  color: "inherit",
                  borderTop: "1px solid var(--color-sepia)",
                  padding: "16px 2px 14px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-verm)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-sepia)")}
              >
                <span className="so-serif" style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}>
                  {r.t}
                </span>
                <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.12em" }}>
                  {r.d}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 56,
            padding: "26px 28px",
            borderRadius: 18,
            background: "#131210",
            color: "#f5f2ea",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div>
            <p className="so-serif" style={{ fontSize: "clamp(20px, 2.6vw, 28px)", margin: 0, color: "#f5f2ea", lineHeight: 1.25 }}>
              HAVE SOMETHING THAT SHOULD MOVE?
            </p>
            <p className="so-micro" style={{ marginTop: 8, color: "rgba(245,242,234,0.85)", letterSpacing: "0.08em", lineHeight: 1.8, maxWidth: "46ch" }}>
              MOTION CAN LIVE INSIDE A LARGER CAMPAIGN OR STAND ON ITS OWN
              WHEN THE IDEA CALLS FOR IT.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/#office-hours"
              style={{
                textDecoration: "none",
                margin: 0,
                background: "#f5f2ea",
                color: "#131210",
                borderRadius: 999,
                padding: "11px 20px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              ADD MOTION TO A PROJECT →
            </a>
            <a
              href="/photography"
              style={{
                textDecoration: "none",
                margin: 0,
                border: "1px solid #f5f2ea",
                color: "#f5f2ea",
                borderRadius: 999,
                padding: "11px 20px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              THE WORK →
            </a>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}