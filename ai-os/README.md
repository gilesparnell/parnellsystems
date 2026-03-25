# Gilo's AI Operating System

Your personal AI chief of staff. Run Claude Code in this directory and it becomes an operator that knows your entire business.

---

## Setup (10 minutes)

### Step 1 — Move this folder somewhere permanent

```bash
cp -r ~/Documents/VSStudio/parnellsystems/ai-os ~/ai-os
cd ~/ai-os
```

### Step 2 — Configure your MCP connections

Edit `.mcp.json` with your actual API credentials:

- **Google Calendar / Gmail:** Create OAuth credentials at console.cloud.google.com → APIs & Services → Credentials. You need Client ID, Client Secret, and Refresh Token.
- **ClickUp:** Get your API key from app.clickup.com → Settings → Apps → API

Or use the same MCP servers already connected in Cowork — your credentials are already there. Ask Cowork to export them.

### Step 3 — Start Claude Code

```bash
cd ~/ai-os
claude
```

That's it. The system is seeded with your actual context from day one.

---

## Daily Usage

Just talk to it:

| Say this | What happens |
|----------|--------------|
| `morning sync` | Brief, priorities, calendar, what needs attention |
| `prep for [name]` | Full context on the person, past notes, talking points |
| `log decision about [X]` | Structured decision record created |
| `process meeting` + paste transcript | Notes filed, actions extracted, context updated |
| `post to slack: [message]` | Posted directly, no tab switching |
| `weekly review` | Week summary, overdue actions, next week focus |
| `what should I focus on today?` | Pulls from priorities + calendar + overdue actions |

---

## File Structure

```
ai-os/
├── CLAUDE.md              ← Master instructions (don't delete)
├── context/
│   ├── business-overview.md    ← AllConvos + Parnell.Systems
│   ├── current-priorities.md   ← UPDATE THIS REGULARLY
│   ├── stakeholders.md         ← Everyone you work with
│   └── tools-stack.md          ← Tools, accounts, stack
├── clients/               ← One file per active client
├── pipeline/              ← Prospects and opportunities
├── decisions/             ← Created automatically as you log decisions
├── meetings/              ← Created automatically as you process transcripts
├── actions/
│   └── current-actions.md ← Live action tracker — review daily
└── strategy/
    └── allconvos-strategy.md
```

---

## The One Rule

**Keep `context/current-priorities.md` and `actions/current-actions.md` fresh.** Everything else maintains itself. These two files are what the morning sync reads first.

---

## What's Already Seeded

This system was built from your actual Granola meeting history, ClickUp workspace, and calendar — not a generic template. It already knows:

- AllConvos product and current state
- Parnell.Systems and Intelligence Layer offering
- Active clients (Ryan, Roberto, FSAC, Fitness Boxx)
- Partnership transition with Jesse (March 2026)
- BrandLocus / Imran Zain opportunity
- George & Matthias investor/reseller opportunity
- Robin Richards roofing demo needed
- Outstanding actions from the last 30 days

---

*Built by Parnell.Systems — Intelligence Layer v1.0*
