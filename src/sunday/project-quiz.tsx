import { useState } from "react";
import { bookHref } from "./service-kit";

/* "Start a project with me": three quick questions, one clear place to start.
   The result links into the inquiry form with the service already picked. */

type Stage = "scratch" | "site" | "content" | "photos" | "unsure";
type Budget = "low" | "mid" | "high" | "unsure";

const Q1 = [
  { k: "beauty", t: "Beauty + wellness", d: "Brows, lashes, skin, salons, med spas" },
  { k: "food", t: "Food + drink", d: "Cafés, restaurants, bars, catering" },
  { k: "creative", t: "Artist or creative", d: "Music, fashion, events, nightlife" },
  { k: "other", t: "Something else", d: "Any business with something to show" },
];

const Q2: { k: Stage; t: string; d: string }[] = [
  { k: "scratch", t: "Just getting started", d: "A new business, or a fresh start" },
  { k: "site", t: "Ready to level up", d: "I have something. It needs to look the part" },
  { k: "content", t: "Want to stay consistent", d: "Help showing up, month after month" },
  { k: "photos", t: "Need one thing made", d: "Photos, a content day, a flyer, graphics or a site fix" },
  { k: "unsure", t: "Not sure yet", d: "I just know something needs to change" },
];

const Q3: { k: Budget; t: string }[] = [
  { k: "low", t: "Under $500" },
  { k: "mid", t: "$500 to $1,500" },
  { k: "high", t: "$1,500 or more" },
  { k: "unsure", t: "Not sure yet" },
];

type Pick = { t: string; p: string; why: string; need: string; more: string };

