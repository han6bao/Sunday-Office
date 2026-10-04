import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "../sunday/seo";
import { SiteBar } from "../sunday/site-bar";
import { BackHome, ListBlock, PriceList, ServiceCta, ServiceIntro, ServiceSteps, TapStory, WorkCards } from "../sunday/service-kit";

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

const KINDS = [
  {
    t: "Artists + creatives",
    d: (
      <>
        Portfolios where the work does the talking: galleries, film, music, the people you've worked with.{" "}
        <em>What matters most:</em> big images, fast loading, one clear way to book you.
      </>
    ),
  },
  {
    t: "Businesses + services",
    d: (
      <>
        Booking, prices, reviews and answers, so clients decide before they message you.{" "}
        <em>What matters most:</em> say what you do, what it costs, and make booking one tap.
      </>
    ),
  },
  {
    t: "Small brands + places",
    d: (
      <>
        A real home for the place people already recommend: hours, menu, story, real photos.{" "}
        <em>What matters most:</em> one link with everything on it, everywhere you're mentioned.
      </>
    ),
  },
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

const GOOD_TO_KNOW = [
  { t: "No logo yet?", d: <>That's fine. We can start with the brand first. <a className="so-bw-inline" href="/branding">Build a World →</a></> },
  { t: "Not techy?", d: "You don't need to be. I handle the tech and walk you through anything you need to do." },
  { t: "Already have a site?", d: "We can fix what's broken, refresh the look, swap in better photos or tighten your portfolio, without starting over. That's quoted separately from a full build." },
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
    body: "I don't specialize in SEO, and I won't pretend to. What I'm good at is understanding your business in your own words, so your website actually gets made, feels like you, and works.",
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
            { t: "Pricing", h: "#pricing" },
            { t: "Work", h: "#work" },
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
          <a className="so-micro" href="/campaigns/essential-brows-studio">HOW IT WAS MADE →</a>
        </div>

        <ListBlock id="get" label="WHAT YOU GET" title="Everything a website needs to work." rows={INCLUDED} />

        <TapStory id="real-talk" label="THE REAL TALK" chapters={REAL_TALK} />

        <ListBlock
          label="WHICH ONE SOUNDS LIKE YOU?"
          title="Different sites for different needs."
          note="Every site is built around how your business actually runs."
          rows={KINDS}
        />

        <ServiceSteps steps={STEPS} />

        <PriceList
          title="Where websites start."
          items={[
            { t: "Simple site", p: "$850", d: "A clean 4 to 5 page site: design, build, words, booking or inquiries, and the setup to get it live." },
            { t: "Simple site + SEO", p: "$1,000", d: "Everything in the simple site, set up to be found on Google: page titles, descriptions, local Seattle search and a sitemap." },
            { t: "Full site", p: "from $1,250", d: "More pages and more going on: galleries, menus, services, case studies or a more custom build." },
            { t: "Landing pages + fixes", p: "Quoted", d: "A single page, a link-in-bio, or fixes and a refresh for a site you already have. Priced to what it needs." },
          ]}
          foot="Every business is different, so the final price depends on what yours needs. You'll know the number before anything starts."
        />

        <WorkCards
          label="SITES I'VE BUILT"
          items={[
            { t: "GREAN", w: "Website · matcha café", d: "A website for a matcha and hojicha café in Seattle's U District.", img: "/assets/campaigns/grean/featured-cover.png", h: "https://grean-matcha.vercel.app/" },
            { t: "Essential Brows", w: "Website + brand kit", d: "A brow studio that ran on a booking link. Now it has a home.", img: "/assets/campaigns/essential-brows-studio/featured-cover.png", h: "/campaigns/essential-brows-studio" },
            { t: "Jazmin's Events", s: "In progress", w: "Brand + website", d: "A brand-new wedding planner, branded from scratch.", img: "/assets/campaigns/jazmins-events/featured-cover.png", h: "/campaigns/jazmins-events" },
          ]}
        />

        <ListBlock label="GOOD TO KNOW" title="Before you ask." rows={GOOD_TO_KNOW} />

        <ServiceCta current="websites" title="Ready for a site that feels like you?" sub="ONE PAGE OR A WHOLE SITE. WE'LL FIGURE OUT WHAT YOU NEED." />

        <BackHome />
      </div>
    </div>
  );
}
