import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const CHAPTERS: { n: string; t: string; p: string[] }[] = [
  {
    n: "01",
    t: "How I See",
    p: [
      "I've always been quiet. I don't say everything I'm thinking — but I notice everything: how light lands, how people carry themselves, what pulls your eye first, what a room is saying before anyone speaks.",
      "Photography gave that instinct somewhere to go. It taught me how much you can communicate without a word — light, styling, composition, color, the way someone holds their body, even what you choose to leave out.",
      "That's still how I work. See the thing clearly first, understand how it should feel, then figure out what it could become.",
    ],
  },
  {
    n: "02",
    t: "Building Worlds",
    p: [
      "I grew up in a generation that's always cataloguing aesthetics — cores, moods, eras, references, little worlds people build to feel something specific. Each one has its own language: color, texture, type, imagery, rhythm, attitude.",
      "That's branding, to me. Not a logo — a whole environment people recognize in a second. The photos, the words, the website, the styling, the content, the energy: all from the same place.",
      "The logo is the flag. The world around it is the territory. Build it consistently, and the right people know the moment they've found something meant for them.",
    ],
  },
  {
    n: "03",
    t: "Photography First",
    p: [
      "Everything started behind the camera.",
      "Photography is where I learned how perception works — how one image can introduce a person, create desire, build trust, sell an idea, change the way something is understood.",
      "That's also what made me care about everything around the image. What campaign does it belong to? Where does it live online? Who's it speaking to? What happens before and after someone sees it?",
      "That curiosity pulled me into creative direction, websites, content and brand work. Photography is still the foundation — everything else grew from making the image mean more.",
    ],
  },
  {
    n: "04",
    t: "Community + Connection",
    p: [
      "I've always liked work that brings people closer to something — an idea, a business, an artist, a resource, each other.",
      "That's part of what community means to me. Sharing what you know. Making introductions. Helping an idea become something useful. Creating things people can actually participate in.",
      "Sometimes that happens through creative work. Sometimes it's mentorship, conversation, education, or simply showing up for the people around you.",
      "I want Sunday Office to make room for that.",
      "Good work can look beautiful and still have somewhere to go.",
    ],
  },
  {
    n: "05",
    t: "Abundance + Purpose",
    p: [
      "I grew up around ideas of happiness, prosperity, longevity — 福祿壽. Over time I've come to understand them as one bigger idea: abundance.",
      "Abundance is recognizing what life has given you — your skills, opportunities, creativity, relationships, perspective — and actually doing something with it.",
      "Most businesses start exactly there. Somebody has a skill, a passion, a craft, something they know they can offer. There has to be enough faith in what you've been given to act on it, grow it, let it serve somebody beyond yourself.",
      "Serve your clients. Serve your community. Serve the people around you. Build a life that serves you too.",
      "Success should create something beyond the transaction.",
    ],
  },
  {
    n: "06",
    t: "What I'm Building",
    p: [
      "I grew up in Tacoma, Washington. I've moved a few times, seen different environments, and spent a lot of my life watching the worlds people create for themselves — what they value, how they express it, what they're building, how they want to be seen.",
      "That curiosity lives inside Sunday Office.",
      "I don't want to make work that could belong to anybody. I want to understand what makes something specific to you, and build from there.",
      "Right now I'm building Sunday Office into a creative practice rooted in photography, websites, brand identity, culture and story — eventually with a physical space for shoots, meetings, ideas, and the work itself.",
      "The work should stop someone, say something clearly, and actually move something forward.",
      "Sunday Office exists to make good ideas visible — give them a world to live in — and let the right people recognize them when they see them.",
    ],
  },
];

