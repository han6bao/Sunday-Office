import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { useEffect, useRef, useState } from "react";
import { CaseBookingCta } from "../../sunday/services";
import { InViewVideo } from "../../sunday/loop-video";
import { TapStory } from "../../sunday/service-kit";

export const Route = createFileRoute("/campaigns/essential-brows-studio")({
  head: () => seoHead("/campaigns/essential-brows-studio"),
  component: EssentialBrowsCase,
});

const A = "/assets/campaigns/essential-brows-studio";

const FACTS = [
  { k: "CLIENT", v: "Aliya, Essential Brows" },
  { k: "WHAT I DID", v: "Website design + build, brand kit, voice + copy, domain and booking setup" },
  { k: "LIVE SITE", v: "essentialbrows.studio", h: "https://www.essentialbrows.studio/" },
  { k: "YEAR", v: "2026" },
];


const CLIPS = ["01-wake-up", "02-which-brow", "03-dropdowns", "04-quiz", "05-faq", "06-services", "07-gallery", "08-training", "09-tour"];

const FEATURES = [
  { t: "Wake up with your brows already done", d: "The site opens on exactly what it sells." },
  { t: "Which brow is yours?", d: "Three techniques, matched to how you live, before you book." },
  { t: "Everything unfolds", d: "Tap a treatment and the details open. No digging." },
  { t: "Am I a good candidate?", d: "The quiz answers the scariest question up front." },
  { t: "Questions, answered", d: "From what nano brows are to whether it hurts." },
  { t: "Priced and timed", d: "The full menu and touch-up schedule. Every button books." },
  { t: "The work, first", d: "A gallery of results, so you can see the finished brows." },
  { t: "Training, too", d: "One-on-one and small-group training with Aliya." },
  { t: "The whole studio", d: "Her story, photos, prices and socials in one scroll." },
];

/** One screen at a time: pick a feature, watch it on the site. */
function FeatureViewer() {
  const [i, setI] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const f = FEATURES[i];
  useEffect(() => {
    const box = listRef.current;
    const on = box?.querySelector<HTMLElement>(".so-fv-item.is-on");
    if (!box || !on || box.scrollWidth <= box.clientWidth) return;
    box.scrollTo({ left: on.offsetLeft - (box.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
  }, [i]);
  return (
    <div className="so-fv">
      <ol ref={listRef} className="so-fv-list" aria-label="Site features">
        {FEATURES.map((x, n) => (
          <li key={x.t}>
            <button
              type="button"
              className={"so-fv-item" + (n === i ? " is-on" : "")}
              aria-pressed={n === i}
              onClick={() => setI(n)}
            >
              <span className="so-fv-no">{String(n + 1).padStart(2, "0")}</span>
              {x.t}
            </button>
          </li>
        ))}
      </ol>
      <div className="so-fv-stage">
        <div className="so-fv-screen" key={i}>
          <InViewVideo base={`${A}/videos/${CLIPS[i]}`} poster={`${A}/f${i + 1}.jpg`} label={f.t} />
        </div>
        <div className="so-fv-cap">
          <p className="so-bw-t">{f.t}</p>
          <p className="so-bw-d">{f.d}</p>
          <button
            type="button"
            className="so-fv-next"
            onClick={() => setI((n) => (n + 1) % FEATURES.length)}
          >
            {i < FEATURES.length - 1 ? `Next: ${FEATURES[i + 1].t} →` : "Back to the start ↺"}
          </button>
        </div>
      </div>
    </div>
  );
}

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
          A brow studio that ran on a booking link. Now it has a home: one place
          that shows the work, answers the questions and books the appointment.
        </p>

        <dl className="so-eb-facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <dt className="so-micro">{f.k}</dt>
              <dd>
                {f.h ? (
                  <a className="so-bw-inline" href={f.h} target="_blank" rel="noreferrer">
                    {f.v} ↗
                  </a>
                ) : (
                  f.v
                )}
              </dd>
            </div>
          ))}
        </dl>

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
                The studio ran on a booking link. People found her, booked, showed
                up. But the link couldn't show the work, explain nano versus ombre,
                or answer the questions people had at midnight. So Aliya answered
                them herself, over and over.
              </p>
            </div>
            <div className="so-eb-now">
              <p className="so-micro">NOW</p>
              <p className="so-eb-now-big">Now she has a place for all of it.</p>
              <p className="so-bw-d">
                Clients can see which brow is theirs, whether they're a candidate,
                what it costs and how long it takes, all before they message her.
                "Book Your Brows" is one tap away on every page. She sends one link
                instead of explaining the studio ten times a day, and puts that time
                back into the craft, new clients and training.
              </p>
            </div>
          </div>
        </section>

        {/* Her logo, her feel */}
        <section className="so-bw-sec so-eb-kit">
          <div>
            <p className="so-micro">HER LOGO, KEPT</p>
            <h2 className="so-serif so-bw-h">I didn't make the logo. I built everything around it.</h2>
            <p className="so-bw-d" style={{ maxWidth: "46ch" }}>
              Aliya already had a mark she loved, and it already felt like her. So
              instead of starting over, I kept it and made the rest match: the
              palette, the type, the buttons, and the way the brand talks. It all
              lives in a one-page brand kit, so anything she makes next stays
              consistent.
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

        {/* The story behind it — one tap-through box */}
        <TapStory
          label="BEHIND THE BUILD"
          chapters={[
            {
              tab: "Built from her feed",
              head: "Same studio, feed to site.",
              body: "Before designing anything, I went through her Instagram: black and white, soft neutrals, close crops on the brow, nothing loud. The site follows the same rules, so moving from her feed to her site feels like walking into the same room.",
            },
            {
              tab: "The voice",
              head: "Calm, direct, a little warm.",
              body: "I wrote the words to sound like her: honest, never pushy, clear enough that nobody has to ask twice. \"Wake up with your brows already done.\" \"Which brow is yours?\" \"Answer honestly.\" \"Don't take our word for it. See the brows.\"",
            },
            {
              tab: "Built for the phone",
              head: "Where her clients actually are.",
              body: "Her clients arrive on their phones, so the site was designed there first. New clients meet the studio, find their brow and book before she says a word.",
            },
            {
              tab: "The setup",
              head: "From zero to connected.",
              body: "A real domain, an email that catches every inquiry, and every button going straight into her booking system. I walked her through each step with plain instructions, so she left with a site that was fully set up and ready to go.",
            },
            {
              tab: "Why it matters",
              head: "The front door.",
              body: "Her clients drive in from Tacoma, Puyallup, Federal Way and everywhere in between. For a beauty business, the website is where people decide. It's open at midnight, it answers the same questions every time, and it makes the drive feel worth it before anyone leaves the house.",
            },
          ]}
        />

        {/* What the site does */}
        <section className="so-bw-sec">
          <p className="so-micro">WHAT THE SITE DOES · TAP TO SEE EACH ONE</p>
          <h2 className="so-serif so-bw-h">Everything clients ask, answered on the site.</h2>
          <FeatureViewer />
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
