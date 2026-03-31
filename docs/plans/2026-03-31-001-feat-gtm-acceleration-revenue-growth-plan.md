---
title: "feat: GTM Acceleration & Revenue Growth — Master Plan"
type: feat
status: active
date: 2026-03-31
deepened: 2026-03-31
---

# GTM Acceleration & Revenue Growth — Master Plan

## Overview

This is the master plan for taking Parnell Systems voice AI from "website live" to "revenue flowing." It coordinates seven workstreams that transform the current demo site into a lead-generating, client-onboarding machine. Everything is prioritised by speed-to-revenue.

**Current State (2026-03-31):**
- voice.parnellsystems.com is live with 7 demo pages, voice orb, pricing, and a working contact form (GHL webhook)
- 2 paying customers at $399/mo each, no automated payments (Stripe not wired)
- Current delivery platform: **GHL native voice agents** (not LiveKit or Vapi — those are future-state)
- No analytics, no tracking, no SEO beyond basic meta tags
- No ad campaigns running
- Manual onboarding process (hours per client)
- No nurture sequences or lead management workflows

**Target State (8 weeks):**
- Facebook Pixel + Google Analytics tracking every visitor and conversion
- SEO-optimised pages ranking for "AI receptionist [niche] Australia"
- Facebook/Instagram ads driving qualified traffic at < $40 AUD CPL
- HeyGen VSL videos on every demo page and in ad creative
- GHL workflows handling speed-to-lead (< 60 seconds) + 90-day nurture
- Stripe recurring payments live on pricing page
- Database Reactivation marketed as a standalone product + onboarding wedge
- Client onboarding form collecting everything needed for setup
- Automated outreach pipeline targeting businesses with missed-call complaints (planned, built later)

---

## Critical Blockers (Must Fix Before Ads Launch)

The SpecFlow analysis identified these issues that **block** the ad launch:

| # | Blocker | Severity | Fix |
|---|---------|----------|-----|
| B1 | **Stripe URLs are placeholders** — Pricing page CTAs go nowhere | Critical | Giles: Create Stripe Payment Links, Claude: wire in |
| B2 | **No /privacy or /terms pages** — Footer links 404. Facebook rejects ads without a privacy policy | Critical | Claude: Create basic Privacy + Terms pages |
| B3 | **No /demos index route** — "All demos" back-link on demo pages 404s | High | Claude: Add route that redirects to /#demos or renders a listing |
| B4 | **Placeholder testimonials** — "Rob", "Sarah", "Marcus" are fictional. Risk under AU Consumer Law if shown to paid traffic | High | Remove section or replace with real quotes |
| B5 | **UTM parameters lost at booking CTA** — Booking URL is hardcoded. No way to attribute which ad generated a booking | High | Claude: Append UTM params from page URL to booking link |
| B6 | **SPA OG tags are static** — Sharing any demo page on Facebook shows "Parnell.Systems — Systems Consulting" | Medium | Claude: Pre-rendering or Vercel edge middleware for OG injection |

**These must be resolved in W1 alongside tracking + SEO.**

---

## Workstream Summary & Priority Order

| # | Workstream | Priority | Revenue Impact | Effort | Owner |
|---|-----------|----------|---------------|--------|-------|
| W1 | Tracking, SEO & Blocker Fixes | P0 — Do first | Indirect (enables everything) | Low-Med | Claude + Giles |
| W2 | Website Enhancement + VSL Videos | P1 — This week | High (conversion rate) | Medium | Giles (HeyGen) + Claude (code) |
| W3 | Facebook/Instagram Ads | P1 — This week | High (traffic) | Medium | Giles (Meta) + Claude (landing pages) |
| W4 | GHL Lead Management & Nurture | P1 — Parallel | High (lead-to-close rate) | Medium | Giles (GHL) |
| W5 | Client Onboarding Form + Stripe | P2 — Week 2 | High (payment collection) | Medium | Claude (code) + Giles (Stripe/GHL) |
| W6 | Automated Cold Outreach Pipeline | P3 — Week 3+ | Very High (pipeline) | High | Claude (build) + Giles (strategy) |
| W7 | Database Reactivation Product | P1 — This week | Very High (immediate ROI) | Low-Med | Giles (GHL) + Claude (website) |

---

## W1: Tracking, SEO & Blocker Fixes

**Goal:** Every visitor is tracked, every page is indexable, every share looks professional, and all critical blockers are resolved before ads launch.

**Why first:** Without tracking, you can't measure anything. Without SEO, organic traffic is zero. Without the blocker fixes, ads will either be rejected by Facebook or leak leads. This is the foundation everything else builds on.

### W1.0 — Critical Blocker Fixes (Before Ads)

- [ ] Claude: Create `/privacy` page with basic privacy policy (required for Facebook ad approval + AU Privacy Act compliance)
- [ ] Claude: Create `/terms` page with basic terms of service
- [ ] Claude: Add `/demos` route (redirect to `/#demos` or render a demos listing page) — currently 404s
- [ ] Claude: Fix UTM parameter passthrough — read `window.location.search` and append to all booking CTA `href` values dynamically
- [ ] Claude: Remove placeholder testimonials section (Rob, Sarah, Marcus are fictional) or replace with real quotes. Risk under Australian Consumer Law if shown to paid traffic.
- [ ] Claude: Update `index.html` OG tags from "Systems Consulting" to voice product messaging

### W1.1 — Facebook Pixel Installation

