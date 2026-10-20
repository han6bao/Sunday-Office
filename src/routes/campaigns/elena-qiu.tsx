import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseFacts } from "../../sunday/case-kit";
import { bookHref } from "../../sunday/service-kit";
import { SwipeFeed, type FeedFrame } from "../../sunday/swipe-feed";

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

/* The editorial as a swipe feed: clips from the day mixed with the stills. */
const C = `${A}/clips`;
const clip = (n: string, cap: string, h = 1080): FeedFrame => ({ src: `${C}/${n}.jpg`, video: `${C}/${n}.mp4`, alt: `A clip from the Elena Qiu editorial: ${cap.toLowerCase()}`, set: "clip", cap, w: 720, h });
const photo = (n: string, cap: string): FeedFrame => ({ src: `${A}/${n}.jpg`, alt: `Elena Qiu editorial: ${cap.toLowerCase()}`, set: "photo", cap });
const FEED: FeedFrame[] = [
  { ...clip("eqv-recap", "The recap", 960), sound: true },
  photo("eq-01", "Two looks against the brick"),
  clip("eqv-15", "Face to face"),
  photo("eq-hero", "Mid-step in the cage skirt"),
  clip("eqv-11", "Upside down"),
  clip("eqv-12", "Close to the lens"),
  photo("eq-03", "Crouched, with the cage skirt"),
  clip("eqv-14", "Against the wall"),
  clip("eqv-17", "Eyes closed", 1086),
  photo("eq-04", "The whole set, frame by frame"),
  clip("eqv-13", "Turning away"),
  clip("eqv-02", "Hand to face", 1086),
  clip("eqv-walk", "Walking in", 900),
  clip("eqv-16", "The cage skirt, moving", 1086),
];
const SETS = { clip: "Clips", photo: "Photos" };

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
        <section className="eq-cover2">
          <div className="eq-cover2-name">
            <p className="so-micro so-micro-red">CAMPAIGN · FASHION EDITORIAL</p>
            <h1 className="so-serif eq-title">Elena Qiu.</h1>
          </div>
          <span className="eq-cover2-rule" aria-hidden="true" />
          <div className="eq-cover2-text">
            <p className="eq-lead">
              Show editorials for a fashion designer from Seattle, now in New
              York. Shot for movement, mood and story, and made to feel a
              little haunting.
            </p>
            <p className="so-micro mt-3">PHOTOS + FILM · 2023 SHOW</p>
          </div>
        </section>
        <figure className="eq-cover-film">
          <video autoPlay muted loop playsInline preload="auto" poster={`${A}/clips/eq-hero.jpg`} aria-label="Models in Elena Qiu's white pieces against a whitewashed brick wall">
            <source src={`${A}/clips/eq-hero.mp4`} type="video/mp4" />
            <source src={`${A}/clips/eq-hero.webm`} type="video/webm" />
          </video>
        </figure>

        <CaseFacts
          items={[
            { k: "FOR", v: "Elena Qiu, fashion designer" },
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
              one-of-a-kind pieces with bold silhouettes, statement
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
          <p className="so-micro">THE EDITORIAL · CLIPS + STILLS</p>
          <p className="scr-rd" style={{ marginTop: 10 }}>Swipe through the clips and stills. The clips play on their own.</p>
          <SwipeFeed frames={FEED} sets={SETS} />
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
