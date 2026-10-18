import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { HelpBottom, HelpTop } from "../sunday/help-kit";
import { VIDEO } from "../sunday/help-content";
import { BackHome, BookBar, FaqList, ListBlock, PriceList, PriceTabs, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";
import { ServiceQuiz } from "../sunday/service-quiz";
import { QUIZ_VIDEO } from "../sunday/quiz-content";

export const Route = createFileRoute("/moving-image")({
  head: () => seoHead("/moving-image"),
  component: MovingImagePage,
});

const KINDS = [
  { t: "Artists + music", d: "Music video support, visualizers, behind the scenes and release content that keeps going between drops." },
  { t: "Brands + campaigns", d: "Commercials, brand films and campaign cuts for your site and your feed." },
  { t: "Events + culture", d: "Recaps, performances and the moments people want to relive." },
];

const INCLUDED = [
  { t: "The idea", d: "Not every project needs motion. When it does, it should have a reason to move." },
  { t: "Filming", d: "On location or in the studio, planned around the shots that matter." },
  { t: "Editing + color", d: "Cut, colored and finished so it feels like your brand." },
  { t: "Cuts for everywhere", d: "One shoot, many pieces: the main film, vertical cuts, teasers, loops and stills." },
  { t: "Sound on or off", d: "Captions and pacing that work whether people watch muted or with the sound up." },
];

const STEPS = [
  {
    t: "The idea",
    d: "What it should make people feel.",
    more: "We start with the feeling and where it will live. A 15-second reel and a homepage film are different jobs, so the idea comes first.",
  },
  {
    t: "Plan",
    d: "Shots, place, timing.",
    more: "A simple plan: the key shots, the location, the look, and how many cuts we'll need for each platform.",
  },
  {
    t: "Shoot",
    d: "Video and stills together.",
    more: "We film, and grab stills along the way, so one day of production covers more than one need.",
  },
  {
    t: "Edit",
    d: "Cut, color, sound.",
    more: "I edit, color and finish it, polished and commercial or rawer and stranger, whatever the project calls for.",
  },
  {
    t: "Cut for everywhere",
    d: "Ready to post.",
    more: "You get the main piece plus the versions you need: vertical, short teasers, loops and stills, so it keeps working long after it's posted.",
  },
];

const FAQ = [
  { q: "How much does a video cost?", a: "It depends on the size of the project. Ask and I'll send pricing for what you need. Tell me where it will live and what it needs to do, and you'll get a clear price before anything is booked." },
  { q: "Do you come up with the idea?", a: "Yes. Every project starts with the idea and the feeling, and I plan the shots around that. If you already have an idea, we build from yours." },
  { q: "Will I get vertical versions for Reels and TikTok?", a: "Yes. One shoot gets cut for everywhere you need it: the main piece, vertical cuts, short teasers and loops." },
  { q: "Can I get photos from the same shoot?", a: <>Yes. I grab stills along the way, so one day of production covers more than one need. <a href="/photography">See photography →</a></> },
  { q: "Will it work with the sound off?", a: "It's made to. Captions and pacing are planned so it works muted in the feed and with the sound up." },
  { q: "How many rounds of edits?", a: "Two rounds of edits are included on camera videos and brand films." },
  { q: "What about music?", a: "Royalty-free music is included. You can also send your own, and licensed tracks are quoted separately." },
  { q: "What if I need to reschedule?", a: "Free with at least 48 hours notice. With less than 48 hours, the deposit is kept." },
  { q: "How do I pay?", a: "Half upfront to book your spot, and the other half when the work is done." },
  { q: "Will you share my project?", a: "Usually yes, on my site and Instagram, because the work is what helps the next client trust me. If you'd rather keep it private, just tell me." },
];

function MovingImagePage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · FILM + COMMERCIALS · SEATTLE"
          title="Film + Commercials."
          lead="Commercials, brand films and campaign video. Polished pieces for your website, ads and launches, made to keep working long after they're posted."
          aside={
            <>
              Need Reels and short videos for your feed? <a className="so-bw-inline" href="/creative-direction-content">Social + Content →</a>
            </>
          }
          jumps={[
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Work", h: "#work" },
            { t: "Questions", h: "#faq" },
          ]}
        />

        <figure className="so-mi-film">
          <video controls playsInline preload="metadata" poster="/assets/campaigns/chutneys/commercial-poster.jpg">
            <source src="/assets/campaigns/chutneys/commercial.mp4" type="video/mp4" />
          </video>
          <figcaption>
            <span className="so-micro">A COMMERCIAL I MADE FOR CHUTNEYS BELLEVUE · PRESS PLAY</span>
            <a className="so-micro" href="/campaigns/chutneys">SEE THE PROJECT →</a>
          </figcaption>
        </figure>

        <HelpTop c={VIDEO} />

        <ServiceSteps steps={STEPS} title="From idea to every cut." />

        <WorkCards
          label="VIDEO I'VE MADE"
          items={[
            { t: "Chutneys Bellevue", w: "Commercial + photos", d: "A commercial and promo photos for a North Indian restaurant.", img: "/assets/campaigns/chutneys/ch-01.jpg", h: "/campaigns/chutneys" },
            { t: "Jaydyn F.", w: "Release content", d: "Behind the scenes and short clips around his music.", img: "/assets/campaigns/jaydyn-f/jd-07.jpg", h: "/campaigns/jaydyn-f" },
          ]}
        />

        <ServiceQuiz c={QUIZ_VIDEO} />

        <PriceTabs
          label="Film prices"
          tabs={[
            { id: "pricing", t: "Film", node: (
        <PriceList
          id="pricing"
          feature
          need="Film + Commercials"
          title="Where film starts."
          items={[
            { t: "Camera video", p: "", d: "Polished video on pro cameras.", list: ["An idea + shot list first", "Half-day shoot with a videographer I direct", "1 hero video, 60 to 90 seconds, color graded with music", "3 vertical cuts for social"] },
            { t: "Brand film or commercial", p: "", tag: "THE BIG ONE", d: "For your website, an ad or a launch.", list: ["Idea, script + shot list", "Casting, location + styling planned with you", "Full-day shoot, directed on set", "A 1 to 2 minute film", "Cuts for every platform"] },
            { t: "Campaign direction", p: "", d: "Already have a crew? I'll direct it.", list: ["The idea + the rollout plan", "Casting, locations + styling", "A shot list for photo + video", "A day on set, directing"] },
          ]}
          foot={<>You'll know the final number before anything is booked. Just need Reels and short videos? That's a phone content day, on <a className="so-bw-inline" href="/creative-direction-content">Social + Content →</a></>}
        />
            ) },
            { id: "campaigns", t: "Campaigns", node: (
        <PriceList
          id="campaigns"
          feature
          need="Campaign"
          label="CAMPAIGN PACKAGES"
          title="Photo + video, planned as one."
          items={[
            { t: "The Drop", p: "", d: "For a launch, a promo, a new menu or a release.", list: ["Shoot direction: concept, moodboard + shot list", "A half-day photo shoot, 30+ edited photos", "A phone content day, 5 to 8 short videos"] },
            { t: "The Campaign", p: "", tag: "MOST BOOKED", d: "Look like a real brand campaign, in photos and video.", list: ["Campaign direction: the plan, casting, styling + on-set direction", "A half-day photo shoot, 30+ edited photos", "A camera video, 60 to 90 seconds + 3 vertical cuts", "A phone content day for behind the scenes + Reels"] },
            { t: "The Premiere", p: "", d: "The big one: an opening, a rebrand reveal or a release.", list: ["Campaign direction from start to finish", "A full-day photo shoot", "A brand film, 1 to 2 minutes, cut for every platform", "A phone content day", "The full social pack to keep posting in the same look"] },
          ]}
          foot="Campaign packages are for brands that already have a look. Starting from scratch? The Signature adds the full brand. Every campaign is planned as one project, so the photos and video feel like the same world."
        />
            ) },
          ]}
        />

        <HelpBottom c={VIDEO} />

        <FaqList items={FAQ} />

        <ServiceCta current="moving" title="Have something that should move?" sub="ITS OWN PROJECT, OR PART OF A BIGGER CAMPAIGN." />
      </div>
      <BookBar service="Film + Commercials" need="Film + Commercials" />
    </div>
  );
}
