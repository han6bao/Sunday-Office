import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { useState } from "react";
import { BookBar, FaqList, ServiceCta } from "../sunday/service-kit";

export const Route = createFileRoute("/logo-identity")({
  head: () => seoHead("/logo-identity"),
  component: LogoIdentityPage,
});

const LEVELS = [
  { t: "Starting from scratch", d: "No logo yet. A mark and a simple system so you look established from day one." },
  { t: "Refining what you have", d: "The business works, the look doesn't. Keep what's good, fix what isn't." },
  { t: "A complete rebrand", d: "A new chapter. The old look did its job, so we build the next one." },
];

const BUILDS = [
  { t: "The marks", d: "Main logo plus the smaller versions: submark, monogram, icon." },
  { t: "Visual system", d: "Colors, fonts and the rules that keep it all together." },
  { t: "Brand details", d: "Patterns, textures and small touches that give it personality." },
  { t: "Applications", d: "Cards, signs, packaging and social, so you see it in the real world." },
  { t: "Brand guide", d: "How to use it, and how not to, for anyone who works with you next." },
];

const ADVICE = [
  { t: "Start small", d: "Most brands need one good mark and a few rules. Add more as you grow." },
  { t: "Let the logo be simple", d: "Color, type and spacing carry the personality, so the mark doesn't have to." },
  { t: "Test it tiny", d: "If it reads as a browser tab icon and on a sign, it works." },
];

