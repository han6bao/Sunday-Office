import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { HelpBottom, HelpTop } from "../../sunday/help-kit";
import { PHOTO } from "../../sunday/help-content";
import { BackHome, BookBar, FaqList, FitPicker, ListBlock, PriceList, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../../sunday/service-kit";
import { ServiceQuiz } from "../../sunday/service-quiz";
import { QUIZ_PHOTO } from "../../sunday/quiz-content";

export const Route = createFileRoute("/photography/")({
  head: () => seoHead("/photography"),
  component: PhotographyPage,
});

const ROOMS = [
  { t: "People", tags: "Headshots · portraits · personal branding · artists", img: "/assets/photography/avery-01.jpg", h: "/photography/people" },
  { t: "Brands", tags: "Campaigns · product · food · hospitality", img: "/assets/campaigns/bar-bistro/bb-01.jpg", h: "/photography/brands" },
  { t: "Events", tags: "Nightlife · performances · live coverage", img: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/photography/events" },
  { t: "Creative", tags: "Editorial · conceptual · fashion · experimental", img: "/assets/campaigns/exhibition/exh2.jpg", h: "/photography/creative" },
  { t: "Headshots", tags: "Work · LinkedIn · actors · teams", img: "/assets/headshots/creative-01.jpg", h: "/headshots" },
  { t: "Model digitals", tags: "For new + working models · agency-ready", img: "/assets/campaigns/ellis-digitals/ed-07.jpg", h: "/digitals" },
];

const INCLUDED = [
  { t: "A plan", d: "What the photos are for, a shot list, references and the right location before anyone picks up a camera." },
  { t: "Direction on the day", d: "Never been photographed? Most people haven't. I'll guide you the whole time, so you look like yourself, not stiff." },
  { t: "Edited by me", d: "Color, cleanup and retouching, done by hand so everything looks like it belongs together." },
  { t: "Ready for everywhere", d: "Sized for your website, your feed, print and stories, so the photos actually get used." },
];

const STEPS = [
  {
    t: "Talk",
    d: "What the photos need to do.",
    more: "Book clients, sell a product, fill a feed, launch something, remember the night. The goal decides everything else: the look, the location, how many photos you need.",
  },
  {
    t: "Plan the shoot",
    d: "Shot list, mood, place.",
    more: "References and a mood so we agree on the feeling, a shot list so nothing gets missed, and a time and place that work for the light.",
  },
  {
    t: "Shoot day",
    d: "Relaxed and directed.",
    more: "I direct the whole time (posing, angles, little adjustments) so you can relax and just be in it.",
  },
  {
    t: "Edit + deliver",
    d: "Finished, ready to post.",
    more: "I pick the best frames, edit them by hand and deliver them ready for your site, your feed and print.",
  },
];

const FIT = [
  { label: "A headshot or a few portraits of me.", pick: "Headshots", price: "from $150", why: "Clean, natural headshots with direction the whole time. Three session sizes, from one quick look to a full personal branding shoot.", pkg: "Headshots" },
  { label: "Photos of my business: food, products, the space or my team.", pick: "Brand photography", price: "from $550", why: "A half-day shoot and 30+ edited photos, planned around where they'll live, so you get the shots your website, menu and feed actually need." },
  { label: "Coverage of an event, a night or a performance.", pick: "Event coverage", price: "$150 an hour", why: "The moments people want to relive, edited and delivered ready to post while people are still talking about it. Two-hour minimum." },
  { label: "Something editorial, conceptual or for a campaign.", pick: "Creative shoot", price: "from $550", why: "The idea comes first: the concept and a moodboard are included, so we agree on the look before the shoot day." },
];

const FAQ = [
  { q: "How much does a shoot cost?", a: <>Headshots start at $150 (<a href="/headshots#pricing">see sessions</a>). Brand and creative shoots start at $550, and events are $150 an hour with a two-hour minimum. You'll know the final number before anything is booked.</> },
  { q: "I've never been photographed. Is that okay?", a: "Most people haven't. I direct you the whole time, so you look like yourself, not stiff." },
  { q: "Where do we shoot?", a: "Wherever suits the photos: your space, a location we pick together, or somewhere that fits the look. We decide when we plan." },
  { q: "Can you do video on the same day?", a: <>Yes. Photos and video can come from the same shoot, so one day covers more. <a href="/moving-image">See moving image →</a></> },
  { q: "How do I get my photos?", a: "I pick the best frames, edit them by hand and deliver them in an online gallery you can download from, sized for your website, your feed and print." },
  { q: "When do I get my photos?", a: "A sneak peek within 48 hours, and your full gallery within 2 weeks." },
  { q: "Is retouching included?", a: "Light retouching is included when you ask for it. Detailed work, like removing objects, is quoted per photo." },
  { q: "Do you travel?", a: "Yes. Travel outside Seattle is quoted based on where we're going." },
  { q: "Can I use the photos anywhere?", a: "You can use them on your website, social media, menus and marketing. They're licensed for your own business." },
  { q: "What if I need to reschedule?", a: "Free with at least 48 hours notice. With less than 48 hours, the deposit is kept." },
  { q: "How do I pay?", a: "Half upfront to book your spot, and the other half when the work is done." },
  { q: "Will you share my project?", a: "Usually yes, on my site and Instagram, because the work is what helps the next client trust me. If you'd rather keep it private, just tell me." },
];

function PhotographyPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · PHOTOGRAPHY · SEATTLE"
          title="Photography."
          lead="From a single headshot to a full campaign. Every shoot is planned around what the photos need to do for you, so they look good and actually get used."
          aside={
            <>
              Looking for a headshot? Sessions start at $150.{" "}
              <a className="so-bw-inline" href="/headshots#pricing">See headshots →</a>
              <br />Modeling? <a className="so-bw-inline" href="/digitals">Model digitals →</a>
            </>
          }
          jumps={[
            { t: "Browse the rooms", h: "#rooms" },
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Which one fits", h: "#fit" },
            { t: "Questions", h: "#faq" },
          ]}
        />

        {/* The four rooms — the directory */}
        <section id="rooms" className="so-bw-sec" style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
          <p className="so-micro">SIX ROOMS · PICK ONE</p>
          <div className="so-ph-rooms">
            {ROOMS.map((r) => (
              <a key={r.t} href={r.h} className="so-ph-room">
                <span className="so-ph-room-img">
                  <img src={r.img} alt={r.t} loading="lazy" />
                </span>
                <p className="so-bw-t">
                  {r.t} <span className="arr" aria-hidden>→</span>
                </p>
                <p className="so-micro">{r.tags}</p>
              </a>
            ))}
          </div>
        </section>

        <ServiceQuiz c={QUIZ_PHOTO} />

        <HelpTop c={PHOTO} />

        <ServiceSteps steps={STEPS} title="How a shoot comes together." />

        <WorkCards
          label="SHOOTS I'VE DONE"
          items={[
            { t: "Chutneys Bellevue", w: "Food + promo photos", d: "The plates, the room and the color of the food.", img: "/assets/campaigns/chutneys/ch-02.jpg", h: "/campaigns/chutneys" },
            { t: "Avery Tien", w: "Portraits", d: "Portraits that look like the person in them.", img: "/assets/photography/avery-02.jpg", h: "/campaigns/avery-tien" },
            { t: "Leon Thomas × Vice", w: "Event coverage", d: "The Mutts Don't Heel afterparty in Seattle.", img: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/campaigns/leon-thomas" },
          ]}
        />

        {/* Headshots */}
        <section className="so-bw-sec so-bw-how so-ph-hs">
          <div style={{ maxWidth: "48ch" }}>
            <p className="so-micro">NEED A HEADSHOT?</p>
            <p className="so-bw-t" style={{ fontSize: 20, marginTop: 8 }}>Clean, natural and actually you.</p>
            <p className="so-bw-d">For professionals, creatives, actors and anyone who wants a photo they feel good about.</p>
            <a className="so-bw-inline" href="/headshots" style={{ display: "inline-block", marginTop: 10 }}>
              See headshots →
            </a>
          </div>
          <div className="so-ph-hs-faces">
            {["standard-01", "standard-02", "standard-03"].map((s) => (
              <img key={s} src={`/assets/headshots/${s}.jpg`} alt="Professional headshot, Seattle headshot photography by Sunday Office" loading="lazy" />
            ))}
          </div>
        </section>

        <PriceList
          need="Photography"
          title="Where shoots start."
          feature
          items={[
            { t: "Headshots", p: "from $150", d: "Clean, natural and actually you.", list: ["Three session sizes", "Direction the whole time", "See all sessions on the headshots page"] },
            { t: "Brand photography", p: "from $550", tag: "FOR BUSINESSES", d: "Food, products, your space, your team.", list: ["A planning call + shot list", "Half-day shoot", "30+ edited photos", "Sized for web, social + print"] },
            { t: "Event coverage", p: "$150/hr", d: "Two-hour minimum.", list: ["A quick call before the event", "The moments that matter", "Edited + ready to post"] },
            { t: "Creative or editorial", p: "from $550", d: "For campaigns, artists and ideas.", list: ["Concept + moodboard included", "Styling + art direction", "Edited by hand"] },
          ]}
          foot="You'll know the final number before anything is booked."
        />

        <HelpBottom c={PHOTO} />

        <FaqList items={FAQ} />

        <ServiceCta current="photography" title="Have something to shoot?" sub="CAMPAIGNS, CONTENT, HEADSHOTS AND EVERYTHING IN BETWEEN." />
      </div>
      <BookBar service="Photography" price="from $150" need="Photography" />
    </div>
  );
}
