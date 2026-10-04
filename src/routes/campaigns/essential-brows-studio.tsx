import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { InViewVideo } from "../../sunday/loop-video";
import { CaseFacts, CaseRead } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/essential-brows-studio")({
  head: () => seoHead("/campaigns/essential-brows-studio"),
  component: EssentialBrowsCase,
});

const A = "/assets/campaigns/essential-brows-studio";

const FACTS = [
  { k: "FOR", v: "Aliya, owner of Essential Brows, a brow studio" },
  { k: "WHAT I DID", v: "Website design and build, brand kit, copy, domain and booking setup" },
  { k: "RESULT", v: "Live at essentialbrows.studio", h: "https://www.essentialbrows.studio/" },
  { k: "YEAR", v: "2026" },
];


const CLIPS = ["01-wake-up", "02-which-brow", "03-dropdowns", "04-quiz", "05-faq", "06-services", "07-gallery", "08-training", "09-tour"];

const FEATURES = [
  { t: "Wake up with your brows already done", d: "The site opens on what the studio does." },
  { t: "Which brow is yours?", d: "Three techniques, matched to how you live, before you book." },
  { t: "Everything unfolds", d: "Tap a treatment to open its details." },
  { t: "Am I a good candidate?", d: "A short quiz tells people if they're a candidate before they book." },
  { t: "Questions, answered", d: "From what nano brows are to whether it hurts." },
  { t: "Priced and timed", d: "The full menu and touch-up schedule. Every button links to booking." },
  { t: "The work, first", d: "A gallery of results, so you can see the finished brows." },
  { t: "Training, too", d: "One-on-one and small-group training with Aliya." },
  { t: "The whole studio", d: "Her story, photos, prices and socials on one page." },
];

/** Every feature, each with its clip from the live site. */
const FEATURE_ROWS = FEATURES.map((x, i) => ({
  t: x.t,
  d: (
    <>
      <div className="so-fv-screen">
        <InViewVideo base={`${A}/videos/${CLIPS[i]}`} poster={`${A}/f${i + 1}.jpg`} label={x.t} />
      </div>
      <p style={{ marginTop: 10 }}>{x.d}</p>
    </>
  ),
}));

function EssentialBrowsCase() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Hero */}
        <p className="so-micro so-micro-red">CASE FILE · WEBSITE + BRAND KIT · BEAUTY</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Essential Brows Studio.
        </h1>
        <p className="so-bw-intro-lead" style={{ marginTop: 18, maxWidth: "46ch" }}>
          Essential Brows used to run on a booking link. I built Aliya a website
          that shows her work, answers client questions and books appointments.
        </p>

        <CaseFacts items={FACTS} />

        <a href="https://www.essentialbrows.studio/" target="_blank" rel="noreferrer" className="so-li-shot">
          <img src={`${A}/site-desktop.jpg`} alt="The Essential Brows homepage: Wake up with your brows already done." />
          <span className="so-li-cap">
            <span className="so-micro">THE LIVE SITE · ESSENTIALBROWS.STUDIO</span>
            <span className="so-micro so-li-cap-go">VISIT ↗</span>
          </span>
        </a>

        {/* Before / now */}
        <section className="so-bw-sec">
          <p className="so-micro">WHAT CHANGED</p>
          <div className="so-eb-split">
            <div className="so-eb-before">
              <p className="so-micro">BEFORE</p>
              <p className="so-bw-d">
                The studio ran on a booking link. It handled appointments, but it
                couldn't show her work, explain nano versus ombre brows, or answer
                the questions people had late at night. Aliya answered them herself,
                one message at a time.
              </p>
            </div>
            <div className="so-eb-now">
              <p className="so-micro">NOW</p>
              <p className="so-eb-now-big">Now she has a place for all of it.</p>
              <p className="so-bw-d">
                Clients can see which brow is theirs, whether they're a candidate,
                what it costs and how long it takes before they message her.
                "Book Your Brows" is one tap away on every page. Now she can send
                one link instead of explaining the studio again and again.
              </p>
            </div>
          </div>
        </section>

        {/* Her logo, her feel */}
        <section className="so-bw-sec so-eb-kit">
          <div>
            <p className="so-micro">HER LOGO, KEPT</p>
            <h2 className="so-serif so-bw-h">I kept her logo and built the brand around it.</h2>
            <p className="so-bw-d" style={{ maxWidth: "46ch" }}>
              Aliya already had a mark she loved. I kept it and matched the rest
              to it: the palette, the type, the buttons and the way the brand
              talks. It all lives in a one-page brand kit, so anything she makes
              next stays consistent.
            </p>
            <ul className="so-eb-feel">
              {["Natural", "Polished", "Customized", "Calm", "Precise", "Timeless"].map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
          <figure className="so-eb-kit-img">
            <img src={`${A}/brand-kit.jpg`} alt="Essential Brows brand kit: logo, palette, typography and brand feel" loading="lazy" />
            <figcaption className="so-micro">THE BRAND KIT · EDITION 01</figcaption>
          </figure>
        </section>

        {/* Behind the build */}
        <CaseRead
          label="BEHIND THE BUILD"
          items={[
            {
              t: "Built from her feed",
              d: "Before designing anything, I went through her Instagram: black and white, soft neutrals, close crops on the brow. The site follows the same style, so her feed and her site feel like the same studio.",
            },
            {
              t: "The voice",
              d: "I wrote the copy to sound like her: honest, calm and clear. A few lines from the site: \"Wake up with your brows already done.\" \"Which brow is yours?\" \"Answer honestly.\" \"Don't take our word for it. See the brows.\"",
            },
            {
              t: "Built for the phone",
              d: "Her clients find her on their phones, so I designed the site for mobile first. New clients can learn about the studio, find their brow and book without messaging her.",
            },
            {
              t: "The setup",
              d: "I set up her domain and an email for inquiries, and linked every button to her booking system. I walked her through each step with plain instructions, so she left with everything connected.",
            },
            {
              t: "Why it matters",
              d: "Her clients drive in from Tacoma, Puyallup, Federal Way and nearby towns. For a beauty business, the website is often where people decide to book. Hers answers the same questions at any hour, so clients know what to expect before they make the drive.",
            },
          ]}
        />

        {/* What the site does */}
        <section className="so-bw-sec">
          <p className="so-micro">WHAT THE SITE DOES</p>
          <h2 className="so-serif so-bw-h">The questions clients ask, answered on the site.</h2>
          <CaseRead label="FEATURE BY FEATURE · CLIPS FROM THE LIVE SITE" items={FEATURE_ROWS} />
        </section>

        {/* Review */}
        <section className="so-bw-sec so-eb-quote">
          <p className="so-serif">
            "10/10. Quick communication, fast turnaround, no complaints. All the
            information added was accurate. The website is clean and
            straightforward. Will absolutely be using more of Hana's services in
            the future!"
          </p>
          <p className="so-micro">ALIYA, OWNER OF ESSENTIAL BROWS</p>
        </section>

        <CaseBookingCta />

        <p className="so-micro so-eb-credit">
          WEBSITE, BUILD, BRAND KIT + COPY BY SUNDAY OFFICE · LOGO + PHOTOGRAPHY BY ESSENTIAL BROWS
        </p>

        <div style={{ marginTop: 40 }}>
          <a href="/" className="so-arrow">
            <span className="arr">←</span> Back to Sunday Office
          </a>
        </div>
      </div>
    </div>
  );
}
