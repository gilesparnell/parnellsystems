# Parnell Systems: Full Development Lifecycle Workflow

How every feature moves from idea to verified, shipped code — with every skill and enforcement point mapped.

## The Pipeline at a Glance

```
  USER PROMPT
       |
       v
  +--------------------------+
  | UserPromptSubmit Hook    |  <-- Fires EVERY prompt, deterministic
  | (skill-forced-eval-hook) |
  +--------------------------+
       |
       | Injects: "Evaluate skills. Activate tdd-first +
       |           verification-before-completion if
       |           producing code. Check all other skills."
       |
       v
  +-------------------+
  | SKILL EVALUATION  |  <-- Claude evaluates which skills apply
  +-------------------+
       |
       | What kind of work is this?
       |
       +------------------+------------------+------------------+
       |                  |                  |                  |
       v                  v                  v                  v
   IDEATION          PLANNING          BUILDING          VERIFYING
   (Phase 1)         (Phase 2)         (Phase 3)         (Phase 4)
```

---

## Phase 1: Ideation

**When:** You have a vague idea, problem, or opportunity. You're not sure what to build yet.

```
  "I want to add voice webhooks to the platform"
       |
       v
  /ce-brainstorm                     /last30days (optional)
  +---------------------------+      +---------------------------+
  | Collaborative dialogue    |      | Research what others are  |
  | to explore:               |      | doing in the last 30 days |
  |  - Requirements           | <--> | across Reddit, X, HN,    |
  |  - Multiple approaches    |      | YouTube, blogs            |
  |  - Trade-offs             |      |                           |
  |  - Scope decisions        |      | Grounds the brainstorm    |
  +---------------------------+      | in real-world patterns    |
       |                             +---------------------------+
       v
  Requirements document
  (right-sized for the feature)
```

**Skills activated:**
- `/ce-brainstorm` — explores the problem space before committing to a solution
- `/last30days` — (optional) researches current community practices and patterns

**Output:** A requirements document or clear feature description ready for planning.

**Enforcement:** The hook ensures brainstorm is activated when the prompt looks exploratory rather than jumping straight to code.

---

## Phase 2: Planning

**When:** Requirements are clear. You need to break work into structured units.

```
  Requirements document
       |
       v
  /ce-plan
  +----------------------------------+
  | Transforms requirements into:    |
  |  - Ordered implementation units  |
  |  - Dependencies mapped           |
  |  - Acceptance criteria per unit  |
  |  - TDD flags on code units       |
  +----------------------------------+
       |
       v
  Structured plan document
  (docs/plans/YYYY-MM-DD-NNN-*.md)
       |
       v
  /document-review (optional)
  +----------------------------------+
  | Refines plan before execution    |
  | (use sparingly — credit cost)    |
  +----------------------------------+
```

**Skills activated:**
- `/ce-plan` — creates the implementation plan
- `/document-review` — (optional, use sparingly per credit efficiency rule)

**Output:** A plan with numbered units, each flagged for TDD where code is involved.

---

## Phase 3: Building (TDD + Implementation)

**When:** Plan exists. Time to write code.

This is where the enforcement hook earns its keep. Every prompt that produces code triggers mandatory TDD.

