import Link from "next/link";
import { CONTACT_INFO, SITE_NAME, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-bold text-lg text-white">PristineClean</p>
            <p className="text-xs font-medium text-emerald mt-0.5">Impeccable. Every time.</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium commercial cleaning services for offices and businesses across London and the M25 corridor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-4">Services</h3>
            <ul className="space-y-3">
              {["Office Cleaning", "Commercial Cleaning", "Deep Cleaning", "Carpet & Upholstery", "Window Cleaning", "Washroom Services"].map((s) => (
                <li key={s} className="text-sm text-white/60">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-sm text-white/60 transition-colors hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/60 transition-colors hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-sm text-white/60">{CONTACT_INFO.location}</li>
              <li className="text-sm text-white/60">{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">Privacy Policy</Link>
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
