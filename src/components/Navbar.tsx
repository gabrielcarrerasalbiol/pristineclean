"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-white/95 backdrop-blur-md">
      <div className="section-container flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden">
            <Image
              src="/images/pristineclean-logo.jpg"
              alt="PristineClean"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-navy tracking-tight leading-none">PristineClean</p>
            <p className="text-[10px] font-medium text-emerald leading-none">Impeccable. Every time.</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-navy md:hidden min-w-[44px] min-h-[44px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <div className="section-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-[48px] items-center px-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-3 text-center text-sm min-h-[48px] flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
