---
title: "feat: Homepage UX Redesign — Social Proof, Structure, and Conversion Improvements"
type: feat
status: completed
date: 2026-03-26
---

# feat: Homepage UX Redesign — Social Proof, Structure, and Conversion Improvements

## Overview

A comprehensive UX and content restructure of parnellsystems.com's landing page to improve conversion, reduce section redundancy, add social proof, and increase visual variety. Changes span typography, component layout, section architecture, and three new components (testimonials/social proof, FAQ, contact form).

## Problem Frame

The current homepage is technically well-built but underperforms on conversion for several reasons:

- **No social proof**: Zero named testimonials, logos, or verifiable client references — the three metric cards (60%, 15hrs, 3x) are unverifiable
- **Section redundancy**: Six sections cover similar ground (What We Do, Who It's For, Why Us, Use Cases, Process, Services), causing scroll fatigue
- **Generic hero**: Headline ("Systems that scale without the noise") lacks specificity about audience, problem, and differentiator
- **Monotonous layouts**: Every section follows the same SectionLabel → H2 → card grid pattern; eye disengages after ~4 sections
- **Single CTA path**: Only the booking widget is available — no low-commitment contact option for visitors in the consideration phase
- **Buried credibility**: The AWS background is a footnote in a pill badge rather than a lead signal
- **Undersized profile**: Personal brand photo at 128–160px undersells the solo consultancy relationship
- **Font**: Inter is the most overused font in AI/tech products; Plus Jakarta Sans would signal more premium positioning

## Requirements Trace

- R1. Add a social proof section with placeholder testimonials + credential/trust signals (AWS background, years, scale)
- R2. Consolidate WhatWeDoSection and ServicesSection into a single, cleaner services overview
- R3. Rewrite the hero headline to be more specific: name the audience, the problem, and the differentiator
- R4. Remove the weak "Learn more → #services" secondary hero CTA (or replace with something substantive)
- R5. Add a FAQSection using the existing shadcn Accordion component (~6 questions)
- R6. Add an inline contact form as a secondary low-commitment CTA path
- R7. Swap Inter for Plus Jakarta Sans throughout
- R8. Increase profile photo size in AboutSection; add scannable credential strip
- R9. Restructure homepage section order: remove WhoItsForSection and WhyUsSection as standalone sections; absorb their content
- R10. Add a pricing/engagement signal — at minimum a "how we engage" statement — in FAQ or Services
- R11. Strengthen UseCasesSection with industry context labels even if client names remain anonymous
- R12. Visually review ProcessSection and CTASection light-background contrast bands for coherence on the dark theme

## Scope Boundaries

- Not implementing a blog or thought leadership section in this phase
- Not building a real form backend — contact form submission handler is a console.log placeholder with a TODO comment
- Not adding a dark/light mode toggle
- Not redesigning sub-pages (IntelligenceLayer, VoiceSMS, Training)
- Not adding real client names or companies — all testimonials use realistic placeholder data
- Not implementing pricing tiers or packages — brief engagement model statement only

## Context & Research

### Relevant Code and Patterns

- All landing components: `src/components/landing/` — 14 components, all following the FadeIn/SectionLabel/card-grid pattern
- Section composition: `src/pages/Index.tsx` — imports and render order for all 11 sections
- Design tokens: `src/index.css` — CSS variable definitions including `--font-sans`; font-family applied to body
- Font import: `index.html` — Google Fonts `<link>` tags location for the Inter → Plus Jakarta Sans swap
- Accordion component: `src/components/ui/accordion.tsx` — shadcn/ui Accordion, AccordionItem, AccordionTrigger, AccordionContent; available for FAQ
- Button component: `src/components/ui/button.tsx` — CVA variants (`cta`, `outline`, `default`, `ghost`)
- Form primitives: `src/components/ui/input.tsx`, `textarea.tsx`, `label.tsx`, `form.tsx` — available for contact form
- Validation: React Hook Form + Zod are already installed and used in the project
- Animation: `src/components/landing/FadeIn.tsx` — standard scroll-reveal wrapper; all new sections should use this
- Framer Motion: available; use sparingly — only where it adds clear meaning (existing `whileHover` on cards is fine)
- Pill badge pattern: `ServicesSection.tsx` line ~117 — `inline-block px-4 py-2 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/50` for credential strip in AboutSection

### Institutional Learnings

- No existing `docs/solutions/` directory — this plan is the first in the project

### External References

- Plus Jakarta Sans: `https://fonts.google.com/specimen/Plus+Jakarta+Sans` — available via Google Fonts, weights 400/500/600/700/800

## Key Technical Decisions

- **Font**: Plus Jakarta Sans replaces Inter. Load via Google Fonts in `index.html`; update `--font-sans` in `src/index.css`. Add `<link rel="preconnect">` hint to avoid FOUT.
- **Social proof content**: Placeholder data (fictional but realistic names/companies/quotes) with `// TODO: Replace with real testimonial` comments throughout. Structure makes content substitution obvious.
- **WhoItsFor removal**: Its three audience descriptions ("Founders scaling past 20 people", "Ops leaders inheriting chaos", "Teams preparing for investment") absorbed into the hero sub-copy and FAQ. Standalone section removed from Index.tsx.
- **WhyUs removal**: Four differentiators (Outcome-focused, Fast execution, No lock-in, Knowledge transfer) absorbed into SocialProofSection as a compact credential row. Standalone section removed from Index.tsx.
- **ContactForm**: Uses React Hook Form + Zod. Submission handler `console.log`s in this phase; a `// TODO: Wire up to form service (Formspree / EmailJS / Lead Connector)` comment marks the integration point.
- **ProcessSection background**: Retain the light `bg-primary` contrast band for now; review visually during Unit 10 and adjust to `bg-card` if it feels jarring.
- **New section order**: Hero → Problem → Services → Social Proof → Use Cases → Process → FAQ → About → CTA → Contact Form → Footer.

## Open Questions

### Resolved During Planning

- **Font choice**: Plus Jakarta Sans (confirmed by user)
- **Social proof content**: Placeholder data (confirmed — no real testimonials yet)
- **Secondary CTA type**: Inline contact form (confirmed by user)
- **WhoItsFor / WhyUs**: Remove as standalone sections; content absorbed elsewhere

### Deferred to Implementation

- **Contact form destination**: Which service receives submissions (Formspree, EmailJS, Lead Connector, or direct email). Mark with a `// TODO` in the handler.
- **Real testimonial content**: Actual client quotes, names, and titles replace placeholders once client permission is obtained.
- **ProcessSection contrast**: Whether the light `bg-primary` band looks smooth in final context — verify visually during Unit 10 implementation.
- **Bokke tooltip**: Whether to add a hover tooltip explaining "Viva die Bokke!" to international visitors — low priority, decide during Unit 8.

## High-Level Technical Design

> *This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce.*

**New homepage section order (Index.tsx):**

```
Navbar
HeroSection          ← rewritten: specific audience/problem, single CTA, social signal line
ProblemSection       ← unchanged
ServicesSection      ← consolidated: absorbs WhatWeDo capabilities row; WhatWeDoSection removed
SocialProofSection   ← NEW: testimonials (2-3 cards) + credential strip + differentiator pills
UseCasesSection      ← strengthened: industry labels on each metric card
ProcessSection       ← unchanged (light background — review in Unit 10)
FAQSection           ← NEW: shadcn Accordion, 6 questions, 2-col on desktop
AboutSection         ← enlarged photo + credential pill strip above bio
CTASection           ← unchanged booking CTA
ContactFormSection   ← NEW: "Prefer to send a message?" form below booking CTA
Footer
```

**Removed from Index.tsx:** `WhatWeDoSection`, `WhoItsForSection`, `WhyUsSection`

**SocialProofSection layout sketch:**

```
[ Featured testimonial — large quote left, 2 smaller cards right ]
[ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ]
[ 20+ years | Ex-AWS | 40+ teams | Outcomes in 2 weeks        ]
[ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ]
[ Outcome-focused  |  Fast execution  |  No lock-in  |  Knowledge transfer ]
```

This 1-large + 2-small testimonial layout intentionally breaks the 3-equal-column pattern used everywhere else.

## Implementation Units

- [ ] **Unit 1: Typography — Swap Inter for Plus Jakarta Sans**

**Goal:** Replace Inter with Plus Jakarta Sans across the entire site

**Requirements:** R7

**Dependencies:** None

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

**Approach:**
- Remove existing Inter `<link>` tags in `index.html`
- Add Plus Jakarta Sans Google Fonts import: weights 400, 500, 600, 700, 800; `display=swap`
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` before the font import
- Update `--font-sans` in `src/index.css` to `'Plus Jakarta Sans', system-ui, sans-serif`

**Patterns to follow:** Existing Google Fonts link structure in `index.html`; `--font-sans` declaration in `src/index.css`

**Test scenarios:**
- Heading and body text renders in Plus Jakarta Sans in browser DevTools computed styles
- No visible FOUT on initial page load
- All font weights (400–800) render correctly

**Verification:**
- Browser computed styles confirm `Plus Jakarta Sans` on `body` and headings; no Inter references remain

---

- [ ] **Unit 2: Hero rewrite — specific headline + single strong CTA**

**Goal:** Replace the generic headline with one that names the audience and problem; remove the weak secondary CTA

**Requirements:** R3, R4

**Dependencies:** Unit 1

**Files:**
- Modify: `src/components/landing/HeroSection.tsx`

**Approach:**
- Replace the existing H1 with a headline that names a concrete pain or specific audience segment (e.g. SME owners / scaling teams drowning in disconnected tools). The gradient `<span>` on the key phrase can remain.
- The sub-copy (`<p>`) should mention 1–2 of the three target audiences (founders scaling, ops leaders, investment-ready teams) so visitors self-identify quickly — this absorbs some of the WhoItsForSection content
- Remove the `<Button variant="outline">Learn more</Button>` that anchors to `#services`; it competes with the primary CTA without adding value
- Below the primary CTA button, add a small social signal line (e.g. "Trusted by SaaS companies, operations teams, and scaling founders") — placeholder text, `// TODO: Replace with real client reference`
- Keep the grid background, FloatingShapes, and accent glow — only copy and button layout change

**Patterns to follow:** Existing HeroSection FadeIn staggering pattern; Button cta variant; external link pattern with `rel="noopener noreferrer"`

**Test scenarios:**
- Single primary CTA ("Book a free system audit") is visually prominent
- No secondary "Learn more" button present
- Social signal line renders below CTA at all breakpoints
- Gradient text renders without overflow clipping on mobile

**Verification:**
- HeroSection has one CTA button; headline references a specific problem or audience; social signal placeholder is visible

---

- [ ] **Unit 3: Consolidate ServicesSection — absorb WhatWeDo capabilities**

**Goal:** Integrate a lightweight capabilities row into ServicesSection and remove WhatWeDoSection

**Requirements:** R2

**Dependencies:** Unit 1

**Files:**
- Modify: `src/components/landing/ServicesSection.tsx`
- Modify: `src/pages/Index.tsx` (remove WhatWeDoSection import and render)

**Approach:**
- Add a 3-column capabilities row at the top of ServicesSection (before the left/right services grid) — each column shows an icon + capability name + one-line descriptor: Systems Architecture, Process Automation, Operational Analytics
- Keep this row visually lightweight: icon (same `bg-accent/10` pattern) + title + short text, no animated abstract visuals
- The animated visuals from WhatWeDo (NodeMapVisual, BarChartVisual, ListUIVisual) can be dropped entirely — they added file size without clear communicative value
- Below the capabilities row, the existing left/right services layout (4 service cards + pillars + service teasers) remains unchanged
- Remove `<WhatWeDoSection />` from `Index.tsx` and its import

**Patterns to follow:** Existing `offerings` array pattern in WhatWeDoSection; ServicesSection left-column heading structure

**Test scenarios:**
- ServicesSection renders the 3-capability row above the existing services grid without visual crowding
- Page renders without import errors after WhatWeDoSection removal
- ServicesSection does not feel excessively long

**Verification:**
- WhatWeDoSection is not in the rendered page; ServicesSection has a capabilities row; no console errors

---

- [ ] **Unit 4: New SocialProofSection — testimonials, credential strip, differentiators**

**Goal:** Create a new section that provides social proof, credential signals, and the differentiators from WhyUsSection

**Requirements:** R1, R9

**Dependencies:** Unit 1

**Files:**
- Create: `src/components/landing/SocialProofSection.tsx`
- Modify: `src/pages/Index.tsx` (add SocialProofSection; remove WhoItsForSection and WhyUsSection)

**Approach:**
- **Testimonials**: 1 featured (large) + 2 standard cards
  - Featured card: `col-span-full` or left-side dominance; larger quote text; name, title, company; placeholder quote about systems impact
  - Two smaller cards: standard width; different placeholder names and quotes
  - All marked with `// TODO: Replace with real testimonial` comment
  - Use `rounded-xl bg-card border border-border` card pattern; add accent `"` quote mark as a decorative element
- **Credential strip**: horizontal row of pipe-separated or pill-badged stats: "20+ years · Ex-AWS Principal Engineer · 40+ teams served · Results in 2 weeks". Use small `bg-muted/30 rounded-full px-3 py-1` pill badge pattern.
- **Differentiators**: 4-column row (or 2×2 on mobile) showing the WhyUs content compactly: Outcome-focused / Fast execution / No lock-in / Knowledge transfer — icon + title + one-line description. Reuse the icons from WhyUsSection.
- Layout should intentionally break the equal 3-column grid pattern used elsewhere

**Patterns to follow:** WhyUsSection differentiator cards; AboutSection for credential positioning; FadeIn wrapper with stagger delays

**Test scenarios:**
- Featured testimonial is visually prominent vs. the two smaller cards
- Credential strip renders as a horizontal row on desktop; wraps cleanly on mobile
- Differentiator row matches icon/title pattern from WhyUsSection
- Section renders correctly between ServicesSection and UseCasesSection

**Verification:**
- SocialProofSection renders with 3 testimonial placeholders, credential strip, and 4 differentiator items; WhoItsForSection and WhyUsSection are removed from the page

---

- [ ] **Unit 5: Strengthen UseCasesSection — industry context labels**

**Goal:** Add industry/context labels to metric cards to make results feel verifiable

**Requirements:** R11

**Dependencies:** None

**Files:**
- Modify: `src/components/landing/UseCasesSection.tsx`

**Approach:**
- Add an industry label pill above each metric number (before the `text-4xl font-bold text-accent` metric): e.g. "SaaS Scale-up", "Operations Team", "Infrastructure Team"
- Style the pill using `text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground bg-muted/30 rounded-full px-2 py-0.5` (consistent with SectionLabel scale)
- Optionally expand description from one sentence to two, adding a brief "before" state for each: e.g. "An operations team manually building weekly reports now runs them automatically."
- Consider whether to visually elevate one card as a "featured" case (slightly different treatment — no design change needed in this unit, can be deferred)

**Patterns to follow:** Existing card structure in UseCasesSection; accent bar at top of each card; SectionLabel styling for the pill

**Test scenarios:**
- Industry label renders above the metric number on all three cards
- Mobile layout is not broken by the additional pill element
- Text is readable at small sizes

**Verification:**
- Each metric card has a visible industry/context label; card layout is unchanged

---

- [ ] **Unit 6: New FAQSection — Accordion with 6 questions**

**Goal:** Create a FAQ section using the shadcn Accordion, covering common objections and questions

**Requirements:** R5, R10

**Dependencies:** Unit 1

**Files:**
- Create: `src/components/landing/FAQSection.tsx`
- Modify: `src/pages/Index.tsx`

**Approach:**
- Import and use `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` from `src/components/ui/accordion.tsx`
- 6 questions (copy to be finalised during implementation, but structure these topics):
  1. **Pricing**: "How much does an engagement cost?" — project-based, scoped after the audit; no retainers, no surprises
  2. **Audit details**: "What does the free 30-minute audit involve?" — conversation, not a pitch; maps current stack, identifies top 3 bottlenecks, outlines a path forward
  3. **Timeline**: "How quickly do I see results?" — most engagements show measurable impact within 2 weeks; full implementation typically 4–8 weeks
  4. **Technical knowledge**: "Do I need to be technical?" — no; you know your business; we translate that into system design
  5. **Tools**: "Do you make us use specific tools or platforms?" — no lock-in; we work with what you already use
  6. **References**: "Who have you worked with?" — placeholder: "We've worked with SaaS companies, service businesses, and operations teams across Australia and internationally. References available on request."
- Layout: 2-column Accordion on desktop (split questions into two groups of 3 using CSS grid), single column on mobile — this creates visual variety vs. the other sections
- Include SectionLabel ("Common questions") and a brief one-liner intro
- `type="multiple"` on the Accordion so multiple items can be open simultaneously

**Patterns to follow:** `src/components/ui/accordion.tsx` shadcn component; FadeIn wrapper; SectionLabel

**Test scenarios:**
- Each item expands and collapses correctly
- Multiple items can be open simultaneously
- Mobile renders as single column without layout breaks
- FAQ pricing answer acknowledges cost without quoting specific figures (deferred to the audit call)

**Verification:**
- FAQSection renders after ProcessSection; all 6 items function; 2-column layout on desktop; pricing/engagement context is present

---

- [ ] **Unit 7: New ContactFormSection — low-commitment contact path**

**Goal:** Create an inline contact form as an alternative to the booking CTA

**Requirements:** R6

**Dependencies:** Unit 1

**Files:**
- Create: `src/components/landing/ContactFormSection.tsx`
- Modify: `src/pages/Index.tsx`

**Approach:**
- Fields: Name (required, min 2 chars), Email (required, valid email), Message (required, min 10 chars)
- Use `useForm` from React Hook Form with a Zod schema for validation
- Use shadcn `Input`, `Textarea`, `Label`, `Button`, and `Form` components
- On submit: `console.log(data)` with a prominent `// TODO: Wire up to form service (Formspree / EmailJS / Lead Connector)` comment; replace the form with a success message (`"Thanks — I'll be in touch within 24 hours."`)
- Visual treatment: `bg-card` with `border border-border` — softer than CTASection, clearly positioned as the secondary option
- Section heading: "Prefer to send a message?" with sub-copy: "Not ready to book a call? That's fine — send a message and I'll get back to you within 24 hours."
- Constrain form width to `max-w-lg mx-auto` to keep it compact and intentional

**Patterns to follow:** `src/components/ui/form.tsx` Form wrapper pattern; existing Zod schema usage in the project; Button `cta` variant for the submit button

**Test scenarios:**
- Submitting empty form shows validation errors on all three fields
- Invalid email format shows email-specific error
- Short message (< 10 chars) shows minimum length error
- Valid submit shows success message and hides the form
- Form is keyboard-navigable and labels are correctly associated with inputs

**Verification:**
- Form renders below CTASection; all validation scenarios pass; console.log on valid submit; success state visible

---

- [ ] **Unit 8: AboutSection — larger photo + credential strip**

**Goal:** Increase profile photo size and add a scannable credential strip

**Requirements:** R8

**Dependencies:** Unit 1

**Files:**
- Modify: `src/components/landing/AboutSection.tsx`

**Approach:**
- Increase photo container from `w-32 h-32 sm:w-40 sm:h-40` to `w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64`; scale the `rounded-3xl` decorator div accordingly
- Add a credential strip immediately before the first bio `<p>` tag — a flex-wrap row of pill badges: `"20+ years"`, `"Ex-AWS Principal Engineer"`, `"40+ teams served"`, `"Global delivery"`, `"Results in 2 weeks"`
- Use the existing pill style from ServicesSection: `inline-block px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground font-medium border border-border/50`
- Wrap the pill row in a `flex flex-wrap gap-2 mb-6`
- The Bokke Easter egg remains; optionally add `title="Springboks Rugby — South Africa's national team"` to the anchor for international visitors

**Patterns to follow:** Existing photo container markup in `AboutSection.tsx`; pill badge pattern from `ServicesSection.tsx` (~line 117)

**Test scenarios:**
- Photo renders at the larger size without distortion or overflow
- Credential pills wrap cleanly on mobile (375px)
- Grid layout (left column photo/title, right column bio) still aligns on all breakpoints

**Verification:**
- Profile photo is visibly larger (min 192px rendered width); credential strip visible above bio text on desktop and mobile

---

- [ ] **Unit 9: Homepage section reorder + cleanup (Index.tsx)**

**Goal:** Update Index.tsx to the new section order; remove deleted section imports

**Requirements:** R2, R9

**Dependencies:** Units 3, 4, 6, 7 must be complete (all new/removed components must exist)

**Files:**
- Modify: `src/pages/Index.tsx`

**Approach:**
- Remove imports: `WhatWeDoSection`, `WhoItsForSection`, `WhyUsSection`
- Add imports: `SocialProofSection`, `FAQSection`, `ContactFormSection`
- New render order:
  1. `<Navbar />`
  2. `<HeroSection />`
  3. `<ProblemSection />`
  4. `<ServicesSection />`
  5. `<SocialProofSection />`
  6. `<UseCasesSection />`
  7. `<ProcessSection />`
  8. `<FAQSection />`
  9. `<AboutSection />`
  10. `<CTASection />`
  11. `<ContactFormSection />`
  12. `<Footer />`
- Verify anchor IDs: `#services` (ServicesSection), `#process` (ProcessSection), `#about` (AboutSection), `#cta` (CTASection) — all must still be present on the respective section elements
- Verify Footer links (service/training routes) are not affected

**Patterns to follow:** Current `Index.tsx` import and JSX structure

**Test scenarios:**
- Page renders all 12 items in sequence without console errors
- No unresolved import references
- Anchor links from Navbar dropdown still scroll to correct sections
- Page scroll narrative: agitation → solution → credibility → evidence → process → objection handling → personal → conversion

**Verification:**
- No imports for `WhatWeDoSection`, `WhoItsForSection`, `WhyUsSection` remain; all new components render in correct order; no console errors

---

- [ ] **Unit 10: ProcessSection contrast visual review**

**Goal:** Verify the light `bg-primary` contrast bands (ProcessSection and CTASection) read well in context of the full redesigned page; adjust if not

**Requirements:** R12

**Dependencies:** Unit 9 (page in final order)

**Files:**
- Conditionally modify: `src/components/landing/ProcessSection.tsx`
- Conditionally modify: `src/components/landing/CTASection.tsx`

**Approach:**
- Review the full page visually with the new section order in place
- If ProcessSection's light `bg-primary` contrast band feels jarring, incoherent, or creates accessibility issues, switch to `bg-card text-foreground` to stay in the dark palette while maintaining visual differentiation via the grid overlay
- Same review for CTASection's light gradient background — verify `text-muted-foreground` renders with sufficient contrast on the light background
- Run a basic WCAG AA contrast check on any text in these sections if the background was changed
- If both sections look good as-is, no changes needed

**Test scenarios:**
- ProcessSection text is readable (body text ≥ 4.5:1 contrast ratio against background)
- CTASection heading and body text is readable
- Transition from adjacent dark sections doesn't appear broken or accidental

**Verification:**
- No WCAG AA contrast violations in ProcessSection or CTASection; visual transitions feel intentional, not jarring

## System-Wide Impact

- **Navigation anchor links**: Navbar dropdowns link to `#services`, `#process`, `#about` — verify all three IDs exist on their respective sections after reorder
- **Footer links**: Footer has columns for Services and Training linking to sub-pages — unaffected by homepage section changes
- **Removed components**: Before deleting `WhatWeDoSection`, `WhoItsForSection`, `WhyUsSection` files, search for any imports outside `Index.tsx` (unlikely but safe to check)
- **Font performance**: Plus Jakarta Sans adds a Google Fonts network request; `display=swap` + `preconnect` hints mitigate FOUT
- **AbstractVisuals.tsx**: `NodeMapVisual`, `BarChartVisual`, `ListUIVisual` become unused once WhatWeDoSection is removed — leave the file but the components will be dead code; can be cleaned up in a future pass

## Risks & Dependencies

- **Placeholder social proof**: SocialProofSection launches with fictional testimonials. Risk: if not replaced quickly it looks unfinished. Mitigate: clearly label with `// TODO` comments; track replacement as a follow-up action.
- **Contact form backend**: No real submission in this phase. Risk: form appears functional but messages aren't delivered. Mitigate: a `// TODO` comment in the handler; optionally add a visible dev-mode warning in the UI.
- **Removed sections**: WhoItsFor and WhyUs audiences/differentiators must be absorbed before removal, or key messages are silently lost. Mitigate: verify absorption into Hero sub-copy (audiences) and SocialProofSection (differentiators) before removing.
- **Font FOUT**: Switching fonts risks a brief flash of unstyled text. Mitigate: `display=swap` + `preconnect` hint in `index.html`.
- **Section length**: Adding SocialProofSection and FAQSection while removing only 3 shorter sections may make the page longer overall. Monitor and trim copy if the page feels too long after all units are complete.

## Documentation / Operational Notes

- After real testimonials are obtained, replace the placeholder content in `SocialProofSection.tsx` and remove the `// TODO` comments
- After selecting a form backend service, implement the contact form handler in `ContactFormSection.tsx` and remove the `// TODO` comment
- `AbstractVisuals.tsx` will contain dead code (NodeMapVisual, BarChartVisual, ListUIVisual) once WhatWeDoSection is removed — schedule for cleanup

## Sources & References

- **Origin**: UI/UX review findings documented in conversation on 2026-03-26
- Related components: `src/components/landing/` (all 14 components)
- Entry point: `src/pages/Index.tsx`
- Design tokens: `src/index.css`
- shadcn Accordion: `src/components/ui/accordion.tsx`
- shadcn Form primitives: `src/components/ui/form.tsx`, `input.tsx`, `textarea.tsx`
- External: [Plus Jakarta Sans — Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
