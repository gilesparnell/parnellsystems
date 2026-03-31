---
title: "ZingCall Brand Migration — AllConvos.ai → voice.parnellsystems.com"
type: feat
status: active
date: 2026-03-25
deepened: 2026-03-26
origin: docs/brainstorms/2026-03-25-brand-architecture-requirements.md
---

# ZingCall Brand Migration — AllConvos.ai → voice.parnellsystems.com

## Enhancement Summary

**Deepened on:** 2026-03-26
**Research agents used:** TypeScript review, race condition analysis, security audit, architecture review, performance analysis, deployment verification, Vapi best practices, design system, GHL/Twilio migration research, agent-native patterns, SpecFlow analysis

### Critical Bugs Found (Fix Before Writing Code)

1. **`process.env` → `import.meta.env`** in `verticals.ts` — Vite does not expose `process.env` in the browser. All `VITE_*` vars must use `import.meta.env`. This is a silent failure — calls will receive `undefined` as `assistantId`.
2. **`vapi.setMaxDuration(180)` does not exist** in the Vapi Web SDK. Use a server-side `maxDurationSeconds: 180` on the assistant object + a `setTimeout` fallback.
3. **`removeAllListeners()` is a wrecking ball** — if multiple widgets are mounted (e.g., demo index page), any one component's cleanup silently removes all other components' listeners. Use named functions with `vapi.off()` per listener.
4. **iOS Safari: `getUserMedia` must be the first `await`** in the click handler. Any prior `await` (including dynamic SDK import) causes iOS to reject the permission request with `NotAllowedError`.
5. **Double-click race condition** — `vapi.start()` returns `null` silently if already started. Add `isStarting` ref guard.

### Key New Architecture Decisions

