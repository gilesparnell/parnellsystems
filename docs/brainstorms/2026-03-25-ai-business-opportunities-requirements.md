---
date: 2026-03-25
topic: ai-business-opportunities
---

# AI Business Opportunities — Product, Service & Income Roadmap

## Existing Product

**AllConvos.ai** is already live — a productized AI receptionist service.

- **URL**: https://allconvos.ai / https://allconvos.ai/demos
- **Pricing**: $299/month + one-time onboarding fee (FRONT_DESK_CORE) | Custom (ELITE_OVERSEER multi-location)
- **Stack**: GoHighLevel (GHL) workflows + GHL snapshots + Twilio (phone number provisioning) + Vapi (voice agent, recommended) + SMS notifications + real-time dashboard
- **Voice platform history**: Previously used Thinkrr.ai and Assistable.ai (no longer). Currently evaluating GHL native voice vs Vapi vs Retell. **Recommendation: Vapi** — full REST API for programmatic agent creation, critical for automated onboarding. GHL native voice lacks developer API depth needed for OB5-OB7. Retell is fallback if Vapi pricing becomes issue at scale.
- **7 industry demos**: Solar, Gyms & Fitness, Tradies, Clinics, Salons/Spas, Automotive, Pool Maintenance
- **Features**: 24/7 call handling, lead qualification, appointment booking, CRM integration, multi-location support

This is the Tier 1 product. The brainstorm below builds the go-to-market and revenue funnel around it.

---

## Problem Frame

Giles and Christian have built AllConvos.ai — a productized AI receptionist for local service businesses. The product exists and is demo-ready across 7 verticals. The challenge now is client acquisition, pricing optimisation, and building the surrounding revenue tiers (training, consulting, SaaS extensions) that turn it into a scalable business.

---

## Revenue Tiers

### Tier 1 — Cash Flow (Months 1–3)
Near-term income while longer-term products are built.

- R1. **Voice AI Service (AllConvos.ai)** — Live productized AI receptionist for service businesses. Handles inbound calls, lead qualification, and appointment booking 24/7.
  - Pricing: $299/month + one-time onboarding fee (consider raising setup to $500-$1,000 given manual onboarding effort)
  - Target: 20–30 clients for sustainable monthly income
  - Stack: GoHighLevel (workflows + snapshots + sub-accounts) + Twilio (number provisioning) + Voice AI agent
  - Constraint: Avoid bespoke configurations — only take clients that fit one of the 7 existing verticals

- R1a. **Automated Client Onboarding** *(Priority feature build — see Section below)*
  - Current state: fully manual — gathering business details, provisioning Twilio number, setting up GHL sub-account, creating voice agent, building agent prompt, connecting everything
  - Target state: near-zero manual effort — client self-serves through an intake flow that triggers automated provisioning
  - Impact: unlocks scale (currently onboarding is the bottleneck), reduces delivery cost, enables Philippines handoff later

- R2. **AI Consulting (Done-With-You)** — Help businesses implement Claude/AI tools. Natural upsell from training. Keep engagements short and outcome-specific, not open-ended retainers.
  - Pricing: TBD (day rate or fixed-scope package)
  - Constraint: Only take engagements that produce a repeatable pattern — do not drift into custom dev

---

## Priority Feature: Automated Client Onboarding

### Current Manual Process (to be automated)
1. Gather business profile details from client
2. Create GHL sub-account for the client
3. Apply GHL snapshot (pre-built workflow template for their vertical)
4. Provision a Twilio phone number and attach to the sub-account
5. Create the voice agent
6. Build/generate the agent prompt (customised to their business)
7. Connect all components together and test

### Target State
Client completes an intake form → automated pipeline runs steps 2–7 with zero or near-zero manual intervention. Agent is live and the client receives login/confirmation within minutes.

### Automation Requirements
- OB1. **Intake form** — captures business name, vertical, location, hours, services, key FAQs, and preferred number area code
- OB2. **GHL sub-account provisioning** — auto-create sub-account via GHL API on form submission
- OB3. **Snapshot deployment** — auto-apply the correct vertical snapshot based on business type selected in intake
- OB4. **Twilio number provisioning** — auto-purchase and configure a number via Twilio API based on area code preference
- OB5. **Voice agent creation** — auto-create agent via voice platform API (Vapi or equivalent)
- OB6. **Prompt generation** — use LLM (Claude) to generate a business-specific agent prompt from intake form data, using vertical template as base
- OB7. **System assembly** — connect Twilio number → GHL workflow → voice agent → calendar integration
- OB8. **Client notification** — send welcome email/SMS with login credentials, agent number, and next steps

