import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";
import { CaseBookingCta } from "../../sunday/services";

export const Route = createFileRoute("/campaigns/highway")({
  head: () => seoHead("/campaigns/highway"),
  component: HighwayPage,
});

const ARTIST = [
  {
    t: "WHO HE IS",
    d: "Highway (@highway2009) is a Seattle rapper who tells stories in his songs and cares a lot about how things look. His Monochrome project used sharp black-and-white images across his visuals and a limited apparel line.",
  },
  {
    t: "THE COVER",
    d: "I photographed the cover for his latest release, Forever (Count Fast Millionaire). The cover and the rest of the content came from one session.",
  },
  {
    t: "THE LOOK",
    d: "Low light, heavy film grain and high contrast, all in monochrome so the music and the clothes feel connected. We kept everything in shades of charcoal.",
  },
];

const PROCESS = [
  {
    t: "THE OPENING",
    d: "When I got to the shoot, he already had the whole concept. So I stayed open, took his creative direction and saw what I could do with it.",
  },
  {
    t: "THE TEST SHOTS",
    d: "I gave him some test shots first, with quick edits so he could see the direction before we committed. He liked them, so we went with it.",
  },
  {
    t: "THE DELIVERY",
    d: "The photos from that session became his cover and ran on his socials.",
  },
];

function HighwayPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">MUSIC · ALBUM COVER · PHOTOGRAPHY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 88px)", marginTop: 14 }}>
          Highway.
        </h1>
        <p className="so-micro mt-3">@HIGHWAY2009 · SEATTLE, WA · FOREVER (COUNT FAST MILLIONAIRE) · COVER PHOTO BY HANA</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Highway, Seattle rapper" },
            { k: "WHAT I DID", v: "Album cover photo, test shots, promo photos" },
            { k: "RESULT", v: "Used as the cover of Forever (Count Fast Millionaire) and on his socials" },
          ]}
        />
        <hr className="so-rule mt-6" />

        <CaseRead label="THE ARTIST" items={ARTIST.map((x) => ({ t: x.t, d: x.d }))} />

        {/* The cover */}
        <div style={{ marginTop: 44 }}>
          <img
            src="/assets/campaigns/highway-chitos/forever-cover.jpg"
            alt="Forever (Count Fast Millionaire) album cover"
            loading="lazy"
            style={{ width: "100%", maxWidth: 420, display: "block", borderRadius: 14, aspectRatio: "1 / 1", objectFit: "cover" }}
          />
          <p className="so-micro" style={{ marginTop: 10, color: "var(--color-verm)", letterSpacing: "0.14em" }}>
            FOREVER (COUNT FAST MILLIONAIRE) · COVER PHOTO BY HANA
          </p>
          <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="so-link-jump" href="https://soundcloud.com/highway2009/sets/forever" target="_blank" rel="noreferrer">
              FOREVER · SOUNDCLOUD →
            </a>
            <a className="so-link-jump" href="https://soundcloud.com/highway2009" target="_blank" rel="noreferrer">
              @HIGHWAY2009 →
            </a>
            <a className="so-link-jump" href="https://www.instagram.com/p/DY9dDCtGy0H/" target="_blank" rel="noreferrer">
              THE POST · INSTAGRAM →
            </a>
          </div>
        </div>

        <CaseRead label="MY PROCESS" items={PROCESS.map((x) => ({ t: x.t, d: x.d }))} />

        {/* For album covers */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">FOR YOUR ALBUM COVER</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            You can bring the concept, or we can build it together. World
            building is part of what I do, so we can start with the idea and
            bring the camera in after. I send test shots first, we agree on
            the direction, and then I deliver the photos.
          </p>
          <div className="mt-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="so-link-jump" href="/branding">
              WORLD BUILDING · BUILD A WORLD FIRST →
            </a>
          </div>
        </div>

        {/* The collab */}
        <div style={{ marginTop: 44, maxWidth: "58ch" }}>
          <p className="so-micro">THE COLLABORATION</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            Count Boss was the shoot that put Highway and CHITO in the same
            photos, styled in Chitos International monochrome. It brought
            Seattle's music and graffiti scenes together in one session.
          </p>
          <div className="mt-3">
            <a className="so-link-jump" href="/campaigns/chitos">
              CHITOS INTERNATIONAL · THE OTHER HALF →
            </a>
          </div>
        </div>

        {/* The set */}
        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE SET · A FEW FRAMES · PHOTOS BY HANA</p>
          <div className="so-photo-grid mt-6">
            {[
              { src: "/assets/campaigns/highway-chitos/hc01.jpg", cap: "frame 01" },
              { src: "/assets/campaigns/highway-chitos/hc02.jpg", cap: "frame 02" },
              { src: "/assets/campaigns/highway-chitos/hc03.jpg", cap: "frame 03" },
            ].map((ph) => (
              <div key={ph.src} className="so-photo-cell">
                <img src={ph.src} alt={ph.cap} loading="lazy" />
                <span className="so-photo-cap">{ph.cap}</span>
              </div>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 12, color: "var(--color-stone)" }}>
            MORE FROM THE SET ON THE POST · @HIGHWAY2009
          </p>
        </div>

        <CaseBookingCta />

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}