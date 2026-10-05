import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BackHome, BookBar, CardRail, FaqList, PriceList, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";

export const Route = createFileRoute("/creative-direction-content")({
  head: () => seoHead("/creative-direction-content"),
  component: DirectionAndContentPage,
});

const NOTES: { t: string; d: string }[] = [
  { t: "PATTERN INTERRUPTION", d: "If everything in the feed looks the same, give the eye something unexpected. Change the framing, opening line, pace, crop, sound, or format." },
  { t: "THE FIRST LINE MATTERS", d: "“Here are our services” says less than “You probably don’t need everything we offer.” Give people a reason to keep reading." },
  { t: "MAKE IT FEEL LIKE YOU", d: "Trends can be useful, but copying one exactly usually isn't. Take the format and make it your own." },
  { t: "ONE IDEA, MULTIPLE LIVES", d: "A 20-minute conversation can become a long-form video, six short clips, a quote carousel, stories, stills, and a follow-up post." },
  { t: "EMOTION IS INFORMATION", d: "Funny, nostalgic, hopeful, curious, comforting, urgent. Decide how you want someone to feel before you decide what the post looks like." },
  { t: "THE TITLE IS PART OF THE DESIGN", d: "The right words can stop someone scrolling before the picture does. Hooks, captions and on-screen text deserve as much thought as the visuals." },
  { t: "NOT EVERYTHING NEEDS TO SELL", d: "Some posts help people recognize you, some build trust, some are just fun, and some make sales. A good feed needs a mix." },
  { t: "THE GRID IS THE STORY", d: "People visit your profile, not just one post. Plan how the whole feed and your highlights look together, not just each picture." },
  { t: "CONSISTENCY OUTRANKS PERFECTION", d: "Posting regularly in a voice people recognize does more than one perfect post. Keep showing up and get better as you go." },
  { t: "SOUND ON, SOUND OFF", d: "Lots of people watch on mute with captions, and lots listen closely. Make it work both ways." },
  { t: "THE SAVE IS THE NEW LIKE", d: "Saves and shares show that people actually valued something. Give them something worth keeping, like a list, a tip or a feeling." },
  { t: "MOOD BEFORE FORMAT", d: "Pick the feeling first, then the format. The same idea could be a story, a reel, a carousel or a photo." },
];

const PROOF = [
  { n: "2M+", d: "Views on one video" },
  { n: "8.5M", d: "Impressions, same video" },
  { n: "1M+", d: "Views on a video I pitched to Cut" },
  { n: "120K", d: "Views on a reel I shot" },
  { n: "49K+", d: "Reshares" },
];

const DIRECTION = ["Moodboards + references", "The look and feel", "Video ideas + pitches", "Casting the right people", "Styling + art direction", "Directing the shoot"];
const SOCIAL = ["Content plan + pillars", "Hooks, titles + captions", "Shooting + editing", "Graphics + templates", "Ongoing posting + rollout"];

const STEPS = [
  {
    t: "Find the feeling",
    d: "How it should feel and who it's for.",
    more: "Before anything gets made, we decide the feeling, the audience and what makes you different. References and a moodboard so we're both picturing the same thing.",
  },
  {
    t: "Plan the content",
    d: "Pillars, formats, a calendar.",
    more: "A simple plan: the few things you'll keep talking about, the formats that suit them, and a rhythm you can actually keep up with.",
  },
  {
    t: "Make it",
    d: "Shoot, edit, design.",
    more: "Photos, video, graphics and the words on top, all made to look like they belong together.",
  },
  {
    t: "Post + adjust",
    d: "Keep it going.",
    more: "It goes out on schedule, we watch what lands, and the next round gets better. Showing up consistently beats one perfect post.",
  },
];

const FAQ = [
  { q: "Is this a one-time thing or monthly?", a: "Either. Some people start with the audit and strategy session and run with it. Others want content every month, which is what the monthly plans are for. Monthly plans start with a 3-month commitment." },
  { q: "Which platforms do you work with?", a: "Instagram, TikTok, Facebook and LinkedIn. Starter covers one platform, Growth covers two plus Facebook, and Full covers all four, including a LinkedIn plan." },
  { q: "Do I get to approve things first?", a: "Always. Every template and every piece of the plan is yours to approve before anything goes out." },
  { q: "What happens to the audit price if I sign up monthly?", a: "It comes off your first month. Growth and Full include the audit free in month one." },
  { q: "Do you post for me?", a: "If you want. Posting and rollout can be part of it, or I hand everything over ready for you to post." },
  { q: "What do you need from me?", a: "A conversation about your business and who you want to reach, and access to whatever you already have. We figure out the rest together." },
  { q: "How do we know it's working?", a: "We watch what lands: saves, shares, comments and who reaches out. The next round of content gets better because of it." },
  { q: "Can you shoot the content too?", a: <>Yes. Photos, video, graphics and the words on top can all come from me, so it looks like it belongs together. <a href="/photography">Photography →</a></> },
];

function DirectionAndContentPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · CREATIVE DIRECTION + SOCIAL · SEATTLE"
          title="Creative Direction + Social."
          lead="First the direction: how it should feel, who it's for and how it shows up. Then the content that keeps it going, week after week."
          aside={
            <>
              Need video too? <a className="so-bw-inline" href="/moving-image">Moving Image →</a>
            </>
          }
          jumps={[
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Monthly plans", h: "#monthly" },
            { t: "Work", h: "#work" },
            { t: "Questions", h: "#faq" },
          ]}
        />

        <a href="/campaigns/exhibition" className="so-li-shot">
          <img src="/assets/campaigns/exhibition/exh7.jpg" alt="Exhibition, a creative direction and social campaign" style={{ aspectRatio: "21 / 9", objectFit: "cover", objectPosition: "center 40%" }} />
          <span className="so-li-cap">
            <span className="so-micro">FEATURED · EXHIBITION · CREATIVE DIRECTION + SOCIAL CAMPAIGN</span>
            <span className="so-micro so-li-cap-go">SEE THE PROJECT →</span>
          </span>
        </a>

        <section className="so-bw-sec" style={{ marginTop: "clamp(40px, 6vw, 64px)" }}>
          <p className="so-micro">WHEN THE WORK FINDS ITS AUDIENCE</p>
          <div className="so-cd-proof">
            {PROOF.map((p) => (
              <div key={p.d}>
                <b>{p.n}</b>
                <span>{p.d}</span>
              </div>
            ))}
          </div>
        </section>

        <ServiceSteps steps={STEPS} title="How it keeps going." />

        <WorkCards
          label="DIRECTION + CONTENT I'VE DONE"
          items={[
            { t: "Exhibition", w: "Creative direction + social", d: "A campaign built from the idea outward.", img: "/assets/campaigns/exhibition/exh12.jpg", h: "/campaigns/exhibition" },
            { t: "Jaydyn F.", w: "Artist social", d: "BTS, clips and stills that kept him visible between drops.", img: "/assets/campaigns/jaydyn-f/jd-thumb.jpg", h: "/campaigns/jaydyn-f" },
            { t: "Selaras Haus", w: "Interior photography", d: "Angie Tiara's skin, scalp and makeup boutique.", img: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", h: "/campaigns/selaras-haus" },
          ]}
        />

        <PriceList
          id="monthly"
          need="Monthly content"
          label="MONTHLY CONTENT"
          title="Content every month."
          items={[
            { t: "Starter", p: "$600/mo", d: "An easy, affordable start. About $75 a post.", list: ["1 pro photo shoot (1 hour) + iPhone content", "About 15 edited photos you keep", "8 posts on 1 platform", "Captions, hashtags + a 30-day plan", "3 post + 3 story templates in Canva", "Highlight covers in your colors"] },
            { t: "Growth", p: "$1,500/mo", tag: "BEST VALUE", d: "Where accounts start to grow. About $62 a post.", list: ["Everything in Starter, plus:", "A photo + video shoot, about 30 edited photos", "16 posts + 8 reels", "A set of stories every week", "Instagram + TikTok, plus Facebook", "Monthly trend + competitor research", "10 post + 10 story templates, plus stickers", "Audit + strategy free in month one"] },
            { t: "Full", p: "$2,800/mo", d: "I run your content, start to finish.", list: ["Everything in Growth, plus:", "A second shoot, 50+ edited photos a month", "24 posts + 12 reels", "Stories posted for you every week", "Instagram, TikTok, Facebook + LinkedIn", "Ad-ready cuts of your best reels", "I post for you + a monthly report and check-in", "New Canva templates every month"] },
          ]}
          foot={<>Need a styled campaign every month, with video and ad creative? <strong>Signature plans start at $4,000 a month</strong>, built around you. <a className="so-bw-inline" href="/?need=Monthly%20content&pkg=Signature#inquiry">Ask me →</a><br /><br />Monthly plans start with a 3-month commitment. Every template and post is yours to approve before it goes out. Need something printed? Menus, signs and flyers can be added to any plan, from $75. <a className="so-bw-inline" href="/branding#pricing">See print + signage →</a></>}
        />

        <PriceList
          id="direction"
          need="Creative Direction"
          label="CREATIVE DIRECTION"
          title="Direction, without the monthly plan."
          items={[
            { t: "Shoot direction", p: "from $450", d: "For one shoot, with your photographer or with me.", list: ["The concept + a moodboard", "A shot list", "Styling notes", "I direct on set"] },
            { t: "Campaign direction", p: "from $1,200", tag: "FOR LAUNCHES", d: "A launch, a drop or an event.", list: ["The big idea", "Moodboards + shot lists", "Casting, locations + styling", "A rollout plan", "One day of on-set direction"] },
            { t: "Direction retainer", p: "from $550/mo", d: "For brands with their own team.", list: ["A monthly concept + plan", "I review everything before it posts", "No shooting"] },
          ]}
          foot={<>Booking a photo shoot with me? Add creative direction to any shoot for $200. See campaigns I've directed: <a className="so-bw-inline" href="/campaigns/exhibition">Exhibition</a> and <a className="so-bw-inline" href="/campaigns/chitos">Chitos International</a>.</>}
        />

        <PriceList
          id="start-smaller"
          need="Creative Direction"
          label="OR START SMALLER"
          title="One-time help."
          items={[
            { t: "Audit + strategy", p: "from $400", d: "Know exactly what to post and why.", list: ["Research into your accounts, audience + competitors", "A 90-minute meeting", "3 to 4 topics + how often to post", "3 quick fixes for this week", "Comes off your first month if you go monthly"] },
            { t: "Canva brand kit", p: "from $250", d: "Templates you can edit yourself.", list: ["15 templates in your colors + fonts", "4:5 + 1:1 posts", "Stories + story stickers", "Highlight covers", "You approve every template"] },
          ]}
        />

        <FaqList items={FAQ} />

        <ServiceCta current="direction" title="Let's make something real." sub="SET THE DIRECTION, THEN KEEP IT GOING." />
      </div>
      <BookBar service="Creative Direction + Social" price="from $250" need="Creative Direction" />
    </div>
  );
}
