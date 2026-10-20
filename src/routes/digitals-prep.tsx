import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { bookHref } from "../sunday/service-kit";

export const Route = createFileRoute("/digitals-prep")({
  head: () => seoHead("/digitals-prep"),
  component: DigitalsPrep,
});

const E = "/assets/campaigns/ellis-digitals/";

/* When to do what, from a week out to the morning of. */
const WHEN: { t: string; sub: string; items: { t: string; d: string }[] }[] = [
  {
    t: "A week before",
    sub: "Give yourself time, so nothing is rushed.",
    items: [
      { t: "Plan your outfits", d: "Try everything on. Fitted, simple and plain. Send me a photo if you're not sure." },
      { t: "Get a haircut or trim", d: "About a week before, so it looks like you, not fresh from the chair." },
      { t: "Ask your agency what they want", d: "If an agency asked for something specific, send it to me now so we can plan for it." },
      { t: "Drink more water", d: "It shows in your skin. Start now, not the night before." },
      { t: "Skip anything new on your skin", d: "No new products, facials or treatments this week. Stick to what you know works." },
    ],
  },
  {
    t: "The day before",
    sub: "Get everything ready, so the morning is easy.",
    items: [
      { t: "Wash and press your clothes", d: "Steam or iron them, then hang them up. Wrinkles show on camera." },
      { t: "Pack your bag", d: "Use the list below and tick things off as you go." },
      { t: "Trim and clean your nails", d: "Hands show up in more photos than you think. Clean and neutral is best." },
      { t: "Confirm the time and place", d: "Check the address, parking and how long it takes to get there." },
    ],
  },
  {
    t: "The night before",
    sub: "Rest is the best thing you can do for your face.",
    items: [
      { t: "Sleep well", d: "Aim for a full night. Tired eyes are hard to hide in natural light." },
      { t: "Go easy on salt and alcohol", d: "Both can make your face puffy the next morning." },
      { t: "Moisturize", d: "Your usual routine, nothing heavy." },
    ],
  },
  {
    t: "The morning of",
    sub: "Keep it simple and arrive calm.",
    items: [
      { t: "Clean, moisturized skin", d: "Light or no makeup. Nothing that changes your face." },
      { t: "Eat something", d: "You'll be standing, moving and holding poses for a while." },
      { t: "Wear something loose there", d: "Soft clothes and no tight socks, so you don't arrive with marks on your skin." },
      { t: "Arrive a few minutes early", d: "Time to settle in, check your hair and get comfortable before we start." },
    ],
  },
];

/* What to bring. */
const BRING: { t: string; items: string[] }[] = [
  {
    t: "Clothes",
    items: [
      "A fitted black or white tee or tank, no logos",
      "Fitted jeans or simple dark pants",
      "Simple shoes, plus heels if that's the work you want",
      "Nude or black underwear that won't show",
      "A swimsuit or fitted basics, if your agency asks for them",
      "A styled outfit, if we're adding a styled look",
    ],
  },
  {
    t: "Skin + hair",
    items: [
      "Moisturizer and lip balm",
      "Blotting papers or powder for shine",
      "A small water spray for your hair and face",
      "Comb or brush, hair ties and a little hair product",
      "Bobby pins",
    ],
  },
  {
    t: "Extras, if you like",
    items: [
      "A handheld mirror for touch-ups",
      "Safety pins and a lint roller",
      "A small fan, if the space gets warm",
      "Water and a snack",
      "Deodorant",
    ],
  },
];

const AVOID = [
  "Brands, logos and graphic prints",
  "Busy patterns and bright neon",
  "Baggy or oversized clothes that hide your shape",
  "Heavy makeup, false lashes and contour",
  "Big jewelry, hats and sunglasses",
  "Fresh tan lines or a new spray tan",
];

const HAIR = [
  {
    t: "Short hair",
    d: "Clean and natural, the way you'd wear it to a casting. Avoid a lot of shiny product so the shape reads. Bring a comb for flyaways.",
  },
  {
    t: "Long hair",
    d: "Wear it down and natural first, then pulled back off the face so agencies can see your face shape and neck. Bring hair ties and bobby pins.",
  },
  {
    t: "Curls, coils + locs",
    d: "Show your natural texture as it is today. Bring a spray bottle and your usual product to refresh between looks.",
  },
  {
    t: "Facial hair",
    d: "Come the way you'd show up to a job: freshly shaved, or trimmed and neat. If you're not sure which way to go, ask your agency first.",
  },
];

const POSING = [
  { t: "Your energy shows", d: "Digitals are simple, so the feeling you bring and what your face says are what come through most strongly. Relaxed and present always reads better than posed." },
  { t: "Eyes alive", d: "Think of a person or a moment, not the camera. A thought behind the eyes keeps them from going flat." },
  { t: "Breathe out before each frame", d: "It drops your shoulders and softens your jaw." },
  { t: "Chin slightly forward", d: "Forward and a touch down, which defines your jawline without looking stiff." },
  { t: "Hands relaxed", d: "Loose at your sides or lightly in your pockets. No fists, no stiff fingers." },
  { t: "Stand tall, not stiff", d: "Weight on one leg, shoulders down and back. Small shifts between frames give you range." },
  { t: "A smile and a serious look", d: "Agencies want both, so we'll get both. A real smile, not a held one." },
  { t: "I'll guide you", d: "You don't need to know any of this by heart. I direct every angle and expression the whole time." },
];

