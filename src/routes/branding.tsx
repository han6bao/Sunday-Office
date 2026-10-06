import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BookBar, FaqList, FitPicker, PriceList, ServiceCta, ServiceSteps } from "../sunday/service-kit";
import { useState } from "react";
import { AESTHETICS } from "../sunday/aesthetics";

export const Route = createFileRoute("/branding")({
  head: () => seoHead("/branding"),
  component: BrandingPage,
});

/* What a world is made of — the core of the branding work. */
const INCLUDED = [
  { t: "Direction", d: "Who it's for, how it should feel, and what it should never look like." },
  { t: "Identity", d: "Logo, marks, type and color that work everywhere.", link: { t: "Logos + identity", h: "/logo-identity" } },
  { t: "Voice", d: "How it talks, from your bio to your captions." },
  { t: "Brand guide", d: "One simple guide that keeps it all consistent." },
];

const STEPS = [
  {
    t: "Talk",
    d: "What you're making and who it's for.",
    more: "We start with a conversation: what you do, who you want to reach, what you love, and what isn't working yet. It doesn't need to be figured out.",
  },
  {
    t: "Find the world",
    d: "References and feeling, agreed first.",
    more: "References, a moodboard and a direction, so we're both picturing the same world before anything gets designed.",
  },
  {
    t: "Build it",
    d: "Identity, voice and guide.",
    more: "Logo, type, colors, the way the brand talks, and a simple guide, refined together until it feels like you.",
  },
  {
    t: "Bring it to life",
    d: "Site, photos, content, film.",
    more: "Then the world gets a home and a face: a website, photos, video and content, all made from the same place.",
  },
]

const FIT = [
  { label: "I have a logo I like, but nothing else matches yet.", pick: "Brand kit", price: "from $550", why: "We keep your logo and build the world around it: palette, type, the way you talk, and a one-page guide so everything finally matches." },
  { label: "I'm starting from scratch, or my brand doesn't feel like me anymore.", pick: "Full brand world", price: "from $1,500", why: "Logo, identity, voice and guide made from the ground up, often with photos or a website. Priced once we know the scope." },
  { label: "I mostly just need a logo.", pick: "Logo", price: "from $350", why: "A new logo with an icon and a wordmark, in every file you need, so it works everywhere from your sign to your profile picture." },
];

const FAQ = [
  { q: "What's the difference between a logo and a brand?", a: "A logo is one mark. A brand is everything around it: the colors, the type, the way you talk and the feeling people get when they see you. The logo is part of the world, not all of it." },
  { q: "I already have a logo. Do I need a new one?", a: "Usually not. If people already know it, the brand kit keeps it and builds everything else around it." },
  { q: "How long does it take?", a: "It depends on how much we're building. You'll get a timeline with your price before anything starts." },
  { q: "Do I need a website too?", a: <>Not right away. A brand works on its own, and many people add a website once the world is set. <a href="/websites">See websites →</a></> },
  { q: "Do you design menus, signs and flyers?", a: "Yes. Flyers start at $75, menus at $150, A-frame signs at $125 and window or wall signs at $150. The print kit covers a menu, an A-frame and two signs for $400, all in your brand and ready to print." },
  { q: "What do I get at the end?", a: "The files for everything we made, ready to use, plus a simple guide that shows how it all fits together, so anyone you work with later can keep it consistent." },
];

const BUILT = [
  { c: "Jazmin's Events", s: "In progress", w: "Brand + website", note: "A brand-new wedding planner, branded from scratch. Website in progress.", img: "/assets/campaigns/jazmins-events/featured-cover.png", h: "/websites/jazmins-events" },
  { c: "Essential Brows", w: "Brand kit, voice + website", note: "Her logo, kept. A calm, clean world built around it.", img: "/assets/campaigns/essential-brows-studio/featured-cover.png", h: "/websites/essential-brows-studio" },
];


