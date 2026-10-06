# PristineClean — Commercial Cleaning Website

## Brand (from Web Style Guide)

- **Name:** PristineClean
- **Tagline:** Impeccable. Every time.
- **Colors:**
  - Navy: `#0B172B`
  - Charcoal: `#172033`
  - Emerald: `#00A88F` (accent — use sparingly)
  - Deep Emerald: `#007D70`
  - White: `#FFFFFF`
  - Soft White: `#F7F9F8`
  - Mist: `#E8EEEC`
  - Slate: `#687486`
- **Fonts:** Inter (body/UI) — weights 400, 500, 600, 700
- **Color ratio:** 65% white/soft white, 25% navy/charcoal, 10% emerald
- **Never:** use emerald text on white for long paragraphs; avoid domestic cleaning imagery

## Tech Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 4** (custom theme with brand colors)
- **Prisma + PostgreSQL** (Neon)
- **Vercel** (deploy)
- **Assets:** `/public/images/` — logo, brand guide

## Pages
- `/` — Home (Hero → Trust → Services → Sectors → Why Us → Process → Testimonials → CTA)
- `/about` — About PristineClean
- `/services` — All services grid
- `/why-us` — Commitments, process, accreditations
- `/contact` — Contact form + details

## Design Rules
- Hero images: pristine office interiors (Unsplash), NO domestic cleaning photos
- Section labels: `text-xs font-semibold uppercase tracking-[0.2em] text-emerald`
- Buttons: `btn-primary` (emerald) / `btn-secondary` (navy outline) / `btn-ghost` (emerald text)
- Max content width: `1320px` (`max-w-content`)
- Spacing system: 8/16/24/40/64px (section padding: `py-16 sm:py-20 lg:py-24`)

## Infrastructure
- **Frontend:** Vercel (vercel.com)
- **Database:** PostgreSQL on Hetzner VPS (62.238.38.25) — NOT Neon
- **Assets:** `/public/images/` — logo, brand guide
- **Domain:** configure DNS A record → Vercel IP after deploy

## Deploy
1. `git init` → GitHub repo `pristineclean`
2. Push to GitHub
3. Connect repo to Vercel at vercel.com
4. Create PostgreSQL DB on Hetzner VPS (see `neon-to-hetzner-vps-migration` skill for setup)
5. Add env vars in Vercel: `DATABASE_URL=postgresql://user:pass@62.238.38.25:5432/pristineclean`
6. Deploy

## Hetzner VPS Setup
- SSH: `ssh root@62.238.38.25`
- PostgreSQL port: 5432
- Create DB: `CREATE DATABASE pristineclean; CREATE USER pcadmin WITH ENCRYPTED PASSWORD 'xxx'; GRANT ALL PRIVILEGES ON DATABASE pristineclean TO pcadmin;`
- Allow Vercel IPs in pg_hba.conf or use `0.0.0.0/0 md5` (testing only)
