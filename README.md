# Customs Clearance Landing Page

A high-converting marketing landing page for a China → Panama / Central America customs clearance & freight forwarding company.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (base-ui)
- **Icons**: lucide-react
- **Forms**: react-hook-form + zod
- **Animations**: framer-motion

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `CONTACT_TO_EMAIL` | Email address to receive contact form submissions |
| `RESEND_API_KEY` | (Option 1) Resend API key for sending emails |
| `SENDGRID_API_KEY` | (Option 2) SendGrid API key for sending emails |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | (Option 3) SMTP credentials |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID |

## Email Integration

The contact form in `/api/contact/route.ts` supports three email providers. Uncomment the one you want to use:

1. **Resend** (recommended) - Already installed, just add API key
2. **SendGrid** - Run `pnpm add @sendgrid/mail`
3. **Nodemailer (any SMTP)** - Run `pnpm add nodemailer`

## Project Structure

```
customs-clearance/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with fonts & metadata
│   ├── globals.css           # Tailwind + theme variables
│   ├── track/                # Tracking page
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── terms/                # Terms & Conditions
│   ├── privacy/              # Privacy Policy
│   ├── api/
│   │   ├── contact/          # Contact form handler
│   │   └── track/[code]/     # Mock tracking API
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── ui/                   # shadcn components
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Landing page sections
│   └── shared/               # Logo, etc.
├── lib/
│   ├── utils.ts              # cn() helper
│   ├── schemas/              # Zod schemas
│   └── seo/                  # JSON-LD builders
└── content/
    └── faq.ts                # FAQ data
```

## Brand Colors

The design uses only three colors (as specified):

| Color | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Background, cards |
| Gray | `#616669` | Body text, secondary elements |
| Navy | `#041532` | Primary, CTAs, headings, footer |

## Landing Page Sections

1. **Navbar** - Sticky, transparent over hero
2. **Hero** - With tracking widget
3. **Services Grid** - 6 services in cards
4. **How It Works** - 5-step timeline
5. **Routes** - China origins & Central America destinations
6. **Why Us** - 4 differentiators
7. **Pricing** - Air/Sea LCL/Sea FCL cards
8. **FAQ** - 10 accordion items
9. **Contact Form** - Full validation with zod
10. **Footer** - 4-column informative footer

## Before Launch Checklist

- [ ] Configure email provider in `/api/contact/route.ts`
- [ ] Replace placeholder phone/address in Footer
- [ ] Add real company RUC
- [ ] Review Terms & Privacy with legal counsel
- [ ] Add real tracking API integration
- [ ] Configure domain and metadataBase
- [ ] Add OG image to `/public/og-image.png`
- [ ] Set up analytics (GA4, Vercel Analytics)

## Deployment

Deploy on Vercel:

```bash
vercel
```

Or any platform supporting Next.js 16.

## Language

All copy is in **English only**. Do not add Spanish strings.
