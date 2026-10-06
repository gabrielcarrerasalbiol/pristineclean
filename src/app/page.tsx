import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import {
  SERVICES,
  SECTORS,
  TESTIMONIALS,
  WHY_US,
  PROCESS,
  TRUST_BADGES,
} from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  office: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m0 0v12m0-12H3" /></svg>,
  commercial: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 18H3.75L4.5 3zM9 3v18m6-18v18M9 9h6m-6 6h6" /></svg>,
  deep: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>,
  carpet: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" /></svg>,
  window: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.875A2.25 2.25 0 0 1 5.25 2.625h13.5A2.25 2.25 0 0 1 21 4.875v14.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.125v-14.25Z M9 9h6m-6 6h6m-6-3h6" /></svg>,
  washroom: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" /></svg>,
  consumables: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>,
  oneoff: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
  tenancy: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" /></svg>,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 01 Trust indicators */}
      <section className="bg-navy py-8">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.key} className="flex items-center gap-2.5 text-white">
                <svg className="h-5 w-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Services */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">What We Offer</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-base text-slate">
              From daily office cleaning to specialist deep cleans — everything your business needs, delivered to the highest standard.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} icon={icons[s.icon]} title={s.title} description={s.description} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary text-sm">View All Services</Link>
          </div>
        </div>
      </section>

      {/* 03 Sectors */}
      <section className="section-padding bg-white-soft">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Who We Serve</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Industries We Clean</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <div key={s.id} className="card cursor-default">
                <h3 className="text-base font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Standards / Why Us */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label text-emerald">Our Standards</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Why Businesses Choose Us</h2>
            <p className="mt-4 text-base text-white/60">
              We built our reputation on reliability, accountability, and immaculate results.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white/8 border border-white/10 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04b Process */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Our Process</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald font-bold text-2xl">
                  {p.step}
                </div>
                <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Testimonials */}
      <section className="section-padding bg-white-soft">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Client Feedback</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Trusted by Businesses Like Yours</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card">
                <svg className="mb-5 h-7 w-7 text-emerald/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.405-.62-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.271 0-2.405-.62-2.917-1.179z" />
                </svg>
                <p className="text-sm leading-relaxed text-slate italic">"{t.quote}"</p>
                <div className="mt-6 border-t border-mist pt-4">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-navy to-charcoal-light p-10 text-center sm:p-16">
            <p className="section-label text-emerald">Get Started</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Talk About Your Cleaning Needs
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/65">
              Book a free consultation and discover what PristineClean can do for your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary text-sm">
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
