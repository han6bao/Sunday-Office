import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../../sunday/seo";
import { SiteBar } from "../../sunday/site-bar";
import { BackHome, ListBlock, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../../sunday/service-kit";

export const Route = createFileRoute("/photography/")({
  head: () => seoHead("/photography"),
  component: PhotographyPage,
});

const ROOMS = [
  { t: "People", tags: "Headshots · portraits · personal branding · artists", img: "/assets/photography/avery-01.jpg", h: "/photography/people" },
  { t: "Brands", tags: "Campaigns · product · food · hospitality", img: "/assets/campaigns/bar-bistro/bb-01.jpg", h: "/photography/brands" },
  { t: "Events", tags: "Nightlife · performances · live coverage", img: "/assets/campaigns/leon-thomas/night-02.jpg", h: "/photography/events" },
  { t: "Creative", tags: "Editorial · conceptual · fashion · experimental", img: "/assets/campaigns/exhibition/exh2.jpg", h: "/photography/creative" },
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
            </>
          }
          jumps={[
            { t: "Browse the rooms", h: "#rooms" },
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
          ]}
        />

        {/* The four rooms — the directory */}
        <section id="rooms" className="so-bw-sec" style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
          <p className="so-micro">FOUR ROOMS · PICK ONE</p>
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

        <ListBlock id="get" label="WHAT YOU GET" title="Photos that look good and get used." rows={INCLUDED} />

        <ServiceSteps steps={STEPS} />

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

        <ServiceCta current="photography" title="Have something to shoot?" sub="CAMPAIGNS, CONTENT, HEADSHOTS AND EVERYTHING IN BETWEEN." />

        <BackHome />
      </div>
    </div>
  );
}
