import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
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
  ProjectFinder,
  DirectoryAccordion,
  InquiryForm,
  Reveal,
  SiteIntro,
  HeroOrb,
  ScrollProgress,
  NavState,
} from "../sunday/client-motion";
import { Hero } from "../sunday/hero";

export const Route = createFileRoute("/")({
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
        <details className="so-mobile-menu" style={{ position: "relative" }}>
          <summary className="so-nav-burger" aria-label="Menu" style={{ cursor: "pointer", listStyle: "none" }}>
            Menu
          </summary>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 48,
              background: "var(--color-cream)",
              border: "1px solid var(--color-sepia)",
              padding: "10px 18px",
              display: "grid",
              gap: 6,
              minWidth: 180,
              boxShadow: "0 12px 30px rgba(15,30,51,0.12)",
            }}
          >
            {navLinks.map((l) => (
              <a key={l.href} className="so-nav-link" href={l.href}>
                {l.label}
              </a>
            ))}
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

function WhoWeAre() {

  return (
    <Section id="about">
      <div className="so-shell">
        <SecFile>FILE NO. 001 · WHO WE ARE</SecFile>
        <div className="so-about-grid">
          <div>
            <p className="eyebrow-cap so-about-eyebrow">
              SUNDAY OFFICE IS AN INDEPENDENT CREATIVE AGENCY.
            </p>
            <p className="so-about-copy">
              Photography is where we begin most naturally. But the work can
              become a website, a campaign, a film, a visual identity, a
              content system, or something we haven't named yet. The point
              isn't to make more things. It's to figure out what actually
              needs to be made.
            </p>
            <p className="so-about-copy" style={{ marginTop: 18 }}>
              Artists and celebrities have sat in front of the lens —
              along with first-time founders and everyone in between. Same
              care either way: make it feel like them.
            </p>
            <Reveal delay={0.05}>
              <div className="so-manifesto mt-8">
                <span className="line">
                  Strategy in <em>mind.</em>
                </span>
                <span className="line">
                  Culture at <em>heart.</em>
                </span>
                <span className="line">
                  Story in <em>everything.</em>
                </span>
              </div>
            </Reveal>
          </div>
<div className="so-fu-seal">
            <span className="so-stamp-plain">
              <BlessingStamp size={120} color="var(--color-emboss)" />
            </span>
            <p className="so-micro so-fu-seal-cap">
              福祿壽 — FORTUNE · PROSPERITY · LONGEVITY
            </p>
          </div>
        </div>
      </div>
    </Section>
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
              <h2 className="so-darkframe-title">Featured Work</h2>
            </div>
            <div className="so-darkframe-meta">
              <span className="so-micro">FILE NO. 002 · SELECTED 2023–2026</span>
              <span className="so-lab so-df-hint">DRAG / SWIPE → CLICK</span>
            </div>
          </div>
        </div>
        <DarkGallery items={currentWork} />
        <div className="so-shell">
          <p
            className="so-micro so-print-dark-dim"
            style={{ marginTop: 22 }}
          >
            THE WORK BELOW IS HELD IN THE OFFICE'S DARKROOM FRAME · EACH PROJECT
            WILL OPEN WITH ITS OWN STORY
          </p>
        </div>
      </div>
    </Section>
  );
}

