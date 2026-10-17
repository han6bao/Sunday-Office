import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BeforeAfter, Checklist, Glossary, GoodGuide, LearnMore, QuoteSlot, Slot, Timeline, Watch } from "../sunday/help-kit";
import { BookBar, bookHref, FaqList, ListBlock, PriceList, PriceTabs, ServiceCta, ServiceIntro, ServiceSteps, WorkCards } from "../sunday/service-kit";
import { ServiceQuiz } from "../sunday/service-quiz";
import { QUIZ_WEBSITES } from "../sunday/quiz-content";

export const Route = createFileRoute("/websites")({
  head: () => seoHead("/websites"),
  component: WebsitesPage,
});

const INCLUDED = [
  { t: "Design + build", d: "From one clean page to a full site, designed around your business, not a template." },
  { t: "Booking + inquiries", d: "Booking links, inquiry forms and ordering, connected so people can say yes without messaging you first." },
  { t: "Phone first", d: "Most people will find you on their phone, so that's where it's designed first." },
  { t: "Words + photos", d: "Help writing what goes on each page, and choosing the photos that show you best." },
  { t: "Domain, email + links, connected", d: "I connect your domain, set up your business email (like hello@yourname.com), and link your booking, socials, Google Maps and payment pages. No tech on your end." },
  { t: "After launch", d: "Edits, updates and hosting, so the site keeps up with your business." },
];

const FOR_WHO = [
  { t: "No website yet", d: "People find you on Instagram or a booking link, then have nowhere to land." },
  { t: "A site you don't send people to", d: "It's outdated, slow or doesn't look like the business you run now." },
  { t: "A site that doesn't book anyone", d: "People visit, then message you the same questions or leave." },
];

const TIMELINE = [
  { when: "Day 1", t: "Free call", d: "15 to 30 minutes. You tell me about the business, I ask the questions." },
  { when: "Right after", t: "Plan + price", d: "You get a page plan, a timeline and one clear price. Nothing starts until you say yes." },
  { when: "Next", t: "Words + design", d: "We write the pages together and you see the design before it gets built." },
  { when: "Then", t: "Build + connect", d: "Booking, forms, domain and email all plugged in. You test it on your phone." },
  { when: "Launch day", t: "Live", d: "One link to send everywhere. Then one round of small changes is on me." },
];

const PREP = [
  { t: "Your logo", d: "Any file works. No logo yet? We can make one first." },
  { t: "A list of what you sell", d: "Services, menu or products, with prices if you share them." },
  { t: "Photos you already have", d: "Phone photos are fine. I'll tell you which ones work, or we shoot new ones." },
  { t: "2 or 3 sites you like", d: "Any business, any industry. Just what you like about them." },
  { t: "How people book or buy", d: "Square, Vagaro, Calendly, DMs, a form. Whatever you use now." },
  { t: "Your domain login", d: "If you already own yourname.com. If not, I'll walk you through getting one." },
  { t: "The questions people always ask", d: "The ones you answer in DMs every week. They become the FAQ." },
];

const GOOD = [
  { t: "Say what you do in one line", d: "Someone should know what you sell and where you are within 5 seconds of landing on your site.", slot: "The first screen of a real site, with the one-line headline" },
  { t: "Show real photos", d: "Real photos of your space, your work and your face build trust faster than stock photos ever will.", slot: "Side by side: a stock photo vs. a real brand photo" },
  { t: "Put your prices up", d: "Even a starting price. People who can see a number are more likely to reach out, not less.", slot: "A clean price section on a phone screen" },
  { t: "One clear button", d: "Book now, get a quote or order. One main action, repeated, so nobody has to hunt for it.", slot: "The booking button showing on every screen of a site" },
  { t: "Built for phones first", d: "Most of your visitors are on their phone, often on Instagram. It has to work there first.", slot: "A site scrolled on a phone, start to finish" },
  { t: "Answer the questions before they ask", d: "Parking, prep, timing, policies. An FAQ saves you hours of DMs every week.", slot: "An FAQ section opening and closing" },
  { t: "Show up on Google", d: "Page titles, descriptions and your business on Google Maps, so people searching nearby can find you.", slot: "A Google search result for a local business" },
];

