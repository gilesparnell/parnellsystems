---
title: "Migration: awe2m8 → Parnell Systems"
type: migration
status: pending
date: 2026-03-28
---

# Migration: awe2m8 → Parnell Systems

## Overview

Kill the awe2m8 brand entirely. Transfer all repos, rebrand all code, restructure local folders, and consolidate everything under the `parnellsystems` GitHub org and `~/Documents/VSStudio/` local structure.

## Pre-Migration State

### GitHub: awe2m8 org (7 repos)

| Repo | Private | Last pushed | Owner | Notes |
|---|---|---|---|---|
| `awe2m8/allconvos-main` | No | 2026-03-19 | You | Conversations feature |
| `awe2m8/allconvos-staging` | No | 2026-02-20 | You | Staging env |
| `awe2m8/ai-voice-sms-experience` | Yes | 2026-03-11 | You | Voice/SMS product |
| `awe2m8/moving4u` | No | 2026-02-11 | You | Client site |
| `awe2m8/moving4u-website-redesign` | Yes | 2026-02-11 | You | Client site redesign |
| `awe2m8/business-finance` | No | 2026-03-16 | Jesse Allan | NOT yours — created by collaborator |
| `awe2m8/client-onboarding-fulfillment-saas` | No | 2026-02-23 | Jesse Allan | NOT yours — created by collaborator |

### GitHub: gilesparnell personal (awe2m8-related)

| Repo | Description |
|---|---|
| `gilesparnell/awe2m8` | Core platform app (maps to awe2m8-local folder) |

### Vercel

| Project | ID | Notes |
|---|---|---|
| `awe2m8` | `prj_GAcmKYy0Zf07CiEHR2phAePUo5yr` | Actively deployed, sole user |

### Local folders (~/Documents/VSStudio/)

| Folder | Git remote | Notes |
|---|---|---|
| `awe2m8-local/` | `gilesparnell/awe2m8` | Core platform — 90+ files reference "awe2m8" |
| `allconvos-main/` | `awe2m8/allconvos-main` | Remote points to awe2m8 org |
| `moving4u/` | `awe2m8/moving4u` | Remote points to awe2m8 org |

### Code-level awe2m8 references (in awe2m8-local)

| Category | File count | Examples |
|---|---|---|
| Config / env | 4 | `.env.local`, `.env.discord`, `.env.test.local`, `.vercel/project.json` |
| Source code | ~20 | Components, layouts, API routes, agent configs in `src/` |
| Scripts | ~15 | Firebase, Twilio, admin scripts in `scripts/` |
| Tests | 2 | `__tests__/unit/`, `__tests__/integration/` |
| Docs | ~15 | `docs/`, `projects/`, `shared/intel/` markdown files |
| Business docs | 4 | `awe2m8_docs/` folder (contracts, service overviews) |
| Legacy | ~8 | `_legacy/` folder (package.json, content.json, docs) |
| Build artefacts | ~15 | `.next/` — auto-regenerated, no manual changes needed |
| Root config | 1 | `CLAUDE.md` |

---

## Post-Migration Target

### GitHub: parnellsystems org

| Current | New location | New name |
|---|---|---|
| `gilesparnell/awe2m8` | `parnellsystems/parnellsystems-platform` | Core platform |
| `awe2m8/allconvos-main` | `parnellsystems/allconvos` | Conversations |
| `awe2m8/allconvos-staging` | `parnellsystems/allconvos-staging` | Staging |
| `awe2m8/ai-voice-sms-experience` | `parnellsystems/voice-sms-experience` | Voice/SMS |
| `awe2m8/moving4u` | `gilesparnell/moving4u` | Client site |
| `awe2m8/moving4u-website-redesign` | `gilesparnell/moving4u-redesign` | Client site redesign |
| `gilesparnell/parnellsystems` | `parnellsystems/website` | Main consultancy site |

Repos staying under `gilesparnell` (personal/client):
- `moving4u`, `moving4u-redesign`, `robs-gardens`, `Vonnies`, `LilyHealthDiary`, `SprintTracker`, `Claude`, `openclaw`, `pirisk`, `google-drive-migration`, `googleVoiceAiDemo`

### GitHub: repos to delete/archive

| Repo | Action | Reason |
|---|---|---|
| `awe2m8/business-finance` | Delete or archive | Not yours (Jesse Allan) |
| `awe2m8/client-onboarding-fulfillment-saas` | Delete or archive | Not yours (Jesse Allan) |
| `gilesparnell/hello-world` | Archive | 2016, inactive |
| `gilesparnell/My-APAC-Chip-Challenge` | Archive | 2016, inactive |
| `gilesparnell/TempStuff` | Archive | 2016, inactive |

