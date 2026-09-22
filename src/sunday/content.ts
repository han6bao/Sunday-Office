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
};

export const currentWork: Work[] = [
  {
    file: "PROJECT 001",
    client: "Angie Tiara Beauty",
    type: "CONTENT + SOCIAL FOR A BEAUTY BUSINESS",
    service: "Content / Social Photography",
    location: "Tacoma · WA",
    year: "2026",
    motif: "stem",
    url: "/campaigns/angie-tiara-beauty",
    image: "/assets/campaigns/angie-tiara-beauty/at-01.jpg",
  },  {
    file: "PROJECT 002",
    client: "Essential Brows",
    type: "WEBSITE FOR A BROW STUDIO",
    service: "Websites / Brand Direction",
    location: "Milton · WA",
    year: "2026",
    motif: "porcelain",
    url: "/campaigns/essential-brows-studio",
    image: "/assets/campaigns/essential-brows-studio/featured-cover.png",
    color: "#faf9f7",
  },  {
    file: "PROJECT 003",
    client: "GREAN",
    type: "WEBSITE FOR A MATCHA CAFÉ",
    service: "Websites / Brand Direction",
    location: "Seattle · WA",
    year: "2026",
    motif: "stem",
    url: "https://grean-iota.vercel.app/",
    color: "#f6f1e7",
    image: "/assets/campaigns/grean/featured-cover.png",
    logo: "/assets/work/grean-mark.png",
  },  {
    file: "PROJECT 004",
    client: "Bar Bistro",
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
    blurb: "Portraits, series and campaigns — shot, graded, hung.",
    intro: "The still room. Portraits, series and campaigns shot on film and sensor — light, texture and the city in between. A small selection lives here; the full vault is on the other side of the door.",
    darkIntro: "The darkroom. Deep espresso, cream type, images first. Portraits and campaigns — shot by the office, graded, and hung like prints.",
  },
  {
    id: "creative-direction",
    tag: "CREATIVE DIRECTION",
    name: "Creative Direction",
    dark: true,
    blurb: "Concepts, mood, art direction — the thinking before the frame.",
    intro: "The mood. Concepts, moodboards, visual treatments, styling and art direction — the thinking that happens before the shutter. Below: directions that shipped; behind the door, the full body of work.",
    darkIntro: "After hours. Concepts and moodboards, styling and art direction — the office's thinking, shown as it was made: references, treatments and the final frames that came out of them.",
  },
  {
    id: "moving-image",
    tag: "MOVING IMAGE",
    name: "Moving Image",
    dark: true,
    blurb: "Music videos, reels, brand films — the picture that moves.",
    intro: "The picture that moves. Music videos, reels, brand films and performance pieces — shot, cut, colored and shipped for artists and brands. A selective capability, shown here as it shipped.",
    darkIntro: "The screening room. Selected films, cinematic stills and the work in motion — music videos, reels and brand films, framed dark for viewing.",
  },
  {
    id: "websites",
    tag: "WEBSITES",
    name: "Websites",
    dark: false,
    blurb: "Storefronts and offices — designed, built, live.",
    intro: "",
  },
  {
    id: "branding",
    tag: "BRANDING + IDENTITY",
    name: "Branding + Identity",
    dark: false,
    blurb: "The whole world — marks, systems, direction and the look of a thing.",
    intro: "",
  },
  {
    id: "content-social",
    tag: "CONTENT + SOCIAL",
    name: "Content + Social",
    dark: false,
    blurb: "Feeds, reels and short-form — plus motion cut from what you already have.",
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
  "ARCH 010": { bucket: "FOOD + HOSPITALITY", cardLine: "Pastry Shop · Seattle, WA", note: "French technique, Japanese inspiration — handmade in Seattle.", visual: "screen", image: "/assets/websites/mitten/preview.jpg" },
  "ARCH 011": { bucket: "FOOD + HOSPITALITY", cardLine: "Matcha & Hojicha · Seattle, WA", note: "Specialty matcha in the U District. Good tea. Good people.", visual: "mobile", image: "/assets/websites/grean/preview.jpg" },
  "ARCH 012": { bucket: "PHOTOGRAPHY + CREATIVE", cardLine: "Photography Portfolio · NC / VA", note: "Portraits, weddings and boudoir across NC + VA.", visual: "photo", image: "/assets/work/britts-cover.jpg" },
  "ARCH 013": { bucket: "PHOTOGRAPHY + CREATIVE", cardLine: "Photography · S. Indiana", note: "Portrait and lifestyle work — emerald, grounded.", visual: "screen", image: "/assets/websites/heart-homestead/preview.jpg" },
  "ARCH 014": { bucket: "PHOTOGRAPHY + CREATIVE", cardLine: "Mobile Photo Studio · Maryland", note: "A studio that brings the session to you.", visual: "mobile", image: "/assets/websites/mobile-memories/preview.jpg" },
  "ARCH 018": { bucket: "BEAUTY + WELLNESS", cardLine: "Permanent Makeup · Milton, WA", note: "Aliya's brow studio — no website before, just a booking link. Now a full interactive site that explains everything, so she redirects clients instead of repeating herself.", visual: "screen", image: "/assets/websites/essential-brows/preview.jpg" },
  "ARCH 019": { bucket: "BEAUTY + WELLNESS", cardLine: "Salon · Federal Way, WA", note: "Everything beauty, one spot.", visual: "mobile", image: "/assets/websites/beauty-spot/preview.jpg" },
  "ARCH 029": { bucket: "FOOD + HOSPITALITY", cardLine: "Matcha + Boba · Seattle, WA", note: "More than boba — matcha-first in the U District.", visual: "screen", image: "/assets/websites/yoka/preview.jpg" },
  "ARCH 032": { bucket: "WEDDINGS + EVENTS", cardLine: "Wedding Planning · Oregon, PNW", note: "Brand-new business that started already booked — a mockup became the site that takes her inquiries.", visual: "photo", image: "/assets/campaigns/jazmins-events/brand-guide.png" },
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
  "ARCH 016": "PEOPLE + EDITORIAL",   // Green Grillz
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
  "ARCH 013": "Artists + Creatives", // Heart & Homestead
  "ARCH 014": "Artists + Creatives", // Mobile Memories Photography
  "ARCH 015": "Artists + Creatives", // Soniq Reign
  "ARCH 016": "Products + Retail", // Green grillz (Nine Vicious)
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
  blurb: "Streetwear drop shot in the Soniq Reign circle — tees, denim, the moment between takes.",
},
  { file: "ARCH 004", title: "Photography · Night series, blue hour", category: "PHOTOGRAPHY", place: "Seattle", year: "2026", motif: "sun", image: "/assets/photography/beach-01.jpg",
  tags: ["PHOTOGRAPHY"],
  blurb: "Blue hour on the water — a series held in the city's dark.",
},
  { file: "ARCH 005", title: "Photography · Avery Tien, campaign portraits", category: "PHOTOGRAPHY", place: "Seattle", year: "2025", motif: "monogram", image: "/assets/photography/avery-01.jpg", url: "/campaigns/avery-tien",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Portraits for TIEN — Bumbershoot's Fashion District, repurposed fabric, worn-in edge.",
},
  { file: "ARCH 006", title: "Photography · Shoreline, city lights on water", category: "PHOTOGRAPHY", place: "Seattle", year: "2026", motif: "porcelain", image: "/assets/photography/night-01.jpg",
  tags: ["PHOTOGRAPHY"],
  blurb: "City lights on water, shot slow and held.",
},
  /*
   * @reelclip — Seattle videographer (music videos + reels,
   *   supporting Seattle artists; NOT a record label, no live sets. Hana: filming sets,
   *   locations; primary role photography — BTS + creative portraits for the
   *   artists (Saunjay, Tooley, TB Nino, 3Way Heff + more).
   */
  { file: "ARCH 007", title: "Videography · @reelclip", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", color: "#111116", logo: "/assets/work/reelclip-logo.jpg", url: "/campaigns/reelclip",
  tags: ["MOVING IMAGE", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Music video + reel videography for Seattle artists — share-ready, Seattle-bred.",
},
  /*
   * The Issue — independent fashion publication (theissue.higgsfield.app).
   * IG @theissue__ ("seattle's fashion postcard", bio "sent from the city
   * of sea"). Showcases primarily Seattle fashion; interviews the people
   * behind it — "something for the culture." Hana: creative image side,
   * filming + color correcting. Brand: signal red #E31B23 + cream
   * (postage-stamp mark, heart + Space Needle). Filed under MOVING IMAGE
   * per owner; easy to move.
   */
  { file: "ARCH 008", title: "Fashion Publication · The Issue", category: "MOVING IMAGE", place: "Seattle", year: "2026", motif: "stem", color: "#E31B23", logotext: { main: "THE ISSUE", sub: "FASHION PUBLICATION", color: "#FFF9E5"}, url: "/campaigns/the-issue",
  tags: ["MOVING IMAGE", "CREATIVE DIRECTION", "CONTENT + SOCIAL"],
  blurb: "Seattle's fashion postcard — interviews, moving images and the culture between posts.",

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
  blurb: "Streetwear at 2919 Rainier — ITZ PZ in the paisley collection.",
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
  blurb: "French technique, Japanese inspiration — a pastry kitchen's storefront, handmade in Seattle.",
},
  /*
   * GREAN — specialty matcha & hojicha café, Seattle U District
   * (4524 University Way NE, inside Elixir Dessert & Bar; open daily 9-2;
   * IG @drinkgrean, drinkgrean.com). "Good tea. Good people."
   */
  { file: "ARCH 011", title: "Matcha Café · GREAN", category: "WEBSITES", place: "Seattle", year: "2026", motif: "stem", color: "#f6f1e7", logo: "/assets/work/grean-mark.png", url: "https://grean-iota.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "Specialty matcha and hojicha in the U District. Good tea. Good people.",
},
  /* Britt's Photography 423 — photographer serving NC + VA (portraits, weddings,
     boudoir, events, wildlife; also video). */
  { file: "ARCH 012", title: "Artists + Creatives · Britt's Photography 423", category: "WEBSITES", place: "NC / VA", year: "2026", motif: "sun", image: "/assets/work/britts-cover.jpg", url: "https://www.brittsphotography423.com/",
  tags: ["WEBSITES"],
  blurb: "Portraits, weddings and boudoir across NC + VA — a photographer's own portfolio.",

},

  /* Heart & Homestead — Southern Indiana portrait + lifestyle photographer (Emily). */
  { file: "ARCH 013", title: "Artists + Creatives · Heart & Homestead", category: "WEBSITES", place: "Indiana", year: "2026", motif: "stem", color: "#1D3B2E", logo: "/assets/work/hh-logo.png", url: "https://heart-and-homestead.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "Southern Indiana portrait + lifestyle work — emerald, grounded.",
},
  /* Mobile Memories Photography — Tim Sinnott, mobile photo studio, Middle River MD. */
  { file: "ARCH 014", title: "Artists + Creatives · Mobile Memories Photography", category: "WEBSITES", place: "Maryland", year: "2026", motif: "sun", color: "#2B231A", logo: "/assets/work/mm-logo.png", url: "https://mobile-memories-photography.vercel.app/",
  tags: ["WEBSITES"],
  blurb: "A mobile studio that brings the session to you — Middle River, Maryland.",
},
  /* Soniq Reign — Greater Seattle creative collective (@soniqreign, "Sonic Unity,
     Uplifting Community", soniqreign.com). Page: creative direction + moving image;
     8 music videos in post; Hana: set design, brand photography, brand planning,
     concept sourcing, finding artists, graphic design. */
  { file: "ARCH 015", title: "Artists + Creatives · Soniq Reign", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", color: "#000000", logo: "/assets/work/soniqreign-logo.jpg", url: "/campaigns/soniqreign",
  tags: ["MOVING IMAGE", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Sonic Unity, Uplifting Community — creative direction across the collective, 8 music videos in post.",
},
  /* Green grillz set — custom grillz studio campaign, Nine Vicious (YSL rapper).
     Client name + revenue milestones to be confirmed. Photos by Hana. */
  { file: "ARCH 016", title: "Products + Retail · Green Grillz — Nine Vicious", category: "CAMPAIGNS", place: "Seattle", year: "2026", motif: "sun", image: "/assets/campaigns/green-grillz/gg01.jpg", url: "/campaigns/green-grillz",
  tags: ["PHOTOGRAPHY", "CREATIVE DIRECTION", "CAMPAIGN"],
  blurb: "Custom grillz campaign — Nine Vicious, high shine, shot in Seattle.",
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
    blurb: "Mutts Don't Heel afterparty at Vice Seattle — published by Dubsea, photos by Hana.",
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
    blurb: "Aliya is a permanent makeup artist + trainer in Milton. She ran on a booking link for years — now the site explains the whole studio so she can just redirect clients and get back to brows.",
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
    blurb: "Federal Way salon — a site with the same polish as the chair.",
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
    blurb: "North Indian in Bellevue — a commercial made for the kitchen, and the plates that feed the feeds.",
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
    blurb: "Charlotte's SoundCloud prince, loud in the dark — the live set, sepia and smoke.",
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
    blurb: "TV performance + the promo shoot — keffiyeh, coins, and a vintage TV against the Seattle sun.",
  },

  {
    file: "ARCH 023",
    title: "Artists + Creatives · Rockstar Flaco",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2026",
    motif: "sun",
    image: "/assets/campaigns/rockstar-flaco/rf-01.jpg",
    url: "/campaigns/rockstar-flaco",
    industry: "Artists + Creatives",
    tags: ["PHOTOGRAPHY", "MOVING IMAGE", "CREATIVE DIRECTION", "CAMPAIGN"],
    blurb: "Facilitated by the Soniq Reign × ReelClip circle, photographed by Hana — the set that ran on the family.",
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
    blurb: "The sold-out Cultura night in pink and purple — white frames, gold chain, crowd in the air.",
      frontHidden: true,},

  {
    file: "ARCH 025",
    title: "Beauty + Wellness · Angie Tiara Beauty",
    category: "CAMPAIGNS",
    place: "Tacoma · WA",
    year: "2026",
    motif: "stem",
    image: "/assets/campaigns/angie-tiara-beauty/at-01.jpg",
    url: "/campaigns/angie-tiara-beauty",
    industry: "Beauty + Wellness",
    tags: ["PHOTOGRAPHY", "CONTENT + SOCIAL"],
    blurb: "Makeup + esthetics with a head-spa heart — the studio, the gold water arch, and the feed that keeps her booked.",
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
    blurb: "The MC in the ETC jacket — TACOMA on the chest, mic in hand, six frames from the white room.",
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
    blurb: "Monochrome-era Seattle artist — Forever (Count Fast Millionaire), cover by Hana.",
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
    blurb: "Graffiti-era visual artist and the monochrome label — Givenchy to Supreme SS23.",
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
    blurb: "Matcha and boba in Seattle — more than a drink, built quiet and bold.",
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
    blurb: "DJ Prashant × The Hiyu — Y2K on the water, Bollywood to club hits, and the Indian American culture loud on the deck.",
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
    blurb: "Eat. Drink. Live — craft cocktails and the plates people screenshot, with Tacoma's food accounts in the room.",
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
    url: "/campaigns/jazmins-events",
    industry: "Events + Experiences",
    tags: ["WEBSITES", "BRANDING + IDENTITY"],
    blurb: "A brand-new planning business, already booked — branding and a mockup-turned-live-site for a Pacific Northwest planner. You live the moment; the site handles the rest.",
 },

  {
    file: "ARCH 033",
    title: "Artist Social · Jaydyn F. — Underground Rap",
    category: "CAMPAIGNS",
    place: "Seattle",
    year: "2025",
    motif: "monogram",
    color: "#55286F",
    image: "/assets/campaigns/jaydyn-f/jd-two.jpg",
    url: "/campaigns/jaydyn-f",
    industry: "Music + Nightlife",
    tags: ["CONTENT + SOCIAL", "PHOTOGRAPHY"],
    blurb: "BTS capture, photography and short-form support around a Seattle underground rap artist's releases — the visuals that keep the world moving between music videos.",
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
        "When you aren't sure what you need, we start by looking at what you have. A short conversation, a look at your current work, and one clear direction. No proposal before we understand the problem.",
      cta: "Ask for an introduction",
    };
  }
  if (need.includes("photograph")) {
    return {
      headline: "Begin where we begin.",
      copy: `New photography for ${withWhat || "your work"} is the fastest way to look like the business you are. We plan a shoot that can also feed your website and your feed.`,
      cta: "Request a shoot",
    };
  }
  if (need.includes("website")) {
    return {
      headline: "Make the frame first.",
      copy:
        "Your website should hold photography as well as words. We start with the creative direction, then build a page that lets the images do the talking.",
      cta: "Request a website",
    };
  }
  if (need.includes("direct") || need.includes("brand")) {
    return {
      headline: "Clarify the direction.",
      copy:
        "Before anything gets made, we settle the visual direction and the story. This is where the work either lands or doesn't.",
      cta: "Request creative direction",
    };
  }
  if (need.includes("campaign") || need.includes("content") || need.includes("video")) {
    return {
      headline: "A campaign with one voice.",
      copy:
        "You need content that holds together as a campaign, not a handful of one-off posts. We art-direct it so it looks like one thing on purpose.",
      cta: "Request a campaign",
    };
  }
  return {
    headline: "Let's figure out what needs to be made.",
    copy:
      "You told us a little, and that's enough to begin. We will listen, look at the work, and tell you the one thing that would move you forward most.",
    cta: "Send an inquiry",
  };
}

/* ---- Office hours / form fields ---- */
export const needOptions = [
  "Website",
  "Photography",
  "Social Media / Content",
  "Creative Direction",
  "Branding",
  "Video / Moving Image",
  "Campaign",
  "Not sure yet / Other",
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Directory", href: "#directory" },
];