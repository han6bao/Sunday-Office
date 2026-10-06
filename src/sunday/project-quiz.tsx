import { useState } from "react";
import { bookHref } from "./service-kit";

/* "Start a project with me": a few quick questions, one clear place to start.
   The result links into the inquiry form with the service already picked. */

type Niche = "beauty" | "food" | "creative" | "other";
type Stage = "scratch" | "site" | "content" | "photos" | "unsure";
type Budget = "low" | "mid" | "high" | "unsure";
type Level = "low" | "mid" | "high";
type Pick = { t: string; p: string; why: string; need: string; more: string };
type Opt = { k: string; t: string; d?: string };

const Q1: { k: Niche; t: string; d: string }[] = [
  { k: "beauty", t: "Beauty + wellness", d: "Brows, lashes, skin, salons, med spas" },
  { k: "food", t: "Food + drink", d: "Cafés, restaurants, bars, catering" },
  { k: "creative", t: "Artist or creative", d: "Music, fashion, events, nightlife" },
  { k: "other", t: "Something else", d: "Any business with something to show" },
];

const Q2: { k: Stage; t: string; d: string }[] = [
  { k: "scratch", t: "Just getting started", d: "A new business, or a fresh start" },
  { k: "site", t: "Ready to level up", d: "I have something. It's ready for a makeover" },
  { k: "content", t: "Want to stay consistent", d: "Help showing up, month after month" },
  { k: "photos", t: "Need one thing made", d: "Photos, videos, print, graphics or a site fix" },
  { k: "unsure", t: "Not sure yet", d: "I just know something needs to change" },
];

/* One follow-up question, only where the answer changes the suggestion. */
const FOLLOW: Partial<Record<Stage, { q: string; opts: Opt[] }>> = {
  site: {
    q: "What needs the most work?",
    opts: [
      { k: "web", t: "My website", d: "It's missing, outdated or hard to use" },
      { k: "brand", t: "My look", d: "Logo, colors and fonts that don't feel like me" },
      { k: "photos", t: "My photos", d: "I don't have good ones of my work" },
    ],
  },
  content: {
    q: "Who handles your social right now?",
    opts: [
      { k: "none", t: "Nobody, really", d: "It goes quiet for weeks" },
      { k: "me", t: "I do, when I can", d: "I need a plan and some help" },
      { k: "team", t: "Someone on my team", d: "They need direction, not more hands" },
    ],
  },
  photos: {
    q: "What's the one thing?",
    opts: [
      { k: "photos", t: "Photos", d: "Of me, my space or what I make" },
      { k: "video", t: "Short videos", d: "Reels and TikToks" },
      { k: "print", t: "Something printed", d: "A flyer, a menu or a sign" },
      { k: "graphics", t: "Social graphics", d: "Templates I can edit myself" },
      { k: "webfix", t: "A website fix", d: "One page, an update or a refresh" },
    ],
  },
};

const Q3: { k: Budget; t: string }[] = [
  { k: "low", t: "Under $500" },
  { k: "mid", t: "$500 to $1,500" },
  { k: "high", t: "$1,500 or more" },
  { k: "unsure", t: "Not sure yet" },
];

const BRAND: Record<Level, Pick> = {
  low: { t: "Logo", p: "from $350", why: "A logo made from scratch, in every version you need. Everything else can grow from it.", need: "Branding", more: "/branding" },
  mid: { t: "Brand kit", p: "from $550", why: "Your colors, fonts and voice in one simple guide, so everything you make looks like you.", need: "Branding", more: "/branding" },
  high: { t: "Full brand world", p: "from $1,500", why: "The whole brand built properly: research, logo, identity, voice and templates.", need: "Branding", more: "/branding" },
};

