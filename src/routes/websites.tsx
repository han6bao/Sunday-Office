import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/websites")({
  component: WebsitesPage,
});

const NEEDS = [
  {
    t: "FOR ARTISTS + CREATIVES",
    d: "Portfolios that look like the work itself — galleries, film, music, collaborations.",
    adv: "Lead with the work — big, fast, no walls of text. Galleries, film, sound, names you've worked with. The site should feel like the art itself, not a résumé. One clear path to the booking or the inquiry.",
  },
  {
    t: "FOR BUSINESSES + SERVICES",
    d: "Booking, menus, proof you're the real deal — a site that quietly closes the sale.",
    adv: "Make the next step obvious: what you do, what it costs or starts at, how to book. Face and proof up front. Answer the question before it's asked — fast to load, easy on a phone, one clear next step.",
  },
  {
    t: "FOR SMALL BRANDS + PLACES",
    d: "A proper home on the web for the neighborhood favorite people already talk about.",
    adv: "One address that has everything: hours, location, the menu or the pieces, the story, real photos. Make strangers feel the place before they walk in — then send every mention to the same link.",
  },
];


const SETUP = [
  {
    t: "THE STRUGGLE",
    d: "Some people don't know what to do with a website at all — or they have nothing yet, not even branding. Some have the idea but not the how. Some have something established that isn't working, and they just want to refine it and make it look right. Some are stuck, or out of time. Whatever spot you're in — that's the starting point.",
  },
  {
    t: "THE SUPPORT",
    d: "Depending on the package you choose, part of the service is the setup itself: the domain, the email on your form, sourcing the right pictures, shaping the copy with you. My job is to lift whatever's on your hands — the tech, the decisions, the time — so you can get back to your craft and your business.",
  },
  {
    t: "THE HONEST PART",
    d: "I don't specialize in SEO — I'm not going to pretend otherwise. What I'm here for is understanding the world in your language, so that something as crucial as a website actually gets created — and made to feel like yours.",
  },
];

const WHY_STEPS = [
  "Whatever you sell, whoever you serve — people are landing on you somewhere: a booking link, a directory, or nothing at all. If you don't have a website, or the one you have isn't presentable, updated or helpful, you're losing the ones who were already sold on you — to whoever put in the work. Not because they're better. Because they're believable.",
  "Think about how you decide: you check the listing, then you look for the real thing. A directory proves a business exists. A website proves it's the one — services, prices, portfolio, your face, proof. Give them the address that answers everything, and they stop looking.",
  "And it comes down to one link — all of you, in one place, questions answered before they're asked, the booking one tap away. You stop explaining and start closing. The link does the talking.",
];

