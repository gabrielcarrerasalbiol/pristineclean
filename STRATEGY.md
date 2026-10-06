# PristineClean — Project Strategy

## 1. Reference: Fineclean.co.uk — Structure Analysis

Fineclean (Worcester, est. 2016) es el benchmark. Su estructura web:

```
HOME
├── Hero: tagline + CTA (phone + form)
├── Accreditations strip (ISO logos)
├── Services grid (4): Labour Only | Daily Cleaning | Washroom | Consumables
├── "Are you looking for" (one-off / washroom / fit-out)
├── Sectors tabs: Venues | Offices | Manufacturing | Education | Retail | Food & Beverage
├── Why Choose Us strip
├── Mission statement
├── Team section (12 people with photos)
└── Footer: contact, sectors, accreditations, social

ABOUT
├── Employee retention pitch
├── Key stats strip: DBS | ISO | 100% employed | 24hr support
├── Mission statement
├── Vision statement
├── Team grid (12 people)
└── Footer

SERVICES
├── Hero
├── 2 categories: Commercial | Industrial
└── Footer

COMMERCIAL SERVICES
├── Hero + image
├── 4 service pillars: Labour Only | Daily Cleaning | Washroom | Consumables
├── "Are you looking for" (one-off / washroom / fit-out)
├── Team photo
└── Footer

SECTORS (sub-pages)
├── Offices
├── Venues
├── Manufacturing
├── Education
├── Retail
├── Food & Beverage
└── Agricultural

FAQs
├── 8 questions (accordion)

CONTACT
├── 2 CTAs: Commercial (Gabriel) | Industrial (Oliver)
├── Phone + email
├── Address + map
└── Enquiry form

Footer structure:
- Logo | About | Sectors | Services | Legal
- Accreditations: ISO9001 | ISO14001 | ISO45001
- Contact: phone | email | address
- Social: FB | IG | Twitter | LinkedIn
```

---

## 2. Fineclean — Pricing & Sales Model

- **No hourly rate** — day rate / productivity rate
- Minimum onsite time agreed; no upper limit (finish the job properly)
- Monthly cost calculated from day rate
- Free consultation
- 2–3 week onboarding setup
- Long-term contracts preferred
- 100% attendance record 2023
- **Client Hub** — real-time schedule visibility, additional work requests, account balance

---

## 3. Fineclean — Key Differentiators (what we will match & exceed)

| Fineclean | PristineClean Target |
|---|---|
| ISO 9001, 14001, 45001 | Same + ISO 45001 mandatory |
| DBS-checked, fully trained, insured staff | Same + enhanced vetting |
| 100% employed staff | Same |
| 24-hour support line | Same |
| Eco-friendly chemicals | Same + carbon-neutral target |
| Client Hub (online portal) | Same or better |
| Long-term contracts | Same + flexible short-term options |
| Performance reviews twice/year | Same + monthly reporting |
| 120 staff, Midlands | Target: South-East / M25 corridor initially |
| Founded 2016 | New 2026 — modern systems from day 1 |

---

## 4. PristineClean — Our Positioning

**Tagline:** *PristineClean. Impeccable. Every time.*

**Positioning:** Premium B2B contract cleaning for high-end offices and commercial spaces. Not the cheapest — the most reliable, most accountable, most immaculate.

**Target market:**
- Corporate offices (City, Canary Wharf, West End, M25 belt)
- Premium retail (luxury boutiques, flagship stores)
- High-end hospitality (upscale restaurants, boutique hotels)
- Professional services (law firms, accountants, medical practices)

**Geographic focus (Phase 1):** London & Greater London, then M25 corridor → national

**Key differentiators over Fineclean:**
- **Client reporting dashboard** — monthly PDF report with photos, KPIs, compliance
- **Same cleaner guarantee** — dedicated team, no rotation churn
- **White-glove onboarding** — 30-day concierge setup, not 2–3 weeks
- **Carbon-neutral commitment** — visible, certified offset from day 1
- **Boutique feel** — we stay small enough to care, scalable enough to deliver

---

## 5. Website Structure — Sitemap

