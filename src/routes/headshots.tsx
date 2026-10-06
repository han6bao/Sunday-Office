import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BookBar, CardRail, FaqList, FitPicker, PriceList, bookHref } from "../sunday/service-kit";

export const Route = createFileRoute("/headshots")({
  head: () => seoHead("/headshots"),
  component: HeadshotsPage,
});

const NOTES = [
  { t: "Light comes first", d: "Light is the first thing I think about. It shapes your face, sets the mood, and makes you look like your favorite version of yourself." },
  { t: "You don't need to pose", d: "I'll tell you where to stand, how to move, and talk you through it the whole time." },
  { t: "Real over perfect", d: "A real smile beats a perfect one. We go for the feeling first and sort out the technical side after." },
  { t: "Same care, every time", d: "Your hundredth shoot or your first, you get the same care and the same light." },
];

const FIT = [
  { label: "I need one great photo for LinkedIn, work or a profile.", pick: "Standard", price: "$150", why: "Clean and simple: one look, one finished photo. Quick, easy and ready to use." },
  { label: "I want options: a couple of outfits and a few different looks.", pick: "More looks", price: "$350", why: "Two outfits and five finished photos, about $70 a photo, so you have the right photo for every profile and platform." },
  { label: "I'm building a brand and need photos for my website and socials.", pick: "Personal branding", price: "from $550", why: "A bigger gallery with more creative room, planned around where the photos will live." },
];

const FAQ = [
  { q: "How many photos do I get?", a: "Standard includes 1 finished photo. More looks includes 5. Personal branding comes with a bigger gallery, and you'll know the exact number when you book." },
  { q: "Where do we shoot?", a: "We pick the spot together, based on the look you want and where the photos will be used." },
  { q: "What should I wear?", a: "Solid colors, softer necklines and clothes you already feel good in. Not sure? Bring a few options and we'll choose together on the day." },
  { q: "I've never had headshots taken. Will I be awkward?", a: "Most people feel that way at first. I direct you the whole time, from where to stand to how to tilt your chin, so all you have to do is show up." },
  { q: "How do I book?", a: <>Send the form with Headshots picked and tell me what the photos are for. I'll reply with times. <a href={bookHref("Headshots")}>Start here →</a></> },
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
              <a href={bookHref("Headshots")} className="so-hs-btn">Book a session →</a>
              <a href="#pricing" className="so-bw-inline">See pricing</a>
            </div>
          </div>
          <div className="so-hs-fan" aria-hidden>
            {["standard-02", "creative-01", "standard-03"].map((s) => (
              <img key={s} src={`/assets/headshots/${s}.jpg`} alt="" />
            ))}
          </div>
        </div>

        <div style={{ scrollMarginTop: 80 }}>
          <PriceList
            title="Headshot sessions."
            items={[
              { t: "Standard", p: "$150", d: "One clean headshot, quick and easy.", list: ["A quick chat about what it's for", "One look", "1 finished photo", "Direction the whole time"] },
              { t: "More looks", p: "$350", d: "Best value: about $70 a photo.", list: ["Outfit guidance before the shoot", "2 outfits", "5 finished photos", "Direction the whole time"] },
              { t: "Personal branding", p: "from $550", tag: "MOST COMPLETE", d: "A bigger gallery with more creative room.", list: ["A planning call + moodboard", "More looks + setups", "A bigger gallery", "Photos for your website + socials"] },
            ]}
            need="Headshots"
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
                        alt={`${k.t} headshot ${i + 1} by Hana, Seattle headshot photographer`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <FaqList items={FAQ} />

        {/* CTA */}
        <section className="so-hs-close">
          <div className="so-hs-close-cta">
            <p className="so-serif so-hs-close-t">Ready when <em>you are.</em></p>
            <div className="so-hs-ctas">
              <a href={bookHref("Headshots")} className="so-hs-btn is-light">Book a session →</a>
              <a href="/photography" className="so-hs-more">More photography</a>
            </div>
          </div>
        </section>
      </div>
      <BookBar service="Headshots" price="from $150" need="Headshots" />
    </div>
  );
}