- **Directory structure:** `src/domains/zingcall/` + `src/domains/parnellsystems/` for future extraction safety
- **Router:** Centralise hostname branch as `isVoiceDomain` constant in `src/router/AppRouter.tsx` — never scatter hostname checks in components
- **SEO:** Install `react-helmet-async`; add Vercel Edge Middleware for OG tag injection (social crawlers don't execute JS)
- **Vapi SDK:** Lazy-load `@vapi-ai/web` on button click (not at module level) — saves 100–150 KB from initial parse budget
- **Route splitting:** Use `createBrowserRouter` + `lazy` property, not `React.lazy()`

### GHL Snapshot Update (Confirmed via Research)

**GHL Voice AI configuration DOES transfer with snapshots** (confirmed in GHL changelog 2025). What still requires manual setup: phone number assignment, post-call notification settings, third-party integration re-authentication (Stripe, Google, etc.).

### New Capabilities to Add

- `/api/health/demos` — health check endpoint for all 7 Vapi assistants (enables automated post-deploy verification)
- `/api/demo-token` — rate-limiting token endpoint (Upstash Redis, prevents demo abuse)
- Outbound "call me back" CTA — Vapi `POST /call/phone` triggered from browser, better mobile experience
- `src/scripts/check-demos.ts` — CLI script to verify all 7 assistant IDs before launch

### Resolved Issues (C1–C3)

- **C1 — Lead capture: GHL calendar embed.** Post-demo CTA and "Get ZingCall" buttons embed a GHL calendar booking widget. Requires a "ZingCall Sales" sub-account in Giles's sole GHL agency with a sales calendar configured. Created during Phase 2.
- **C2 — Existing client numbers: Port to sole account.** Both paying clients have numbers on the shared Twilio account. Open a Twilio Support ticket early in Phase 3 to transfer these numbers to Giles's sole Twilio account (2–5 day turnaround). Do NOT release any shared account numbers until the port is confirmed complete.
- **C3 — Setup fee: $1,000.** Pricing page shows: **$400/month + $1,000 one-time setup fee.** Below market rate ($2,500 benchmark) but covers setup costs and matches Giles's positioning as accessible premium.

---

## Overview

Migrate the voice AI product (7 industry demos, GHL accounts, Twilio numbers) from the jointly-owned AllConvos.ai infrastructure into Giles's sole-owned brand stack. The product relaunches as **ZingCall by Parnell Systems** at `voice.parnellsystems.com`. ParnellSystems.com is updated as the umbrella brand with ZingCall as its flagship product.

See origin: `docs/brainstorms/2026-03-25-brand-architecture-requirements.md`

---

## Problem Statement / Motivation

AllConvos.ai was built jointly with a former business partner. All infrastructure — GHL sub-accounts, Twilio numbers, the website — is on shared/jointly managed accounts. Giles has started ParnellSystems.com as his independent brand. The voice AI product needs to be fully migrated to sole-owned infrastructure before any new sales activity begins, to prevent client confusion and maintain operational independence.

---

## Architecture

```
parnellsystems.com                  (existing Vercel project — updated)
└── voice.parnellsystems.com        (new Vercel deployment alias — ZingCall)
    ├── /                           (ZingCall homepage — $400/month pricing)
    ├── /demos                      (demo index)
    ├── /demos/tradies
    ├── /demos/gyms
    ├── /demos/clinics
    ├── /demos/salons
    ├── /demos/solar
    ├── /demos/automotive
    └── /demos/pool-maintenance
```

**Tech stack** (same as parnellsystems.com — same repo):
- Vite + React 18 + TypeScript
- shadcn/ui + Tailwind CSS + Framer Motion
- React Router v6
- Deployed: Vercel (team: `gilesparnell-9253s-projects`)
- Voice demos: **Vapi Web SDK** (`@vapi-ai/web`) — browser-based WebRTC calling
- Backend: GoHighLevel (GHL) sub-accounts + Twilio phone numbers

### Directory Structure (Recommended for future ZingCall extraction)

```
src/
  domains/
    parnellsystems/
      pages/         ← Index, IntelligenceLayer, VoiceSMS, Training, Dashboard
      components/    ← Landing components: Navbar, HeroSection, WhatWeDoSection
      layouts/       ← ParnellSystemsLayout
    zingcall/
      pages/         ← ZingCallHome, DemoPage, DemosIndex
      components/    ← VapiDemoWidget, DemoCallStatus
      config/        ← verticals.ts
      layouts/       ← ZingCallLayout
  shared/            ← ui/, lib/, hooks/ — truly cross-domain primitives only
  router/
    AppRouter.tsx    ← Single hostname branch point
```

**Why this matters:** If ZingCall ever moves to `zingcall.ai`, `src/domains/zingcall/` becomes the new repo's source. Without this boundary you'd spend 2–3 days detangling cross-domain component coupling.

---

## Proposed Solution

Five sequential phases. Each phase is independently testable before proceeding to the next.

### Phase 1 — Subdomain Infrastructure (Day 1)
Set up `voice.parnellsystems.com` as a Vercel deployment alias on the existing `parnellsystems` project. No new repo, no new Vercel project — same codebase, new domain alias.

### Phase 2 — GHL Account Migration (Days 2–3)
Create 1 new GHL sub-account ("ParnellSystems") under Giles's sole-owned GHL agency. Migrate the existing 7 demo agents from the AllConvos.ai sub-account into this single ParnellSystems sub-account.

### Phase 3 — Phone Number Assignment (Day 3)
Assign the 1 existing phone number to the ParnellSystems GHL sub-account. All 7 demo agents share this single number for now; additional numbers can be provisioned later per-vertical if needed.

### Phase 4 — ZingCall Website Build (Days 4–10)
Build the ZingCall site pages: homepage, 7 demo pages with live Vapi-powered browser calling. Migrate all AllConvos.ai content and rebrand throughout.

### Phase 5 — ParnellSystems.com Updates + Cutover (Day 11)
Update parnellsystems.com to feature ZingCall prominently. Verify zero remaining dependencies on AllConvos.ai. Coordinate decommission with former partner.

---

## Technical Approach

### Phase 1: Subdomain Setup

**Vercel alias (recommended — zero new projects):**
1. In Vercel dashboard → `parnellsystems` project → Settings → Domains
2. Add `voice.parnellsystems.com` as an additional domain alias
3. Vercel will prompt for DNS configuration

**DNS (at your registrar/Cloudflare):**
```
CNAME  voice  cname.vercel-dns.com
Proxy: OFF (DNS-only / grey cloud) — Vercel requires unproxied for SSL provisioning
TTL:   Auto (Cloudflare) or 300 seconds
```

**Verify DNS propagation:**
```bash
dig CNAME voice.parnellsystems.com @1.1.1.1
dig CNAME voice.parnellsystems.com @8.8.8.8
# Both should return cname.vercel-dns.com once propagated (typically < 60s on Cloudflare)
```

**React Router — AppRouter.tsx (correct pattern):**

```tsx
// src/router/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Single constant — evaluated once at module load, never scattered in components
const isVoiceDomain =
  typeof window !== "undefined" &&
  (window.location.hostname === "voice.parnellsystems.com" ||
   window.location.hostname === "localhost-voice") // dev escape hatch

export const router = createBrowserRouter(
  isVoiceDomain
    ? [
        // ZingCall domain tree
        {
          element: <ZingCallLayout />,
          children: [
            { path: "/", lazy: () => import("../domains/zingcall/pages/ZingCallHome") },
            { path: "/demos", lazy: () => import("../domains/zingcall/pages/DemosIndex") },
            { path: "/demos/:vertical", lazy: () => import("../domains/zingcall/pages/DemoPage") },
            { path: "*", element: <NotFound /> },
          ],
        },
      ]
    : [
        // ParnellSystems domain tree (existing routes)
        {
          element: <ParnellSystemsLayout />,
          children: [
            { path: "/", lazy: () => import("../domains/parnellsystems/pages/Index") },
            // ... existing routes
            { path: "*", element: <NotFound /> },
          ],
        },
      ]
)

export function AppRouter() {
  return <RouterProvider router={router} />
}
```

**Why `createBrowserRouter` + `lazy` instead of `React.lazy()`:** React Router's `lazy` property resolves the module during the navigation loading phase (before render), eliminating the Suspense fallback flash. Each route chunk loads only when navigated to — the Vapi SDK only enters the bundle when the user visits a demo page.

**SEO / OG Tags — install `react-helmet-async`:**

```bash
npm install react-helmet-async
```

Add `<HelmetProvider>` to app root, then add `<Helmet>` to each page:

```tsx
// src/domains/zingcall/pages/ZingCallHome.tsx
import { Helmet } from "react-helmet-async"

export function Component() {
  return (
    <>
      <Helmet>
        <title>ZingCall — AI Receptionist for Australian Businesses</title>
        <meta name="description" content="ZingCall answers every call 24/7. $400/month." />
        <meta property="og:title" content="ZingCall — AI Receptionist" />
        <meta property="og:url" content="https://voice.parnellsystems.com/" />
        <link rel="canonical" href="https://voice.parnellsystems.com/" />
      </Helmet>
      {/* page content */}
    </>
  )
}
```

> **Note:** Social media crawlers (LinkedIn, Twitter, Slack) do NOT execute JavaScript. They read only the static HTML. Add Vercel Edge Middleware to inject domain-correct OG tags server-side if social sharing of demo links is part of go-to-market.

**Files to create:**
- `src/router/AppRouter.tsx` — hostname branch + route tree
- `src/domains/zingcall/pages/ZingCallHome.tsx`
- `src/domains/zingcall/pages/DemosIndex.tsx`
- `src/domains/zingcall/pages/DemoPage.tsx`
- `src/domains/zingcall/components/VapiDemoWidget.tsx`
- `src/domains/zingcall/components/DemoCallStatus.tsx`
- `src/domains/zingcall/config/verticals.ts`
- `src/vite-env.d.ts` — environment variable type declarations
- `api/demo-token.ts` — Vercel serverless function (rate limiting)
- `api/health/demos.ts` — Vercel serverless function (health check)

---

### Phase 2: GHL Account Migration

**Decision:** Create 1 sub-account ("ParnellSystems"), migrate existing 7 demo agents from AllConvos.ai sub-account.

**Step-by-step:**
1. **Confirm sole agency ownership** — verify Giles's GHL agency has no shared access with former partner
2. **Create 1 sub-account** ("ParnellSystems") in Giles's sole-owned GHL agency — via dashboard or API
3. **Migrate demo agents:** Export/recreate the 7 existing Voice AI (AI Employee) agents from the AllConvos.ai sub-account into the ParnellSystems sub-account
   - Option A: Use GHL snapshot to capture agent configs from old sub-account, import into new
   - Option B: Manually recreate agents if snapshot doesn't cleanly transfer all 7 into a single sub-account
4. **After Phase 3:** Assign the phone number to the ParnellSystems sub-account
5. **Reconfigure** post-call notifications and any third-party integrations

**What transfers with snapshots (confirmed via GHL changelog 2025):**
- ✅ Agent prompts and configuration
- ✅ Interaction logic and workflows
- ✅ Linked workflow triggers and field mappings

**What still requires manual reconfiguration:**
- ❌ Phone number assignment
- ❌ Post-call user notification settings
- ❌ Third-party integrations (Stripe, Google, etc.)
- ❌ Custom Value data (keys transfer, values do not)

---

### Phase 3: Phone Number Assignment

**Decision:** Use 1 existing phone number for all 7 demo agents. No new numbers to purchase.

**Step-by-step:**
1. Assign the existing phone number to the ParnellSystems GHL sub-account (Settings → Phone Numbers → connect)
2. Configure GHL call routing so the correct demo agent handles each call (e.g., via IVR menu, or default to one agent for demos)
3. Verify inbound calls route correctly

> **Future option:** If per-vertical phone numbers are needed later (e.g., for tracking or dedicated lines), provision additional numbers at that point. AU local numbers cost ~AUD $3/month each.

---

### Phase 4: ZingCall Website Build

#### 4a. Vertical Configuration (`src/domains/zingcall/config/verticals.ts`)

```typescript
// CRITICAL: Use import.meta.env, NOT process.env — this is a Vite project
// process.env is not available in the browser bundle

interface VerticalConfig {
  name: string
  tagline: string
  description: string
  vapiAssistantId: string | undefined  // may be undefined if env var missing
  demoPhone: string
  color: string
  colorHex: string
}

const VERTICALS = {
  tradies: {
    name: "Tradies",
    tagline: "Never miss a job enquiry again",
    description: "Plumbers, electricians, HVAC — ZingCall answers every call.",
    vapiAssistantId: import.meta.env.VITE_VAPI_TRADIES_ID,  // ← import.meta.env, not process.env
    demoPhone: "+61 X XXXX XXXX",
    color: "blue",
    colorHex: "#1D4ED8",
  },
  gyms: {
    name: "Gyms",
    tagline: "Never miss a membership enquiry",
    description: "Fitness studios, personal trainers — ZingCall handles every call.",
    vapiAssistantId: import.meta.env.VITE_VAPI_GYMS_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "violet",
    colorHex: "#7C3AED",
  },
  clinics: {
    name: "Clinics",
    tagline: "Every patient deserves to be answered",
    description: "Medical, dental, allied health — ZingCall books appointments 24/7.",
    vapiAssistantId: import.meta.env.VITE_VAPI_CLINICS_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "blue",
    colorHex: "#0369A1",
  },
  salons: {
    name: "Salons",
    tagline: "Never miss a booking",
    description: "Hair, beauty, nails — ZingCall fills your calendar automatically.",
    vapiAssistantId: import.meta.env.VITE_VAPI_SALONS_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "rose",
    colorHex: "#9D174D",
  },
  solar: {
    name: "Solar",
    tagline: "Qualify every inbound lead",
    description: "Solar installers — ZingCall qualifies leads and books consultations.",
    vapiAssistantId: import.meta.env.VITE_VAPI_SOLAR_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "green",
    colorHex: "#15803D",
  },
  automotive: {
    name: "Automotive",
    tagline: "Never let a booking go to voicemail",
    description: "Mechanics, smash repairers — ZingCall answers and books jobs.",
    vapiAssistantId: import.meta.env.VITE_VAPI_AUTOMOTIVE_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "red",
    colorHex: "#DC2626",
  },
  "pool-maintenance": {
    name: "Pool Maintenance",
    tagline: "Answer every service enquiry",
    description: "Pool service businesses — ZingCall handles calls while you're on the road.",
    vapiAssistantId: import.meta.env.VITE_VAPI_POOL_ID,
    demoPhone: "+61 X XXXX XXXX",
    color: "cyan",
    colorHex: "#0891B2",
  },
} satisfies Record<string, VerticalConfig>

export type VerticalKey = keyof typeof VERTICALS
export { VERTICALS }
```

**`src/vite-env.d.ts` — add env var type declarations:**

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VAPI_PUBLIC_KEY: string
  readonly VITE_VAPI_TRADIES_ID: string
  readonly VITE_VAPI_GYMS_ID: string
  readonly VITE_VAPI_CLINICS_ID: string
  readonly VITE_VAPI_SALONS_ID: string
  readonly VITE_VAPI_SOLAR_ID: string
  readonly VITE_VAPI_AUTOMOTIVE_ID: string
  readonly VITE_VAPI_POOL_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

#### 4b. Vapi Web SDK Integration (`src/domains/zingcall/components/VapiDemoWidget.tsx`)

```bash
npm install @vapi-ai/web react-helmet-async
```

**Production-ready VapiDemoWidget — fixes all 5 critical bugs:**

```tsx
import { useState, useEffect, useRef } from "react"
import { Button } from "@/shared/ui/button"
import type { VerticalConfig } from "../config/verticals"

// Status type includes mic-denied and error states for proper UX
type CallStatus = "idle" | "requesting-mic" | "connecting" | "active" | "ended" | "error"

interface VapiDemoWidgetProps {
  assistantId: string
  vertical: VerticalConfig
}

// Module-level lazy singleton — loads once, shared across vertical navigations
let vapiInstance: InstanceType<typeof import("@vapi-ai/web").default> | null = null

async function getVapi() {
  if (vapiInstance) return vapiInstance
  const { default: Vapi } = await import("@vapi-ai/web")
  vapiInstance = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY)
  return vapiInstance
}

export function VapiDemoWidget({ assistantId, vertical }: VapiDemoWidgetProps) {
  const [status, setStatus] = useState<CallStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const isStartingRef = useRef(false)
  const isMountedRef = useRef(true)
  const sessionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
      // Clean up active call on unmount (e.g., user navigates away mid-call)
      if (vapiInstance) {
        vapiInstance.stop()
      }
      if (sessionTimerRef.current) {
        clearTimeout(sessionTimerRef.current)
      }
    }
  }, [])

  const startCall = async () => {
    // Guard: prevent double-invocation (double-click, concurrent calls)
    if (isStartingRef.current || status !== "idle") return
    isStartingRef.current = true

    try {
      setStatus("requesting-mic")

      // CRITICAL: getUserMedia MUST be the first await on iOS Safari
      // Any prior await causes iOS to reject the permission request
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true })
      } catch {
        if (isMountedRef.current) {
          setStatus("error")
          setErrorMessage("Microphone access denied. Enable it in browser settings, then try again.")
        }
        return
      }

      if (!isMountedRef.current) return
      setStatus("connecting")

      const vapi = await getVapi()
      if (!isMountedRef.current) {
        vapi.stop()
        return
      }

      // Named listeners — never removeAllListeners() (breaks other components)
      const onCallStart = () => {
        if (!isMountedRef.current) return
        setStatus("active")
        // 3-minute hard cap — enforced client-side as backup
        // Primary enforcement: maxDurationSeconds on assistant object (server-side)
        sessionTimerRef.current = setTimeout(() => {
          vapi.stop()
        }, 3 * 60 * 1000)
      }

      const onCallEnd = () => {
        if (!isMountedRef.current) return
        setStatus("ended")
        if (sessionTimerRef.current) {
          clearTimeout(sessionTimerRef.current)
          sessionTimerRef.current = null
        }
        vapi.off("call-start", onCallStart)
        vapi.off("call-end", onCallEnd)
        vapi.off("error", onVapiError)
      }

      const onVapiError = (e: unknown) => {
        if (!isMountedRef.current) return
        const msg = String((e as any)?.message ?? e)
        if (msg.includes("permission") || msg.includes("microphone")) {
          setErrorMessage("Microphone access was blocked. Check browser permissions.")
        } else if ((e as any)?.error?.error?.subscriptionLimits?.concurrencyBlocked) {
          setErrorMessage("All demo lines are busy. Please try again in a moment.")
        } else {
          setErrorMessage("Connection failed. Please try again.")
        }
        setStatus("error")
        if (sessionTimerRef.current) {
          clearTimeout(sessionTimerRef.current)
          sessionTimerRef.current = null
        }
        vapi.off("call-start", onCallStart)
        vapi.off("call-end", onCallEnd)
        vapi.off("error", onVapiError)
      }

      vapi.on("call-start", onCallStart)
      vapi.on("call-end", onCallEnd)
      vapi.on("error", onVapiError)

      await vapi.start(assistantId)

      // If component unmounted during await, stop immediately
      if (!isMountedRef.current) {
        vapi.stop()
      }
    } catch (err) {
      if (isMountedRef.current) {
        setStatus("error")
        setErrorMessage("Something went wrong. Please try again.")
      }
    } finally {
      isStartingRef.current = false
    }
  }

  const endCall = () => {
    vapiInstance?.stop()
  }

  const reset = () => {
    setStatus("idle")
    setErrorMessage("")
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Fixed height container prevents CLS (layout shift) as status changes */}
      <div className="h-40 flex flex-col items-center justify-center gap-3">
        {status === "idle" && (
          <>
            <Button
              onClick={startCall}
              size="lg"
              className="rounded-full w-40 h-40 text-lg font-semibold shadow-lg"
              style={{ backgroundColor: vertical.colorHex }}
            >
              Talk to ZingCall
            </Button>
            <p className="text-sm text-muted-foreground">
              No signup · Real AI · Ends in 3 min
            </p>
          </>
        )}

        {(status === "requesting-mic" || status === "connecting") && (
          <div className="text-center">
            {status === "requesting-mic" && (
              <p className="text-sm font-medium">
                Tap <strong>Allow</strong> when your browser asks for microphone access
              </p>
            )}
            {status === "connecting" && (
              <>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 mx-auto mb-2"
                     style={{ borderColor: vertical.colorHex }} />
                <p className="text-sm text-muted-foreground">Connecting you now…</p>
                <p className="text-xs text-muted-foreground">This is exactly what your customers hear</p>
              </>
            )}
          </div>
        )}

        {status === "active" && (
          <div className="text-center flex flex-col items-center gap-2">
            {/* CSS-driven pulse — zero JS during active WebRTC call */}
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
            </span>
            <p className="text-sm font-medium">Live call in progress</p>
            <Button onClick={endCall} variant="destructive" size="sm">End Call</Button>
          </div>
        )}

        {status === "ended" && (
          <div className="text-center flex flex-col items-center gap-3">
            <p className="font-medium">
              That's what every missed call could sound like.
            </p>
            <div className="flex gap-2">
              <Button size="sm" style={{ backgroundColor: vertical.colorHex }}>
                Get ZingCall for your business
              </Button>
              <Button size="sm" variant="outline" onClick={reset}>
                Try Again
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Most customers who try the demo go live within 48 hours.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-sm text-destructive">{errorMessage}</p>
            <Button size="sm" variant="outline" onClick={reset}>Try Again</Button>
            <p className="text-sm text-muted-foreground">
              Or call the demo: <strong>{vertical.demoPhone}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
```

#### 4c. Vapi Assistant Creation (one-time setup per vertical)

```bash
# Create a Vapi assistant for each vertical via REST
# maxDurationSeconds MUST be set here (server-side) — client-side overrides can be bypassed
POST https://api.vapi.ai/assistant
Authorization: Bearer {VAPI_PRIVATE_KEY}
Content-Type: application/json

{
  "name": "ZingCall Tradies Demo",
  "maxDurationSeconds": 180,       ← server-side enforcement, not client-side
  "firstMessage": "G'day! You've reached [Business Name], how can I help?",
  "firstMessageMode": "assistant-speaks-first",
  "model": {
    "provider": "anthropic",
    "model": "claude-haiku-4-5-20251001",
    "messages": [
      {
        "role": "system",
        "content": "You are ZingCall, an AI receptionist for a trades business. Be friendly, professional, and Australian in tone. Keep responses brief. Your goal is to capture the caller's name, what they need, and a callback number."
      }
    ],
    "temperature": 0.7,
    "maxTokens": 250
  },
  "voice": {
    "provider": "11labs",
    "voiceId": "australian-female-1"
  },
  "transcriber": {
    "provider": "deepgram",
    "model": "nova-2",
    "language": "en-AU"           ← Australian English accent optimisation
  },
  "endCallMessage": "Thanks for calling! One of our team will follow up shortly. Goodbye.",
  "backgroundSound": "off",
  "silenceTimeoutSeconds": 20,
  "responseDelaySeconds": 0.4
}
```

Save returned `assistant.id` as env var per vertical (e.g., `VITE_VAPI_TRADIES_ID`).

**Security: Set up before launch (takes 5 minutes):**
1. Vapi Dashboard → Billing → set monthly spend cap at $50–$100
2. Vapi Dashboard → API Keys → set domain allowlist to `voice.parnellsystems.com`
3. Set `maxDurationSeconds: 180` on every assistant (verified above)

#### 4d. Rate Limiting — `/api/demo-token.ts` (Vercel Serverless Function)

```typescript
// api/demo-token.ts
// Requires: npm install @upstash/redis (free tier: 10,000 req/day)
import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 })

  const ip = req.headers.get("x-forwarded-for") ?? "unknown"
  const rateLimitKey = `demo:${ip}`

  const count = await redis.incr(rateLimitKey)
  if (count === 1) {
    await redis.expire(rateLimitKey, 3600) // 1 hour window
  }

  if (count > 3) { // 3 demo calls per IP per hour
    return new Response(
      JSON.stringify({ error: "Demo limit reached. Call us directly to learn more." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    )
  }

  const { industry } = await req.json()
  // Return the assistantId for this vertical (looked up server-side)
  const assistantIds: Record<string, string> = {
    tradies: process.env.VITE_VAPI_TRADIES_ID!,
    gyms: process.env.VITE_VAPI_GYMS_ID!,
    // ... etc
  }

  return Response.json({ assistantId: assistantIds[industry] ?? null })
}
```

#### 4e. Health Check — `/api/health/demos.ts`

```typescript
// api/health/demos.ts — verify all 7 Vapi assistants are live
// Run this after every deployment to catch misconfigured env vars

export default async function handler(req: Request): Promise<Response> {
  const verticals = ["tradies", "gyms", "clinics", "salons", "solar", "automotive", "pool"]
  const assistantIds: Record<string, string | undefined> = {
    tradies: process.env.VITE_VAPI_TRADIES_ID,
    gyms: process.env.VITE_VAPI_GYMS_ID,
    clinics: process.env.VITE_VAPI_CLINICS_ID,
    salons: process.env.VITE_VAPI_SALONS_ID,
    solar: process.env.VITE_VAPI_SOLAR_ID,
    automotive: process.env.VITE_VAPI_AUTOMOTIVE_ID,
    pool: process.env.VITE_VAPI_POOL_ID,
  }

  const results = await Promise.all(
    verticals.map(async (v) => {
      const id = assistantIds[v]
      if (!id) return { vertical: v, status: "missing_env_var", assistantId: null }

      try {
        const res = await fetch(`https://api.vapi.ai/assistant/${id}`, {
          headers: { Authorization: `Bearer ${process.env.VAPI_PRIVATE_KEY}` },
        })
        return {
          vertical: v,
          assistantId: id,
          status: res.ok ? "ok" : "not_found",
          vapiStatus: res.status,
        }
      } catch {
        return { vertical: v, assistantId: id, status: "error" }
      }
    })
  )

  const allOk = results.every((r) => r.status === "ok")
  return Response.json(
    { allOk, results },
    { status: allOk ? 200 : 503 }
  )
}
```

#### 4f. ZingCall Homepage (`src/domains/zingcall/pages/ZingCallHome.tsx`)
Key sections:
- Hero: "ZingCall — Your AI Receptionist. Answers Every Call."
- Demo grid: 7 vertical cards → links to `/demos/[vertical]`
- Pricing: `$400/month + $500 setup fee` (confirm setup fee amount before building)
- How it works: 3 steps
- CTA: "Get ZingCall for your business" → GHL calendar booking embed

> **C1 Gap:** The conversion mechanism (contact form / GHL calendar embed) must be decided before this page is built. The GHL sub-account it links to must exist first (Phase 2 prerequisite).

#### 4g. Demo Page (`src/domains/zingcall/pages/DemoPage.tsx`)
- Reads `:vertical` param → validates against `VERTICALS` keys → loads config
- Vertical hero (name, tagline, colour from `colorHex`)
- `<VapiDemoWidget assistantId={vertical.vapiAssistantId!} vertical={vertical} />`
- Guard: if `vertical.vapiAssistantId` is `undefined`, show "Demo not yet available"
- "Or call the demo line: {vertical.demoPhone}" (mobile fallback — always show)
- Disclaimer: "This is a live demo"
- CTA: "Get ZingCall for your business → [link to ZingCallHome]"

**DemoPage param validation pattern:**

```tsx
const { vertical: verticalKey } = useParams<{ vertical: string }>()