const SITE: Record<Level, Pick> = {
  low: { t: "Landing page", p: "from $250", why: "One clean page with your work, your prices and a way to book. A strong start you can grow.", need: "Website", more: "/websites" },
  mid: { t: "Simple site + SEO", p: "$1,000", why: "Four to five pages, words written with you, booking plugged in, and set up so people nearby can find you on Google.", need: "Website", more: "/websites" },
  high: { t: "Full site", p: "from $1,250", why: "More pages and more going on: galleries, menus, lots of services. Planned around exactly what you need.", need: "Website", more: "/websites" },
};

const CONTENT: Record<Level, Pick> = {
  low: { t: "Audit + strategy", p: "from $400", why: "Know exactly what to post and why. It comes off your first month if you go monthly later.", need: "Monthly content", more: "/creative-direction-content#more" },
  mid: { t: "Starter plan", p: "$600/mo", why: "A pro shoot to start, then 8 posts a month, captions and a plan. An easy way to stop going quiet.", need: "Monthly content", more: "/creative-direction-content#monthly" },
  high: { t: "Growth plan", p: "$1,500/mo", why: "Photos, video, 16 posts and 8 reels a month, with research behind it. Where accounts start to grow.", need: "Monthly content", more: "/creative-direction-content#monthly" },
};

const DIRECTION: Record<Level, Pick> = {
  low: { t: "Audit + strategy", p: "from $400", why: "A clear plan your team can follow: what to post, how often and why, with three quick fixes for this week.", need: "Creative Direction", more: "/creative-direction-content#more" },
  mid: { t: "Direction retainer", p: "from $550/mo", why: "A monthly concept and plan for your team, and I review everything before it posts. No shooting.", need: "Creative Direction", more: "/creative-direction-content#more" },
  high: { t: "Direction retainer", p: "from $550/mo", why: "A monthly concept and plan for your team, and I review everything before it posts. Add a campaign whenever you need one.", need: "Creative Direction", more: "/creative-direction-content#more" },
};

