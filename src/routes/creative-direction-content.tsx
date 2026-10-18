import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { HelpBottom, HelpTop } from "../sunday/help-kit";
import { DIRECTION as DIRECTION_HELP } from "../sunday/help-content";
import { BackHome, BookBar, CardRail, FaqList, PriceList, PriceTabs, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";
import { ServiceQuiz } from "../sunday/service-quiz";
import { QUIZ_CONTENT } from "../sunday/quiz-content";

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
  { q: "Is this a one-time thing or monthly?", a: "Either. Some people start with the audit and strategy session and run with it. Others want content every month, which is what the monthly plans are for. Monthly plans start with a 3-month commitment. After that, plans continue month to month, and you can cancel with 30 days notice." },
  { q: "Which platforms do you work with?", a: "Instagram, TikTok, Facebook and LinkedIn. Starter covers one platform, Growth covers two plus Facebook, and Full covers all four, including a LinkedIn plan." },
  { q: "Do I get to approve things first?", a: "Always. Every template and every piece of the plan is yours to approve before anything goes out." },
  { q: "What happens to the audit price if I sign up monthly?", a: "It comes off your first month. Growth and Full include the audit free in month one." },
  { q: "What's a social pack, and how do I use it?", a: <>It's 20 posts, stories and covers in your brand, set up in Canva so you can post on your own. If we shoot together, your photos are already in. <a className="so-bw-inline" href="/social-packs">See how social packs work →</a></> },
  { q: "Do you post for me?", a: "On Full, I schedule and post for you. On Starter and Growth, I hand everything over ready to post, captions included, and you press publish. I don't reply to DMs or comments or run paid ads." },
  { q: "What do you need from me?", a: "A conversation about your business and who you want to reach, and access to whatever you already have. We figure out the rest together." },
  { q: "How do we know it's working?", a: "We watch what lands: saves, shares, comments and who reaches out. The next round of content gets better because of it." },
  { q: "Can you shoot the content too?", a: <>Yes. Photos, video, graphics and the words on top can all come from me, so it looks like it belongs together. <a href="/photography">Photography →</a></> },
  { q: "Can I switch plans later?", a: "You can upgrade anytime. Downgrades take effect at the end of a billing month once the first 3 months are done." },
  { q: "How fast do you reply?", a: "Within 2 business days, including approvals on posts and templates." },
  { q: "What if we skip a month's shoot?", a: "It rolls over one month. After that, it's gone." },
  { q: "Can I change a package?", a: "Packages are set as they are. If you need something different, we'll build it from the single services instead." },
  { q: "What if I need to reschedule?", a: "Free with at least 48 hours notice. With less than 48 hours, the deposit is kept." },
  { q: "Will you share my project?", a: "Usually yes, on my site and Instagram, because the work is what helps the next client trust me. If you'd rather keep it private, just tell me." },
];

function DirectionAndContentPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · SOCIAL + CONTENT · SEATTLE"
          title="Social + Content."
          lead="Everything you make for your feed: content days, short videos, social packs and monthly content. I make the assets in your brand, and you stay in full control of what goes out."
          aside={
            <>
              Need a commercial or a brand film? <a className="so-bw-inline" href="/moving-image">Film + Commercials →</a><br />Need headshots for your profile? <a className="so-bw-inline" href="/headshots">Headshots →</a>
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

        <HelpTop c={DIRECTION_HELP} />

        <ServiceSteps steps={STEPS} title="How it keeps going." />

        <WorkCards
          label="CONTENT I'VE MADE"
          items={[
            { t: "Leon Thomas × Vice", w: "Event content", d: "His tour afterparty at Vice Seattle, shot for the venue to post.", img: "/assets/campaigns/leon-thomas/lt-03.jpg", h: "/campaigns/leon-thomas" },
            { t: "Nine Vicious × Custom Grillz", w: "Photography + promotion", d: "35K views, the Discovery page and a feature by Our Generation Music.", img: "/assets/campaigns/green-grillz/nine-01.jpg", h: "/campaigns/green-grillz" },
            { t: "Exhibition", w: "Creative direction + social", d: "A campaign built from the idea outward.", img: "/assets/campaigns/exhibition/exh12.jpg", h: "/campaigns/exhibition" },
            { t: "Jaydyn F.", w: "Artist social", d: "BTS, clips and stills that kept him visible between drops.", img: "/assets/campaigns/jaydyn-f/jd-thumb.jpg", h: "/campaigns/jaydyn-f" },
          ]}
        />


        <ServiceQuiz c={QUIZ_CONTENT} />

        <section className="so-bw-sec mw-ways" aria-label="How monthly content works">
          <p className="so-micro">HOW MONTHLY WORKS</p>
          <div className="mw-ways-grid">
            <div>
              <p className="mw-ways-k">Starter + Growth</p>
              <p className="mw-ways-t">Made for you.</p>
              <p className="mw-ways-d">I shoot it, edit it and write the captions. You press post.</p>
            </div>
            <div>
              <p className="mw-ways-k">Full</p>
              <p className="mw-ways-t">Made and posted for you.</p>
              <p className="mw-ways-d">Everything above, and I schedule and post it too.</p>
            </div>
          </div>
          <p className="mw-ways-not"><b>I make the assets, you stay in control.</b> Everything is made in your brand, and you decide what goes out and when. I'll guide you the whole way and teach you Canva if you've never used it. <a className="so-bw-inline" href="/social-packs">See the Canva guide →</a></p>
          <p className="mw-ways-not"><b>What I don't do:</b> social media management. No replying to DMs or comments, no running paid ads and no promising follower counts. I make the content that brings people in.</p>
        </section>

        <PriceTabs
          label="Content prices"
          tabs={[
            { id: "monthly", t: "Monthly", node: (
        <PriceList
          id="monthly"
          feature
          need="Monthly content"
          label="MONTHLY CONTENT"
          title="Content every month."
          items={[
            { t: "Starter", p: "", d: "An easy, affordable start.", list: ["A 1 hour pro photo shoot in month one, then every third month, plus iPhone content", "About 15 edited photos from each shoot, yours to keep", "8 posts on 1 platform", "Captions, hashtags + a 30-day plan", "3 post + 3 story templates in Canva", "Highlight covers in your colors", "A profile + bio refresh in month one", "Your photos, videos + brand files organized in Google Drive or Dropbox"] },
            { t: "Growth", p: "", tag: "BEST VALUE", d: "Where accounts start to grow.", list: ["Everything in Starter, plus:", "A photo + video shoot, about 30 edited photos", "16 posts + 8 reels", "A set of stories every week", "Instagram + TikTok, plus Facebook", "Monthly trend + competitor research", "Hooks, trending audio + reel ideas", "10 post + 10 story templates, plus stickers", "A monthly calendar you approve", "A monthly results recap", "Audit + strategy free in month one"] },
            { t: "Full", p: "", d: "Made and posted for you, start to finish.", list: ["Everything in Growth, plus:", "A second shoot, 50+ edited photos a month", "24 posts + 12 reels", "Stories posted for you every week", "Instagram, TikTok, Facebook + LinkedIn", "Ad-ready cuts of your best reels", "Fresh photos for your Google Business Profile", "I post for you + a monthly report and check-in", "A strategy session every quarter", "New social pack designs every month", "Priority booking for shoots"] },
            { t: "Direction retainer", p: "", d: "For brands with their own team. A monthly plan, and I review everything before it posts.", list: ["A monthly content plan", "Shot lists + references for your team", "I review everything before it posts", "A monthly check-in"] },
            { t: "Signature", p: "", d: "A styled campaign every month, with video and ad creative.", list: ["Everything in Full", "A styled campaign shoot every month", "Video + ad creative", "For brands that want something truly beautiful"] },
          ]}
          foot={<>Monthly plans start with a 3-month commitment, and paying 3 months upfront saves you more. Every template and post is yours to approve before it goes out. Monthly clients also get a discount on one-time add-ons and the website care plan. Ask for pricing on any plan.</>}
        />
            ) },
            { id: "one-time", t: "One time", node: (
        <PriceList
          id="one-time"
          feature
          need="Social Media / Content"
          label="ONE TIME"
          title="No monthly plan needed."
          items={[
            { t: "Content day", p: "", d: "About 2 hours on iPhone, 5 to 8 edited short videos for Reels and TikTok.", list: [] },
            { t: "Photo + content day", p: "", tag: "MOST COMPLETE", d: "A brand photo shoot and short videos in one visit, with a shot list up front and captions for every video included. Fills your feed and your website for weeks.", list: ["A brand photo shoot + short videos in one visit", "A shot list planned up front", "Edited photos + 5 to 8 short videos", "Captions written for every video", "Enough to post for weeks"] },
            { t: "Social pack", p: "", d: "Everything to keep posting on your own: your brand set up in Canva, 20 designs you edit yourself (posts, carousels, stories, Reel covers, highlight covers, a flyer, a price menu, a promo + an email header), story stickers, a caption guide and a 30 minute walkthrough. Every template approved by you first.", list: [] },
            { t: "Audit + strategy", p: "", d: "Know what to post and why. Free when you go monthly: it comes off your first month.", list: [] },
          ]}
          foot={<>Everything I make for you is delivered organized in a shared Google Drive or Dropbox folder, so you can always find it. Want headshots or brand photos for your feed? <a className="so-bw-inline" href="/photography">See photography →</a></>}
        />
            ) },
          ]}
        />



        <HelpBottom c={DIRECTION_HELP} />

        <FaqList items={FAQ} />

        <ServiceCta current="direction" title="Let's make something real." sub="SET THE DIRECTION, THEN KEEP IT GOING." />
      </div>
      <BookBar service="Social + Content" need="Social Media / Content" />
    </div>
  );
}