if (!verticalKey || !(verticalKey in VERTICALS)) {
  return <Navigate to="/demos" replace />
}

const config = VERTICALS[verticalKey as VerticalKey]

if (!config.vapiAssistantId) {
  return <p>Demo not yet available for this vertical.</p>
}
```

#### 4h. Design System — Vertical Color Palettes

Each demo page uses its vertical's colour palette:

| Vertical | Primary (button) | Surface (background) | Accent | Personality |
|---|---|---|---|---|
| Tradies | `#1D4ED8` cobalt blue | `#0F172A` near-black | `#F59E0B` hi-vis amber | Confident, no-nonsense |
| Gyms | `#7C3AED` electric violet | `#09090B` pure black | `#22D3EE` neon cyan | Kinetic, aggressive |
| Clinics | `#0369A1` medical blue | `#F8FAFC` near-white | `#10B981` health green | Clinical, precise (light mode) |
| Salons | `#9D174D` deep rose | `#FFF7F0` warm ivory | `#F97316` amber-orange | Warm, premium |
| Solar | `#15803D` deep green | `#F0FDF4` light green | `#EAB308` solar yellow | Optimistic, data-friendly |
| Automotive | `#DC2626` racing red | `#18181B` dark zinc | `#71717A` machined silver | Mechanical, precise |
| Pool Maintenance | `#0891B2` clear cyan | `#F0F9FF` sky white | `#06B6D4` aqua | Refreshing, summer |

