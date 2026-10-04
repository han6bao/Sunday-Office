import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BackHome, BookBar, FaqList, FitPicker, ListBlock, PriceList, ServiceCta, ServiceIntro, ServiceSteps, TapStory, WorkCards } from "../sunday/service-kit";

export const Route = createFileRoute("/websites")({
  head: () => seoHead("/websites"),
  component: WebsitesPage,
});

const INCLUDED = [
  { t: "Design + build", d: "From one clean page to a full site, designed around your business, not a template." },
  { t: "Booking + inquiries", d: "Booking links, inquiry forms and ordering, connected so people can say yes without messaging you first." },
  { t: "Phone first", d: "Most people will find you on their phone, so that's where it's designed first." },
  { t: "Words + photos", d: "Help writing what goes on each page, and choosing the photos that show you best." },
  { t: "The setup", d: "Your domain, the email your form sends to, and your booking link, all plugged in." },
  { t: "After launch", d: "Edits, updates and hosting, so the site keeps up with your business." },
];

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
  { label: "I already have a site that needs fixing, or I only need one page.", pick: "Landing pages + fixes", price: "from $250", why: "A refresh, a repair or a single page, priced to what it actually needs. No starting over unless it makes sense." },
];

const FAQ = [
  { q: "Do I need my words and photos ready?", a: "No. Writing the words with you is part of every site, and we choose the photos together. If you need new photos, I can shoot those too." },
  { q: "How long does it take?", a: "It depends on how many pages you need and how quickly we gather your words and photos. You'll get a timeline with your price before anything starts." },
  { q: "I'm not techy. Is that a problem?", a: "Not at all. I handle the tech and walk you through anything you need to do on your end, in plain words." },
  { q: "Do I need a logo first?", a: <>No. If you don't have one yet, we can start with the brand. <a href="/branding">Build a World →</a></> },
  { q: "I already have a site. Do we have to start over?", a: "Not unless it makes sense. We can fix what's broken, refresh the look, swap in better photos or tighten your portfolio. That's quoted separately from a full build." },
  { q: "What's the difference between the simple site and the SEO one?", a: "It's the same site. The SEO version adds the setup that helps Google understand you: page titles, descriptions, local Seattle search and a sitemap." },
  { q: "Will there be other costs?", a: "Some things you own, like your domain name, have their own small costs. I'll walk you through each one before we start, so nothing comes as a surprise." },
  { q: "What if I need changes after launch?", a: "Every site comes with one round of small changes after launch, free. After that, updates are $70 each. Bigger changes get their own quote." },
];

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
              Part of building your world. Starting from nothing? Begin with{" "}
              <a className="so-bw-inline" href="/branding">Build a World →</a>
            </>
          }
          jumps={[
            { t: "What you get", h: "#get" },
            { t: "How it works", h: "#how" },
            { t: "Which one fits", h: "#fit" },
            { t: "Pricing", h: "#pricing" },
            { t: "Work", h: "#work" },
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

        <ServiceSteps steps={STEPS} title="From first talk to live site." />

        <PriceList
          need="Website"
          title="Where websites start."
          items={[
            { t: "Simple site", p: "$850", d: "For businesses that need the basics done beautifully.", list: ["Research on your business + customers", "4 to 5 pages, designed + built", "Words written with you", "Booking or inquiries", "Setup to get it live"] },
            { t: "Simple site + SEO", p: "$1,000", tag: "RECOMMENDED", d: "The simple site, set up so people searching can find you.", list: ["Everything in the simple site", "Research into what people search in Seattle", "Page titles + descriptions", "Local search + a sitemap for Google"] },
            { t: "Full site", p: "from $1,250", d: "More pages and more going on.", list: ["Research + a full page plan", "Galleries or menus", "Lots of services or case studies", "A more custom build"] },
            { t: "Landing pages + fixes", p: "from $250", d: "One page, or help for the site you have.", list: ["A single page", "A link-in-bio", "Fixes + a refresh", "Better photos or copy"] },
          ]}
          foot="Every site includes one round of small changes after launch, free. After that, updates are $70 each. You'll know the final number before anything starts."
        />

        <WorkCards
          label="SITES I'VE BUILT"
          items={[
            { t: "GREAN", w: "Website · matcha café", d: "A website for a matcha and hojicha café in Seattle's U District.", img: "/assets/campaigns/grean/featured-cover.png", h: "https://grean-matcha.vercel.app/" },
            { t: "Essential Brows", w: "Website + brand kit", d: "A brow studio that ran on a booking link. Now it has a home.", img: "/assets/campaigns/essential-brows-studio/featured-cover.png", h: "/websites/essential-brows-studio" },
            { t: "Jazmin's Events", s: "In progress", w: "Brand + website", d: "A brand-new wedding planner, branded from scratch.", img: "/assets/campaigns/jazmins-events/featured-cover.png", h: "/websites/jazmins-events" },
          ]}
        />

        <FaqList items={FAQ} />

        <ServiceCta current="websites" title="Ready for a site that feels like you?" sub="ONE PAGE OR A WHOLE SITE. WE'LL FIGURE OUT WHAT YOU NEED." />
      </div>
      <BookBar service="Websites" price="from $850" need="Website" />
    </div>
  );
}
