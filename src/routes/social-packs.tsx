import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BookBar, FaqList, bookHref } from "../sunday/service-kit";
import { Glossary } from "../sunday/help-kit";

export const Route = createFileRoute("/social-packs")({
  head: () => seoHead("/social-packs"),
  component: SocialPacksPage,
});

const IN_PACK = [
  { t: "Posts", d: "Announcements, offers, quotes, before + afters" },
  { t: "Carousels", d: "Swipe-through posts for tips, menus and how it works" },
  { t: "Stories", d: "Daily stories, polls, this week, now booking" },
  { t: "Reel covers", d: "So your Reels grid looks like one brand" },
  { t: "Highlight covers", d: "Little icons for the circles on your profile" },
  { t: "Story stickers", d: "Small graphics in your colors to drop on any story" },
  { t: "Flyer + price menu", d: "For your counter, your window or a DM" },
  { t: "Promo + email header", d: "For sales, launches and your newsletter" },
  { t: "Caption guide", d: "How your brand talks, with lines you can reuse" },
];

const WHAT = [
  { t: "It's free to start", d: "Canva has a free plan, and your social pack is built to work on it. Canva Pro adds extras like one-click resizing and scheduling, but you don't need it." },
  { t: "It works anywhere", d: "Use it in your web browser at canva.com, or download the Canva app on your phone, tablet or computer. Your designs follow you everywhere you log in." },
  { t: "It's made for people who aren't designers", d: "Everything is click, drag and type. If you can post a story, you can use Canva." },
];

type Step = { t: string; desk: string; phone: string; tip?: string };

const STEPS: Step[] = [
  {
    t: "Make a free Canva account",
    desk: "Go to canva.com and click Sign up. Use your Google account, Apple ID or email. Use the email you want your business designs saved under.",
    phone: "Download the Canva app from the App Store or Google Play, open it and tap Sign up. Use the same email you'll use on your computer, so everything stays in one place.",
    tip: "Already have Canva? Just log in. Skip to step 2.",
  },
  {
    t: "Open your social pack link",
    desk: "I'll send you one link for your whole pack. Click it while you're logged in to Canva.",
    phone: "Tap the link I send you. If it asks, choose to open it in the Canva app.",
    tip: "Save the link somewhere safe, like your notes. You can always use it to get a fresh copy.",
  },
  {
    t: "Make your own copy",
    desk: "Click Use template for new design. This makes a copy that's yours to change. The original stays untouched.",
    phone: "Tap Use template for new design. Your copy now lives in your Canva account under Projects.",
    tip: "Messed something up? Open the link again and you get a clean copy.",
  },
  {
    t: "Add your photos",
    desk: "On the left side, click Uploads, then Upload files, and pick your photos.",
    phone: "Tap the + button, then Uploads, and choose photos from your camera roll.",
    tip: "Shooting with me? Your photos are already in. Skip ahead.",
  },
  {
    t: "Swap a photo",
    desk: "Drag a photo from Uploads right onto the photo in the design. It snaps into place. Double-click it to move or zoom it inside the frame.",
    phone: "Tap the photo in the design, tap Replace, and pick your picture. Pinch to zoom or move it inside the frame.",
  },
  {
    t: "Change the words",
    desk: "Double-click any text to type over it. Keep the same font and color, they're already set to your brand.",
    phone: "Double-tap any text, type your new words, then tap Done.",
    tip: "If the text gets too long for the box, shorten it before you shrink it.",
  },
  {
    t: "Download it",
    desk: "Click Share at the top right, then Download. Choose PNG for posts and stories, or MP4 if it moves. Pick just the pages you want.",
    phone: "Tap the share icon at the top, then Download, or share straight to Instagram.",
  },
  {
    t: "Post it",
    desk: "Upload the file to Instagram, Facebook or TikTok like any other photo. Paste in a caption from your caption guide.",
    phone: "Open Instagram, pick the image from your camera roll, add your caption and post.",
    tip: "That's it. Next week, duplicate the page and change the photo and words.",
  },
];

const DO = [
  "Keep your fonts and colors. They're what makes it look like you",
  "Use one idea per post",
  "Use your own bright, sharp photos",
  "Duplicate a page before you change it, so you keep the original",
];
const DONT = [
  "Stretch or recolor your logo",
  "Add a new font for fun",
  "Fill every empty space. Space is part of the design",
  "Use photos saved from Google. They're often blurry, and they're not yours to use",
];

const PHOTO_TIPS = [
  { t: "Bright", d: "Daylight by a window beats overhead lights." },
  { t: "Sharp", d: "Tap your phone screen to focus before you shoot." },
  { t: "Right way up", d: "Vertical for stories, vertical or square for posts." },
  { t: "Yours", d: "Your space, your work, your people, your product." },
];