### Vercel

| Current | Action |
|---|---|
| `awe2m8` project | Rename to `parnellsystems-platform`, update linked repo |

### Local folder structure

```
~/Documents/VSStudio/
├── parnell-systems/
│   ├── parnellsystems-platform/    ← was awe2m8-local
│   ├── website/                    ← was parnellsystems
│   ├── allconvos/                  ← was allconvos-main
│   ├── voice-sms/                  ← was googleVoiceAiDemo
│   ├── claude-artefacts/           ← was Claude/
│   └── google-drive-migration/     ← was google-drive-copy/
│
├── client-sites/
│   ├── robs-gardens/
│   ├── vonnies/
│   ├── moving4u/
│   ├── fsca/
│   └── leadgen-site/
│
├── personal/
│   ├── lily-health-diary/
│   ├── sprint-tracker/
│   └── pool-game/
│
└── archive/
    ├── pirisk/
    ├── automaker/
    └── mission-control/
```

### GitHub topics

| Repo | Topics |
|---|---|
| `parnellsystems/parnellsystems-platform` | `platform`, `nextjs`, `typescript` |
| `parnellsystems/website` | `website`, `vercel`, `typescript` |
| `parnellsystems/allconvos` | `platform`, `conversations` |
| `parnellsystems/voice-sms-experience` | `product`, `voice-ai`, `twilio` |
| `gilesparnell/robs-gardens` | `client-site`, `website`, `typescript` |
| `gilesparnell/Vonnies` | `client-site`, `website`, `typescript` |
| `gilesparnell/LilyHealthDiary` | `personal`, `nextjs`, `typescript` |
| `gilesparnell/SprintTracker` | `personal`, `typescript` |
| `gilesparnell/google-drive-migration` | `tool`, `python` |
| `gilesparnell/openclaw` | `ai`, `tool` |
| `gilesparnell/googleVoiceAiDemo` | `demo`, `voice-ai` |
| `gilesparnell/Claude` | `ai`, `training` |

---

## Execution Phases

### Phase 1: GitHub repo transfers and renames

Transfer repos from `awe2m8` org to `parnellsystems` org:

