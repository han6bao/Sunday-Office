import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AESTHETICS } from "../sunday/aesthetics";

const WORLDS: {
  k: string;
  chip: string | null;
  line: string;
  desc: string;
  cues?: string;
  explore: { t: string; h: string };
  pairLabel?: string;
  pairs: string[];
}[] = [
  {
    k: "IDENTITY",
    chip: "IDENTITY",
    line: "Give the world something to recognize.",
    desc: "Your identity is the visual language everything else gets to speak — the mark, typography, color, and system that makes the rest of the world feel connected.",
    cues: "LOGO + MARKS · TYPE · COLOR · VISUAL SYSTEM",
    explore: { t: "EXPLORE IDENTITY", h: "/logo-identity" },
    pairLabel: "WHAT CAN COME NEXT",
    pairs: ["PHOTOGRAPHY", "WEBSITE", "CREATIVE DIRECTION", "CONTENT"],
  },
  {
    k: "PHOTOGRAPHY",
    chip: "PHOTOGRAPHY",
    line: "Show us what the world looks like.",
    desc: "People, products, places and campaigns photographed in the visual language of the brand.",
    cues: "PORTRAITS · CAMPAIGNS · PRODUCTS · BRAND LIBRARIES",
    explore: { t: "EXPLORE PHOTOGRAPHY", h: "/photography" },
    pairLabel: "PAIR IT WITH",
    pairs: ["IDENTITY", "WEBSITE", "CONTENT"],
  },
  {
    k: "WEBSITE",
    chip: "WEBSITE",
    line: "Give the world somewhere to live.",
    desc: "Digital spaces that carry the identity, imagery and story into something people can actually experience.",
    explore: { t: "EXPLORE WEBSITES + DIGITAL", h: "/websites" },
    pairLabel: "PAIR IT WITH",
    pairs: ["IDENTITY", "PHOTOGRAPHY", "CONTENT"],
  },
  {
    k: "CONTENT",
    chip: "CONTENT",
    line: "Keep the world alive.",
    desc: "Strategy, reels, graphics and ongoing content that keep the language in front of the people it belongs to.",
    explore: { t: "EXPLORE SOCIAL + CONTENT", h: "/creative-direction-content" },
    pairLabel: "PAIR IT WITH",
    pairs: ["PHOTOGRAPHY", "WEBSITE", "IDENTITY"],
  },
  {
    k: "CREATIVE DIRECTION",
    chip: null,
    line: "Decide how the world should feel.",
    desc: "The concepts, styling and campaign direction that set the tone before anything gets made.",
    explore: { t: "EXPLORE CREATIVE DIRECTION", h: "/creative-direction-content" },
    pairLabel: "PAIR IT WITH",
    pairs: ["IDENTITY", "PHOTOGRAPHY", "MOVING IMAGE"],
  },
  {
    k: "MOVING IMAGE",
    chip: null,
    line: "Put the world in motion.",
    desc: "Short-form motion, brand films and visualizers that let the world move the way it was built to.",
    explore: { t: "EXPLORE MOVING IMAGE", h: "/moving-image" },
    pairLabel: "PAIR IT WITH",
    pairs: ["IDENTITY", "PHOTOGRAPHY", "CREATIVE DIRECTION"],
  },
  {
    k: "NOT SURE",
    chip: "I'M NOT SURE",
    line: "Start with a conversation.",
    desc: "That's the right answer. Tell me what you make, what's stuck, or what you wish it looked like — we'll find the piece that fits.",
    explore: { t: "OPEN OFFICE HOURS", h: "/#office-hours" },
    pairs: [],
  },
];

const SHORT: Record<string, string> = {
  IDENTITY: "Identity",
  PHOTOGRAPHY: "Photography",
  WEBSITE: "Website",
  CONTENT: "Content",
  "CREATIVE DIRECTION": "Creative Direction",
  "MOVING IMAGE": "Moving Image",
};

