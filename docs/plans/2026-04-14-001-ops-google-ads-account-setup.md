---
title: "ops: Google Ads account setup — W3 launch prerequisite"
type: ops
status: active
date: 2026-04-14
parent: 2026-03-31-001-feat-gtm-acceleration-revenue-growth-plan.md
parent_section: W3 / W1.1
---

# Google Ads account setup — W3 launch prerequisite

## What this is

A self-contained, resumable checklist for creating the Parnell Systems Google Ads account and wiring conversion tracking up to the point where the React app needs `gtag.js` + a `trackConversion()` helper. Once this is done, Claude picks up W1.1 and lands the code work; then W3 campaigns can go live.

This is part of the **W3 Meta → Google Ads pivot** (2026-04-13). For context read:
- Master plan: `docs/plans/2026-03-31-001-feat-gtm-acceleration-revenue-growth-plan.md` (W1.1, W3)
- Decision record: `ai-os/decisions/2026-04-13-001-google-ads-over-meta-for-paid-acquisition.md`

## Prerequisites (before you start)

- [ ] Signed in to Chrome as `giles@parnellsystems.com` (the Workspace account, **not** `gilesparnell@gmail.com`). Confirmed Administrator on GA4 property `G-W5KLWM7QB0` on 2026-04-13.
- [ ] Dedicated Chrome profile for this account, to avoid mid-setup identity confusion.
- [ ] Phone handy for Google's SMS verification step.
- [ ] Credit card + ABN (`39 171 610 698`) ready for billing step.
- [ ] GST status: registered (completed 2026-04-01).

## Step 1 — Start the onboarding flow

- [ ] Go to https://ads.google.com
- [ ] Confirm top-right avatar shows `giles@parnellsystems.com` before clicking anything
- [ ] Click **Start now**

Google's 2024+ onboarding forces a guided-campaign flow. The old "Switch to Expert Mode" link is no longer prominent. Don't panic — there's an escape hatch at Step 4 (see below).

The sidebar will show 5 forced steps:
1. Add business information
2. Review business info
3. Connect accounts ← **GA4 link happens here, critical**
4. Create your campaign ← **skip-campaign link lives here**
5. Enter payment details

## Step 2 — "Describe your business"

**Business description** (one short, accurate sentence):

> AI voice receptionist for Australian small businesses — answers calls 24/7, books appointments, and sends SMS confirmations so you never miss a customer.

**Products/services tags** — Google auto-populates wrong categories by scraping the site. **Clear the wrong ones** (`Business & Productivity Software`, `Business Intelligence Software`, `Technology Consulting` — all wrong), then add:
- `AI voice agent`
- `AI receptionist`
- `Virtual receptionist`
- `Call answering service`

`Telephony` and `VOIP` can stay if auto-added — adjacent enough.

**Image suggestions web pages** — leave whatever, ignored anyway.

## Step 3 — "Review business info"

- [ ] **Business name:** `Parnell Systems` — matches ABN, Stripe, bank
- [ ] **Website:** your live site (`voice.parnellsystems.com` or current production URL)
- [ ] **Country:** Australia
- [ ] **Time zone:** `(GMT+10:00) Sydney` — **IMMUTABLE, get this right**
- [ ] **Currency:** `AUD` — **IMMUTABLE, get this right**

## Step 4 — "Connect accounts" (do not skip)

- [ ] GA4: Google should auto-detect your Admin access to `G-W5KLWM7QB0` ("Parnell Systems Website") and offer one-click link. **Accept it.** If not auto-detected, use manual link, paste `G-W5KLWM7QB0`, confirm.
- [ ] Google Business Profile: skip if not yet created. Can link later.
- [ ] YouTube channel: skip for now. Link later when the unlisted VSL channel is created (W2).

## Step 5 — "Create your campaign" — THE ESCAPE HATCH

Look carefully at **top and bottom of the screen** for one of these tiny links:
- "Skip campaign creation"
- "I'd like to create a campaign later"
- "Experienced with Google Ads? Switch to Expert Mode"
- "Create an account without a campaign"

