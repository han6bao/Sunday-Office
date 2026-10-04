import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { useState } from "react";
import { BackHome, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";

export const Route = createFileRoute("/creative-direction-content")({
  head: () => seoHead("/creative-direction-content"),
  component: DirectionAndContentPage,
});

const NOTES: { t: string; d: string }[] = [
  { t: "PATTERN INTERRUPTION", d: "If everything in the feed looks the same, give the eye something unexpected. Change the framing, opening line, pace, crop, sound, or format." },
  { t: "THE FIRST LINE MATTERS", d: "“Here are our services” says less than “You probably don’t need everything we offer.” Give people a reason to keep reading." },
  { t: "MAKE IT FEEL LIKE YOU", d: "Trends can be useful, but copying one exactly usually isn't. Take the format and make it your own." },
  { t: "ONE IDEA, MULTIPLE LIVES", d: "A 20-minute conversation can become a long-form video, six short clips, a quote carousel, stories, stills, and a follow-up post." },
  { t: "EMOTION IS INFORMATION", d: "Funny, nostalgic, hopeful, curious, comforting, urgent. Decide how you want someone to feel before you decide what the post looks like." },
  { t: "THE TITLE IS PART OF THE DESIGN", d: "The right words can stop someone scrolling before the picture does. Hooks, captions and on-screen text deserve as much thought as the visuals." },
  { t: "NOT EVERYTHING NEEDS TO SELL", d: "Some posts help people recognize you, some build trust, some are just fun, and some make sales. A good feed needs a mix." },
  { t: "THE GRID IS THE STORY", d: "People visit your profile, not just one post. Plan how the whole feed and your highlights look together, not just each picture." },
  { t: "CONSISTENCY OUTRANKS PERFECTION", d: "Posting regularly in a voice people recognize does more than one perfect post. Keep showing up and get better as you go." },
  { t: "SOUND ON, SOUND OFF", d: "Lots of people watch on mute with captions, and lots listen closely. Make it work both ways." },
  { t: "THE SAVE IS THE NEW LIKE", d: "Saves and shares show that people actually valued something. Give them something worth keeping, like a list, a tip or a feeling." },
  { t: "MOOD BEFORE FORMAT", d: "Pick the feeling first, then the format. The same idea could be a story, a reel, a carousel or a photo." },
];

const PROOF = [
  { n: "2M+", d: "Views on one video" },
  { n: "8.5M", d: "Impressions, same video" },
  { n: "1M+", d: "Views on a video I pitched to Cut" },
  { n: "120K", d: "Views on a reel I shot" },
  { n: "49K+", d: "Reshares" },
];

const DIRECTION = ["Moodboards + references", "The look and feel", "Video ideas + pitches", "Casting the right people", "Styling + art direction", "Directing the shoot"];
const SOCIAL = ["Content plan + pillars", "Hooks, titles + captions", "Shooting + editing", "Graphics + templates", "Ongoing posting + rollout"];

const STEPS = [
  {
    t: "Find the feeling",
    d: "How it should feel and who it's for.",
    more: "Before anything gets made, we decide the feeling, the audience and what makes you different. References and a moodboard so we're both picturing the same thing.",
  },
  {
    t: "Plan the content",
    d: "Pillars, formats, a calendar.",
    more: "A simple plan: the few things you'll keep talking about, the formats that suit them, and a rhythm you can actually keep up with.",
  },
  {
    t: "Make it",
    d: "Shoot, edit, design.",
    more: "Photos, video, graphics and the words on top, all made to look like they belong together.",
  },
  {
    t: "Post + adjust",
    d: "Keep it going.",
    more: "It goes out on schedule, we watch what lands, and the next round gets better. Showing up consistently beats one perfect post.",
  },
];

function DirectionAndContentPage() {
  const [note, setNote] = useState(0);
  const n = NOTES[note];
  const title = n.t[0] + n.t.slice(1).toLowerCase();
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · CREATIVE DIRECTION + SOCIAL · SEATTLE"
          title="Creative Direction + Social."
          lead="First the direction: how it should feel, who it's for and how it shows up. Then the content that keeps it going, week after week."
          aside={
            <>
              Need video too? <a className="so-bw-inline" href="/moving-image">Moving Image →</a>
            </>
          }
          jumps={[
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Work", h: "#work" },
          ]}
        />

        <a href="/campaigns/exhibition" className="so-li-shot">
          <img src="/assets/campaigns/exhibition/exh7.jpg" alt="Exhibition, a creative direction and social campaign" style={{ aspectRatio: "21 / 9", objectFit: "cover", objectPosition: "center 40%" }} />
          <span className="so-li-cap">
            <span className="so-micro">FEATURED · EXHIBITION · CREATIVE DIRECTION + SOCIAL CAMPAIGN</span>
            <span className="so-micro so-li-cap-go">SEE THE PROJECT →</span>
          </span>
        </a>

        <section className="so-bw-sec" style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
          <p className="so-micro">WHEN THE WORK FINDS ITS AUDIENCE</p>
          <div className="so-cd-proof">
            {PROOF.map((p) => (
              <div key={p.d}>
                <b>{p.n}</b>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What you get — two halves */}
        <section id="get" className="so-bw-sec">
          <p className="so-micro">WHAT YOU GET</p>
          <h2 className="so-serif so-bw-h">Two halves of one job.</h2>
          <div className="so-cd-two">
            <div>
              <p className="so-bw-t">Creative direction</p>
              <p className="so-bw-d">The idea and the look, set before anything gets made.</p>
              <ul>
                {DIRECTION.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="so-bw-t">Social + content</p>
              <p className="so-bw-d">The posts that keep the world alive after launch.</p>
              <ul>
                {SOCIAL.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ServiceSteps steps={STEPS} />

        {/* Creative notes */}
        <section className="so-bw-sec">
          <button
            type="button"
            className="so-cd-note"
            onClick={() => setNote((c) => (c + 1) % NOTES.length)}
            aria-label="Show another creative note"
          >
            <span className="so-micro" style={{ color: "var(--color-verm)" }}>
              CREATIVE NOTE · {note + 1} OF {NOTES.length}
            </span>
            <span key={note} className="so-serif so-chapter-fade">{title}</span>
            <span className="so-bw-d">{n.d}</span>
            <span className="so-micro" style={{ marginTop: 14, color: "var(--color-stone)" }}>
              TAP FOR THE NEXT ONE →
            </span>
          </button>
        </section>

        <WorkCards
          label="DIRECTION + CONTENT I'VE DONE"
          items={[
            { t: "Exhibition", w: "Creative direction + social", d: "A campaign built from the idea outward.", img: "/assets/campaigns/exhibition/exh12.jpg", h: "/campaigns/exhibition" },
            { t: "Jaydyn F.", w: "Artist social", d: "BTS, clips and stills that kept him visible between drops.", img: "/assets/campaigns/jaydyn-f/jd-thumb.jpg", h: "/campaigns/jaydyn-f" },
            { t: "Selaras Haus", w: "Interior photography", d: "Angie Tiara's skin, scalp and makeup boutique.", img: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", h: "/campaigns/selaras-haus" },
          ]}
        />

        <ServiceCta current="direction" title="Let's make something real." sub="SET THE DIRECTION, THEN KEEP IT GOING." />

        <BackHome />
      </div>
    </div>
  );
}
