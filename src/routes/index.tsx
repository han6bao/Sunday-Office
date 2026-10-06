import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { useEffect, useState } from "react";
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

function SecFile({ children }: { children: string }) {
  return (
    <div className="so-lock">
      <span className="so-micro">{children}</span>
      <hr className="so-rule" />
    </div>
  );
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
      className="so-serif"
      style={{ fontSize: `clamp(26px, 4vw, ${max}px)`, marginTop: 16, ...style }}
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
            <h2 className="so-serif so-build-title">Build your <em>world.</em></h2>
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
          <h2 className="so-serif so-proof-title">Worlds people actually <em>see.</em></h2>
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
              <h2 className="so-darkframe-title">Featured <em>work.</em></h2>
            </div>
            <div className="so-darkframe-meta">
              <span className="so-micro">FILE NO. 002 · SELECTED WORK · SEATTLE · 2023 TO 2026</span>
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
        <SecFile>FILE NO. 004 · MEET HANA</SecFile>
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
    items: ["Brand photo session (half day)", "4 short-form videos", "Website refresh or a new landing page", "Social media asset kit", "Your files organized in Google Drive or Dropbox"],
  },
  {
    n: "The Launch",
    who: "Everything you need to open, or reopen, like a premium brand.",
    items: ["Full custom website", "Brand kit: logo suite, colors, type, guidelines", "Full-day photo + video shoot", "30 days of ready-to-post content", "Launch strategy session", "Your files organized in Google Drive or Dropbox"],
    tag: "Full build",
  },
  {
    n: "The Signature",
    who: "A complete brand build or rebrand, with campaign-level content.",
    items: ["Everything in The Launch", "Brand campaign shoot (photo + video)", "Brand film", "Rollout plan and content calendar", "Priority scheduling"],
  },
  {
    n: "Monthly Content",
    who: "Ongoing content so your brand never goes quiet.",
    items: ["A pro shoot every month", "Posts, reels + captions, ready to publish", "Research + a monthly plan", "Canva templates you approve", "Your files organized in Google Drive or Dropbox"],
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
        <SecFile>FILE NO. 006 · START A PROJECT</SecFile>
        <div className="so-start-head">
          <BigTitle max={88}>Start <em>building.</em></BigTitle>
          <div className="so-start-side">
            <p>
              It doesn't need to be figured out. Tell me what you're making,
              what's not working, or what you wish it looked like. I reply
              within a few days.
            </p>
            <p className="so-micro">BOOKING NEW PROJECTS · SEATTLE</p>
          </div>
        </div>

        <ProjectQuiz />

        <div className="so-office-card" id="inquiry">
          <p className="eyebrow-cap mt-4">The inquiry</p>
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

function Index() {
  return (
    <div>
      <ScrollProgress />
      <SiteIntro />
      <div className="page-paper" aria-hidden />
      <Header />
<main>
        <Hero />
        <BuildYourWorld />
        <CurrentWork />
        <TheProof />
        <MeetHana />
        <Packages />
        <StartAProject />
      </main>
      <Footer />
      <MobileStartBar />
    </div>
  );
}