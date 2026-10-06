import type { Metadata } from "next";
import Link from "next/link";
import { WHY_US, PROCESS, ACCREDITATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Us",
  description: "Why businesses trust PristineClean — dedicated teams, real accountability, and immaculate results every time.",
};

export default function WhyUsPage() {
  return (
    <>
      <section className="relative bg-navy py-20 lg:py-28">
        <div className="section-container">
          <p className="section-label text-emerald">Why PristineClean</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">The PristineClean Difference</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">We don&apos;t just clean. We partner. Here&apos;s what sets us apart.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Our Commitments</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">What You Get With Us</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {WHY_US.map((w, i) => (
              <div key={w.title} className="card">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald text-xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{w.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white-soft">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Simple, Transparent Process</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald font-bold text-2xl">{p.step}</div>
                <h3 className="text-base font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container text-center">
          <p className="section-label">Standards</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Accreditations & Certifications</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {ACCREDITATIONS.map((a) => (
              <span key={a} className="rounded-full border border-mist bg-white px-6 py-3 text-sm font-medium text-navy shadow-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Experience the Difference?</h2>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary text-sm">Request a Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