### Scope Boundaries
- Out of scope: custom integrations beyond GHL + Twilio + calendar
- Out of scope: real-time human review step (may add as optional QA gate later)
- The intake form should be the only thing a client touches

### Key Unknowns (Deferred to Planning)
- [OB3][Technical] Does GHL's API support programmatic snapshot deployment, or is this a manual step?
- [OB5][Technical] ✓ Voice platform: **Vapi** recommended. Full REST API for programmatic agent/assistant creation. Retell as fallback. GHL native excluded — insufficient API depth for automated provisioning.
- [OB6][Technical] Prompt generation via Claude API — what's the template structure per vertical?
- [OB7][Technical] What's the correct sequencing and error handling if any step fails mid-pipeline?

---

### Tier 2 — Authority & Lead Generation (Months 1–6)
Runs in parallel with Tier 1. Builds pipeline and positions Giles/Christian as the local AI experts.

- R3. **AI Training Workshops** — Full-day local sessions for small business owners who have heard about Claude/AI but don't know where to start.
  - Pricing: $200/person (full day)
  - Format: Claude 101 (what it is), 102 (practical use), 103 (business automation)
  - Function: Lead generation funnel into voice AI service and consulting

- R4. **Run Ads for Voice AI Consulting** — Paid acquisition targeting service business owners. Drive to workshop → consulting → retainer pipeline.

### Tier 3 — Scalable Products (Months 3–12)
Built from patterns validated by Tier 1 client work. Do not build speculatively.

- R5. **Voice-First Scheduling Layer** — NOT a standalone scheduler. A voice AI intake layer that routes appointments into the client's existing tool (Jobber, GoHighLevel, Google Calendar). Differentiates from Jobber by being voice-native and AI-driven, not replacing it.
  - Trigger: Extract only after 3+ clients use the pattern in production
  - Pricing model: Add-on to voice AI retainer, or standalone $X/month per location

- R6. **AI OS / Daily Synopsis** — Aggregates email, calendar, and social media data into a daily briefing. Targets small business owners (5–20 people) without IT resources.
  - Trigger: Validate with internal use first, then offer to consulting clients before productizing
  - Integration targets: Gmail, Google Calendar, social platforms

### Tier 4 — Future Exploration (12+ months)
Low-priority, monitor and revisit.

- R7. **AI/Crypto Intersection** — Bot-to-bot transactions via blockchain. Permissionless automated financial flows. Track market development — do not invest build time until utility is clearer.
- R8. **American Business Opportunity** — Lisa's family connection. Reconnect and assess fit with voice AI service offering.

---

## Success Criteria

- 10 voice AI clients signed within 90 days (Tier 1 validation)
- First workshop run with 5+ attendees within 60 days
- Philippines delivery team operational and handling at least one client by month 2
- Geographic scheduler extracted as standalone product by month 6 (if client pattern validated)
- Monthly recurring revenue covers operational costs (Philippines team + tooling) within 90 days

---

## Scope Boundaries

- **No bespoke custom builds** — every engagement must convert to a repeatable pattern or be declined
- **No speculative SaaS** — Tier 3 products only get built after Tier 1 client validation
- **No open-ended consulting retainers** — consulting is scoped to fixed outcomes, not hourly time
- **AI/Crypto is watch-only** for now — not an active build priority

---

## Key Decisions

- **Funnel architecture over parallel businesses**: All four income streams feed each other — training → consulting → voice AI service → SaaS. This prevents context-switching and keeps positioning coherent.
- **Outsource delivery, not strategy**: Philippines team handles implementation; Giles/Christian own product design, sales, and client relationships.
- **Productize before scaling**: The discipline is to resist custom work. If a client need can't be served by the standard product, it's a signal to improve the product, not create a custom engagement.

---

## Market Research Findings (March 2026)

