import { Home, ShieldCheck, Users, HeartHandshake, ClipboardCheck, MapPin } from 'lucide-react';

export default function CRHWebsite() {
  const pillars = [
    { title: 'Structured Housing', text: 'Safe, stable homes with clear expectations, predictable routines, and accountability built into daily life.', icon: Home },
    { title: 'Recovery Support', text: 'A sober living environment designed to support forward motion without pretending housing alone solves everything.', icon: HeartHandshake },
    { title: 'Community Standards', text: 'Zero tolerance for destructive behavior, with resident expectations documented and enforced consistently.', icon: ShieldCheck },
    { title: 'Operational Discipline', text: 'Resident intake, house rules, property care, and partner communication handled like an actual operation.', icon: ClipboardCheck },
  ];

  const steps = [
    ['01', 'Acquire', 'Secure suitable housing through lease, lease-option, or ownership.'],
    ['02', 'Prepare', 'Configure rooms, safety items, policies, intake flow, and house expectations.'],
    ['03', 'Operate', 'Maintain structured living, house management, rent collection, and incident documentation.'],
    ['04', 'Partner', 'Coordinate with courts, treatment providers, churches, employers, and community stakeholders.'],
  ];

  const audiences = ['Property Owners', 'Recovery Partners', 'Courts & Reentry Programs', 'Employers', 'Community Supporters'];

  return (
    <div className="min-h-screen bg-cornerstone-ink text-cornerstone-cream selection:bg-cornerstone-gold/30 selection:text-white">
      <header className="sticky top-0 z-40 border-b border-cornerstone-cream/10 bg-cornerstone-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cornerstone-gold/40 bg-cornerstone-green shadow-lg shadow-black/20">
              <div className="h-6 w-6 rotate-45 border-4 border-cornerstone-gold" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-cornerstone-cream">CRH</p>
              <p className="text-xs uppercase tracking-[0.18em] text-cornerstone-cream/55">Cornerstone Recovery Holdings</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-cornerstone-cream/70 md:flex">
            <a href="#mission" className="transition hover:text-cornerstone-cream">Mission</a>
            <a href="#model" className="transition hover:text-cornerstone-cream">Model</a>
            <a href="#partners" className="transition hover:text-cornerstone-cream">Partners</a>
            <a href="#contact" className="transition hover:text-cornerstone-cream">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cornerstone-gold/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,163,90,0.18),transparent_32%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,239,230,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,239,230,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cornerstone-cream/65">
                Structured recovery housing for the CSRA
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-cornerstone-cream md:text-6xl lg:text-7xl">
                Stable Housing. <span className="text-cornerstone-sage">Accountable Recovery.</span> <span className="text-cornerstone-gold">A Better Path Forward.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-cornerstone-cream/72 md:text-xl">
                Cornerstone Recovery Holdings develops and operates structured living environments for people rebuilding their lives through sobriety, accountability, and community support.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl border border-cornerstone-gold bg-cornerstone-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cornerstone-ink transition hover:bg-cornerstone-cream">
                  Start a Conversation
                </a>
                <a href="#model" className="rounded-2xl border border-cornerstone-cream/15 bg-cornerstone-cream/[0.04] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cornerstone-cream/85 transition hover:bg-cornerstone-cream/[0.08] hover:text-white">
                  View Operating Model
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-xl rounded-[2rem] border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] p-6 shadow-2xl shadow-black/40">
                <div className="mb-6 flex items-center justify-between border-b border-cornerstone-cream/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cornerstone-cream/45">Operating Focus</p>
                    <h2 className="mt-2 text-xl font-semibold text-cornerstone-cream">Recovery Housing Infrastructure</h2>
                  </div>
                  <div className="rounded-full border border-cornerstone-gold/40 bg-cornerstone-gold/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cornerstone-gold">CSRA</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Housing', 'Stable'], ['Rules', 'Clear'], ['Residents', 'Accountable'], ['Partners', 'Aligned']
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-cornerstone-cream/10 bg-black/25 p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cornerstone-cream/45">{label}</p>
                      <p className="mt-2 text-lg font-medium text-cornerstone-cream/90">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-cornerstone-cream/10 bg-black/25 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-cornerstone-cream/45">Core Flow</p>
                  <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-xs uppercase tracking-[0.14em] text-cornerstone-cream/60">
                    <div className="rounded-xl border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] px-3 py-4">Intake</div>
                    <div className="text-cornerstone-gold">→</div>
                    <div className="rounded-xl border border-cornerstone-gold/35 bg-cornerstone-gold/10 px-3 py-4 text-cornerstone-gold">Structure</div>
                    <div className="text-cornerstone-gold">→</div>
                    <div className="rounded-xl border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] px-3 py-4">Stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="border-y border-cornerstone-cream/10 bg-cornerstone-cream/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cornerstone-gold">Mission</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-cornerstone-cream md:text-5xl">
              Build sober living homes that are safe, structured, and serious enough to actually help.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cornerstone-cream/70">
              CRH is not trying to warehouse people. The goal is a disciplined housing platform that supports recovery, protects neighborhoods, respects property owners, and gives residents a clean shot at rebuilding.
            </p>
          </div>
        </section>

        <section id="model" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cornerstone-gold">Model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cornerstone-cream md:text-5xl">A practical operating model, not a charity slogan.</h2>
            <p className="mt-6 text-lg leading-8 text-cornerstone-cream/70">Recovery housing succeeds when the property, residents, rules, and partners are managed as one system. Hope is good. Process keeps the lights on.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.75rem] border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] p-7 shadow-2xl shadow-black/20">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cornerstone-gold/30 bg-cornerstone-gold/10 text-cornerstone-gold">
                  <Icon size={23} />
                </div>
                <h3 className="text-2xl font-semibold text-cornerstone-cream">{title}</h3>
                <p className="mt-4 leading-7 text-cornerstone-cream/70">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-cornerstone-cream/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cornerstone-gold">Execution</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cornerstone-cream md:text-5xl">From first property to repeatable platform.</h2>
              <p className="mt-6 text-lg leading-8 text-cornerstone-cream/70">The first house proves the model. The operating system created around it is what allows CRH to scale without turning into chaos with rent checks.</p>
            </div>

            <div className="space-y-5">
              {steps.map(([n, title, text]) => (
                <div key={n} className="grid grid-cols-[auto_1fr] gap-5 rounded-[1.75rem] border border-cornerstone-cream/10 bg-black/25 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cornerstone-gold/30 bg-cornerstone-gold/10 text-sm font-semibold tracking-[0.16em] text-cornerstone-gold">{n}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-cornerstone-cream">{title}</h3>
                    <p className="mt-3 leading-7 text-cornerstone-cream/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cornerstone-gold">Partners</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cornerstone-cream md:text-5xl">Built for collaboration with people who need reliable housing outcomes.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-cornerstone-cream/70">CRH is developing relationships across property ownership, recovery support, employment, reentry, and local community channels.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-[1.75rem] border border-cornerstone-cream/10 bg-cornerstone-cream/[0.04] p-7 text-center shadow-2xl shadow-black/20">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cornerstone-cream/10 bg-black/25 text-cornerstone-sage">
                  <Users size={24} />
                </div>
                <p className="mt-5 text-lg font-semibold text-cornerstone-cream">{audience}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-cornerstone-cream/10 bg-cornerstone-cream/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_0.85fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cornerstone-gold">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cornerstone-cream md:text-5xl">Help build the first cornerstone.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cornerstone-cream/70">Interested in leasing a property, partnering on recovery support, or helping launch structured transitional housing in the CSRA? Start here.</p>
            </div>

            <div className="rounded-[2rem] border border-cornerstone-cream/10 bg-black/25 p-8 shadow-2xl shadow-black/30">
              <p className="text-sm uppercase tracking-[0.2em] text-cornerstone-cream/45">Start the conversation</p>
              <div className="mt-8 space-y-6 text-cornerstone-cream/85">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cornerstone-cream/45">Company</p>
                  <p className="mt-2 text-lg">Cornerstone Recovery Holdings, LLC</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cornerstone-cream/45">Focus</p>
                  <p className="mt-2 text-lg">Structured sober living · Transitional housing · Recovery housing operations</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-cornerstone-gold" size={20} />
                  <p className="text-lg">Serving the CSRA region</p>
                </div>
              </div>
              <a href="mailto:info@cornerstonerecoveryllc.com" className="mt-10 inline-flex rounded-2xl border border-cornerstone-gold bg-cornerstone-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cornerstone-ink transition hover:bg-cornerstone-cream">
                info@cornerstonerecoveryllc.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cornerstone-cream/10 bg-cornerstone-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-cornerstone-cream/45 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 Cornerstone Recovery Holdings, LLC</p>
          <p>Stable Housing. Accountable Recovery. A Better Path Forward.</p>
        </div>
      </footer>
    </div>
  );
}
