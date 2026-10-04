import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { useState } from "react";
import { PriceList } from "../sunday/service-kit";

export const Route = createFileRoute("/headshots")({
  head: () => seoHead("/headshots"),
  component: HeadshotsPage,
});

const NOTES = [
  "Light is the first thing I think about. It shapes your face, sets the mood, and makes you look like your favorite version of yourself.",
  "You don't need to know how to pose. I'll tell you where to stand, how to move, and talk you through it the whole time.",
  "A real smile beats a perfect one. We go for the feeling first and sort out the technical side after.",
  "Your hundredth shoot or your first, you get the same care and the same light.",
];

const ADVICE = [
  {
    t: "WEAR WHAT FEELS LIKE YOU",
    d: "Solid colors, softer necklines, and clothes you already feel good in. When you're comfortable it shows, so keep the outfit simple and let your face be the focus.",
  },
  {
    t: "LIGHT IS THE SHORTCUT",
    d: "Flat light ruins most headshots. I set the light for your best angles before you even start posing. You just show up.",
  },
  {
    t: "KNOW WHAT IT'S FOR",
    d: "LinkedIn, a creative brand, social media or something more artistic. Each one needs a different feel and crop, so tell me what it's for and I'll shoot for that.",
  },
  {
    t: "NERVOUS? THAT'S NORMAL",
    d: "No idea how to pose? That's fine. You tell me what the photo is for and I'll handle the rest. First-timers usually leave surprised by how good they look.",
  },
];

const KINDS = [
  {
    n: "01",
    t: "Standard",
    lead: "The ones that get you hired.",
    d: "Clean and classic, ready for LinkedIn, work profiles, and actor or model basics. One lighting setup, no fuss.",
    feel: "Professional but warm. Approachable and capable, like you on a good day in really good light.",
    imgs: ["standard-01", "standard-02", "standard-03"],
  },
  {
    n: "02",
    t: "Creative",
    lead: "The ones people remember.",
    d: "Editorial and styled, with color, mood, wardrobe and personality. For your creative brand, your socials, and projects where the photo should feel like your work.",
    feel: "A headshot for people whose photo shouldn't look like everyone else's.",
    imgs: ["creative-01"],
  },
  {
    n: "03",
    t: "Model digitals",
    lead: "The simple set agencies ask for.",
    d: "Clean full-length and close-up shots from the front and sides, in natural light. For agencies, casting and booking.",
    feel: "Nothing extra, so agencies see exactly what you look like.",
    imgs: [],
  },
];

function HeadshotsPage() {
  const [note, setNote] = useState(0);
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Hero */}
        <div className="so-hs-hero">
          <div>
            <p className="so-micro so-micro-red">SERVICES · HEADSHOTS · SEATTLE</p>
            <h1 className="so-serif so-hs-title">
              Head<em>shots.</em>
            </h1>
            <p className="so-hs-lead">
              Your hundredth headshot or your first, I'll guide you through it. Lighting, posing and expression are my job. Tell me what it's for and I'll plan the session around that.
            </p>
            <div className="so-hs-ctas">
              <a href="/#inquiry" className="so-hs-btn">Book a session →</a>
              <a href="#pricing" className="so-bw-inline">See pricing</a>
            </div>
          </div>
          <div className="so-hs-fan" aria-hidden>
            {["standard-02", "creative-01", "standard-03"].map((s) => (
              <img key={s} src={`/assets/headshots/${s}.jpg`} alt="" />
            ))}
          </div>
        </div>

        <div id="pricing" style={{ scrollMarginTop: 80 }}>
          <PriceList
            title="Headshot sessions."
            items={[
              { t: "Standard", p: "$150", d: "Basic, clean headshots. One look, one or two final photos. Quick and easy." },
              { t: "More looks", p: "$350", d: "A couple more poses and an outfit change, so you have options for every profile." },
              { t: "Personal branding", p: "from $550", tag: "MOST COMPLETE", d: "A more extensive session for your brand: more looks, more setups, photos for your site and socials." },
            ]}
            foot={<>Not sure which one? <a className="so-bw-inline" href="/#inquiry">Ask me →</a></>}
          />
        </div>

        {/* Three kinds */}
        <section className="so-bw-sec">
          <p className="so-micro">THREE KINDS OF HEADSHOT</p>
          <div className="so-hs-kinds">
            {KINDS.map((k) => (
              <article key={k.n} className={"so-hs-kind" + (k.imgs.length ? "" : " is-text")}>
                <div className="so-hs-kind-copy">
                  <span className="so-micro">{k.n}</span>
                  <h2 className="so-serif so-hs-kind-t">{k.t}</h2>
                  <p className="so-hs-kind-lead">{k.lead}</p>
                  <p className="so-bw-d">{k.d}</p>
                  <p className="so-hs-feel">{k.feel}</p>
                </div>
                {k.imgs.length > 0 && (
                  <div className={"so-hs-kind-imgs n" + k.imgs.length}>
                    {k.imgs.map((s, i) => (
                      <img
                        key={s}
                        src={`/assets/headshots/${s}.jpg`}
                        alt={`${k.t} headshot ${i + 1} by Hana Hong, Seattle headshot photographer`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Before your session */}
        <section className="so-bw-sec">
          <p className="so-micro">BEFORE YOUR SESSION</p>
          <h2 className="so-serif so-bw-h">Four things to know.</h2>
          <div className="so-hs-tips">
            {ADVICE.map((a, i) => (
              <div key={a.t} className="so-hs-tip">
                <span className="so-hs-tip-n">{String(i + 1).padStart(2, "0")}</span>
                <p className="so-hs-tip-t">{a.t.charAt(0) + a.t.slice(1).toLowerCase()}</p>
                <p className="so-bw-d">{a.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Note + CTA */}
        <section className="so-hs-close">
          <button type="button" className="so-hs-note" onClick={() => setNote((n) => (n + 1) % NOTES.length)}>
            <span className="so-micro">A NOTE FROM HANA · TAP FOR ANOTHER</span>
            <span key={note} className="so-hs-note-q so-chapter-fade">"{NOTES[note]}"</span>
          </button>
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Ready when <em>you are.</em></p>
            <div className="so-hs-ctas">
              <a href="/#inquiry" className="so-hs-btn is-light">Book a session →</a>
              <a href="/photography" className="so-hs-more">More photography</a>
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