const PICKS: Record<Exclude<Stage, "unsure">, Record<"low" | "mid" | "high", Pick>> = {
  scratch: {
    low: { t: "Logo", p: "from $350", why: "A logo made from scratch, in every version you need. Everything else can grow from it.", need: "Branding", more: "/branding" },
    mid: { t: "Brand kit", p: "from $550", why: "Your colors, fonts and voice in one simple guide, so everything you make looks like you.", need: "Branding", more: "/branding" },
    high: { t: "Full brand world", p: "from $1,500", why: "The whole brand built from scratch: research, logo, identity, voice and templates.", need: "Branding", more: "/branding" },
  },
  site: {
    low: { t: "Landing page", p: "from $250", why: "One clean page with your work, your prices and a way to book. A strong start you can grow.", need: "Website", more: "/websites" },
    mid: { t: "Simple site + SEO", p: "$1,000", why: "Four to five pages, words written with you, booking plugged in, and set up so Seattle can find you on Google.", need: "Website", more: "/websites" },
    high: { t: "Full site", p: "from $1,250", why: "More pages and more going on: galleries, menus, lots of services. Planned around exactly what you need.", need: "Website", more: "/websites" },
  },
  content: {
    low: { t: "Audit + strategy", p: "from $400", why: "Know exactly what to post and why. It comes off your first month if you go monthly later.", need: "Monthly content", more: "/creative-direction-content#more" },
    mid: { t: "Starter plan", p: "$600/mo", why: "A shoot every month, 8 posts, captions and a plan. An easy way to stop going quiet.", need: "Monthly content", more: "/creative-direction-content#monthly" },
    high: { t: "Growth plan", p: "$1,500/mo", why: "Photos, video, 16 posts and 8 reels a month, with research behind it. Where accounts start to grow.", need: "Monthly content", more: "/creative-direction-content#monthly" },
  },
  photos: {
    low: { t: "One piece", p: "from $75", why: "A flyer, a menu, a headshot, a content day of short videos ($350) or a quick fix to your site. Tell me what it is and I'll quote it before anything starts.", need: "Not sure yet / Other", more: "/branding#pricing" },
    mid: { t: "Brand photography", p: "from $550", why: "A half-day shoot of your space, your team and what you make. 30+ edited photos, ready for your site, your feed and print.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "One shoot that covers photos and short videos, so a single day fills your website and your feed for weeks.", need: "Photography", more: "/photography" },
  },

};

/* "Need one thing made": the most useful single job for each kind of business. */
const ONE_THING: Record<string, Record<"low" | "mid" | "high", Pick>> = {
  beauty: {
    low: { t: "Headshots", p: "from $150", why: "A clean, natural headshot for your booking page and your profile. Clients want to see who they're booking with.", need: "Headshots", more: "/headshots" },
    mid: { t: "Brand photography", p: "from $550", why: "Your treatment room, your tools and you at work. 30+ edited photos for your site, your booking page and your feed.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Photos of your space and short videos of the experience, so one visit fills your site and your feed for weeks.", need: "Photography", more: "/photography" },
  },
  food: {
    low: { t: "A menu or a flyer", p: "from $75", why: "A menu, a flyer or an A-frame sign in your brand, ready to print. Menus start at $150, flyers at $75.", need: "Branding", more: "/branding#pricing" },
    mid: { t: "Food + drink photography", p: "from $550", why: "Your dishes, your drinks and your room, shot to make people hungry. 30+ edited photos for your menu, site and feed.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Plates, pours and the room, in photos and short videos from one visit. Enough to keep your feed going for weeks.", need: "Photography", more: "/photography" },
  },
  creative: {
    low: { t: "Content day", p: "$350", why: "About 2 hours on iPhone and 5 to 8 short edited videos for a release, a show or a drop.", need: "Video / Moving Image", more: "/moving-image" },
    mid: { t: "Creative shoot", p: "from $550", why: "A concept, a moodboard and a styled shoot, for a cover, a campaign or press photos that look like your work.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "Stills and short videos from one shoot, so your release, your merch and your posts all come from the same world.", need: "Photography", more: "/photography" },
  },
  other: {
    low: { t: "Something small", p: "from $75", why: "A flyer, a headshot, a content day of short videos or a quick fix to your site. Tell me what it is and I'll quote it first.", need: "Not sure yet / Other", more: "/#build" },
    mid: { t: "Brand photography", p: "from $550", why: "A half-day shoot of your space, your team and what you do. 30+ edited photos, ready for everywhere.", need: "Photography", more: "/photography" },
    high: { t: "Photos + video", p: "from $900", why: "One shoot that covers photos and short videos, so a single day fills your website and your feed.", need: "Photography", more: "/photography" },
  },
};

/* One line that shows how the suggestion fits their kind of business. */
const DETAIL: Record<string, Partial<Record<Stage, string>>> = {
  beauty: {
    scratch: "Clients choose who works on them based on trust. A clear, calm brand earns it before they ever book.",
    site: "Your services, prices and booking in one place, so clients can book without messaging you first.",
    content: "Think before-and-afters, treatment explainers and booking reminders, every month.",
  },
  food: {
    scratch: "A brand that looks as good as the food, from your sign to your menu to your feed.",
    site: "Your menu, hours, location and ordering, so people decide before they walk in.",
    content: "Think new dishes, specials and the feel of the room, every month.",
  },
  creative: {
    scratch: "One look that ties your music, merch and posts together, so people know it's you.",
    site: "Your work, your links and a way to book you, all in one place.",
    content: "Think releases, shows and behind the scenes, so you never go quiet between drops.",
  },
  other: {},
};

export function ProjectQuiz() {
  const [a1, setA1] = useState<string | null>(null);
  const [a2, setA2] = useState<Stage | null>(null);
  const [a3, setA3] = useState<Budget | null>(null);
  const step = a1 === null ? 0 : a2 === null ? 1 : a2 === "unsure" || a3 !== null ? 3 : 2;
  const reset = () => {
    setA1(null);
    setA2(null);
    setA3(null);
  };
  const back = () => (a3 !== null ? setA3(null) : a2 !== null ? setA2(null) : setA1(null));
  const unsure = a2 === "unsure";

  const level = a3 === "unsure" || a3 === null ? "mid" : a3;
  const pick = a2 && a2 !== "unsure" && a3 ? (a2 === "photos" ? ONE_THING[a1 ?? "other"][level] : PICKS[a2][level]) : null;
  const detail = a1 && a2 ? DETAIL[a1]?.[a2] : undefined;
  const niche = ({ beauty: "for my beauty business", food: "for my food and drink business", creative: "for my creative work" } as Record<string, string>)[a1 ?? ""] ?? "";

  return (
    <div className="so-quiz">
      <div className="so-quiz-top">
        <p className="so-micro so-quiz-cap">NOT SURE WHERE TO START? THREE QUICK QUESTIONS</p>
        <div className="so-quiz-dots" aria-hidden>
          {[0, 1, 2].map((n) => (
            <span key={n} className={n < step ? "is-done" : n === step ? "is-on" : ""} />
          ))}
        </div>
      </div>

      {step === 0 && (
        <fieldset className="so-quiz-q" key="q1">
          <legend className="so-quiz-h">What kind of business are you?</legend>
          <div className="so-quiz-opts">
            {Q1.map((o) => (
              <button key={o.k} type="button" className="so-quiz-opt" onClick={() => setA1(o.k)}>
                <span className="so-quiz-opt-t">{o.t}</span>
                <span className="so-quiz-opt-d">{o.d}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="so-quiz-q" key="q2">
          <legend className="so-quiz-h">Where are you right now?</legend>
          <div className="so-quiz-opts is-five">
            {Q2.map((o) => (
              <button key={o.k} type="button" className="so-quiz-opt" onClick={() => setA2(o.k)}>
                <span className="so-quiz-opt-t">{o.t}</span>
                <span className="so-quiz-opt-d">{o.d}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="so-quiz-q" key="q3">
          <legend className="so-quiz-h">What would you like to spend to start?</legend>
          <div className="so-quiz-opts is-four">
            {Q3.map((o) => (
              <button key={o.k} type="button" className="so-quiz-opt" onClick={() => setA3(o.k)}>
                <span className="so-quiz-opt-t">{o.t}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && pick && (
        <div className="so-quiz-result" key="r">
          <p className="so-micro so-quiz-cap">MY SUGGESTION · START HERE</p>
          <div className="so-quiz-pick">
            <p className="so-quiz-pick-t">{pick.t}</p>
            <p className="so-quiz-pick-p">{pick.p}</p>
          </div>
          <p className="so-quiz-why">{pick.why}</p>
          {detail && <p className="so-quiz-why so-quiz-niche">{detail}</p>}
          <div className="so-quiz-ctas">
            <a className="so-quiz-go" href={bookHref(pick.need, `${pick.t} (${pick.p})${niche ? `, ${niche}` : ""}`)}>
              Start with this →
            </a>
            <a className="so-quiz-more" href={pick.more}>
              See the details
            </a>
          </div>
          <p className="so-quiz-small">It's only a starting point. We'll figure out exactly what you need when we talk.</p>
        </div>
      )}

      {step === 3 && unsure && (
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
            <a className="so-quiz-go" href={bookHref("Not sure yet / Other", niche ? `figuring out where to start, ${niche}` : "figuring out where to start")}>
              Tell me about it →
            </a>
            <a className="so-quiz-more" href="#build">
              Browse what I do
            </a>
          </div>
          <p className="so-quiz-small">I reply within 2 to 3 business days.</p>
        </div>
      )}

      {step > 0 && (
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