function DigitalsPrep() {
  const [done, setDone] = useState<string[]>([]);
  const flip = (k: string) => setDone((d) => (d.includes(k) ? d.filter((x) => x !== k) : [...d, k]));
  const total = BRING.reduce((a, g) => a + g.items.length, 0);
  const packed = BRING.flatMap((g) => g.items).filter((x) => done.includes("b:" + x)).length;

  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/digitals" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Model digitals
        </a>

        <p className="so-micro so-micro-red">A FREE GUIDE · MODEL DIGITALS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 7.4vw, 100px)", marginTop: 14, maxWidth: "16ch" }}>How to prepare for your digitals.</h1>
        <p className="so-bw-intro-lead" style={{ marginTop: 26, maxWidth: "52ch" }}>
          Everything to do from a week out to the morning of, what to bring, what to leave at home, hair and posing. Use it for a shoot with me or anyone else.
        </p>
        <nav className="so-bw-jump" aria-label="On this page" style={{ marginTop: 24 }}>
          <a href="#when">When to do what</a>
          <a href="#bring">What to bring</a>
          <a href="#avoid">What to avoid</a>
          <a href="#hair">Hair</a>
          <a href="#posing">Posing</a>
        </nav>

        {/* Timeline */}
        <section id="when" className="so-bw-sec">
          <p className="so-micro">WHEN TO DO WHAT</p>
          <h2 className="so-serif so-bw-h">From a week out to the morning of.</h2>
          <div className="dp-when">
            {WHEN.map((w, i) => (
              <div key={w.t} className="dp-when-col">
                <p className="dp-when-k">{String(i + 1).padStart(2, "0")}</p>
                <p className="dp-when-t">{w.t}</p>
                <p className="sp-d">{w.sub}</p>
                <ul className="dp-when-list">
                  {w.items.map((it) => (
                    <li key={it.t}><b>{it.t}</b><span>{it.d}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What to bring */}
        <section id="bring" className="so-bw-sec">
          <div className="dp-bring-head">
            <div>
              <p className="so-micro">WHAT TO BRING</p>
              <h2 className="so-serif so-bw-h">Pack your bag.</h2>
              <p className="sp-d">Tap each one as you pack it. Not sure about an outfit? Send me a photo first.</p>
            </div>
            <p className="dp-count" aria-live="polite">{packed} of {total} packed</p>
          </div>
          <div className="dp-bring">
            {BRING.map((g) => (
              <div key={g.t} className="dp-bring-col">
                <p className="dp-when-t">{g.t}</p>
                <ul className="dp-checks">
                  {g.items.map((x) => {
                    const k = "b:" + x;
                    const on = done.includes(k);
                    return (
                      <li key={x}>
                        <button type="button" className={on ? "is-on" : ""} aria-pressed={on} onClick={() => flip(k)}>
                          <span className="dp-box" aria-hidden="true">{on ? "✓" : ""}</span>
                          <span>{x}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="dp-mirror">
            <img src={E + "e-5846.jpg"} alt="Ellis checking his look in the large mirror at LOFT Tacoma" loading="lazy" />
            <div>
              <p className="so-micro">WHY THE MIRROR</p>
              <p className="dp-mirror-t">Ellis didn't need one.</p>
              <p className="sp-d">LOFT in Tacoma has a big mirror we used for touch-ups between looks. Not every space has one, so a small handheld mirror is worth packing. It saves time and you'll feel more ready in every frame.</p>
              <a className="so-link-jump" href="/campaigns/ellis-digitals">See Ellis's digitals →</a>
            </div>
          </div>
        </section>

        {/* Avoid */}
        <section id="avoid" className="so-bw-sec">
          <p className="so-micro">WHAT TO AVOID</p>
          <h2 className="so-serif so-bw-h">Keep it simple.</h2>
          <p className="sp-d" style={{ maxWidth: "58ch" }}>Digitals show who you are, not what you're wearing. Anything that pulls attention away from you works against you.</p>
          <ul className="dp-avoid">
            {AVOID.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </section>

        {/* Hair */}
        <section id="hair" className="so-bw-sec">
          <p className="so-micro">HAIR</p>
          <h2 className="so-serif so-bw-h">Wear it like you would to a casting.</h2>
          <div className="dp-hair">
            {HAIR.map((h) => (
              <div key={h.t}><p className="sp-t">{h.t}</p><p className="sp-d">{h.d}</p></div>
            ))}
          </div>
        </section>

        {/* Posing */}
        <section id="posing" className="so-bw-sec">
          <p className="so-micro">POSING</p>
          <h2 className="so-serif so-bw-h">It's in your face and your energy.</h2>
          <div className="dp-pose">
            {POSING.map((p, i) => (
              <div key={p.t}>
                <span className="dp-when-k">{String(i + 1).padStart(2, "0")}</span>
                <p className="sp-t">{p.t}</p>
                <p className="sp-d">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Ready for <em>your digitals?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Headshots", "Model digitals")} className="so-hs-btn is-light">Book your digitals →</a>
              <a href="/digitals" className="so-hs-more">How digitals work</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
