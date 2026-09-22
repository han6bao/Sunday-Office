import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/logo-identity")({
  component: LogoIdentityPage,
});

const LEVELS = [
  {
    t: "STARTING FROM SCRATCH",
    d: "Maybe you don't even have a business yet — you're figuring out how to bring yourself properly: the logo, the identity, how to shape it and how to form it. That's exactly where this starts: a mark and a system that make you look real from day one, so the idea gets taken seriously before anyone meets you.",
  },
  {
    t: "REFINING WHAT YOU HAVE",
    d: "Or everything's situated but the look shows its age — the logo needs air, the colors need a home, the pieces need to feel like one thing. Refining is its own job: keep what works, fix what doesn't, make everything speak the same language.",
  },
  {
    t: "A COMPLETE REBRAND",
    d: "Already refined, but ready to start over — a new direction, a new era, a full reinvention on purpose. The old system served its time; now we build the next one from the ground up.",
  },
];

const ADVICE = [
  {
    n: "01",
    t: "YOU PROBABLY DON'T NEED MORE",
    d: "A whole identity system on day one is rarely the move. Most brands need one honest mark and the rules to use it — start tight, grow later.",
  },
  {
    n: "02",
    t: "YOUR LOGO DOESN'T HAVE TO DO EVERYTHING",
    d: "The logo isn't the business — it's the face of it. Let color, type and spacing do the heavy lifting so the mark can stay clean.",
  },
  {
    n: "03",
    t: "MAKE IT WORK EVERYWHERE",
    d: "The real test is everywhere: a favicon, a sign, a receipt, a story cover. If it reads at every size, it's a brand.",
  },
];

const INDUSTRIES: {
  k: string;
  head: string;
  para: string;
  world: string[];
  visual: string[];
  start: { t: string; h: string }[];
}[] = [
  {
    k: "FOOD + HOSPITALITY",
    head: "{F}, + made by hand.",
    para: "Less polished restaurant campaign, more I need to go there. The frame makes the food close enough to touch and the people look like they're actually enjoying themselves.",
    world: ["earthy", "inviting", "a little imperfect"],
    visual: ["hand-drawn type", "warm photography", "natural materials", "close crops", "candid people"],
    start: [
      { t: "Photography", h: "/photography" },
      { t: "Identity", h: "/logo-identity" },
      { t: "Website", h: "/websites" },
    ],
  },
  {
    k: "BEAUTY + WELLNESS",
    head: "{F}, considered, skin-first.",
    para: "Quiet, considered, skin-first. Soft light, close details, restrained type and enough space for the product to breathe.",
    world: ["quiet", "clean", "breathing"],
    visual: ["restrained type", "close details", "cream + gold", "editorial space"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Photography", h: "/photography" },
      { t: "Website", h: "/websites" },
    ],
  },
  {
    k: "ARTISTS + CREATIVES",
    head: "{F} — recognizable before they read the name.",
    para: "The music comes first, but the look gets people to press play. A visual language built from attitude, repetition and imagery people remember after one listen.",
    world: ["recognizable", "repetitive", "unmissable"],
    visual: ["graphic hand", "loud accents", "works at any size", "motion-ready"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Photography", h: "/photography" },
      { t: "Content", h: "/creative-direction-content" },
    ],
  },
  {
    k: "BUSINESS + SERVICES",
    head: "{F}, credible and capable.",
    para: "Trust is the product. Clean structure, calm type and a system that makes every touchpoint feel handled — from the invoice to the website.",
    world: ["capable", "structured", "calm"],
    visual: ["clean type", "clear hierarchy", "restrained palette"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Website", h: "/websites" },
      { t: "Photography", h: "/photography" },
    ],
  },
  {
    k: "PRODUCTS + RETAIL",
    head: "{F}, shelf-ready.",
    para: "Make them want to hold it before they've read a word. Strong marks, tactile materials and packaging that speaks from a shelf.",
    world: ["tactile", "shelf-ready", "desirable"],
    visual: ["strong marks", "packaging-minded", "texture-forward"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Photography", h: "/photography" },
      { t: "Website", h: "/websites" },
    ],
  },
  {
    k: "SMALL BUSINESS",
    head: "{F}, built to grow.",
    para: "New name, already a real business. The identity needs to look like it's been there longer than it has — simple, sharp, believable from day one.",
    world: ["believable", "scalable", "sharp"],
    visual: ["simple core", "one accent", "grows clean"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Photography", h: "/photography" },
      { t: "Website", h: "/websites" },
    ],
  },
  {
    k: "PERSONAL BRANDS + PROFESSIONALS",
    head: "{F}, refined and unmistakably you.",
    para: "You are the brand — the identity makes you look like the version of yourself people hire. Signature mark, quiet consistency, everywhere your name shows up.",
    world: ["refined", "present", "consistent"],
    visual: ["signature mark", "quiet luxury", "friendly editorial"],
    start: [
      { t: "Photography", h: "/photography" },
      { t: "Identity", h: "/logo-identity" },
      { t: "Content", h: "/creative-direction-content" },
    ],
  },
  {
    k: "REAL ESTATE + INTERIORS",
    head: "{F} — sell the feeling of living there.",
    para: "Natural light, lived-in details and imagery that makes the property feel like somewhere rather than something. The space sells itself; the brand keeps people believing it.",
    world: ["lived-in", "bright", "homey"],
    visual: ["natural light", "wide interiors", "neutral tones"],
    start: [
      { t: "Photography", h: "/photography" },
      { t: "Website", h: "/websites" },
      { t: "Identity", h: "/logo-identity" },
    ],
  },
  {
    k: "EVENTS + EXPERIENCES",
    head: "{F} — moment-driven and unmissable.",
    para: "The night happens once — the identity happens every time it's posted. Loud marks, gold accents and a system that keeps the moment alive afterwards.",
    world: ["electric", "collective", "memorable"],
    visual: ["loud marks", "gold accents", "campaign-ready"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Content", h: "/creative-direction-content" },
      { t: "Photography", h: "/photography" },
    ],
  },
  {
    k: "SOMETHING ELSE",
    head: "{F}, considered, made to grow.",
    para: "A blank slate and a good instinct. Start with one strong mark and let the system grow around whatever comes next.",
    world: ["open", "evolving", "considered"],
    visual: ["one strong mark", "room to grow"],
    start: [
      { t: "Identity", h: "/logo-identity" },
      { t: "Photography", h: "/photography" },
      { t: "Website", h: "/websites" },
    ],
  },
];