**Call Button State Copy (per vertical):**

| State | Tradies | Clinics |
|---|---|---|
| Idle CTA | "Hear How We Answer Your Calls" | "Experience Your AI Receptionist" |
| Connecting | "Calling now…" | "Connecting…" |
| Active label | "Live Call 🔴" | "Call in progress 🔴" |
| Ended prompt | "That's what every missed call could sound like. Ready to set it up?" | "Your patients deserve to be answered, every time. Ready?" |

All 7 verticals follow the same pattern with industry-appropriate tone.

**Trust signals (place these on every demo page):**
1. Below button (idle only): "No signup required · Real AI, not a recording · Cancel anytime"
2. Below fold: Stats strip — "340+ Australian businesses · 94% answered in 2 rings · 2.3 hrs saved/day"
3. Pre-pricing: One real testimonial (first name + last initial + trade + city)
4. Footer: ABN + Australian phone number (builds trust with AU tradespeople)
5. Post-call: "Most customers who try the demo go live within 48 hours."

---

### Phase 5: ParnellSystems.com Updates

**`src/domains/parnellsystems/components/WhatWeDoSection.tsx`** — add ZingCall as the flagship product card:
```tsx
{
  title: "ZingCall — AI Receptionist",
  description: "Your business answers every call, 24/7. Never lose a lead to voicemail.",
  link: "https://voice.parnellsystems.com",
  featured: true
}
```