### Path A — Escape hatch exists (preferred)

- [ ] Click the skip link
- [ ] Drop into the real Google Ads UI with a proper empty account
- [ ] Jump to Step 6 (billing) via Tools → Billing

### Path B — No escape hatch (dummy campaign fallback)

Create the minimum campaign Google will accept, then pause it immediately.

- [ ] **Campaign goal:** Website traffic (not Leads — avoids needing conversion data you don't have yet)
- [ ] **Campaign type:** Search
- [ ] **Campaign name:** `ZZ — onboarding placeholder — DO NOT RUN`
- [ ] **Budget:** `$1 AUD/day` (Google's minimum)
- [ ] **Bid strategy:** Manual CPC (simplest)
- [ ] **Locations:** Australia
- [ ] **Language:** English
- [ ] **Audience:** skip / default
- [ ] **Keywords:** one keyword, `[parnell systems]` (exact match, your own brand — won't trigger)
- [ ] **Ad:**
  - Final URL: your live site
  - Headline 1: `Parnell Systems`
  - Headline 2: `AI Voice Receptionists AU`
  - Headline 3: `Never Miss A Customer Call`
  - Description 1: `Australian AI voice receptionists. Answer calls 24/7, book appointments, never miss a customer.`
- [ ] Continue through to billing

**Immediately after the account is created:**
- [ ] Go to **Campaigns** page
- [ ] Find `ZZ — onboarding placeholder`
- [ ] **Pause it** (don't delete — deletion triggers a different flow)
- [ ] Rename to `ZZ — PAUSED — placeholder from onboarding`

## Step 6 — Billing

Path: Tools (wrench icon, top right) → **Billing** → Summary → Add payment method

- [ ] Business name: `Parnell Systems`
- [ ] ABN: `39 171 610 698`
- [ ] GST registered: **Yes** (registered 2026-04-01)
- [ ] Payment method: credit card
- [ ] Billing threshold: accept Google's default (~$50 AUD)

**Nothing spends until a campaign is active and unpaused.** Safe to set up billing while the dummy campaign is paused.

## Step 7 — Create conversion actions

Path: Tools → Measurement → **Conversions** → New conversion action → **Website**

Enter your domain, scan (or skip scan), then click **"Add a conversion action manually"** and create all four:

| Name | Category | Value | Count | Click-through window | Include in "Conversions" (primary?) |
|---|---|---|---|---|---|
| `Lead` | Submit lead form | Don't use a value | One | 30 days | **Yes (Primary)** |
| `Book Demo` | Book appointment | Don't use a value | One | 30 days | **Yes (Primary)** |
| `View Pricing` | Page view | Don't use a value | Every | 1 day | **No (Secondary)** |
| `Start Demo` | Page view | Don't use a value | Every | 1 day | **No (Secondary)** |

**After creating each**, Google gives you a **conversion ID + label** (format `AW-XXXXXXXXXX/abc_DEF123`). Copy all four into a note.

- [ ] `Lead` created — label: `_______________`
- [ ] `Book Demo` created — label: `_______________`
- [ ] `View Pricing` created — label: `_______________`
- [ ] `Start Demo` created — label: `_______________`
- [ ] Global conversion ID: `AW-___________`

## Step 8 — Enhanced conversions

Path: Same Conversions page → **Enhanced conversions** tab → Turn on

- [ ] Method: **Google tag** (not API)
- [ ] URL: your live site
- [ ] Agree to terms

This lets hashed email/phone from the form submit flow back to Google so offline and cross-session conversions still get credit.

## Step 9 — Account-level negative keyword list

Path: Tools → Shared library → **Negative keyword lists** → Create list

- [ ] List name: `account-wide-negatives`
- [ ] Match type: Broad match
- [ ] Paste:

```
free
jobs
job
career
careers
salary
hiring
hire
diy
tutorial
course
udemy
meaning
definition
open source
github
python
```

- [ ] Save — **but don't apply to campaigns yet** (no real campaigns exist). Will apply when Search Campaigns 1 + 2 are created.

## Definition of done

When every box below is ticked, the account is ready for Claude to wire `gtag.js`:

- [ ] Account created under `giles@parnellsystems.com`, time zone = Sydney, currency = AUD
- [ ] Billing set up with ABN + GST
- [ ] GA4 property `G-W5KLWM7QB0` linked (status: Linked)
- [ ] 4 conversion actions created (Lead, Book Demo, View Pricing, Start Demo)
- [ ] Conversion ID + 4 labels recorded
- [ ] Enhanced conversions turned on
- [ ] Negative keyword list created
- [ ] Any dummy campaign **paused**

## What to send back to Claude in the next session

Paste these four things into the next conversation so W1.1 code work can start:

1. **Google Ads conversion ID** — `AW-XXXXXXXXXX`
2. **The four conversion labels** — one per action
3. **GA4 link confirmation** — a screenshot or text "GA4 linked" from Tools → Setup → Linked accounts
4. **Live site URL** — confirm `voice.parnellsystems.com` or whichever is current

## What NOT to do (yet)

- ❌ **Do NOT unpause the dummy campaign.** It has no useful targeting and will burn budget on irrelevant clicks.
- ❌ **Do NOT create Search Campaigns 1 or 2 yet.** Those go live in Week 2 of the master plan, after Claude has wired `gtag.js` + `trackConversion()` and verified the tag fires correctly in the Tag Assistant extension.
- ❌ **Do NOT apply for "Verified Advertiser" status yet** if Google prompts you. It requires documentation (ABN letter, ACN if applicable) and can be done once the account has history. Google will nag but not block.
- ❌ **Do NOT enable Performance Max as an experimental campaign now.** PMax is deferred to week 4+ per the master plan — it cannibalises Search attribution during learning phase.
- ❌ **Do NOT link Stripe → Google Ads.** Google offers this. Skip — Stripe is the source of truth for revenue, not Google Ads.

## Resume points (if you stop mid-setup)

This doc is designed so you can pause at any step boundary and resume in a fresh session.

| If you stopped after… | Resume by… |
|---|---|
| Step 1 (started onboarding) | Re-open `ads.google.com`, Google remembers onboarding state |
| Step 5 (escape hatch / dummy campaign) | Account exists. Sign in, go to Tools → Billing, continue |
| Step 6 (billing done) | Tools → Measurement → Conversions, jump to Step 7 |
| Step 7 (some conversions created) | Tools → Measurement → Conversions, create the missing ones |
| Step 8 (enhanced conversions on) | Tools → Shared library → Negative keyword lists, create the list |
| Step 9 (list created) | You're done — send Claude the 4 things from "What to send back" |

## Troubleshooting

**"Account is suspended" message during onboarding** — new AU accounts sometimes get flagged for identity verification. Contact Google Ads support via the `?` icon in the top-right. Have ABN + business details ready. Typically cleared within 24–48h.

**GA4 auto-link doesn't appear in Step 4** — most common cause is being signed into the wrong Google account. Confirm top-right avatar = `giles@parnellsystems.com`. If still missing, fall back to manual link: paste `G-W5KLWM7QB0`, confirm.

**Currency / time zone wrong after account creation** — these are immutable. You have to close the account and create a new one. Do not proceed past Step 3 until both are correct.

**Conversion action won't save** — usually a missing required field (category is the most commonly missed one). Scroll to top of the form, red error hints show where.

---

## Links

- Master plan W1.1 + W3: `../plans/2026-03-31-001-feat-gtm-acceleration-revenue-growth-plan.md`
- Pivot decision record: `../../ai-os/decisions/2026-04-13-001-google-ads-over-meta-for-paid-acquisition.md`
- Google Ads Help — Expert Mode escape: https://support.google.com/google-ads/answer/9028765
- Google Ads Help — Enhanced Conversions: https://support.google.com/google-ads/answer/9888656
