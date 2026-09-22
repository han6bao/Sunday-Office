import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/jazmins-events")({
  component: JazminsCase,
});

const SERVICES = [
  { t: "Wedding Coordination", d: "You've done the planning. Now let us run the day — timelines, vendors, the flow, the solves." },
  { t: "Partial Planning", d: "A little guidance can go a long way. Support customized around what you already have done." },
  { t: "Full Planning + Coordination", d: "From the first idea to the last dance — one cohesive celebration, start to finish." },
];

function JazminsCase() {
  const [paraStep, setParaStep] = useState(0);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CASE FILE · BRANDING + WEBSITE · WEDDINGS + EVENTS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Jazmin's Events + Coordinating.
        </h1>
        <p className="so-micro mt-3">OREGON · PNW — WEDDINGS · EVENTS · MEANINGFUL MOMENTS</p>
        <hr className="so-rule mt-6" />

        {/* HERO IMAGE SLOT — Hana is replacing this with a new visual */}

        {/* My thought process — tap through, Hana's voice */}
        <div style={{ marginTop: 48 }}>
          <div
            style={{
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "26px 26px 22px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
              <p className="so-micro">MY THOUGHT PROCESS</p>
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                {paraStep + 1} / 4 · TAP THE BOX FOR THE NEXT
              </p>
            </div>

            {[
              "Event planning is a million things to take care of at once - venues, vendors, timelines, families, the weather. So every person landing on a planner's site is already carrying that load. My first job was calm: if the site felt frantic, how could anyone trust her with the day?",
              "I also knew exactly who books this - women, mostly, planning one of the most romantic days of their lives. So everything leans light and airy and feminine: the arch shapes, the botanical touches, the creams and greens, the script flourishes. The brand should feel like the wedding they're picturing.",
              "And the honest part: Jazmin didn't know me from anyone. A complete stranger asking for her business. So before any contract, I built her a mockup - a real, clickable vision of the site she could hold up and say yes to. That's how you earn trust when nobody knows your name yet: you show the work before you ask for the job.",
              "The whole thing is meant to be walked through - every page of the website, every piece of the branding, clickable and open. Nothing hidden, nothing to take on faith. You can see it all yourself.",
            ].map((para, i) =>
              i === paraStep ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => setParaStep((s) => (s + 1) % 4)}
                  style={{
                    width: "100%",
                    display: "block",
                    textAlign: "left",
                    background: "none",
                    border: 0,
                    borderTop: "1px solid var(--color-sepia)",
                    padding: "18px 2px 12px",
                    cursor: "pointer",
                    color: "inherit",
                    font: "inherit",
                  }}
                >
                  <p style={{ margin: 0, lineHeight: 1.78, maxWidth: "72ch" }}>{para}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                    {[0, 1, 2, 3].map((d) => (
                      <span
                        key={d}
                        aria-hidden
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: 999,
                          background: d === paraStep ? "var(--color-verm)" : "var(--color-sepia)",
                          display: "inline-block",
                        }}
                      />
                    ))}
                    <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.14em", marginLeft: 6 }}>
                      TAP FOR THE NEXT →
                    </span>
                  </span>
                </button>
              ) : null
            )}
          </div>
        </div>

        {/* Story + mockup | the site — two columns */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE STORY</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                Jazmin is Oregon-born with Pacific Northwest roots, and she
                walked into this project the rarest way a new business can:
                already booked. She started this company with clients lined
                up — a brand-new name, a full calendar, and a skill set
                she's spent years building. The kind of planner who makes a
                wedding look inevitable, because it was never her first
                one.
              </p>
            </div>

            <div style={{ marginTop: 36 }}>
              <p className="so-micro">THE MOCKUP</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                The whole thing started with a mockup. Hana threw together
                a quick one-page site just to show the shape of it — the
                feel, the voice, where everything would live. Jazmin loved
                it. So they locked in with it: the mockup became the real
                thing, and the real thing became the site that takes her
                inquiries today.
              </p>
            </div>
          </div>

          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE SITE</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                The site opens the way the brand feels — calm, confident,
                editorial. "You live the moment. We'll handle the rest."
                Services that meet couples wherever they are: coordination
                only, partial support, or the whole journey. An inquiry
                form up front, a process that walks them from "we're
                engaged" to "go enjoy your day," and an FAQ that answers
                the real questions before they're asked.
              </p>
              <p style={{ marginTop: 14, lineHeight: 1.78 }}>
                On a phone it reads like a well-set table — everything
                exactly where it should be, nothing shouting. Because the
                brand and the site were built as one thing, the voice
                never wavers from first scroll to booking.
              </p>
            </div>
          </div>
        </div>

        {/* The brand — what it feels like, boxed with the guide */}
        <div style={{ marginTop: 48 }}>
          <div
            style={{
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "26px 26px 24px",
            }}
          >
            <p className="so-micro">THE BRAND — HOW IT FEELS</p>
            <div className="so-brand-pair" style={{ marginTop: 16 }}>
              <div>
                <p style={{ margin: 0, lineHeight: 1.78, maxWidth: "58ch" }}>
                  Elegant, intentional, romantic, editorial, soft, refined,
                  timeless. The kit works in sage and ivory with forest,
                  gold and linen — Playfair Display in the headlines, Lora
                  in the body, Allura for the flourishes. Textured paper,
                  linen and soft wash. Arch shapes, divider lines,
                  botanical accents and quiet editorial details, from the
                  business card to the story template.
                </p>
                <p style={{ marginTop: 14, lineHeight: 1.78, maxWidth: "58ch" }}>
                  It's a brand that feels like a well-planned wedding:
                  considered, warm, and built to last the whole way
                  through — paper, feed and everything between.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
                  {["SAGE", "IVORY", "FOREST", "GOLD", "LINEN"].map((c) => (
                    <span
                      key={c}
                      className="so-micro"
                      style={{
                        border: "1px solid var(--color-sepia)",
                        borderRadius: 999,
                        padding: "7px 14px",
                        color: "var(--color-stone)",
                        letterSpacing: "0.14em",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src="/assets/campaigns/jazmins-events/brand-guide.png"
                alt="Jazmin's Events — the brand guide"
                loading="lazy"
                style={{ width: "100%", height: "auto", borderRadius: 16, border: "1px solid var(--color-sepia)", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* The stroke plate — a quiet dark break */}
        <img
          src="/assets/campaigns/jazmins-events/arch-strokes.png"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ width: "100%", height: "auto", borderRadius: 22, display: "block", marginTop: 48, border: "1px solid #1b1a17" }}
        />

        {/* Quote band — the tagline on the black plate */}
        <div
          style={{
            marginTop: 48,
            borderRadius: 22,
            backgroundImage: "url(/assets/campaigns/jazmins-events/black-plate.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "84px 30px",
            textAlign: "center",
            border: "1px solid #1b1a17",
          }}
        >
          <p className="so-serif" style={{ fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: 1.2, color: "#f5f2ea", margin: 0 }}>
            "You live the moment.
            <br />
            We'll handle the rest."
          </p>
          <p className="so-micro" style={{ marginTop: 18, color: "rgba(245,242,234,0.72)", letterSpacing: "0.2em" }}>
            WEDDINGS TODAY. A BRIGHTER TOMORROW.
          </p>
        </div>

        {/* The services — from the live site, no prices */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">THE SERVICES — AS SHE BOOKS THEM</p>
          <div style={{ marginTop: 14, display: "grid", gap: 10, maxWidth: "72ch" }}>
            {SERVICES.map((s) => (
              <div key={s.t} style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}>
                <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                  —
                </span>
                <span>
                  <strong>{s.t}</strong> — {s.d}
                </span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}>
              <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                —
              </span>
              <span>
                <strong>Beyond the aisle</strong> — birthdays, showers, engagements,
                anniversaries, intimate gatherings. Weddings are the heart; every
                celebration is welcome.
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, maxWidth: "58ch" }}>
          <p className="so-micro">THE PROCESS</p>
          <p style={{ marginTop: 12, lineHeight: 1.78 }}>
            Inquiry, then a conversation. Choose the level of support,
            build the plan, watch it come together, and when the day
            arrives — be in it. The site carries that whole journey,
            from "tell us everything" to "enjoy your day."
          </p>
        </div>

        {/* The black book bar */}
        <CaseBookingCta note="A BRAND AND A SITE BUILT AS ONE WORLD, BEFORE THE BUSINESS EVEN OPENED ITS DOORS. YOURS COULD BE NEXT." />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}