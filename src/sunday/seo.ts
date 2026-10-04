/* Search titles and descriptions for every page.
   Each page names what it is, that it's Seattle, and Sunday Office. */

export const SITE = "https://sundayoffice.agency";

type Seo = { title: string; description: string };

export const SEO: Record<string, Seo> = {
  "/": {
    title: "Sunday Office | Seattle Creative Agency for Branding, Websites + Photography",
    description:
      "Sunday Office is a Seattle creative agency for local businesses and artists: branding, website design, photography, video, creative direction and social content. Founded by Seattle photographer Hana.",
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
      "Seattle branding agency for local businesses: brand identity, brand kits, voice and the whole world around your logo. Logos from $350, brand kits from $550.",
  },
  "/logo-identity": {
    title: "Logo + Brand Identity Design in Seattle | Sunday Office",
    description:
      "Logo design and brand identity for Seattle businesses: marks, colors, type and brand guides that make everything you put out look like you.",
  },
  "/websites": {
    title: "Website Design in Seattle for Small Businesses | Sunday Office",
    description:
      "Seattle website design for small businesses: custom, mobile-first sites that show the work, answer questions and get you booked. Websites from $850.",
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
  "/headshots": {
    title: "Seattle Headshot Photographer | Headshots from $150 | Sunday Office",
    description:
      "Professional and creative headshots in Seattle by Hana. Sessions from $150, with direction the whole time so you look like yourself.",
  },
  "/moving-image": {
    title: "Seattle Video Production: Brand Films, Commercials + Reels | Sunday Office",
    description:
      "Seattle video for brands and artists: commercials, brand films, music content, reels and event recaps from Sunday Office.",
  },
  "/creative-direction-content": {
    title: "Creative Direction + Social Media Content Seattle | Sunday Office",
    description:
      "Seattle creative direction and social media content: audits, strategy, Canva brand kits and monthly content plans from $600 a month.",
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
  "/campaigns/still-different": {
    title: "Still Different Artist + Gear Photography Seattle | Sunday Office",
    description: "Artist and gear photography for Still Different by Seattle photographer Hana of Sunday Office.",
  },
};

export function seoHead(path: string) {
  const s = SEO[path] ?? SEO["/"];
  const url = SITE + (path === "/" ? "/" : path);
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Sunday Office" },
      { property: "og:locale", content: "en_US" },
      { name: "geo.region", content: "US-WA" },
      { name: "geo.placename", content: "Seattle" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