function WebsitesPage() {
  const [dark, setDark] = useState<Set<number>>(new Set());
  const [whyStep, setWhyStep] = useState(0);
  const [setupStep, setSetupStep] = useState(0);
  const toggle = (i: number) =>
    setDark((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SERVICES · WEBSITES</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Websites.
        </h1>
        <p className="so-micro mt-3">DESIGN · BUILD · HOST · CARE</p>
        <hr className="so-rule mt-6" />

        {/* The results — visible immediately */}
        <div
          style={{
            marginTop: 26,
            border: "1px solid var(--color-sepia)",
            borderRadius: 16,
            padding: "16px 20px 14px",
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
          }}
        >
          <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em" }}>
            THE RESULTS — REAL OUTCOMES FROM THE WORK
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 12 }}>
            {[
              { n: "3×", d: "QUALIFIED LEADS, TYPICALLY WITHIN 90 DAYS OF LAUNCH" },
              { n: "$12K+", d: "BOOKINGS TRACED TO ONE CLIENT'S SITE IN ITS FIRST MONTHS" },
              { n: "24/7", d: "THE SITE ANSWERS AT MIDNIGHT — NO ONE ELSE DOES" },
            ].map((s, i) => (
              <div
                key={s.n}
                style={{
                  flex: "1 1 180px",
                  padding: "0 16px 2px",
                  borderLeft: i === 0 ? "none" : "1px solid var(--color-sepia)",
                }}
              >
                <p className="so-serif" style={{ fontSize: "clamp(24px, 3vw, 34px)", margin: 0 }}>
                  {s.n}
                </p>
                <p className="so-micro" style={{ marginTop: 6, color: "var(--color-stone)", letterSpacing: "0.1em", lineHeight: 1.6 }}>
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The room — blurb + WHAT'S INCLUDED under it, photo on the right */}
        <div className="so-brand-world" style={{ marginTop: 34 }}>
          <div style={{ maxWidth: "58ch", lineHeight: 1.8, display: "grid", gap: 16 }}>
            <p style={{ margin: 0 }}>
              The world, where people actually visit it. Websites for
              people doing good work — designed, built and kept alive so
              your brand has a home that works as hard as you do.
            </p>
            <div style={{ marginTop: 8 }}>
              <p className="so-micro">WHAT'S INCLUDED</p>
              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                {[
                  "Design + build, from one page to a whole platform",
                  "Booking, ordering & enquiry flows",
                  "E-commerce & online stores",
                  "Portfolios, menus & recurring content sections",
                  "Edits, care & hosting after launch",
                ].map((n) => (
                  <div
                    key={n}
                    style={{ display: "flex", gap: 12, alignItems: "baseline", borderTop: "1px solid var(--color-sepia)", paddingTop: 10 }}
                  >
                    <span className="so-micro" style={{ color: "var(--color-verm)", minWidth: 18 }}>
                      —
                    </span>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <img
              src="/assets/work/websites-photo.jpg"
              alt="Websites — Sunday Office"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 18,
                border: "1px solid var(--color-sepia)",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Different needs */}
        <div style={{ marginTop: 48 }}>
          <p className="so-micro">WEBSITES FOR DIFFERENT NEEDS</p>
          <p className="so-micro mt-2" style={{ color: "var(--color-stone)" }}>
            SAME CRAFT, DIFFERENT WORLD — PICK YOUR DOOR.
          </p>
          <div className="so-cases" style={{ marginTop: 18 }}>
            {NEEDS.map((n, i) => {
              const isDark = dark.has(i);
              return (
                <button
                  key={n.t}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isDark}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    border: `1px solid ${isDark ? "#131210" : "var(--color-sepia)"}`,
                    borderRadius: 16,
                    padding: "26px 24px",
                    background: isDark ? "#131210" : "color-mix(in srgb, var(--color-paper) 88%, #fffaf2)",
                    color: "inherit",
                    font: "inherit",
                    cursor: "pointer",
                    transition: "background 0.3s ease, color 0.3s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDark) e.currentTarget.style.borderColor = "var(--color-verm)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isDark) e.currentTarget.style.borderColor = "var(--color-sepia)";
                  }}
                >
                  <p className="so-micro" style={{ letterSpacing: "0.14em", fontWeight: 700, color: isDark ? "#f5f2ea" : "inherit" }}>
                    {n.t}
                  </p>
                  {isDark ? (
                    <>
                      <p className="so-micro" style={{ marginTop: 10, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                        THE ADVICE
                      </p>
                      <p className="so-micro" style={{ marginTop: 8, color: "rgba(245,242,234,0.8)", lineHeight: 1.8, letterSpacing: "0.08em" }}>
                        {n.adv}
                      </p>
                    </>
                  ) : (
                    <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", lineHeight: 1.8, letterSpacing: "0.08em" }}>
                      {n.d}
                    </p>
                  )}
                  <p className="so-micro" style={{ marginTop: 16, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 600 }}>
                    {isDark ? "TAP TO RESTORE ↑" : "TAP TO FLIP →"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* The setup — the part people actually worry about */}
        <div
          style={{
            marginTop: 48,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">THE SETUP</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {setupStep + 1} / {SETUP.length} · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSetupStep((s) => (s + 1) % SETUP.length)}
            style={{
              width: "100%",
              display: "block",
              textAlign: "left",
              background: "none",
              border: 0,
              borderTop: "1px solid var(--color-sepia)",
              padding: "16px 2px 10px",
              cursor: "pointer",
              color: "inherit",
              font: "inherit",
            }}
          >
            <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
              {SETUP[setupStep].t}
            </p>
            <p key={setupStep} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {SETUP[setupStep].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {SETUP.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: d === setupStep ? "var(--color-verm)" : "var(--color-sepia)",
                    display: "inline-block",
                  }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
        </div>

        {/* A few from the shelf — three, in the order Hana wants */}
        <div style={{ marginTop: 44 }}>
          <p className="so-micro">FROM THE SHELF</p>
          <p className="so-micro mt-2" style={{ color: "var(--color-stone)" }}>
            THE SHOWCASE — START HERE.
          </p>
          <div className="so-cases" style={{ marginTop: 18 }}>
            {[
              { f: "grean", t: "GREAN", d: "Matcha + Hojicha · Seattle", h: "https://grean-iota.vercel.app/", img: "/assets/campaigns/grean/featured-cover.png" },
              { f: "essential-brows", t: "Essential Brows", d: "Permanent Makeup · Milton, WA", h: "/campaigns/essential-brows-studio", img: "/assets/campaigns/essential-brows-studio/featured-cover.png" },
              { f: "jazmins-events", t: "Jazmin Events", d: "Weddings + Events · Oregon · PNW", h: "https://jazmins-events.vercel.app/", img: "/assets/campaigns/jazmins-events/featured-cover.png" },
            ].map((s) => (
              <a
                key={s.f}
                href={s.h}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid var(--color-sepia)",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "color-mix(in srgb, var(--color-paper) 88%, #fffaf2)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-verm)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-sepia)")}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 4",
                    background: "color-mix(in srgb, var(--color-paper) 82%, #fffaf2)",
                    display: "block",
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                {s.f === "essential-brows" && (
                  <span
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "var(--color-verm)",
                      color: "#f5f2ea",
                      borderRadius: 999,
                      padding: "6px 12px",
                      letterSpacing: "0.12em",
                      fontSize: 10.5,
                      fontWeight: 700,
                    }}
                  >
                    ★ CASE STUDY
                  </span>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, padding: "16px 18px 18px" }}>
                  <span>
                    <span className="so-micro" style={{ letterSpacing: "0.16em", fontWeight: 700, display: "block" }}>
                      {s.t}
                    </span>
                    <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.1em", display: "block", marginTop: 4 }}>
                      {s.d}
                    </span>
                  </span>
                  <span className="so-micro" style={{ color: "var(--color-verm)" }}>
                    SEE IT →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why a website matters — the results first */}
        <div style={{ marginTop: 48 }}>
          <div
            style={{
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "26px 26px 24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
              <p className="so-micro">WHY A WEBSITE MATTERS</p>
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                {whyStep + 1} / 3 · TAP THE BOX FOR THE NEXT
              </p>
            </div>
            <button
              type="button"
              onClick={() => setWhyStep((s) => (s + 1) % WHY_STEPS.length)}
              style={{
                width: "100%",
                display: "block",
                textAlign: "left",
                background: "none",
                border: 0,
                borderTop: "1px solid var(--color-sepia)",
                marginTop: 16,
                padding: "16px 2px 10px",
                cursor: "pointer",
                color: "inherit",
                font: "inherit",
              }}
            >
              <p key={whyStep} className="so-chapter-fade" style={{ margin: 0, lineHeight: 1.78, maxWidth: "72ch" }}>
                {WHY_STEPS[whyStep]}
              </p>
              <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
                {WHY_STEPS.map((_, d) => (
                  <span
                    key={d}
                    aria-hidden
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: d === whyStep ? "var(--color-verm)" : "var(--color-sepia)",
                      display: "inline-block",
                    }}
                  />
                ))}
                <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                  TAP FOR THE NEXT →
                </span>
              </span>
            </button>
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
          <p className="so-micro" style={{ maxWidth: "44ch", color: "#f5f2ea" }}>
            YOUR WORLD NEEDS A HOME. LET'S TALK ABOUT WHAT IT SHOULD LOOK LIKE.
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
              BUILD YOUR WORLD →
            </a>
            <a
              href="/campaigns/essential-brows-studio"
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
              SEE A CASE →
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