```
pristineclean.co.uk
│
├── HOME
│   ├── Hero: tagline + "Get a Free Consultation" CTA
│   ├── Trust strip: ISO | DBS | Insured | Eco | Same Team
│   ├── Services preview (3): Office Cleaning | Commercial | Specialist
│   ├── Why Us (4 pillars): Reliability | Accountability | Standards | Care
│   ├── Sector preview: Offices | Retail | Hospitality | Professional
│   ├── How It Works (4 steps): Consult → Match → Clean → Review
│   ├── Testimonials / Case Studies
│   └── CTA: Book Free Consultation
│
├── ABOUT
│   ├── Our Story
│   ├── Our Mission & Values
│   ├── Our Team
│   └── Accreditations & Insurance
│
├── SERVICES
│   ├── /office-cleaning
│   ├── /commercial-cleaning
│   ├── /retail-cleaning
│   ├── /hospitality-cleaning
│   ├── /deep-cleaning
│   ├── /window-cleaning
│   ├── /carpet-upholstery
│   ├── /washroom-services
│   ├── /consumables
│   └── /one-off-specialist
│
├── SECTORS
│   ├── /offices-corporate
│   ├── /retail-luxury
│   ├── /hospitality
│   ├── /professional-services
│   └── /medical-health
│
├── WHY US
│   ├── Our Guarantee
│   ├── Our Process
│   ├── Client Portal Demo
│   └── Sustainability
│
├── BLOG / INSIGHTS  (SEO + authority)
│
├── FAQs
│
├── CONTACT
│   ├── Enquiry Form
│   ├── Phone + Email
│   └── Address
│
└── FOOTER
    ├── Sitemap
    ├── Legal: Privacy | Terms | Cookie
    ├── Accreditations logos
    └── Social
```

---

## 6. Tech Stack (recommended)

**Stack:** Next.js 16 + TypeScript + TailwindCSS + Prisma + PostgreSQL (Neon)

**Why Next.js over WordPress:**
- Faster, more premium feel for a high-end brand
- Server-side rendering = better SEO from day 1
- Modern, maintainable codebase
- Vercel hosting = global CDN, fast

**Alternatives if WP preferred:** WordPress + custom theme + WooCommerce for any future product sales (consumables)

**Domain:** pristineclean.co.uk (check availability)

**Hosting:** Vercel

**Email:** Hostinger + SMTP (sales@pristinecleancleaning.co.uk)

---

## 7. Phases

### Phase 1 — Now (This Document)
- [x] Folder created: `/Volumes/PortableMac/Projects/Sites/pristineclean`
- [ ] Strategy approved by Gabriel
- [ ] Brand name confirmed (PristineClean vs alternatives)
- [ ] Logo brief sent to designer / AI

### Phase 2 — Brand Identity
- [ ] Logo design (AI prompt ready → see below)
- [ ] Colour palette: premium whites, slate greys, accent (tbd — suggest deep navy or emerald)
- [ ] Typography: Montserrat or similar professional sans
- [ ] Brand guidelines document

### Phase 3 — Website (Next.js)
- [ ] Repo created (GitHub)
- [ ] Next.js scaffold with i18n
- [ ] Pages: Home, About, Services (index + detail), Sectors, Why Us, FAQs, Contact
- [ ] SEO: metadata, sitemap, structured data, Schema.org LocalBusiness
- [ ] Contact form (Netlify Forms / Formspree / custom)
- [ ] Responsive + performance (Core Web Vitals)

### Phase 4 — Operations Setup
- [ ] Client Hub portal (simple — dedicated dashboard page, login)
- [ ] Quote calculator (service type + sq ft + frequency)
- [ ] Email setup (Hostinger SMTP)

### Phase 5 — Go Live
- [ ] Domain DNS
- [ ] Google Business Profile
- [ ] Social profiles (LinkedIn, Instagram, Facebook)
- [ ] Google Maps / GBP verification
- [ ] Analytics (GA4)
- [ ] Search Console

---

## 8. Logo Brief (ChatGPT Prompt)

See separate section below.

---

## 9. Next Steps

1. **Gabriel approves / amends strategy**
2. **Logo brief sent** → design
3. **Pick tech stack** (Next.js recommended)
4. **Domain check** — register pristineclean.co.uk ASAP
5. **Start with Home + About + Contact** (MVP landing)

---

*Document v1.0 — 06 Oct 2026*
*Prepared for Gabriel Carreras Albiol*
