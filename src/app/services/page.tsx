import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive commercial cleaning services — office cleaning, deep cleaning, carpet care, window cleaning, and more.",
};

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28">
        <div className="section-container">
          <p className="section-label text-emerald">Our Services</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Everything Your Business Needs
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Comprehensive commercial cleaning services tailored to your schedule, your standards, and your space.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} icon={icons[s.icon]} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need a Custom Solution?</h2>
          <p className="mt-4 mx-auto max-w-md text-base text-white/65">
            We build cleaning programmes around your business — not the other way around.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary text-sm">Discuss Your Requirements</Link>
          </div>
        </div>
      </section>
    </>
  );
}
