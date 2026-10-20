export type GuideItem = { t: string; d: string; link?: { t: string; h: string } };
export type Guide = {
  slug: string;
  kicker: string;
  h1: string;
  lead: string;
  seoTitle: string;
  seoDesc: string;
  stages: { t: string; sub: string; work?: { img: string; t: string; h: string }; items: GuideItem[] }[];
  close: string;
  need: string;
};

const WA = "/washington-business-resources";

export const GUIDES: Guide[] = [
  {
    slug: "just-started",
    kicker: "A FREE GUIDE · NEW BUSINESSES IN WASHINGTON",
    h1: "I just started a business. Now what?",
    lead: "Everything a new business needs, in the order that saves you time and money. Use it on your own, tick things off as you go, and reach out only if you want help with a step.",
    seoTitle: "I Just Started a Business: A Step-by-Step Guide for Washington | Sunday Office",
    seoDesc: "Just started a business in Seattle or Washington? A free checklist of everything you need: licenses, brand, website, photos, Google and social, in the right order.",
    stages: [
      {
        t: "Make it official",
        work: { img: "/assets/campaigns/timber-and-tonic-cover.png", t: "Timber & Tonic · a new mobile bar, site in progress", h: "https://timber-and-tonic.vercel.app/" },
        sub: "Do these first. Everything else depends on them.",
        items: [
          { t: "Choose your business structure", d: "Sole proprietor, LLC or corporation. Free advisors can help you decide.", link: { t: "Free advising in Washington", h: WA } },
          { t: "Register with the state", d: "LLCs and corporations file with the Washington Secretary of State.", link: { t: "Where to file", h: WA } },
          { t: "Get your business license", d: "Through the Department of Revenue's Business Licensing Service, plus your city license if you have one.", link: { t: "License links", h: WA } },
          { t: "Open a business bank account", d: "Keep business money separate from day one. It makes taxes much easier." },
          { t: "Get an EIN if you need one", d: "Free from the IRS. You'll need it to hire or for some bank accounts.", link: { t: "Where to get it", h: WA } },
        ],
      },
      {
        t: "Know who you're for",
        work: { img: "/assets/campaigns/pilates-haus-cover.png", t: "Pilates Haus · a new studio, built around who it's for", h: "https://pilates-haus-seattle.vercel.app/" },
        sub: "Ten minutes of thinking that makes every later decision easier.",
        items: [
          { t: "Describe your ideal customer", d: "Who they are, what they need and where they already look for it." },
          { t: "Write one sentence about what you do", d: "If a stranger can repeat it back, it works. Use it everywhere." },
          { t: "Look at five businesses like yours", d: "Pick ones you admire. Notice what they all share, then find what only you bring.", link: { t: "How to stand out", h: "/stand-out" } },
        ],
      },
      {
        t: "Build the brand",
        work: { img: "/assets/campaigns/jazmins-events/kit-guide.jpg", t: "Jazmin's Events · branded from scratch", h: "/websites/jazmins-events" },
        sub: "Do this before the website and the flyers, so everything matches.",
        items: [
          { t: "A logo that works small and large", d: "On a sign, a receipt and a profile picture.", link: { t: "Logo + Identity", h: "/logo-identity" } },
          { t: "Colors, fonts and your voice", d: "A short guide so everything you make looks like it came from the same place.", link: { t: "Build a World", h: "/branding" } },
          { t: "Templates you can use yourself", d: "Posts and stories in your brand, editable in Canva.", link: { t: "Social packs", h: "/social-packs" } },
        ],
      },
      {
        t: "Give people somewhere to land",
        work: { img: "/assets/campaigns/essential-brows-studio/cover.jpg", t: "Essential Brows · from a booking link to a home of its own", h: "/websites/essential-brows-studio" },
        sub: "Your home base, so you're not living in DMs.",
        items: [
          { t: "Buy your domain", d: "yourname.com, in your own name." },
          { t: "Set up a business email", d: "hello@yourname.com looks more trustworthy than a personal address." },
          { t: "Launch a simple website", d: "Home, services, about and a way to book. One good page is a fine start.", link: { t: "Launching a website", h: "/launch-a-website" } },
          { t: "Connect booking and payments", d: "One clear button that lets people book or pay without messaging you." },
        ],
      },
      {
        t: "Look the part",
        work: { img: "/assets/headshots/standard-01.jpg", t: "Studio headshots", h: "/headshots" },
        sub: "People trust what they can see.",
        items: [
          { t: "Professional photos of you", d: "For your site, Google and LinkedIn.", link: { t: "Headshots", h: "/headshots" } },
          { t: "Photos of your work, space or product", d: "Real photos beat stock every time.", link: { t: "Photography", h: "/photography" } },
          { t: "A few short videos", d: "Reels that show what it's like to work with you.", link: { t: "Social + Content", h: "/creative-direction-content" } },
        ],
      },
      {
        t: "Get found",
        work: { img: "/assets/campaigns/angie-tiara-beauty/at-01.jpg", t: "Selaras Haus · photos for social and branding", h: "/campaigns/selaras-haus" },
        sub: "So people who've never heard of you can find you.",
        items: [
          { t: "Create your Google Business Profile", d: "Free. Fill in every field and add real photos.", link: { t: "Showing up on Google", h: "/show-up-on-google" } },
          { t: "Use the same name and info everywhere", d: "Google, Instagram, Yelp and your website should all match." },
          { t: "Ask your first clients for reviews", d: "Send a link right after a great experience." },
          { t: "Join a local network", d: "Chambers, business groups and free advising programs bring referrals.", link: { t: "Washington resources", h: WA } },
        ],
      },
      {
        t: "Tell people you're open",
        work: { img: "/assets/campaigns/chutneys/ch-02.jpg", t: "Chutneys Bellevue · a commercial + promo photos", h: "/campaigns/chutneys" },
        sub: "A launch you plan beats a launch you hope for.",
        items: [
          { t: "Plan a launch post and a few weeks after", d: "Introduce yourself, show the work, say how to book." },
          { t: "Pick two platforms", d: "Do two well instead of five badly. For most local businesses: Google and Instagram." },
          { t: "Make a simple monthly content plan", d: "A mix of your work, your people, behind the scenes and offers.", link: { t: "Social media content", h: "/social-media-content" } },
        ],
      },
    ],
    close: "Want help with any of these? I can do one step or the whole list, and I'll tell you honestly which ones you can do yourself.",
    need: "Full package (brand, site + content)",
  },
  {
    slug: "revamp-your-business",
    kicker: "A FREE GUIDE · BUSINESS MAKEOVERS",
    h1: "I want to revamp my business.",
    lead: "You're up and running, but the look, the site or the content doesn't match where the business is now. Go through this before you spend anything, so you fix what actually matters.",
    seoTitle: "How to Revamp Your Business: A Rebrand + Website Makeover Guide | Sunday Office",
    seoDesc: "Business feels outdated? A free step-by-step guide to revamping your brand, website, photos and social media, and what to fix first. From Sunday Office in Seattle.",
    stages: [
      {
        t: "Take an honest look",
        work: { img: "/assets/campaigns/joe-lopez-cover.png", t: "Joe Lopez Photography · a new site", h: "https://joe-lopez-photography.vercel.app/" },
        sub: "Before changing anything, see what customers see.",
        items: [
          { t: "Search your business on Google", d: "What shows up? Is your info right? Are there photos and reviews?" },
          { t: "Open your website on your phone", d: "Can you find the booking button in three seconds?" },
          { t: "Scroll your last 12 posts", d: "Do they look like the same business? Would you follow it?" },
          { t: "Ask three clients why they chose you", d: "Their words are often better than anything you'd write." },
        ],
      },
      {
        t: "Decide: refresh or rebuild",
        work: { img: "/assets/campaigns/pilates-haus-cover.png", t: "Pilates Haus · a brand kit built around their logo", h: "https://pilates-haus-seattle.vercel.app/" },
        sub: "Not everything needs to start over.",
        items: [
          { t: "Keep what people recognize", d: "If customers know your logo, a brand kit built around it may be enough.", link: { t: "Build a World", h: "/branding" } },
          { t: "Rebuild what's holding you back", d: "A site that fights you or a look that no longer fits is worth replacing.", link: { t: "Improving your website", h: "/website-makeover" } },
          { t: "Write down what's changed", d: "New services, new customers, higher prices. Your brand should catch up." },
        ],
      },
      {
        t: "Refresh the look",
        work: { img: "/assets/photography/avery-01.jpg", t: "Avery Tien · portraits", h: "/campaigns/avery-tien" },
        sub: "The fastest way to look like the business you are now.",
        items: [
          { t: "Update your colors, fonts and voice", d: "Small changes, used consistently, feel like a big upgrade.", link: { t: "Creative branding", h: "/creative-branding" } },
          { t: "Replace old and stock photos", d: "New photos change a website and feed faster than anything else.", link: { t: "Photography", h: "/photography" } },
          { t: "New headshots", d: "If your photo is from a few years ago, it's time.", link: { t: "Headshots", h: "/headshots" } },
        ],
      },
      {
        t: "Fix the website",
        work: { img: "/assets/campaigns/essential-brows-studio/site-phones.jpg", t: "Essential Brows · a site that books", h: "/websites/essential-brows-studio" },
        sub: "Where most people decide whether to book.",
        items: [
          { t: "Cut the words in half", d: "What you do, who it's for, how to book. The rest goes lower or goes away." },
          { t: "Make booking one tap", d: "Same button on every page, connected to your booking tool." },
          { t: "Check speed and phones", d: "Slow or messy on a phone means visitors leave." },
          { t: "Update your Google profile to match", d: "New photos, hours, services and links.", link: { t: "Showing up on Google", h: "/show-up-on-google" } },
        ],
      },
      {
        t: "Reset your content",
        work: { img: "/assets/campaigns/jaydyn-f/scream/sc-02.jpg", t: "Jaydyn F. · weeks of content from one release", h: "/campaigns/jaydyn-f-scream" },
        sub: "Show people the new version of you.",
        items: [
          { t: "Plan a relaunch moment", d: "A post or short series that says what's new." },
          { t: "Batch a month of content", d: "One content day can fill weeks of posts and Reels.", link: { t: "Social + Content", h: "/creative-direction-content" } },
          { t: "Get templates in the new look", d: "So everything you post from now on matches.", link: { t: "Social packs", h: "/social-packs" } },
        ],
      },
      {
        t: "Keep it up",
        work: { img: "/assets/campaigns/green-grillz/nine-01.jpg", t: "Nine Vicious × Custom Grillz · photos that kept traveling", h: "/campaigns/green-grillz" },
        sub: "A revamp lasts when someone looks after it.",
        items: [
          { t: "Refresh photos each season", d: "A few times a year keeps things from going stale." },
          { t: "Keep asking for reviews", d: "A few every month beats a burst once a year." },
          { t: "Check your site every month", d: "Or let someone handle updates and reports for you.", link: { t: "Website care plan", h: "/websites#care" } },
        ],
      },
    ],
    close: "Not sure where your business needs the most help? Send me a few lines and I'll tell you honestly where I'd start, even if it's something you can do yourself.",
    need: "Not sure yet / Other",
  },
];
