import { useEffect, useState } from "react";
import { ProjectQuiz } from "./project-quiz";

/* Two full-screen rooms that open over the homepage:
   #links  a directory that guides people around (also works as the Instagram link)
   #quiz   "not sure where to start?" questions with one clear suggestion */

type Room = "links" | "quiz" | "makeover" | null;

const roomFromHash = (): Room => {
  if (typeof window === "undefined") return null;
  const h = window.location.hash.replace("#", "");
  return h === "links" ? "links" : h === "quiz" ? "quiz" : h === "makeover" ? "makeover" : null;
};

const LINKS: { n: string; t: string; d: string; href: string; ext?: boolean }[] = [
  { n: "01", t: "Start a project", d: "Tell me what you're making", href: "#inquiry" },
  { n: "02", t: "Not sure where to start?", d: "A few quick questions, one clear answer", href: "#quiz" },
  { n: "03", t: "Need a makeover?", d: "Refresh the brand, site or photos you already have", href: "#makeover" },
  { n: "04", t: "What I do", d: "Branding, websites, photography, video", href: "#build" },
  { n: "05", t: "The work", d: "Recent projects", href: "#work" },
  { n: "06", t: "Meet Hana", d: "How I see and what I'm building", href: "#about-hana" },
  { n: "07", t: "Instagram", d: "@sundayoffice.ag", href: "https://www.instagram.com/sundayoffice.ag", ext: true },
  { n: "08", t: "Email", d: "hello@sundayoffice.agency", href: "mailto:hello@sundayoffice.agency", ext: true },
];

const MAKEOVER: { n: string; t: string; d: string; p: string; href: string }[] = [
  { n: "01", t: "Brand refresh", d: "Keep your logo. New colors, type and a kit that pulls it together", p: "from $550", href: "/branding" },
  { n: "02", t: "A cleaner logo", d: "Redrawn, simplified or made to work everywhere", p: "from $350", href: "/logo-identity" },
  { n: "03", t: "Website makeover", d: "Fix and refresh what you have, or start over", p: "from $250", href: "/websites" },
  { n: "04", t: "Better photos", d: "A brand shoot so your site and feed finally match", p: "from $550", href: "/photography" },
  { n: "05", t: "New headshots", d: "For your site, LinkedIn and press", p: "from $150", href: "/headshots" },
  { n: "06", t: "Social refresh", d: "Canva templates in your brand, or content made for you", p: "from $300", href: "/creative-direction-content" },
];