function WhatWeDo() {
  const rooms = [
    { t: "Brand + Identity →", d: "The world behind the work — strategy, identity, image, digital, direction, content.", h: "/branding" },
    { t: "Websites + Digital →", d: "Where the world lives — websites, digital experiences, landing pages, interactive work.", h: "/websites" },
    { t: "Photography + Moving Image →", d: "What the world looks like — photography, campaigns, reels, brand films, music visuals.", h: "/photography" },
    { t: "Creative Direction + Social →", d: "How the world comes together — concept development, campaigns, art direction, social + content direction.", h: "/creative-direction-content" },
  ];
  return (
    <Section id="what-we-do">
      <div className="so-shell">
        <p className="so-micro so-micro-red">FILE NO. 003 · WHAT WE DO · THE FOUR ROOMS</p>
        <p className="so-serif" style={{ fontSize: "clamp(30px, 4.4vw, 50px)", marginTop: 14, lineHeight: 1.15, maxWidth: "22ch" }}>
          We build worlds.
        </p>
        <p style={{ marginTop: 12, maxWidth: "52ch", color: "var(--color-print)" }}>
          Four rooms, every part of the work. Start with one or build the
          whole world.
        </p>
        <p className="so-serif" style={{ marginTop: 18, fontStyle: "italic", color: "#55286F", fontSize: "clamp(16px, 2vw, 22px)", marginBottom: 0 }}>
          brand. digital. image. direction.
        </p>
                <div
          style={{
            margin: "38px auto 0",
            maxWidth: "86ch",
            border: "1px solid var(--color-sepia)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {rooms.map((r, i) => (
              <a
                key={r.t}
                href={r.h}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  borderTop: i >= 2 ? "1px solid var(--color-sepia)" : "none",
                  borderLeft: i % 2 === 1 ? "1px solid var(--color-sepia)" : "none",
                  padding: "26px 26px 22px",
                  minHeight: 170,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-verm)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-print)")}
              >
                <p className="so-serif" style={{ fontSize: "clamp(18px, 2.3vw, 26px)", margin: 0, color: "var(--color-stone)" }}>
                  {r.t}
                </p>
                <p className="so-micro" style={{ marginTop: 8, color: "var(--color-stone)", lineHeight: 1.6, letterSpacing: "0.06em" }}>
                  {r.d}
                </p>
                <p className="so-micro" style={{ marginTop: 14, color: "var(--color-verm)", letterSpacing: "0.16em", fontWeight: 700 }}>
                  OPEN →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function MeetHana() {
  return (
    <Section id="about-hana">
      <div className="so-shell">
        <SecFile>FILE NO. 004 · MEET HANA</SecFile>
        <BigTitle>Meet Hana.</BigTitle>
        <p className="so-micro mt-3">
          PHOTOGRAPHER / CREATIVE DIRECTOR / FOUNDER
        </p>
        <div className="so-profile mt-8">
          <Parallax range={[-10, 10]}>
            <div>
              <img
                src="/assets/hana-portrait.jpg"
                alt="Hana — portrait"
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  borderRadius: 16,
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
                <p style={{ marginTop: 6 }}>Seattle / Tacoma</p>
              </div>
              <div className="so-profile-credit">
                <p className="so-micro">ROLE</p>
                <p style={{ marginTop: 6 }}>Founder / Creative Director / Photographer</p>
              </div>
              <div className="so-profile-credit" style={{ borderTop: 0 }}>
                <p className="so-micro">OFFICE</p>
                <p style={{ marginTop: 6 }}>Sunday</p>
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

function WhatYouNeed() {
  return (
    <Section id="finder" className="so-black-block">
      <div className="so-shell">
        <SecFile>FILE NO. 005 · WHAT DO YOU NEED?</SecFile>
        <div className="so-quiz-intro">
          <big className="so-serif so-big-line">
            Enough about us.
          </big>
          <p className="so-quiz-copy">
            What are you working on? If you're not sure what you need, that is
            kind of our job — answer a few questions and we'll point you
            somewhere useful.
          </p>
        </div>
        <div className="mt-8">
          <ProjectFinder />
        </div>
      </div>
    </Section>
  );
}

function TheDirectory() {
  return (
    <Section id="directory">
      <div className="so-shell">
        <SecFile>FILE NO. 006 · THE DIRECTORY</SecFile>
        <BigTitle>The Directory</BigTitle>
        <p style={{ maxWidth: "46ch", marginTop: 14, color: "var(--color-print)" }}>
          A clean index of everything Sunday Office can do. Photography is
          where we begin; the rest is where the idea goes. Open a category to
          see what sits under it.
        </p>
        <div className="mt-8">
          <DirectoryAccordion />
        </div>
      </div>
    </Section>
  );
}

function OfficeHours() {
  return (
    <Section id="office-hours" style={{ paddingBlock: "clamp(26px, 4vw, 48px)" }}>
      <div className="so-shell">
        <SecFile>FILE NO. 007 · OFFICE HOURS</SecFile>
        <BigTitle max={64}>Office Hours</BigTitle>
        <div className="so-office-card">
          <p className="eyebrow-cap mt-4">Have something in mind?</p>
          <p style={{ maxWidth: "52ch", marginTop: 12, color: "var(--color-print)" }}>
            It doesn't need to be completely figured out. Tell us what you're
            making, what's not working, or what you wish it looked like.
          </p>
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
              PHOTOGRAPHY-LED CREATIVE WORK FOR PEOPLE WITH SOMETHING WORTH
              SEEING
            </p>
            <div className="mt-4">
              <SunMark size={34} color="#f4eff5" />
            </div>
          </div>
          <div>
            <h5>Office</h5>
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
            <a className="foot-link" href="#">
              Seattle / Tacoma
            </a>
            <a className="foot-link" href="mailto:hello@sundayoffice.agency">
              hello@sundayoffice.agency
            </a>
            <a className="foot-link" href="https://www.instagram.com/sundayoffice.ag">
              @sundayoffice.ag
            </a>
          </div>
        </div>
        <div className="so-footer-bottom">
          <p className="so-micro">© 2026 SUNDAY OFFICE — ALL RIGHTS RESERVED</p>
          <div className="so-footer-seals">
            <SunMark size={26} color="#f4eff5" />
            <span className="so-stamp-plain">
              <BlessingStamp size={40} color="var(--color-emboss)" />
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

function Index() {
  return (
    <div>
      <ScrollProgress />
      <SiteIntro />
      <div className="page-paper" aria-hidden />
      <Header />
<main>
        <Hero />
        <WhoWeAre />
        <CurrentWork />
        <WhatWeDo />
        <MeetHana />
        <WhatYouNeed />
        <TheDirectory />
        <OfficeHours />
      </main>
      <Footer />
    </div>
  );
}