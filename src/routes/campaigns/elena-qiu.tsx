import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/elena-qiu")({
  head: () => seoHead("/campaigns/elena-qiu"),
  component: ElenaQiuPage,
});

const A = "/assets/campaigns/elena-qiu";

/* Photos and films from the latest editorial. Films sit in the same grid. */
const FRAMES: { src: string; cap: string; video?: string }[] = [
  { src: `${A}/film-01-poster.jpg`, video: `${A}/film-01.mp4`, cap: "Film · two looks, face to face" },
  { src: `${A}/eq-01.jpg`, cap: "Two looks against the brick" },
  { src: `${A}/eq-02.jpg`, cap: "Full length, in motion" },
  { src: `${A}/eq-03.jpg`, cap: "Crouched, with the cage skirt" },
  { src: `${A}/film-02-poster.jpg`, video: `${A}/film-02.mp4`, cap: "Film · walking in" },
  { src: `${A}/eq-04.jpg`, cap: "The details, frame by frame" },
];

function ElenaQiuPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">FASHION · EDITORIAL · NEW YORK</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 8vw, 96px)", marginTop: 14 }}>
          Elena Qiu.
        </h1>
        <p className="so-micro mt-3">WOMENSWEAR DESIGNER · FROM SEATTLE · BASED IN NEW YORK</p>
        <CaseFacts
          items={[
            { k: "FOR", v: "Elena Qiu, womenswear designer" },
            { k: "WHAT I DID", v: "Editorials for her shows, photos and short films" },
            { k: "SINCE", v: "We've worked together for years, on more than one collection" },
          ]}
        />

        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">THE DESIGNER</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            <strong>Elena Qiu</strong> grew up in Seattle and now designs
            womenswear in New York. Her work has been in <strong>Vogue</strong>,
            and she's been interviewed by <strong>CNN</strong>.
          </p>
        </div>

        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro">WORKING TOGETHER</p>
          <p style={{ marginTop: 12, lineHeight: 1.55 }}>
            I've shot editorials around her fashion shows for years, and my
            photos have been part of her social media for a long time. This
            is the latest one: soft whites, a brick wall and pieces that move.
            More from our other projects is coming soon.
          </p>
        </div>

        <div style={{ marginTop: 36, maxWidth: "58ch" }}>
          <p className="so-micro" style={{ textAlign: "center" }}>SEE HER WORK</p>
          <div className="mt-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 26px", maxWidth: 640, margin: "0 auto" }}>
            <a className="so-link-jump" href="https://elenaqiu.com/" target="_blank" rel="noreferrer">
              ELENAQIU.COM →
            </a>
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <p className="so-micro">THE LATEST EDITORIAL · PHOTOS + FILM</p>
          <div className="so-photo-grid mt-6">
            {FRAMES.map((ph, i) => (
              <div key={ph.src} className="so-photo-cell">
                {ph.video ? (
                  <video className="eq-film" controls playsInline muted loop preload="metadata" poster={ph.src}>
                    <source src={ph.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={ph.src} alt={`Elena Qiu editorial: ${ph.cap.toLowerCase()}`} loading="lazy" />
                )}
                <span className="so-photo-cap">
                  {String(i + 1).padStart(2, "0")}<span className="so-cap-label"> · {ph.cap}</span>
                </span>
              </div>
            ))}
          </div>
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