const WORDS = [
  { w: "Domain", d: "Your address online, like yourname.com. You own it and renew it once a year for a small fee." },
  { w: "Hosting", d: "Where your site lives so it loads for people. Think of it as rent for the site." },
  { w: "SEO", d: "The setup that helps Google understand what you do and where, so people searching can find you." },
  { w: "Booking link", d: "The tool people use to book you, like Square or Vagaro. Your site sends people straight to it." },
  { w: "Landing page", d: "One focused page, usually for one offer or one event, with one button." },
  { w: "Mobile-first", d: "Designed for phones before computers, because that's where most people will see it." },
  { w: "Form", d: "The boxes people fill in to reach you. Their message lands in your email." },
  { w: "Analytics", d: "A simple count of who visits, from where, and what they click." },
];

const WATCH = [
  { t: "60 seconds: what a website does for a small business", d: "The short version, for anyone on the fence." },
  { t: "A walk through a site I built", d: "Scroll along with me and see why each part is there." },
  { t: "What our first call is like", d: "So you know exactly what to expect before you book." },
];

function ForWho() {
  return (
    <section id="for" className="so-bw-sec so-for">
      <p className="so-micro">WHO THIS IS FOR</p>
      <h2 className="so-serif so-bw-h">Sound like you?</h2>
      <ol className="so-for-list">
        {FOR_WHO.map((x, i) => (
          <li key={x.t}>
            <span className="so-for-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="so-for-t">{x.t}</span>
            <span className="so-for-d">{x.d}</span>
          </li>
        ))}
      </ol>
      <a className="so-for-go" href="/#office-hours">Start a project →</a>
    </section>
  );
}

function MadeBy() {
  return (
    <section className="so-bw-sec so-madeby">
      <img src="/assets/work/hana-desk-bio.jpg" alt="Hana at her desk, working on a website" loading="lazy" />
      <div>
        <p className="so-micro">WHO YOU WORK WITH</p>
        <h2 className="so-serif so-bw-h">One person, start to finish.</h2>
        <p className="so-madeby-p">You talk to me from the first call to launch day. I write the words with you, set up the tech and can shoot the photos too, so nothing gets lost between people.</p>
        <a className="so-for-go" href="/#office-hours">Start a project →</a>
      </div>
      <div className="so-madeby-strip">
        <Slot label="On a call with a client" ratio="4 / 3" />
        <Slot label="Planning the pages on paper" ratio="4 / 3" />
        <Slot label="Testing a site on a phone" ratio="4 / 3" />
      </div>
    </section>
  );
}

const MAKEOVERS = [
  { n: "01", t: "Quick fix", p: "from $250", where: "On the platform you have", d: "Broken links, a new page, better photos, cleaner words. For a site that mostly works.", list: ["Squarespace, Wix, Showit or custom", "Domain, email + links connected", "No starting over"] },
  { n: "02", t: "Full refresh", p: "quoted per site", where: "On the platform you have", d: "A new look and new words on the site you already pay for. For when you love your platform but not your site.", list: ["Redesign page by page", "New layout, fonts + photos", "Keep your logins and domain"] },
  { n: "03", t: "Rebuild in custom code", p: "$850 / $1,000 with SEO", where: "Recommended", d: "A fresh, custom site that's faster, fully yours and not boxed in by a template. Most makeovers end up here.", list: ["Built around your business", "Fast on phones", "Nothing to cancel later"], rec: true },
];

const PLATFORM = [
  { k: "Looks", code: "Designed from scratch, so it looks like you, not a template", tmpl: "Starts from a template, so it can look like other sites" },
  { k: "Speed", code: "Very fast, especially on phones", tmpl: "Slower, with more built-in extras loading" },
  { k: "Monthly cost", code: "Usually just your domain, once a year", tmpl: "A monthly subscription to the platform" },
  { k: "Changes", code: "Send them to me ($70 each) or add the care plan", tmpl: "You can edit text yourself in their editor" },
  { k: "Flexibility", code: "Anything you can picture can be built: quizzes, menus, custom booking flows", tmpl: "Limited to what the platform allows" },
  { k: "Best for", code: "Businesses that want to stand out and grow", tmpl: "People who really want to edit everything themselves" },
];

