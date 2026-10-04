import type { MotifName } from "./brand";

/* ============================================================
   SUNDAY OFFICE — editorial content model.
   Photography is the hero but intentionally not supplied yet:
   every image slot is an elegant placeholder awaiting the real work.
   ============================================================ */

export type Work = {
  file: string;
  client: string;
  type?: string;
  service: string;
  location: string;
  year: string;
  motif: MotifName;
  url?: string;
  image?: string;
  color?: string;
  logo?: string;
  logotext?: { main: string; sub?: string; color?: string };
  niche?: string;
  status?: string;
};

export const currentWork: Work[] = [
  {
    file: "PROJECT 001",
    client: "Selaras Haus",
    niche: "Beauty",
    type: "INTERIOR PHOTOGRAPHY FOR A BEAUTY BOUTIQUE",
    service: "Interior Photography",
    location: "Tacoma · WA",
    year: "2026",
    motif: "stem",
    url: "/campaigns/selaras-haus",
    image: "/assets/campaigns/angie-tiara-beauty/at-01.jpg",
  },  {
    file: "PROJECT 002",
    client: "Essential Brows",
    niche: "Beauty",
    type: "WEBSITE FOR A BROW STUDIO",
    service: "Websites / Brand Kit",
    location: "Milton · WA",
    year: "2026",
    motif: "porcelain",
    url: "/websites/essential-brows-studio",
    image: "/assets/campaigns/essential-brows-studio/featured-cover.png",
    color: "#faf9f7",
  },  {
    file: "PROJECT 002B",
    client: "Jazmin's Events",
    niche: "Independent Services",
    type: "BRAND + WEBSITE FOR A WEDDING PLANNER",
    service: "Branding / Website",
    location: "PNW",
    year: "2026",
    motif: "stem",
    status: "In progress",
    url: "/websites/jazmins-events",
    image: "/assets/campaigns/jazmins-events/featured-cover.png",
    color: "#f3efe8",
  },  {
    file: "PROJECT 003",
    client: "GREAN",
    niche: "Food + Drink",
    type: "WEBSITE FOR A MATCHA CAFÉ",
    service: "Website",
    location: "Seattle · WA",
    year: "2026",
    motif: "stem",
    url: "https://grean-matcha.vercel.app/",
    color: "#f6f1e7",
    image: "/assets/campaigns/grean/featured-cover.png",
    logo: "/assets/work/grean-mark.png",
  },    {
    file: "PROJECT 004",
    client: "Public House",
    niche: "Food + Drink",
    type: "VENUE PHOTOGRAPHY FOR A BAR + EVENT SPACE",
    service: "Venue Photography",
    location: "Pioneer Square · Seattle",
    year: "2026",
    motif: "ring",
    url: "/campaigns/public-house",
    image: "/assets/campaigns/soul-social/ss-01.jpg",
  },  {
    file: "PROJECT 005",
    client: "Bar Bistro",
    niche: "Food + Drink",
    type: "CONTENT + SOCIAL FOR FOOD + DRINK",
    service: "Content / Social · Food & Drink",
    location: "Tacoma · WA",
    year: "2023",
    motif: "stem",
    url: "/campaigns/bar-bistro",
    image: "/assets/campaigns/bar-bistro/bb-01.jpg",
  },];

export type ArchiveEntry = {
  file: string;
  title: string;
  category: "PHOTOGRAPHY" | "CREATIVE DIRECTION" | "CAMPAIGNS" | "WEBSITES" | "CONTENT" | "MOVING IMAGE";
  place: string;
  year: string;
  motif: MotifName;
  color?: string;
  logo?: string;
  logotext?: { main: string; sub?: string; color?: string };
  url?: string;
  image?: string;
  /** Industry bucket — drawn from the "Who are we working with?" list. */
  industry?: string;
  /** Project tags — the six archive panels + CAMPAIGN. Primary panel first. */
  tags?: ProjectTag[];
  /** One-line editorial note for the archive. */
  blurb?: string;
  /** Hide this card from the FRONT-page archive section (still filing in full archive). */
  frontHidden?: boolean;
  /** Keep out of the archive world mix — saved for a dedicated presentation (e.g. branding kits). */
  hideFromWorld?: boolean;
};

/* The six archive panels + the campaign tag. Campaigns are a way of working,
   not a room — every campaign carries its panel tags alongside. */
export const panelTags = [
  "PHOTOGRAPHY",
  "BRANDING + IDENTITY",
  "WEBSITES",
  "CREATIVE DIRECTION",
  "CONTENT + SOCIAL",
  "MOVING IMAGE",
] as const;
export type PanelTag = (typeof panelTags)[number];