**`src/domains/parnellsystems/components/Navbar.tsx`** — add "ZingCall" nav item linking to `https://voice.parnellsystems.com`

**`src/domains/parnellsystems/components/HeroSection.tsx`** — update hero to reference ZingCall as flagship offering

---

## System-Wide Impact

### Infrastructure Independence Checklist
Before cutover, verify each item is zero-dependency on AllConvos.ai:

| Item | Old (shared) | New (sole-owned) | Status |
|---|---|---|---|
| Website domain | allconvos.ai | voice.parnellsystems.com | To do |
| GHL Agency | Shared with partner | Giles sole-owned | To do |
| GHL Sub-accounts (×7) | Shared | New sole-owned | To do |
| Twilio account | Shared | Giles sole-owned | To do |
| Twilio numbers (×7) | Shared | Fresh provisioned | To do |
| Vapi account | TBC | Giles sole-owned | To do |
| Existing client numbers | Inventory required | To be confirmed | BLOCKED |

### Vapi API Key Security
- `VITE_VAPI_PUBLIC_KEY` (safe for browser SDK) — add to Vercel environment variables, Production scope
- `VAPI_PRIVATE_KEY` (never in frontend, never with `VITE_` prefix) — only for server-side functions and one-time setup scripts
- Per-vertical assistant IDs (`VITE_VAPI_TRADIES_ID` etc.) — safe to expose, but set domain allowlist in Vapi dashboard to restrict to `voice.parnellsystems.com`
- Vercel env var scoping: Real assistant IDs → Production only. Throwaway test assistants → Preview/Development