function Platforms() {
  return (
    <section id="platform" className="so-bw-sec wb-plat">
      <p className="so-micro">CUSTOM CODE OR A PLATFORM?</p>
      <h2 className="so-serif so-bw-h">I recommend custom code. Here's why.</h2>
      <p className="hk-p">I build most sites in custom code, and I also work in Showit, Squarespace and Wix. If you already have one of those, we can keep it. Here's the honest difference.</p>
      <div className="wb-plat-table" role="table">
        <div className="wb-plat-row is-head" role="row"><span role="columnheader" /><span role="columnheader">Custom code <i>Recommended</i></span><span role="columnheader">Squarespace, Wix, Showit</span></div>
        {PLATFORM.map((r) => (
          <div key={r.k} className="wb-plat-row" role="row">
            <span role="rowheader">{r.k}</span>
            <span role="cell">{r.code}</span>
            <span role="cell">{r.tmpl}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const TOOLS = [
  { h: "Booking", items: ["Square", "Vagaro", "GlossGenius", "Acuity", "Calendly", "Booksy", "Fresha", "Mindbody"] },
  { h: "Food + ordering", items: ["Toast", "Square Online", "DoorDash", "Uber Eats", "OpenTable", "Resy"] },
  { h: "Payments + shop", items: ["Stripe", "PayPal", "Venmo", "Square Checkout", "Shopify"] },
  { h: "Email, socials + maps", items: ["Google Workspace email", "Instagram", "TikTok", "Google Maps", "Yelp", "Mailchimp"] },
];

function Connects() {
  return (
    <section id="connect" className="so-bw-sec wb-tools">
      <p className="so-micro">WORKS WITH WHAT YOU ALREADY USE</p>
      <h2 className="so-serif so-bw-h">Send me your links. I'll connect them.</h2>
      <p className="hk-p">Whatever you use to book, sell or get paid, it goes on your site so people can say yes in one tap. Your domain and a business email (like hello@yourname.com) get set up too. Don't see yours? If it has a link, it can be connected.</p>
      <div className="wb-tools-grid">
        {TOOLS.map((g) => (
          <div key={g.h}>
            <p className="wb-tools-h">{g.h}</p>
            <ul>{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Makeovers() {
  return (
    <section id="makeover" className="so-bw-sec wb-mk">
      <p className="so-micro">ALREADY HAVE A SITE?</p>
      <h2 className="so-serif so-bw-h">Three ways to make it over.</h2>
      <p className="hk-p">You don't have to start over. Pick how far you want to go, and I'll tell you honestly which one your site needs.</p>
      <div className="wb-mk-grid">
        {MAKEOVERS.map((m) => (
          <a key={m.n} href={bookHref("Website", `Website makeover: ${m.t} (${m.p})`)} className={"wb-mk-card" + (m.rec ? " is-rec" : "")}>
            <span className="wb-mk-top"><span className="so-for-no">{m.n}</span><span className="wb-mk-where">{m.where}</span></span>
            <span className="wb-mk-t">{m.t}</span>
            <span className="wb-mk-d">{m.d}</span>
            <ul>{m.list.map((x) => <li key={x}>{x}</li>)}</ul>
            <span className="wb-mk-go">Ask about this →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function WebPricing() {
  return (
    <PriceTabs
      label="Website prices"
      tabs={[
        { id: "pricing", t: "Websites", node: (
        <PriceList
          feature
          need="Website"
          title="Where websites start."
          items={[
            { t: "Simple site", p: "$850", d: "For businesses that need the basics done beautifully.", list: ["Research on your business + customers", "4 to 5 pages, designed + built", "Words written with you", "Booking or inquiries", "Setup to get it live"] },
            { t: "Simple site + SEO", p: "$1,000", tag: "RECOMMENDED", d: "The simple site, set up so people searching can find you.", list: ["Everything in the simple site", "Research into what people search in Seattle", "Page titles + descriptions", "Local search + a sitemap for Google"] },
            { t: "Full site", p: "from $1,250", d: "More pages and more going on.", list: ["Research + a full page plan", "Galleries or menus", "Lots of services or case studies", "A more custom build"] },
            { t: "Landing page", p: "$450", d: "One designed page for your business, an offer or an event.", list: ["Who you are + what you offer", "Your services or prices", "A booking or inquiry button", "Built for phones, with your domain connected", "Just need a link-in-bio page? $200"] },
            { t: "Fixes + a refresh", p: "from $250", d: "Help for the site you already have.", list: ["Broken links + new sections", "A refresh on Squarespace, Wix or Showit", "Better photos or words", "Domain, email + links connected"] },
          ]}
          foot="Every site includes one round of small changes after launch, free. After that, updates are $70 each, or add the care plan for $150 a month and get up to 3 updates every month, plus hosting, backups and a seasonal refresh. You'll know the final number before anything starts."
        />
        ) },
        { id: "packages", t: "Site + photos", node: (
        <PriceList
          id="packages"
          feature
          label="PACKAGES"
          need="Website"
          title="Website packages."
          items={[
            { t: "The Launch", p: "$1,400", d: "A new site with photos made for it.", list: ["Simple site + SEO", "A half-day brand shoot", "30+ edited photos, placed on your site", "Want short videos too? Add a phone content day for $300", "Save $150 vs. booking separately"] },
            { t: "The Full World", p: "from $2,900", d: "A bigger site with a proper camera video.", list: ["Full site", "A half-day brand shoot", "A camera video, 60 to 90 seconds + 3 vertical cuts", "Save $400 vs. booking separately"] },
          ]}
          foot="Packages are booked together and planned as one project, so your photos and videos are made for the pages they'll live on. Every package can add the care plan with the first month free."
        />
        ) },
        { id: "care", t: "After launch", node: (
        <PriceList
          id="care"
          label="AFTER LAUNCH"
          need="Website"
          title="The care plan."
          items={[
            { t: "Care plan", p: "$150/mo", tag: "BEST VALUE", d: "Your site, looked after every month, so you never have to think about it.", list: ["Up to 3 small updates a month (worth $210 at $70 each)", "Hosting + security checks", "Backups, so nothing is ever lost", "A monthly report: visitors, booking clicks, speed + what changed", "A quarterly review: what's working, what to change next, and the numbers over 3 months", "A seasonal refresh every quarter: new photos, banners or offers", "Priority replies, within 1 business day", "Cancel anytime"] },
          ]}
          foot="Bundle it: add the care plan when your site launches and your first month is free. Already on monthly content? The care plan is $100 a month for you. Unused updates don't roll over, and bigger changes, like new pages, get 20% off."
        />
        ) },
      ]}
    />
  );
}

const STEPS = [
  {
    t: "Talk",
    d: "What you do and who it's for.",
    more: "We talk through your business in your own words: what you offer, who books you, what people always ask, and what isn't working right now. No tech knowledge needed.",
  },
  {
    t: "Plan the pages",
    d: "What goes where.",
    more: "A simple map of the site: which pages you need, what each one says, and the one thing every page should get someone to do.",
  },
  {
    t: "Design + write",
    d: "The look and the words.",
    more: "I design it to feel like your brand and write the words with you, so it sounds like you and answers questions before anyone has to ask.",
  },
  {
    t: "Build + connect",
    d: "A working site.",
    more: "The site gets built and everything gets plugged in: your domain, the email that catches your form, your booking link. You'll get plain instructions for anything on your end.",
  },
  {
    t: "Launch + care",
    d: "Live, then looked after.",
    more: "It goes live and you get one link to send everywhere. After that, edits and updates are there when your business changes.",
  },
];

const FIT = [
  { label: "I don't have a website yet. I need the basics: what I do, my prices and a way to book.", pick: "Simple site", price: "$850", why: "Four to five clean pages, words written with you, and booking or inquiries plugged in. Everything most service businesses need to look ready." },
  { label: "Same, and I want people searching in Seattle to find me on Google.", pick: "Simple site + SEO", price: "$1,000", why: "The same site, set up so Google understands it: page titles, descriptions, local search and a sitemap." },
  { label: "I need more: galleries, a menu, lots of services or a custom feature.", pick: "Full site", price: "from $1,250", why: "More pages and more going on. We'll map out exactly what you need first, so the price matches the site." },
  { label: "I already have a site that needs fixing, or I only need one page.", pick: "Landing page or a fix", price: "$450 / from $250", why: "A refresh, a repair or a single page, priced to what it actually needs. No starting over unless it makes sense." },
];

const FAQ = [
  { q: "Can you connect my domain, email and links?", a: "Yes, on every site, and as a quick fix on its own. I connect your domain, set up a business email like hello@yourname.com, and link your booking tool, Instagram, Google Maps and payment pages, then test them all on a phone. You just approve the logins." },
  { q: "Why do you recommend custom code?", a: "It's faster, it looks like you instead of a template, and there's usually no monthly platform fee. You just renew your domain once a year. If you'd rather edit everything yourself, I also build in Showit, Squarespace and Wix." },
  { q: "What's the care plan?", a: "An optional $150 a month after launch. Up to 3 small updates every month (worth $210 on their own), plus hosting and security checks, backups, a monthly report on visitors and booking clicks, a quarterly review of what's working, priority replies and a seasonal refresh every quarter. Add it at launch and the first month is free, or get it for $100 a month with monthly content. Cancel anytime." },
  { q: "Do I need my words and photos ready?", a: "No. Writing the words with you is part of every site, and we choose the photos together. If you need new photos, I can shoot those too." },
  { q: "How long does it take?", a: "It depends on how many pages you need and how quickly we gather your words and photos. You'll get a timeline with your price before anything starts." },
  { q: "I'm not techy. Is that a problem?", a: "Not at all. I handle the tech and walk you through anything you need to do on your end, in plain words." },
  { q: "Do I need a logo first?", a: <>No. If you don't have one yet, we can start with the brand. <a href="/branding">Build a World →</a></> },
  { q: "I already have a site. Do we have to start over?", a: "Not unless it makes sense. We can fix what's broken, refresh the look, swap in better photos or tighten your portfolio. You can also stay on Squarespace, Wix or Showit if you love it. See the three makeover options above." },
  { q: "What's the difference between the simple site and the SEO one?", a: "It's the same site. The SEO version adds the setup that helps Google understand you: page titles, descriptions, local Seattle search and a sitemap." },
  { q: "Will there be other costs?", a: "Some things you own, like your domain name, have their own small costs. I'll walk you through each one before we start, so nothing comes as a surprise." },
  { q: "What if I need changes after launch?", a: "Every site comes with one round of small changes after launch, free. After that, updates are $70 each. Bigger changes get their own quote." },
  { q: "How do I pay?", a: "Half upfront to book your spot, and the other half when the work is done." },
  { q: "Will you share my project?", a: "Usually yes, on my site and Instagram, because the work is what helps the next client trust me. If you'd rather keep it private, just tell me." },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const REAL_TALK = [
  {
    tab: "Where you are",
    head: "Wherever you are, that's where we start.",
    body: "Some people don't know where to start with a website. Some don't have one yet, or even a logo. Some know what they want but not how to build it. Some have a site that isn't working and just want it cleaned up. And some are simply out of time.",
  },
  {
    tab: "What I take on",
    head: "The tech, the decisions, the time.",
    body: "Depending on the package, I handle the setup too: the domain, the email your form sends to, finding the right photos, and writing the words with you. You get back to your business while the site gets made.",
  },
  {
    tab: "Why it matters",
    head: "People are already looking for you.",
    body: "Through a booking link, a listing or nothing at all, people are finding you somewhere. If there's no website, or it's outdated, you lose people who were ready to book. They go to whoever looked more put together, even if that business isn't better than yours.",
  },
  {
    tab: "How people choose",
    head: "A listing says you exist. A website says why you.",
    body: "Think about how you pick a business yourself. You find the listing, then you look for the real site. That's where you see the services, the prices, the work, the face behind it and the reviews. When one page answers everything, people stop looking around.",
  },
  {
    tab: "One link",
    head: "Everything about you, one tap away.",
    body: "Your work, your answers, your booking, all in one place. You spend less time explaining yourself in DMs and more time doing the work. Send the link and let it do the talking.",
  },
  {
    tab: "The honest part",
    head: "What I am, and what I'm not.",
    body: "I set up the search basics properly: page titles, descriptions, local Seattle search and a sitemap, so Google understands what you do. What I won't do is promise you the top spot, because nobody honestly can. What I'm good at is understanding your business in your own words, so your website actually gets made, feels like you, and works.",
  },
];

function WebsitesPage() {
  return (
    <div className="block" style={{ minHeight: "100dvh" }}>
      <SiteBar />
      <div className="so-shell" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <ServiceIntro
          label="SERVICES · WEBSITES + DIGITAL · SEATTLE"
          title="Websites + Digital."
          lead="Your website is where people actually visit your world. I design and build sites that show the work, answer the questions and make booking easy, so you spend less time explaining yourself in DMs."
          aside={
            <>
              Need a website makeover? I can refresh what you have or start over. Starting from nothing? Begin with{" "}
              <a className="so-bw-inline" href="/branding">Build a World →</a>
            </>
          }
          jumps={[
            { t: "Who it's for", h: "#for" },
            { t: "Makeovers", h: "#makeover" },
            { t: "What you get", h: "#get" },
            { t: "Work", h: "#work" },
            { t: "How it works", h: "#how" },
            { t: "Which one fits", h: "#fit" },
            { t: "Pricing", h: "#pricing" },
            { t: "Questions", h: "#faq" },
          ]}
        />

        <div className="so-web-show">
          <a href="https://www.essentialbrows.studio/" target="_blank" rel="noreferrer" className="so-web-browser">
            <span className="so-web-bar" aria-hidden>
              <i />
              <i />
              <i />
              <span className="so-web-url">essentialbrows.studio</span>
            </span>
            <img src="/assets/campaigns/essential-brows-studio/site-desktop.jpg" alt="The Essential Brows Studio homepage on desktop" />
          </a>
          <div className="so-web-phone">
            <img src="/assets/campaigns/essential-brows-studio/site-phones.jpg" alt="The same site on a phone" loading="lazy" />
          </div>
        </div>
        <div className="so-web-cap">
          <span className="so-micro">A SITE I BUILT · ESSENTIAL BROWS STUDIO · DESKTOP + PHONE</span>
          <a className="so-micro" href="/websites/essential-brows-studio">HOW IT WAS MADE →</a>
        </div>

        <Watch label="WATCH FIRST" title="Three short videos before you decide." videos={WATCH} />

        <ForWho />

        <BeforeAfter
          label="A MAKEOVER"
          title="Same business. New home."
          before="/assets/campaigns/essential-brows-studio/makeover-before.jpg"
          after="/assets/campaigns/essential-brows-studio/makeover-after.jpg"
          note={<>Essential Brows went from a booking link and an Instagram feed to a site of her own. Drag to compare. <a className="so-bw-inline" href="/websites/essential-brows-studio">How it was made →</a></>}
        />

        <Makeovers />

        <Platforms />

        <Connects />

        <ListBlock id="get" label="WHAT YOU GET" title="Everything a site needs to work." rows={INCLUDED} />

        <WorkCards
          label="SITES I'VE BUILT"
          items={[
            { t: "Pilates Haus", s: "New", w: "Website + brand kit", d: "A new reformer Pilates studio in Seattle, with a site and brand kit built around their logo.", img: "/assets/campaigns/pilates-haus-cover.png", h: "https://pilates-haus-seattle.vercel.app/" },
            { t: "Joe Lopez Photography", w: "Website · photographer", d: "A new site for a Michigan wedding and quinceañera photographer.", img: "/assets/campaigns/joe-lopez-cover.png", h: "https://joe-lopez-photography.vercel.app/" },
            { t: "Timber & Tonic", s: "In progress", w: "Website · mobile bar", d: "A mobile bartending company in Buckley, WA.", img: "/assets/campaigns/timber-and-tonic-cover.png", h: "https://timber-and-tonic.vercel.app/" },
            { t: "GREAN", w: "Website · matcha café", d: "A website for a matcha and hojicha café in Seattle's U District.", img: "/assets/campaigns/grean/featured-cover.png", h: "https://grean-matcha.vercel.app/" },
            { t: "Essential Brows", w: "Website + brand kit", d: "A brow studio that ran on a booking link. Now it has a home.", img: "/assets/campaigns/essential-brows-studio/featured-cover.png", h: "/websites/essential-brows-studio" },
            { t: "Jazmin's Events", s: "In progress", w: "Brand + website", d: "A brand-new wedding planner, branded from scratch.", img: "/assets/campaigns/jazmins-events/featured-cover.png", h: "/websites/jazmins-events" },
          ]}
        />

        <QuoteSlot who="Aliya, Essential Brows" ask="Client words coming soon. Until then, the sites above are live, so you can click through and see them for yourself." />

        <MadeBy />

        <ServiceSteps steps={STEPS} title="From first talk to live site." />

        <Timeline label="HOW LONG IT TAKES" title="From hello to live, step by step." steps={TIMELINE} note="Your exact timeline comes with your price, before anything starts. The more you have ready (see the checklist below), the faster it goes." />



        <ServiceQuiz c={QUIZ_WEBSITES} />

        <WebPricing />


        <LearnMore>
        <Checklist label="BEFORE WE START" title="What to have ready." note="None of this is required to book. It just makes everything faster. Tap each one as you get it together." items={PREP} />

        <GoodGuide label="FREE GUIDE" title="What every small business site needs." intro="Whether you hire me or not, here's what makes a website actually work. Tap through the seven." items={GOOD} />

        <Glossary label="WEBSITE WORDS, IN PLAIN ENGLISH" title="No tech talk needed." words={WORDS} />
        </LearnMore>

        <FaqList items={FAQ} />

        <ServiceCta current="websites" title="Ready for a site that feels like you?" sub="ONE PAGE OR A WHOLE SITE. WE'LL FIGURE OUT WHAT YOU NEED." />
      </div>
      <BookBar service="Websites" price="from $850" need="Website" />
    </div>
  );
}
