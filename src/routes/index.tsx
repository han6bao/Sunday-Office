import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { useEffect, useState } from "react";
import { CHAPTERS } from "../sunday/chapters";
import { LitText, ScrollReel, WorldPicker } from "../sunday/scroll-moments";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import {
  SunMark,
  BlessingStamp,
  CreationSeal,
  FramePlate,
} from "../sunday/brand";
import {
  currentWork,
  navLinks,
} from "../sunday/content";
import {
  Parallax,
  DarkGallery,
    InquiryForm,
  Reveal,
  SiteIntro,
  HeroOrb,
  ScrollProgress,
  NavState,
} from "../sunday/client-motion";
import { Hero } from "../sunday/hero";
import { ProjectQuiz } from "../sunday/project-quiz";

export const Route = createFileRoute("/")({
  head: () => seoHead("/"),
  component: Index,
});

/* ------------------------------------------------------------
   Small editorial helpers (ours, not a shared generic system)
   ------------------------------------------------------------ */

/* Section labels ("FILE NO. 001") are retired for the calmer, feed-like look. */
function SecFile(_: { children: string }) {
  return null;
}

function Section({
  id,
  style,
  className,
  children,
}: {
  id?: string;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={"so-section" + (className ? " " + className : "")}
      style={{ scrollMarginTop: 64, ...style }}
    >
      <Reveal>{children}</Reveal>
    </section>
  );
}

function BigTitle({
  children,
  max = 44,
  style,
}: {
  children: ReactNode;
  max?: number;
  style?: CSSProperties;
}) {
  return (
    <h2
      className="so-serif so-script"
      style={{ marginTop: 16, ...style }}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------ */

/* Tapping a link in the mobile menu should close the menu. */
function closeMenu(e: MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.closest("details")?.removeAttribute("open");
}

/* Phones only: a black "Start a project" button pinned to the bottom.
   It slides up once you're past the opening section and slides away
   again as the Office Hours form comes into view. */
function MobileStartBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const form = document.getElementById("office-hours");
      const reachedForm = form
        ? form.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setShow(window.scrollY > window.innerHeight * 0.6 && !reachedForm);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <a
      href="#office-hours"
      className={"so-startbar" + (show ? " is-visible" : "")}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span>Start a project</span>
      <span className="arr" aria-hidden>→</span>
    </a>
  );
}

