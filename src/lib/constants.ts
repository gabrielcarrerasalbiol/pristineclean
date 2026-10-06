// PristineClean — Commercial Cleaning Company
// Adapted from J. Carter Sports Therapy (jcartersports)

export const SITE_NAME = "PristineClean";
export const SITE_SHORT_NAME = "PristineClean";
export const SITE_TAGLINE = "Impeccable. Every time.";
export const SITE_DESCRIPTION =
  "Premium commercial cleaning services for offices and businesses. Reliable, accountable, and immaculate. Serving London and the M25 corridor.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_INFO = {
  phone: "0800 000 0000",
  phoneHref: "+448000000000",
  email: "hello@pristineclean.co.uk",
  location: "London & M25 Corridor, UK",
  hours: "Mon–Fri 08:00–18:00",
  address: "London, United Kingdom",
};

export const COMPANY = {
  name: "PristineClean",
  tagline: "Impeccable. Every time.",
  founded: "2026",
  staff: "Dedicated in-house cleaning teams",
  coverage: "London & M25 corridor",
  bio: "PristineClean delivers premium commercial cleaning services for high-end offices and businesses. We built our reputation on reliability, accountability, and an unwavering commitment to immaculate results. Every clean is delivered by trained, vetted professionals who take pride in their work.",
};

export const SERVICES = [
  { id: "office-cleaning", title: "Office Cleaning", description: "Daily and recurring office cleaning tailored to your workspace. Desks, kitchens, washrooms, and communal areas — left spotless, every time.", icon: "office" },
  { id: "commercial-cleaning", title: "Commercial Cleaning", description: "Comprehensive cleaning for retail, hospitality, and professional spaces. We adapt to your business hours and standards.", icon: "commercial" },
  { id: "deep-cleaning", title: "Deep Cleaning", description: "Thorough top-to-bottom deep cleans that go beyond daily maintenance. Ideal for seasonal refreshes, post-event, or one-off intensive cleans.", icon: "deep" },
  { id: "carpet-upholstery", title: "Carpet & Upholstery", description: "Professional carpet and upholstery cleaning using low-moisture systems that protect fibres, deodorise, and extend the life of your furnishings.", icon: "carpet" },
  { id: "window-cleaning", title: "Window Cleaning", description: "Interior and exterior window cleaning for offices and commercial premises. Crystal-clear glass that reflects your professional image.", icon: "window" },
  { id: "washroom-services", title: "Washroom Services", description: "Complete washroom hygiene management: cleaning, sanitisation, and restocking. A spotless washroom speaks volumes about your business.", icon: "washroom" },
  { id: "consumables", title: "Consumables", description: "We supply and manage all cleaning consumables — hand soap, paper towels, toilet tissue, and sanitisation products.", icon: "consumables" },
  { id: "one-off", title: "One-Off & Specialist", description: "Ad-hoc cleaning for events, move-in/out, post-construction, and specialist requirements. Exactly what you need, when you need it.", icon: "oneoff" },
  { id: "end-of-tenancy", title: "End of Tenancy", description: "Thorough commercial end-of-tenancy cleaning to pristine condition. Works alongside property managers and letting agents.", icon: "tenancy" },
] as const;

export const SECTORS = [
  { id: "offices-corporate", title: "Corporate Offices", description: "City offices, law firms, accountants, and professional services.", icon: "office" },
  { id: "retail-luxury", title: "Luxury Retail", description: "High-end boutiques, flagship stores, and shopping centres.", icon: "retail" },
  { id: "hospitality", title: "Hospitality", description: "Boutique hotels, upscale restaurants, and private members clubs.", icon: "hospitality" },
  { id: "medical", title: "Medical & Health", description: "GP practices, dental clinics, and private healthcare facilities.", icon: "medical" },
  { id: "education", title: "Education", description: "Private schools, colleges, and training facilities.", icon: "education" },
  { id: "manufacturing", title: "Industrial", description: "Warehouses, manufacturing units, and distribution centres.", icon: "industrial" },
] as const;

export const WHY_US = [
  { title: "Same Dedicated Team", description: "You get the same cleaners every visit. They learn your space, your standards, and your people — not a different face every Monday." },
  { title: "Real Accountability", description: "Monthly KPI reports with photos. If something isn't right, we fix it immediately. No excuses, no delays." },
  { title: "Fully Vetted Staff", description: "Every team member is DBS-checked, fully trained, and employed directly by us. No sub-contractors. No exceptions." },
  { title: "White-Glove Onboarding", description: "30-day concierge setup from day one. We don't just start cleaning — we learn your building, your schedule, and your standards." },
] as const;

export const PROCESS = [
  { step: "01", title: "Free Consultation", description: "We visit your premises, understand your needs, and design a cleaning schedule that fits your operations — not ours." },
  { step: "02", title: "Dedicated Match", description: "We assign your dedicated cleaning team, selected for your sector and site requirements. Same faces, every visit." },
  { step: "03", title: "Immaculate Clean", description: "Your space is cleaned to the highest standard, on time, every time. We supply all equipment and products." },
  { step: "04", title: "Monthly Review", description: "A structured performance review every month. Real data, real photos, real accountability. You're never left wondering." },
] as const;

export const TESTIMONIALS = [
  { name: "Operations Director", role: "Mayfair Law Firm", quote: "PristineClean transformed our offices. The consistency is remarkable — same team, same high standard, every single week." },
  { name: "Managing Partner", role: "City Financial Services", quote: "Our clients comment on how immaculate the office always looks. That first impression is now a genuine competitive advantage." },
  { name: "HR Manager", role: "Tech Start-up, Shoreditch", quote: "Switching to PristineClean was the best facility decision we made. The reporting alone is worth it — we finally know what's happening." },
] as const;

export const ACCREDITATIONS = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "DBS Checked Staff",
  "Public Liability Insured",
  "Employers Liability Insured",
] as const;

export const TRUST_BADGES = [
  { label: "Fully Insured", key: "insured" },
  { label: "DBS Checked", key: "dbs" },
  { label: "ISO Accredited", key: "iso" },
  { label: "Eco Products", key: "eco" },
  { label: "Dedicated Team", key: "team" },
  { label: "24/7 Support", key: "support" },
] as const;
