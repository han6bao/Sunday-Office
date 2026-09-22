import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/essential-brows-studio")({
  component: EssentialBrowsCase,
});

/** Plays only while its slide is on screen — no wall of moving images. */
function SiteVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: 20,
        border: "8px solid #ffffff",
        background: "#f5efdf",
        boxSizing: "border-box",
      }}
    />
  );
}

const SETUP = [
  {
    t: "THE SETUP — FROM ZERO TO CONNECTED",
    d: "She didn't have a website before — the studio ran on a booking link that worked but only went so far. I helped her connect everything to a real domain, with super straightforward instructions every step of the way: the domain, the email that catches her form, the direct booking link. Setup is part of the build — she left with a site that was fully plugged in, not a project.",
  },
  {
    t: "MY JOB — MAKE IT EASIER",
    d: "You don't have to know anything about websites for this to work. Text-savvy or not, I'll walk you through getting an email connected to your form, or pointing your domain at the new page. My job is to make the process easier — to support your brand in a way that makes sense for you.",
  },
];

function EssentialBrowsCase() {
  const [paraStep, setParaStep] = useState(0);
  const [setup, setSetup] = useState(0);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CASE FILE · WEBSITES · BEAUTY + WELLNESS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Essential Brows Studio.
        </h1>
        <p className="so-micro mt-3">MILTON · WA — PERMANENT MAKEUP, DONE CAREFULLY</p>
        <hr className="so-rule mt-6" />

        {/* Hero — the live site, first */}
        <div style={{ marginTop: 34 }}>
          <a href="https://www.essentialbrows.studio/" target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }}>
            <img
              src="/assets/campaigns/essential-brows-studio/cover.jpg"
              alt="Essential Brows Studio — the live site, open on the desk"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: 18, border: "1px solid var(--color-sepia)", display: "block" }}
            />
            <p className="so-micro" style={{ marginTop: 12, color: "var(--color-verm)", letterSpacing: "0.16em" }}>
              SEE THE LIVE SITE →
            </p>
          </a>
        </div>

        {/* Studio + Before | Now — two columns, NOW to the right */}
        <div className="so-case-cols" style={{ marginTop: 44, alignItems: "start" }}>
          <div>
            {/* Who she is */}
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">THE STUDIO</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                Aliya is a permanent makeup artist and trainer in Milton, WA.
                She runs the kind of studio people drive across the city for —
                brows done right, judged honestly, corrected when needed.
              </p>
            </div>

            {/* The before */}
            <div style={{ marginTop: 36 }}>
              <p className="so-micro">BEFORE</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                For a long time the studio ran on a booking link. It worked —
                people found her, booked, showed up. But the link couldn't
                show the work, explain the difference between nano and ombre,
                or answer the questions people had at midnight.
              </p>
            </div>
          </div>

          {/* The now — beside the first two */}
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">NOW</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                Now the whole studio lives in one place — and it's built for
                the way clients actually arrive: on a phone. The booking link
                is connected everywhere, so "Book Your Brows" is one tap away
                at every step. Clients can read everything before they ever
                message her — which brow is theirs, whether they're a
                candidate, what a session looks like start to finish, what it
                costs.
              </p>
              <p style={{ marginTop: 14, lineHeight: 1.78 }}>
                So she doesn't have to explain the studio ten times a day
                anymore. She just sends the link — and puts the time it saves
                where it actually matters: into the craft, into chasing new
                leads, into the training side of the business, teaching other
                artists. The site does the talking; she does the work only
                she can do.
              </p>
            </div>
          </div>
        </div>

        {/* What the site actually does — one large horizontal box */}
        <div style={{ marginTop: 48 }}>
          <div
            className="so-bigbox"
            style={{
              border: "1px solid var(--color-sepia)",
              borderRadius: 22,
              background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
              padding: "26px 26px 22px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <p className="so-micro">WHAT THE SITE DOES — SWIPE THROUGH</p>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="button"
                  aria-label="Previous feature"
                  onClick={(e) => {
                    const el = e.currentTarget.closest(".so-bigbox")?.querySelector<HTMLElement>(".so-carousel");
                    el?.scrollBy({ left: -560, behavior: "smooth" });
                  }}
                  className="so-carousel-btn"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next feature"
                  onClick={(e) => {
                    const el = e.currentTarget.closest(".so-bigbox")?.querySelector<HTMLElement>(".so-carousel");
                    el?.scrollBy({ left: 560, behavior: "smooth" });
                  }}
                  className="so-carousel-btn"
                >
                  →
                </button>
              </div>
            </div>

            <div className="so-carousel" style={{ marginTop: 20, paddingBottom: 6 }}>
              {[
                { v: "01-wake-up.mp4", t: "WAKE UP WITH YOUR BROWS ALREADY DONE", d: "The site opens on exactly what it sells: brows, done before you wake up." },
                { v: "02-which-brow.mp4", t: "WHICH BROW IS YOURS?", d: "Three techniques, matched to how you live — before you ever book." },
                { v: "03-dropdowns.mp4", t: "DROP-DOWNS EVERYWHERE", d: "Tap a treatment and everything unfolds — no digging, no guessing." },
                { v: "04-quiz.mp4", t: "AM I A GOOD CANDIDATE?", d: "The quiz answers the scariest question up front, with the full lists." },
                { v: "05-faq.mp4", t: "QUESTIONS, ANSWERED", d: "From what nano brows are to whether it hurts — all written out." },
                { v: "06-services.mp4", t: "EVERYTHING PRICED AND TIMED", d: "The full menu, plus the touch-up schedule — every book button is a direct link into her own booking system." },
                { v: "07-gallery.mp4", t: "THE WORK, FIRST", d: "A gallery of the results — brows after, in the light." },
                { v: "08-training.mp4", t: "TRAINING, TOO", d: "One-on-one and small-group permanent makeup training with Aliya." },
                { v: "09-tour.mp4", t: "THE WHOLE STUDIO, IN ONE SCROLL", d: "Photos, prices, the address, reviews, socials — all of it, in one place." },
              ].map((f) => (
                <div key={f.v} className="so-slide" style={{ flex: "0 0 auto", width: "min(520px, 88vw)" }}>
                  <SiteVideo src={`/assets/campaigns/essential-brows-studio/videos/${f.v}`} />
                  <p className="so-micro" style={{ marginTop: 16, letterSpacing: "0.12em", fontWeight: 700 }}>
                    {f.t}
                  </p>
                  <p className="so-micro" style={{ marginTop: 8, color: "var(--color-stone)", lineHeight: 1.75, letterSpacing: "0.08em", maxWidth: "52ch" }}>
                    {f.d}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="so-micro"
              style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid var(--color-sepia)", color: "var(--color-stone)", lineHeight: 1.8, maxWidth: "72ch", letterSpacing: "0.08em" }}
            >
              SWIPE OR USE THE ARROWS — AND YES, EVERYTHING'S MOBILE-FRIENDLY, SO
              NEW CLIENTS MEET THE STUDIO ON THEIR PHONE AND BOOK BEFORE SHE
              SAYS A WORD.
            </p>
          </div>
        </div>

        {/* The setup — the part that makes it work */}
        <div
          style={{
            marginTop: 44,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <p className="so-micro">THE SETUP</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {setup + 1} / 2 · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSetup((s) => (s + 1) % SETUP.length)}
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
              {SETUP[setup].t}
            </p>
            <p key={setup} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {SETUP[setup].d}
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
                    background: d === setup ? "var(--color-verm)" : "var(--color-sepia)",
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

        {/* What Aliya does — blurb left, client review right */}
        <div className="so-case-cols" style={{ marginTop: 104, marginBottom: 72, alignItems: "start" }}>
          <div>
            <div style={{ maxWidth: "58ch" }}>
              <p className="so-micro">WHAT ALIYA DOES</p>
              <p style={{ marginTop: 12, lineHeight: 1.78 }}>
                Aliya does nano brows, nano combo, ombre powder and brow
                correction — permanent makeup, all of it by hand. She's also
                a trainer, which honestly keeps her honest: you teach the
                standard you live by. And if she thinks you need a correction
                instead of a fresh set, she'll tell you straight.
              </p>
              <p style={{ marginTop: 14, lineHeight: 1.78 }}>
                Everything books online — prices and timing up front, no
                calls, no back-and-forth. See what you want, book it, done.
              </p>
            </div>
          </div>

          <div>
            <div style={{ borderLeft: "3px solid var(--color-verm)", padding: "2px 0 2px 22px", maxWidth: "58ch" }}>
              <p className="so-serif" style={{ fontSize: "clamp(17px, 2.2vw, 22px)", lineHeight: 1.6, margin: 0 }}>
                "10/10. Quick communication, fast turnaround — no complaints.
                All the information added was accurate. The website is clean
                and straightforward. Will absolutely be using more of Hana's
                services in the future!"
              </p>
              <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                — ALIYA, OWNER OF ESSENTIAL BROWS · WEBSITE SERVICES CLIENT
              </p>
            </div>
          </div>
        </div>

        {/* Why a website like this matters — one paragraph at a time, tap to cycle */}
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
              <p className="so-micro">WHY A WEBSITE LIKE THIS MATTERS</p>
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                {paraStep + 1} / 3 · TAP THE BOX FOR THE NEXT
              </p>
            </div>

            {[
              "Aliya works out of Milton, Washington — right in the middle of the South Sound, close enough that the people who book her come from Tacoma, Puyallup, Federal Way and everywhere in between. For a beauty business, the website is the front door: it's open at midnight, it never gets tired of the same question, and it makes the drive feel worth it before anyone even leaves the house.",
              "Hers isn't a brochure. It's a working site, built around how the studio actually runs — a quiz that tells people whether they're a candidate, drop-downs and pickers that match them to the right technique, every service priced and timed before they ask, a training page for artists who want to learn the craft, and a touch-up lane for the clients who already know.",
              "That's the difference between a website and a web page. One just exists; the other does the selling so you don't have to — and it frees you to spend your time on what only you can do: the craft, the leads, the growth. If you run a beauty service — brows, hair, skin, nails, med spas — or you're looking for a site that works this hard, this is the shape it takes.",
            ].map((para, i) =>
              i === paraStep ? (
                <button
                  key={i}
                  type="button"
                  onClick={() => setParaStep((s) => (s + 1) % 3)}
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
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 14,
                    }}
                  >
                    {[0, 1, 2].map((d) => (
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

        {/* One action left: book it — the live-site link lives up top */}
        <div style={{ marginTop: 72 }} />

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