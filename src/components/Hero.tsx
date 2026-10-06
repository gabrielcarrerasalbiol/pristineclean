import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background: pristine office interior */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
        }}
      />
      {/* Gradient overlay: dark navy, stronger on left */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/20" />

      <div className="section-container relative z-10 flex min-h-[92vh] items-center">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="section-label">Premium Commercial Cleaning</p>

          {/* Headline — brand guide section 07 */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pristine spaces.
            <br />
            Professional standards.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Commercial cleaning for businesses that care about every detail. Quietly delivered, consistently maintained.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-sm">
              Request a Quote
            </Link>
            <Link href="/services" className="btn-secondary text-sm border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white">
              View Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-16 border-t border-white/20 pt-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Trusted by businesses across London
            </p>
            <div className="flex flex-wrap gap-3">
              {["ISO 9001", "ISO 14001", "DBS Checked", "Fully Insured", "Eco Products", "In-house Teams"].map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