const FEELINGS: { k: string; head: string; vibes: string; world: string[]; visual: string[] }[] = [
  { k: "BOLD", head: "Loud and unmissable", vibes: "The energy is loud — nothing about the look apologizes.", world: ["loud"], visual: ["high contrast", "fat type", "one loud color"] },
  { k: "SOFT", head: "Soft and premium", vibes: "Everything softens — the edges, the palette, the first impression.", world: ["gentle"], visual: ["soft textures", "muted tones"] },
  { k: "CLASSIC", head: "Timeless, never trendy", vibes: "It should still look right in ten years — restraint is the point.", world: ["timeless"], visual: ["serif + sans", "restrained palette"] },
  { k: "PLAYFUL", head: "Playful and human", vibes: "The look has a sense of humor — it's allowed to be fun.", world: ["fun", "loose"], visual: ["rounded marks", "bright accents", "offbeat crops"] },
  { k: "ELEVATED", head: "Quiet luxury", vibes: "Less, but better — thin rules, deep tones, nothing shouting.", world: ["premium"], visual: ["thin rules", "deep tones", "quiet space"] },
  { k: "WARM", head: "Warm and inviting", vibes: "It feels like the version of the place people want to stay in.", world: ["familiar"], visual: ["warm light", "inviting crops"] },
  { k: "MINIMAL", head: "Sharp and calm", vibes: "Air is a material — the less there is, the more it lands.", world: ["clean", "sharp"], visual: ["lots of air", "one accent", "geometric type"] },
  { k: "ARTFUL", head: "Editorial and expressive", vibes: "Every frame feels composed on purpose — art-directed, not just shot.", world: ["expressive"], visual: ["editorial compositions", "artful crops"] },
];

const EXTRAS = ["dark", "nostalgic", "feminine", "weird", "expensive", "rough", "romantic", "cinematic"];