const IDENTITIES = [
  {
    t: "Jazmin's Events",
    w: "Logo, identity + website",
    img: "/assets/campaigns/jazmins-events/brand-guide.png",
    h: "/campaigns/jazmins-events",
    d: "A script mark and soft, botanical system for a wedding planner, carried onto her site.",
  },
  {
    t: "Essential Brows",
    w: "Brand kit + website · her logo",
    img: "/assets/work/essential-brows.png",
    h: "/campaigns/essential-brows-studio",
    d: "She kept her logo. I built the palette, type and voice around it.",
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
    para: "Less polished restaurant campaign, more “I need to go there.” The photos get the food close enough to touch and the people look like they're actually enjoying themselves.",
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
    head: "{F}, recognizable before anyone reads the name.",
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
    para: "Trust is the product. Clean structure, calm type and a system that makes everything feel handled, from the invoice to the website.",
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
    para: "New name, already a real business. The identity needs to look like it's been around longer than it has. Simple, sharp and believable from day one.",
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
    para: "You are the brand. The identity makes you look like the version of yourself people hire, with a signature mark that stays consistent everywhere your name shows up.",
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
    head: "{F}. Sell the feeling of living there.",
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
    head: "{F}, built around the moment.",
    para: "The night happens once. The identity shows up every time it's posted. Loud marks, gold accents and a system that keeps the moment alive afterwards.",
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
  { k: "BOLD", head: "Loud and unmissable", vibes: "The energy is loud and nothing about the look apologizes.", world: ["loud"], visual: ["high contrast", "fat type", "one loud color"] },
  { k: "SOFT", head: "Soft and premium", vibes: "Everything softens: the edges, the palette, the first impression.", world: ["gentle"], visual: ["soft textures", "muted tones"] },
  { k: "CLASSIC", head: "Timeless, never trendy", vibes: "It should still look right in ten years. Restraint is the point.", world: ["timeless"], visual: ["serif + sans", "restrained palette"] },
  { k: "PLAYFUL", head: "Playful and human", vibes: "The look has a sense of humor. It's allowed to be fun.", world: ["fun", "loose"], visual: ["rounded marks", "bright accents", "offbeat crops"] },
  { k: "ELEVATED", head: "Quiet luxury", vibes: "Less, but better. Thin rules, deep tones, nothing shouting.", world: ["premium"], visual: ["thin rules", "deep tones", "quiet space"] },
  { k: "WARM", head: "Warm and inviting", vibes: "It feels like the version of the place people want to stay in.", world: ["familiar"], visual: ["warm light", "inviting crops"] },
  { k: "MINIMAL", head: "Sharp and calm", vibes: "Lots of empty space. The less there is, the more it lands.", world: ["clean", "sharp"], visual: ["lots of air", "one accent", "geometric type"] },
  { k: "ARTFUL", head: "Editorial and expressive", vibes: "Each image is composed on purpose and art directed.", world: ["expressive"], visual: ["editorial compositions", "artful crops"] },
];

const EXTRAS = ["dark", "nostalgic", "feminine", "weird", "expensive", "rough", "romantic", "cinematic"];

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
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Hero */}
        <p className="so-micro so-micro-red">SERVICES · LOGO + IDENTITY · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Logo + Identity.
        </h1>
        <div className="so-bw-intro" style={{ marginTop: 22 }}>
          <p className="so-bw-intro-lead">
            The logo is the mark people see for a second and know it's you.
            The identity is everything around it: colors, fonts, and how your
            name shows up on a sign, a card, a post or a website.
          </p>
          <div>
            <p className="so-bw-d" style={{ marginTop: 0, maxWidth: "44ch" }}>
              Part of building your world. If you need the whole thing, start
              with <a className="so-bw-inline" href="/branding">Build a World →</a>
            </p>
            <nav className="so-bw-jump" aria-label="On this page">
              <a href="#get">What you get</a>
              <a href="#direction">Find your direction</a>
              <a href="#work">Work</a>
            </nav>
          </div>
        </div>

        <a href="/campaigns/jazmins-events" className="so-li-shot">
          <img
            src="/assets/campaigns/jazmins-events/kit-in-action.jpg"
            alt="Jazmin's Events identity on business cards, stationery and signage"
          />
          <span className="so-li-cap">
            <span className="so-micro">THE IDENTITY IN USE · JAZMIN'S EVENTS</span>
            <span className="so-micro so-li-cap-go">SEE THE PROJECT →</span>
          </span>
        </a>

        {/* Where you're starting */}
        <section className="so-bw-sec so-bw-inc">
          <div>
            <p className="so-micro">WHERE ARE YOU STARTING?</p>
            <h2 className="so-serif so-bw-h">Wherever you are, we build from there.</h2>
          </div>
          <div className="so-bw-list">
            {LEVELS.map((x) => (
              <div key={x.t} className="so-bw-row">
                <p className="so-bw-t">{x.t}</p>
                <p className="so-bw-d">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you get */}
        <section id="get" className="so-bw-sec so-bw-inc">
          <div>
            <p className="so-micro">WHAT YOU GET</p>
            <h2 className="so-serif so-bw-h">Only the pieces you need.</h2>
            <p className="so-bw-d" style={{ maxWidth: "34ch" }}>
              Not every project needs every piece. We'll figure out what yours does.
            </p>
          </div>
          <div className="so-bw-list">
            {BUILDS.map((x) => (
              <div key={x.t} className="so-bw-row">
                <p className="so-bw-t">{x.t}</p>
                <p className="so-bw-d">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advice */}
        <section className="so-bw-sec so-bw-how">
          <p className="so-micro">WORTH KNOWING</p>
          <div className="so-li-tips">
            {ADVICE.map((a) => (
              <div key={a.t}>
                <p className="so-bw-t">{a.t}</p>
                <p className="so-bw-d">{a.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FIND YOUR DIRECTION */}
        <div
          id="direction"
          className="so-bw-sec"
          style={{
            border: "1px solid var(--color-sepia)",
            borderRadius: 22,
            background: "color-mix(in srgb, var(--color-paper) 92%, #fffaf2)",
            padding: "28px 30px",
          }}
        >
          <p className="so-micro so-micro-red">FIND YOUR DIRECTION</p>
          <p style={{ marginTop: 10, lineHeight: 1.55, maxWidth: "56ch" }}>
            You don't need to know design terms. Tell me what you do and
            how you want it to feel, and I'll give you somewhere to start.
          </p>

          <p className="so-micro" style={{ marginTop: 24, color: "var(--color-stone)", letterSpacing: "0.14em" }}>
            01 · WHAT INDUSTRY ARE YOU IN?
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
            02 · WHAT FEELING SHOULD THE LOOK GIVE?
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
            ANYTHING ELSE? · OPTIONAL
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
                  <p style={{ marginTop: 10, lineHeight: 1.55, maxWidth: "56ch" }}>
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
                        {brief.start.filter((s) => s.h !== "/logo-identity").map((s) => (
                          <a key={s.t} className="so-link-jump" href={s.h}>
                            {s.t} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "baseline", marginTop: 20 }}>
                    <a className="so-micro" href="/#inquiry" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, textDecoration: "none" }}>
                      START WITH THIS →
                    </a>
                    <a className="so-micro" href="/branding" style={{ color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700, textDecoration: "none" }}>
                      SEE THE WHOLE WORLD →
                    </a>
                  </div>
            </div>
          )}
        </div>

        {/* Work */}
        <section id="work" className="so-bw-sec">
          <p className="so-micro">IDENTITIES WE'VE BUILT</p>
          <div className="so-bw-work so-li-work">
            {IDENTITIES.map((b) => (
              <a key={b.t} href={b.h} className="so-bw-card">
                <span className="so-bw-card-img">
                  <img src={b.img} alt={b.t} loading="lazy" />
                </span>
                <span className="so-micro so-bw-card-w">{b.w}</span>
                <span className="so-bw-card-c">
                  {b.t} <span className="arr" aria-hidden>↗</span>
                </span>
                <span className="so-bw-d">{b.d}</span>
              </a>
            ))}
          </div>
        </section>

        <FaqList
          items={[
            { q: "How much does a logo cost?", a: "It depends on how much you need. A brand kit built around a logo you already have starts at $650. A new logo and identity from scratch is quoted once we know what it needs to do." },
            { q: "Can you fix or clean up the logo I have?", a: "Yes. Sometimes a logo just needs redrawing, better spacing or versions that work small. We don't start over unless it makes sense." },
            { q: "What files do I get?", a: "Your logo in the formats you'll actually use: for print, for the web, light and dark versions, and sizes for your profile picture." },
            { q: "How many options will I see?", a: "We agree on a direction first, so the designs are already pointed the right way. Then we refine together until it feels like you." },
            { q: "Do I need the full brand too?", a: <>Not always. If you want everything to match, the logo can grow into a full brand world. <a href="/branding">See branding →</a></> },
          ]}
        />

        <ServiceCta current="logo" title="You don't have to know what you need yet." sub="BRING THE IDEA, THE BUSINESS, OR THE HALF-FINISHED LOGO." />

        <div className="so-room-more">
          <p className="so-micro">PART OF BRANDING + WORLD BUILDING</p>
          <a href="/branding" className="so-room-more-link">
            Build a World <span className="arr" aria-hidden>→</span>
          </a>
        </div>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
      <BookBar service="Logo + Identity" need="Logo / Identity" />
    </div>
  );
}
