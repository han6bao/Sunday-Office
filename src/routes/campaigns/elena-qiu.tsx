import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseFacts } from "../../sunday/case-kit";
import { bookHref } from "../../sunday/service-kit";

export const Route = createFileRoute("/campaigns/elena-qiu")({
  head: () => seoHead("/campaigns/elena-qiu"),
  component: ElenaQiuPage,
});

const A = "/assets/campaigns/elena-qiu";

/* How I approached it. */
const APPROACH = [
  { t: "Feeling over details", d: "Other photographers at the show covered the details and specifics. My job was the story: how the outfits make you feel, and how they move when someone wears them." },
  { t: "Video and storytelling", d: "I shot as much film as stills. A few seconds of someone walking toward you says more about a garment than a flat lay ever will." },
  { t: "Directed posing", d: "I helped the models find poses that suit the clothes: low, close to the wall, leaning on each other. Nothing stiff, nothing that looks like a catalog." },
  { t: "Cold, cinematic color", d: "Washed whites, blue-green shadows and soft contrast, so the set feels like a still from a film instead of a product page." },
  { t: "Blurry on purpose", d: "A little motion blur keeps it effortless and real. The clothes look worn and lived in, the way they're meant to be." },
  { t: "A little haunting", d: "Darker and quieter than a typical show recap, to match the mood of her work." },
];

const FRAMES: { src: string; cap: string; video?: string }[] = [
  { src: `${A}/film-01-poster.jpg`, video: `${A}/film-01.mp4`, cap: "Film · two looks, face to face" },
  { src: `${A}/eq-01.jpg`, cap: "Two looks against the brick" },
  { src: `${A}/eq-03.jpg`, cap: "Crouched, with the cage skirt" },
  { src: `${A}/film-02-poster.jpg`, video: `${A}/film-02.mp4`, cap: "Film · walking in" },
  { src: `${A}/eq-04.jpg`, cap: "The whole set, frame by frame" },
];

const FOR_BRANDS = [
  { t: "Show and runway coverage", d: "Film and photos that capture how the collection moves." },
  { t: "Lookbooks and editorials", d: "Styled shoots with a story, planned around the collection." },
  { t: "Campaigns", d: "The idea, the direction, the shoot and the edit for a launch." },
  { t: "Content for every channel", d: "Clips and stills sized for your site, Instagram and TikTok." },
];

function ElenaQiuPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Cover */}
        <section className="eq-cover">
          <div className="eq-cover-text">
            <p className="so-micro so-micro-red">CAMPAIGN · FASHION EDITORIAL · NEW YORK</p>
            <h1 className="so-serif eq-title">Elena Qiu.</h1>
            <p className="eq-lead">
              Show editorials for a womenswear designer from Seattle, now in
              New York. Shot for movement, mood and story, and made to feel
              a little haunting.
            </p>
            <p className="so-micro mt-3">WOMENSWEAR · PHOTOS + FILM · 2023 SHOW</p>
          </div>
          <figure className="eq-cover-img">
            <img src={`${A}/eq-hero.jpg`} alt="A model in Elena Qiu's white cage skirt and crushed top, mid-step against a whitewashed brick wall" />
          </figure>
        </section>

        <CaseFacts
          items={[
            { k: "FOR", v: "Elena Qiu, womenswear designer" },
            { k: "WHAT I DID", v: "Show editorials, short films and posing direction" },
            { k: "SINCE", v: "We've worked together for years, on more than one collection" },
          ]}
        />

        <div className="so-case-cols" style={{ marginTop: 40, alignItems: "start", gap: "clamp(24px, 4vw, 56px)" }}>
          <div>
            <p className="so-micro">THE DESIGNER</p>
            <p className="scr-p">
              <strong>Elena Qiu</strong> is a Taiwanese-American designer who
              grew up in Seattle and now works in New York. She makes custom,
              one-of-a-kind womenswear with bold silhouettes, statement
              shoulders and layered textures, so women can take up space
              freely. Her work has been in <strong>Vogue</strong>, and she's
              been interviewed by <strong>CNN</strong>.
            </p>
          </div>
          <div>
            <p className="so-micro">THE LOOK</p>
            <p className="scr-p">
              Avant-garde with a little early 2000s Harajuku in it:
              asymmetric cuts, straps, ruffles and worn-in whites. It reads
              almost apocalyptic, like clothes that survived something. The
              photos needed to feel the same way.
            </p>
          </div>
        </div>

        <section className="scr-sec">
          <p className="so-micro">THE THINKING</p>
          <h2 className="so-serif scr-h">How it feels, <em>not how it's made.</em></h2>
          <p className="scr-p">
            These are editorials from her 2023 show. I've shot for her for
            years, and my photos have been part of her social media for a long
            time. For this show, my job was the feeling, not the details. Here's how I approached it.
          </p>
          <ol className="scr-roles">
            {APPROACH.map((r, i) => (
              <li key={r.t}>
                <span className="scr-no">{String(i + 1).padStart(2, "0")}</span>
                <div><p className="scr-rt">{r.t}</p><p className="scr-rd">{r.d}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="scr-sec">
          <p className="so-micro">THE EDITORIAL · PHOTOS + FILM</p>
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
          <p className="scr-p">
            More from our other projects is coming soon. See her collections at{" "}
            <a className="so-bw-inline" href="https://elenaqiu.com/" target="_blank" rel="noreferrer">elenaqiu.com ↗</a>
          </p>
        </section>

        <section className="scr-sec">
          <p className="so-micro">FOR DESIGNERS + FASHION BRANDS</p>
          <h2 className="so-serif scr-h">Your clothes deserve <em>a story.</em></h2>
          <p className="scr-p">
            If you design clothing, accessories or shoes, or run a fashion
            brand, I can help you campaign it. I'll plan the mood with you,
            direct the people wearing it and shoot photos and film that show
            how it moves and how it feels.
          </p>
          <div className="scr-pitch">
            {FOR_BRANDS.map((x) => (
              <div key={x.t}><p className="scr-rt">{x.t}</p><p className="scr-rd">{x.d}</p></div>
            ))}
          </div>
        </section>

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Got a collection <em>coming up?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Campaign", "Fashion campaign")} className="so-hs-btn is-light">Tell me about it →</a>
              <a href="/photography/creative" className="so-hs-more">More creative work</a>
            </div>
          </div>
        </section>

        <div style={{ marginTop: 56 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}