export const campaignTag = "CAMPAIGN" as const;
export type ProjectTag = PanelTag | typeof campaignTag;

export type ArchivePanel = {
  id: string;
  tag: PanelTag;
  name: string;
  dark: boolean;
  blurb: string;
  intro: string;
  darkIntro?: string;
};

export const archivePanels: ArchivePanel[] = [
  {
    id: "photography",
    tag: "PHOTOGRAPHY",
    name: "Photography",
    dark: true,
    blurb: "Portraits, series and campaigns. Shot, graded and hung.",
    intro: "The still room. Portraits, series and campaigns shot on film and digital, with the city in between. A small selection lives here. The full archive is behind the door.",
    darkIntro: "The darkroom. Deep espresso, cream type, images first. Portraits and campaigns I shot and graded, hung like prints.",
  },
  {
    id: "creative-direction",
    tag: "CREATIVE DIRECTION",
    name: "Creative Direction",
    dark: true,
    blurb: "Concepts, mood and art direction. The thinking before the shoot.",
    intro: "The mood. Concepts, moodboards, treatments, styling and art direction: the thinking that happens before the shutter. Below are directions that made it out. The full body of work is behind the door.",
    darkIntro: "After hours. Concepts, moodboards, styling and art direction, shown the way they were made: references, treatments and the final photos that came out of them.",
  },
  {
    id: "moving-image",
    tag: "MOVING IMAGE",
    name: "Moving Image",
    dark: true,
    blurb: "Music videos, reels and brand films.",
    intro: "Pictures that move. Music videos, reels, brand films and performance pieces, shot, cut and colored for artists and brands. I take on a few of these, shown here as they were released.",
    darkIntro: "The screening room. Selected films and stills from music videos, reels and brand films, framed dark for viewing.",
  },
  {
    id: "websites",
    tag: "WEBSITES",
    name: "Websites",
    dark: false,
    blurb: "Storefronts and offices. Designed, built and live.",
    intro: "",
  },
  {
    id: "branding",
    tag: "BRANDING + IDENTITY",
    name: "Branding + Identity",
    dark: false,
    blurb: "Marks, systems, direction and how the whole thing looks.",
    intro: "",
  },
  {
    id: "content-social",
    tag: "CONTENT + SOCIAL",
    name: "Content + Social",
    dark: false,
    blurb: "Feeds, reels and short-form, plus motion cut from what you already have.",
    intro: "",
  },
];
/* ---------- Websites archive ----------
   Presentation map for the dedicated Websites archive page.
   `visual` picks the preview treatment per project. */
export const websiteBuckets = [
  "ALL",
  "PHOTOGRAPHY + CREATIVE",
  "WEDDINGS + EVENTS",
  "BEAUTY + WELLNESS",
  "FOOD + HOSPITALITY",
  "ARTISTS + ENTERTAINMENT",
  "RETAIL + PRODUCT",
  "PROFESSIONAL + LOCAL BUSINESS",
] as const;
export type WebsiteBucket = (typeof websiteBuckets)[number];

export type WebsiteVisual = "screen" | "mobile" | "branding" | "photo";

export const websiteMeta: Record<string, {
  bucket: WebsiteBucket;
  cardLine: string;
  note: string;
  extra?: string;
  visual: WebsiteVisual;
  image?: string;
}> = {
  "ARCH 001": { bucket: "FOOD + HOSPITALITY", cardLine: "Desserts · Tacoma, WA", note: "Custom desserts for weeks that call for celebration.", visual: "mobile", image: "/assets/websites/dipped/preview.jpg" },
  "ARCH 002": { bucket: "BEAUTY + WELLNESS", cardLine: "Jaw Specialist · Tacoma, WA", note: "A medical practice with a soft, confident face.", visual: "branding" },
  "ARCH 010": { bucket: "FOOD + HOSPITALITY", cardLine: "Pastry Shop · Seattle, WA", note: "French technique, Japanese inspiration, handmade in Seattle.", visual: "screen", image: "/assets/websites/mitten/preview.jpg" },
  "ARCH 011": { bucket: "FOOD + HOSPITALITY", cardLine: "Matcha & Hojicha · Seattle, WA", note: "Specialty matcha in the U District. Good tea. Good people.", visual: "mobile", image: "/assets/websites/grean/preview.jpg" },
  "ARCH 012": { bucket: "PHOTOGRAPHY + CREATIVE", cardLine: "Photography Portfolio · NC / VA", note: "Portraits, weddings and boudoir across NC + VA.", visual: "photo", image: "/assets/work/britts-cover.jpg" },
  "ARCH 014": { bucket: "PHOTOGRAPHY + CREATIVE", cardLine: "Mobile Photo Studio · Maryland", note: "A studio that brings the session to you.", visual: "mobile", image: "/assets/websites/mobile-memories/preview.jpg" },
  "ARCH 018": { bucket: "BEAUTY + WELLNESS", cardLine: "Permanent Makeup · Milton, WA", note: "Aliya's brow studio had no website, just a booking link. Now it has a full interactive site that explains everything, so she can send clients there instead of repeating herself.", visual: "screen", image: "/assets/websites/essential-brows/preview.jpg" },
  "ARCH 019": { bucket: "BEAUTY + WELLNESS", cardLine: "Salon · Federal Way, WA", note: "Everything beauty, one spot.", visual: "mobile", image: "/assets/websites/beauty-spot/preview.jpg" },
  "ARCH 029": { bucket: "FOOD + HOSPITALITY", cardLine: "Matcha + Boba · Seattle, WA", note: "More than boba. Matcha first, in the U District.", visual: "screen", image: "/assets/websites/yoka/preview.jpg" },
  "ARCH 032": { bucket: "WEDDINGS + EVENTS", cardLine: "Wedding Planning · Oregon, PNW", note: "A brand-new wedding planner. Branding done, website in progress.", visual: "photo", image: "/assets/campaigns/jazmins-events/brand-guide.png" },
};