function Header() {
  return (
    <header className="so-nav">
      <NavState />
      <div className="so-shell so-nav-inner">
        <a href="#top" className="so-brandlock" aria-label="Sunday Office, back to top">
          <SunMark size={28} color="var(--so-nav-ink, var(--color-ink))" />
          <span>Sunday Office</span>
        </a>
        <nav className="so-nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} className="so-nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="so-nav-link cta" href="#office-hours">
            Start a project →
          </a>
        </nav>
        <details className="so-mobile-menu">
          <summary className="so-nav-burger" aria-label="Menu">
            <span className="so-burger-lines" aria-hidden>
              <span />
              <span />
            </span>
            <span className="so-burger-label" />
          </summary>
          <div className="so-menu-panel">
            <p className="so-micro so-menu-file">MENU</p>
            <nav className="so-menu-list" aria-label="Mobile">
              {navLinks.map((l, i) => (
                <a key={l.href} className="so-menu-link" href={l.href} onClick={closeMenu}>
                  <span className="so-menu-no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="so-menu-name">{l.label}</span>
                  <span className="so-menu-arr" aria-hidden>→</span>
                </a>
              ))}
            </nav>
            <a className="so-menu-cta" href="#office-hours" onClick={closeMenu}>
              Start a project →
            </a>
            <div className="so-menu-foot">
              <a href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a>
              <a href="https://www.instagram.com/sundayoffice.ag">@sundayoffice.ag</a>
              <span className="so-micro">SEATTLE, WA</span>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

/* The hero is a client component (../sunday/hero): small positioning line,
   the "Sunday Office." wordmark, a small tagline, then the wide
   future-office plate — with quiet scroll-linked motion. */

function TheOffice() {
  return (
    <Section id="office" className="so-slim">
      <div className="so-shell">
        <SecFile>THE OFFICE</SecFile>
        <div className="so-office-feature">
          <figure className="so-office-photo" aria-label="Photograph of the future Sunday Office — to be placed">
            <span className="so-ofp-corner tl" aria-hidden />
            <span className="so-ofp-corner tr" aria-hidden />
            <span className="so-ofp-corner bl" aria-hidden />
            <span className="so-ofp-corner br" aria-hidden />
            <div className="so-ofp-mat">
              <div className="so-ofp-mount" aria-hidden />
              <div className="so-ofp-slot">
                <span className="so-ofp-sun" aria-hidden>
                  <SunMark size={30} color="var(--color-gold)" />
                </span>
                <span className="so-ofp-label">THE SUNDAY OFFICE</span>
                <span className="so-ofp-sub">photograph to follow</span>
              </div>
              <figcaption className="so-ofp-cap">
                <span>The physical Sunday Office — a place to make things.</span>
                <span className="so-ofp-cap-no">PLATE I</span>
              </figcaption>
            </div>
          </figure>

          <div className="so-office-copy">
            <h2 className="so-serif so-emboss" style={{ fontSize: "clamp(24px, 3.6vw, 40px)" }}>
              A place to make things.
            </h2>
            <p className="so-office-text">
              Sunday Office is building a small physical creative office — a
              quiet studio for shoots, meetings and the work itself. It opens
              soon.
            </p>
            <div className="so-office-meta">
              <div>
                <span className="so-micro">LOCATION</span>
                <span>Seattle, Washington</span>
              </div>
              <div>
                <span className="so-micro">VISITING</span>
                <span>By appointment</span>
              </div>
            </div>
            <div className="so-office-actions">
              <a className="so-btn" href="#office-hours">
                Start a project
              </a>
              <a className="so-btn so-btn-ghost" href="#office-hours">
                Visit the office
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

type StartItem = { n: string; p: string; d: string; path: { t: string; h: string }[] };

/* Three ways in. Hover tints a card, tap picks it and shows where to begin. */
function StartPicker({ items }: { items: StartItem[] }) {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div className="so-starts">
      <p className="so-micro so-starts-cap">MOST PEOPLE START ONE OF THREE WAYS · WHICH ONE ARE YOU?</p>
      <div className="so-starts-grid">
        {items.map((st, i) => {
          const on = pick === i;
          return (
            <div
              key={st.p}
              role="button"
              tabIndex={0}
              aria-pressed={on}
              className={"so-start-card tone-" + (i + 1) + (on ? " is-on" : "") + (pick !== null && !on ? " is-dim" : "")}
              onClick={() => setPick(on ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setPick(on ? null : i);
                }
              }}
            >
              <span className="so-start-top">
                <span className="so-micro so-start-no">{st.n}</span>
                <span className="so-start-check" aria-hidden>{on ? "✓" : "+"}</span>
              </span>
              <p className="so-start-p">{st.p}</p>
              <p className="so-start-d">{st.d}</p>
              <div className="so-start-path">
                {st.path.map((x) => (
                  <a key={x.t} href={x.h} onClick={(e) => e.stopPropagation()}>
                    {x.t}
                  </a>
                ))}
              </div>
              {on && (
                <div className="so-start-go so-chapter-fade">
                  <a href={st.path[0].h} onClick={(e) => e.stopPropagation()} className="so-start-go-main">
                    Start with {st.path[0].t.toLowerCase()} →
                  </a>
                  <a href="/#inquiry" onClick={(e) => e.stopPropagation()}>
                    Or tell me about it
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const starts = [
  {
    n: "01",
    p: "Starting fresh",
    d: "New name, new idea, nothing built yet.",
    path: [
      { t: "Brand", h: "/branding" },
      { t: "Website", h: "/websites" },
      { t: "Photos", h: "/photography" },
    ],
  },
  {
    n: "02",
    p: "Refreshing",
    d: "You've grown, and it doesn't look like you anymore.",
    path: [
      { t: "Brand kit", h: "/branding" },
      { t: "New photos", h: "/photography" },
      { t: "Website", h: "/websites" },
    ],
  },
  {
    n: "03",
    p: "Just need content",
    d: "The brand is there. You need more of it.",
    path: [
      { t: "Photos", h: "/photography" },
      { t: "Video", h: "/moving-image" },
      { t: "Social", h: "/creative-direction-content" },
    ],
  },
];

function BuildYourWorld() {
  const rooms = [
    { k: "BRANDING", step: "Start here", t: "Branding + World Building", lead: "The world behind the work.", d: "The logo is the flag. The world around it is the territory. Strategy, identity, the feeling, the look, the way it talks: everything else is built on this.", h: "/branding", cta: "Build your world", img: "/assets/work/build-a-world-2.jpg" },
    { k: "DIGITAL", step: "Then", t: "Websites + Digital", lead: "Where the world lives.", d: "Websites, digital experiences, landing pages, interactive work.", h: "/websites", cta: "Open", img: "/assets/work/websites-photo.jpg" },
    { k: "IMAGE", step: "Then", t: "Photography + Moving Image", lead: "What the world looks like.", d: "Photography, campaigns, reels, brand films, music visuals.", h: "/photography", cta: "Open", img: "/assets/photography/avery-01.jpg" },
    { k: "DIRECTION", step: "And", t: "Creative Direction + Social", lead: "How the world comes together.", d: "Concept development, campaigns, art direction, social + content direction.", h: "/creative-direction-content", cta: "Open", img: "/assets/campaigns/kenshi-killz/kk-05.jpg" },
  ];
  const [brand, ...rest] = rooms;

  return (
    <Section id="build" className="so-build-section">
      <div className="so-shell">
        <SecFile>FILE NO. 001 · BUILD YOUR WORLD</SecFile>
        <div className="so-build-head so-bw2">
          <div className="so-bw2-left">
            <h2 className="so-serif so-build-title so-script">Build your <em>world.</em></h2>
            <LitText
              className="so-about-copy so-lit"
              text="A brand is more than a logo. It's the feeling people get when they find you, and everything that follows."
            />
            <p className="so-about-copy so-bw2-p">
              An independent creative agency in Seattle. Whether you're starting fresh or ready for a makeover, I start with the brand, then bring it to life through websites, photography and creative direction, for local businesses and the artists who make this city feel like home.
            </p>
          </div>
        </div>

        <div className="so-path">
          <a href={brand.h} className="so-path-lead is-text">
            <span className="so-path-body">
              <span className="so-path-start so-path-start-inline">{brand.step}</span>
              <span className="so-path-title">{brand.t}</span>
              <span className="so-path-lead-line">{brand.lead}</span>
              <span className="so-room-desc">{brand.d}</span>
              <span className="so-path-cta">
                {brand.cta} <span className="arr" aria-hidden>→</span>
              </span>
            </span>
          </a>
          <div className="so-path-rest">
            <p className="so-micro so-path-then">THEN WE BRING IT TO LIFE</p>
            {rest.map((r, i) => (
              <a key={r.t} href={r.h} className="so-room so-path-room">
                <span className="so-room-media">
                  <img src={r.img} alt={r.t + ", Sunday Office Seattle"} loading="lazy" />
                </span>
                <span className="so-room-body">
                  <span className="so-room-title">
                    {r.t} <span className="arr" aria-hidden>→</span>
                  </span>
                  <span className="so-room-desc">
                    <em>{r.lead}</em> {r.d}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}

/* The work, and where it went: story first, the figure as a quiet footnote. */
function TheProof() {
  const notes = [
    { p: "One video", d: "A single piece of content that reached 8.5M impressions.", n: "2M+", u: "views", h: "/creative-direction-content" },
    { p: "Cut", d: "Pitched a video idea to Cut and helped bring the right people on camera. It passed a million views on YouTube.", n: "1M+", u: "views", h: "/creative-direction-content" },
    { p: "Nine Vicious × Custom Grillz", d: "I photographed Nine Vicious in jeweler Marcus Adam's custom grillz. Fans started using it as their profile picture.", n: "", u: "Visit his most-liked post", h: "https://www.instagram.com/maarcusadam/", ext: true },
  ];
  return (
    <Section id="proof">
      <div className="so-shell">
        <SecFile>FILE NO. 003 · WHERE THE WORK WENT</SecFile>
        <div className="so-proof-head">
          <h2 className="so-serif so-proof-title so-script">Worlds people actually <em>see.</em></h2>
          <p className="so-proof-intro">
            Sunday Office exists to make good ideas visible, give them a
            world to live in, and let the right people recognize them when
            they see them.
          </p>
        </div>
        <div className="so-notes-list">
          {notes.map((n) => (
            <a
              key={n.p}
              href={n.h}
              className={"so-note-row" + ("ext" in n ? " is-ext" : "")}
              {...("ext" in n ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="so-note-p">
                {n.p} <span className="so-note-arr" aria-hidden>{"ext" in n ? "↗" : "→"}</span>
              </span>
              <span className="so-note-d">{n.d}</span>
              <span className="so-note-f">
                {n.n ? <>{n.n} </> : null}<span className="so-note-u">{n.u}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* Hana's philosophy, in her own words, between sections. */
function Interlude({ children }: { children: ReactNode }) {
  return (
    <div className="so-interlude">
      <div className="so-shell">
        <Reveal>
          <span className="so-quote-mark so-emboss" aria-hidden>
            “
          </span>
          <p className="so-quote">{children}</p>
          <p className="so-micro so-quote-by">— HANA</p>
        </Reveal>
      </div>
    </div>
  );
}

function CurrentWork() {
  return (
    <Section id="work" className="so-darkframe-section">
      <div className="so-darkframe">
        <div className="so-shell">
          <div className="so-darkframe-head">
            <div>
              <span className="so-df-tic" aria-hidden />
              <h2 className="so-darkframe-title so-script">Featured <em>work.</em></h2>
            </div>
            <div className="so-darkframe-meta">
              <span className="so-lab so-df-hint">SWIPE → TAP TO OPEN</span>
            </div>
          </div>
        </div>
        <DarkGallery items={currentWork} />
      </div>
    </Section>
  );
}

function MeetHana() {
  return (
    <Section id="about-hana" className="so-keep-light">
      <div className="so-shell">
        <FeedFile>FILE NO. 005 · MEET HANA</FeedFile>
        <BigTitle max={72}>Meet <em>Hana.</em></BigTitle>
        <p className="so-micro mt-3">
          FOUNDER / PHOTOGRAPHER / CREATIVE PRODUCER
        </p>
        <div className="so-profile mt-8">
          <Parallax range={[-10, 10]}>
            <div>
              <img
                src="/assets/work/hero-hana-01.jpg"
                alt="Hana, Seattle photographer and founder of Sunday Office, at her desk"
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  objectPosition: "90% 30%",
                  borderRadius: 8,
                  border: "1px solid var(--color-sepia)",
                  display: "block",
                }}
              />
            </div>
          </Parallax>
          <div className="so-profile-body">
            <p className="lead">Hi, I'm Hana.</p>
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
            <div className="so-profile-credits mt-6">
              <div className="so-profile-credit">
                <p className="so-micro">BASED</p>
                <p style={{ marginTop: 6 }}>Seattle, WA</p>
              </div>
              <div className="so-profile-credit">
                <p className="so-micro">ROLE</p>
                <p style={{ marginTop: 6 }}>Founder, Photographer + Creative Producer</p>
              </div>
              <div className="so-profile-credit" style={{ borderTop: 0 }}>
                <p className="so-micro">WORKS WITH</p>
                <p style={{ marginTop: 6 }}>Brands, businesses + artists</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
              <a href="/about" className="so-about-plus" aria-label="More about Hana" title="More about Hana">
                +
              </a>
              <span className="so-micro" style={{ color: "var(--color-stone)", letterSpacing: "0.14em" }}>
                MORE ABOUT ME
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


/* Packages: what most local businesses book. Quoted per project. */
const PACKAGES = [
  {
    n: "The Refresh",
    who: "A makeover for established businesses ready for a sharper look.",
    items: ["Brand photo session (half day)", "5 to 8 short-form videos", "Website refresh or a new landing page", "Social media asset kit", "Your files organized in Google Drive or Dropbox"],
    foot: "FROM $1,200 · SAVE $250",
  },
  {
    n: "The Launch",
    who: "Everything you need to open, or reopen, like a premium brand.",
    items: ["Full custom website", "Brand kit: logo suite, colors, type, guidelines", "Full-day photo + video shoot", "30 days of ready-to-post content", "Launch strategy session", "Your files organized in Google Drive or Dropbox"],
    tag: "Full build",
    foot: "FROM $3,800 · SAVE $850",
  },
  {
    n: "The Signature",
    who: "A complete brand build or rebrand, with campaign-level content.",
    items: ["Everything in The Launch", "Brand campaign shoot (photo + video)", "Brand film", "Rollout plan and content calendar", "Priority scheduling"],
    foot: "FROM $6,000 · SAVE $1,350",
  },
  {
    n: "Monthly Content",
    who: "Ongoing content so your brand never goes quiet.",
    items: ["A pro shoot every month on Growth and Full", "Posts, reels + captions, ready to publish", "Research + a monthly plan", "Canva templates you approve", "Your files organized in Google Drive or Dropbox"],
    foot: "FROM $600 / MONTH",
    href: "/creative-direction-content#monthly",
    go: "See the plans",
  },
];

function Packages() {
  return (
    <Section id="packages" className="so-pk-section">
      <div className="so-shell">
        <SecFile>FILE NO. 005 · PACKAGES</SecFile>
        <div className="so-pk-head">
          <BigTitle max={72}>One partner. Your <em>whole brand.</em></BigTitle>
          <p className="so-pk-lead">
            Most local businesses end up hiring a web designer, a photographer,
            a videographer and a social person, then wonder why nothing matches.
            These bring it under one roof. One point of contact: you run the
            business, I handle how it looks.
          </p>
        </div>
        <div className="so-pk-grid">
          {PACKAGES.map((p) => (
            <a key={p.n} href={"href" in p && p.href ? p.href : "/?need=Full+package+%28brand%2C+site+%2B+content%29&pkg=" + encodeURIComponent(p.n) + "#inquiry"} className={"so-pk-card" + (p.tag ? " is-feat" : "")}>
              <span className="so-pk-top">
                <span className="so-pk-name">{p.n}</span>
                {p.tag && <span className="so-pk-tag">{p.tag}</span>}
              </span>
              <span className="so-pk-who">{p.who}</span>
              <ul className="so-pk-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <span className="so-pk-foot">
                <span className="so-micro">{"foot" in p && p.foot ? p.foot : "QUOTED PER PROJECT"}</span>
                <span className="so-pk-go">
                  {"go" in p && p.go ? p.go : "Ask about it"} <span className="arr" aria-hidden>→</span>
                </span>
              </span>
            </a>
          ))}
        </div>
        <p className="so-pk-alc">
          Just need one thing? Headshots, a website or a brand kit can be booked on their own.{" "}
          <a className="so-bw-inline" href="/#build">See services →</a>
        </p>
      </div>
    </Section>
  );
}

function StartAProject() {
  return (
    <Section id="office-hours" className="so-start-section">
      <div className="so-shell">
        <SecFile>FILE NO. 005 · START A PROJECT</SecFile>
        <div className="so-start-head">
          <BigTitle max={88}>Start <em>building.</em></BigTitle>
          <div className="so-start-side">
            <p>
              It doesn't need to be figured out. Tell me what you're making,
              what's not working, or what you wish it looked like. I reply within 2 to 3 business days.
            </p>
            <p className="so-micro">BOOKING NEW PROJECTS · SEATTLE</p>
          </div>
        </div>

        <ProjectQuiz />

        <div className="so-office-card" id="inquiry">
          <p className="eyebrow-cap mt-4">The Inquiry</p>
          <InquiryForm />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="so-footer" id="office">
      <div className="so-shell">
        <div className="so-footer-top">
          <div>
            <div className="so-footer-wordmark so-emboss-dark">Sunday Office</div>
            <p className="so-micro" style={{ marginTop: 12 }}>
              WE BUILD WORLDS FOR PEOPLE WITH SOMETHING WORTH SEEING
            </p>
            <div className="mt-4">
              <SunMark size={34} color="#f4eff5" />
            </div>
          </div>
          <div>
            <h5>What we do</h5>
            <a className="foot-link" href="/branding">Branding + World Building</a>
            <a className="foot-link" href="/logo-identity">Logos + Identity</a>
            <a className="foot-link" href="/websites">Websites + Digital</a>
            <a className="foot-link" href="/photography">Photography</a>
            <a className="foot-link" href="/headshots">Headshots</a>
            <a className="foot-link" href="/moving-image">Moving Image</a>
            <a className="foot-link" href="/creative-direction-content">Creative Direction + Social</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a className="foot-link" href="mailto:hello@sundayoffice.agency">
              hello@sundayoffice.agency
            </a>
            <a className="foot-link" href="#office-hours">
              Start a project →
            </a>
            <a className="foot-link" href="#top">
              Back to top
            </a>
          </div>
          <div>
            <h5>Find us</h5>
            <span className="foot-link">Seattle, WA</span>
            <a className="foot-link" href="https://www.instagram.com/sundayoffice.ag">
              @sundayoffice.ag
            </a>
          </div>
        </div>
        <div className="so-footer-bottom">
          <p className="so-micro">© 2026 SUNDAY OFFICE · ALL RIGHTS RESERVED</p>
          <div className="so-footer-seals">
            <SunMark size={26} color="#f4eff5" />
            <span className="so-stamp-plain">
              <BlessingStamp size={40} color="var(--color-emboss)" dark />
            </span>
            <span className="so-stamp-plain">
              <CreationSeal size={26} color="var(--color-emboss)" />
            </span>
          </div>
          <p className="so-micro">STRATEGY IN MIND · CULTURE AT HEART · STORY IN EVERYTHING</p>
        </div>
      </div>
    </footer>
  );
}


const REEL = [
  { src: "/assets/campaigns/kenshi-killz/kk-01.jpg", t: "Kenshi Killz", w: "ARTIST · PROMO", h: "/campaigns/kenshi-killz" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", t: "Selaras Haus", w: "INTERIORS · BEAUTY", h: "/campaigns/selaras-haus" },
  { src: "/assets/campaigns/leon-thomas/lt-01.jpg", t: "Leon Thomas × Vice", w: "NIGHTLIFE · EVENT", h: "/campaigns/leon-thomas" },
  { src: "/assets/campaigns/bar-bistro/bb-01.jpg", t: "Bar Bistro", w: "FOOD + DRINK", h: "/campaigns/bar-bistro" },
  { src: "/assets/campaigns/green-grillz/gg01.jpg", t: "Nine Vicious", w: "CUSTOM GRILLZ", h: "/campaigns/green-grillz" },
  { src: "/assets/campaigns/still-different/sd-02.jpg", t: "Still Different", w: "ARTIST · PORTRAIT", h: "/campaigns/still-different" },
  { src: "/assets/campaigns/soul-social/ss-04.jpg", t: "Public House", w: "VENUE · SOCIAL", h: "/campaigns/public-house" },
];


/* ------------------------------------------------------------
   The feed-style homepage: one idea per frame, like an Instagram post.
   ------------------------------------------------------------ */
const FEED_SERVICES = [
  { n: "World Building", d: "Branding + creative direction. Where every project starts.", p: "from $350", h: "/branding", big: true },
  { n: "Websites", d: "A home for the brand that books clients while you sleep.", p: "from $850", h: "/websites", big: false },
  { n: "Photography", d: "Portraits, products, spaces and events.", p: "from $150", h: "/photography", big: false },
  { n: "Video + social", d: "Reels, content days and monthly posting.", p: "from $350", h: "/creative-direction-content", big: false },
];

type Link = { t: string; h: string };
const FEED_WORK: { src: string; alt: string; t: string; w: string; d: string; links: Link[]; study: string }[] = [
  { src: "/assets/campaigns/essential-brows-studio/cover.jpg", alt: "The Essential Brows website on a pink desktop", t: "Essential Brows", w: "Website + brand kit", d: "A brow studio that ran on a booking link. Now it has a home of its own.", links: [{ t: "Visit their website", h: "https://www.essentialbrows.studio/" }], study: "/websites/essential-brows-studio" },
  { src: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", alt: "The lounge at Selaras Haus, a beauty studio in Tacoma", t: "Selaras Haus", w: "Interior photography", d: "A calm, warm studio in downtown Tacoma, photographed for its social media and branding.", links: [{ t: "See their Instagram", h: "https://www.instagram.com/selarashaus/" }], study: "/campaigns/selaras-haus" },
  { src: "/assets/campaigns/green-grillz/nine-01.jpg", alt: "Nine Vicious in a red velvet jacket wearing green grillz", t: "Nine Vicious × Custom Grillz", w: "Photography + promotion", d: "My photos became the most-liked post on jeweler Marcus Adam's page.", links: [{ t: "See Marcus Adam's page", h: "https://www.instagram.com/maarcusadam/" }], study: "/campaigns/green-grillz" },
  { src: "/assets/campaigns/exhibition/exh1.jpg", alt: "A styled portrait from the Exhibition campaign", t: "Exhibition", w: "Campaign direction", d: "A campaign I directed from the idea to the day on set.", links: [], study: "/campaigns/exhibition" },
  { src: "/assets/campaigns/jaydyn-f/jd-07.jpg", alt: "Jaydyn F. in a portrait from his release content", t: "Jaydyn F.", w: "Release content", d: "Behind the scenes and short clips around his music. One reel passed 120K views.", links: [{ t: "See the reel", h: "https://www.instagram.com/p/DORrPfiklMt/" }], study: "/campaigns/jaydyn-f" },
  { src: "/assets/campaigns/chutneys/ch-02.jpg", alt: "A dish at Chutneys Bellevue", t: "Chutneys Bellevue", w: "Commercial + photos", d: "A commercial and promo photos for a North Indian restaurant.", links: [{ t: "Visit their website", h: "https://chutneysinbellevue.com/" }], study: "/campaigns/chutneys" },
  { src: "/assets/campaigns/leon-thomas/lt-01.jpg", alt: "Leon Thomas performing at Vice Seattle", t: "Leon Thomas × Vice", w: "Event photography", d: "His tour afterparty at Vice Seattle, photographed for the venue.", links: [{ t: "Visit Vice Seattle", h: "https://www.viceseattle.com/" }], study: "/campaigns/leon-thomas" },
  { src: "/assets/campaigns/jazmins-events/featured-cover.png", alt: "The Jazmin's Events wordmark on cream paper", t: "Jazmin's Events", w: "Brand + website", d: "A brand-new wedding planner, branded from scratch. Website in progress.", links: [{ t: "Visit their website", h: "https://jazmins-events.vercel.app/" }], study: "/websites/jazmins-events" },
];

function FeedFile({ children }: { children: string }) {
  return (
    <div className="fd-file">
      <span>{children}</span>
      <hr />
    </div>
  );
}

function FeedHero() {
  return (
    <section className="fd-frame fd-hero" id="top-feed" aria-label="Intro">
      <h1 className="fd-script">Build your world.</h1>
      <div>
        <p className="fd-small">
          An independent creative agency in Seattle. Whether you're starting fresh or ready for a makeover, I start with the brand, then bring it to life through websites, photography and creative direction.
        </p>
        <a className="fd-link" href="#office-hours">Start a project</a>
      </div>
    </section>
  );
}

/* The immersive hero spot. Drop a video in at /assets/work/hero.mp4 and set
   HERO_VIDEO to its path: the photo then becomes the video's poster frame. */
const HERO_VIDEO: string | null = "/assets/work/hero-edit.mp4";

function FeedPhoto() {
  /* While the hero video is on screen, the header turns see-through and sits on the video. */
  useEffect(() => {
    const el = document.querySelector(".fd-media:not(.fd-media-empty)");
    const root = document.documentElement;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => root.classList.toggle("on-hero", e.isIntersecting), { rootMargin: "-80px 0px 0px 0px", threshold: 0 });
    io.observe(el);
    return () => { io.disconnect(); root.classList.remove("on-hero"); };
  }, []);
  return (
    <div className={"fd-media" + (HERO_VIDEO ? "" : " fd-media-empty")}>
      {HERO_VIDEO ? (<video src={HERO_VIDEO} poster="/assets/work/hero-edit-poster.jpg" autoPlay muted loop playsInline aria-label="A short reel of Sunday Office video work" />) : null}
      <div className="fd-media-over">
        <p className="fd-hero-k">Sunday Office · Seattle</p>
        <h1 className="fd-hero-h">Build Your World.</h1>
        <span className="fd-hero-line" aria-hidden="true" />
        <div className="fd-hero-sub">
          <p><b>Sunday Office</b> is an independent creative agency in Seattle. Whether you're starting fresh or ready for a makeover, I start with the brand, then bring it to life through websites, photography and creative direction.</p>
          <a href="#office-hours">Start a project</a>
        </div>
      </div>
    </div>);
}

function FeedServices() {
  return (
    <section className="fd-frame fd-st fd-st-cream" id="build" aria-label="Services">
      <FeedFile>FILE NO. 001 · WHAT I DO</FeedFile>
      <p className="fd-ghost" aria-hidden="true">01</p>
      <p className="fd-script">Start with the brand.</p>
      <p className="fd-small">
        Then everything after it gets easier to make. One person, one point of contact, from the logo to the last post.
      </p>
      <div className="fd-services">
        <p className="fd-sv-note">Start with one, or build the whole world.</p>
        {FEED_SERVICES.map((x) => (
          <a key={x.n} href={x.h} className={x.big ? "is-big" : ""}>
            <span className="fd-sn">
              {x.big ? x.n.split("").map((ch, j) => (/[A-Z]/.test(ch) ? <span key={j} className="fd-cap">{ch}</span> : ch)) : x.n}
              {x.d && <span className="fd-sd">{x.d}</span>}
            </span>
            <span className="fd-sp">{x.p} <span className="fd-sv-arr" aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* Opening: an envelope opens and the first line comes out, like opening mail.
   Pure CSS timeline, so it always clears even if scripts are slow; skipped on
   repeat visits in the same session, on tap, and for reduced motion. */
function EnvelopeIntro() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("so-envelope") === "1";
      sessionStorage.setItem("so-envelope", "1");
    } catch {
      /* storage blocked: just play it */
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) setGone(true);
    const t = setTimeout(() => setGone(true), 3200);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  return (
    <div className="fd-env-intro" onClick={() => setGone(true)} aria-hidden>
      <div className="fd-ei">
        <span className="fd-ei-back" />
        <span className="fd-ei-card">
          <span className="fd-ei-script">Build your world.</span>
        </span>
        <span className="fd-ei-pocket" />
        <span className="fd-ei-top" />
      </div>
    </div>
  );
}

/* A makeover, before and after. The range input does the dragging, so it
   works with a finger, a mouse or the keyboard. */
function Makeover() {
  const [v, setV] = useState(50);
  return (
    <div className="fd-mk">
      <div className="fd-mk-head">
        <p className="fd-mk-t">A makeover</p>
        <p className="fd-small">
          Essential Brows. Before, people found Aliya through Instagram and a booking link. Now she has a home of her own. Drag to compare.
        </p>
      </div>
      <div className="fd-mk-box">
        <img src="/assets/campaigns/essential-brows-studio/makeover-after.jpg" alt="After: the Essential Brows website" loading="lazy" />
        <img
          className="fd-mk-before"
          src="/assets/campaigns/essential-brows-studio/makeover-before.jpg"
          alt="Before: the Essential Brows Instagram grid"
          loading="lazy"
          style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}
        />
        <span className="fd-mk-line" style={{ left: `${v}%` }} aria-hidden>
          <span className="fd-mk-knob">↔</span>
        </span>
        <span className="fd-mk-lab fd-mk-l">Before</span>
        <span className="fd-mk-lab fd-mk-r">After</span>
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.currentTarget.value))}
          aria-label="Compare before and after"
        />
      </div>
      <a className="fd-link" href="/websites/essential-brows-studio">
        How it was made
      </a>
    </div>
  );
}

const MORE_WORK = [
  { t: "Bar Bistro", w: "Food + drink photography", src: "/assets/campaigns/bar-bistro/bb-01.jpg", h: "/campaigns/bar-bistro" },
  { t: "Public House", w: "Venue photography", src: "/assets/campaigns/soul-social/ss-04.jpg", h: "/campaigns/public-house" },
  { t: "Kenshi Killz", w: "Artist promo", src: "/assets/campaigns/kenshi-killz/kk-01.jpg", h: "/campaigns/kenshi-killz" },
  { t: "Big Baby Gucci", w: "Artist photography", src: "/assets/campaigns/big-baby-gucci/bbg-01.jpg", h: "/campaigns/big-baby-gucci" },
  { t: "Avery Tien", w: "Portraits", src: "/assets/campaigns/avery-tien/at01.jpg", h: "/campaigns/avery-tien" },
  { t: "DJ Prashant × The Hiyu", w: "Event photography", src: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg", h: "/campaigns/dj-prashant-hiyu" },
];

/* More work as a quiet list. On a computer, the photo floats up beside the cursor. */
function MoreWork() {
  const [on, setOn] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div className="fd-mw" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })} onMouseLeave={() => setOn(null)}>
      <p className="fd-mw-h">More work</p>
      <ul>
        {MORE_WORK.map((w, i) => (
          <li key={w.t}>
            <a href={w.h} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onBlur={() => setOn(null)} className={on === i ? "is-on" : ""}>
              <span className="fd-mw-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="fd-mw-t">{w.t}</span>
              <span className="fd-mw-w">{w.w}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={"fd-mw-float" + (on !== null ? " is-on" : "")} style={{ transform: `translate(${pos.x + 28}px, ${pos.y - 140}px)` }} aria-hidden>
        {MORE_WORK.map((w, i) => (
          <img key={w.src} src={w.src} alt="" loading="lazy" className={on === i ? "is-on" : ""} />
        ))}
      </div>
    </div>
  );
}

/* The calligraphy lines write themselves in, left to right, as they scroll into view. */
function ScriptWriter() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".fd-page .fd-script, .fd-page .fd-mk-t, .fd-sign-name"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > vh * 0.9) el.classList.add("fd-write");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-written");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((el) => el.classList.contains("fd-write") && io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

function WorkBox({ w, onClose }: { w: (typeof FEED_WORK)[number]; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.getElementById("fd-box-close")?.focus();
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fd-box-back" onClick={onClose}>
      <div className="fd-box" role="dialog" aria-modal="true" aria-label={w.t} onClick={(e) => e.stopPropagation()}>
        <img src={w.src} alt={w.alt} />
        <div className="fd-box-body">
          <button type="button" id="fd-box-close" className="fd-box-x" onClick={onClose} aria-label="Close">
            ×
          </button>
          <p className="fd-box-w">{w.w}</p>
          <p className="fd-box-t">{w.t}</p>
          <p className="fd-box-d">{w.d}</p>
          <p className="fd-box-q">Want to see more?</p>
          <div className="fd-box-links">
            <a href={w.study} className="fd-box-main">
              Read the case study →
            </a>
            {w.links.map((l) => (
              <a key={l.h} href={l.h} target="_blank" rel="noreferrer">
                {l.t} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeedWork() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="fd-frame fd-st fd-st-lav" id="work" aria-label="Selected work">
      <FeedFile>FILE NO. 002 · SELECTED WORK</FeedFile>
      <p className="fd-ghost" aria-hidden="true">02</p>
      <div className="fd-work-head">
        <h2>Selected work</h2>
        <p className="fd-more-hint">Scroll, then tap one to see more</p>
      </div>
      <div className="fd-row" role="list">
        {FEED_WORK.map((w, i) => (
          <button key={w.t} type="button" role="listitem" className="fd-tile" onClick={() => setOpen(i)}>
            <img src={w.src} alt={w.alt} loading="lazy" />
            <span className="fd-ct">{w.t}</span>
            <span className="fd-cw">{w.w}</span>
          </button>
        ))}
      </div>
      <MoreWork />
      {open !== null && <WorkBox w={FEED_WORK[open]} onClose={() => setOpen(null)} />}
    </section>
  );
}

function FeedMakeover() {
  return (
    <section className="fd-frame fd-mk-frame" aria-label="A makeover">
      <Makeover />
    </section>
  );
}

/* Serve first. Sell later. Tap it to read why. */
function FeedQuote() {
  const [open, setOpen] = useState(false);
  return (
    <section className={"fd-frame fd-quote" + (open ? " is-open" : "")} aria-label="Serve first. Sell later.">
      <div className="fd-quote-file"><FeedFile>FILE NO. 003 · MY PHILOSOPHY</FeedFile></div>
      <button type="button" className="fd-quote-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="fd-why">
        <img className="fd-quote-img" src="/assets/lettering/serve-first.png" alt="Serve first. Sell later." />
        <span className="fd-quote-hint">{open ? "Close" : "Tap to read my philosophy"}</span>
      </button>
      <div className="fd-why" id="fd-why" hidden={!open}>
        <p>
          For me, this has never been about the sale. It's about showing up for people first: listening, being honest and sharing real
          ideas, even before anything is booked.
        </p>
        <p>
          The best work I've made came from that kind of care, and it's what I hope you bring to the people you serve too. People
          forget what you sold them. They remember how you made them feel.
        </p>
      </div>
    </section>
  );
}

const FEED_STATS = [
  { n: "2M+", d: "Views on one video. The same video reached 8.5M impressions.", t: "", h: "" },
  { n: "1M+", d: "Views on YouTube for a video idea I pitched to Cut, with the right people on camera.", t: "", h: "" },
  { n: "120K", d: "Views on the reel I shot for Jaydyn F., with 6K likes and 760 shares.", t: "See Jaydyn F.", h: "/campaigns/jaydyn-f" },
  { n: "35K", d: "Views on the Nine Vicious promo post, which made the discovery page.", t: "See Nine Vicious", h: "/campaigns/green-grillz" },
  { n: "6K", d: "Likes on my photo of Nine Vicious, the most-liked post on jeweler Marcus Adam's page.", t: "See Nine Vicious", h: "/campaigns/green-grillz" },
  { n: "12.5K", d: "Views on The Hiyu's post of my photos from DJ Prashant's night.", t: "See the night", h: "/campaigns/dj-prashant-hiyu" },
];

function FeedProof() {
  const [i, setI] = useState(0);
  const s = FEED_STATS[i];
  const next = () => setI((v) => (v + 1) % FEED_STATS.length);
  return (
    <section className="fd-frame fd-lav" aria-label="Results">
      <FeedFile>FILE NO. 004 · WHERE THE WORK WENT</FeedFile>
      <button type="button" className="fd-stat" onClick={next} aria-label={`${s.n}. ${s.d} Show the next number.`}>
        <span className="fd-big" key={"n" + i}>{s.n}</span>
      </button>
      <div className="fd-stat-foot">
        <p className="fd-note" key={"d" + i} aria-live="polite">
          {s.d}
          {s.h && (
            <>
              {" "}
              <a href={s.h}>{s.t} →</a>
            </>
          )}
        </p>
        <button type="button" className="fd-next" onClick={next}>
          {String(i + 1).padStart(2, "0")} / {String(FEED_STATS.length).padStart(2, "0")} · Tap for the next one
        </button>
      </div>
    </section>
  );
}

function FeedHana() {
  return (
    <section className="fd-frame fd-hana" id="about-hana" aria-label="Meet Hana">
      <FeedFile>FILE NO. 005 · MEET HANA</FeedFile>
      <div className="fd-hana-grid">
        <img src="/assets/hana-portrait.jpg" alt="Hana, founder of Sunday Office" loading="lazy" />
        <div>
          <p className="fd-script">Meet Hana.</p>
          <p className="fd-small">
            I started behind the camera. But somewhere along the way I realized the thing I loved wasn't only taking the photograph. It
            was figuring out what the whole thing could be: the image, the campaign, the website it lives on, the little film somebody
            remembers, the way a business introduces itself.
          </p>
          <p className="fd-small">
            Sunday Office grew from that. Today I lead it as an independent creative agency rooted in photography, creative direction,
            culture and story.
          </p>
          <a className="fd-link" href="/about">More about me</a>
        </div>
      </div>
    </section>
  );
}

/* Meet Hana as a notebook. Each spread: photo spots on the left page, one bio chapter on the right.
   Tap the right page to turn forward, the left page to turn back; a real leaf flips over the spine. */
const BOOK_PHOTOS: number[] = [1, 2, 1, 2, 1, 2];

/* lowercase, with the apostrophe pulled in tight so the script reads like one hand */
function handTitle(t: string) {
  const parts = t.toLowerCase().split(/['\u2019]/);
  return parts.flatMap((x, j) => (j === 0 ? [x] : [<span key={j} className="bk-ap">\u2019</span>, x]));
}

function BookLeft({ k }: { k: number }) {
  const two = BOOK_PHOTOS[k] === 2;
  return (
    <div className={"bk-face-in bk-left-in" + (two ? " is-two" : "")}>
      <div className="bk-ph bk-ph-a"><i className="bk-tape" /><span>photo</span></div>
      {two && <div className="bk-ph bk-ph-b"><i className="bk-tape" /><span>photo</span></div>}
      <p className="bk-cap">{handTitle(CHAPTERS[k].t)}</p>
    </div>
  );
}

function BookRight({ k }: { k: number }) {
  const c = CHAPTERS[k];
  return (
    <div className="bk-face-in bk-right-in">
      <div className="bk-ph bk-ph-m"><span>photo</span></div>
      {k === 0 && <p className="bk-hello">Hi, I'm Hana.</p>}
      <h3 className="bk-t">{handTitle(c.t)}</h3>
      <div className="bk-p">
        {c.p.map((x) => (
          <p key={x.slice(0, 24)}>{x}</p>
        ))}
      </div>
      <p className="bk-no">{c.n} / 0{CHAPTERS.length}</p>
    </div>
  );
}

/* Meet Hana: six chapters as cards in a row. Tap one to read the whole chapter. */
function BioBox({ k, onClose, onGo }: { k: number; onClose: () => void; onGo: (d: number) => void }) {
  const c = CHAPTERS[k];
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onGo(1);
      if (e.key === "ArrowLeft") onGo(-1);
    };
    window.addEventListener("keydown", key);
    document.getElementById("bio-box-close")?.focus();
    return () => window.removeEventListener("keydown", key);
  }, [onClose, onGo]);
  return (
    <div className="bio-back" onClick={onClose}>
      <div className="bio-box" role="dialog" aria-modal="true" aria-label={c.t} onClick={(e) => e.stopPropagation()}>
        <button type="button" id="bio-box-close" className="bio-x" onClick={onClose} aria-label="Close">×</button>
        <p className="bio-no">{c.n} / 0{CHAPTERS.length}</p>
        <h3 className="bio-t">{handTitle(c.t)}</h3>
        <div className="bio-p">
          {c.p.map((x) => (
            <p key={x.slice(0, 24)}>{x}</p>
          ))}
        </div>
        <div className="bio-nav">
          <button type="button" onClick={() => onGo(-1)} disabled={k === 0}>← {k > 0 ? CHAPTERS[k - 1].t : ""}</button>
          <button type="button" onClick={() => onGo(1)} disabled={k === CHAPTERS.length - 1}>{k < CHAPTERS.length - 1 ? CHAPTERS[k + 1].t : ""} →</button>
        </div>
      </div>
    </div>
  );
}

function FeedLetter() {
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((v) => (v === null ? v : Math.min(CHAPTERS.length - 1, Math.max(0, v + d))));
  return (
    <section className="fd-frame fd-st fd-st-cream fd-letter-frame fd-bio" id="about-hana" aria-label="Meet Hana">
      <FeedFile>FILE NO. 005 · MEET HANA</FeedFile>
      <p className="fd-ghost" aria-hidden="true">05</p>
      <div className="bio-head">
        <p className="fd-script">Hi, I'm Hana.</p>
        <p className="fd-small">Six things about how I see, what I believe and what I'm building. Tap one to read it.</p>
      </div>
      <div className="bio-row" role="list">
        {CHAPTERS.map((c, k) => (
          <button key={c.n} type="button" role="listitem" className="bio-card" onClick={() => setOpen(k)}>
            <span className="bio-ph"><span>photo</span></span>
            <span className="bio-cn">{c.n}</span>
            <span className="bio-ct">{handTitle(c.t)}</span>
            <span className="bio-cl">{c.p[0]}</span>
            <span className="bio-more">Read →</span>
          </button>
        ))}
      </div>
      {open !== null && <BioBox k={open} onClose={() => setOpen(null)} onGo={go} />}
    </section>
  );
}

function FeedStart() {
  /* Let's Begin. spans the card from edge to edge: size the lettering to the width. */
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".fd-start .fd-script");
    if (!el) return;
    const fit = () => {
      const box = el.parentElement!.clientWidth;
      el.style.setProperty("font-size", "100px", "important");
      const r = document.createRange();
      r.selectNodeContents(el);
      const w = r.getBoundingClientRect().width;
      if (w > 0) el.style.setProperty("font-size", Math.min(300, (100 * box * 0.94) / w) + "px", "important");
      /* tuck the apostrophe in above the join between t and s, so the letters stay connected */
      const lets = el.querySelector<HTMLElement>(".fd-lets");
      const tn = lets ? Array.from(lets.childNodes).find((c) => c.nodeType === 3) : null;
      if (lets && tn) {
        const rr = document.createRange();
        rr.setStart(tn, 0);
        rr.setEnd(tn, 2);
        const sx = rr.getBoundingClientRect().right - lets.getBoundingClientRect().left;
        lets.style.setProperty("--ap-x", sx + "px");
      }
    };
    fit();
    document.fonts?.ready.then(fit);
    document.fonts?.load('100px "Monsieur La Doulaise"').then(fit);
    document.fonts?.load('100px "Pinyon Script Local"').then(fit);
    const t2 = window.setTimeout(fit, 1600);
    const t1 = window.setTimeout(fit, 700);
    window.addEventListener("load", fit);
    /* the footer continues the same sheet of lavender paper: offset its texture by this section's height */
    const sec = document.getElementById("office-hours");
    const ro = sec && "ResizeObserver" in window ? new ResizeObserver(() => document.documentElement.style.setProperty("--start-h", sec.offsetHeight + "px")) : null;
    if (sec && ro) ro.observe(sec);
    window.addEventListener("resize", fit);
    return () => { window.removeEventListener("resize", fit); window.removeEventListener("load", fit); window.clearTimeout(t1); window.clearTimeout(t2); ro?.disconnect(); };
  }, []);
  return (
    <section className="fd-frame fd-start fd-st fd-st-lav so-start-section" id="office-hours" aria-label="Start a project">
      <FeedFile>FILE NO. 006 · START A PROJECT</FeedFile>
      <p className="fd-script fd-hand fd-hand-mld" aria-label="Let’s Begin."><span className="fd-cap">L</span>et<span className="fd-ap">’</span>s <span className="fd-cap">B</span>egin.</p>
      <p className="fd-small">
        Tell me what you're making and what feels off. A few lines is plenty.
      </p>
      <ul className="fd-contact-strip">
        <li><a href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a></li>
        <li><a href="https://www.instagram.com/sundayoffice.ag" target="_blank" rel="noreferrer">@sundayoffice.ag</a></li>
        <li>Seattle, WA</li>
        <li>Replies in 2 to 3 business days</li>
      </ul>
      <div className="fd-sheet">
        <div className="so-office-card" id="inquiry">
          <p className="eyebrow-cap mt-4">The Inquiry</p>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div>
      <ScrollProgress />
      
      <ScriptWriter />
      <div className="page-paper" aria-hidden />
      <Header />
      <main className="fd-page">
        <FeedPhoto />
        <FeedServices />
        <FeedWork />
        {/* makeover section removed */}
        <FeedQuote />
        <FeedProof />
        <FeedLetter />
        <FeedStart />
      </main>
      <Footer />
      <MobileStartBar />
    </div>
  );
}