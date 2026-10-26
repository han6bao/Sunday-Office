import { useRouterState } from "@tanstack/react-router";
import { SunMark } from "./brand";

/* The Sunday Office sign-off at the end of every inner page. The homepage has its own footer. */
export function BrandSignoff() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  if (path === "/" || path.startsWith("/archive") || path.startsWith("/private")) return null;
  return (
    <footer className="so-signoff" aria-label="Sunday Office">
      <a href="/" className="so-signoff-home" aria-label="Sunday Office, home">
        <SunMark size={30} color="currentColor" />
        <img src="/assets/brand/logo-cream.png" alt="sunday office" loading="lazy" />
      </a>
      <p className="so-signoff-line">Build <em>your</em> world.</p>
      <p className="so-signoff-pillars">
        <a href="/branding">Branding</a>
        <a href="/photography">Photography</a>
        <a href="/websites">Web Design</a>
        <a href="/creative-direction-content">Content Creation</a>
      </p>
      <p className="so-signoff-meta">
        <a href="mailto:hello@sundayoffice.agency">hello@sundayoffice.agency</a>
        <a href="https://www.instagram.com/sundayoffice.ag">@sundayoffice.ag</a>
        <span>Seattle, WA</span>
      </p>
    </footer>
  );
}