function AboutPage() {
  const [ch, setCh] = useState(0);
  const go = (i: number) => setCh(Math.min(Math.max(i, 0), CHAPTERS.length - 1));
  const c = CHAPTERS[ch];
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
          <span style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              SUNDAY OFFICE / INDEPENDENT CREATIVE AGENCY
            </span>
            <a
              href="/private"
              className="so-micro"
              style={{ color: "var(--color-stone)", letterSpacing: "0.14em", textDecoration: "none" }}
            >
              FILE ROOM
            </a>
          </span>
        </div>

        <p className="so-micro so-micro-red">FILE NO. 006 · ALL ABOUT HANA</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Meet Hana.
        </h1>
        <p className="so-micro mt-3">PHOTOGRAPHER / CREATIVE DIRECTOR / FOUNDER</p>

        <div className="so-profile" style={{ marginTop: 44 }}>
          <div>
            <img
              src="/assets/hana-portrait.jpg"
              alt="Hana — portrait"
              loading="lazy"
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: 16,
                border: "1px solid var(--color-sepia)",
                display: "block",
              }}
            />
          </div>
          <div className="so-profile-body">
            <p className="lead">Hi, I'm Hana.</p>
            {/* Hana's new blurb lands here — the copy below is the current placeholder */}
            <p>
              I started behind the camera. But somewhere along the way I
              realized the thing I loved wasn't only taking the photograph. It
              was figuring out what the whole thing could be: the image, the
              campaign, the website it lives on, the little film somebody
              remembers, the way a business introduces itself.
            </p>
            <p>
              Sunday Office grew from that. Today I lead it as an independent
              creative agency rooted in photography, creative direction, culture
              and story.
            </p>
            <div className="so-profile-credits" style={{ marginTop: 26 }}>
              <div className="so-profile-credit">
                <p className="so-micro">BASED</p>
                <p style={{ marginTop: 6 }}>Seattle / Tacoma</p>
              </div>
              <div className="so-profile-credit">
                <p className="so-micro">ROLE</p>
                <p style={{ marginTop: 6 }}>Founder / Creative Director / Photographer</p>
              </div>
              <div className="so-profile-credit" style={{ borderTop: 0 }}>
                <p className="so-micro">OFFICE</p>
                <p style={{ marginTop: 6 }}>Sunday</p>
              </div>
            </div>
            <p className="so-hero-sub" style={{ marginTop: 26 }}>
              Good ideas deserve somewhere to go.
            </p>
          </div>
        </div>
      </div>

      {/* The story navigator */}
      <div className="so-shell" style={{ paddingBottom: 120 }}>
        <div
          style={{
            marginTop: 40,
            border: "1px solid var(--color-sepia)",
            borderRadius: 24,
            overflow: "hidden",
            background: "color-mix(in srgb, var(--color-paper) 94%, #efe9e2)",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid var(--color-sepia)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 600 }}>
              MORE ABOUT HANA
            </p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.2em" }}>
              01 — 06
            </p>
          </div>

          {/* Mobile: chapter numbers, horizontally scrollable */}
          <div className="so-chapters-mnav">
            {CHAPTERS.map((x, i) => (
              <button
                key={x.n}
                type="button"
                onClick={() => go(i)}
                style={{
                  border: "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "7px 13px",
                  background: i === ch ? "var(--color-print)" : "transparent",
                  color: i === ch ? "var(--color-paper)" : "var(--color-stone)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.1em",
                }}
                className="so-micro"
              >
                {x.n}
              </button>
            ))}
          </div>

          <div className="so-chapters-inner">
            {/* Sidebar */}
            <nav className="so-chapters-nav" aria-label="About chapters">
              {CHAPTERS.map((x, i) => (
                <button
                  key={x.n}
                  type="button"
                  onClick={() => go(i)}
                  className="so-micro"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    border: 0,
                    borderBottom: "1px solid var(--color-sepia)",
                    padding: "15px 20px",
                    cursor: "pointer",
                    background: i === ch ? "color-mix(in srgb, var(--color-paper) 78%, #e9e2da)" : "transparent",
                    boxShadow: i === ch ? "inset 3px 0 0 var(--color-verm)" : "none",
                    color: i === ch ? "var(--color-print)" : "var(--color-stone)",
                    fontWeight: i === ch ? 700 : 500,
                    letterSpacing: "0.12em",
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: i === ch ? "var(--color-verm)" : "var(--color-stone)" }}>{x.n}</span>
                  <span>{x.t.toUpperCase()}</span>
                </button>
              ))}
            </nav>

            {/* The open chapter */}
            <div
              className="so-chapter-pane"
              role="button"
              tabIndex={0}
              onClick={() => go(ch + 1)}
              onKeyDown={(ev) => {
                if (ev.key === "Enter" || ev.key === " ") {
                  ev.preventDefault();
                  go(ch + 1);
                }
              }}
              aria-label="Tap for the next chapter"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <span
                aria-hidden
                className="so-serif"
                style={{
                  position: "absolute",
                  right: 6,
                  top: -26,
                  fontSize: "clamp(120px, 20vw, 210px)",
                  lineHeight: 1,
                  color: "rgba(120, 105, 95, 0.09)",
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 0,
                }}
              >
                {c.n}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.18em", fontWeight: 600 }}>
                  ABOUT / {c.n} OF 06
                </p>
                <p className="so-serif" style={{ fontSize: "clamp(30px, 4vw, 46px)", marginTop: 12, lineHeight: 1.1 }}>
                  {c.t}
                </p>
                <div key={ch} className="so-chapter-fade" style={{ marginTop: 18, maxWidth: "62ch", display: "grid", gap: 14 }}>
                  {c.p.map((para) => (
                    <p key={para.slice(0, 24)} style={{ margin: 0, lineHeight: 1.78 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                style={{
                  marginTop: 34,
                  paddingTop: 18,
                  borderTop: "1px solid var(--color-sepia)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 14,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <button
                  type="button"
                  onClick={() => go(ch - 1)}
                  disabled={ch === 0}
                  className="so-micro"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    cursor: ch === 0 ? "default" : "pointer",
                    color: ch === 0 ? "var(--color-sepia)" : "var(--color-verm)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  ← PREVIOUS
                </button>
                <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em" }}>
                  {c.n} OF 06
                </span>
                <button
                  type="button"
                  onClick={() => go(ch + 1)}
                  disabled={ch === CHAPTERS.length - 1}
                  className="so-micro"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    cursor: ch === CHAPTERS.length - 1 ? "default" : "pointer",
                    color: ch === CHAPTERS.length - 1 ? "var(--color-sepia)" : "var(--color-verm)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}