/** Curated picks for the top of the Websites archive. */
export const websiteSelected: string[] = ["ARCH 010", "ARCH 012", "ARCH 018", "ARCH 002"];

/* ---------- Photography archive ----------
   Sections + descriptor lines for the dark Photography page. */
export const photoSections = [
  "PEOPLE + EDITORIAL",
  "ARTISTS + MUSIC",
  "BRANDS + PLACES",
  "EVENTS + DOCUMENTARY",
  "PERSONAL + SERIES",
] as const;
export type PhotoSection = (typeof photoSections)[number];

export const photoSection: Record<string, PhotoSection> = {
  "ARCH 005": "PEOPLE + EDITORIAL",   // Avery Tien
  "ARCH 027": "ARTISTS + MUSIC",      // Highway 2009
  "ARCH 009": "ARTISTS + MUSIC",      // Paradice Worldwide
  "ARCH 016": "PEOPLE + EDITORIAL",   // Nine Vicious × Custom Grillz
  "ARCH 022": "ARTISTS + MUSIC",      // Kenshi Killz
  "ARCH 023": "ARTISTS + MUSIC",      // Rockstar Flaco
  "ARCH 026": "ARTISTS + MUSIC",      // Still Different
  "ARCH 020": "BRANDS + PLACES",      // Chutneys
  "ARCH 025": "BRANDS + PLACES",      // Angie Tiara Beauty
  "ARCH 003": "BRANDS + PLACES",      // Exhibition
  "ARCH 017": "EVENTS + DOCUMENTARY", // Leon Thomas
  "ARCH 021": "EVENTS + DOCUMENTARY", // Big Baby Gucci
  "ARCH 024": "EVENTS + DOCUMENTARY", // DJ WZRD
  "ARCH 004": "PERSONAL + SERIES",    // Night
  "ARCH 006": "PERSONAL + SERIES",    // Shoreline
};

export const photoPlacement: Record<string, string> = {
  "ARCH 005": "Fashion Editorial · Seattle, WA",
  "ARCH 027": "Artist Portraits · Seattle, WA",
  "ARCH 009": "Streetwear Editorial · Seattle, WA",
  "ARCH 016": "Portrait Campaign · Seattle, WA",
  "ARCH 022": "Artist Promo · Seattle, WA",
  "ARCH 023": "Artist Shoot · Seattle, WA",
  "ARCH 026": "Artist Portraits · Seattle, WA",
  "ARCH 020": "Food + Hospitality · Bellevue, WA",
  "ARCH 025": "Studio Interiors · Tacoma, WA",
  "ARCH 003": "Streetwear Drop · Seattle, WA",
  "ARCH 017": "Nightlife · Afterparty · Seattle, WA",
  "ARCH 021": "Live Set · Seattle, WA",
  "ARCH 024": "Nightlife · Club · Seattle, WA",
  "ARCH 004": "Personal Series · Blue Hour · Seattle, WA",
  "ARCH 006": "Personal Series · City Lights · Seattle, WA",
};

/** Hana's eye — strongest pieces first, regardless of category. */
export const photoSelected: string[] = [
  "ARCH 004", // Night — blue hour landscape
  "ARCH 027", // Highway — artist portrait
  "ARCH 005", // Avery — fashion editorial
  "ARCH 025", // Angie — studio interior
  "ARCH 017", // Leon Thomas — afterparty hero
  "ARCH 003", // Exhibition — streetwear drop
  "ARCH 020", // Chutneys — food commercial
];

