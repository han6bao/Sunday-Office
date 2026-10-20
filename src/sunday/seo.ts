/* Search titles and descriptions for every page.
   Each page names what it is, that it's Seattle, and Sunday Office. */

export const SITE = "https://sundayoffice.agency";

type Seo = { title: string; description: string };

export const SEO: Record<string, Seo> = {
  "/": {
    title: "Sunday Office | Seattle Creative Agency for Branding, Websites + Photography",
    description:
      "Sunday Office is a Seattle creative agency for local businesses and artists: branding, brand makeovers, website design, photography, video, creative direction and social content. Founded by Seattle photographer Hana.",
  },
  "/about": {
    title: "About Hana | Seattle Photographer + Founder of Sunday Office",
    description:
      "Meet Hana, Seattle photographer and founder of Sunday Office, a Seattle creative agency for branding, websites, photography and creative direction.",
  },

  /* Services */
  "/branding": {
    title: "Branding + World Building in Seattle | Sunday Office",
    description:
      "Seattle branding agency for local businesses: brand identity, brand makeovers, brand kits, voice and the whole world around your logo.",
  },
  "/logo-identity": {
    title: "Logo + Brand Identity Design in Seattle | Sunday Office",
    description:
      "Logo design and brand identity for Seattle businesses: marks, colors, type and brand guides that make everything you put out look like you.",
  },
  "/websites": {
    title: "Website Design in Seattle for Small Businesses | Sunday Office",
    description:
      "Seattle website design for small businesses: custom, mobile-first sites and website makeovers that show the work, answer questions and get you booked.",
  },
  "/photography": {
    title: "Seattle Photographer for Brands, Portraits + Events | Sunday Office",
    description:
      "Seattle photography for brands, businesses and artists: portraits, headshots, food, product, interiors, events and campaigns, planned and directed by Hana.",
  },
  "/photography/people": {
    title: "Portrait + Personal Branding Photography Seattle | Sunday Office",
    description:
      "Portraits, artist photos and personal branding photography in Seattle by Hana of Sunday Office.",
  },
  "/photography/brands": {
    title: "Brand, Food + Interior Photography Seattle | Sunday Office",
    description:
      "Seattle brand photography for restaurants, bars, beauty studios and shops: food, drinks, product and interior photos made to sell.",
  },
  "/photography/events": {
    title: "Event + Nightlife Photography Seattle | Sunday Office",
    description:
      "Seattle event photography: nightlife, concerts, afterparties and live coverage by Hana of Sunday Office.",
  },
  "/photography/creative": {
    title: "Editorial + Creative Photography Seattle | Sunday Office",
    description:
      "Editorial, fashion and conceptual photography in Seattle for artists, streetwear brands and creative campaigns.",
  },
  "/social-packs": {
    title: "Social Packs: Canva Templates in Your Brand + How to Use Them | Sunday Office",
    description:
      "Social packs from Sunday Office: 20 posts, stories and covers in your brand, editable in Canva. Plus a simple step-by-step guide to using Canva.",
  },
  "/loft-tacoma": {
    title: "Best Place for Model Digitals + Headshots in Seattle and Tacoma: LOFT Tacoma | Sunday Office",
    description: "Where to get model digitals and headshots in Seattle and Tacoma. A real shoot at LOFT Tacoma: natural light, white brick, a huge mirror, sofas, easy parking and booking.",
  },
  "/digitals-prep": {
    title: "How to Prepare for Model Digitals: What to Bring + Posing Guide | Sunday Office",
    description: "A free guide to preparing for model digitals: what to do a week, a day and the night before, what to bring, what to avoid, hair for every length and a posing guide.",
  },
  "/digitals": {
    title: "Model Digitals Seattle + Tacoma | Agency-Ready Digitals | Sunday Office",
    description:
      "Model digitals for new and working models in Seattle and Tacoma: front, three-quarter, profile and full length in natural light, with direction the whole time.",
  },
  "/launch-your-business": {
    title: "Launching a Business in Seattle: Brand, Website + Photos | Sunday Office",
    description:
      "Starting a business in Seattle or Washington? The order to do it in: your brand, a simple website, real photos and a plan to get found. Help from Sunday Office.",
  },
  "/launch-a-product": {
    title: "Product Launch Photos, Video + Content in Seattle | Sunday Office",
    description:
      "Launching a product, a drop or a new menu in Seattle? Plan the photos, video and posts as one campaign so it gets noticed. Creative direction by Sunday Office.",
  },
  "/launch-a-website": {
    title: "Small Business Website Design in Seattle | Sunday Office",
    description:
      "Need your first website in Seattle? A custom, phone-first site with booking, words written with you and setup to get found on Google. Sunday Office.",
  },
  "/website-makeover": {
    title: "Website Redesign + Makeover for Small Businesses in Seattle | Sunday Office",
    description:
      "Website looks dated or doesn't get bookings? Quick fixes, a full refresh or a rebuild in custom code for Seattle small businesses. Sunday Office.",
  },
  "/get-more-customers": {
    title: "How to Get More Customers for a Small Business in Seattle | Sunday Office",
    description:
      "Need more leads and bookings? Get found on Google, look trustworthy at first glance and post content that brings people in. Help for Seattle small businesses.",
  },
  "/stand-out": {
    title: "How to Make Your Business Stand Out: Creative Branding in Seattle | Sunday Office",
    description:
      "Look like everyone else in your industry? Creative branding, photos and content that make your business recognizable. Seattle creative agency Sunday Office.",
  },
  "/promote-your-business": {
    title: "Promote Your Small Business: Content + Campaigns in Seattle | Sunday Office",
    description:
      "Want more people to know about your business? Photos, short videos and campaigns made to be shared, plus a simple plan for where they go. Sunday Office, Seattle.",
  },
  "/creative-branding": {
    title: "Creative Branding + Logo Design in Seattle | Sunday Office",
    description:
      "Creative branding in Seattle: logo, colors, fonts, voice and a guide, built around your business and ready to use in Canva. World building by Sunday Office.",
  },
  "/social-media-content": {
    title: "Social Media Content Creation in Seattle | Sunday Office",
    description:
      "Creative, strategic social media content for Seattle businesses: content days, short videos, social packs and monthly content. I make the assets, you stay in control.",
  },
  "/photo-and-video-content": {
    title: "Brand Photography + Video for Businesses in Seattle | Sunday Office",
    description:
      "Engaging brand photos, short videos and commercials for Seattle businesses, planned around where they'll be used. Photography and film by Sunday Office.",
  },
  "/show-up-on-google": {
    title: "How to Show Up on Google: Local SEO for Seattle Businesses | Sunday Office",
    description:
      "Want your business to show up on Google in Seattle? Google Business Profile, reviews, photos and a website set up for local search. A simple guide from Sunday Office.",
  },
  "/for-restaurants": {
    title: "Restaurant Photography, Menus + Websites in Seattle | Sunday Office",
    description:
      "Food photography, commercials, menus and websites for Seattle restaurants, caf\u00e9s and bars. Make people hungry before they walk in. Sunday Office.",
  },
  "/for-beauty-and-wellness": {
    title: "Branding, Websites + Photos for Salons and Med Spas in Seattle | Sunday Office",
    description:
      "Websites, branding, interior photos and content for Seattle salons, spas, estheticians and med spas. Look as good as the results you deliver. Sunday Office.",
  },
  "/for-event-planners": {
    title: "Branding, Websites + Event Content for Planners in Seattle | Sunday Office",
    description:
      "Branding, websites and event content for Seattle wedding planners, event coordinators and venues. Show the work so the next couple books. Sunday Office.",
  },
  "/just-started": {
    title: "I Just Started a Business: A Step-by-Step Guide for Washington | Sunday Office",
    description:
      "Just started a business in Seattle or Washington? A free checklist of everything you need: licenses, brand, website, photos, Google and social, in the right order.",
  },
  "/revamp-your-business": {
    title: "How to Revamp Your Business: A Rebrand + Website Makeover Guide | Sunday Office",
    description:
      "Business feels outdated? A free step-by-step guide to revamping your brand, website, photos and social media, and what to fix first. From Sunday Office in Seattle.",
  },
  "/help": {
    title: "What Do You Need Help With? A Free Small Business Directory | Sunday Office",
    description:
      "Starting or growing a business in Seattle or Washington? Pick what you need: launching, a website, more customers, branding, social media, photos or Google. Free guides from Sunday Office.",
  },
  "/washington-business-resources": {
    title: "Washington Small Business Resources: Licenses, Free Help + Funding | Sunday Office",
    description:
      "Starting a business in Washington? Where to register, get a business license, find free advising (SBDC, SCORE), funding, certification and local business groups.",
  },
  "/headshots": {
    title: "Seattle Headshot Photographer | Sunday Office",
    description:
      "Professional and creative headshots in Seattle by Hana. Direction the whole time so you look like yourself.",
  },
  "/moving-image": {
    title: "Seattle Commercials + Brand Films | Film + Commercials | Sunday Office",
    description:
      "Seattle commercials, brand films and campaign video for local businesses and artists.",
  },
  "/creative-direction-content": {
    title: "Social Media Content Seattle | Social + Content | Sunday Office",
    description:
      "Seattle social media content: content days, short videos, social packs editable in Canva and monthly content plans. I make the assets, you stay in control.",
  },

  /* Case studies */
  "/websites/essential-brows-studio": {
    title: "Essential Brows Studio Website + Brand Kit | Sunday Office Seattle",
    description:
      "Case study: website design, brand kit, copy and booking setup for Essential Brows, a permanent brow studio in Milton, WA, by Seattle agency Sunday Office.",
  },
  "/websites/jazmins-events": {
    title: "Jazmin's Events Branding + Website | Sunday Office Seattle",
    description:
      "Case study: brand identity, brand guide, Instagram templates and website for Jazmin's Events & Coordinating, a wedding planner, by Sunday Office.",
  },
  "/campaigns/selaras-haus": {
    title: "Selaras Haus Interior Photography Tacoma | Sunday Office",
    description:
      "Interior photography for Selaras Haus by Angie Tiara, a beauty boutique in downtown Tacoma. Soft, natural photos of the space by Sunday Office.",
  },
  "/campaigns/public-house": {
    title: "Public House Venue Photography Seattle | Sunday Office",
    description:
      "Venue and bar photography for Public House in Pioneer Square, Seattle, made for their social media and stories.",
  },
  "/campaigns/bar-bistro": {
    title: "Bar Bistro Food + Cocktail Photography Tacoma | Sunday Office",
    description:
      "Food and cocktail photography for Bar Bistro in Tacoma: plates, drinks and the room, shot for their menu and social.",
  },
  "/campaigns/chutneys": {
    title: "Chutneys Bellevue Food Photography + Commercial | Sunday Office",
    description:
      "Food photography and a promo commercial for Chutneys, an Indian restaurant in Bellevue, by Seattle agency Sunday Office.",
  },
  "/campaigns/green-grillz": {
    title: "Nine Vicious × Custom Grillz Photography + Marketing | Sunday Office",
    description:
      "Photography and promotion for jeweler Marcus Adam's custom grillz with Nine Vicious. 6K likes and a post that reached the discovery page.",
  },
  "/campaigns/leon-thomas": {
    title: "Leon Thomas Afterparty Photography at Vice Seattle | Sunday Office",
    description:
      "Nightlife photography of Leon Thomas at the Mutts Don't Heel tour afterparty at Vice Seattle, photographed by Hana.",
  },
  "/campaigns/jaydyn-f-scream": {
    title: "Jaydyn F. SCREAM Music Video + Release Content | Sunday Office Seattle",
    description: "Lighting, set photos, behind the scenes and styled shoots for Seattle rapper Jaydyn F.'s SCREAM music video and release rollout, directed by Real World Jake.",
  },
  "/campaigns/elena-qiu": {
    title: "Elena Qiu Fashion Show Editorial + Film | Seattle Fashion Photographer | Sunday Office",
    description: "Cinematic show editorials and short films for New York fashion designer Elena Qiu. Fashion campaign photography and video for designers and clothing brands, from Sunday Office in Seattle.",
  },
  "/campaigns/avery-tien": {
    title: "Avery Tien Fashion Portraits Seattle | Sunday Office",
    description: "Fashion portraits of Seattle designer Avery Tien, photographed by Hana of Sunday Office.",
  },
  "/campaigns/big-baby-gucci": {
    title: "Big Baby Gucci Live Concert Photography | Sunday Office Seattle",
    description: "Live music photography of Big Baby Gucci by Seattle photographer Hana of Sunday Office.",
  },
  "/campaigns/chitos": {
    title: "Chitos International Art Direction + Photography | Sunday Office Seattle",
    description:
      "Graffiti, fashion and art direction with Chitos International. Photography and creative direction by Seattle agency Sunday Office.",
  },
  "/campaigns/dj-prashant-hiyu": {
    title: "Iconic 2000s Boat Party Event Photography Seattle | Sunday Office",
    description: "Event photography from the Iconic 2000s Boat Party on the Hiyu with DJ Prashant in Seattle.",
  },
  "/campaigns/dj-wzrd": {
    title: "DJ WZRD Nightlife Photography Seattle | Sunday Office",
    description: "Nightlife and DJ photography of DJ WZRD by Seattle photographer Hana of Sunday Office.",
  },
  "/campaigns/exhibition": {
    title: "Exhibition Streetwear Campaign Seattle | Sunday Office",
    description: "Summer 2026 streetwear campaign for Exhibition in Seattle: photography and creative direction by Sunday Office.",
  },
  "/campaigns/highway": {
    title: "Highway Album Cover Photography Seattle | Sunday Office",
    description: "Album cover photography for Seattle rapper Highway by Hana of Sunday Office.",
  },
  "/campaigns/jaydyn-f": {
    title: "Jaydyn F. Artist Social Content Seattle | Sunday Office",
    description: "Photos and social content for Seattle artist Jaydyn F. by Sunday Office.",
  },
  "/campaigns/kenshi-killz": {
    title: "Kenshi Killz Artist Promo Photography Seattle | Sunday Office",
    description: "Promo photography for Seattle artist Kenshi Killz by Hana of Sunday Office.",
  },
  "/campaigns/paradice": {
    title: "Itz Pz × Paradice Worldwide Streetwear Campaign Seattle | Sunday Office",
    description: "Artist and streetwear campaign for Itz Pz and Paradice Worldwide in Seattle, by Sunday Office.",
  },
  "/campaigns/ellis-digitals": {
    title: "Model Digitals in Tacoma: Ellis at LOFT Tacoma | Sunday Office",
    description: "Model digitals and a styled look for Ellis at LOFT Tacoma: location, styling, lighting, posing and selects by Hana of Sunday Office. Digitals for agencies, scouting and casting in Seattle and Tacoma.",
  },
  "/campaigns/still-different": {
    title: "Still Different Artist + Gear Photography Seattle | Sunday Office",
    description: "Artist and gear photography for Still Different by Seattle photographer Hana of Sunday Office.",
  },
};

/* Link previews: one shared card for the site, and a few pages with their own photo. */
const OG_IMAGE: Record<string, string> = {
  "/loft-tacoma": "/assets/campaigns/ellis-digitals/og-ellis.jpg",
  "/campaigns/ellis-digitals": "/assets/campaigns/ellis-digitals/og-ellis.jpg",
};

export function seoHead(path: string) {
  const s = SEO[path] ?? SEO["/"];
  const url = SITE + (path === "/" ? "/" : path);
  const img = SITE + (OG_IMAGE[path] ?? "/og-card.jpg");
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img },
      { property: "og:site_name", content: "Sunday Office" },
      { property: "og:locale", content: "en_US" },
      { name: "geo.region", content: "US-WA" },
      { name: "geo.placename", content: "Seattle" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