const BUILDS = [
  { g: "✦", t: "THE MARKS", d: "Primary + secondary logos, submarks, monograms — the family your name lives in." },
  { g: "◉", t: "VISUAL SYSTEM", d: "Color, typography and the rules that keep every piece feeling like one world." },
  { g: "≡", t: "BRAND DETAILS", d: "Patterns, iconography, wording — the small touches where the personality hides." },
  { g: "▢", t: "REAL-WORLD APPLICATIONS", d: "Signage, packaging, socials, cards — the identity out in the wild." },
  { g: "▤", t: "BRAND GUIDE", d: "The living document that tells anyone how to use it — and how not to." },
];

const IDENTITIES = [
  {
    t: "JAZMIN'S EVENTS + COORDINATING",
    img: "/assets/campaigns/jazmins-events/featured-cover.png",
    h: "/campaigns/jazmins-events",
    d: "The script wordmark on textured paper — weddings + events identity, made tangible and carried straight onto her live site.",
  },
  {
    t: "HEART & HOMESTEAD",
    img: "/assets/work/hh-logo.png",
    h: "/websites",
    d: "Emerald and earth — identity for a Southern Indiana photographer, built to feel like home and look like a brand.",
  },
  {
    t: "ESSENTIAL BROWS",
    img: "/assets/work/essential-brows.png",
    h: "/campaigns/essential-brows-studio",
    d: "Calm and confident — the brow studio's mark and system, matched to how clients actually book.",
  },
];