/** Extra frames for sequence strips / diptychs on the Photography page. */
export const photoSequences: Record<string, string[]> = {
  "ARCH 021": ["/assets/campaigns/big-baby-gucci/bbg-03.jpg", "/assets/campaigns/big-baby-gucci/bbg-06.jpg"],
  "ARCH 024": ["/assets/campaigns/dj-wzrd/dj-05.jpg", "/assets/campaigns/dj-wzrd/dj-06.jpg"],
  "ARCH 022": ["/assets/campaigns/kenshi-killz/kk-04.jpg", "/assets/campaigns/kenshi-killz/kk-06.jpg"],
};



export type ArchiveCategory = ArchiveEntry["category"];

/** The industry list from the "WHO ARE WE WORKING WITH?" question — the same
   buckets the per-industry landing pages will use. */
export const industryTypes: string[] = [
  "Food + Hospitality",
  "Beauty + Wellness",
  "Artists + Creatives",
  "Personal Brands + Professionals",
  "Business + Services",
  "Real Estate + Interiors",
  "Products + Retail",
  "Events + Experiences",
  "Small Business + Emerging Brands",
  "Something Else",
];

/** Archive card industries, keyed by file number (replaces the year on cards). */
export const archiveIndustryByFile: Record<string, string> = {
  "ARCH 001": "Food + Hospitality", // Dipped by Jaid
  "ARCH 002": "Beauty + Wellness", // Sweet Cheeks
  "ARCH 003": "Products + Retail", // Exhibition
  "ARCH 004": "Artists + Creatives", // Night series
  "ARCH 005": "Artists + Creatives", // Avery Tien
  "ARCH 006": "Artists + Creatives", // Shoreline
  "ARCH 007": "Artists + Creatives", // @reelclip
  "ARCH 008": "Artists + Creatives", // The Issue
  "ARCH 009": "Products + Retail", // Paradice
  "ARCH 010": "Food + Hospitality", // Mitten
  "ARCH 011": "Food + Hospitality", // GREAN
  "ARCH 012": "Artists + Creatives", // Britt's Photography 423
  "ARCH 014": "Artists + Creatives", // Mobile Memories Photography
  "ARCH 015": "Artists + Creatives", // Soniq Reign
  "ARCH 016": "Products + Retail", // Nine Vicious × Custom Grillz
  "ARCH 017": "Events + Experiences", // Leon Thomas x Vice Seattle
  "ARCH 018": "Beauty + Wellness", // Essential Brows
  "ARCH 019": "Beauty + Wellness", // Beauty Spot
  "ARCH 020": "Food + Hospitality", // Chutneys Bellevue
  "ARCH 021": "Artists + Creatives", // Big Baby Gucci
  "ARCH 022": "Artists + Creatives", // Kenshi Killz
  "ARCH 023": "Artists + Creatives", // Rockstar Flaco
  "ARCH 024": "Artists + Creatives", // DJ WZRD @ Cultura
  "ARCH 025": "Beauty + Wellness", // Angie Tiara Beauty
  "ARCH 026": "Artists + Creatives", // Still Different x ETC Tacoma
  "ARCH 027": "Artists + Creatives", // Highway 2009
  "ARCH 028": "Products + Retail", // Chitos International
  "ARCH 029": "Food + Hospitality", // Yoka
  "ARCH 030": "Events + Experiences", // Iconic 2000s Boat Party
  "ARCH 031": "Food + Hospitality", // Bar Bistro Tacoma
  "ARCH 032": "Events + Experiences", // Jazmin's Events + Coordinating
  "ARCH 033": "Artists + Creatives", // Jaydyn F.
  "ARCH 034": "Events + Experiences", // Public House
};

export const archiveCategories: Array<ArchiveCategory> = [
  "PHOTOGRAPHY",
  "CREATIVE DIRECTION",
  "CAMPAIGNS",
  "WEBSITES",
  "CONTENT",
  "MOVING IMAGE",
];

