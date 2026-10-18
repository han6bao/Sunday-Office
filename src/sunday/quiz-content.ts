import { WHO_BIZ, type QuizCfg } from "./service-quiz";

const MADE_NOT_MANAGED =
  "I make the assets in your brand. You keep full creative control and post on your own, with as much guidance as you want. I don't manage your accounts, reply to DMs or run ads.";

export const QUIZ_BRANDING: QuizCfg = {
  need: "Branding",
  kicker: "Not sure what you need?",
  title: "Find your starting point.",
  sub: "Three quick questions. You'll get one clear first step and a starting price.",
  who: WHO_BIZ,
  whatQ: "What do you need most right now?",
  what: [
    { t: "A logo", rec: { t: "Logo", p: "", why: "A mark designed from scratch, with icon and wordmark versions and every file you need. Two concepts to choose from.", more: { t: "See what's included", h: "/branding#pricing" } } },
    { t: "I have a logo, but the rest feels messy", rec: { t: "Brand kit", p: "", why: "Keep the logo people already know. I build the colors, fonts and voice around it, so everything finally matches.", more: { t: "See what's included", h: "/branding#pricing" } } },
    { t: "A look I can keep posting with myself", rec: { t: "Brand kit + Social starter", p: "", why: "Your brand kit, plus a starter social pack of 10 designs in Canva, so every post looks like you without starting from zero.", more: { t: "How social packs work", h: "/social-packs" } } },
    { t: "Everything, from scratch or a full rebrand", rec: { t: "Full brand world", p: "", why: "Strategy, research, three logo concepts, colors, fonts, voice and a full guide. The whole world, built to last.", more: { t: "See what's included", h: "/branding#pricing" } } },
    { t: "Just posts I can edit", rec: { t: "Social pack", p: "", why: "20 designs in your brand, set up in Canva, with stickers and a caption guide. Shooting with me? Your photos go right in.", more: { t: "How social packs work", h: "/social-packs" } } },
    { t: "Menus, signs or flyers", rec: { t: "Print kit", p: "", why: "A menu, an A-frame and two signs, all matching and print-ready.", more: { t: "See add-ons", h: "/branding#addons" } } },
  ],
  howQ: "How hands-on do you want to be?",
  how: [
    { t: "I'll run it myself, just set me up", add: "I build it, hand over every file and walk you through it, so you can use it confidently on your own." },
    { t: "I want guidance along the way", add: "You approve every step, and I'll show you how to use it all, including Canva if you've never opened it.", link: { t: "The Canva guide", h: "/social-packs" } },
    { t: "Make it for me, I don't have time", add: "Pair your brand with monthly content. I make the posts and write the captions, and you just press post.", link: { t: "Monthly content", h: "/creative-direction-content#monthly" } },
  ],
};

export const QUIZ_WEBSITES: QuizCfg = {
  need: "Website",
  kicker: "Not sure which site you need?",
  title: "Find the right website.",
  sub: "Three quick questions, one clear answer and a price.",
  who: WHO_BIZ,
  whatQ: "What are you looking for?",
  what: [
    { t: "One page for my business or an offer", rec: { t: "Landing page", p: "", why: "One designed page: who you are, what you offer and a booking button, built for phones with your domain connected. Just need a link-in-bio page? I make those too.", more: { t: "See options", h: "/websites#pricing" } } },
    { t: "A simple site people can book me from", rec: { t: "Simple site + SEO", p: "", why: "Four to five pages, words written with you, booking plugged in, and set up so people searching in Seattle can find you.", more: { t: "See options", h: "/websites#pricing" } } },
    { t: "A bigger site: menus, galleries, lots of services", rec: { t: "Full site", p: "", why: "More pages and more going on. We map out exactly what you need first, so the price matches the site.", more: { t: "See options", h: "/websites#pricing" } } },
    { t: "A new site with photos made for it", rec: { t: "The Launch", p: "", why: "A simple site with SEO plus a half-day brand shoot, with 30+ photos placed right on your pages.", more: { t: "See packages", h: "/websites#packages" } } },
    { t: "My site exists, it just needs help", rec: { t: "Fixes + a refresh", p: "", why: "Broken links, new sections, better photos or words, on the platform you already have. If a rebuild makes more sense, I'll tell you honestly.", more: { t: "Makeover options", h: "/websites#makeover" } } },
    { t: "Someone to look after my site", rec: { t: "Care plan", p: "", why: "Up to 3 updates a month, hosting, backups, a monthly report and a seasonal refresh. First month free when you add it at launch.", more: { t: "See the care plan", h: "/websites#care" } } },
  ],
  howQ: "After it's live, who makes the changes?",
  how: [
    { t: "I want to edit it myself", add: "I can build on Squarespace, Wix or Showit so you can edit text yourself, and I'll show you how." },
    { t: "I'd rather send changes to you", add: "Every site gets one free round of changes. After that, updates are billed per change, or the care plan covers 3 a month.", link: { t: "The care plan", h: "/websites#care" } },
    { t: "Not sure yet", add: "Most people start with custom code: faster, fully yours and nothing to cancel. We'll decide together on the first call." },
  ],
};

