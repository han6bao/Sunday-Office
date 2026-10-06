import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BackHome, BookBar, CardRail, FaqList, PriceList, PriceRows, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";

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
            { t: "Starter", p: "$600/mo", d: "An easy, affordable start.", list: ["1 pro photo shoot (1 hour) + iPhone content", "About 15 edited photos you keep", "8 posts on 1 platform", "Captions, hashtags + a 30-day plan", "3 post + 3 story templates in Canva", "Highlight covers in your colors", "A profile + bio refresh in month one", "Your photos, videos + brand files organized in Google Drive or Dropbox"] },
            { t: "Growth", p: "$1,500/mo", tag: "BEST VALUE", d: "Where accounts start to grow.", list: ["Everything in Starter, plus:", "A photo + video shoot, about 30 edited photos", "16 posts + 8 reels", "A set of stories every week", "Instagram + TikTok, plus Facebook", "Monthly trend + competitor research", "Hooks, trending audio + reel ideas", "10 post + 10 story templates, plus stickers", "A monthly calendar you approve", "A monthly results recap", "Audit + strategy free in month one"] },
            { t: "Full", p: "$2,800/mo", d: "I run your content, start to finish.", list: ["Everything in Growth, plus:", "A second shoot, 50+ edited photos a month", "24 posts + 12 reels", "Stories posted for you every week", "Instagram, TikTok, Facebook + LinkedIn", "Ad-ready cuts of your best reels", "Fresh photos for your Google Business Profile", "I post for you + a monthly report and check-in", "A strategy session every quarter", "New Canva templates every month", "Priority booking for shoots"] },
          ]}
          foot={<>Monthly plans start with a 3-month commitment. Every template and post is yours to approve before it goes out. Need something printed? Menus, signs and flyers can be added to any plan, from $75. <a className="so-bw-inline" href="/branding#pricing">See print + signage →</a></>}
        />

        <PriceRows
          id="more"
          need="Creative Direction"
          label="OTHER WAYS TO WORK WITH ME"
          title="More ways to work together."
          groups={[
            {
              h: "Content, one time",
              sub: "No monthly plan needed.",
              rows: [
                { t: "Content day", d: "About 2 hours on iPhone, 5 to 8 edited short videos for Reels and TikTok.", p: "$350" },
                { t: "Photo + content day", d: "A brand photo shoot and short videos in one visit. Fills your feed and your website for weeks.", p: "from $900" },
                { t: "Canva brand kit", d: "15 post and story templates in your colors, yours to edit.", p: "from $250" },
                { t: "Audit + strategy", d: "Know what to post and why. Comes off your first month if you go monthly.", p: "from $400" },
              ],
            },
            {
              h: "Creative direction",
              sub: "The idea and the plan, for shoots, launches and teams.",
              rows: [
                { t: "Shoot direction", d: "Concept, moodboard, shot list and styling, and I direct on set.", p: "from $450" },
                { t: "Campaign direction", d: "A launch, drop or event: the idea, casting, locations, rollout and a day on set.", p: "from $1,200" },
                { t: "Direction retainer", d: "For brands with their own team. A monthly plan, and I review everything before it posts.", p: "from $550/mo" },
                { t: "Signature", d: "A styled campaign every month, with video and ad creative.", p: "from $4,000/mo" },
              ],
            },
          ]}
          foot={<>Everything I make for you is delivered organized in a shared Google Drive or Dropbox folder, so you can always find it. Booking a photo shoot with me? Add creative direction for $200. Campaigns I've directed: <a className="so-bw-inline" href="/campaigns/exhibition">Exhibition</a> and <a className="so-bw-inline" href="/campaigns/chitos">Chitos International</a>.</>}
        />

        <FaqList items={FAQ} />

        <ServiceCta current="direction" title="Let's make something real." sub="SET THE DIRECTION, THEN KEEP IT GOING." />
      </div>
      <BookBar service="Creative Direction + Social" price="from $250" need="Creative Direction" />
    </div>
  );
}
