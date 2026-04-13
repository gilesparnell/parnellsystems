---
id: 2026-04-13-001
title: Google Ads over Meta for Parnell Systems paid acquisition
status: accepted
date: 2026-04-13
deciders: Giles Parnell
supersedes: key-decision in 2026-03-31-001-feat-gtm-acceleration-revenue-growth-plan.md ("Meta Ads Manager over GHL Ads Manager")
---

# Google Ads over Meta for Parnell Systems paid acquisition

## Context

The GTM Acceleration & Revenue Growth Master Plan (2026-03-31) scoped W3 as the paid-media workstream and chose Meta (Facebook + Instagram) as the primary channel. The plan assumed Meta interest-based targeting could deliver < $40 AUD CPL for niche SMB voice-AI offers, driven by HeyGen VSL creative and standard lead-event optimisation via the Meta Pixel.

Between 2026-03-31 and 2026-04-13, the Parnell Systems Meta Business Manager was suspended without a documented reason. Giles spent several days working through Meta support channels with no resolution path. New Business Manager creation was repeatedly blocked due to the existing suspension state. The W3 workstream was flagged as "Blocked" on the plan-progress diagram with no ETA.

During this window two other things changed:

1. **Google Ads was not yet set up at all.** There was no competing work blocking the pivot.
2. **The brand target audience became clearer.** The offer is a high-ticket B2B SaaS ($399–$799/mo + $2,000 setup fee) targeting Australian SMB owners who are actively losing revenue to missed calls. That is a search-intent profile, not an interrupt-then-qualify profile.

## Decision

**Switch W3 paid acquisition to Google Ads (Search + YouTube) as the primary paid channel. Defer Meta indefinitely; revisit only if BM access is restored as an unplanned bonus.**

The new W3 structure is:

- **Search Campaign 1** — Niche keywords across 7 ad groups (tradies, gyms, salons, clinics, automotive, pools, solar) at $50/day pooled
- **Search Campaign 2** — "Missed call" high-intent problem terms at $20/day, landing on homepage
- **Campaign 3** — YouTube remarketing (skippable in-stream + in-feed) at $15/day, starts once W2 VSLs are produced
- **Performance Max** — Deferred to week 4+, test-only, walled off from brand and from Campaign 1 keywords

Tracking shifts from Meta Pixel to the Google Ads global site tag (`gtag.js`), installed alongside the existing GA4 tag. Conversion actions: `Lead`, `Book Demo`, `View Pricing`, `Start Demo`. Enhanced conversions enabled for hashed email/phone passthrough.

## Rationale

**Why Google is a better fit for this specific offer:**

1. **Intent matches the product.** Someone searching "AI receptionist for plumbers Australia" has already diagnosed the problem and is shopping. That is a better lead quality profile than Meta's interest-based demographic targeting for a $399–$799/mo SaaS with a $2,000 setup fee.
2. **No Business Manager dependency.** Google Ads accounts are created off a standard Google account + billing profile. No verification wait, no new-account suspension risk tied to an appeals process that does not have a contact human on the other end.
3. **YouTube reuses the W2 VSLs.** HeyGen video creative (9:16, 16:9) can run as skippable in-stream or in-feed without rework. The creative spend is not wasted by the pivot.
4. **Privacy / compliance work is not wasted.** The /privacy and /terms pages (B2 blocker) were scoped for Meta ad approval but are also required by Google Ads personalised advertising policy and the AU Privacy Act. Same cost, still required.
5. **Brand search protection.** Branded Search Ads let Parnell Systems defend its own name cheaply — something Meta cannot do at all. Minor but structural.

**Why not wait for Meta to resolve:**

- Meta support has no SLA on Business Manager suspension appeals. Giles spent multi-day effort for no signal, let alone resolution.
- W3 being Blocked held the entire revenue side of the plan on an external dependency that could not be pressured.
- The cost of pivoting is a one-time W3 rewrite (this ADR, plan edits, diagram update). The cost of waiting is ongoing revenue delay of unknown duration.
- If Meta is resolved later, the channels are additive — Google does not preclude running Meta in parallel.

**Why not Performance Max from day one:**

PMax is a black box during the learning phase and cannibalises Search attribution. Without a stable CPA benchmark from Search to anchor PMax against, the experiment is uninterpretable. PMax is scoped for week 4+ after Search has 30+ conversions on record.

## Consequences

**Positive:**
- W3 unblocked immediately. GTM roadmap can proceed without waiting on Meta support.
- Higher lead quality expected from intent-driven search matching, especially on the "Business Tier" and "Professional Tier" prospects who are already shopping.
- Eliminates a risk category (Meta policy rejection / ad account restriction) that was flagged as Medium-High in the original plan.

**Negative / trade-offs:**
- **Budget is higher on Google.** AU Search CPCs for the target keywords are $4–$12; $50/day on Search buys 5–12 clicks vs $15/day on Meta buying 25+ impressions. W3.4 budget model updated from ~$35–50/day testing to ~$70/day testing.
- **Expected CPL is higher on Search initially.** The plan now targets < $70 AUD CPL by week 4 and < $50 CPL by week 8, vs the original < $40 CPL for Meta. This reflects the AU Search landscape, not channel failure.
- **Some niches may trigger Google Ads policy review.** Clinics (healthcare-adjacent) and solar (finance-adjacent) are the risky ones. Launch plan now starts with 5 non-regulated niches (tradies, gyms, salons, automotive, pools) and layers in clinics + solar once the account has clean history.
- **No lookalike audiences.** Meta's custom audiences + lookalikes were a core retargeting asset. Google's equivalent is custom-intent audiences + customer match, which are weaker for a small customer list (currently 2 customers).

**Operational:**
- Instrumentation shifts: `gtag.js` replaces Meta Pixel in W1.1. Both can coexist if Meta ever returns, so the work is additive, not subtractive.
- Monitoring dashboards simplified: Meta Ads Manager + Meta Pixel Events rows drop from the daily / weekly routines in W1.5. Google Ads becomes the single paid dashboard to watch.
- VSL creative work (W2.6) re-targeted: 9:16 for YouTube Shorts + PMax vertical, 16:9 for YouTube in-stream. 1:1 (square) format becomes lower-priority since it was Meta-Feed-specific.

## Alternatives considered

1. **Keep waiting on Meta.** Rejected — multi-day effort produced no resolution signal, and the opportunity cost of a Blocked W3 is higher than the cost of rewriting it.
2. **Run ads via the GHL Ads Manager wrapper.** Rejected — GHL's wrapper lags native Google Ads features, adds a debugging layer, and does not solve the Meta access problem anyway.
3. **Skip paid acquisition entirely, go outbound-only (W6).** Rejected — W6 is 2–3 weeks of build effort per the existing plan, and outbound has its own compliance complexity (W6.5). Paid inbound is a faster path to learning signal.
4. **LinkedIn Ads.** Considered briefly — AU LinkedIn CPCs are $8–$25 for SMB-owner-level targeting, making the budget math worse than Google Search for the same intent quality. Deferred as a potential Phase 2 channel once Google is stable.

## Footnote on Meta

Meta is not cancelled, only deferred. The 2026-03-31 plan has a footnote section at the bottom preserving the original Meta campaign structure, budget model, and Pixel event list so the plan can be re-activated with minimal rework if BM access is restored. VSL creative (9:16 + 1:1) from W2.6 is usable on Meta without modification.

If Meta is ever restored and Google Ads is performing well, the two channels run in parallel, not in place of each other.
