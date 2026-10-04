import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { CaseBookingCta } from "../../sunday/services";
import { CaseFacts } from "../../sunday/case-kit";

export const Route = createFileRoute("/campaigns/jazmins-events")({
  head: () => seoHead("/campaigns/jazmins-events"),
  component: JazminsCase,
});

const A = "/assets/campaigns/jazmins-events";
const SITE = "https://jazmins-events.vercel.app/";

const FACTS = [
  { k: "FOR", v: "Jazmin, founder and planner of Jazmin's Events & Coordinating" },
  { k: "WHAT I DID", v: "Brand identity, brand guide and board, Instagram templates, logos and seals, website" },
  { k: "STATUS", v: "Branding done, website in progress" },
  { k: "YEAR", v: "2026" },
];

const STAGES = [
  { s: "done", t: "Brand identity", d: "Logo, monogram, palette, type and voice." },
  { s: "done", t: "Brand kit", d: "Guide, board, 10 Instagram templates and seals, all editable in Canva." },
  { s: "now", t: "Website", d: "Built. We're finishing it together.", link: true },
  { s: "next", t: "Launch", d: "Real photos and couples' words go in as she books." },
];

const PALETTE = [
  { n: "Sage", m: "Soft + serene", hex: "#8D9F88" },
  { n: "Ivory", m: "Warm + inviting", hex: "#F6F1E4" },
  { n: "Forest", m: "Grounded", hex: "#2F4639" },
  { n: "Gold", m: "Understated luxury", hex: "#C9B17A" },
  { n: "Linen", m: "Natural + timeless", hex: "#E4DED2" },
];

const SERVICES = [
  { t: "Wedding Coordination", d: "You've done the planning. Now let us run the day." },
  { t: "Partial Planning", d: "A little guidance can go a long way." },
  { t: "Full Planning + Coordination", d: "From the first idea to the last dance." },
];

const PROCESS = ["Tell us everything", "Let's talk", "Make a plan", "We keep it moving", "Go enjoy your day"];

