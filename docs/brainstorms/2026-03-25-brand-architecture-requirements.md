---
date: 2026-03-25
topic: brand-architecture-migration
---

# Brand Architecture & Migration — ParnellSystems + Voice AI

## Problem Frame

Giles built AllConvos.ai with a business partner. The partnership has ended amicably, but the product (demos, GHL accounts, infrastructure) is on jointly-owned/managed infrastructure. Giles has started ParnellSystems.com as his independent brand. The voice AI product needs to be migrated to his sole ownership and repositioned under the new brand architecture.

---

## Brand Architecture Decision

```
parnellsystems.com          ← umbrella brand (consultancy, services, about)
└── voice.parnellsystems.com ← voice AI product (ZingCall)
    └── /demos/[vertical]    ← 7 industry demo pages
```

- **ParnellSystems** = Giles's consultancy identity. All services (voice AI, training, consulting, future products) live here or link from here.
- **ZingCall** = product name for the voice AI service. Lives at `voice.parnellsystems.com`. Branded as "ZingCall by Parnell Systems."
- **Domain note**: `zingcall.ai` is available (~$30-40/yr via Namecheap/Cloudflare) if ZingCall ever needs to be spun off or marketed independently. Not required now.
- **AllConvos.ai** = to be fully deprecated from Giles's operations. No new clients, no new infrastructure on this domain.

---

## Requirements

### R1 — ParnellSystems.com (umbrella)
- Build out from current placeholder to a proper consultancy site
- Homepage: who Giles is, what Parnell Systems offers (voice AI, consulting, training)
- Clear navigation to voice.parnellsystems.com (ZingCall) as the flagship product
- Professional, credible — not a product page, but a brand home

### R2 — voice.parnellsystems.com (ZingCall product site)
- Migrate all content from allconvos.ai to this subdomain
- Retain the 7 industry demo pages: Solar, Gyms & Fitness, Tradies, Clinics, Salons/Spas, Automotive, Pool Maintenance
- Demo URLs: `voice.parnellsystems.com/demos/tradies` etc.
- "ZingCall by Parnell Systems" branding throughout
- Pricing: **$400/month** + setup fee (correcting AllConvos.ai's $299/month)

### R3 — GHL Account Migration
- Create new GHL sub-accounts under Giles's sole ownership for all 7 demo verticals
- Rebuild or clone existing demo workflows/snapshots into the new accounts
- Update all demo pages to point to the new GHL accounts (not the shared partner accounts)
- Decouple completely from any GHL account jointly managed with former partner

### R4 — Twilio Migration
- Provision new Twilio numbers under Giles's sole Twilio account for each demo
- Update GHL to route calls through the new numbers
- Release or transfer existing shared numbers (coordinate with former partner)

### R5 — Infrastructure Independence
- All DNS, hosting, and integrations for voice.parnellsystems.com must be solely owned/controlled by Giles
- No dependency on allconvos.ai domain, hosting, or accounts post-migration
- AllConvos.ai existing clients: agree handoff/transition plan with former partner (out of scope for this doc)

---

## Success Criteria

- voice.parnellsystems.com is fully live with all 7 demos working via Giles's own GHL + Twilio accounts
- parnellsystems.com presents as a credible consultancy umbrella with clear link to ZingCall
- Zero remaining dependencies on allconvos.ai or jointly-managed accounts
- New clients sign up through parnellsystems.com / ZingCall, not allconvos.ai

---

## Scope Boundaries

- **Out of scope**: What happens to allconvos.ai after migration (partner's decision)
- **Out of scope**: Migrating existing AllConvos.ai clients (separate agreement with partner)
- **Out of scope**: Buying zingcall.ai domain — not needed while sub-brand lives on subdomain
- **Out of scope**: ParnellSystems.com full marketing/SEO build — that's Track B (GTM)

---

## Key Decisions

- **Sub-brand name: ZingCall** — product name for voice AI, lives at voice.parnellsystems.com. Energetic, instantly clear, no new domain needed. `zingcall.ai` held in reserve.
- **Sub-domain over standalone domain** — concentrates authority on parnellsystems.com, zero domain cost, simpler while scaling
- **No hard migration deadline** — split is amicable, can migrate properly
- **GHL rebuild, not transfer** — cleaner to build fresh GHL accounts than attempt to split shared ones

---

## Dependencies / Assumptions

- Former partner is cooperative on Twilio number transfer/release
- Existing GHL snapshot templates are accessible and can be replicated into new accounts
- ParnellSystems.com is Giles's sole-owned domain and hosting

---

## Outstanding Questions

### Resolve Before Planning

*All blocking questions resolved.*

### Deferred to Planning
- **[R3][Technical]** Can GHL snapshots be exported and re-imported into a new account, or must demos be rebuilt from scratch?
- **[R4][Technical]** Twilio number transfer process — port existing numbers or provision fresh ones per vertical?
- **[R1][Needs research]** What tech stack is parnellsystems.com currently built on? Affects how the site is built out.

---

## Next Steps

→ Resolve pricing question, then `/ce:plan` with focus on R2 + R3 (demo migration) as the first execution target — gets you independent and live fastest.
