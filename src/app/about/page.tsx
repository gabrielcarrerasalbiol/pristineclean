import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, ACCREDITATIONS, WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about PristineClean — premium commercial cleaning for offices and businesses across London and the M25 corridor.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28">
        <div className="section-container">
          <p className="section-label text-emerald">About PristineClean</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Premium Cleaning. <br />Invisible Excellence.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            We exist to make your workspace immaculate — quietly, reliably, and without you ever having to think about it twice.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Built on Reliability</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
                <p>
                  PristineClean was founded with a single purpose: to deliver contract cleaning that businesses can genuinely rely on. We believe that a clean workspace is not a luxury — it is the foundation of a professional environment.
                </p>
                <p>
                  Every cleaner on our team is employed directly by us, fully DBS-checked, trained to our exacting standards, and equipped with premium products. No sub-contractors. No exceptions.
                </p>
                <p>
                  We serve offices, professional services firms, retail spaces, hospitality venues, and healthcare environments across London and the M25 corridor — and every single one receives the same meticulous attention.
                </p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop"
                alt="Professional cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white-soft">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Our Values</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">What We Stand For</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="card text-center">
                <h3 className="text-base font-semibold text-navy">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Accreditations</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Standards You Can Trust</h2>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {ACCREDITATIONS.map((a) => (
              <span key={a} className="rounded-full border border-mist bg-white px-6 py-3 text-sm font-medium text-navy shadow-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Work With Us?</h2>
          <p className="mt-4 mx-auto max-w-md text-base text-white/65">
            Let&apos;s discuss how PristineClean can serve your business.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary text-sm">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