function JazminsCase() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <a href="/" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Back to Sunday Office
        </a>

        {/* Hero */}
        <p className="so-micro so-micro-red">CASE FILE · BRANDING + WEBSITE · WEDDINGS + EVENTS</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(40px, 7vw, 88px)", marginTop: 14 }}>
          Jazmin's Events &amp; Coordinating.
        </h1>
        <p style={{ marginTop: 14 }}>
          <span className="so-status">Website in progress</span>
        </p>
        <p className="so-bw-intro-lead" style={{ marginTop: 18, maxWidth: "48ch" }}>
          Jazmin was starting a wedding planning business. I built her brand
          from scratch: the print pieces, the Instagram templates and the
          website. The branding is done, and we're finishing the website
          together now.
        </p>

        <CaseFacts items={FACTS} />

        <div className="so-jz-hero">
          <img className="so-jz-mono" src={`${A}/je-monogram-ivory.svg`} alt="The JE monogram" />
          <p className="so-jz-tag">You live the moment.</p>
          <p className="so-jz-tag2">We'll handle the rest.</p>
          <p className="so-micro so-jz-small">WEDDINGS · EVENTS · MEANINGFUL MOMENTS</p>
          <img className="so-jz-seal" src={`${A}/seal-gold.png`} alt="Jazmin's Events gold wax seal" />
        </div>

        {/* Where it stands */}
        <section className="so-bw-sec so-bw-how">
          <p className="so-micro">WHERE IT STANDS</p>
          <ol className="so-jz-stages">
            {STAGES.map((st) => (
              <li key={st.t} className={"is-" + st.s}>
                <span className="so-jz-dot" aria-hidden>
                  {st.s === "done" ? "✓" : ""}
                </span>
                <p className="so-bw-t">{st.t}</p>
                <p className="so-micro so-jz-state">
                  {st.s === "done" ? "DONE" : st.s === "now" ? "IN PROGRESS" : "NEXT"}
                </p>
                <p className="so-bw-d">{st.d}</p>
                {st.link && (
                  <a className="so-bw-inline" href={SITE} target="_blank" rel="noreferrer">
                    See the site so far ↗
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Her story */}
        <section className="so-bw-sec so-jz-story">
          <div>
            <p className="so-micro">HER STORY</p>
            <p className="so-serif so-jz-quote">
              "I know what it feels like to be on the other side of the aisle."
            </p>
          </div>
          <div>
            <p className="so-bw-d" style={{ marginTop: 0 }}>
              Planning a wedding showed Jazmin how many details sit behind one
              day. She started her business because she loves bringing those
              details together, so the couple can enjoy what they planned.
            </p>
            <p className="so-bw-d">
              Whether a couple needs her for a few final pieces or from start to
              finish, she wants them to feel that someone is in their corner.
            </p>
            <p className="so-micro so-jz-from">FROM HER ABOUT PAGE</p>
          </div>
        </section>

        {/* How I approached it */}
        <section className="so-bw-sec so-bw-inc">
          <div>
            <p className="so-micro">HOW I APPROACHED IT</p>
            <h2 className="so-serif so-bw-h">Calm first, then romantic.</h2>
          </div>
          <div className="so-bw-list">
            <div className="so-bw-row">
              <p className="so-bw-t">Calm</p>
              <p className="so-bw-d">
                Couples arrive carrying a lot: venues, vendors, families,
                timelines. The brand needed to feel calm so they would trust her
                with the day.
              </p>
            </div>
            <div className="so-bw-row">
              <p className="so-bw-t">For the couples</p>
              <p className="so-bw-d">
                Light and romantic: arches, botanicals, creams and greens, and
                script flourishes, so it looks like the wedding they're
                picturing.
              </p>
            </div>
            <div className="so-bw-row">
              <p className="so-bw-t">Show first</p>
              <p className="so-bw-d">
                We hadn't worked together before, so I built her a clickable
                mockup before asking for anything. She could see it first, then
                decide.
              </p>
            </div>
          </div>
        </section>

        {/* The brand */}
        <section className="so-bw-sec so-eb-kit">
          <div>
            <p className="so-micro">THE BRAND</p>
            <h2 className="so-serif so-bw-h">Elegant and romantic.</h2>
            <p className="so-bw-d" style={{ maxWidth: "46ch" }}>
              Thoughtful planning for couples who want to be present on their day
              while someone else runs it. The look is tactile, like paper you can
              touch.
            </p>
            <div className="so-jz-swatches">
              {PALETTE.map((c) => (
                <div key={c.n}>
                  <span className="so-jz-sw" style={{ background: c.hex }} />
                  <p className="so-bw-t">{c.n}</p>
                  <p className="so-micro">{c.hex}</p>
                </div>
              ))}
            </div>
            <p className="so-bw-d so-jz-why">
              <strong>Why green.</strong> Green stands for calm, balance and new
              beginnings. During a stressful season, it tells couples they're in
              steady hands. Ivory keeps it warm, and a touch of gold makes it feel
              special.
            </p>
            <div className="so-jz-type">
              <p><span className="so-micro">HEADLINES</span> Timeless Romantic</p>
              <p><span className="so-micro">BODY</span> Cormorant Garamond</p>
              <p><span className="so-micro">SCRIPT</span> Bakendy</p>
            </div>
          </div>
          <figure className="so-eb-kit-img">
            <img src={`${A}/kit-guide.jpg`} alt="Jazmin's Events brand guide: logos, palette, typography and texture" loading="lazy" />
            <figcaption className="so-micro">BRAND GUIDE · EDITION 01</figcaption>
          </figure>
        </section>

        {/* Board + in use */}
        <section className="so-bw-sec so-jz-pair">
          <figure className="so-eb-fig">
            <img src={`${A}/kit-board.jpg`} alt="Brand board: stationery, wax seals, stamps and the palette" loading="lazy" />
            <figcaption className="so-micro">THE BRAND BOARD</figcaption>
          </figure>
          <figure className="so-eb-fig">
            <img src={`${A}/kit-in-action.jpg`} alt="The identity on business cards, stationery, a social post and a story" loading="lazy" />
            <figcaption className="so-micro">IN USE · CARDS, STATIONERY, FEED, STORIES</figcaption>
          </figure>
        </section>

        {/* Instagram */}
        <section className="so-bw-sec">
          <div className="so-jz-head">
            <div>
              <p className="so-micro">INSTAGRAM TEMPLATES</p>
              <h2 className="so-serif so-bw-h">Ten posts, ready to fill.</h2>
            </div>
            <p className="so-bw-d" style={{ maxWidth: "44ch", marginTop: 0 }}>
              Welcome, services, how it works, FAQ, kind words, now booking and the
              website launch. She drops in her photos and edits the words in Canva,
              so she can keep her feed on-brand on her own.
            </p>
          </div>
          <figure className="so-eb-fig" style={{ marginTop: 22 }}>
            <img src={`${A}/kit-instagram.jpg`} alt="Ten Instagram post templates in sage, ivory and forest" loading="lazy" />
          </figure>
          <div className="so-jz-seals">
            <img src={`${A}/seal-green.png`} alt="Green wax seal" loading="lazy" />
            <img src={`${A}/seal-gold.png`} alt="Gold wax seal" loading="lazy" />
            <p className="so-bw-d">
              Plus the JE monogram in forest, ivory and gold, and wax seals for the
              finishing touches.
            </p>
          </div>
        </section>

        {/* The website */}
        <section className="so-bw-sec so-bw-how">
          <div className="so-jz-head">
            <div>
              <p className="so-micro">THE WEBSITE · IN PROGRESS</p>
              <h2 className="so-serif so-bw-h">A site that walks couples through her process.</h2>
            </div>
            <a className="so-bw-cta-btn so-jz-sitebtn" href={SITE} target="_blank" rel="noreferrer">
              SEE THE SITE SO FAR ↗
            </a>
          </div>
          <div className="so-li-tips" style={{ marginTop: 22 }}>
            {SERVICES.map((s) => (
              <div key={s.t}>
                <p className="so-bw-t">{s.t}</p>
                <p className="so-bw-d">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 26, color: "var(--color-stone)" }}>
            HOW IT WORKS ON HER SITE
          </p>
          <ol className="so-jz-process">
            {PROCESS.map((p, i) => (
              <li key={p}>
                <span className="so-bw-n">{String(i + 1).padStart(2, "0")}</span> {p}
              </li>
            ))}
          </ol>
          <p className="so-bw-d" style={{ marginTop: 20, maxWidth: "64ch" }}>
            The site already has her services, the process, an FAQ and an inquiry
            form. What's left is hers to fill as she grows: her portrait, real
            photos from her events, and words from her first couples. I'm helping
            her get each piece in.
          </p>
        </section>

        <CaseBookingCta note="STARTING SOMETHING NEW? I CAN BUILD THE BRAND AND THE SITE TOGETHER." />

        <p className="so-micro so-eb-credit">
          BRAND IDENTITY, BRAND KIT + WEBSITE BY SUNDAY OFFICE
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