export const archive: ArchiveEntry[] = [
  { file: "ARCH 001", title: "Desserts · Dipped by Jaid", category: "WEBSITES", place: "Tacoma", year: "2026", motif: "stem", color: "#E5536F", logo: "/assets/work/dipped-logo.png", url: "https://dipped-by-jaid.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "Custom desserts for weeks that call for celebration.",

},
  { file: "ARCH 002", title: "Medical & Wellness · Sweet Cheeks", category: "WEBSITES", place: "Tacoma", year: "2026", motif: "sun", color: "#2E4F45", logotext: { main: "Sweet Cheeks", sub: "JAW SPECIALIST", color: "#FBF6EE"}, url: "https://sweet-cheeks.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "A medical practice with a soft, confident face.",
},
  { file: "ARCH 003", title: "Streetwear Label · Exhibition × Soniq Reign", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", color: "#141414", logotext: { main: "EXHIBITION", sub: "INTL · SUMMER 2026", color: "#f5f5f5" }, url: "/campaigns/exhibition",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "A streetwear drop shot with the Soniq Reign circle. Tees, denim and the moments between takes.",
},
  { file: "ARCH 004", title: "Photography · Night series, blue hour", category: "PHOTOGRAPHY", place: "Seattle", year: "2026", motif: "sun", image: "/assets/photography/beach-01.jpg",
  tags: ["PHOTOGRAPHY"],
  blurb: "Blue hour on the water, a series shot after dark in the city.",
},
  { file: "ARCH 005", title: "Photography · Avery Tien, campaign portraits", category: "PHOTOGRAPHY", place: "Seattle", year: "2025", motif: "monogram", image: "/assets/photography/avery-01.jpg", url: "/campaigns/avery-tien",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Portraits for TIEN at Bumbershoot's Fashion District. Repurposed fabric with a worn-in edge.",
},
  { file: "ARCH 006", title: "Photography · Shoreline, city lights on water", category: "PHOTOGRAPHY", place: "Seattle", year: "2026", motif: "porcelain", image: "/assets/photography/night-01.jpg",
  tags: ["PHOTOGRAPHY"],
  blurb: "City lights on water, shot slow and held.",
},
  /*
   * Paradice Worldwide — Seattle streetwear clothing brand (2919 Rainier Ave S,
   * Mt. Baker; founders Ari Glass + Harry "Clean"; retail store "Paradice
   * Avenue Souf"; IG @paradice.worldwide, "TAKING CHANCES.",
   * paradiceworldwide.com).
   * Campaign: ITZ PZ (Seattle rapper; Life of Pz, EFFORTLESS; PlayazOnlyEnt;
   * signed to Empire Records as of Aug 2026) shot in the paisley collection
   * BEFORE the signing — creative collaboration in the Soniq Reign / ReelClip
   * circle. Edit style: gritty, alternative, high saturation. More details
   * from Hana coming.
   */
  { file: "ARCH 009", title: "Streetwear Clothing Brand · Paradice Worldwide × ITZ PZ", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", color: "#111116", logo: "/assets/work/paradice-logo.jpg", url: "/campaigns/paradice",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Streetwear from 2919 Rainier, with ITZ PZ in the paisley collection.",
},
  /*
   * Mitten Sweets & Coffee — French-Japanese pastry shop, Seattle
   * (509 13th Ave; chef Misato Sakuma, "Pastry Mitten" since 2016, the
   * Mitten Sweets & Coffee storefront since Oct 2022; IG @pastrymitten,
   * mittensweetsandcoffee.com). Tagline: French technique. Japanese
   * inspiration. Handmade in Seattle.
   */
  { file: "ARCH 010", title: "French-Japanese Bakery · Mitten Sweets & Coffee", category: "WEBSITES", place: "Seattle", year: "2026", motif: "porcelain", color: "#581818", logo: "/assets/work/mittens-logo.jpg", url: "https://mittens-nine.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "French technique, Japanese inspiration. A storefront for a pastry kitchen, handmade in Seattle.",
},
  /*
   * GREAN — specialty matcha & hojicha café, Seattle U District
   * (4524 University Way NE, inside Elixir Dessert & Bar; open daily 9-2;
   * IG @drinkgrean, drinkgrean.com). "Good tea. Good people."
   */
  { file: "ARCH 011", title: "Matcha Café · GREAN", category: "WEBSITES", place: "Seattle", year: "2026", motif: "stem", color: "#f6f1e7", logo: "/assets/work/grean-mark.png", url: "https://grean-matcha.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "Specialty matcha and hojicha in the U District. Good tea. Good people.",
},
  /* Britt's Photography 423 — photographer serving NC + VA (portraits, weddings,
     boudoir, events, wildlife; also video). */
  { file: "ARCH 012", title: "Artists + Creatives · Britt's Photography 423", category: "WEBSITES", place: "NC / VA", year: "2026", motif: "sun", image: "/assets/work/britts-cover.jpg", url: "https://www.brittsphotography423.com/",
  tags: ["WEBSITES"],
  blurb: "A photographer's own portfolio: portraits, weddings and boudoir across NC + VA.",

},

  /* Mobile Memories Photography — Tim Sinnott, mobile photo studio, Middle River MD. */
  { file: "ARCH 014", title: "Artists + Creatives · Mobile Memories Photography", category: "WEBSITES", place: "Maryland", year: "2026", motif: "sun", color: "#2B231A", logo: "/assets/work/mm-logo.png", url: "https://mobile-memories-photography.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "A mobile studio in Middle River, Maryland that brings the session to you.",
},
  /* Nine Vicious × Custom Grillz set — custom grillz studio campaign, Nine Vicious (YSL rapper).
     Client name + revenue milestones to be confirmed. Photos by Hana. */
  { file: "ARCH 016", title: "Products + Retail · Nine Vicious × Custom Grillz", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", image: "/assets/campaigns/green-grillz/gg01.jpg", url: "/campaigns/green-grillz",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Photography and marketing for jeweler Marcus Adam's custom grillz, with Nine Vicious as the face.",
},
  {
    file: "ARCH 017",
    title: "Events + Experiences · Leon Thomas × Vice Seattle",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2025",
    motif: "sun",
    image: "/assets/campaigns/leon-thomas/night-02.jpg",
    color: "#131210",
    logotext: { main: "LEON THOMAS", sub: "VICE SEATTLE · AFTERPARTY", color: "#eae6dc" },
    url: "/campaigns/leon-thomas",
    industry: "Events + Experiences",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL", "CAMPAIGN"],
    blurb: "The Mutts Don't Heel afterparty at Vice Seattle. Published by Dubsea, photos by Hana.",
  },
  {
    file: "ARCH 018",
    title: "Beauty + Wellness · Essential Brows Studio",
    category: "WEBSITES",
    place: "Milton · WA",
    year: "2026",
    motif: "porcelain",
    color: "#faf9f7",
    logo: "/assets/work/essential-logo.png",
    image: "/assets/websites/essential-brows/preview.jpg",
    url: "https://www.essentialbrows.studio/",
    industry: "Beauty + Wellness",
    tags: ["WEBSITES"],
    blurb: "Aliya is a permanent makeup artist + trainer in Milton. She ran on a booking link for years. Now the site explains the whole studio, so she can point clients there and get back to brows.",
 },
  {
    file: "ARCH 019",
    title: "Beauty + Wellness · Beauty Spot",
    category: "WEBSITES",
    place: "Federal Way · WA",
    year: "2026",
    motif: "porcelain",
    color: "#000000",
    logo: "/assets/work/beauty-spot-logo.svg",
    url: "https://beauty-spot-seven.vercel.app/",
    industry: "Beauty + Wellness",
    tags: ["WEBSITES"],
    blurb: "A Federal Way salon, with a site as polished as the chair.",
  },

  {
    file: "ARCH 020",
    title: "Food + Hospitality · Chutneys Bellevue",
    category: "CAMPAIGNS",
    place: "Bellevue · WA",
    year: "2025",
    motif: "stem",
    image: "/assets/campaigns/chutneys/ch-01.jpg",
    url: "/campaigns/chutneys",
    industry: "Food + Hospitality",
    tags: ["MOVING IMAGE", "PHOTOGRAPHY", "CONTENT + SOCIAL", "CAMPAIGN"],
    blurb: "North Indian food in Bellevue. A commercial for the kitchen, plus plates for their social feeds.",
  },

  {
    file: "ARCH 021",
    title: "Artists + Creatives · Big Baby Gucci",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/big-baby-gucci/bbg-01.jpg",
    url: "/campaigns/big-baby-gucci",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL"],
    blurb: "Charlotte's SoundCloud prince, loud in the dark. The live set in sepia and smoke.",
      frontHidden: true,},

  {
    file: "ARCH 022",
    title: "Artists + Creatives · Kenshi Killz",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/kenshi-killz/kk-01.jpg",
    url: "/campaigns/kenshi-killz",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL"],
    blurb: "A TV performance and the promo shoot. Keffiyeh, coins and a vintage TV in the Seattle sun.",
  },

  {
    file: "ARCH 024",
    title: "Artists + Creatives · DJ WZRD @ Cultura",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/dj-wzrd/dj-01.jpg",
    url: "/campaigns/dj-wzrd",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL", "CAMPAIGN"],
    blurb: "The sold-out Cultura night in pink and purple. White frames, a gold chain, hands in the air.",
      frontHidden: true,},

  {
    file: "ARCH 025",
    title: "Beauty + Wellness · Selaras Haus by Angie Tiara",
    category: "CAMPAIGNS",
    place: "Tacoma · WA",
    year: "2026",
    motif: "stem",
    image: "/assets/campaigns/angie-tiara-beauty/at-01.jpg",
    url: "/campaigns/selaras-haus",
    industry: "Beauty + Wellness",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL"],
    blurb: "Interior photography for Angie Tiara's skin, scalp and makeup boutique in Tacoma. Natural, soft and warm.",
  },

  {
    file: "ARCH 026",
    title: "Artists + Creatives · Still Different x ETC Tacoma",
    category: "CAMPAIGNS",
    place: "Tacoma · WA",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/still-different/sd-05.jpg",
    url: "/campaigns/still-different",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
    blurb: "The MC in the ETC jacket, TACOMA on the chest and mic in hand. Six frames from the white room.",
  },

  {
    file: "ARCH 027",
    title: "Artists + Creatives · Highway 2009",
    category: "CAMPAIGNS",
    place: "Seattle · WA",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/highway-chitos/forever-cover.jpg",
    url: "/campaigns/highway",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
    blurb: "A Seattle artist in his monochrome era. Forever (Count Fast Millionaire), cover by Hana.",
  },
  {
    file: "ARCH 028",
    title: "Products + Retail · Chitos International",
    category: "CAMPAIGNS",
    place: "Seattle · WA",
    year: "2026",
    motif: "porcelain",
    color: "#0d0d0f",
    logotext: { main: "CHITO", sub: "CHITOS INTERNATIONAL", color: "#ece4d8" },
    url: "/campaigns/chitos",
    industry: "Products + Retail",
    tags: ["CREATIVE DIRECTION", "CAMPAIGN"],
    blurb: "A visual artist from the graffiti era and his monochrome label, from Givenchy to Supreme SS23.",
  },

  {
    file: "ARCH 029",
    title: "Food + Hospitality · Yoka",
    category: "WEBSITES",
    place: "Seattle · WA",
    year: "2026",
    motif: "sunburst",
    color: "#ffffff",
    logo: "/assets/work/yoka-logo.png",
    url: "https://yoka-two.vercel.app/",
    industry: "Food + Hospitality",
    tags: ["WEBSITES"],
    blurb: "Matcha and boba in Seattle. A site that's quiet and bold at once.",
  },

  {
    file: "ARCH 030",
    title: "Events + Experiences · Iconic 2000s Boat Party",
    category: "CAMPAIGNS",
    place: "Seattle · WA",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/dj-prashant-hiyu/djp-01.jpg",
    url: "/campaigns/dj-prashant-hiyu",
    industry: "Events + Experiences",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL", "CAMPAIGN"],
    blurb: "DJ Prashant × The Hiyu. Y2K on the water, Bollywood to club hits, with Indian American culture loud on the deck.",
  },

  {
    file: "ARCH 031",
    title: "Food + Hospitality · Bar Bistro Tacoma",
    category: "CAMPAIGNS",
    place: "Tacoma · WA",
    year: "2023",
    motif: "stem",
    image: "/assets/campaigns/bar-bistro/bb-01.jpg",
    url: "/campaigns/bar-bistro",
    industry: "Food + Hospitality",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL", "CAMPAIGN"],
    blurb: "Eat. Drink. Live. Craft cocktails and plates people screenshot, with Tacoma's food accounts in the room.",
  },

  {
    file: "ARCH 032",
    title: "Events + Weddings · Jazmin's Events + Coordinating",
    category: "WEBSITES",
    place: "Oregon · PNW",
    year: "2026",
    motif: "stem",
    color: "#ece4d8",
    image: "/assets/campaigns/jazmins-events/brand-guide.png",
    url: "/websites/jazmins-events",
    industry: "Events + Experiences",
    tags: ["WEBSITES", "BRANDING + IDENTITY"],
    blurb: "A brand-new Pacific Northwest wedding planner. The branding is finished and the website is being built with her. You live the moment; we'll handle the rest.",
 },

  {
    file: "ARCH 033",
    title: "Artist Social · Jaydyn F. · Underground Rap",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2025",
    motif: "monogram",
    color: "#55286F",
    image: "/assets/campaigns/jaydyn-f/jd-two.jpg",
    url: "/campaigns/jaydyn-f",
    industry: "Music + Nightlife",
    tags: ["CONTENT + SOCIAL", "PHOTOGRAPHY"],
    blurb: "BTS, photography and short-form around a Seattle underground rap artist's releases. The visuals that keep things moving between music videos.",
 },
  {
    file: "ARCH 034",
    title: "Bar + Event Space · Public House",
    category: "CAMPAIGNS",
    place: "Pioneer Square · Seattle",
    year: "2026",
    motif: "ring",
    color: "#7A4A1E",
    image: "/assets/campaigns/soul-social/ss-01.jpg",
    url: "/campaigns/public-house",
    industry: "Events + Experiences",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL"],
    blurb: "Venue photography for a Pioneer Square bar and event space, shot vertical for their stories and posts.",
 },
];

