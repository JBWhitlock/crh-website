import React from "react";

const PHONE = "803-442-0488";
const EMAIL = "info@cornerstonerecoveryllc.com";

const ownerBenefits = [
  {
    title: "Guaranteed Corporate Lease Payments",
    text: "On-time, every time. You are paid by our LLC.",
    icon: "$",
  },
  {
    title: "Long-Term Occupancy",
    text: "12–24+ month lease terms reduce vacancy and turnover.",
    icon: "CAL",
  },
  {
    title: "Professionally Managed Homes",
    text: "Structured residential housing with clear standards and active oversight.",
    icon: "HM",
  },
  {
    title: "Zero Tolerance Policy",
    text: "No drugs, no violence, no criminal activity. Period.",
    icon: "✓",
  },
  {
    title: "Routine Maintenance & Inspections",
    text: "We coordinate upkeep and help protect your investment.",
    icon: "TOOL",
  },
  {
    title: "Property Care You Can Count On",
    text: "Homes are kept clean, maintained, and respected.",
    icon: "HOME",
  },
  {
    title: "Reduced Risk. Greater Peace of Mind.",
    text: "Fewer headaches than traditional rental arrangements.",
    icon: "UP",
  },
];

const standards = [
  "Structured accountability model",
  "Clear house rules and resident expectations",
  "Sobriety-focused living environment",
  "Community stability and independent living outcomes",
  "Clean, respectful, professionally managed homes",
];

function LogoLockup({ footer = false }) {
  return (
    <div className={`logo-lockup ${footer ? "footer-logo-lockup" : ""}`}>
      <img
        className="logo-image"
        src="/Logo_WhiteBackground.png"
        alt="Cornerstone Recovery Holdings logo"
      />
      <div>
        <div className="brand-primary">Cornerstone</div>
        <div className="brand-secondary">Recovery Holdings, LLC</div>
        <div className="brand-tagline">Building Stable Futures. Strengthening Communities.</div>
      </div>
    </div>
  );
}

function IconBadge({ children }) {
  return <div className="icon-badge">{children}</div>;
}

export default function CRHWebsite() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand-link" aria-label="Cornerstone Recovery Holdings home">
            <LogoLockup />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#owners">Property Owners</a>
            <a href="#model">Housing Model</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href="#contact">
            Partner With Us
          </a>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="grid-overlay" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Structured Recovery Housing for the CSRA</div>

            <h1>
              <span className="headline-white">Guaranteed</span>
              <span className="headline-white">Corporate Lease.</span>
              <span className="headline-gold">Stable Income.</span>
              <span className="headline-white">Professionally</span>
              <span className="headline-white">Managed Home.</span>
            </h1>

            <div className="gold-rule">
              <span />
              <IconBadge>⌂</IconBadge>
              <span />
            </div>

            <p>
              Cornerstone Recovery Holdings partners with property owners to provide
              professionally managed residential housing through secure corporate leasing
              and structured oversight.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-gold">
                Partner With Us
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-light">
                Call {PHONE}
              </a>
            </div>

            <div className="trust-strip">
              <div>
                <IconBadge>✓</IconBadge>
                <span>Long-Term Leases</span>
              </div>
              <div>
                <IconBadge>✓</IconBadge>
                <span>Professionally Managed</span>
              </div>
              <div>
                <IconBadge>✓</IconBadge>
                <span>Structured Accountability</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Corporate lease summary">
            <div className="panel-topline">
              <span>Operating Focus</span>
              <strong>CSRA</strong>
            </div>

            <h2>We Are the Tenant — Not the Residents.</h2>

            <p>
              You lease to our LLC. We manage everything inside with clear standards,
              accountability, and active oversight.
            </p>

            <div className="panel-grid">
              <div>
                <span>Lease</span>
                <strong>Corporate</strong>
              </div>
              <div>
                <span>Term</span>
                <strong>12–24+ Months</strong>
              </div>
              <div>
                <span>Oversight</span>
                <strong>Active</strong>
              </div>
              <div>
                <span>Policy</span>
                <strong>Zero Tolerance</strong>
              </div>
            </div>

            <div className="flow-card">
              <span>Core Flow</span>
              <div>
                <strong>Lease</strong>
                <b>→</b>
                <strong>Structure</strong>
                <b>→</b>
                <strong>Stability</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="owners" className="owners-section">
        <div className="section-heading">
          <span />
          <h2>Why Property Owners Partner With Us</h2>
          <span />
        </div>

        <div className="benefit-grid">
          {ownerBenefits.map((item) => (
            <article className="benefit-card" key={item.title}>
              <div className="benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section">
        <div className="image-card" aria-hidden="true">
          <div className="image-card-overlay">
            <span>4–6 Bedroom Homes</span>
            <strong>Long-Term Corporate Lease Opportunities</strong>
          </div>
        </div>

        <div className="partner-copy">
          <div className="mini-rule" />
          <h2>A Different Kind of Rental Partner</h2>
          <p>
            We are not a traditional rental arrangement. Cornerstone Recovery Holdings
            operates structured residential housing with clear rules, accountability,
            and active oversight.
          </p>

          <div className="statement-card">
            <span>Our Goal Is Simple:</span>
            <strong>
              Create stable housing while being the easiest tenant you have ever worked with.
            </strong>
          </div>
        </div>
      </section>

      <section id="model" className="model-section">
        <div className="model-copy">
          <div className="eyebrow dark">Housing Model</div>
          <h2>Structured Housing With Accountability</h2>
          <p>
            We create stable residential environments focused on sobriety, accountability,
            property care, and long-term community stability.
          </p>
        </div>

        <div className="standards-list">
          {standards.map((item) => (
            <div key={item}>
              <IconBadge>✓</IconBadge>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="property-cta">
        <div className="cta-icon">⌂</div>
        <div>
          <h2>Own a 4–6 Bedroom Property in the CSRA?</h2>
          <p>
            We are actively seeking homes for long-term corporate lease opportunities.
            Let’s discuss a partnership that protects your investment while strengthening
            our communities.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-gold">
            Discuss Your Property
          </a>
          <a href={`tel:${PHONE}`} className="btn btn-outline">
            Call {PHONE}
          </a>
        </div>
      </section>

      <section id="partners" className="partners-section">
        <div className="section-heading">
          <span />
          <h2>Trusted Community Partnerships</h2>
          <span />
        </div>

        <p>
          References available from professionals, organizations, and community partners.
          We welcome referral relationships with courts, rehabilitation providers, veteran
          services, and community organizations.
        </p>

        <div className="partner-types">
          <div>Court & Probation Referrals</div>
          <div>Rehabilitation Partners</div>
          <div>Veteran Services</div>
          <div>Community Organizations</div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-inner">
          <LogoLockup footer />

          <div className="footer-contact">
            <a href={`tel:${PHONE}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>cornerstonerecoveryllc.com</span>
          </div>

          <div className="footer-note">
            <strong>Serving the CSRA</strong>
            <span>Structured residential housing.</span>
            <span>Professional management.</span>
            <span>Positive community impact.</span>
          </div>
        </div>

        <div className="copyright">
          © 2026 Cornerstone Recovery Holdings, LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
