import { useState } from "react";
import { bookHref } from "./service-kit";

/* "Start a project with me": three quick questions, one clear place to start.
   The result links into the inquiry form with the service already picked. */

type Stage = "scratch" | "site" | "content" | "photos";
type Budget = "low" | "mid" | "high" | "unsure";

const Q1 = [
  { k: "beauty", t: "Beauty + wellness", d: "Brows, lashes, skin, salons, med spas" },
  { k: "food", t: "Food + drink", d: "Cafés, restaurants, bars, catering" },
  { k: "creative", t: "Artist or creative", d: "Music, fashion, events, nightlife" },
  { k: "other", t: "Something else", d: "Any business with something to show" },
];

const Q2: { k: Stage; t: string; d: string }[] = [
  { k: "scratch", t: "Starting from scratch", d: "No logo or brand yet, or it doesn't feel like me" },
  { k: "site", t: "I need a website", d: "I have a look. I need a home for it" },
  { k: "content", t: "I need content, every month", d: "My feed is quiet or all over the place" },
  { k: "photos", t: "I just need photos", d: "Headshots, my space, my food or products" },
];

const Q3: { k: Budget; t: string }[] = [
  { k: "low", t: "Under $500" },
  { k: "mid", t: "$500 to $1,500" },
  { k: "high", t: "$1,500 or more" },
  { k: "unsure", t: "Not sure yet" },
];

type Pick = { t: string; p: string; why: string; need: string; more: string };

const PICKS: Record<Stage, Record<"low" | "mid" | "high", Pick>> = {
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
    low: { t: "Headshots", p: "from $150", why: "A clean, natural headshot with direction the whole time. Your profile will finally look like you.", need: "Headshots", more: "/headshots" },
    mid: { t: "Brand photography", p: "from $550", why: "A half-day shoot of your space, your team and what you make. 30+ edited photos, ready for everywhere.", need: "Photography", more: "/photography" },
    high: { t: "Brand photography + video", p: "from $900", why: "One shoot that covers photos and short videos, so a single day fills your website and your feed.", need: "Photography", more: "/photography" },
  },
};

const NICHE: Record<string, string> = {
  beauty: "For beauty businesses, this is where trust starts: people want to see your work before they book.",
  food: "For food and drink, people decide with their eyes first. This gets them through the door.",
  creative: "For artists and creatives, the look is part of the work. This keeps it consistent.",
  other: "",
};

export function ProjectQuiz() {
  const [a1, setA1] = useState<string | null>(null);
  const [a2, setA2] = useState<Stage | null>(null);
  const [a3, setA3] = useState<Budget | null>(null);
  const step = a1 === null ? 0 : a2 === null ? 1 : a3 === null ? 2 : 3;
  const reset = () => {
    setA1(null);
    setA2(null);
    setA3(null);
  };
  const back = () => (a3 !== null ? setA3(null) : a2 !== null ? setA2(null) : setA1(null));

  const pick = a2 && a3 ? PICKS[a2][a3 === "unsure" ? "mid" : a3] : null;
  const niche = Q1.find((x) => x.k === a1)?.t ?? "";

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
          <div className="so-quiz-opts">
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
          {a1 && NICHE[a1] && <p className="so-quiz-why so-quiz-niche">{NICHE[a1]}</p>}
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