export type DirectoryCol = { head: string; items: string[] };

export const directory: DirectoryCol[] = [
  {
    head: "Creative Direction",
    items: [
      "Campaign Concepts",
      "Art Direction",
      "Creative Strategy",
      "Visual Direction",
      "Production",
    ],
  },
  {
    head: "Photography",
    items: [
      "Commercial",
      "Editorial",
      "Portrait",
      "Fashion",
      "Beauty",
      "Food + Hospitality",
      "Product",
      "Interiors",
      "Headshots",
      "Model Digitals",
    ],
  },
  {
    head: "Digital",
    items: ["Websites", "Landing Pages", "E-commerce Creative"],
  },
  {
    head: "Campaigns + Content",
    items: [
      "Campaign Development",
      "Social Content",
      "Video / Reels",
      "Music",
      "Commercials",
      "Interviews",
      "Behind-the-Scenes",
    ],
  },
  {
    head: "Identity",
    items: ["Select Brand Direction", "Visual Systems", "Select Logo Work", "Campaign Identity"],
  },
  {
    head: "Who We Work With",
    items: [
      "Food + Hospitality",
      "Beauty + Wellness",
      "Artists + Creatives",
      "Personal Brands + Professionals",
      "Business + Services",
      "Real Estate + Interiors",
      "Products + Retail",
      "Events + Experiences",
      "Small Business + Emerging Brands",
    ],
  },
];

