import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photography/")({
  component: PhotographyPage,
});

const SECTIONS = [
  {
    n: "01",
    t: "PEOPLE",
    tags: "HEADSHOTS · PORTRAITS · PERSONAL BRANDING · ARTISTS · CREATIVES",
    imgs: [
      { src: "/assets/photography/avery-01.jpg", h: "/campaigns/avery-tien", cap: "AVERY TIEN" },
      { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", h: "/campaigns/angie-tiara-beauty", cap: "ANGIE TIARA" },
      { src: "/assets/campaigns/paradice/pz01.jpg", h: "/campaigns/paradice", cap: "ITZ PZ. — EMPIRE RECORDS" },
    ],
    view: "VIEW PEOPLE →",
    href: "/photography/people",
  },
  {
    n: "02",
    t: "BRANDS",
    tags: "CAMPAIGNS · PRODUCT · FOOD · HOSPITALITY · COMMERCIAL IMAGERY",
    imgs: [
      { src: "/assets/campaigns/bar-bistro/bb-01.jpg", h: "/campaigns/bar-bistro", cap: "BAR BISTRO" },
      { src: "/assets/campaigns/green-grillz/gg01.jpg", h: "/campaigns/green-grillz", cap: "GREEN GRILLZ · NINE VICIOUS" },
      { src: "/assets/campaigns/still-different/sd-04.jpg", h: "/campaigns/still-different", cap: "STILL DIFFERENT" },
    ],
    view: "VIEW BRANDS →",
    href: "/photography/brands",
  },
  {
    n: "03",
    t: "EVENTS",
    tags: "NIGHTLIFE · PERFORMANCES · LIVE COVERAGE · CULTURE",
    imgs: [
      { src: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/campaigns/leon-thomas", cap: "LEON THOMAS · VICE" },
      { src: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", h: "/campaigns/dj-prashant-hiyu", cap: "THE HIYU · BOAT PARTY" },
      { src: "/assets/campaigns/dj-prashant-hiyu/djp-03.jpg", h: "/campaigns/dj-prashant-hiyu", cap: "THE HIYU · BOAT PARTY" },
    ],
    view: "VIEW EVENTS →",
    href: "/photography/events",
  },
  {
    n: "04",
    t: "CREATIVE",
    tags: "EDITORIAL · CONCEPTUAL · ARTISTS · FASHION · EXPERIMENTAL",
    imgs: [
      { src: "/assets/campaigns/exhibition/exh2.jpg", h: "/campaigns/exhibition", cap: "EXHIBITION" },
      { src: "/assets/campaigns/still-different/sd-05.jpg", h: "/campaigns/still-different", cap: "STILL DIFFERENT — EDITORIAL" },
      { src: "/assets/campaigns/exhibition/exh6.jpg", h: "/campaigns/exhibition", cap: "EXHIBITION — DETAIL" },
    ],
    view: "VIEW CREATIVE →",
    href: "/photography/creative",
  },
];

function PhotographyPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SERVICES · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Photography.
        </h1>
        <p className="so-micro mt-3">PEOPLE · BRANDS · EVENTS · CREATIVE</p>

        {/* Intro + the sidebar */}
        <div className="so-case-cols" style={{ marginTop: 30, alignItems: "start" }}>
          <div>
            <p style={{ margin: 0, maxWidth: "52ch", lineHeight: 1.78 }}>
              The imagery the world runs on — from a single headshot to a
              full campaign, built around what the image needs to do.
            </p>
            <a
              className="so-micro"
              href="/headshots"
              style={{ display: "inline-block", marginTop: 16, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, textDecoration: "none" }}
            >
              LOOKING FOR HEADSHOTS? →
            </a>
          </div>
          <div style={{ maxWidth: "34ch" }}>
            <p className="so-micro">IMAGES THAT WORK</p>
            <p style={{ marginTop: 10, lineHeight: 1.75, color: "var(--color-stone)" }}>
              Natural, intentional photography for people, brands and
              experiences — created to look good and do something.
            </p>
            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              {["PEOPLE", "BRANDS", "EVENTS", "CREATIVE"].map((k) => (
                <p key={k} className="so-micro" style={{ margin: 0, color: "var(--color-verm)", letterSpacing: "0.18em", fontWeight: 600 }}>
                  — {k}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Four sections — tags, three frames each */}
        {SECTIONS.map((s) => (
          <div key={s.n} style={{ marginTop: 88 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
              <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>
                {s.n} / {s.t}
              </p>
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.1em", textAlign: "right" }}>
                {s.tags}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginTop: 16 }}>
              {s.imgs.map((im) => (
                <a key={im.src} href={im.h} style={{ display: "block", textDecoration: "none", borderRadius: 14, border: "1px solid var(--color-sepia)", overflow: "hidden", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}>
                  <img
                    src={im.src}
                    alt={`${s.t} work`}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", display: "block", transition: "opacity 0.25s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                  <span className="so-micro" style={{ display: "block", padding: "9px 12px 10px", letterSpacing: "0.14em", color: "var(--color-stone)" }}>
                    {im.cap}
                  </span>
                </a>
              ))}
            </div>
            <a
              href={s.href}
              className="so-micro"
              style={{ display: "inline-block", marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none" }}
            >
              {s.view}
            </a>
          </div>
        ))}

        {/* Headshot banner */}
        <div
          style={{
            marginTop: 88,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "26px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 26,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "48ch" }}>
            <p className="so-micro so-micro-red">NEED A HEADSHOT?</p>
            <p style={{ marginTop: 10, lineHeight: 1.75 }}>
              Clean, natural, and actually you. For professionals,
              creatives, actors and anyone who wants to show up with
              confidence.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <a
                href="/headshots"
                style={{
                  textDecoration: "none",
                  background: "#131210",
                  color: "#f5f2ea",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                EXPLORE HEADSHOTS →
              </a>
              <a
                href="/#office-hours"
                style={{
                  textDecoration: "none",
                  border: "1px solid #131210",
                  color: "#131210",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                BOOK A HEADSHOT →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["standard-01", "standard-02", "standard-03"].map((s) => (
              <img
                key={s}
                src={`/assets/headshots/${s}.jpg`}
                alt="Headshot work"
                loading="lazy"
                style={{ width: 92, height: 92, objectFit: "cover", borderRadius: 999, display: "block", border: "1px solid var(--color-sepia)" }}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div
          style={{
            marginTop: 56,
            borderRadius: 22,
            background: "#131210",
            color: "#f5f2ea",
            padding: "30px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="so-serif" style={{ fontSize: "clamp(22px, 3.2vw, 34px)", margin: 0, lineHeight: 1.2, maxWidth: "20ch" }}>
              Ready to create? Build the world around them.
            </p>
            <p className="so-micro" style={{ marginTop: 12, color: "rgba(245,242,234,0.75)", letterSpacing: "0.12em" }}>
              CAMPAIGNS, CONTENT, HEADSHOTS AND EVERYWHERE IN BETWEEN.
            </p>
          </div>
          <a
            href="/#office-hours"
            style={{
              textDecoration: "none",
              background: "#f5f2ea",
              color: "#131210",
              borderRadius: 999,
              padding: "12px 22px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontSize: 12,
              whiteSpace: "nowrap",
            }}
          >
            BOOK A PROJECT →
          </a>
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