### Voice AI Service
- **Demand is real**: 9 active Reddit threads in the last 30 days on voice AI for small businesses. Top ROI use case: "missed call = lost revenue" — consistently cited across r/gohighlevel and r/AiForSmallBusiness
- **Pricing validation**: Blake Basuel's "Building a Client's $2,500 AI Voice Agent LIVE" (83K views) confirms ~$2.5K setup is market rate. Your $2K is the floor — consider raising to $2.5K
- **Stack validation**: GoHighLevel + Vapi/n8n is the dominant no-code stack being taught (Nate Herk: 87K views). Retell AI and Vapi are the main platform competitors at $99-$349/month for raw access
- **Trades niche confirmed**: Brendan Jowett has a dedicated video "How To Build An AI Receptionist For A Trades Business" (33K views) — your exact niche has proven audience interest
- **Competition risk**: Liam Ottley has 3+ videos (43K-82K views) on "how to build a voice AI agency in 2026" — the space is filling with agency builders. Vertical specialisation (trades in AU/US) is the moat

### AI Consulting & Training
- **Market is growing 25.5% annually** through 2035 (per web research). AI implementation agencies quoted at $20-50K/month by Dan Martell (475K views)
- **Workshop pricing opportunity**: Market shows AI Readiness Assessments command $2K-$8K. Your $200/day workshop is a lead-gen tool, not a revenue line. Upsell path: workshop → $2K-$8K scoped implementation engagement
- **Shift to enablement**: 73% of clients now prefer value-based pricing tied to measurable outcomes. "Teach you to do it yourself" is the 2026 model — validates the Claude 101/102/103 course concept
- **Certifications have pull**: "Top 7 AI Certifications That Can Make You Rich In 2026" (184K views) — suggests credentialing/certification content could drive course sales

### Geographic Scheduling
- **Market is CROWDED**: Jobber dominates SMB field service (landscapers, cleaners, trades). Salesforce FSM, Dynamics 365, and SAP cover enterprise. Do NOT build a standalone scheduler
- **Reframe the product**: The opportunity is a **voice-first scheduling layer** — AI voice intake that routes to the client's existing calendar/CRM (Jobber, GoHighLevel) — not a new scheduling tool

## Dependencies / Assumptions

- Philippines team can be contracted at ~$1,500/month and onboarded within 30 days
- Go High Level CRM and Assistable stack is sufficient for the standard voice AI product without custom integration work
- Workshop price of $200/day is intentionally low as lead-gen; revenue comes from upsell to $2K-$8K implementation packages
- American opportunity (Lisa's family) is warm enough to reactivate

---

## Outstanding Questions

### Resolve Before Planning

*All blocking questions resolved.*

### Deferred to Planning

- **[R1][Technical]** What is the exact workflow engine being used at $500/month, and is there a lower-cost path via direct integrations?
- **[R5][Needs research]** What SaaS tools already exist for geographic scheduling in the trades/landscaping vertical? Need to validate differentiation before building.
- **[R6][Needs research]** What data permissions and OAuth flows are required for Gmail + Google Calendar aggregation? Privacy/compliance implications for small business clients.

---

## Next Steps

Two parallel planning tracks — run `/ce:plan` separately for each:

**Track A — Product Build:**
```
/ce:plan using docs/brainstorms/2026-03-25-ai-business-opportunities-requirements.md

Focus: Automated Client Onboarding (OB1–OB8)
Stack: GoHighLevel API + Twilio API + Voice platform API (Vapi/Retell TBC) + Claude API for prompt generation
Existing product: allconvos.ai — GHL workflows + snapshots + Twilio
Goal: near-zero manual onboarding — client intake form triggers full automated provisioning pipeline
```

**Track B — Go-To-Market:**
```
/ce:plan using docs/brainstorms/2026-03-25-ai-business-opportunities-requirements.md

Focus: Client acquisition for AllConvos.ai
Current state: 2 paying clients at $2,000 setup + $400/month recurring
Goal: grow to 20-30 clients — plan paid ads, outbound sales process, and demo-to-close conversion
Markets: Australia + US simultaneously
Audience: zero — need to build from scratch
Pricing note: website shows $299/month — actual client pricing is $400/month. Resolve this discrepancy.
```

### Resolved Decisions
- **[R1] Market**: Both Australia and US simultaneously. Ads and outreach in both markets from day one; Philippines team timezone suits US client hours.
- **[R3] Workshop format**: In-person first to validate and refine content, then productize as an online course.