- [ ] Transfer `awe2m8/allconvos-main` → `parnellsystems` org, rename to `allconvos`
- [ ] Transfer `awe2m8/allconvos-staging` → `parnellsystems` org
- [ ] Transfer `awe2m8/ai-voice-sms-experience` → `parnellsystems` org, rename to `voice-sms-experience`
- [ ] Transfer `awe2m8/moving4u` → `gilesparnell` (client project, stays personal)
- [ ] Transfer `awe2m8/moving4u-website-redesign` → `gilesparnell`, rename to `moving4u-redesign` (client project)
- [ ] Archive `awe2m8/business-finance` (Jesse Allan's repo)
- [ ] Archive `awe2m8/client-onboarding-fulfillment-saas` (Jesse Allan's repo)

Transfer/rename from `gilesparnell`:

- [ ] Transfer `gilesparnell/awe2m8` → `parnellsystems` org, rename to `parnellsystems-platform`
  - **Note:** The empty `parnellsystems/parnellsystems-platform` repo created as groundwork should be deleted first, then the transfer + rename can claim the name
- [ ] Transfer `gilesparnell/parnellsystems` → `parnellsystems` org, rename to `website`

Archive old repos:

- [ ] Archive `gilesparnell/hello-world`
- [ ] Archive `gilesparnell/My-APAC-Chip-Challenge`
- [ ] Archive `gilesparnell/TempStuff`

### Phase 2: Vercel updates

- [ ] Rename Vercel project `awe2m8` → `parnellsystems-platform`
- [ ] Update linked GitHub repo to `parnellsystems/parnellsystems-platform`
- [ ] Verify deployment still works after repo transfer
- [ ] Update `parnellsystems` Vercel project's linked repo to `parnellsystems/website`
- [ ] Update any custom domains if applicable

### Phase 3: Code-level rebrand (parnellsystems-platform codebase)

This is the largest phase. Run after GitHub transfers are complete.

**Step 3.1: Clean build artefacts**
- [ ] `rm -rf .next/` (will regenerate on build)
- [ ] `rm -rf node_modules/` and reinstall

**Step 3.2: Config files**
- [ ] Update `.env.local` — replace awe2m8 references in URLs, project names
- [ ] Update `.env.discord` — replace awe2m8 references
- [ ] Update `.env.test.local` — replace awe2m8 references
- [ ] Update `.vercel/project.json` — new project ID and org ID
- [ ] Update `CLAUDE.md` — replace project identity

**Step 3.3: Source code (`src/`)**
- [ ] `src/app/layout.tsx` — metadata, site title
- [ ] `src/app/login/page.tsx` — branding
- [ ] `src/app/admin/page.tsx` — admin panel branding
- [ ] `src/app/[clientId]/page.tsx` — client-facing branding
- [ ] `src/app/admin/mission-control/layout.tsx` — dashboard branding
- [ ] `src/app/api/` routes — any hardcoded awe2m8 references
- [ ] `src/components/admin/AdminHeader.tsx` — header branding
- [ ] `src/components/admin/SuccessScreen.tsx` — success messages
- [ ] `src/components/admin/AdminUsersManager.tsx` — user management copy
- [ ] `src/components/admin/twilio/CreateBundleForm.tsx` — Twilio business name
- [ ] `src/components/mission-control/DashboardHeader.tsx` — dashboard branding
- [ ] `src/components/ActivityFeed.tsx` — activity feed references
- [ ] `src/lib/agents/spawner.ts` — agent identity/name
- [ ] `src/lib/agents/spawner-real.ts` — agent identity/name
- [ ] `src/lib/agents/config.ts` — agent configuration
- [ ] Global find-and-replace: `awe2m8` → `parnellsystems` (case-insensitive, review each match)

**Step 3.4: Scripts**
- [ ] Audit all files in `scripts/` for awe2m8 references (Firebase project names, Twilio account names, admin identifiers)
- [ ] Update each script — these likely contain Firebase project IDs and Twilio SIDs that reference awe2m8

**Step 3.5: Tests**
- [ ] `__tests__/unit/lib/activity-types.test.ts` — update fixtures/assertions
- [ ] `__tests__/integration/twilio-porting.test.ts` — update fixtures/assertions

**Step 3.6: Documentation**
- [ ] Rename `awe2m8_docs/` → `business-docs/` or `parnell-docs/`
- [ ] Update all markdown files in `docs/`, `projects/`, `shared/intel/` — company name references
- [ ] Update `projects/awe2m8-sales-campaign/` — rename folder, update campaign copy

**Step 3.7: Legacy**
- [ ] Delete `_legacy/` entirely — old static HTML site, fully superseded by Next.js platform

**Step 3.7b: Twilio subaccount rename**
- [ ] Rename Twilio subaccount `AWE2M8` (SID: `AC0a03cced8faa8fb0dfcd6ca5015eee52`) to `parnellsystems` via dashboard or API
- [ ] Update `TWILIO_SUBACCOUNT_AWE2M8` env var name to `TWILIO_SUBACCOUNT_PARNELLSYSTEMS` in `.env.local` and `.env.test.local`
- [ ] Update any code referencing the old env var name

**Step 3.8: Jest config**
- [ ] `jest.config.ts` — check for any awe2m8-specific path mappings

**Step 3.9: Verify**
- [ ] Run `grep -ri "awe2m8" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" --include="*.md" --include="*.env*" | grep -v node_modules | grep -v .next` — should return zero results
- [ ] `npm run build` — verify clean build
- [ ] `npm test` — verify tests pass

### Phase 4: Local git remotes

After all GitHub transfers complete, update every local clone:

- [ ] `awe2m8-local` → `git remote set-url origin https://github.com/parnellsystems/parnellsystems-platform.git`
- [ ] `allconvos-main` → `git remote set-url origin https://github.com/parnellsystems/allconvos.git`
- [ ] `moving4u` → `git remote set-url origin https://github.com/parnellsystems/moving4u.git`
- [ ] `parnellsystems` → `git remote set-url origin https://github.com/parnellsystems/website.git`

### Phase 5: Local folder restructure

Reorganise projects within `~/Documents/VSStudio/` into grouped subdirectories:

```bash
# Create group directories
mkdir -p ~/Documents/VSStudio/{parnell-systems,client-sites,personal,archive}

# parnell-systems/
mv ~/Documents/VSStudio/awe2m8-local ~/Documents/VSStudio/parnell-systems/parnellsystems-platform
mv ~/Documents/VSStudio/parnellsystems ~/Documents/VSStudio/parnell-systems/website
mv ~/Documents/VSStudio/allconvos-main ~/Documents/VSStudio/parnell-systems/allconvos
mv ~/Documents/VSStudio/googleVoiceAiDemo ~/Documents/VSStudio/parnell-systems/voice-sms
mv ~/Documents/VSStudio/Claude ~/Documents/VSStudio/parnell-systems/claude-artefacts
mv ~/Documents/VSStudio/google-drive-copy ~/Documents/VSStudio/parnell-systems/google-drive-migration

# client-sites/
mv ~/Documents/VSStudio/robs-gardens ~/Documents/VSStudio/client-sites/robs-gardens
mv ~/Documents/VSStudio/Vonnies ~/Documents/VSStudio/client-sites/vonnies
mv ~/Documents/VSStudio/moving4u ~/Documents/VSStudio/client-sites/moving4u
mv ~/Documents/VSStudio/leadgen-site ~/Documents/VSStudio/client-sites/leadgen-site
mv ~/Documents/VSStudio/fsca ~/Documents/VSStudio/client-sites/fsca

# personal/
mv ~/Documents/VSStudio/LilyHealthDiary ~/Documents/VSStudio/personal/lily-health-diary
mv ~/Documents/VSStudio/SprintTracker ~/Documents/VSStudio/personal/sprint-tracker
mv ~/Documents/VSStudio/pool-game ~/Documents/VSStudio/personal/pool-game

# archive/
mv ~/Documents/VSStudio/pirisk ~/Documents/VSStudio/archive/pirisk
# BlockBustersRock — docs already merged into parnell-systems/website/docs, delete the empty shell
rm -rf ~/Documents/VSStudio/BlockBustersRock
mv ~/Documents/VSStudio/automaker ~/Documents/VSStudio/archive/automaker
mv ~/Documents/VSStudio/mission-control ~/Documents/VSStudio/archive/mission-control
```

### Phase 6: Apply GitHub topics

```bash
# parnellsystems org
gh repo edit parnellsystems/parnellsystems-platform --add-topic platform,nextjs,typescript
gh repo edit parnellsystems/website --add-topic website,vercel,typescript
gh repo edit parnellsystems/allconvos --add-topic platform,conversations
gh repo edit parnellsystems/voice-sms-experience --add-topic product,voice-ai,twilio

# gilesparnell personal
gh repo edit gilesparnell/robs-gardens --add-topic client-site,website,typescript
gh repo edit gilesparnell/Vonnies --add-topic client-site,website,typescript
gh repo edit gilesparnell/LilyHealthDiary --add-topic personal,nextjs,typescript
gh repo edit gilesparnell/SprintTracker --add-topic personal,typescript
gh repo edit gilesparnell/google-drive-migration --add-topic tool,python
gh repo edit gilesparnell/openclaw --add-topic ai,tool
gh repo edit gilesparnell/googleVoiceAiDemo --add-topic demo,voice-ai
gh repo edit gilesparnell/Claude --add-topic ai,training
```

### Phase 7: Cleanup

- [ ] Delete the empty `parnellsystems/parnellsystems-platform` repo (the one created as groundwork — the real one will be transferred from gilesparnell/awe2m8)
- [ ] Delete or archive the `awe2m8` GitHub org (once all repos transferred and verified)
- [ ] Update any bookmarks, terminal aliases, or IDE recent projects lists (paths now have group subdirectories)
- [ ] Verify all Vercel deployments are working with new repo links

---

## Decisions resolved (2026-03-29)

- **moving4u / moving4u-redesign** → Stay under `gilesparnell`. These are client projects, not org products.
- **Jesse Allan's repos** (`business-finance`, `client-onboarding-fulfillment-saas`) → Archive, not delete.
- **`_legacy/` folder** → Delete entirely. It's the old static HTML site (pre-Next.js). Dead weight.
- **Firebase project (`awe2m8-sales`)** → Leave as-is. Firebase doesn't allow project renames, and we're migrating to Prisma/Postgres anyway. Let it die naturally.
- **Twilio subaccount (`AWE2M8`)** → Rename via Twilio dashboard or API to `parnellsystems`. Quick fix.

---

## Rollback

If anything breaks mid-migration:
- GitHub provides URL redirects from old paths for transferred repos
- Local folders can be moved back within `~/Documents/VSStudio/` with `mv`
- Git remotes can be reset with `git remote set-url origin <old-url>`
- Vercel project names can be changed back via dashboard

Nothing in this plan is destructive until the awe2m8 org is deleted in Phase 7.