const SERVICES: { t: string; href: string }[] = [
  { t: "Branding + World Building", href: "/branding" },
  { t: "Logos + Identity", href: "/logo-identity" },
  { t: "Websites", href: "/websites" },
  { t: "Photography", href: "/photography" },
  { t: "Headshots", href: "/headshots" },
  { t: "Moving Image", href: "/moving-image" },
  { t: "Creative Direction + Social", href: "/creative-direction-content" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CASES: { t: string; href: string }[] = [
  { t: "Essential Brows", href: "/websites/essential-brows-studio" },
  { t: "Jazmin's Events", href: "/websites/jazmins-events" },
  { t: "Selaras Haus", href: "/campaigns/selaras-haus" },
  { t: "Nine Vicious × Custom Grillz", href: "/campaigns/green-grillz" },
  { t: "Exhibition", href: "/campaigns/exhibition" },
  { t: "Jaydyn F.", href: "/campaigns/jaydyn-f" },
  { t: "Chutneys Bellevue", href: "/campaigns/chutneys" },
  { t: "Leon Thomas × Vice", href: "/campaigns/leon-thomas" },
  { t: "Paradice × Itz Pz", href: "/campaigns/paradice" },
  { t: "Bar Bistro", href: "/campaigns/bar-bistro" },
  { t: "Public House", href: "/campaigns/public-house" },
  { t: "Kenshi Killz", href: "/campaigns/kenshi-killz" },
  { t: "Big Baby Gucci", href: "/campaigns/big-baby-gucci" },
  { t: "Avery Tien", href: "/campaigns/avery-tien" },
  { t: "DJ Prashant × The Hiyu", href: "/campaigns/dj-prashant-hiyu" },
  { t: "DJ WZRD", href: "/campaigns/dj-wzrd" },
  { t: "Chitos International", href: "/campaigns/chitos" },
  { t: "Highway", href: "/campaigns/highway" },
  { t: "Still Different", href: "/campaigns/still-different" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LIVE: { t: string; href: string }[] = [
  { t: "GREAN", href: "https://grean-iota.vercel.app/" },
  { t: "Essential Brows", href: "https://www.essentialbrows.studio/" },
  { t: "Jazmin's Events", href: "https://jazmins-events.vercel.app/" },
];

/* The static preview serves pages as files (branding.html), the live site as routes (/branding). */
const pageHref = (h: string) => (typeof window !== "undefined" && window.location.pathname.endsWith(".html") ? h.slice(1).replace(/\//g, "-") + ".html" : h);

export function Guide() {
  const [room, setRoom] = useState<Room>(null);

  useEffect(() => {
    const sync = () => setRoom(roomFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (room) root.classList.add("gd-lock");
    else root.classList.remove("gd-lock");
    if (!room) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  const close = () => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setRoom(null);
  };

  /* Links to a section close the room and scroll there. */
  const go = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (href === "#quiz" || href === "#makeover") {
      history.replaceState(null, "", href);
      setRoom(href === "#quiz" ? "quiz" : "makeover");
      return;
    }
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setRoom(null);
    window.setTimeout(() => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  if (!room) return null;

  if (room === "makeover")
    return (
      <div className="gd gd-links gd-mk" role="dialog" aria-modal="true" aria-label="The Makeover">
        <video className="gd-reel" src="/assets/work/hero-edit.mp4" autoPlay muted loop playsInline aria-hidden="true" />
        <div className="gd-wash" aria-hidden="true" />
        <button type="button" className="gd-close" onClick={close}>Close <span aria-hidden="true">×</span></button>
        <div className="gd-inner">
          <p className="gd-k">Sunday Office · The Makeover</p>
          <h2 className="gd-h">Keep what works.</h2>
          <span className="gd-line" aria-hidden="true" />
          <p className="gd-sub">Already up and running? Pick what needs a refresh.</p>
          <ol className="gd-list">
            {MAKEOVER.map((l, i) => (
              <li key={l.n} style={{ animationDelay: 120 + i * 70 + "ms" }}>
                <a href={pageHref(l.href)}>
                  <span className="gd-n">{l.n}</span>
                  <span className="gd-t">{l.t}</span>
                  <span className="gd-d">{l.d} · <i>{l.p}</i></span>
                  <span className="gd-a" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
            <li style={{ animationDelay: 120 + MAKEOVER.length * 70 + "ms" }}>
              <a href="#inquiry" onClick={go("#inquiry")}>
                <span className="gd-n">07</span>
                <span className="gd-t">All of it: The Refresh</span>
                <span className="gd-d">Photos, short videos, a site refresh and a social kit together · <i>from $1,200</i></span>
                <span className="gd-a" aria-hidden="true">→</span>
              </a>
            </li>
          </ol>
          <p className="gd-mk-alt">
            Not sure what needs the most work? <a href="#inquiry" onClick={go("#inquiry")}>Send me your links</a> and I'll tell you where I'd start, or <a href="#quiz" onClick={go("#quiz")}>take the quiz</a>.
          </p>
        </div>
      </div>
    );

  if (room === "links")
    return (
      <div className="gd gd-links" role="dialog" aria-modal="true" aria-label="Sunday Office directory">
        <video className="gd-reel" src="/assets/work/hero-edit.mp4" autoPlay muted loop playsInline aria-hidden="true" />
        <div className="gd-wash" aria-hidden="true" />
        <button type="button" className="gd-close" onClick={close}>Close <span aria-hidden="true">×</span></button>
        <div className="gd-inner">
          <p className="gd-k">Sunday Office · Seattle</p>
          <h2 className="gd-h">Build Your World.</h2>
          <span className="gd-line" aria-hidden="true" />
          <p className="gd-sub">Where would you like to go?</p>
          <ol className="gd-list">
            {LINKS.map((l, i) => (
              <li key={l.n} style={{ animationDelay: 120 + i * 70 + "ms" }}>
                <a href={l.href} onClick={go(l.href)} {...(l.ext && l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <span className="gd-n">{l.n}</span>
                  <span className="gd-t">{l.t}</span>
                  <span className="gd-d">{l.d}</span>
                  <span className="gd-a" aria-hidden="true">→</span>
                </a>
                {l.n === "04" && (
                  <div className="gd-svc">
                    {SERVICES.map((sv) => (
                      <a key={sv.href} href={pageHref(sv.href)} className="gd-pill">{sv.t}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
          <p className="gd-foot">Replies in 2 to 3 business days</p>
        </div>
      </div>
    );

  return (
    <div className="gd gd-quiz" role="dialog" aria-modal="true" aria-label="Where to start">
      <div className="gd-quiz-bar">
        <span className="gd-quiz-file">File No. 006 · Where to start</span>
        <span className="gd-quiz-rule" aria-hidden="true" />
        <button type="button" className="gd-close gd-close-dark" onClick={close}>Close <span aria-hidden="true">×</span></button>
      </div>
      <div className="gd-quiz-inner">
        <h2 className="gd-quiz-h">Not sure where to start?</h2>
        <p className="gd-quiz-sub">Answer a few quick questions and I'll point you to one clear first step.</p>
        <ProjectQuiz />
        <p className="gd-quiz-alt">
          Rather just talk? <a href="#inquiry" onClick={go("#inquiry")}>Send me a note</a> or <a href="#links" onClick={(e) => { e.preventDefault(); history.replaceState(null, "", "#links"); setRoom("links"); }}>see everything in one place</a>.
        </p>
      </div>
    </div>
  );
}
