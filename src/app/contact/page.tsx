import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PristineClean for a free consultation on commercial cleaning services.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-navy py-20 lg:py-28">
        <div className="section-container">
          <p className="section-label text-emerald">Get In Touch</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Request a Quote</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Tell us about your cleaning needs. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <p className="section-label">Contact Information</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">Let&apos;s Talk</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-1">Phone</p>
                  <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-base font-medium text-navy hover:text-emerald transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-1">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-base font-medium text-navy hover:text-emerald transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-1">Coverage</p>
                  <p className="text-base text-navy">{CONTACT_INFO.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate mb-1">Office Hours</p>
                  <p className="text-base text-navy">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <p className="section-label">Send Us a Message</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">Tell Us About Your Needs</h2>
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy placeholder-slate/60 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="company">Company *</label>
                    <input type="text" id="company" name="company" required className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy placeholder-slate/60 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy placeholder-slate/60 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald" placeholder="jane@acme.co.uk" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy placeholder-slate/60 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald" placeholder="020 0000 0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="service">Service Required *</label>
                  <select id="service" name="service" required className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald">
                    <option value="">Select a service...</option>
                    <option value="office">Office Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="carpet">Carpet & Upholstery</option>
                    <option value="window">Window Cleaning</option>
                    <option value="washroom">Washroom Services</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="message">Your Requirements *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-sm text-navy placeholder-slate/60 transition-colors focus:border-emerald focus:outline-none focus:ring-1 focus:ring-emerald resize-none" placeholder="Tell us about your space, frequency, and any specific requirements..." />
                </div>
                <button type="submit" className="btn-primary w-full text-sm">Send Enquiry</button>
                <p className="text-xs text-slate text-center">We typically respond within 24 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
