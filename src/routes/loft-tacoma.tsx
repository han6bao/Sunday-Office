import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { PhotoOpen } from "../sunday/case-kit";
import { bookHref } from "../sunday/service-kit";
import { StructuredData } from "../components/StructuredData";

/* A guide page for search: not linked from the menu, but in the sitemap.
   Where to get digitals and headshots in Seattle + Tacoma, told through a real shoot at LOFT. */
export const Route = createFileRoute("/loft-tacoma")({
  head: () => seoHead("/loft-tacoma"),
  component: LoftPage,
});

const E = "/assets/campaigns/ellis-digitals/";
const L = "/assets/guides/loft-tacoma/";

const HAS = [
  { t: "Natural light", d: "Big windows and bright light. We didn't add a single light or flash." },
  { t: "White brick + white floor", d: "A painted brick wall and a white floor, clean enough for agency digitals." },
  { t: "A huge mirror", d: "Easy touch-ups between frames, and a few creative shots too." },
  { t: "Sofas + chairs", d: "Lots of seating to pose on, including a velvet chaise." },
  { t: "Backdrops", d: "Options are there if you want one. For digitals we didn't need it." },
  { t: "Steamer + clothing rack", d: "Outfits stay pressed and organized between looks." },
  { t: "A speaker", d: "Music on, so the session feels relaxed." },
  { t: "Easy parking", d: "Parking was simple, and booking was smooth from start to finish." },
];

const FAQ = [
  { q: "Where can I get model digitals in Seattle or Tacoma?", a: "Any space with big windows and plain walls works. LOFT in Tacoma is one I like: natural light, white brick and a white floor, so digitals come out clean without extra lighting." },
  { q: "Where can I get headshots in Seattle or Tacoma?", a: "Headshots can be shot in a studio like LOFT, at your workplace or outside. A bright, quiet space with a plain background is the easiest way to get a clean, natural headshot." },
  { q: "How long do digitals take?", a: "Ellis's session was booked for one hour, and we had time for his digitals and a second styled outfit." },
  { q: "Do I need a backdrop for digitals?", a: "Usually not. A plain light wall and good daylight are enough, which is what we used at LOFT." },
  { q: "Who books the studio?", a: "I can book and plan the space for you, or shoot at a location you already have in mind." },
];

const faqLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

function LoftPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <StructuredData json={faqLd} />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <PhotoOpen
          imgs={[
            { src: E + "e-5862.jpg", alt: "Ellis in denim on denim, sitting on the white floor at LOFT Tacoma", pos: "center 30%" },
            { src: E + "e-5840.jpg", alt: "Ellis's front-facing digital against the white brick at LOFT Tacoma", pos: "center 12%" },
            { src: E + "e-5846.jpg", alt: "Ellis at the big mirror at LOFT Tacoma", pos: "center 25%" },
          ]}
        />

        <p className="so-micro so-micro-red">A GUIDE · SEATTLE + TACOMA</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(36px, 6vw, 76px)", marginTop: 14, maxWidth: "18ch", lineHeight: 1.02 }}>
          Where to get digitals and headshots in Seattle and Tacoma.
        </h1>
        <p className="so-bw-intro-lead" style={{ marginTop: 22, maxWidth: "56ch" }}>
          One of my favorite places is LOFT in Tacoma. Here's a real shoot there with Ellis, my very first client, and everything the space has that made it easy.
        </p>

        <section className="so-bw-sec lf-shoot">
          <div>
            <p className="so-micro">THE SHOOT</p>
            <h2 className="so-serif so-bw-h">One hour, two outfits.</h2>
            <p className="scr-p">
              I booked a one-hour session and we still had time for two looks:
              his basic digitals, and a slightly more styled denim look. Booking
              was smooth and parking was easy.
            </p>
            <p className="scr-p">
              We didn't need a backdrop. The painted brick wall, white floor and
              bright natural light did everything, so there was no extra lighting
              or flash at all. The big mirror helped with touch-ups, and we used
              the chaise, the rack and the steamer between looks.
            </p>
            <a className="so-bw-inline" href="/campaigns/ellis-digitals" style={{ display: "inline-block", marginTop: 14 }}>See Ellis's full digitals →</a>
          </div>
          <figure className="lf-room">
            <video autoPlay muted loop playsInline preload="metadata" poster={L + "loft-room.jpg"} aria-label="The empty room at LOFT Tacoma: big windows and a white floor">
              <source src={L + "loft-room.mp4"} type="video/mp4" />
              <source src={L + "loft-room.webm"} type="video/webm" />
            </video>
            <figcaption className="so-micro">The room at LOFT, before we started</figcaption>
          </figure>
        </section>

        <section className="so-bw-sec">
          <p className="so-micro">WHAT THE SPACE HAS</p>
          <h2 className="so-serif so-bw-h">Everything we used.</h2>
          <div className="lf-has">
            {HAS.map((h) => (
              <div key={h.t}><p className="sp-t">{h.t}</p><p className="sp-d">{h.d}</p></div>
            ))}
          </div>
        </section>

        <section className="so-bw-sec lf-pair">
          <img src={E + "e-5859.jpg"} alt="Ellis lying on the velvet chaise at LOFT Tacoma" loading="lazy" />
          <img src={E + "e-5842.jpg"} alt="Ellis in profile against the white brick at LOFT Tacoma" loading="lazy" />
        </section>

        <section className="so-bw-sec so-faq-sec">
          <div>
            <p className="so-micro">QUESTIONS</p>
            <h2 className="so-serif so-bw-h">Good to know.</h2>
          </div>
          <div className="so-faq">
            {FAQ.map((f) => (
              <details key={f.q} className="so-faq-item">
                <summary><span>{f.q}</span><span className="so-faq-icon" aria-hidden="true" /></summary>
                <div className="so-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Want to shoot <em>there?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Headshots", "Digitals or headshots at LOFT Tacoma")} className="so-hs-btn is-light">Book a session →</a>
              <a href="/digitals-prep" className="so-hs-more">How to prepare</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