- [ ] Giles: Create Meta Business Manager account at [business.facebook.com](https://business.facebook.com)
- [ ] Giles: Go to Events Manager → Connect Data Sources → Web → Facebook Pixel → Create
- [ ] Giles: Copy the Pixel ID (format: `123456789012345`)
- [ ] Claude: Add Pixel base code to `index.html` `<head>`
- [ ] Claude: Add `PageView` event firing on route change (React Router listener)
- [ ] Claude: Add custom events: `Lead` (contact form submit), `Schedule` (booking CTA click), `ViewContent` (demo page view)
- [ ] Verify: Use Meta Pixel Helper Chrome extension to confirm events fire

**Technical:** Add to `index.html`:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

Plus a React hook for route-change tracking and custom conversion events.

### W1.2 — Google Analytics 4

- [ ] Giles: Create GA4 property at [analytics.google.com](https://analytics.google.com)
- [ ] Giles: Copy Measurement ID (format: `G-XXXXXXXXXX`)
- [ ] Claude: Add gtag.js to `index.html`
- [ ] Claude: Add route-change page_view events
- [ ] Verify: Real-time report shows your own visits

### W1.3 — SEO Meta Tags

**Current problem:** `index.html` still says "Parnell.Systems — Systems Consulting". All demo pages share the same static OG tags. When someone shares a demo page on Facebook, it shows the wrong title/image.

- [ ] Claude: Update `index.html` meta tags for the voice product:
  - Title: `Parnell Systems Voice AI — Never Miss a Customer Call`
  - Description: `AI voice agents that answer your phone 24/7, book appointments, and send SMS confirmations. Plans from $299/mo.`
  - OG image: Generate or use a branded card image
- [ ] Claude: Create a lightweight `useSEO` hook (zero-dependency, ~30 lines) for per-page dynamic `<title>`, `<meta>`, OG tags, and JSON-LD — the pre-renderer captures everything into static HTML, so no runtime library like `react-helmet-async` is needed
- [ ] Claude: Add unique title and description to each page via `useSEO`:
  - VoiceHome: "AI Voice Receptionist for Australian Businesses | Parnell Systems"
  - Pricing: "Voice AI Pricing — Simple Flat-Rate Plans | Parnell Systems"
  - Each demo: "AI Receptionist for [Tradies/Gyms/Salons...] | Parnell Systems"
- [ ] Claude: Add JSON-LD structured data (FAQPage schema on Pricing, SoftwareApplication on home)

### W1.3b — Advanced SEO for Vite SPA

**Problem:** React SPAs are invisible to crawlers unless pre-rendered. Social share cards show generic content.

**Pre-rendering decision: `@prerenderer/rollup-plugin`** (formerly `prerender-spa-plugin`)
- Runs headless Chromium at build time, outputs static HTML per route. Zero architecture changes — React app stays as-is.
- ~15 pages adds only ~30-45s to build. Negligible.
- Google indexes fully rendered HTML instantly. Social share cards work correctly.
- Alternatives considered and rejected:
  - Vercel edge middleware: Only solves OG tags, not full-page pre-rendering for SEO
  - `vite-ssg`: Primarily Vue-focused, React support is second-class
  - `react-snap`: Fragile, poorly maintained
  - `prerender.io` SaaS: Overkill for 15 pages, adds cost and third-party dependency
  - Rendertron: Google deprecated dynamic rendering as a recommended practice (2024)
- Also use `@vercel/og` edge function at `/api/og` for dynamic OG image generation per page (1200x630)

**Local SEO (critical for AU SMB targeting):**
- [ ] Claude: Add `Organization` + `SoftwareApplication` JSON-LD structured data sitewide (NOT `LocalBusiness` — that's for businesses with a physical office customers visit; Parnell Systems is a SaaS)
- [ ] Claude: Add `FAQPage` schema to pricing page and each demo page (highest-impact schema — FAQ rich results take massive SERP real estate)
- [ ] Claude: Add `BreadcrumbList` schema sitewide for better SERP navigation
- [ ] Claude: Add niche-specific `Service` schema to each demo page
- [ ] Giles: Create Google Business Profile as "Software Company" (primary) + "Business Management Consultant" (secondary) with service area = Australia. This gives eligibility for the knowledge panel on branded searches.
- [ ] Giles: List on relevant AU business directories (Yellow Pages, TrueLocal, Hotfrog)
- [ ] Future: Create city-specific pages (`/ai-receptionist-sydney`, `/ai-receptionist-melbourne`, etc.) with unique substantial content per city — NOT just city-name swaps (Google penalises doorway pages)

**Content strategy for organic growth (deferred — Week 3+ after ads are running):**

- **Week 1-2 (now):** Enhance the 7 existing demo pages with 200-300 words of niche-specific SEO content each. Add `FAQPage` schema to pricing page (5-8 FAQs). Add cross-links between demo pages ("Also available for: Gyms | Salons | Clinics") and from every demo page to pricing.
- **Week 3-4:** Comparison pages: "AI Receptionist vs Virtual Receptionist" and "AI Receptionist vs Answering Service" (high-intent shoppers).
- **Week 5+:** Blog/content hub if organic traffic data from Search Console justifies it. City-specific pages (`/ai-receptionist-sydney` etc.) only if search volume warrants them — do not build speculatively.

**Technical SEO checklist:**
- [ ] Canonical URLs on all pages (self-referencing, full absolute URL, no trailing slashes)
- [ ] Open Graph + Twitter Card meta tags per page (via `useSEO` hook, captured by pre-renderer into static HTML)
- [ ] Image alt text on all images (descriptive, not "image1")
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1 (test with Lighthouse + Vercel Analytics)
- [ ] Mobile-first — verify with Google Mobile-Friendly Test
- [ ] Hero images: `loading="eager"` + `fetchpriority="high"`; below-fold images: `loading="lazy"`
- [ ] All images in WebP format with `<picture>` fallback
- [ ] `robots.txt` with sitemap reference + noindex on any dashboard/app pages
- [ ] Auto-generate `sitemap.xml` at build time from route list

### W1.4 — Sitemap & Indexing

- [ ] Claude: Create `public/sitemap.xml` listing all pages (home, pricing, 7 demo pages)
- [ ] Claude: Update `public/robots.txt` to reference sitemap
- [ ] Giles: Set up Google Search Console, verify domain, submit sitemap
- [ ] Giles: Request indexing for key pages via URL Inspection tool

### W1.5 — Monitoring & Dashboards

**You need a single place to check "how is the business doing?" daily.** Here's what to set up and where to look:

| Dashboard | What It Shows | Check Frequency |
|-----------|--------------|-----------------|
| **Google Analytics 4** (analytics.google.com) | Website traffic, page views, session duration, traffic sources, device breakdown | Daily |
| **Meta Ads Manager** (business.facebook.com) | Ad spend, CPL, click-through rate, conversions, audience performance | Daily when ads running |
| **Meta Pixel Events** (Events Manager) | Custom events firing (Lead, Schedule, ViewContent), event match quality | Weekly verification |
| **Google Search Console** (search.google.com/search-console) | Organic search impressions, clicks, average position, indexing status, errors | Weekly |
| **GHL Dashboard** (app.gohighlevel.com) | Pipeline status, leads in each stage, appointments booked, SMS/email delivery rates, workflow performance | Daily |
| **Stripe Dashboard** (dashboard.stripe.com) | MRR, payment success rate, churn, upcoming renewals | Weekly |

**Daily routine (5 minutes):**
1. Check GHL for new leads and pipeline movement
2. Check GA4 real-time and yesterday's traffic
3. If ads are running, check Meta Ads Manager for spend and CPL

**Weekly routine (15 minutes):**
1. GA4: Week-over-week traffic trends, top-performing pages
2. Search Console: New keywords ranking, any indexing issues
3. Meta Ads: Campaign-level performance, pause underperformers
4. Stripe: Revenue tracking, any failed payments

### W1.6 — OG Image for Social Sharing

- [ ] Claude: Create a simple branded OG image (1200x630) or use a placeholder
- [ ] Long-term: Generate per-niche OG images (e.g., "AI Receptionist for Tradies" card)

**Acceptance Criteria:**
- [ ] Facebook Pixel fires PageView on every page load
- [ ] Custom events fire on form submit and CTA clicks
- [ ] GA4 shows real-time data
- [ ] Google Search Console shows pages indexed
- [ ] Sharing a demo page link on Facebook shows correct title/image/description

---

## W2: Website Enhancement + VSL Videos

**Goal:** Replace text-heavy pages with compelling video content. Each demo page gets a 60-90 second VSL featuring Giles's HeyGen digital twin.

### W2.1 — HeyGen Setup & Avatar Creation

- [ ] Giles: Sign up for HeyGen Business plan (~$89 USD/mo = ~$135 AUD)
- [ ] Giles: Create "Instant Avatar" (digital twin) — requires a 2-5 minute video of yourself speaking to camera
- [ ] Giles: Optionally clone your voice for maximum authenticity

### W2.2 — VSL Script Templates

Create one script per niche following this proven structure (60-90 seconds):

**Script Framework:**
1. **Hook (0-10s):** Pain point. *"If you're a [tradie/salon owner/gym owner] and you're losing jobs because you can't answer every call..."*
2. **Agitate (10-25s):** Cost of inaction. *"The average missed call costs a local business $200-500. Most businesses miss 30-40% of calls."*
3. **Solution (25-45s):** Introduce the product. *"Our AI receptionist answers every call 24/7, books appointments, and sounds just like a real person."*
4. **Proof (45-65s):** Demo snippet or testimonial. *Play a 10-second clip of the AI in action or show the voice orb.*
5. **CTA (65-80s):** Single next step. *"Click below to try a live demo right now, or book a free consultation."*

**Scripts to produce (7 total):**
- [ ] Solar: Focus on lead qualification and property assessment booking
- [ ] Gyms: Focus on trial class booking and membership enquiries
- [ ] Tradies: Focus on after-hours calls and job capture
- [ ] Clinics: Focus on patient scheduling and after-hours routing
- [ ] Salons: Focus on appointment booking and cancellation handling
- [ ] Automotive: Focus on repair scheduling and status updates
- [ ] Pools: Focus on cleaning schedules and emergency callouts

**Plus 1 general VSL for the homepage** — broader pitch, not niche-specific.

### W2.3 — Video Production in HeyGen

- [ ] Giles: Record each VSL using the digital twin + scripted text
- [ ] Giles: Add captions/subtitles (HeyGen supports this natively)
- [ ] Giles: Export as MP4 (1080p, 9:16 for social + 16:9 for website)
- [ ] Giles: Upload 16:9 versions to YouTube (unlisted) or host on Cloudflare Stream / direct MP4

### W2.4 — Pain Points & Revenue Impact on Demo Pages

**Each demo page needs hard numbers that make business owners feel the cost of inaction.** Add a "The Cost of Missed Calls" section to each demo page with niche-specific stats:

| Niche | Avg Missed Call Value | Monthly Missed Calls (Industry Avg) | Monthly Revenue Lost |
|-------|----------------------|-------------------------------------|---------------------|
| **Tradies** | $350-800/job | 15-25 calls | $5,000-20,000 |
| **Gyms** | $600-1,200/year (membership) | 10-20 enquiries | $6,000-24,000 |
| **Salons** | $80-150/appointment | 20-35 calls | $1,600-5,250 |
| **Clinics** | $100-300/visit | 15-30 calls | $1,500-9,000 |
| **Automotive** | $250-1,500/repair | 10-20 calls | $2,500-30,000 |
| **Pools** | $150-400/service | 10-15 calls | $1,500-6,000 |
| **Solar** | $5,000-15,000/install | 5-15 leads | $25,000-225,000 |

**Implementation:**
- [ ] Claude: Add niche-specific pain point stats to `niches.ts` config
- [ ] Claude: Add "The Cost of Missed Calls" card to `DemoPage.tsx` — positioned between hero and voice orb
- [ ] Claude: Use the niche's accent colour gradient for visual impact
- [ ] Include a calculation: "At $[price]/mo, you only need to save [X] missed calls to see ROI" (varies by niche)

### W2.5 — Embed Videos on Website

- [ ] Claude: Extend `niches.ts` config to add optional `videoUrl` field
- [ ] Claude: Add video player section to `DemoPage.tsx` — above the voice orb, prominent placement
- [ ] Claude: Add hero VSL to `VoiceHome.tsx` — autoplay muted with play button overlay
- [ ] Claude: Ensure videos are lazy-loaded (don't tank page speed)

### W2.6 — Ad Creative Versions

- [ ] Giles: Produce 9:16 (vertical) versions of top 3 niche VSLs for Facebook/Instagram Stories & Reels
- [ ] Giles: Produce 1:1 (square) versions for Facebook Feed
- [ ] These will be used in W3 (ad campaigns)

**Acceptance Criteria:**
- [ ] Each demo page has a prominent VSL video above the voice orb
- [ ] Homepage has a general VSL in the hero section
- [ ] Videos autoplay muted with visible play button
- [ ] Ad-format versions ready for 3+ niches

---

## W3: Facebook/Instagram Ads

**Goal:** Drive qualified traffic to demo pages at < $40 AUD CPL.

### W3.1 — Meta Business Manager & Ad Account Setup

- [ ] Giles: Ensure Meta Business Manager is created (from W1.1)
- [ ] Giles: Create an Ad Account inside Business Manager
- [ ] Giles: Add payment method (credit card)
- [ ] Giles: Verify your business (Meta may require this for some ad types)

**Re: GHL Ads Manager** — Use Meta Ads Manager directly, not GHL's wrapper. GHL's value is post-click (CRM, nurture), not ad management. Meta native gives full access to all targeting, custom audiences, and Pixel event optimisation.

### W3.2 — Campaign Structure

**Campaign 1: Tradies (highest-intent niche, phone number available)**
- Objective: Leads (optimise for Lead event via Pixel)
- Ad Set: Location = Sydney/Melbourne/Brisbane (25km radius), Age 25-60, Interests = "Small business owners" + "Plumbing" + "Electrical" + "Building"
- Ad: 30-second HeyGen VSL (vertical) → landing page: voice.parnellsystems.com/demos/tradies
- Budget: $15-20/day

**Campaign 2: Gyms & Fitness**
- Same structure, interests = "Gym owner" + "Personal trainer" + "Fitness studio"
- Landing page: /demos/gyms
- Budget: $10-15/day

**Campaign 3: Salons & Beauty**
- Interests = "Hair salon" + "Beauty salon" + "Spa owner"
- Landing page: /demos/salons
- Budget: $10-15/day

**Retargeting Campaign (starts after 7 days of traffic):**
- Custom Audience: Website visitors (all pages) — last 30 days
- Exclude: People who submitted the contact form
- Ad: Testimonial video or social proof carousel
- Budget: $5-10/day

### W3.3 — Landing Page Optimisation

- [ ] Claude: Ensure demo pages load fast (< 2 seconds) — lazy load video + voice orb
- [ ] Claude: Add UTM parameter tracking so GA4/Pixel can attribute leads to specific campaigns
- [ ] Claude: Ensure mobile layout is pristine (75-85% of FB traffic is mobile)

### W3.4 — Budget & Timeline

| Phase | Daily Spend | Duration | Total |
|-------|-----------|----------|-------|
| Testing (3 campaigns) | $35-50/day | 2 weeks | $500-700 |
| Scale winners | $50-100/day | Ongoing | $1,500-3,000/mo |
| Retargeting | $5-10/day | Ongoing | $150-300/mo |

**Expected results (conservative):**
- $40 CPL × $50/day = ~1-2 leads/day
- 10-15 leads/week after optimisation
- If 20% book a call and 30% close = 1-2 new clients/month from ads alone

**Acceptance Criteria:**
- [ ] 3 campaigns live and spending
- [ ] Pixel tracking conversions correctly
- [ ] CPL below $50 AUD within 2 weeks
- [ ] Retargeting campaign active by week 3

---

## W4: GHL Lead Management & Nurture Workflows

**Goal:** Every lead gets a response within 60 seconds. No lead falls through the cracks. Long nurture sequence keeps you top of mind for 90 days.

### W4.1 — Pipeline Setup

Create a pipeline in GHL with these stages:
1. **New Lead** — auto-assigned on form fill / ad lead
2. **Contacted** — auto-moved after first SMS/email sent
3. **Engaged** — auto-moved when lead replies
4. **Demo Booked** — auto-moved when calendar event created
5. **Demo Completed** — manual or auto via calendar
6. **Proposal Sent** — manual
7. **Won** — manual (trigger onboarding workflow)
8. **Lost** — manual (with lost reason tag)

### W4.2 — Speed-to-Lead Workflow (< 60 seconds)

**Trigger:** New contact created (from contact form, Facebook Lead Ad, or manual)

**Immediate (0-60 seconds):**
- SMS: "Hey [First Name], thanks for your interest in Parnell Systems Voice AI! I'm Giles — when's a good time for a quick 10-min chat? Here's my calendar: [booking link]"
- Email: Welcome email with value prop + demo video + booking link
- Internal notification: SMS to Giles with lead details

**5 minutes (no reply):**
- SMS: "Quick question — are you currently missing calls from potential customers? Our AI answers every call 24/7. Happy to show you how it works."

**1 hour (no reply):**
- Email: Case study or testimonial from similar business type

### W4.3 — Nurture Sequence (90-day)

**Phase 1: Hot (Days 0-3)** — Multi-channel, aggressive
- Day 0: Immediate (above)
- Day 1: SMS with social proof
- Day 2: Email with niche-specific demo video (HeyGen VSL)
- Day 3: SMS — "Still interested? No pressure — happy to answer any questions."

**Phase 2: Warm (Days 4-14)** — Value-focused
- Day 5: Email — "5 reasons [tradies/salons] lose $50k/year from missed calls"
- Day 7: SMS — soft check-in
- Day 10: Email — different angle/use case
- Day 14: SMS — "Closing the loop — let me know if you'd like to revisit"

**Phase 3: Long (Days 15-90)** — Stay top of mind
- Fortnightly email with value content, tips, case studies
- Monthly SMS check-in
- **Re-engagement trigger:** If they open an email or click a link, auto-move back to Phase 1

### W4.4 — GHL AI Workflow Builder (Explore)

- [ ] Giles: Explore GHL Conversation AI for handling initial SMS exchanges
- [ ] Configure: AI qualifies leads by asking budget, timeline, business type
- [ ] Route qualified leads to calendar for human demo call
- [ ] Test with a few leads before making it the default

### W4.5 — Notifications

- [ ] SMS notification to Giles on every new lead
- [ ] SMS notification on every booked appointment
- [ ] Daily summary email: leads received, demos booked, pipeline status

**Acceptance Criteria:**
- [ ] Pipeline created with 8 stages
- [ ] Speed-to-lead workflow responds within 60 seconds
- [ ] 90-day nurture sequence active with 10+ touchpoints
- [ ] Giles receives SMS on every new lead and booking
- [ ] At least one workflow uses GHL AI for lead qualification (experimental)

---

## W5: Client Onboarding Form + Stripe Payments

**Goal:** When a client says "yes," they can pay and provide all setup information without you touching anything.

### W5.1 — Pricing Strategy & Stripe Recurring Payments

**Pricing revision (from market research + Giles's existing customer validation):**

Your current 2 customers are paying $399/mo. The AU market research supports premium positioning — you're replacing a $3,000-5,000/mo human receptionist with AI. The value gap is massive.

**Confirmed pricing tiers:**

| Tier | Monthly | Positioning | Target |
|------|---------|------------|--------|
| **Starter** | $399/mo | Solo operators, 1 number, up to 100 calls | Price-sensitive SMBs wanting to test |
| **Business** (Most Popular) | $599/mo | Growing businesses, 2 numbers, unlimited calls, full features | Core target — tradies, salons, gyms |
| **Professional** | $799/mo | Multi-location, 5 numbers, custom voice, dedicated AM | Larger operations, clinics, automotive chains |

**Setup fee:** $2,000 one-time. Covers GHL sub-account setup, voice agent build, phone number provisioning, workflow configuration, testing & QA, onboarding call. This fee also qualifies leads — anyone willing to pay $2,000 upfront is serious.

**Annual discount:** 1 month free (11× monthly). In Stripe, this is a single annual Price object per tier, NOT coupons or subscription schedules.

**Annual setup fee discounts** (push customers toward higher tiers + annual commitment):
- Starter Annual: full $2,000 setup fee applies
- Business Annual: 50% off setup ($1,000)
- Professional Annual: setup fee fully waived

| Tier | Monthly | Annual (11×) | Annual equiv/mo | Setup (monthly) | Setup (annual) |
|------|---------|-------------|-----------------|-----------------|----------------|
| Starter | $399/mo | $4,389/yr | $366/mo | $2,000 | $2,000 |
| Business | $599/mo | $6,589/yr | $549/mo | $2,000 | $1,000 |
| Professional | $799/mo | $8,789/yr | $732/mo | $2,000 | $0 |

**Year 1 totals (subscription + setup):**

| Tier | Monthly billing Y1 | Annual billing Y1 | Customer saves |
|------|--------------------|--------------------|----------------|
| Starter | $6,788 | $6,389 | $399 (6%) |
| Business | $9,188 | $7,589 | $1,599 (17%) |
| Professional | $11,588 | $8,789 | $2,799 (24%) |

**Setup fee anchoring strategy:** Show the $2,000 setup fee prominently on monthly view. On annual toggle, show tiered discounts: "50% off setup" for Business, "Setup waived" for Professional. The savings headline for each tier should combine both subscription and setup savings.

**90-day pro-rata money-back guarantee:** All new customers get a 90-day pro-rata refund on their subscription if they cancel. The setup fee ($2,000) is non-refundable — it covers real delivery work. This reduces buyer friction for a high-ticket SaaS without exposing setup costs.

**ROI justification by tier:**
- Starter ($399/mo): If a tradie saves just 1 missed job/month at $350, that's instant ROI
- Business ($599/mo): 2 saved jobs/month = $700+ returned on $599 spend = 1.2x ROI minimum
- Professional ($799/mo): Multi-location businesses losing $10k+/mo to missed calls across sites

### Existing Customer Migration (2 customers at $399/mo)

**Strategy: 90-day loyalty bridge, not grandfathering.**

Permanent grandfathering creates operational complexity for 2 customers and leaves $200/mo combined on the table. But a surprise price increase risks losing 50% of revenue (1 of 2 customers).

**Plan:**
1. **Phone call to each customer** (not email). Use this framework:
   - Lead with what you've built for them since they started
   - Explain the new tier structure — their service maps to Business ($599/mo)
   - Acknowledge the change: "You've been with us from early days"
   - Present loyalty option: stay at $399 for 90 days then move to $599, OR lock in annual at ~$549/mo
2. **Follow up in writing** with a brief email confirming the conversation and timeline
3. **Annual loyalty offer math:** $6,589/yr = $549/mo effective. That's $150/mo more than current $399, but they get unlimited calls, after-hours handling, and priority support. Frame as: "You're getting the full Business package — unlimited calls, custom greeting, call transcripts — at the loyalty annual rate."

**Do not:** Send a templated email. With 2 customers, a personal call from the founder is the highest-quality communication possible.

**Tasks:**
- [x] Giles: Register for GST (completed 2026-04-01)
- [x] Giles: Create Stripe products and prices via CLI (completed 2026-04-01, test mode)
- [x] Giles: Generate Payment Links (6 links: 3 monthly + 3 annual, completed 2026-04-01, test mode)
- [ ] Giles: Test payment links with test card (4242 4242 4242 4242)
- [ ] Giles: Replicate products + payment links in Stripe live mode when ready
- [ ] Giles: Call both existing customers using the framework above
- [ ] Claude: Update `Pricing.tsx` — new tiers ($399/$599/$799), monthly/annual toggle, $2,000 setup fee with tiered discounts on annual, savings callout, 90-day guarantee badge
- [ ] Claude: Replace placeholder URLs with real Stripe Payment Link URLs
- [ ] Giles: Configure Stripe webhook → GHL to update contact status on successful payment

### W5.2 — Client Onboarding Form

**Multi-step form to collect everything needed for AI agent setup.**

Build in GHL Forms (native, integrates directly with CRM):

**Step 1 — Business Basics (3 fields):**
- Business name
- Industry (dropdown: Tradie, Gym, Salon, Clinic, Automotive, Pool, Solar, Other)
- Website URL

**Step 2 — Operations (5 fields):**
- Business hours (Mon-Fri open/close, Sat, Sun)
- Services offered (multi-select, pre-populated per industry)
- Common customer questions (text area with examples pre-filled)
- Booking method (Calendar link / Transfer to mobile / Take a message)
- After-hours behaviour (Voicemail / Book for next day / Emergency transfer)

**Step 3 — Personalisation (4 fields):**
- Preferred greeting (pre-filled template: "Thanks for calling [Business], how can I help?")
- Staff names and roles (for call routing, optional)
- Pricing info (optional — helps AI answer "how much?")
- Special instructions (free text)

**Design principles:**
- Pre-fill from data already captured during lead stage (name, email, phone, business)
- Use conditional logic (Tradie fields vs Salon fields)
- Provide a "do it for me" option: "Prefer a call? Book 15 mins and we'll fill this out together."
- Target completion: 5-7 minutes

### W5.3 — Post-Form Workflow

- [ ] Form submitted → GHL workflow triggers
- [ ] Auto-move opportunity to "Onboarding" pipeline stage
- [ ] Send confirmation email: "Thanks! We're setting up your AI receptionist now."
- [ ] SMS to Giles with all submitted details
- [ ] Auto-create onboarding task with 48-hour deadline

### W5.4 — Offshore Readiness

**Everything documented as runbooks, not just strategy.**

- [ ] Each niche gets a setup checklist document (Tradie Setup Runbook, Gym Setup Runbook, etc.)
- [ ] Runbooks include: GHL sub-account steps, voice agent prompt template, SMS workflow setup, calendar integration, testing checklist
- [ ] Slack integration: Create a #client-onboarding channel. Form submissions post to Slack with all details.
- [ ] GHL → Slack webhook for new onboarding tasks

**Relevant prior work:** The AWE2M8 Client Onboarding Roadmap (see `parnellsystems-platform/docs/plans/Strategy/2026-03-09-saas-strategy-with-open-claw/2. awe2m8-client-onboarding-roadmap.docx (Stop Gap).pdf`) contains Phase 1 automation specs that carry forward:
- Intake form field definitions (OB1)
- GHL sub-account provisioning via API (OB2)
- Workflow template library per niche (OB3)
- Confirmation email triggers (OB8)

**What's changed:** Brand is now Parnell Systems (not AWE2M8), voice platform is **GHL native voice agents** (not LiveKit or Vapi — those are future-state only), and Stripe handles payments (not custom billing). The offshore consultants are GHL specialists. The intake form structure and GHL provisioning logic remain valid.

**Acceptance Criteria:**
- [ ] Stripe Payment Links live on pricing page (real URLs)
- [ ] Client onboarding form built in GHL with 3 steps
- [ ] Form submission triggers GHL workflow + Slack notification
- [ ] At least 1 niche setup runbook documented
- [ ] New client can pay → fill form → Giles receives everything needed to set them up

---

## W6: Automated Cold Outreach Pipeline (Future — Deep Plan Required)

**Goal:** Automatically find businesses with missed-call problems, personalise outreach, and drive them to demo pages.

**This workstream is marked for a separate, detailed plan.** What follows is the scope and architecture to be expanded later.

### W6.1 — The Pipeline (High-Level)

```
Google Maps Scrape → Review Analysis → Lead Scoring →
Personalised Email/SMS → Nurture Sequence → Demo Booking
```

### W6.2 — Data Collection

- **Tool:** Outscraper or Apify Google Maps Scraper
- **Data:** Business name, phone, email, website, Google rating, review count, individual review text, category, address
- **Target niches:** Tradies, gyms, salons, clinics, automotive, pools in Sydney/Melbourne/Brisbane
- **Volume:** 500-2,000 businesses per scrape per city

### W6.3 — Review Keyword Scanning

Scan reviews for pain-signal keywords:
- "didn't answer" / "no answer" / "couldn't reach"
- "voicemail" / "left a message"
- "on hold" / "waiting"
- "hard to book" / "couldn't book"
- "after hours" / "closed"

Score: More negative phone-related reviews = higher priority lead.

### W6.4 — Personalised Outreach (Multi-Channel)

**Channel order (see W6.5 for full compliance details):** Cold email → Cold calling → SMS only after consent.

**Email (primary):** Use Claude API to generate personalised messages:
> "Hey [Business Name], I noticed a couple of your Google reviews mention customers having trouble reaching you by phone. We built an AI receptionist that answers 24/7 and books appointments automatically — [similar business in area] started using it last month. Worth a quick chat?"

**Cold calling (second channel — also a live product demo):** Calling a business to sell voice AI demonstrates the category. DNCR largely doesn't apply to dedicated business numbers.

**SMS + Voice Note (ONLY after consent — see W6.5):**
After a cold call or email reply, ask: "Can I send you a quick demo via text?" Then:
- MMS with 15-30 second voice note (HeyGen digital twin or direct recording) + demo page link
- Follow-up sequence: Day 2 if opened, Day 4 different angle, Day 7 final with booking link
- Produce voice notes at scale: HeyGen batch with niche/business name variables, or 7 generic niche-specific recordings
- GHL can send MMS with audio attachments

**Key advantage:** A voice note demonstrates the product itself — "hear how good AI voice sounds? That's what your customers hear when they call."

### W6.5 — Compliance (Australian Law) — Deepened

**There is NO blanket B2B exemption from the Spam Act for SMS.** The Spam Act applies to all commercial electronic messages including SMS/MMS, regardless of whether the recipient is a business.

**Tiered outreach approach (ordered by legal risk, lowest first):**

1. **Cold email (lowest risk — primary channel):**
   - Target conspicuously published business email addresses (website, directories)
   - Conspicuous publication consent is legally defensible for email under Schedule 2 of the Spam Act — provided your message is relevant to the recipient's business role and the address isn't accompanied by a "no unsolicited messages" statement
   - Must include: business identity, contact details, working unsubscribe mechanism
   - Tool: Instantly.co or Smartlead for cold email with warmup and deliverability management

2. **Cold calling (medium risk — best channel for selling voice AI):**
   - **DNCR largely doesn't apply to dedicated business numbers** — business phone numbers cannot be registered on the DNCR
   - **BUT:** If the owner uses a personal mobile for business (very common with SMB tradies), that number CAN be on the DNCR (~40% of AU numbers are registered). You must wash lists against DNCR if there's any chance numbers are personal.
   - Calling hours: 9am-8pm weekdays, 9am-5pm Saturdays, never Sundays/public holidays (recipient's local timezone)
   - Must identify yourself, state purpose, provide contact number, offer opt-out
   - Maintain internal do-not-call list (honour permanently)
   - **Strategic advantage:** Cold calling to sell a voice AI product is a live product demo — the call itself demonstrates the category

3. **SMS/MMS (highest risk — only after consent):**
   - **Never use SMS as a first-touch cold channel.** Conspicuous publication consent is far weaker for SMS than email — a phone number on a website is there for calls, not marketing SMS.
   - Use SMS only after initial contact via email/phone: "Can I send you a quick demo link via text?"
   - Once consent obtained: include identification + STOP mechanism in every message
   - **SMS Sender ID Register (NEW — effective 1 July 2026):** If using alphanumeric sender IDs (e.g., "ParnellSys" instead of a phone number), you must register with ACMA through your SMS provider. Unregistered IDs get shunted to "Unverified" thread on recipient's phone.

**Penalties (current — Commonwealth penalty unit = $330):**

| Breach | Individual (first offence) | Individual (repeat) |
|--------|---------------------------|---------------------|
| Per contravention | $16,500 | $82,500 |
| Daily cap | $165,000 | $825,000 |

Real enforcement: V Marketing Australia received $1.5M in penalties + $60K personal fine on the sole director for 1M+ calls to DNCR-listed numbers.

**Compliance checklist for W6:**
- [ ] Register SMS Sender ID before 1 July 2026 (if using alphanumeric IDs)
- [ ] Set up DNCR account at donotcall.gov.au for list washing
- [ ] Build internal do-not-call/do-not-message list
- [ ] Email unsubscribe mechanism tested and working
- [ ] All SMS templates include business identity + STOP mechanism
- [ ] Calling hours enforced in automation (GHL workflow time restrictions)
- [ ] Opt-out log with timestamps maintained
- [ ] Start cold email at 20-30/day, scale based on deliverability metrics

### W6.6 — Architecture Decision

This will need its own `/ce:plan` covering:
- Scraping infrastructure (cron job vs on-demand)
- Data storage (Supabase table for scraped businesses + scores)
- Claude API integration for message personalisation
- GHL import automation
- Compliance checks (DNCR API, unsubscribe handling)
- Cost analysis (API calls, email sending, scraping)

**Estimated effort:** 2-3 weeks of build time
**Estimated monthly cost:** $50-200 AUD (scraping + email sending)

---

## W7: Database Reactivation Product

**Goal:** Market database reactivation as a standalone product and onboarding wedge. This is the fastest path to demonstrating ROI — clients already have the leads, you just wake them up.

### W7.1 — Product Definition

**What it is:** A campaign where voice AI + SMS is deployed against a client's existing dormant database (old leads, past customers, lapsed enquiries) to re-engage them around a specific product or offer.

**Why it matters:**
- **Immediate ROI** — no ad spend needed, the leads already exist. You can show results on day one.
- **Perfect onboarding wedge** — "We'll reactivate your dead leads first, then keep answering your new calls." Lowers the barrier to entry.
- **Fast case studies** — "We reactivated 200 dormant leads and booked 15 appointments in the first week" is a compelling proof point.
- **Low delivery effort** — it's a GHL campaign you run against their exported contact list.

### W7.2 — Pricing & Packaging

| Package | Price | What's Included |
|---------|-------|----------------|
| **Starter Reactivation** | $500 one-time | Up to 500 contacts. Campaign setup, 2-week run, results report. |
| **Standard Reactivation** | $1,000 one-time | Up to 1,000 contacts. Campaign setup, 2-week run, results report. |
| **Premium Reactivation** | $1,500 one-time | Up to 2,000 contacts. Campaign setup, 3-week run, results report + follow-up strategy. |
| **Reactivation + Voice AI Bundle** | Free reactivation (up to 1,000 contacts) with any monthly plan | "Sign up for Voice AI and we'll reactivate your database as part of onboarding." |

### W7.3 — Compliance & Data Handling (Critical)

**This is the highest-risk area of the reactivation product.** Three overlapping AU laws apply: Privacy Act 1988, Spam Act 2003, and Do Not Call Register Act 2006.

**Key legal realities:**
- The client sharing a CSV with Parnell Systems is a **"disclosure" under APP 6** — this requires the client's privacy policy to cover sharing with third-party service providers
- Dormant customers who haven't transacted in years likely do NOT have valid inferred consent for SMS marketing (ACMA guidance: consent degrades over time)
- ~40% of AU phone numbers are on the DNCR. DNCR exemptions for previous purchases expire after **18 months**; enquiries after **3 months**
- Parnell Systems should treat itself as covered by the Privacy Act (the "trading in personal information" exception to the small business exemption likely applies — you receive payment in exchange for handling personal data)
- Spam Act penalties: up to $2.22M/day. DNCR violations: up to $555K per violation for sole traders

**Two-stage reactivation model (required for compliance):**

1. **Stage 1 — Permission pass (lower risk):** Client sends a single SMS from their own number: *"Hi [Name], it's [Business]. We'd love to have you back. Reply YES to hear about our latest offers, or STOP to opt out."* This relies on the existing (stale) relationship.
2. **Stage 2 — Full campaign (opt-ins only):** Only contacts who reply YES enter the AI voice call + ongoing SMS sequence. This gives express, documented consent.

**Before every campaign:**
- [ ] DNCR wash — check every phone number against the Do Not Call Register (set up account at donotcall.gov.au). Re-check every 30 days.
- [ ] Opt-out scrub — remove any numbers the client flags as previously opted out
- [ ] Calling hours configured: 9am-8pm weekdays, 9am-5pm Saturdays, no Sundays/public holidays (recipient's local timezone)

**Contractual requirements (service agreement with each client must include):**
- Client warrants they collected the data lawfully and their privacy policy permits disclosure to service providers
- Parnell Systems will only use data for the agreed campaign purpose
- Data retention period + deletion after campaign (e.g., 30 days post-completion)
- Breach notification process
- Mutual indemnification

**Recommended next step:** Have a privacy/telemarketing lawyer review a template service agreement (one-time cost, reusable for all clients). This is not optional — it protects both parties.

### W7.4 — GHL Campaign Workflow

1. Client exports their dormant contact list (CSV) or gives GHL access
2. **DNCR wash + opt-out scrub** before import
3. Import contacts into a dedicated "Reactivation" pipeline in GHL
4. **Stage 1 — Permission pass:**
   - SMS from client's business name: "Hi [Name], it's [Business]. Reply YES to hear about [offer], STOP to opt out"
   - Wait 48 hours for responses
   - Remove all STOP replies and non-responders from the active campaign
5. **Stage 2 — Full campaign (YES responders only):**
   - **Day 1:** SMS with offer details + booking link
   - **Day 1 + 2hrs (if engaged):** AI voice call to qualify and book
   - **Day 2:** Follow-up SMS with a different angle
   - **Day 4:** Email with offer details
   - **Day 7:** Final SMS — "Last chance for [offer]"
6. Qualified leads auto-route to the client's calendar for booking
7. Results tracked in GHL: contacts reached, permission-pass response rate, replies, appointments booked, revenue generated
8. **Post-campaign:** Delete client customer data from GHL within 30 days. Provide client with opt-out list to update their own records.

### W7.5 — Website & Marketing

- [ ] Claude: Add a "Database Reactivation" section to VoiceHome (below How It Works or as a separate feature card)
- [ ] Claude: Consider a dedicated `/reactivation` page with its own VSL and CTA
- [ ] Giles: Create a HeyGen VSL for DB reactivation: "Got a database of old leads gathering dust? We'll turn them into appointments this week."
- [ ] Position in Facebook ads: "We'll reactivate your dormant leads for free when you sign up" — powerful ad hook

### W7.6 — Delivery Process

- [ ] Giles: Build a reusable GHL workflow template for reactivation campaigns
- [ ] Create niche-specific SMS/voice scripts (tradie reactivation vs salon reactivation)
- [ ] Document as a runbook for offshore handoff
- [ ] Track results per campaign for case study material

**Acceptance Criteria:**
- [ ] Reactivation product defined with pricing on website
- [ ] Template service agreement reviewed by lawyer (one-time)
- [ ] DNCR account set up and integrated into onboarding workflow
- [ ] Two-stage permission-pass campaign template built in GHL
- [ ] GHL workflow template tested with DNCR wash, calling hours, opt-out handling
- [ ] At least 1 reactivation campaign run with a real client using the two-stage model
- [ ] Results documented as a case study for marketing

---

## Implementation Timeline

```
Week 1 (Now)
├── W1: Blocker Fixes (Claude — 2-3 hours)
│   ├── Create /privacy and /terms pages
│   ├── Add /demos index route
│   ├── Fix UTM passthrough on booking CTAs
│   ├── Remove or flag placeholder testimonials
│   ├── Facebook Pixel + GA4 installation
│   ├── Meta tags update (voice product, not "Systems Consulting")
│   ├── Sitemap + robots.txt
│   └── Google Search Console setup (Giles)
├── W2: HeyGen setup + first 2 VSL scripts (Giles)
├── W3: Meta Business Manager setup (Giles)
├── W4: GHL pipeline + speed-to-lead workflow (Giles)
└── W7: Define reactivation product + build GHL template (Giles)

Week 2
├── W2: Record remaining VSLs + embed on website (Giles + Claude)
├── W3: Launch 3 ad campaigns (Giles) — only after blockers fixed
├── W4: Build 90-day nurture sequence (Giles)
├── W5: Wire Stripe payment links (Giles + Claude)
├── W5: Build onboarding form in GHL (Giles)
└── W7: Run first reactivation campaign with existing client

Week 3
├── W3: Analyse ad performance, kill losers, scale winners
├── W4: Test GHL AI workflow builder for lead qualification
├── W5: Document first niche setup runbook
├── W5: Set up Slack integration for onboarding
├── W7: Document reactivation results as case study
└── W6: Begin /ce:plan for cold outreach pipeline

Week 4+
├── W3: Retargeting campaigns live
├── W5: Offshore readiness — all runbooks documented
├── W6: Build automated outreach pipeline
├── W7: Add reactivation to ad messaging + landing page
└── Iterate based on data
```


---

## Success Metrics

| Metric | Target (Week 4) | Target (Week 8) |
|--------|-----------------|-----------------|
| Website visitors/week | 200+ | 500+ |
| Leads/week | 5-10 | 15-25 |
| Demo calls booked/week | 2-3 | 5-8 |
| New clients/month | 2-3 | 5-8 |
| Monthly recurring revenue | $2,000+ | $5,000+ |
| CPL (Facebook Ads) | < $50 | < $35 |
| Speed-to-lead (first response) | < 60 seconds | < 60 seconds |
| Lead-to-demo conversion | 20%+ | 25%+ |
| DB Reactivation campaigns run | 1+ | 3+ |
| DB Reactivation revenue (one-time) | $500+ | $2,000+ |

---

## Dependencies & Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| **AU Privacy Act / Spam Act non-compliance on DB reactivation** | **High** | Two-stage permission-pass model. DNCR wash every campaign. Template service agreement with lawyer review. See W7.3 for full compliance framework |
| **Meta ad account rejection or restriction** | **Medium-High** | New ad accounts face higher scrutiny. Start with modest spend ($15/day). Ensure /privacy and /terms pages exist before first ad. Avoid prohibited content in ads. Have a backup personal ad account. |
| **Existing customer churn on price increase** | **Medium** | 90-day loyalty bridge + annual lock offer. Personal phone call, not email. See W5.1 migration strategy |
| HeyGen avatar quality isn't convincing | Medium | Test with 1 video first. Fallback: screen recording with voiceover |
| Facebook ad CPL too high initially | Medium | Start with $15/day per campaign. Kill underperformers after 3 days. Test 3+ creatives per ad set |
| GHL AI workflows unreliable | Low | Use as experimental layer only. Standard rule-based workflows as fallback |
| GHL rate limiting on bulk SMS campaigns | Medium | Stagger sends (not all at once). GHL has daily SMS limits per sub-account. Test with small batches first. |
| Stripe migration delays | Low | Keep booking-link CTAs as fallback until Stripe links are ready |
| Cold outreach triggers spam complaints | Medium | Email-first (not SMS) for cold. Include unsubscribe. Check DNCR. Start with 20-30/day and monitor deliverability. SMS/voice notes only after opt-in. |
| Offshore team needs too much hand-holding | Medium | Runbook quality is key. Record Loom walkthroughs of each setup process |
| **Privacy Act reform removing small business exemption** | Low (timing) | Already treating Parnell Systems as covered. Reforms expected but not yet legislated. Being compliant now avoids scrambling later. |

---

## Sources & References

### Internal
- AWE2M8 Client Onboarding Roadmap: `parnellsystems-platform/docs/plans/Strategy/2026-03-09-saas-strategy-with-open-claw/2. awe2m8-client-onboarding-roadmap.docx (Stop Gap).pdf`
- AI Business Opportunities brainstorm: `website/docs/brainstorms/2026-03-25-ai-business-opportunities-requirements.md`
- Brand Architecture brainstorm: `website/docs/brainstorms/2026-03-25-brand-architecture-requirements.md`
- Current website code: `website/src/pages/` (VoiceHome.tsx, DemoPage.tsx, Pricing.tsx)
- Niche config: `website/src/config/niches.ts`

### Key Decisions
- **Meta Ads Manager over GHL Ads Manager** — GHL's wrapper is always behind, debugging two layers. Run ads in Meta, capture leads in GHL.
- **HeyGen for VSLs** — Best avatar quality as of 2026. Business plan ($89 USD/mo) gives 30 minutes of video.
- **Email-first for cold outreach** — Australian Spam Act makes cold SMS risky. Email with proper unsubscribe is safer.
- **GHL native forms for onboarding** — Integrates directly with CRM, no Zapier needed.
- **Speed-to-lead < 60 seconds** — Industry data: 21x more likely to qualify vs 30-minute response.
- **`useSEO` hook over `react-helmet-async`** — Zero-dependency, pre-renderer captures meta tags into static HTML. No runtime head manager needed for ~15 pages.
- **`@prerenderer/rollup-plugin` for SPA pre-rendering** — Simplest option for ~15 pages. Alternatives (Vike, react-snap, prerender.io, Rendertron) rejected for complexity, maintenance, or cost reasons.
- **Two-stage reactivation model for DB campaigns** — Permission-pass SMS first, full campaign only to opt-ins. Required for Spam Act / Privacy Act compliance with dormant customer data.
- **Treat Parnell Systems as covered by the Privacy Act** — Small business exemption likely doesn't apply ("trading in personal information" exception) and is being phased out.
