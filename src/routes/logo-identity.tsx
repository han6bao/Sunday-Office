import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { HelpBottom, HelpTop } from "../sunday/help-kit";
import { LOGO } from "../sunday/help-content";
import { useState } from "react";
import { BookBar, FaqList, PriceList, ServiceCta, bookHref } from "../sunday/service-kit";

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
    h: "/websites/jazmins-events",
    d: "A script mark and soft, botanical system for a wedding planner, carried onto her site.",
  },
  {
    t: "Essential Brows",
    w: "Brand kit + website · her logo",
    img: "/assets/campaigns/essential-brows-studio/site-desktop.jpg",
    h: "/websites/essential-brows-studio",
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

        <a href="/websites/jazmins-events" className="so-li-shot">
          <img
            src="/assets/campaigns/jazmins-events/featured-cover.png"
            alt="The Jazmin's Events wordmark on textured paper"
            style={{ aspectRatio: "21 / 9", objectFit: "cover", objectPosition: "center 52%" }}
          />
          <span className="so-li-cap">
            <span className="so-micro">THE WORDMARK · JAZMIN'S EVENTS</span>
            <span className="so-micro so-li-cap-go">SEE THE PROJECT →</span>
          </span>
        </a>

        <HelpTop c={LOGO} />

        {/* FIND YOUR DIRECTION */}
        <DirectionQuiz
          ind={ind} setInd={setInd} feel={feel} setFeel={setFeel}
          extra={extra} setExtra={setExtra} picked={picked} setPicked={setPicked}
          brief={brief} compute={compute} reset={resetQuiz}
        />

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

        <PriceList
          need="Logo / Identity"
          title="Where logos start."
          feature
          items={[
            { t: "Logo", p: "from $350", d: "For when you need a logo.", list: ["Research on your industry + competitors", "A new logo, designed from scratch", "Icon + wordmark versions", "Every file you need"] },
            { t: "Brand kit", p: "from $550", d: "Built around the logo you already have.", list: ["Research + a moodboard", "Color palette + fonts", "The way it talks", "A one-page guide"] },
            { t: "Full brand world", p: "from $2,000", tag: "EVERYTHING", d: "The whole world, from scratch.", list: ["Audience + competitor research", "Direction + moodboard", "Logo, identity + voice", "Full brand guide + templates"] },
            { t: "Print + signage", p: "from $75", d: "Your brand, off the screen.", list: ["Flyers from $75", "Menus from $150", "A-frame signs from $125", "Window + wall signs from $150", "Print kit from $400: a menu, an A-frame + 2 signs"] },
          ]}
          foot="You'll know the final number before anything starts."
        />

        <HelpBottom c={LOGO} />

        <FaqList
          items={[
            { q: "How much does a logo cost?", a: "A new logo starts at $350. A brand kit built around a logo you already have starts at $550, and a full brand world from scratch starts at $2,000." },
            { q: "Can you fix or clean up the logo I have?", a: "Yes. Sometimes a logo just needs redrawing, better spacing or versions that work small. We don't start over unless it makes sense." },
            { q: "What files do I get?", a: "Your logo in the formats you'll actually use: for print, for the web, light and dark versions, and sizes for your profile picture." },
            { q: "How many options will I see?", a: "A new logo comes with 2 concepts. Then we refine the one you love together." },
            { q: "How many rounds of changes?", a: "Two rounds are included. After that, extra rounds are $75 each." },
            { q: "Who owns the files?", a: "You do. Every version and file type, labeled and organized." },
            { q: "How do I pay?", a: "Half upfront to book your spot, and the other half when the work is done." },
            { q: "Do I need the full brand too?", a: <>Not always. If you want everything to match, the logo can grow into a full brand world. <a href="/branding">See branding →</a></> },
          ]}
        />

        <ServiceCta current="logo" title="You don't have to know what you need yet." sub="BRING THE IDEA, THE BUSINESS, OR THE HALF-FINISHED LOGO." />
      </div>
      <BookBar service="Logo + Identity" price="from $350" need="Logo / Identity" />
    </div>
  );
}


type Brief = { head: string; fore: string; para: string; world: string[]; visual: string[]; start: { t: string; h: string }[] };