export const QUIZ_PHOTO: QuizCfg = {
  need: "Photography",
  kicker: "Not sure what kind of shoot?",
  title: "Find the right shoot.",
  sub: "Three quick questions and you'll know where to start.",
  who: WHO_BIZ,
  whatQ: "What do you need photos for?",
  what: [
    { t: "My brand: website, socials, menus", rec: { t: "Brand photography", p: "", why: "A half-day shoot with 30+ edited photos of your space, your work, your product and your people. Planned with a shot list so nothing gets missed.", more: { t: "Brand photography", h: "/photography/brands" } } },
    { t: "A styled, creative shoot", rec: { t: "Creative + editorial shoot", p: "", why: "A concept and moodboard first, then a styled shoot with direction the whole time. For artists, releases and anything that should look like a campaign.", more: { t: "Creative work", h: "/photography/creative" } } },
    { t: "Headshots", rec: { t: "Headshots", p: "", why: "One clean headshot, more looks to rotate, or a whole personal brand set. Direction the whole time, so you look like yourself.", more: { t: "Headshot sessions", h: "/headshots" } } },
    { t: "Model digitals for agencies", rec: { t: "Model digitals", p: "", why: "The full agency set in natural light: front, three-quarter, profile and full length, with a natural edit and help picking your selects.", more: { t: "Model digitals", h: "/digitals" } } },
    { t: "An event", rec: { t: "Event coverage", p: "", why: "Candids, details and the room, with a 2-hour minimum. Sneak peeks in 48 hours.", more: { t: "Events", h: "/photography/events" } } },
    { t: "Photos and video together", rec: { t: "The Drop", p: "", why: "Shoot direction, a half-day photo shoot and a phone content day, planned as one so everything matches.", more: { t: "Campaign packages", h: "/moving-image#campaigns" } } },
  ],
  howQ: "Do you know the look you want?",
  how: [
    { t: "Yes, I have ideas", add: "Send me what you love. I'll turn it into a shot list and we'll go." },
    { t: "Kind of, I'd like help", add: "I'll put together a moodboard and shot list with you before the shoot, so you walk in knowing the plan." },
    { t: "No idea, guide me fully", add: "Add creative direction: concept, styling, props and posing, all planned for you.", link: { t: "Creative direction", h: "/creative-direction-content" } },
  ],
};

export const QUIZ_HEADSHOTS: QuizCfg = {
  need: "Headshots",
  kicker: "Not sure which session?",
  title: "Find your headshot session.",
  sub: "Three quick questions, one clear answer.",
  whoQ: "Who are the photos for?",
  who: [
    { t: "Work, LinkedIn or press", tip: "Simple clothes, solid colors. The photo should look like you on a really good day." },
    { t: "Actor or model", tip: "Agencies want the real you: clean skin, natural light, hair off the face." },
    { t: "Creative or artist", tip: "Bring something that feels like your work. An object, an outfit, a color." },
    { t: "Business owner", tip: "Shoot where you work if you can. Your space tells your story too." },
    { t: "My team", tip: "Matching light and backgrounds make a team page look like one brand." },
  ],
  whatQ: "What do you need?",
  what: [
    { t: "One great photo", rec: { t: "Standard", p: "", why: "One look and one finished photo, with direction the whole time. Quick and easy.", more: { t: "See sessions", h: "/headshots#pricing" } } },
    { t: "A few looks to rotate", rec: { t: "More looks", p: "", why: "Two outfits and five finished photos. The best value.", more: { t: "See sessions", h: "/headshots#pricing" } } },
    { t: "Digitals for agencies", rec: { t: "Model digitals", p: "", why: "Front, three-quarter, profile and full length in natural light, plus a styled look if you want range.", more: { t: "Model digitals", h: "/digitals" } } },
    { t: "A whole personal brand set", rec: { t: "Personal branding", p: "", why: "A planning call and moodboard, more looks and setups, and a bigger gallery for your site and socials.", more: { t: "See sessions", h: "/headshots#pricing" } } },
    { t: "Headshots for my team", rec: { t: "Team headshots", p: "Quoted per team", why: "Same light and background for everyone, shot at your office or the studio. Tell me how many people.", more: { t: "See sessions", h: "/headshots#pricing" } } },
  ],
  howQ: "How do you feel on camera?",
  how: [
    { t: "Nervous, honestly", add: "Most people are. I direct every angle, hands, chin and expression, so you never have to guess." },
    { t: "Fine, just tell me what to do", add: "Perfect. I'll keep it moving and show you the shots as we go." },
    { t: "Comfortable, I've done this", add: "Great. We'll try a few creative ideas once the safe shots are done." },
  ],
};