> Note: assistant IDs are safe for browser exposure IF (a) Vapi monthly spend cap is set AND (b) `maxDurationSeconds: 180` is configured server-side on each assistant. Without both of these, public key + assistant ID exposure creates unbounded financial exposure.

### Demo Abuse Prevention (Three Layers — Implement All)

| Layer | Implementation | Enforcement |
|---|---|---|
| Vapi spend cap | Dashboard → Billing → set $50–100/month cap | Vapi server-side; immediately stops all calls |
| Assistant duration limit | `maxDurationSeconds: 180` on each assistant object | Vapi server-side; cannot be bypassed by browser |
| IP rate limiting | `/api/demo-token` Upstash Redis (3 calls/IP/hour) | Server-side; 429 before Vapi is called |
| Confirmation step | "Start Demo" modal before call begins | UX layer; reduces accidental triggers |
| Client-side fallback | `setTimeout(() => vapi.stop(), 180_000)` | Browser-only; last resort |

---

## Deployment Verification Checklist

### Pre-Deployment (Before Touching Anything)
- [ ] Active login verified for: Vercel, Cloudflare/registrar, Vapi dashboard, GHL Agency, Twilio, allconvos.ai project
- [ ] Baseline captured: current DNS state for `voice.parnellsystems.com` (expect NXDOMAIN), Vercel domain list screenshot, GHL sub-account count, Twilio number count
- [ ] Vapi monthly spend cap set in dashboard
- [ ] VAPI_PRIVATE_KEY confirmed with NO `VITE_` prefix in Vercel
- [ ] All 7 assistants have `maxDurationSeconds: 180` (verify via `GET /assistant`)

