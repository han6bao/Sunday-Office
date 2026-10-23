
/* The same top bar on every inner page, so the site feels like one place. */
export function SiteBar() {
  return (
    <header className="so-sitebar">
      <div className="so-shell so-sitebar-in">
        <a href="/" className="so-sitebar-brand" aria-label="Sunday Office, home">
          <img className="so-logo" src="/assets/brand/logo-brown-sm.png" alt="Sunday Office" width="75" height="40" />
        </a>
        <nav className="so-sitebar-links" aria-label="Site">
          <a href="/#build">Services</a>
          <a href="/#work">Work</a>
          <a href="/#about-hana">About</a>
          <a href="/#office-hours" className="so-sitebar-cta">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