function WorldPicker() {
  const [pick, setPick] = useState<string | null>(null);
  const w = WORLDS.find((x) => x.k === pick);
  return (
    <div
      style={{
        marginTop: 56,
        border: "1px solid var(--color-sepia)",
        borderRadius: 22,
        background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
        padding: "26px 28px",
      }}
    >
      <p className="so-micro so-micro-red">WHERE DO WE START?</p>
      <p style={{ marginTop: 10, lineHeight: 1.75, maxWidth: "54ch" }}>
        You don't need everything at once. Choose the piece your world
        needs now.
      </p>
      <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 16 }}>
        {WORLDS.filter((x) => x.chip).map((x) => (
          <button
            key={x.k}
            type="button"
            onClick={() => setPick(x.k)}
            className="so-micro"
            style={{
              border: pick === x.k ? "1px solid #131210" : "1px solid var(--color-sepia)",
              borderRadius: 999,
              padding: "8px 15px",
              background: pick === x.k ? "#131210" : "transparent",
              color: pick === x.k ? "#f5f2ea" : "var(--color-print)",
              cursor: "pointer",
              letterSpacing: "0.12em",
            }}
          >
            {x.chip}
          </button>
        ))}
      </div>
      {w && (
        <div key={w.k} className="so-chapter-fade" style={{ marginTop: 24, borderTop: "1px solid var(--color-sepia)", paddingTop: 22 }}>
          <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
            {w.k}
          </p>
          <p className="so-serif" style={{ fontSize: "clamp(20px, 2.6vw, 30px)", marginTop: 10, lineHeight: 1.25 }}>
            {w.line}
          </p>
          <p style={{ marginTop: 10, lineHeight: 1.75, maxWidth: "58ch" }}>{w.desc}</p>
          {w.cues && (
            <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)", letterSpacing: "0.12em" }}>
              {w.cues}
            </p>
          )}
          <div style={{ marginTop: 16, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
            <a className="so-link-jump" href={w.explore.h}>
              {w.explore.t} →
            </a>
            {w.pairLabel && w.pairs.length > 0 && (
              <>
                <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.12em" }}>
                  {w.pairLabel} →
                </span>
                {w.pairs.map((pk) => (
                  <button
                    key={pk}
                    type="button"
                    onClick={() => setPick(pk)}
                    className="so-micro"
                    style={{ border: 0, background: "none", padding: 0, cursor: "pointer", color: "var(--color-verm)", letterSpacing: "0.12em", fontWeight: 600 }}
                  >
                    {SHORT[pk]} →
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/branding")({
  component: BrandingPage,
});

const PERSONAL: string[] = [
  "I grew up in a generation that's always cataloguing aesthetics — cores and moods and looks, all these little worlds people build to feel something specific. 90s hip-hop and bling, Y2K, 2012–2014 Tumblr, fedora swag, indie sleaze, scene and emo, streetwear, coquette, old money, mob wife, dark feminine, Western revival, quiet luxury.",
  "A lot of that comes from growing up online — having constant access to visual worlds we might never have naturally been immersed in, then learning to recognize and name them almost instantly.",
  "Each one is its own language: a set of codes, references, textures, colors, and attitudes that trigger a feeling on sight.",
  "That's the whole trick of branding: pick the world, build it consistently, and the people who feel it find you.",
  "These worlds are how you connect with an audience, how you sell, how you demonstrate what your business or art actually is. Build the world, and they'll walk right into it.",
];

/** FIND A WORLD — click anywhere, a new world each time. */
function AestheticGen() {
  const [cur, setCur] = useState(() => {
    const i = AESTHETICS.findIndex((a) => a.n === "Hong Kong Cinema");
    return i >= 0 ? i : Math.floor(Math.random() * AESTHETICS.length);
  });
  const a = AESTHETICS[cur];
  return (
    <button
      type="button"
      onClick={() =>
        setCur((c) => {
          let n = Math.floor(Math.random() * AESTHETICS.length);
          if (n === c) n = (n + 1) % AESTHETICS.length;
          return n;
        })
      }
      aria-label="Generate another aesthetic"
      style={{
        margin: "120px auto 0",
        maxWidth: 600,
        width: "100%",
        display: "block",
        textAlign: "left",
        border: "1px solid var(--color-sepia)",
        borderRadius: 18,
        background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
        padding: "26px",
        cursor: "pointer",
        color: "inherit",
        font: "inherit",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-verm)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-sepia)")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
        <p className="so-micro" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>
          FIND A WORLD
        </p>
        <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
          TAP ANYWHERE — TRY ANOTHER
        </p>
      </div>
      <div key={cur} className="so-chapter-fade" style={{ marginTop: 18 }}>
        <p className="so-serif" style={{ fontSize: "clamp(22px, 3vw, 30px)", margin: 0 }}>
          {a.n}
        </p>
        <p style={{ marginTop: 10, lineHeight: 1.7, maxWidth: "52ch" }}>{a.d}</p>
        <p className="so-micro" style={{ marginTop: 12, color: "var(--color-verm)", letterSpacing: "0.1em", lineHeight: 1.9 }}>
          {a.c}
        </p>
      </div>
      <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 600 }}>
        TRY ANOTHER →
      </p>
    </button>
  );
}

function BrandingPage() {
  const [flipped, setFlipped] = useState(false);
  const [personal, setPersonal] = useState(false);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Beat 1 — the hero, untouched */}
        <p className="so-micro so-micro-red">SERVICES · BRAND · WORLD-BUILDING</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Build a World.
        </h1>
        <div className="so-brand-world">
          <p style={{ maxWidth: "58ch", lineHeight: 1.78, margin: 0 }}>
            A brand isn't a logo — it's a world. The logo is the flag; the
            world is the territory. Identity, photography, content, films:
            when every piece speaks the same language, people don't just
            see you — they recognize you.
          </p>
          <div>
            <button
              type="button"
              onClick={() => setFlipped((v) => !v)}
              aria-pressed={flipped}
              title={flipped ? "Show the color version" : "Show the black-and-white version"}
              style={{ background: "none", border: 0, padding: 0, cursor: "pointer", display: "block", width: "100%" }}
            >
              <img
                src="/assets/work/build-a-world.jpg"
                alt="Build a world — click to flip between color and black and white"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 18,
                  border: "1px solid var(--color-sepia)",
                  display: "block",
                  filter: flipped ? "grayscale(1) contrast(1.02)" : "none",
                  transition: "filter 0.6s ease",
                }}
              />
            </button>
          </div>
        </div>
        <hr className="so-rule mt-6" />

        {/* Beat 2 — why it matters, one editorial section */}
        <div style={{ marginTop: 96 }}>
          <div className="so-case-cols" style={{ alignItems: "start" }}>
            <div>
              <div style={{ maxWidth: "44ch" }}>
                <p className="so-micro">WHY THE WORLD MATTERS</p>
                <p style={{ marginTop: 14, lineHeight: 1.78 }}>
                  People hire brands they recognize. A world that's
                  consistent builds trust before you've said a word — the
                  same feeling across the website, the feed, the shoot,
                  the campaign. Get the world right and everything else
                  gets easier.
                </p>
              </div>
            </div>
            <div>
              <div style={{ maxWidth: "52ch" }}>
                <p className="so-serif" style={{ fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.18, margin: 0 }}>
                  "The strongest worlds are recognizable before they're
                  ever explained."
                </p>
                <button
                  type="button"
                  onClick={() => setPersonal((v) => !v)}
                  className="so-micro"
                  style={{
                    background: "none",
                    border: 0,
                    padding: 0,
                    marginTop: 22,
                    cursor: "pointer",
                    color: "var(--color-verm)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                  }}
                >
                  {personal ? "CLOSE ↑" : "WHY THIS IS PERSONAL →"}
                </button>
              </div>
            </div>
          </div>

          {/* The personal essay — optional, revealed on click */}
          {personal && (
            <div key="personal" className="so-chapter-fade" style={{ marginTop: 56, maxWidth: "60ch" }}>
              <div style={{ width: 44, height: 2, background: "var(--color-verm)" }} />
              <div style={{ marginTop: 22, display: "grid", gap: 14 }}>
                {PERSONAL.map((para) => (
                  <p key={para.slice(0, 24)} style={{ margin: 0, lineHeight: 1.78 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Beat 3 — FIND A WORLD, the playful moment */}
        <AestheticGen />

        {/* Beat 4 — the cinematic breath */}
        <div
          style={{
            marginTop: 150,
            width: "100%",
            aspectRatio: "26 / 5",
            minHeight: 130,
            borderRadius: 12,
            border: "1px dashed var(--color-sepia)",
            background: "color-mix(in srgb, var(--color-paper) 88%, #fffaf2)",
          }}
        />

        {/* Every world has its language */}
        <div style={{ marginTop: 110 }}>
          <p className="so-serif" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", marginTop: 12, lineHeight: 1.15 }}>
            Every world has its language.
          </p>
          <p className="so-micro" style={{ marginTop: 10, color: "var(--color-stone)", letterSpacing: "0.12em" }}>
            SOMETIMES WE BUILD THE WHOLE THING. SOMETIMES WE START WITH ONE PIECE.
          </p>
          <div style={{ display: "grid", gap: 0, marginTop: 26 }}>
            {[
              { t: "Identity →", c: "LOGOS · MARKS · TYPE · COLOR · VISUAL SYSTEMS", h: "/logo-identity" },
              { t: "Photography →", c: "PORTRAITS · CAMPAIGNS · PRODUCTS · PEOPLE · PLACES", h: "/photography" },
              { t: "Websites + Digital →", c: "WEBSITES · LANDING PAGES · INTERACTIVE EXPERIENCES", h: "/websites" },
              { t: "Creative Direction →", c: "CONCEPTS · STYLING · REFERENCES · CAMPAIGN DIRECTION", h: "/creative-direction-content" },
              { t: "Social + Content →", c: "STRATEGY · REELS · GRAPHICS · ONGOING CONTENT", h: "/creative-direction-content" },
              { t: "Moving Image →", c: "SHORT-FORM MOTION · BRAND FILMS · VISUALIZERS · EVENT FILMS", h: "/moving-image" },
            ].map((r) => (
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
                <span className="so-serif" style={{ fontSize: "clamp(19px, 2.4vw, 26px)" }}>
                  {r.t}
                </span>
                <span className="so-micro" style={{ color: "var(--color-stone)", lineHeight: 1.7, maxWidth: "44ch", textAlign: "right", letterSpacing: "0.1em" }}>
                  {r.c}
                </span>
              </a>
            ))}
          </div>
          <WorldPicker />
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 84,
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
            <p className="so-serif" style={{ fontSize: "clamp(20px, 2.6vw, 30px)", margin: 0, color: "#f5f2ea", lineHeight: 1.2 }}>
              ONE PIECE OR THE WHOLE WORLD.
            </p>
            <p className="so-micro" style={{ marginTop: 8, color: "rgba(245,242,234,0.8)", letterSpacing: "0.12em" }}>
              EVERY PIECE IS DESIGNED TO SPEAK THE SAME LANGUAGE.
            </p>
          </div>
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