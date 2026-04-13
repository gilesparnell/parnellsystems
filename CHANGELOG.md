# Changelog

All notable changes to parnellsystems.com (website + docs). Bumped on every PR that ships to production.

## Conventions

- **patch** (`0.0.x`) — bug fixes, copy tweaks, dependency bumps
- **minor** (`0.x.0`) — new features, new pages, new tracked events, plan/strategy pivots
- **major** (`x.0.0`) — breaking changes

Each entry is split into:

- **What's new** — customer / reader-facing outcomes
- **Under the hood** — technical detail (rendered dimmer in-app if a changelog page exists)

---

## [0.1.0] — 2026-04-13

### What's new

- Paid media strategy now runs on Google Ads (Search + YouTube) instead of Meta. The GTM plan and the live plan-progress page reflect the new workstream shape — W3 is no longer blocked.
- Plan-progress diagram headline updated to show the pivot; W3 card recoloured from blocked → not-started with the new Google Ads task list.

### Under the hood

- Rewrote W3 section of `docs/plans/2026-03-31-001-feat-gtm-acceleration-revenue-growth-plan.md` for Google Ads: Search Campaign 1 (niche keywords, 7 ad groups), Search Campaign 2 (missed-call high-intent), YouTube remarketing once W2 VSLs land, Performance Max deferred to week 4+
- Replaced W1.1 "Facebook Pixel Installation" with "Google Ads Conversion Tracking" — `gtag.js` global site tag alongside GA4, enhanced conversions enabled, 4 conversion actions: `Lead`, `Book Demo`, `View Pricing`, `Start Demo`
- Updated critical blockers: B2 rationale moved from Meta ad approval → Google Ads policy + AU Privacy Act; B6 severity Medium → Low (OG tags less critical without Meta share rejection)
- Monitoring & dashboards table drops Meta Ads Manager + Meta Pixel Events rows, adds Google Ads + Google Ads Conversions rows
- W2.6 creative formats retargeted: 9:16 for YouTube Shorts + PMax, 16:9 for YouTube in-stream, upload to dedicated unlisted YouTube channel owned by the Google Ads account
- Risks table swaps "Meta ad account rejection" (Medium-High) for "Google Ads policy disapproval on regulated niches" (Medium) + "New Google Ads account Limited advertiser status" (Medium)
- Success metrics CPL targets updated: Google Search < $70/$50, YouTube remarketing < $55/$40 (was Meta < $50/$35)
- Key Decisions section supersedes "Meta Ads Manager over GHL" with "Google Ads over Meta (2026-04-13 pivot)" pointing at the new ADR
- Meta preserved as a footnote section at the bottom of the plan with original campaign structure + reuse-vs-rebuild notes for future restore
- Added ADR `ai-os/decisions/2026-04-13-001-google-ads-over-meta-for-paid-acquisition.md` recording context, decision, alternatives, and consequences
- Updated `docs/diagrams/plan-progress.html`: W3 card rose → slate, overall stats 1 blocked → 0 blocked, 48% → 46%, "Top Immediate Next" item 1 reframed from [BLOCKER] to [PIVOT]
- First tracked release per the project versioning standard — previously untracked at 0.0.0