const PERSONAL: string[] = [
  "I grew up in a generation that's always cataloguing aesthetics: cores and moods and looks, all these little worlds people build to feel something specific. 90s hip-hop and bling, Y2K, 2012-2014 Tumblr, fedora swag, indie sleaze, scene and emo, streetwear, coquette, old money, mob wife, dark feminine, Western revival, quiet luxury.",
  "A lot of that comes from growing up online, having constant access to visual worlds we might never have naturally been immersed in, then learning to recognize and name them almost instantly.",
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
        margin: "0",
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
          TAP FOR ANOTHER ONE
        </p>
      </div>
      <div key={cur} className="so-chapter-fade" style={{ marginTop: 18 }}>
        <p className="so-serif" style={{ fontSize: "clamp(22px, 3vw, 30px)", margin: 0 }}>
          {a.n}
        </p>
        <p style={{ marginTop: 10, lineHeight: 1.5, maxWidth: "52ch" }}>{a.d}</p>
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
  const [personal, setPersonal] = useState(false);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Hero */}
        <p className="so-micro so-micro-red">SERVICES · BRANDING + WORLD BUILDING · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>
          Build a World.
        </h1>
        <div className="so-bw-intro">
          <p className="so-bw-intro-lead">
            A brand is bigger than a logo. It's the feeling people get when
            they find you. When your identity, photos, website and content
            all come from the same place, people start to recognize you on
            sight.
          </p>
          <div>
            <p className="so-bw-d" style={{ marginTop: 0, maxWidth: "44ch" }}>
              This is where most projects start, whether you're new or ready
              for a brand makeover. Build the world once, and everything after
              it gets easier to make.
            </p>
            <nav className="so-bw-jump" aria-label="On this page">
              <a href="#included">What's included</a>
              <a href="#how">How it works</a>
              <a href="#fit">Which one fits</a>
              <a href="#pricing">Pricing + print</a>
              <a href="#built">Work</a>
              <a href="#faq">Questions</a>
            </nav>
          </div>
        </div>

        <ServiceSteps steps={STEPS} title="How a world gets built." />

        <PriceList
          need="Branding"
          title="Where branding starts."
          items={[
            { t: "Logo", p: "from $350", d: "For when you need a logo.", list: ["Research on your industry + competitors", "A new logo, designed from scratch", "Icon + wordmark versions", "Every file you need"] },
            { t: "Brand kit", p: "from $550", d: "Built around the logo you already have.", list: ["Research + a moodboard", "Color palette + fonts", "The way it talks", "A one-page guide"] },
            { t: "Full brand world", p: "from $1,500", tag: "EVERYTHING", d: "The whole world, from scratch.", list: ["Audience + competitor research", "Direction + moodboard", "Logo, identity + voice", "Full brand guide + templates"] },
            { t: "Print + signage", p: "from $75", d: "Your brand, off the screen.", list: ["Flyers from $75", "Menus from $150", "A-frame signs from $125", "Window + wall signs from $150", "Print kit from $400: a menu, an A-frame + 2 signs"] },
          ]}
          foot="You'll know the number before anything starts."
        />

        {/* Proof */}
        <section id="built" className="so-bw-sec">
          <p className="so-micro">WORLDS WE'VE BUILT</p>
          <div className="so-bw-work" style={{ gridTemplateColumns: `repeat(${BUILT.length}, minmax(0, 1fr))` }}>
            {BUILT.map((b) => {
              const ext = b.h.startsWith("http");
              return (
                <a key={b.c} href={b.h} className="so-bw-card" target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
                  <span className="so-bw-card-img">
                    <img src={b.img} alt={b.c} loading="lazy" />
                    {"s" in b && b.s && <span className="so-status so-status-on-card">{b.s}</span>}
                  </span>
                  <span className="so-micro so-bw-card-w">{b.w}</span>
                  <span className="so-bw-card-c">
                    {b.c} <span className="arr" aria-hidden>↗</span>
                  </span>
                  <span className="so-bw-d">{b.note}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Why it matters — short, with the optional personal note + the generator */}
        <section className="so-bw-sec so-bw-why">
          <div>
            <p className="so-micro">WHY THE WORLD MATTERS</p>
            <p className="so-serif so-bw-pull">
              The strongest worlds are recognizable before they're ever explained.
            </p>
            <p className="so-bw-d" style={{ maxWidth: "46ch", marginTop: 14 }}>
              People hire brands they recognize. When everything carries the
              same feeling, people trust you before you've said a word.
            </p>
            <button type="button" className="so-bw-toggle" aria-expanded={personal} onClick={() => setPersonal((v) => !v)}>
              {personal ? "Close ↑" : "Why this is personal →"}
            </button>
            {personal && (
              <div className="so-chapter-fade so-bw-personal">
                {PERSONAL.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            )}
          </div>
          <AestheticGen />
        </section>

        <FaqList items={FAQ} />

        {/* CTA */}
        <ServiceCta current="branding" title="One piece or the whole world." sub="IT DOESN'T NEED TO BE FIGURED OUT YET." />
      </div>
      <BookBar service="Branding" price="from $350" need="Branding" />
    </div>
  );
}