```
  Plan Unit N: "Add webhook endpoint"
       |
       v
  +====================================+
  | HOOK ENFORCES: tdd-first ACTIVATED |
  +====================================+
       |
       v
  /tdd-first (MANDATORY — always active for code)
  +--------------------------------------------------+
  |                                                    |
  |  Step 1: DETECT test runner                        |
  |  +-----------+                                     |
  |  | Vitest?   |  pytest?  Jest?  Go test?           |
  |  +-----------+                                     |
  |       |                                            |
  |  Step 2: WRITE tests first                         |
  |  +-------------------------------------------+    |
  |  | Unit tests (3+ per function)              |    |
  |  | Integration tests (boundary crossings)    |    |
  |  | System/E2E tests (user-facing features)   |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 3: Confirm RED                               |
  |  +-------------------------------------------+    |
  |  | Run tests --> ALL MUST FAIL                |    |
  |  | Fails for right reason (not syntax error)  |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 4: Write MINIMUM code to pass                |
  |  +-------------------------------------------+    |
  |  | Implementation goes here                   |    |
  |  | No behaviour without a covering test       |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 5: Confirm GREEN                             |
  |  +-------------------------------------------+    |
  |  | Run tests --> ALL MUST PASS                |    |
  |  | No weakened assertions                     |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 6: Refactor (tests stay green)               |
  |       |                                            |
  |  Step 7: Run FULL SUITE                            |
  |  +-------------------------------------------+    |
  |  | ALL tests pass = unit complete             |    |
  |  | ANY test fails = fix before moving on      |    |
  |  +-------------------------------------------+    |
  |                                                    |
  +--------------------------------------------------+
       |
       v
  /ce-work (executes plan units efficiently)
  +----------------------------------+
  | Works through plan units         |
  | TDD cycle runs per unit          |
  | Tracks completion status         |
  +----------------------------------+
       |
       v
  All plan units complete
  Full test suite GREEN
```

**Skills activated:**
- `/tdd-first` — MANDATORY, enforced by hook. Cannot be skipped.
- `/ce-work` — orchestrates execution across plan units
- `/security-review` — activated when touching auth, user input, secrets, APIs

**Enforcement points:**
1. Hook injects mandatory skill activation instruction
2. TDD skill refuses to declare "done" without full suite passing
3. Verification skill prevents completion claims without evidence

---

## Phase 4: End-to-End Verification

**When:** Code is built, all TDD tests pass. Now verify the *running application*.

```
  All tests GREEN
       |
       v
  /e2e-feature-test
  +--------------------------------------------------+
  |                                                    |
  |  Step 1: SETUP                                     |
  |  +-------------------------------------------+    |
  |  | Verify agent-browser installed             |    |
  |  | Detect dev server port                     |    |
  |  | Choose headed/headless mode                |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 2: GENERATE TEST MATRIX                      |
  |  +-------------------------------------------+    |
  |  | Read source files to understand feature    |    |
  |  | Build exhaustive test cases:               |    |
  |  |  - Happy path                              |    |
  |  |  - Input validation                        |    |
  |  |  - Edge cases                              |    |
  |  |  - Error handling                          |    |
  |  |  - Backend state verification              |    |
  |  |  - UI feedback                             |    |
  |  |  - Permissions                             |    |
  |  |  - Idempotency                             |    |
  |  | Present matrix for approval                |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 3: EXECUTE (per test case)                   |
  |  +-------------------------------------------+    |
  |  |                                             |    |
  |  |  Capture backend pre-state                  |    |
  |  |  (DB counts, existing records)              |    |
  |  |       |                                     |    |
  |  |       v                                     |    |
  |  |  Drive browser UI                           |    |
  |  |  (agent-browser: fill, click, navigate)     |    |
  |  |       |                                     |    |
  |  |       v                                     |    |
  |  |  Verify frontend result                     |    |
  |  |  (screenshots, DOM snapshots, URLs)         |    |
  |  |       |                                     |    |
  |  |       v                                     |    |
  |  |  Verify backend post-state                  |    |
  |  |  (DB records, API responses, logs)          |    |
  |  |       |                                     |    |
  |  |       v                                     |    |
  |  |  Record PASS/FAIL with evidence             |    |
  |  |                                             |    |
  |  +-------------------------------------------+    |
  |       |                                            |
  |  Step 4: REPORT                                    |
  |  +-------------------------------------------+    |
  |  | Summary table: pass/fail/skip per category |    |
  |  | Failure details with screenshots           |    |
  |  | Backend verification summary               |    |
  |  | Overall: PASS / FAIL / PARTIAL             |    |
  |  +-------------------------------------------+    |
  |                                                    |
  +--------------------------------------------------+
       |
       v
  +========================================+
  | HOOK ENFORCES: verification-before-    |
  | completion ACTIVATED                    |
  | "No claims without evidence"           |
  +========================================+
       |
       v
  Feature verified. Ready to ship.
```

