import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BookBar, FaqList, PriceList, bookHref } from "../sunday/service-kit";
import { Checklist } from "../sunday/help-kit";
import { ServiceQuiz, type QuizCfg } from "../sunday/service-quiz";

export const Route = createFileRoute("/digitals")({
  head: () => seoHead("/digitals"),
  component: DigitalsPage,
});

const A = "/assets/campaigns/ellis-digitals/";

const SHOTS = [
  { t: "Front, close", d: "Your face straight on, hair off the face." },
  { t: "Three-quarter", d: "Turned slightly, so they see your bone structure." },
  { t: "Profile", d: "Both sides, chin level." },
  { t: "Full length, front", d: "Head to toe, standing naturally." },
  { t: "Full length, side + back", d: "So they can see your shape and posture." },
  { t: "A smile and a serious look", d: "Agencies want to see both." },
];

const WANT = [
  "Your real face: clean skin, light or no makeup, no heavy edit",
  "Simple, fitted clothes so your shape reads",
  "Natural light that shows your true skin tone",
  "A relaxed expression with life in your eyes",
  "Current photos. If you've changed your hair, it's time for new ones",
];

const PREP = [
  { t: "A fitted black or white top", d: "A tank or a tee with no logos. Bring both if you can." },
  { t: "Fitted jeans or simple pants", d: "Dark, plain and well-fitting. Nothing baggy." },
  { t: "Simple shoes", d: "Clean and plain. Heels if that's the work you want." },
  { t: "Clean skin", d: "Moisturize. Light or no makeup, nothing that changes your face." },
  { t: "Hair as you'd show up to a casting", d: "Natural and off the face. Bring a hair tie." },
  { t: "Your agency's list", d: "If an agency asked for something specific, bring it and send it to me first." },
];

const NEW = [
  { t: "You don't need a portfolio to start", d: "Most agencies ask for digitals first. Simple and honest beats styled and edited." },
  { t: "Know your numbers", d: "Height and measurements, measured honestly. Agencies will check." },
  { t: "Send fewer, better photos", d: "A tight set of strong selects reads better than fifty photos. I'll help you pick." },
  { t: "Update them often", d: "New hair, new look, new season: new digitals." },
];

const QUIZ: QuizCfg = {
  need: "Headshots",
  kicker: "Not sure what you need?",
  title: "Find the right session.",
  sub: "Three quick questions for models and actors.",
  whoQ: "Where are you right now?",
  who: [
    { t: "Brand new, just starting", tip: "Start with digitals. They're what agencies ask for first, and they cost less than a portfolio shoot." },
    { t: "Applying to agencies", tip: "Send a tight set: front, three-quarter, profile and full length, plus your numbers." },
    { t: "Signed, I need updates", tip: "Ask your agent what they're missing before we shoot, so every frame is useful." },
    { t: "Actor", tip: "Casting wants to see the real you. Keep the edit light and the expression alive." },
  ],
  whatQ: "What do you need?",
  what: [
    { t: "Digitals for agencies", rec: { t: "Model digitals", p: "", why: "The full agency set in natural light: front, three-quarter, profile and full length, with a natural edit and help picking your selects.", more: { t: "See what's included", h: "/digitals#pricing" } } },
    { t: "Digitals plus a styled look for range", rec: { t: "Model digitals + a styled look", p: "", why: "Your digitals first, then one styled look in the same session, so agencies see who you are and what you can do. I'll quote the styled look before we book.", more: { t: "See Ellis's shoot", h: "/campaigns/ellis-digitals" } } },
    { t: "Headshots for acting or my profile", rec: { t: "More looks", p: "", why: "Two outfits and five finished headshots, directed the whole time.", more: { t: "Headshot sessions", h: "/headshots" } } },
    { t: "A creative portfolio shoot", rec: { t: "Creative + editorial shoot", p: "", why: "A concept and moodboard first, then a styled shoot with direction the whole time. For your book once the digitals are done.", more: { t: "Creative work", h: "/photography/creative" } } },
  ],
  howQ: "How do you feel in front of the camera?",
  how: [
    { t: "Nervous, it's my first time", add: "Most models start there. I direct every angle, your hands, chin, posture and eyes, so you never have to guess." },
    { t: "Okay, but I want direction", add: "I'll guide you the whole time and show you the shots as we go, so you can see what's working." },
    { t: "Confident, I've done this", add: "Great. We'll get the agency shots done fast, then play with expression and movement." },
  ],
};