const WORDS = [
  { w: "Template", d: "A design that's already made, so you only change the photo and words." },
  { w: "Social pack", d: "Your set of templates, all in your brand, ready to post." },
  { w: "Frame", d: "A photo spot in a design. Drop a picture on it and it fills the shape." },
  { w: "Element", d: "Anything on the page: a shape, a line, a sticker, a photo." },
  { w: "Uploads", d: "Where your own photos and videos live inside Canva." },
  { w: "Duplicate", d: "Make a copy of a page, so you can change one and keep the other." },
  { w: "PNG", d: "The best file type for posts and stories. Sharp and clean." },
  { w: "MP4", d: "The file type for anything that moves, like a Reel cover video." },
  { w: "Safe zone", d: "The middle of a story, away from the top and bottom where Instagram puts its buttons." },
  { w: "Highlight cover", d: "The small round icon above your posts that holds saved stories." },
];

const FAQ = [
  { q: "Do I need to pay for Canva?", a: "No. Your social pack works on Canva's free plan. Canva Pro is optional, for extras like resizing a design in one click or scheduling posts from Canva." },
  { q: "Do my photos come with it?", a: <>If we shoot together, yes. I place your photos into the designs for you. If you're not booking a shoot, some designs have photo spots for your own pictures and I build the graphics around them. Want both? <a className="so-bw-inline" href="/photography">Add a brand shoot →</a></> },
  { q: "What if I break something?", a: "You can't, really. Use Undo at the top, or open your pack link again and you'll get a fresh copy." },
  { q: "Can I use it on my phone?", a: "Yes. The Canva app does everything on this page, so you can make a post from anywhere." },
  { q: "What if I don't have time to post myself?", a: <>Then monthly content is for you. I make it, write the captions and hand it over ready to post, or post it for you on the Full plan. <a className="so-bw-inline" href="/creative-direction-content#monthly">See the plans →</a></> },
  { q: "Will you show me how?", a: "Yes. Every pack comes with a 30 minute walkthrough, plus this page whenever you need it." },
];

/* A photo spot. Drop a file with this name into /public/assets/social-packs/
   and it shows up here; until then a quiet placeholder holds the space. */
function Pic({ name, label, ratio = "4 / 5", className = "" }: { name: string; label: string; ratio?: string; className?: string }) {
  const src = `/assets/social-packs/${name}`;
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const im = new Image();
    im.onload = () => setOk(true);
    im.src = src;
  }, [src]);
  return (
    <figure className={"sp-pic " + className} style={{ aspectRatio: ratio }}>
      {ok ? <img src={src} alt={label} loading="lazy" /> : (
        <span className="sp-pic-empty"><span>{label}</span><code>{name}</code></span>
      )}
    </figure>
  );
}