/* Photos depend on the kind of business. */
const PHOTOS: Record<Niche, Record<Level, Pick>> = {
  beauty: {
    low: { t: "Headshots", p: "from $150", why: "A clean, natural headshot for your booking page and your profile. Clients want to see who they're booking with.", need: "Headshots", more: "/headshots" },
    mid: { t: "Brand photography", p: "from $550", why: "Your treatment room, your tools and you at work. 30+ edited photos for your site, your booking page and your feed.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Photos of your space and short videos of the experience, so one visit fills your site and your feed for weeks.", need: "Photography", more: "/photography" },
  },
  food: {
    low: { t: "Food + drink photography", p: "from $550", why: "Your dishes, drinks and room, shot to make people hungry. This is where food shoots start, and we can shape it to your budget.", need: "Photography", more: "/photography" },
    mid: { t: "Food + drink photography", p: "from $550", why: "Your dishes, your drinks and your room, shot to make people hungry. 30+ edited photos for your menu, site and feed.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Plates, pours and the room, in photos and short videos from one visit. Enough to keep your feed going for weeks.", need: "Photography", more: "/photography" },
  },
  creative: {
    low: { t: "Creative headshots", p: "from $150", why: "Styled portraits with color, mood and personality, for your profiles, press and promo.", need: "Headshots", more: "/headshots" },
    mid: { t: "Creative shoot", p: "from $550", why: "A concept, a moodboard and a styled shoot, for a cover, a campaign or press photos that look like your work.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Stills and short videos from one shoot, so your release, your merch and your posts all come from the same world.", need: "Photography", more: "/photography" },
  },
  other: {
    low: { t: "Headshots", p: "from $150", why: "A clean, natural headshot with direction the whole time, for your site and your profiles.", need: "Headshots", more: "/headshots" },
    mid: { t: "Brand photography", p: "from $550", why: "A half-day shoot of your space, your team and what you do. 30+ edited photos, ready for everywhere.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "One shoot that covers photos and short videos, so a single day fills your website and your feed.", need: "Photography", more: "/photography" },
  },
};

const VIDEO: Record<Level, Pick> = {
  low: { t: "Content day", p: "$350", why: "About 2 hours on iPhone and 5 to 8 short edited videos for Reels and TikTok. Quick, natural and ready to post.", need: "Video / Moving Image", more: "/moving-image" },
  mid: { t: "Camera video", p: "from $1,000", why: "A polished, color graded video on pro cameras, 60 to 90 seconds, plus 3 vertical cuts for social.", need: "Video / Moving Image", more: "/moving-image" },
  high: { t: "Brand film", p: "from $1,500", why: "The big one: an idea, a script, a full-day shoot and a 1 to 2 minute film, with cuts for every platform.", need: "Video / Moving Image", more: "/moving-image" },
};

const PRINT: Record<Niche, Record<Level, Pick>> = {
  food: {
    low: { t: "A menu", p: "from $150", why: "A menu in your brand, ready to print. Flyers start at $75 and A-frame signs at $125 if you need those too.", need: "Branding", more: "/branding#pricing" },
    mid: { t: "Print kit", p: "from $400", why: "A menu, an A-frame and two signs, all in your brand and ready to print.", need: "Branding", more: "/branding#pricing" },
    high: { t: "Print kit + brand kit", p: "from $950", why: "Your colors, fonts and voice set first, then a menu, an A-frame and two signs that all match.", need: "Branding", more: "/branding#pricing" },
  },
  beauty: {
    low: { t: "A flyer or a sign", p: "from $75", why: "A flyer for a promo or a window sign for your studio, in your brand and ready to print.", need: "Branding", more: "/branding#pricing" },
    mid: { t: "Print kit", p: "from $400", why: "A price menu, a sign for your door and a flyer, all matching your brand.", need: "Branding", more: "/branding#pricing" },
    high: { t: "Print kit + brand kit", p: "from $950", why: "Your look set first, then printed pieces that all match it, from your price menu to your window.", need: "Branding", more: "/branding#pricing" },
  },
  creative: {
    low: { t: "A flyer", p: "from $75", why: "A flyer or poster for a show, a release or an event, in your style and ready to post or print.", need: "Branding", more: "/branding#pricing" },
    mid: { t: "Print kit", p: "from $400", why: "A set of matching pieces for a show or a launch: flyers, a poster and signs.", need: "Branding", more: "/branding#pricing" },
    high: { t: "Print kit + brand kit", p: "from $950", why: "Your look set first, then posters, flyers and merch graphics that all match.", need: "Branding", more: "/branding#pricing" },
  },
  other: {
    low: { t: "A flyer or a sign", p: "from $75", why: "A flyer, a menu or a sign in your brand, ready to print. Tell me what it's for.", need: "Branding", more: "/branding#pricing" },
    mid: { t: "Print kit", p: "from $400", why: "A menu, an A-frame and two signs, all in your brand and ready to print.", need: "Branding", more: "/branding#pricing" },
    high: { t: "Print kit + brand kit", p: "from $950", why: "Your look set first, then printed pieces that all match it.", need: "Branding", more: "/branding#pricing" },
  },
};

const GRAPHICS: Record<Level, Pick> = {
  low: { t: "Canva template pack", p: "from $300", why: "Your colors, fonts and logo set up in Canva, plus 15 post and story templates and highlight covers. You edit them yourself.", need: "Social Media / Content", more: "/creative-direction-content#more" },
  mid: { t: "Canva template pack", p: "from $300", why: "Your colors, fonts and logo set up in Canva, plus 15 post and story templates and highlight covers. Pair it with a brand kit if your look needs work first.", need: "Social Media / Content", more: "/creative-direction-content#more" },
  high: { t: "Brand kit + template pack", p: "from $850", why: "Your colors, fonts and voice set first, then 15 templates built from them, so every post looks like you.", need: "Branding", more: "/branding" },
};

const WEBFIX: Record<Level, Pick> = {
  low: { t: "Website fix", p: "from $250", why: "One new page, a refresh or a repair to the site you already have. No starting over unless it makes sense.", need: "Website", more: "/websites" },
  mid: { t: "Website fix", p: "from $250", why: "One new page, a refresh or a repair. If it needs more than a fix, I'll tell you honestly before we start.", need: "Website", more: "/websites" },
  high: { t: "Simple site + SEO", p: "$1,000", why: "If you're ready to spend more, a fresh site is often better value than patching an old one.", need: "Website", more: "/websites" },
};

function suggest(niche: Niche, stage: Stage, follow: string | null, level: Level): Pick {
  if (stage === "scratch") return BRAND[level];
  if (stage === "site") return follow === "brand" ? BRAND[level] : follow === "photos" ? PHOTOS[niche][level] : SITE[level];
  if (stage === "content") return follow === "team" ? DIRECTION[level] : CONTENT[level];
  if (follow === "video") return VIDEO[level];
  if (follow === "print") return PRINT[niche][level];
  if (follow === "graphics") return GRAPHICS[level];
  if (follow === "webfix") return WEBFIX[level];
  return PHOTOS[niche][level];
}

/* A line that shows how the suggestion fits their kind of business. */
const DETAIL: Record<Niche, Partial<Record<string, string>>> = {
  beauty: {
    Branding: "Clients choose who works on them based on trust. A clear, calm brand earns it before they ever book.",
    Website: "Your services, prices and booking in one place, so clients can book without messaging you first.",
    "Monthly content": "Think before-and-afters, treatment explainers and booking reminders, every month.",
  },
  food: {
    Branding: "A brand that looks as good as the food, from your sign to your menu to your feed.",
    Website: "Your menu, hours, location and ordering, so people decide before they walk in.",
    "Monthly content": "Think new dishes, specials and the feel of the room, every month.",
  },
  creative: {
    Branding: "One look that ties your music, merch and posts together, so people know it's you.",
    Website: "Your work, your links and a way to book you, all in one place.",
    "Monthly content": "Think releases, shows and behind the scenes, so you never go quiet between drops.",
  },
  other: {},
};

const NICHE_NOTE: Record<Niche, string> = {
  beauty: "for my beauty business",
  food: "for my food and drink business",
  creative: "for my creative work",
  other: "",
};

function Options({ opts, onPick, cols }: { opts: Opt[]; onPick: (k: string) => void; cols?: string }) {
  return (
    <div className={"so-quiz-opts" + (cols ? " " + cols : "")}>
      {opts.map((o) => (
        <button key={o.k} type="button" className="so-quiz-opt" onClick={() => onPick(o.k)}>
          <span className="so-quiz-opt-t">{o.t}</span>
          {o.d && <span className="so-quiz-opt-d">{o.d}</span>}
        </button>
      ))}
    </div>
  );
}

export function ProjectQuiz() {
  const [a1, setA1] = useState<Niche | null>(null);
  const [a2, setA2] = useState<Stage | null>(null);
  const [af, setAf] = useState<string | null>(null);
  const [a3, setA3] = useState<Budget | null>(null);

  const follow = a2 ? FOLLOW[a2] : undefined;
  const total = a2 === "unsure" ? 2 : follow ? 4 : 3;
  let step = 0;
  if (a1 !== null) step = 1;
  if (a2 !== null) step = a2 === "unsure" ? total : 2;
  if (a2 && a2 !== "unsure" && follow && af !== null) step = 3;
  if (a3 !== null) step = total;
  const done = step === total;
  const askFollow = !!follow && af === null && a2 !== null;
  const askBudget = a2 !== null && a2 !== "unsure" && !askFollow && a3 === null;

  const reset = () => {
    setA1(null);
    setA2(null);
    setAf(null);
    setA3(null);
  };
  const back = () => {
    if (a3 !== null) setA3(null);
    else if (af !== null) setAf(null);
    else if (a2 !== null) setA2(null);
    else setA1(null);
  };

  const level: Level = a3 === null || a3 === "unsure" ? "mid" : a3;
  const pick = done && a1 && a2 && a2 !== "unsure" ? suggest(a1, a2, af, level) : null;
  const detail = pick && a1 ? DETAIL[a1][pick.need] ?? "" : "";
  const note = a1 ? NICHE_NOTE[a1] : "";

  return (
    <div className="so-quiz">
      <div className="so-quiz-top">
        <p className="so-micro so-quiz-cap">NOT SURE WHERE TO START? A FEW QUICK QUESTIONS</p>
        <div className="so-quiz-dots" aria-hidden>
          {Array.from({ length: total }).map((_, n) => (
            <span key={n} className={n < step ? "is-done" : n === step ? "is-on" : ""} />
          ))}
        </div>
      </div>

      {a1 === null && (
        <fieldset className="so-quiz-q" key="q1">
          <legend className="so-quiz-h">What kind of business are you?</legend>
          <Options opts={Q1} onPick={(k) => setA1(k as Niche)} />
        </fieldset>
      )}

      {a1 !== null && a2 === null && (
        <fieldset className="so-quiz-q" key="q2">
          <legend className="so-quiz-h">Where are you right now?</legend>
          <Options opts={Q2} onPick={(k) => setA2(k as Stage)} cols="is-five" />
        </fieldset>
      )}

      {askFollow && follow && (
        <fieldset className="so-quiz-q" key={"f-" + a2}>
          <legend className="so-quiz-h">{follow.q}</legend>
          <Options opts={follow.opts} onPick={setAf} cols={follow.opts.length === 5 ? "is-five" : "is-three"} />
        </fieldset>
      )}

      {askBudget && (
        <fieldset className="so-quiz-q" key="q3">
          <legend className="so-quiz-h">What would you like to spend to start?</legend>
          <Options opts={Q3} onPick={(k) => setA3(k as Budget)} cols="is-four" />
        </fieldset>
      )}

      {pick && (
        <div className="so-quiz-result" key="r">
          <p className="so-micro so-quiz-cap">MY SUGGESTION · START HERE</p>
          <div className="so-quiz-pick">
            <p className="so-quiz-pick-t">{pick.t}</p>
            <p className="so-quiz-pick-p">{pick.p}</p>
          </div>
          <p className="so-quiz-why">{pick.why}</p>
          {detail && <p className="so-quiz-why so-quiz-niche">{detail}</p>}
          <div className="so-quiz-ctas">
            <a className="so-quiz-go" href={bookHref(pick.need, `${pick.t} (${pick.p})${note ? `, ${note}` : ""}`)}>
              Start with this →
            </a>
            <a className="so-quiz-more" href={pick.more}>
              See the details
            </a>
          </div>
          <p className="so-quiz-small">It's only a starting point. We'll figure out exactly what you need when we talk.</p>
        </div>
      )}

      {done && a2 === "unsure" && (
        <div className="so-quiz-result" key="u">
          <p className="so-micro so-quiz-cap">MY SUGGESTION · LET'S TALK FIRST</p>
          <div className="so-quiz-pick">
            <p className="so-quiz-pick-t">Let's figure it out together.</p>
          </div>
          <p className="so-quiz-why">
            You don't need to know what you need yet. Tell me a little about your business and what feels off, and I'll suggest where to
            start, with a price, before anything is booked.
          </p>
          <div className="so-quiz-ctas">
            <a className="so-quiz-go" href={bookHref("Not sure yet / Other", note ? `figuring out where to start, ${note}` : "figuring out where to start")}>
              Tell me about it →
            </a>
            <a className="so-quiz-more" href="#build">
              Browse what I do
            </a>
          </div>
          <p className="so-quiz-small">I reply within 2 to 3 business days.</p>
        </div>
      )}

      {a1 !== null && (
        <div className="so-quiz-foot">
          <button type="button" onClick={back}>
            ← Back
          </button>
          <button type="button" onClick={reset}>
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
