import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useState } from "react";
import { CaseBookingCta } from "../../sunday/services";
import { TapStory } from "../../sunday/service-kit";

export const Route = createFileRoute("/campaigns/green-grillz")({
  head: () => seoHead("/campaigns/green-grillz"),
  component: GreenGrillzPage,
});

const PHOTOS = [
  { src: "/assets/campaigns/green-grillz/gg01.jpg", cap: "The green set · 01" },
  { src: "/assets/campaigns/green-grillz/gg02.jpg", cap: "The green set · 02" },
  { src: "/assets/campaigns/green-grillz/gg03.jpg", cap: "The green set · 03" },
  { src: "/assets/campaigns/green-grillz/gg04.jpg", cap: "The green set · 04" },
];

const FACTS = [
  { k: "CLIENT", v: "Marcus Adam, custom jeweler" },
  { k: "THE FACE", v: "Nine Vicious" },
  { k: "WHAT I DID", v: "Photography, marketing + promotion" },
  { k: "PHOTOS", v: "Sunday Office" },
];

const STORY = [
  {
    tab: "The jeweler",
    head: "Custom pieces for artists.",
    body: "Marcus Adam (@maarcusadam) is a private jeweler who makes custom grillz for artists. The work was already great. The goal was getting it in front of more of the right people.",
  },
  {
    tab: "The face",
    head: "Nine Vicious.",
    body: "Treyvion Echols, born in Athens, Georgia and raised in Atlanta. He went from SoundCloud uploads to one of the underground's fastest-rising names, broke through in 2024 with \"U Fancy?\", got the Young Thug co-sign and joined YSL. Pitchfork has compared his early work to Young Thug and Ken Carson.",
  },
  {
    tab: "The idea",
    head: "Let the face sell the piece.",
    body: "A strong image of the right person wearing the work does more than any product shot. So I photographed Nine in the green set and built the promotion around those photos.",
  },
  {
    tab: "What happened",
    head: "The image took on a life of its own.",
    body: "The post became the most-liked on Marcus's page and the promo post reached the discovery page. Then something I didn't see coming: people started using the photos as their own profile pictures. For a custom jeweler, that kind of visibility brings in new clients and keeps him top of mind.",
  },
  {
    tab: "Why it matters",
    head: "It works for any face with a purpose.",
    body: "It doesn't need to be a celebrity. An artist, a founder, a business with something to say: when the image looks like what you're building, the right people find you.",
  },
];

function GreenGrillzPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CASE FILE · MARKETING · CUSTOM JEWELRY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Nine Vicious × Custom Grillz.
        </h1>
        <p className="so-bw-intro-lead" style={{ marginTop: 18, maxWidth: "48ch" }}>
          I photographed Nine Vicious in jeweler Marcus Adam's custom grillz
          and helped promote them. It became the most-liked post on his page.
        </p>

        <dl className="so-eb-facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <dt className="so-micro">{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>

        <button type="button" className="so-gg-hero" onClick={() => setOpen(0)} aria-label="Open the hero photo">
          <img src={PHOTOS[0].src} alt="Nine Vicious wearing the green grillz" />
        </button>
        <p className="so-micro so-gg-cred">PHOTOGRAPHY BY SUNDAY OFFICE</p>

        {/* Results */}
        <section className="so-bw-sec">
          <p className="so-micro">THE RESULTS</p>
          <div className="so-gg-results">
            <div className="so-gg-res is-main">
              <p className="so-micro">HIS POST · MOST-LIKED ON HIS PAGE</p>
              <div className="so-gg-nums">
                <div><b>6K</b><span>likes</span></div>
                <div><b>389</b><span>reposts</span></div>
                <div><b>355</b><span>saves</span></div>
              </div>
            </div>
            <div className="so-gg-res">
              <p className="so-micro">THE PROMO POST · MADE THE DISCOVERY PAGE</p>
              <div className="so-gg-nums">
                <div><b>35K</b><span>views</span></div>
                <div><b>4,116</b><span>reposts</span></div>
                <div><b>635</b><span>shares</span></div>
              </div>
            </div>
            <div className="so-gg-res">
              <p className="so-micro">AND THEN</p>
              <p className="so-gg-pfp">The photo became people's profile picture.</p>
              <p className="so-bw-d" style={{ marginTop: 8 }}>
                Fans started using it as their own avatar on X and everywhere
                else. Nobody asked them to.
              </p>
            </div>
          </div>
        </section>

        <TapStory label="THE STORY" chapters={STORY} />

        {/* The set */}
        <section className="so-bw-sec">
          <p className="so-micro">THE SET · PHOTOGRAPHY BY SUNDAY OFFICE</p>
          <div className="so-gg-grid">
            {PHOTOS.slice(1).map((ph, i) => (
              <button key={ph.src} type="button" className="so-gg-cell" onClick={() => setOpen(i + 1)} aria-label={ph.cap}>
                <img src={ph.src} alt={ph.cap} loading="lazy" />
              </button>
            ))}
          </div>
          <div className="so-gg-links">
            <a className="so-bw-inline" href="https://www.instagram.com/maarcusadam/" target="_blank" rel="noreferrer">
              @maarcusadam ↗
            </a>
            <a className="so-bw-inline" href="https://www.instagram.com/ninevicious/" target="_blank" rel="noreferrer">
              @ninevicious ↗
            </a>
          </div>
        </section>

        {open !== null && (
          <div
            className="lb-overlay so-photo-lb"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(null);
            }}
          >
            <div className="so-photo-lb-card">
              <img src={PHOTOS[open].src} alt={PHOTOS[open].cap} />
              <div className="so-photo-lb-meta">
                <span className="so-micro">{PHOTOS[open].cap} · SUNDAY OFFICE</span>
                <button className="lb-btn" aria-label="Close" onClick={() => setOpen(null)}>
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        <CaseBookingCta note="HAVE SOMETHING PEOPLE SHOULD SEE? LET'S GET IT IN FRONT OF THEM." />

        <div style={{ marginTop: 40 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}