### Stage 1 — Vercel Domain Alias
- [ ] `voice.parnellsystems.com` added to Vercel Domains tab
- [ ] CNAME target value from Vercel is in hand before touching DNS

### Stage 2 — DNS
- [ ] `dig CNAME voice.parnellsystems.com @1.1.1.1` returns correct target
- [ ] Vercel shows domain status "Valid" with SSL issued
- [ ] `allconvos.ai` still returns HTTP 200 (must not be affected)

### Stage 3 — Environment Variables
- [ ] All 8 `VITE_VAPI_*` variables present in Vercel UI
- [ ] `VAPI_PRIVATE_KEY` has no `VITE_` prefix
- [ ] Values spot-checked against Vapi dashboard

### Stage 4 — React Routes Deploy
- [ ] All 7 vertical routes return HTTP 200
- [ ] No console errors on any route
- [ ] `GET /api/health/demos` returns `{ allOk: true }`

### Stage 5 — GHL Sub-Account
- [ ] ParnellSystems sub-account exists in Giles's sole-owned agency
- [ ] All 7 demo agents migrated and active in ParnellSystems sub-account
- [ ] At least 1 agent spot-checked for config completeness

### Stage 6 — Phone Number
- [ ] Existing phone number assigned to ParnellSystems GHL sub-account
- [ ] At least 1 live inbound call test passes

### Stage 7 — End-to-End Go-Live
- [ ] Vapi browser demo works on at least 3 of 7 verticals
- [ ] At least 1 inbound call routes to correct GHL demo agent
- [ ] `allconvos.ai` confirmed unaffected (different Vercel project, correct content)
- [ ] SSL certificate valid on `voice.parnellsystems.com`

### Post-Launch Monitoring (+48 hours)
- [ ] VAPI call logs confirm calls are on ZingCall account (not allconvos.ai)
- [ ] VAPI call success rate > 95%
- [ ] Phone number not flagged/suspended (AU compliance)
- [ ] ParnellSystems GHL sub-account has at least 1 conversation logged

---

## Acceptance Criteria

- [ ] `voice.parnellsystems.com` loads with ZingCall branding and correct pricing ($400/month)
- [ ] All 7 demo pages load at `voice.parnellsystems.com/demos/[vertical]`
- [ ] Each demo page has a working "Talk to ZingCall" button (Vapi web SDK call connects)
- [ ] Each demo page displays the Twilio number for mobile callers
- [ ] Post-call CTA is visible and links to conversion mechanism
- [ ] ParnellSystems GHL sub-account exists in Giles's sole-owned agency with all 7 demo agents active
- [ ] Existing phone number is assigned to ParnellSystems GHL sub-account
- [ ] Calling the demo phone number routes to the correct GHL Voice AI
- [ ] parnellsystems.com homepage links to voice.parnellsystems.com
- [ ] No references to AllConvos.ai brand remain on voice.parnellsystems.com
- [ ] Vapi assistant IDs are stored as Vercel environment variables (not hardcoded)
- [ ] Vapi monthly spend cap is active in dashboard
- [ ] `maxDurationSeconds: 180` confirmed on all 7 assistants
- [ ] `/api/health/demos` returns `{ allOk: true }` after deployment
- [ ] Vercel project has no shared access with former partner
- [ ] `import.meta.env` used throughout (not `process.env`) — verified via build output

---

## Success Metrics

