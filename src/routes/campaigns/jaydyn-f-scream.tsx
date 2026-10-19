import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SwipeFeed, type FeedFrame } from "../../sunday/swipe-feed";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseFacts } from "../../sunday/case-kit";
import { bookHref } from "../../sunday/service-kit";

export const Route = createFileRoute("/campaigns/jaydyn-f-scream")({
  head: () => seoHead("/campaigns/jaydyn-f-scream"),
  component: ScreamPage,
});

const A = "/assets/campaigns/jaydyn-f";
const VIDEO = "https://www.youtube.com/watch?v=0UHpD8zIySQ";

/* What I did on the release. */
const ROLES = [
  { t: "Lighting", d: "I helped with the lights and the flashes all through the video." },
  { t: "Production assistant", d: "Carrying gear, helping direct people and keeping the shoot moving." },
  { t: "Set photographer", d: "Stills shot alongside the video, then edited by me. The color and mood in the photos are my edit." },
  { t: "Behind the scenes", d: "Photos and clips from the whole day, made to be posted." },
  { t: "Styled shoots", d: "Separate portrait setups for the cover, the profiles and the rollout." },
  { t: "The look", d: "The small details on him before every take, so every frame was ready." },
];

/* The feed: photos and clips from the release, swiped like a post.
   Add more frames here; a clip just needs `video` (an .mp4) and a poster `src`. */