function SocialPacksPage() {
  const [dev, setDev] = useState<"desk" | "phone">("desk");
  const [done, setDone] = useState<number[]>([]);
  const flip = (i: number) => setDone((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        <p className="so-micro so-micro-red">SOCIAL PACKS · A HOW-TO</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>Social packs.</h1>
        <div className="so-bw-intro" style={{ marginTop: 22 }}>
          <p className="so-bw-intro-lead">
            Your posts, stories and covers, designed in your brand and made in
            Canva so you can post on your own every week. Never opened Canva?
            This page walks you through all of it.
          </p>
          <div>
            <p className="so-bw-d" style={{ marginTop: 0, maxWidth: "44ch" }}>
              Built by me, posted by you. Part of <a className="so-bw-inline" href="/branding">branding</a> and <a className="so-bw-inline" href="/creative-direction-content">content</a>.
            </p>
          <nav className="so-bw-jump" aria-label="On this page">
            <a href="#in-pack">What's inside</a>
            <a href="#photos">Your photos</a>
            <a href="#canva">What Canva is</a>
            <a href="#steps">Step by step</a>
            <a href="#help">If you get stuck</a>
          </nav>
          </div>
        </div>

        <Pic name="hero.jpg" label="Your social pack, all together" ratio="16 / 8" className="sp-pic-hero" />

        {/* What's inside */}
        <section id="in-pack" className="so-bw-sec">
          <p className="so-micro">WHAT'S INSIDE</p>
          <h2 className="so-serif so-bw-h">One pack, every kind of post.</h2>
          <div className="sp-grid">
            {IN_PACK.map((x) => (
              <div key={x.t} className="sp-cell">
                <p className="sp-t">{x.t}</p>
                <p className="sp-d">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="sp-pics3">
            <Pic name="posts.jpg" label="Posts" />
            <Pic name="stories.jpg" label="Stories" ratio="9 / 16" />
            <Pic name="covers.jpg" label="Reel + highlight covers" />
          </div>
          <div className="sp-sizes">
            <div>
              <p className="sp-k">Starter social pack</p>
              <p className="sp-big">10 designs</p>
              <p className="sp-d">Posts, stories + highlight covers. Comes with the brand kit + social starter and the full brand world.</p>
            </div>
            <div>
              <p className="sp-k">Full social pack</p>
              <p className="sp-big">20 designs</p>
              <p className="sp-d">Everything above, plus stickers, a flyer, a price menu and a caption guide. You approve every design first.</p>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section id="photos" className="so-bw-sec">
          <p className="so-micro">YOUR PHOTOS</p>
          <h2 className="so-serif so-bw-h">Where the pictures come from.</h2>
          <div className="mw-ways-grid">
            <div>
              <p className="mw-ways-k">Shooting with me</p>
              <p className="mw-ways-t">Your photos, already in.</p>
              <p className="mw-ways-d">I place the best shots from your shoot right into the designs, so many of them are ready to post the day you get them.</p>
              <Pic name="with-shoot.jpg" label="A design with photos from our shoot" />
            </div>
            <div>
              <p className="mw-ways-k">Using your own</p>
              <p className="mw-ways-t">Drop them in.</p>
              <p className="mw-ways-d">Some designs have photo spots for your own pictures. I build the graphics around them, and you drop your photo in. It takes seconds.</p>
              <Pic name="your-own.jpg" label="A design with an empty photo spot" />
            </div>
          </div>
          <p className="so-micro" style={{ marginTop: 34 }}>WHAT MAKES A GOOD PHOTO</p>
          <ol className="sp-tips">
            {PHOTO_TIPS.map((x) => (
              <li key={x.t}><b>{x.t}.</b> {x.d}</li>
            ))}
          </ol>
        </section>

        {/* What Canva is */}
        <section id="canva" className="so-bw-sec">
          <p className="so-micro">WHAT CANVA IS</p>
          <h2 className="so-serif so-bw-h">A free design app, made for everyone.</h2>
          <p className="sp-lead">Canva is where your social pack lives. Think of it like a photo editor where everything is already designed for you. You just change the picture and the words.</p>
          <Pic name="canva.jpg" label="What Canva looks like when you open it" ratio="16 / 9" className="sp-pic-wide" />
          <div className="sp-three">
            {WHAT.map((x) => (
              <div key={x.t}>
                <p className="sp-t">{x.t}</p>
                <p className="sp-d">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section id="steps" className="so-bw-sec">
          <div className="sp-steps-head">
            <div>
              <p className="so-micro">STEP BY STEP</p>
              <h2 className="so-serif so-bw-h">Your first post, start to finish.</h2>
            </div>
            <div className="sp-toggle" role="tablist" aria-label="Which device are you on?">
              <button type="button" role="tab" aria-selected={dev === "desk"} className={dev === "desk" ? "is-on" : ""} onClick={() => setDev("desk")}>On a computer</button>
              <button type="button" role="tab" aria-selected={dev === "phone"} className={dev === "phone" ? "is-on" : ""} onClick={() => setDev("phone")}>On my phone</button>
            </div>
          </div>
          <p className="sp-progress">{done.length} of {STEPS.length} done. Tap a step when you finish it.</p>
          <ol className="sp-steps">
            {STEPS.map((s, i) => (
              <li key={s.t} className={done.includes(i) ? "is-done" : ""}>
                <button type="button" className="sp-check" onClick={() => flip(i)} aria-pressed={done.includes(i)} aria-label={`Mark step ${i + 1} done`}>
                  {done.includes(i) ? "✓" : String(i + 1).padStart(2, "0")}
                </button>
                <div>
                  <p className="sp-t">{s.t}</p>
                  <p className="sp-d">{dev === "desk" ? s.desk : s.phone}</p>
                  {s.tip && <p className="sp-tip">{s.tip}</p>}
                </div>
                {dev === "desk"
                  ? <Pic key={`d${i}`} name={`step-${String(i + 1).padStart(2, "0")}-computer.png`} label={`Step ${i + 1} on a computer`} ratio="16 / 10" className="sp-pic-step" />
                  : <Pic key={`p${i}`} name={`step-${String(i + 1).padStart(2, "0")}-phone.png`} label={`Step ${i + 1} on a phone`} ratio="9 / 16" className="sp-pic-step is-phone" />}
              </li>
            ))}
          </ol>
        </section>

        {/* Do / don't */}
        <section className="so-bw-sec">
          <p className="so-micro">KEEP IT LOOKING LIKE YOU</p>
          <h2 className="so-serif so-bw-h">A few simple rules.</h2>
          <div className="sp-dodont">
            <div>
              <p className="sp-k">Do</p>
              <ul>{DO.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <p className="sp-k">Skip</p>
              <ul>{DONT.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </section>

        <div id="help">
          <FaqList items={FAQ} label="IF YOU GET STUCK" title="Quick answers." id="stuck" />
        </div>

        <Glossary label="CANVA WORDS, IN PLAIN ENGLISH" title="No design talk needed." words={WORDS} />

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Want a pack <em>in your brand?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Branding", "Social pack")} className="so-hs-btn is-light">Get a social pack →</a>
              <a href="/branding#pricing" className="so-hs-more">See branding options</a>
            </div>
          </div>
        </section>
      </div>
      <BookBar service="Social packs" need="Branding" />
    </div>
  );
}