**Skills activated:**
- `/e2e-feature-test` — browser-driven UI + backend state verification
- `/verification-before-completion` — MANDATORY, enforced by hook. No "done" without proof.

---

## Complete Pipeline (Single View)

```
+------------------------------------------------------------------+
|                    UserPromptSubmit Hook                          |
|           (fires on EVERY prompt, injects rules)                 |
+------------------------------------------------------------------+
       |
       | Enforces: tdd-first + verification-before-completion
       | Evaluates: all other skills for relevance
       |
+------+-------+----------------+-----------------+----------------+
|              |                |                 |                |
v              v                v                 v                v
IDEATE         PLAN             BUILD             VERIFY           SHIP

/ce-brainstorm /ce-plan         /tdd-first        /e2e-feature-   git commit
/last30days    /document-review /ce-work           test            git push
                                /security-review  /verification-   gh pr create
                                                   before-
                                                   completion

Explore the    Break into       Write tests       Drive real       Commit with
problem.       units with       FIRST.            browser.         evidence.
Research       acceptance       Confirm RED.      Verify UI +      Create PR.
what others    criteria.        Implement.        backend state.
are doing.                      Confirm GREEN.    Screenshot
                                Full suite.       proof.
+------+-------+----------------+-----------------+----------------+
```

---

## Enforcement Architecture

```
+------------------------------------------+
|           settings.json hooks            |
+------------------------------------------+
|                                          |
|  UserPromptSubmit                        |
|  +------------------------------------+ |
|  | skill-forced-eval-hook.sh          | |
|  | - Injects mandatory instructions   | |
|  | - Forces skill evaluation          | |
|  | - Hardcodes tdd-first +            | |
|  |   verification as always-active    | |
|  +------------------------------------+ |
|                                          |
|  PostToolUse (Write|Edit)                |
|  +------------------------------------+ |
|  | britfix/run-hook.sh               | |
|  | - Runs after file modifications    | |
|  +------------------------------------+ |
|                                          |
|  Stop                                    |
|  +------------------------------------+ |
|  | osascript beep                     | |
|  | session-end.js                     | |
|  +------------------------------------+ |
|                                          |
|  Notification (compact)                  |
|  +------------------------------------+ |
|  | pre-compact.js                     | |
|  +------------------------------------+ |
|                                          |
+------------------------------------------+

Advisory (CLAUDE.md)     vs     Deterministic (Hooks)
- Can be forgotten              - Always fires
- Per-conversation              - Survives restarts
- Honour system                 - Enforced gates
- Context-dependent             - Unconditional
```

---

## Key Rules

1. **No code without TDD.** The hook enforces this. Tests before implementation, always.
2. **No "done" without evidence.** Verification skill requires command output proving the claim.
3. **No jumping to code from a vague idea.** Brainstorm first, plan second, build third.
4. **No frontend-only or backend-only testing.** E2E tests both layers together.
5. **Skills must be activated, not just mentioned.** The hook explicitly states: "Mentioning a skill without activating it is worthless."

---

## Quick Reference: When to Use What

| Situation | Skill(s) | Mandatory? |
|-----------|----------|------------|
| Vague idea, exploring options | `/ce-brainstorm` + `/last30days` | No |
| Clear requirements, need a plan | `/ce-plan` | No |
| Writing any code with logic | `/tdd-first` | YES (hook-enforced) |
| Executing a plan | `/ce-work` + `/tdd-first` | `/tdd-first` is mandatory |
| Feature built, need acceptance testing | `/e2e-feature-test` | No (but recommended) |
| Claiming work is done | `/verification-before-completion` | YES (hook-enforced) |
| Touching auth, secrets, user input | `/security-review` | Triggered by context |
| Reviewing code for quality | `/code-review` or `/ce-review` | No |