const FAQ = [
  { q: "What are digitals?", a: "Simple, natural photos that show agencies exactly what you look like today. No heavy makeup, no styling tricks and no reshaping. Some people call them polaroids." },
  { q: "Do you retouch them?", a: "Lightly. I clean up small things like a stray hair or a bit of dust, but I never change your face, your skin or your shape. That's the point of digitals." },
  { q: "Where do we shoot?", a: <>In a studio or on location with good natural light, your choice. Ellis's digitals were shot at LOFT in Tacoma. <a className="so-bw-inline" href="/campaigns/ellis-digitals">See them →</a></> },
  { q: "Can I get more photos than my package?", a: "Yes. You can add extra photos before the shoot or when we go through your gallery together. More angles and expressions give you fresh options for different agencies, your comp card and your profiles, and it costs far less than booking a second shoot." },
  { q: "How fast do I get them?", a: "A sneak peek within 48 hours and the full gallery in about two weeks. We pick your selects together." },
  { q: "Can you help me get signed?", a: "I can't promise that, and anyone who does isn't being honest. What I can promise is digitals that show you clearly and help you put your best foot forward." },
  { q: "Do I need makeup or a stylist?", a: "No. Clean, moisturized skin is all you need. If you want a styled look after the digitals, we can plan that together." },
];

function DigitalsPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <a href="/photography" className="so-arrow" style={{ marginBottom: 40 }}>
          <span className="arr">←</span> Photography
        </a>

        <p className="so-micro so-micro-red">PHOTOGRAPHY · MODEL DIGITALS · SEATTLE + TACOMA</p>
        <h1 className="so-serif" style={{ fontSize: "clamp(44px, 8vw, 104px)", marginTop: 14 }}>Model digitals.</h1>
        <div className="so-bw-intro" style={{ marginTop: 22 }}>
          <p className="so-bw-intro-lead">
            The first photos an agency asks for. Simple, honest and natural, so
            they see exactly who walks in the door. For new and working models,
            and anyone getting ready to apply.
          </p>
          <div>
            <p className="so-bw-d" style={{ marginTop: 0, maxWidth: "44ch" }}>
              The full agency set, with direction the whole time. Ask for pricing.
            </p>
            <nav className="so-bw-jump" aria-label="On this page">
              <a href="#shots">The shots</a>
              <a href="#prep">How to prepare</a>
              <a href="#pricing">The session</a>
              <a href="#faq">Questions</a>
            </nav>
          </div>
        </div>

        <div className="dg-hero">
          <img src={A + "e-5840.jpg"} alt="Ellis in a white tee and wide jeans, front-facing digital" />
          <img src={A + "e-5841.jpg"} alt="Ellis full length in natural window light" />
          <img src={A + "e-5842.jpg"} alt="Ellis in profile against white brick" />
        </div>

        <ServiceQuiz c={QUIZ} />

        <section id="shots" className="so-bw-sec">
          <p className="so-micro">THE SHOTS</p>
          <h2 className="so-serif so-bw-h">What every agency asks for.</h2>
          <div className="sp-grid">
            {SHOTS.map((x, i) => (
              <div key={x.t} className="sp-cell">
                <p className="sp-k">{String(i + 1).padStart(2, "0")}</p>
                <p className="sp-t">{x.t}</p>
                <p className="sp-d">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="so-micro" style={{ marginTop: 34 }}>WHAT THEY'RE LOOKING FOR</p>
          <ul className="dg-want">{WANT.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>

        <div id="prep">
          <Checklist label="HOW TO PREPARE" title="What to bring." items={PREP} note="Tap each one as you pack it. Not sure about an outfit? Send me a photo before the shoot." />
          <p className="so-bw-d" style={{ marginTop: 18 }}>Want the full list? <a className="so-bw-inline" href="/digitals-prep">The complete prep guide →</a> A week out to the morning of, hair, what to avoid and posing.</p>
        </div>

        <section className="so-bw-sec">
          <p className="so-micro">NEW TO MODELING?</p>
          <h2 className="so-serif so-bw-h">A few things worth knowing.</h2>
          <div className="sp-three">
            {NEW.map((x) => (
              <div key={x.t}>
                <p className="sp-t">{x.t}</p>
                <p className="sp-d">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <PriceList
          need="Headshots"
          title="The session."
          items={[
            { t: "Model digitals", p: "", tag: "FOR MODELS", d: "The full agency set, in natural light, with a natural edit.", list: ["Front, three-quarter, profile + full length", "Direction on every angle and expression", "Natural light that shows your real skin tone", "A light, honest edit", "Help picking the selects you send", "Sneak peek in 48 hours", "Option to add more photos"] },
          ]}
          foot="Want a styled look for range too? We can add it in the same session. I'll quote it before we book."
        />

        <section className="so-bw-sec dg-case">
          <img src={A + "e-5863.jpg"} alt="Ellis seated in a styled look at LOFT Tacoma" />
          <div>
            <p className="so-micro">A RECENT SHOOT</p>
            <h2 className="so-serif so-bw-h">Ellis, at LOFT Tacoma.</h2>
            <p className="sp-d">Digitals plus a styled look, planned around exactly what agencies ask for. I scouted the location, helped with styling and directed every angle.</p>
            <a className="so-link-jump" href="/campaigns/ellis-digitals">See the full shoot →</a>
          </div>
        </section>

        <FaqList items={FAQ} />

        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Ready for <em>your digitals?</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Headshots", "Model digitals")} className="so-hs-btn is-light">Book your digitals →</a>
              <a href="/headshots" className="so-hs-more">See headshot sessions</a>
            </div>
          </div>
        </section>
      </div>
      <BookBar service="Model digitals" need="Headshots" />
    </div>
  );
}