const S = `${A}/scream`;
const FEED: FeedFrame[] = [
  { src: `${S}/sc-01.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1672, h: 941 },
  { src: `${S}/sc-02.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1086, h: 1448 },
  { src: `${S}/sc-03.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1536, h: 1024 },
  { src: `${S}/sc-04.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-05.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1536, h: 1024 },
  { src: `${S}/sc-06.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-07.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1122, h: 1402 },
  { src: `${S}/sc-08.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1024, h: 1536 },
  { src: `${S}/sc-09.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1800, h: 1012 },
  { src: `${S}/sc-10.jpg`, alt: "Jaydyn F. in a white jacket, hands over his face, three frames side by side", set: "styled", w: 1800, h: 1012 },
  { src: `${S}/sc-11.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1122, h: 1402 },
  { src: `${S}/sc-12.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1620, h: 1080 },
  { src: `${S}/sc-13.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-14.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-15.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-16.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1200, h: 1800 },
  { src: `${S}/sc-17.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1108, h: 1387 },
  { src: `${S}/sc-18.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1800, h: 1200 },
  { src: `${S}/sc-19.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-20.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-21.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-22.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-23.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1536, h: 1024 },
  { src: `${S}/sc-24.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1086, h: 1448 },
  { src: `${S}/sc-25.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1800, h: 1200 },
  { src: `${S}/sc-26.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-27.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-28.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-29.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-30.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1536, h: 1024 },
  { src: `${S}/sc-31.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1086, h: 1448 },
  { src: `${S}/sc-32.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1672, h: 941 },
  { src: `${S}/sc-33.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1200, h: 1800 },
  { src: `${S}/sc-34.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-35.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-36.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 926, h: 1646 },
  { src: `${S}/sc-37.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1080, h: 1620 },
  { src: `${S}/sc-38.jpg`, alt: "Jaydyn F. on the SCREAM studio set, lit with spotlights and red lasers", set: "studio", w: 1200, h: 1800 },
  { src: `${S}/sc-39.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1024, h: 1536 },
  { src: `${S}/sc-40.jpg`, alt: "Masked figures in white in a field at golden hour, from the SCREAM shoot", set: "field", w: 1672, h: 941 },
  { src: `${S}/sc-41.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1012, h: 1800 },
  { src: `${S}/sc-42.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1200, h: 1800 },
  { src: `${S}/sc-43.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1800, h: 1200 },
  { src: `${S}/sc-44.jpg`, alt: "Behind the scenes on the SCREAM music video shoot", set: "bts", w: 1200, h: 1800 },
];
const SET_NAMES = { studio: "Studio set", field: "Field set", bts: "Behind the scenes", styled: "Styled shoot" };

/* The music video. Loads YouTube only when someone presses play,
   and always offers the YouTube link in case the player can't load. */
function VideoCover() {
  const [on, setOn] = useState(false);
  return (
    <div className="scr-frame scr-hero">
      {on ? (
        <iframe
          src="https://www.youtube-nocookie.com/embed/0UHpD8zIySQ?autoplay=1&rel=0"
          title="Jaydyn F. SCREAM, official music video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="scr-cover"
          onClick={() => {
            // Previews can't load YouTube inside the page, so open it on YouTube there.
            if (/claude|anthropic|usercontent/.test(window.location.hostname)) window.open(VIDEO, "_blank", "noreferrer");
            else setOn(true);
          }} aria-label="Play the SCREAM music video">
          <span className="so-micro">JAYDYN F. · OFFICIAL MUSIC VIDEO</span>
          <span className="scr-cover-t">SCREAM</span>
          <span className="scr-play" aria-hidden="true">▶</span>
          <span className="so-micro">PRESS PLAY</span>
        </button>
      )}
    </div>
  );
}

/* For other artists: what one release day can turn into. */
const FOR_ARTISTS = [
  { t: "A set that looks like the song", d: "Light and mood planned with your director, so the video feels like a world." },
  { t: "Stills from the same day", d: "Cover art, profile pictures and press photos without booking a second shoot." },
  { t: "Weeks of teasers", d: "Behind the scenes photos and clips you can post before, during and after the drop." },
  { t: "One look everywhere", d: "Your YouTube, Spotify, Apple Music and Instagram all match the new era." },
];

function ScreamPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">CAMPAIGN · MUSIC VIDEO RELEASE · SEATTLE</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 9vw, 112px)", marginTop: 14 }}>
          Jaydyn F. · SCREAM.
        </h1>
        <p className="so-micro mt-3">A NEW SINGLE, ITS MUSIC VIDEO AND EVERYTHING AROUND IT</p>

        <VideoCover />
        <p className="scr-credits">
          Shot and edited by Real World Jake · Creative direction by Jaydyn F. and Real World Jake · Produced by Jaydyn F. · PA, lighting and photos by Hana ·{" "}
          <a className="so-bw-inline" href={VIDEO} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
        </p>

        <CaseFacts
          items={[
            { k: "FOR", v: "Jaydyn F., Seattle rapper" },
            { k: "THE RELEASE", v: "SCREAM, single and music video, October 2026" },
            { k: "MY PART", v: "Lighting, PA, set photographer, behind the scenes and styled shoots" },
          ]}
        />

        <div className="so-case-cols scr-who" style={{ marginTop: 40, alignItems: "start" }}>
          <div>
            <p className="so-micro">THE ARTIST</p>
            <p className="scr-p">
              <strong>Jaydyn F.</strong> is part of Seattle's underground rap
              scene. He makes music, throws shows and brings local artists,
              touring names and friends into the same room. SCREAM is his new
              single, and he produced the video himself.
            </p>
          </div>
          <div>
            <p className="so-micro">THE DIRECTOR · REAL WORLD JAKE</p>
            <p className="scr-p">
              <strong>Real World Jake</strong> (
              <a className="so-bw-inline" href="https://www.instagram.com/realwrldjake/" target="_blank" rel="noreferrer">@realwrldjake</a>)
              is a music video director and editor managed by Zero Zero MGMT.
              He's worked with artists like Bhad Bhabie, TEZZUS and Lil Tracy.
              He shot and edited SCREAM, and shared creative direction with
              Jaydyn. We're all Seattle creators.
            </p>
          </div>
        </div>


        <section className="scr-sec">
          <p className="so-micro">WHAT I DID</p>
          <h2 className="so-serif scr-h">From the light to <em>the last frame.</em></h2>
          <ol className="scr-roles">
            {ROLES.map((r, i) => (
              <li key={r.t}>
                <span className="scr-no">{String(i + 1).padStart(2, "0")}</span>
                <div><p className="scr-rt">{r.t}</p><p className="scr-rd">{r.d}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="scr-sec scr-roll">
          <div className="scr-roll-text">
            <p className="so-micro">THE ROLLOUT</p>
            <h2 className="so-serif scr-h">The photos became <em>the release.</em></h2>
            <p className="scr-p">
              Before the drop, Jaydyn had a whole gallery of assets to tease
              the song. He posted snippets on his stories with the photos and
              behind the scenes clips, so people saw the new era before they
              heard it.
            </p>
            <p className="scr-p">
              The photos kept going after that. He used them for his profile
              pictures and backgrounds on Spotify and Apple Music, changing
              them as the release went on. This blue frame became his YouTube
              profile picture.
            </p>
            <a className="so-bw-inline" href={VIDEO} target="_blank" rel="noreferrer">See it on his YouTube ↗</a>
          </div>
          <figure className="scr-roll-img">
            <img src={`${A}/scream-blue.jpg`} alt="Jaydyn F. crouched in blue haze with a red laser line across the frame" loading="lazy" />
            <figcaption className="so-micro">His YouTube profile picture</figcaption>
          </figure>
        </section>

        <section className="scr-sec" id="gallery">
          <p className="so-micro">THE GALLERY</p>
          <h2 className="so-serif scr-h">Everything I made <em>for the release.</em></h2>
          <p className="scr-rd" style={{ marginTop: 10 }}>Two locations, a studio and a field, plus the behind the scenes and the styled shoot. Swipe through, or pick a set.</p>
          <SwipeFeed frames={FEED} sets={SET_NAMES} />
        </section>

        <section className="scr-sec">
          <p className="so-micro">FOR ARTISTS + CREATORS</p>
          <h2 className="so-serif scr-h">Dropping something? <em>Bring me in early.</em></h2>
          <p className="scr-p" style={{ maxWidth: "58ch" }}>
            A release is more than a video. When I'm on set from the start, one
            day gives you the film, the photos and enough content to carry the
            whole rollout.
          </p>
          <div className="scr-pitch">
            {FOR_ARTISTS.map((x) => (
              <div key={x.t}><p className="scr-rt">{x.t}</p><p className="scr-rd">{x.d}</p></div>
            ))}
          </div>
        </section>

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Got a release <em>coming up?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Campaign", "Music video + release content")} className="so-hs-btn is-light">Tell me about it →</a>
              <a href="/campaigns/jaydyn-f" className="so-hs-more">More work with Jaydyn</a>
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