function LogoIdentityPage() {
  const [ind, setInd] = useState<string | null>(null);
  const [feel, setFeel] = useState<string | null>(null);
  const [extra, setExtra] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [brief, setBrief] = useState<null | {
    head: string;
    fore: string;
    para: string;
    world: string[];
    visual: string[];
    start: { t: string; h: string }[];
  }>(null);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [lvl, setLvl] = useState(0);

  const compute = () => {
    const indRow = INDUSTRIES.find((x) => x.k === ind);
    const feelRow = FEELINGS.find((x) => x.k === feel);
    if (!indRow || !feelRow) return;
    const head = indRow.head.replace("{F}", feelRow.head).replace(/^./, (c) => c.toUpperCase());
    const world = [...indRow.world];
    for (const w of feelRow.world) if (!world.includes(w)) world.push(w);
    const extraWord = (picked ?? extra.trim()).toLowerCase();
    if (extraWord) world.push(extraWord);
    const visual = [...indRow.visual];
    for (const v of feelRow.visual) if (!visual.includes(v)) visual.push(v);
    setBrief({ head, fore: indRow.k, para: `${indRow.para} ${feelRow.vibes}`, world, visual, start: indRow.start });
  };

  const resetQuiz = () => {
    setInd(null);
    setFeel(null);
    setExtra("");
    setPicked(null);
    setBrief(null);
  };

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SERVICES · LOGO + IDENTITY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Logo + Identity.
        </h1>
        <p className="so-micro mt-3">MARKS · SYSTEMS · GUIDES · APPLICATIONS</p>

        {/* The room — blurb left, image slot right */}
        <div className="so-case-cols" style={{ marginTop: 30, alignItems: "start", gridTemplateColumns: "minmax(0, 1fr) auto" }}>
          <div style={{ maxWidth: "58ch", lineHeight: 1.8, display: "grid", gap: 16 }}>
            <p style={{ margin: 0 }}>
              A logo is the smallest version of your brand — the mark
              someone sees for a split second and knows it's you. The
              identity is everything around it: the colors, the type, the
              way your name sits on a sign, a story, a card, a website.
            </p>
            <p style={{ margin: 0 }}>
              Get that system right and you never have to explain
              yourself. People just know. Seven pieces of paper that look
              unrelated at first — until someone realizes they all belong
              to the same world.
            </p>
          </div>
          <div style={{ maxWidth: 340, width: "100%" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: 18,
                border: "1px dashed var(--color-sepia)",
                background: "color-mix(in srgb, var(--color-paper) 84%, #fffaf2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
                textAlign: "center",
              }}
            >
              <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em", lineHeight: 1.9 }}>
                ID SYSTEM SHOT
                <br />
                — TO BE ADDED
              </p>
            </div>
          </div>
        </div>

        {/* NO MATTER WHAT LEVEL — tap through */}
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
            <p className="so-micro">NO MATTER WHAT LEVEL YOU'RE AT</p>
            <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
              {lvl + 1} / {LEVELS.length} · TAP THE BOX FOR THE NEXT
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLvl((s) => (s + 1) % LEVELS.length)}
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
              {LEVELS[lvl].t}
            </p>
            <p key={lvl} className="so-chapter-fade" style={{ margin: "8px 0 0", lineHeight: 1.78, maxWidth: "62ch" }}>
              {LEVELS[lvl].d}
            </p>
            <span style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 12 }}>
              {LEVELS.map((_, d) => (
                <span
                  key={d}
                  aria-hidden
                  style={{ width: 6, height: 6, borderRadius: 999, background: d === lvl ? "var(--color-verm)" : "var(--color-sepia)", display: "inline-block" }}
                />
              ))}
              <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.13em", marginLeft: 5 }}>
                TAP FOR THE NEXT →
              </span>
            </span>
          </button>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)", letterSpacing: "0.1em" }}>
            WHEREVER YOU ARE ON THAT LINE, I'M HERE TO HELP YOU WITH THE
            WORLD YOU'RE BUILDING.
          </p>
        </div>

        {/* THE ADVICE — lavender first, flip to black */}
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          {ADVICE.map((a, ai) => {
            const on = flipped.has(ai);
            return (
              <button
                key={a.n}
                type="button"
                onClick={() =>
                  setFlipped((s) => {
                    const n = new Set(s);
                    if (n.has(ai)) n.delete(ai);
                    else n.add(ai);
                    return n;
                  })
                }
                aria-pressed={on}
                style={{
                  background: on ? "#131210" : "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
                  color: "inherit",
                  borderRadius: 18,
                  padding: "22px 22px 20px",
                  border: "1px solid var(--color-sepia)",
                  textAlign: "left",
                  font: "inherit",
                  cursor: "pointer",
                  transition: "background 0.3s ease, color 0.3s ease",
                }}
              >
                {on ? (
                  <>
                    <p className="so-serif" style={{ fontSize: 20, margin: 0, color: "rgba(245,242,234,0.5)" }}>
                      {a.n}
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, color: "#f5f2ea", letterSpacing: "0.14em", fontWeight: 700, lineHeight: 1.6 }}>
                      {a.t}
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, color: "rgba(245,242,234,0.78)", lineHeight: 1.75, letterSpacing: "0.06em", fontSize: 12.5 }}>
                      {a.d}
                    </p>
                    <p className="so-micro" style={{ marginTop: 14, color: "rgba(245,242,234,0.55)", letterSpacing: "0.14em" }}>
                      TAP TO RESTORE ↑
                    </p>
                  </>
                ) : (
                  <>
                    <p className="so-serif" style={{ fontSize: 20, margin: 0, color: "var(--color-stone)" }}>
                      {a.n}
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, letterSpacing: "0.14em", fontWeight: 700, lineHeight: 1.6 }}>
                      {a.t}
                    </p>
                    <p className="so-micro" style={{ marginTop: 10, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 600 }}>
                      TAP FOR THE ADVICE ↓
                    </p>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* FIND YOUR DIRECTION */}
        <div
          style={{
            marginTop: 56,
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "28px 30px",
          }}
        >
          <p className="so-micro so-micro-red">FIND YOUR DIRECTION</p>
          <p style={{ marginTop: 10, lineHeight: 1.75, maxWidth: "56ch" }}>
            You don't need to know design language. Tell me what you do +
            how you want it to feel — I'll give you somewhere to start.
          </p>

          <p className="so-micro" style={{ marginTop: 24, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            01 — WHAT INDUSTRY ARE YOU IN?
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 12 }}>
            {INDUSTRIES.map((x) => (
              <button
                key={x.k}
                type="button"
                onClick={() => {
                  setInd(x.k);
                  setBrief(null);
                }}
                className="so-micro"
                style={{
                  border: ind === x.k ? "1px solid #131210" : "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "8px 15px",
                  background: ind === x.k ? "#131210" : "transparent",
                  color: ind === x.k ? "#f5f2ea" : "var(--color-print)",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
              >
                {x.k}
              </button>
            ))}
          </div>

          <p className="so-micro" style={{ marginTop: 24, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            02 — WHAT FEELING SHOULD THE LOOK GIVE?
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 12 }}>
            {FEELINGS.map((x) => (
              <button
                key={x.k}
                type="button"
                onClick={() => {
                  setFeel(x.k);
                  setBrief(null);
                }}
                className="so-micro"
                style={{
                  border: feel === x.k ? "1px solid #131210" : "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "8px 15px",
                  background: feel === x.k ? "#131210" : "transparent",
                  color: feel === x.k ? "#f5f2ea" : "var(--color-print)",
                  cursor: "pointer",
                  letterSpacing: "0.12em",
                }}
              >
                {x.k}
              </button>
            ))}
          </div>

          <p className="so-micro" style={{ marginTop: 24, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            ANYTHING ELSE? — OPTIONAL
          </p>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 12 }}>
            {EXTRAS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setPicked(c);
                  setExtra("");
                  setBrief(null);
                }}
                className="so-micro"
                style={{
                  border: picked === c ? "1px solid #131210" : "1px solid var(--color-sepia)",
                  borderRadius: 999,
                  padding: "8px 15px",
                  background: picked === c ? "#131210" : "transparent",
                  color: picked === c ? "#f5f2ea" : "var(--color-print)",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
              >
                {c}
              </button>
            ))}
            <input
              type="text"
              value={extra}
              onChange={(e) => {
                setExtra(e.target.value);
                setPicked(null);
                setBrief(null);
              }}
              placeholder="or type your own…"
              style={{
                border: "1px dashed var(--color-sepia)",
                borderRadius: 999,
                padding: "8px 15px",
                background: "transparent",
                font: "inherit",
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "inherit",
                outline: "none",
                maxWidth: 220,
              }}
            />
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 24 }}>
            <button
              type="button"
              onClick={compute}
              style={{ background: "#131210", color: "#f5f2ea", border: 0, borderRadius: 999, padding: "11px 20px", fontWeight: 700, letterSpacing: "0.12em", fontSize: 12, cursor: "pointer" }}
            >
              GET A DIRECTION →
            </button>
            {(ind || feel || extra) && (
              <button
                type="button"
                onClick={resetQuiz}
                className="so-micro"
                style={{ background: "none", border: 0, padding: "0 4px", cursor: "pointer", color: "var(--color-stone)", letterSpacing: "0.14em" }}
              >
                START OVER →
              </button>
            )}
          </div>

          {brief && (
            <div key={brief.head + brief.fore} className="so-chapter-fade" style={{ marginTop: 28, borderTop: "1px solid var(--color-sepia)", paddingTop: 24 }}>
              <p className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                YOUR DIRECTION
              </p>
              <p className="so-serif" style={{ fontSize: "clamp(22px, 3vw, 32px)", margin: 0, lineHeight: 1.2 }}>
                    {brief.head}
                  </p>
                  <p className="so-micro" style={{ marginTop: 12, color: "var(--color-verm)", letterSpacing: "0.14em", fontWeight: 700 }}>
                    FOR {brief.fore.toUpperCase()}
                  </p>
                  <p style={{ marginTop: 10, lineHeight: 1.78, maxWidth: "56ch" }}>
                    {brief.para}
                  </p>
                  <div style={{ marginTop: 18, display: "grid", gap: 12, maxWidth: "58ch" }}>
                    <div>
                      <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                        THE WORLD
                      </p>
                      <p style={{ marginTop: 6, marginBottom: 0 }}>{brief.world.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                        VISUAL LANGUAGE
                      </p>
                      <p style={{ marginTop: 6, marginBottom: 0 }}>{brief.visual.join(" · ")}</p>
                    </div>
                    <div>
                      <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                        START WITH
                      </p>
                      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6 }}>
                        {brief.start.map((s) => (
                          <a key={s.t} className="so-link-jump" href={s.h}>
                            {s.t} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "baseline", marginTop: 20 }}>
                    <a className="so-micro" href="/#office-hours" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, textDecoration: "none" }}>
                      SAVE THIS DIRECTION →
                    </a>
                    <a className="so-micro" href="/branding" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, textDecoration: "none" }}>
                      BUILD IT WITH US →
                    </a>
                  </div>
            </div>
          )}
        </div>

        {/* Long thin filler — a wide photo lands here */}
        <div
          style={{
            marginTop: 44,
            width: "100%",
            aspectRatio: "21 / 9",
            borderRadius: 18,
            border: "1px dashed var(--color-sepia)",
            background: "color-mix(in srgb, var(--color-paper) 84%, #fffaf2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.16em", textAlign: "center", lineHeight: 2 }}>
                THE WORLD, IN APPLICATIONS
                <br />
                ONE SYSTEM ACROSS CARDS, SIGNS, PACKAGING + SOCIAL
                <br />
                AN EDITORIAL SPREAD LANDS HERE — TO BE ADDED
              </p>
        </div>

        {/* WHAT WE CAN BUILD */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">WHAT WE CAN BUILD</p>
          <p className="so-micro mt-2" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            EVERY PROJECT IS DIFFERENT.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 18 }}>
            {BUILDS.map((b) => (
              <div key={b.t} style={{ border: "1px solid var(--color-sepia)", borderRadius: 16, padding: "20px 20px 18px", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}>
                <p style={{ margin: 0, fontSize: 22, color: "var(--color-verm)" }}>{b.g}</p>
                <p className="so-micro" style={{ marginTop: 12, letterSpacing: "0.14em", fontWeight: 700 }}>
                  {b.t}
                </p>
                <p className="so-micro" style={{ marginTop: 8, color: "var(--color-stone)", lineHeight: 1.7, letterSpacing: "0.06em", fontSize: 12.5 }}>
                  {b.d}
                </p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, maxWidth: "52ch", lineHeight: 1.75, color: "var(--color-stone)" }}>
            Every project doesn't need every piece. We'll figure out what
            yours actually needs.
          </p>
        </div>

        {/* THE IDENTITIES */}
        <div style={{ marginTop: 64 }}>
          <p className="so-micro">THE IDENTITIES</p>
          <p className="so-micro mt-2" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            NOT JUST THE FINAL MARK.
          </p>
          <div className="so-cases" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: 18 }}>
            {IDENTITIES.map((x) => (
              <a
                key={x.t}
                href={x.h}
                style={{ display: "block", border: "1px solid var(--color-sepia)", borderRadius: 16, overflow: "hidden", textDecoration: "none", color: "inherit", background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-verm)";
                  const ov = e.currentTarget.querySelector<HTMLElement>("[data-ov]");
                  if (ov) ov.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-sepia)";
                  const ov = e.currentTarget.querySelector<HTMLElement>("[data-ov]");
                  if (ov) ov.style.opacity = "0";
                }}
              >
                <div style={{ position: "relative", aspectRatio: "4 / 3", background: "#f5f1e8", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                  <img src={x.img} alt={x.t} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", borderRadius: 10 }} />
                  <span
                    data-ov
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(245,241,232,0.9)",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    <span className="so-micro" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                      VIEW IDENTITY →
                    </span>
                  </span>
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <p className="so-micro" style={{ letterSpacing: "0.12em", fontWeight: 700 }}>
                    {x.t}
                  </p>
                  <p className="so-micro" style={{ marginTop: 8, color: "var(--color-stone)", lineHeight: 1.75, letterSpacing: "0.06em", fontSize: 12.5 }}>
                    {x.d}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* The close — black band */}
        <div
          style={{
            marginTop: 64,
            borderRadius: 22,
            background: "#131210",
            color: "#f5f2ea",
            padding: "32px 34px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <p className="so-serif" style={{ fontSize: "clamp(20px, 2.8vw, 30px)", margin: 0, lineHeight: 1.3, maxWidth: "34ch" }}>
            You don't have to know what you need yet.
          </p>
          <div style={{ maxWidth: "44ch" }}>
            <p style={{ margin: 0, lineHeight: 1.75, color: "rgba(245,242,234,0.85)" }}>
              Bring us the business, the idea, or the half-finished logo.
              We'll figure out what stays, what goes, and what needs to be
              built.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a
                href="/#office-hours"
                style={{ textDecoration: "none", background: "#f5f2ea", color: "#131210", borderRadius: 999, padding: "11px 20px", fontWeight: 700, letterSpacing: "0.12em", fontSize: 12, whiteSpace: "nowrap" }}
              >
                START A BRAND PROJECT →
              </a>
              <a
                href="/branding"
                style={{ textDecoration: "none", border: "1px solid #f5f2ea", color: "#f5f2ea", borderRadius: 999, padding: "11px 20px", fontWeight: 700, letterSpacing: "0.12em", fontSize: 12, whiteSpace: "nowrap" }}
              >
                JUST NEED A LOGO →
              </a>
            </div>
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