- Zero remaining AllConvos.ai dependencies (infrastructure independence checklist = all green)
- All 7 demos functional (voice call + phone number) on sole-owned infrastructure
- parnellsystems.com clearly positions ZingCall as flagship product
- New client enquiries come via parnellsystems.com / ZingCall, not allconvos.ai
- Demo call success rate > 95% (tracked via Vapi dashboard)
- Demo-to-enquiry conversion visible (requires lead capture — see C1 gap)

---

## Dependencies & Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| GHL Voice AI phone number doesn't transfer via snapshot | Confirmed | Assign phone number manually after Phase 3 (~15min/vertical) |
| Existing paying client numbers on shared Twilio | Unknown | Inventory before touching R4 — see C2 gap |
| iOS Safari microphone permission failure | Medium | `getUserMedia` as first await in handler; explicit "Tap Allow" copy |
| Demo abuse (open calls, automated abuse) | Medium | Three-layer mitigation: spend cap + duration limit + IP rate limiting |
| Vapi SDK bundle size (Daily.co dependency ~100–150 KB gzipped) | Medium | Lazy-load on button click — resolved in implementation above |
| OG tags wrong for social shares | Medium | `react-helmet-async` for basic; Vercel Edge Middleware for full social crawler support |
| GHL sub-account snapshot import fails | Low | Fall back to manual workflow rebuild using AllConvos as reference |
| Former partner delays coordination | Low (amicable) | Fresh Twilio provisioning and snapshot share links don't require partner action |
| voice.parnellsystems.com domain alias conflicts | Low | Single-project alias is supported; React Router handles path routing |

---

## Environment Variables Required

Add to Vercel project — Production scope for real IDs, Preview/Development scope for test assistants:
```bash
# Public (safe for browser bundle — but set domain allowlist in Vapi dashboard)
VITE_VAPI_PUBLIC_KEY=pk_...
VITE_VAPI_TRADIES_ID=asst_...
VITE_VAPI_GYMS_ID=asst_...
VITE_VAPI_CLINICS_ID=asst_...
VITE_VAPI_SALONS_ID=asst_...
VITE_VAPI_SOLAR_ID=asst_...
VITE_VAPI_AUTOMOTIVE_ID=asst_...
VITE_VAPI_POOL_ID=asst_...

# Private — server-side only, NEVER use VITE_ prefix
VAPI_PRIVATE_KEY=sk_...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

---

## Voice Platform: Vapi vs LiveKit

**Decision: Vapi** — confirmed after comparison research.

| Dimension | Vapi | LiveKit |
|---|---|---|
| Browser widget | 15 lines, no backend | 60+ lines + backend token server |
| GHL integration | Official native (4 tools, no-code) | DIY — custom code required |
| Programmatic agent creation | Clean REST API | No agent config API |
| Agent hosting | Vapi manages it | Self-hosted worker required |
| Cost at demo scale (~500 min/mo) | ~$90/month all-in | ~$145 (plan + server + providers) |
| Cost at scale (50k+ min/mo) | ~$7,500 | ~$5,700 |
| AU English STT | Yes (Deepgram `en-AU`) | Yes (same provider) |

**When to reconsider LiveKit:** If ZingCall reaches 50,000+ agent minutes/month AND AU call latency becomes a consistent client complaint (Vapi routes through US infrastructure; LiveKit self-hosted in Sydney would cut latency from ~900ms to ~500ms).

**Future-proofing:** Build with a `useVoiceCall` hook abstraction so swapping providers is a one-file change:

```tsx
// src/shared/hooks/useVoiceCall.ts — provider-agnostic interface
export { useVapiCall as useVoiceCall } from "./useVapiCall"
// Future: export { useLiveKitCall as useVoiceCall } from "./useLiveKitCall"
```

---

## Sources & References

### Origin
- **Origin document:** [docs/brainstorms/2026-03-25-brand-architecture-requirements.md](docs/brainstorms/2026-03-25-brand-architecture-requirements.md)
  Key decisions carried forward: (1) ZingCall sub-brand at voice.parnellsystems.com subdomain, (2) GHL rebuild not transfer, (3) $400/month pricing, (4) Vapi for web demos

### Internal References
- Existing parnellsystems.com routes: `github.com/gilesparnell/parnellsystems/blob/main/src/App.tsx`
- VoiceSMS page (reference): `src/pages/VoiceSMS.tsx`
- Vercel project: team `gilesparnell-9253s-projects`, project `parnellsystems`

### External References
- Vapi Web SDK: https://docs.vapi.ai/sdk/web
- Vapi REST API (create assistant): https://docs.vapi.ai/api-reference/assistants/create
- Vapi JWT Authentication: https://docs.vapi.ai/customization/jwt-authentication
- Vapi GHL Integration: https://docs.vapi.ai/tools/go-high-level
- GHL Locations API (create sub-account): https://marketplace.gohighlevel.com/docs/ghl/locations/create-location/
- GHL Snapshots API: https://marketplace.gohighlevel.com/docs/ghl/snapshots/snapshots/
- GHL Voice AI Snapshot Support (changelog): https://ideas.gohighlevel.com/changelog/snapshot-for-ghl-voice-ai
- Twilio IncomingPhoneNumbers API: https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource
- Twilio AU Available Numbers: https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource
- Upstash Redis (rate limiting): https://upstash.com/docs/redis/sdks/ts/overview
- react-helmet-async: https://github.com/staylor/react-helmet-async
- LiveKit Agents (future reference): https://docs.livekit.io/agents/
- Vapi vs LiveKit comparison: Modal.com deep comparison article
- AllConvos.ai demo reference: https://allconvos.ai/demos
