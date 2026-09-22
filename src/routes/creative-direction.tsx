import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creative-direction")({
  component: CreativeDirectionPage,
});

function CreativeDirectionPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">THE THREAD · HOW I SHAPE THE WORLD</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Creative Direction.
        </h1>
        <p className="so-micro mt-3">THE THINKING THAT CONNECTS THE PIECES</p>
        <hr className="so-rule mt-6" />

        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p style={{ margin: 0, lineHeight: 1.78 }}>
            Concepts, references, styling, art direction, campaign thinking,
            launch direction — and the decisions that make everything feel
            like one world. Not a service sitting next to the others; the
            layer underneath them.
          </p>
        </div>

        {/* What's included */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">WHAT'S INCLUDED</p>
          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {[
              "Concept development",
              "Moodboards + references",
              "Styling + wardrobe direction",
              "Art direction + set direction",
              "Campaign direction",
              "Launch direction",
              "Visual consistency across photo, web, brand, and content",
            ].map((n) => (
              <div key={n} style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}>
                <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                  —
                </span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direction vs the visual system */}
        <div className="so-case-cols" style={{ marginTop: 48, alignItems: "start" }}>
          <div>
            <div style={{ maxWidth: "44ch" }}>
              <p className="so-micro">CREATIVE DIRECTION</p>
              <p style={{ marginTop: 10, lineHeight: 1.75 }}>
                The concept. What should it feel like? How should it look
                across everything — the references, styling, imagery and
                campaign thinking that support it?
              </p>
            </div>
          </div>
          <div>
            <div style={{ maxWidth: "44ch" }}>
              <p className="so-micro">BRANDING + IDENTITY</p>
              <p style={{ marginTop: 10, lineHeight: 1.75 }}>
                The visual system. Logo, typography, color, marks, brand
                guidelines — the concrete language the direction lands in.
              </p>
            </div>
          </div>
        </div>

        {/* CTA — a project, not a shoot */}
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
          <p className="so-micro" style={{ maxWidth: "44ch", color: "#f5f2ea" }}>
            DIRECTION ISN'T BOOKED LIKE A SESSION — IT'S BUILT INTO THE PROJECT.
          </p>
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
              BUILD A PROJECT →
            </a>
            <a
              href="/creative-direction-content"
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
              SEE HOW I DIRECT →
            </a>
          </div>
        </div>

        {/* The hierarchy, stated */}
        <div style={{ marginTop: 60, maxWidth: "58ch" }}>
          <p className="so-micro">HOW THE OFFICE STACKS</p>
          <p style={{ marginTop: 14, lineHeight: 1.8, fontWeight: 700 }}>
            Photography · Websites · Branding + Identity
          </p>
          <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", lineHeight: 1.8, letterSpacing: "0.1em" }}>
            POWERED BY CREATIVE DIRECTION — CAMPAIGNS · CONTENT · STYLING ·
            LAUNCHES · SHORT-FORM MOTION
          </p>
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