export const QUIZ_VIDEO: QuizCfg = {
  need: "Film + Commercials",
  kicker: "Not sure what kind of video?",
  title: "Find the right video.",
  sub: "Three quick questions, one clear starting point.",
  who: WHO_BIZ,
  whatQ: "What do you need video for?",
  what: [
    { t: "Short videos for Reels and TikTok", rec: { t: "Phone content day", p: "", why: "About 2 hours on iPhone, 5 to 8 short vertical videos, edited with captions.", more: { t: "Social + Content", h: "/creative-direction-content" } } },
    { t: "A polished video for my site or an ad", rec: { t: "Camera video", p: "", why: "A half-day shoot with a videographer I direct: one hero video of 60 to 90 seconds plus 3 vertical cuts.", more: { t: "See options", h: "/moving-image#pricing" } } },
    { t: "A brand film or commercial", rec: { t: "Brand film", p: "", why: "Idea, script and shot list, a full-day shoot and a 1 to 2 minute film cut for every platform.", more: { t: "See options", h: "/moving-image#pricing" } } },
    { t: "Photos and video for a launch", rec: { t: "The Campaign", p: "", why: "Campaign direction, a photo shoot, a camera video and a phone content day, planned as one.", more: { t: "Campaign packages", h: "/moving-image#campaigns" } } },
    { t: "Fresh video every month", rec: { t: "Growth plan", p: "", why: "A photo + video shoot each month, 16 posts and 8 Reels, captions written and handed over ready to post.", more: { t: "Monthly content", h: "/creative-direction-content#monthly" } } },
  ],
  howQ: "Who posts it?",
  how: [
    { t: "I'll post it myself", add: "You get every file, sized for each platform, with captions ready to paste." },
    { t: "I'd like help knowing what to post", add: "I'll include a simple posting plan: what goes where and when." },
    { t: "I want it posted for me", add: "That's the Full monthly plan, where I make it and schedule it for you.", link: { t: "Monthly plans", h: "/creative-direction-content#monthly" } },
  ],
  note: MADE_NOT_MANAGED,
};

export const QUIZ_CONTENT: QuizCfg = {
  need: "Social Media / Content",
  kicker: "Not sure what you need for social?",
  title: "Find your content fit.",
  sub: "Three quick questions. Then you'll know exactly where to start.",
  who: WHO_BIZ,
  whatQ: "What would help you most?",
  what: [
    { t: "Designs I can post on my own", rec: { t: "Social pack", p: "", why: "20 designs in your brand, set up in Canva, with stickers and a caption guide. You stay in full control, and I'll teach you Canva if you need it.", more: { t: "How social packs work", h: "/social-packs" } } },
    { t: "Fresh photos and posts each month, I'll post", rec: { t: "Starter plan", p: "", why: "A pro shoot to start, 8 posts a month with captions and a 30-day plan, handed over ready to post.", more: { t: "Monthly plans", h: "/creative-direction-content#monthly" } } },
    { t: "More content, Reels too", rec: { t: "Growth plan", p: "", why: "A photo + video shoot every month, 16 posts and 8 Reels, research and a calendar you approve.", more: { t: "Monthly plans", h: "/creative-direction-content#monthly" } } },
    { t: "Content made and posted for me", rec: { t: "Full plan", p: "", why: "Everything in Growth with more content, and I schedule and post it for you. Still no DMs, comments or ads, just the content.", more: { t: "Monthly plans", h: "/creative-direction-content#monthly" } } },
    { t: "A plan: what to post and why", rec: { t: "Audit + strategy", p: "", why: "I look at what you're posting, what's working and what isn't, and hand you a clear plan. Credited toward a monthly plan if you sign up.", more: { t: "Monthly plans", h: "/creative-direction-content#monthly" } } },
    { t: "One big content day", rec: { t: "Photo + content day", p: "", why: "A shoot day for photos and short videos, with a shot list and captions, enough to post for weeks.", more: { t: "See one-time options", h: "/creative-direction-content#monthly" } } },
  ],
  howQ: "How involved do you want to be?",
  how: [
    { t: "Full control, I post everything", add: "Exactly how it works by default. I make the assets in your brand, and you decide what goes out and when." },
    { t: "Teach me as we go", add: "I'll walk you through everything, including Canva, so you can keep going long after we're done.", link: { t: "The Canva guide", h: "/social-packs" } },
    { t: "Help me schedule it", add: "On the Full plan I schedule and post for you. On the others, I'll hand you a calendar so it's easy." },
  ],
  note: MADE_NOT_MANAGED,
};