/* ---- The interactive project finder ---- */

export type FinderStep = {
  id: string;
  q: string;
  options: string[];
};

export const finderSteps: FinderStep[] = [
  {
    id: "working-with",
    q: "WHO ARE WE WORKING WITH?",
    options: [...industryTypes],
  },
  {
    id: "not-working",
    q: "WHAT ISN'T WORKING?",
    options: [
      "People don't know we exist",
      "We don't look as good as we actually are",
      "Our website needs help",
      "We need better photographs",
      "We need content",
      "We're launching something",
      "We need a clearer creative direction",
      "Honestly… a lot",
    ],
  },
  {
    id: "need",
    q: "WHAT DO YOU THINK YOU NEED?",
    options: [
      "Website",
      "Photography",
      "Social Media / Content",
      "Creative Direction",
      "Branding",
      "Video / Moving Image",
      "Campaign",
      "Not sure yet / Other",
    ],
  },
];

export function recommend(answers: Record<string, string | undefined>): {
  headline: string;
  copy: string;
  cta: string;
} {
  const need = answers["need"]?.toLowerCase() ?? "";
  const broken = answers["not-working"]?.toLowerCase() ?? "";
  const withWhat = answers["working-with"]?.toLowerCase() ?? "";

  if (need.includes("not sure") || need === "") {
    return {
      headline: "Start with a conversation.",
      copy:
        "If you're not sure what you need, we start by looking at what you already have. We'll have a short conversation, look at your current work, and agree on one clear next step. No proposal until we understand what's going on.",
      cta: "Ask for an introduction",
    };
  }
  if (need.includes("photograph")) {
    return {
      headline: "Start with new photos.",
      copy: `New photos for ${withWhat || "your work"} are the quickest way to look as good as your business really is. We'll plan one shoot that gives you photos for your website and your social media.`,
      cta: "Request a shoot",
    };
  }
  if (need.includes("website")) {
    return {
      headline: "Start with your website.",
      copy:
        "Your website should show your work, not just describe it. We decide on the look first, then build a site where the photos carry most of the story.",
      cta: "Request a website",
    };
  }
  if (need.includes("direct") || need.includes("brand")) {
    return {
      headline: "Start with the direction.",
      copy:
        "Before anything gets made, we decide how it should look and what story it tells. Getting this right makes everything after it easier.",
      cta: "Request creative direction",
    };
  }
  if (need.includes("campaign") || need.includes("content") || need.includes("video")) {
    return {
      headline: "Start with a campaign.",
      copy:
        "You need content that works together as a campaign instead of random one-off posts. We plan it so everything looks like it belongs together.",
      cta: "Request a campaign",
    };
  }
  return {
    headline: "Let's figure out what needs to be made.",
    copy:
      "You've told us enough to get started. We'll listen, look at what you have, and tell you the one thing that would help you most right now.",
    cta: "Send an inquiry",
  };
}

/* ---- Office hours / form fields ---- */
export const needOptions = [
  "Website",
  "Branding",
  "Logo / Identity",
  "Photography",
  "Headshots",
  "Social Media / Content",
  "Creative Direction",
  "Video / Moving Image",
  "Campaign",
  "Full package (brand, site + content)",
  "Monthly content",
  "Not sure yet / Other",
];

export const navLinks = [
  { label: "Build your world", href: "#build" },
  { label: "Work", href: "#work" },
  { label: "About", href: "/about" },
];