function DirectionQuiz(p: {
  ind: string | null; setInd: (v: string | null) => void;
  feel: string | null; setFeel: (v: string | null) => void;
  extra: string; setExtra: (v: string) => void;
  picked: string | null; setPicked: (v: string | null) => void;
  brief: Brief | null; compute: () => void; reset: () => void;
}) {
  const [step, setStep] = useState(0); // 0 intro, 1-3 questions, 4 result
  const go = (n: number) => setStep(n);
  const finish = () => { p.compute(); go(4); };
  const restart = () => { p.reset(); go(1); };

  const QS = [
    { n: 1, q: "What do you do?", opts: INDUSTRIES.map((x) => x.k), val: p.ind, set: (v: string) => { p.setInd(v); go(2); } },
    { n: 2, q: "How should it feel?", opts: FEELINGS.map((x) => x.k), val: p.feel, set: (v: string) => { p.setFeel(v); go(3); } },
  ];

  return (
    <section id="direction" className="dq so-bw-sec" aria-label="Find your direction">
      {step === 0 && (
        <button type="button" className="dq-intro" onClick={() => go(1)}>
          <span className="fd-quiz-k">Not sure what you want it to look like?</span>
          <span className="fd-quiz-t">Find your direction.</span>
          <span className="fd-quiz-d">Three quick questions, no design words needed.</span>
          <span className="fd-quiz-b">Start the quiz <span aria-hidden="true">→</span></span>
        </button>
      )}

      {step >= 1 && step <= 3 && (
        <div className="dq-card so-chapter-fade" key={step}>
          <div className="dq-top">
            <span className="fd-quiz-k">Question {step} of 3</span>
            <span className="dq-bar"><i style={{ width: `${(step / 3) * 100}%` }} /></span>
          </div>
          {step < 3 ? (
            <>
              <p className="fd-quiz-t">{QS[step - 1].q}</p>
              <div className="dq-opts">
                {QS[step - 1].opts.map((o) => (
                  <button key={o} type="button" className={"dq-opt" + (QS[step - 1].val === o ? " is-on" : "")} onClick={() => QS[step - 1].set(o)}>
                    {o.toLowerCase()}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="fd-quiz-t">Anything else?</p>
              <p className="fd-quiz-d">Optional. Pick one or type your own.</p>
              <div className="dq-opts">
                {EXTRAS.map((c) => (
                  <button key={c} type="button" className={"dq-opt" + (p.picked === c ? " is-on" : "")} onClick={() => { p.setPicked(p.picked === c ? null : c); p.setExtra(""); }}>
                    {c}
                  </button>
                ))}
                <input className="dq-input" type="text" value={p.extra} placeholder="or type your own" onChange={(e) => { p.setExtra(e.target.value); p.setPicked(null); }} />
              </div>
              <button type="button" className="fd-quiz-b dq-go" onClick={finish}>See my direction <span aria-hidden="true">→</span></button>
            </>
          )}
          <button type="button" className="dq-back" onClick={() => go(step - 1)}>← Back</button>
        </div>
      )}

      {step === 4 && p.brief && (
        <div className="dq-card so-chapter-fade">
          <span className="fd-quiz-k">Your direction · for {p.brief.fore.toLowerCase()}</span>
          <p className="fd-quiz-t dq-head">{p.brief.head}</p>
          <p className="dq-para">{p.brief.para}</p>
          <dl className="dq-res">
            <div><dt>The world</dt><dd>{p.brief.world.join(" · ")}</dd></div>
            <div><dt>Visual language</dt><dd>{p.brief.visual.join(" · ")}</dd></div>
            <div><dt>Pairs well with</dt><dd>{p.brief.start.filter((s) => s.h !== "/logo-identity").map((s) => <a key={s.t} href={s.h}>{s.t} →</a>)}</dd></div>
          </dl>
          <div className="dq-end">
            <a className="fd-quiz-b" href={bookHref("Branding", "Direction: " + p.brief.head)}>Start with this <span aria-hidden="true">→</span></a>
            <button type="button" className="dq-back" onClick={restart}>Retake the quiz</button>
          </div>
        </div>
      )}
    </section>
  );
}
