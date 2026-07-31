# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm start          # dev server, port 3000 (netlify dev proxies on 8888, see netlify.toml)
npm run build      # react-scripts build, then postbuild runs scripts/prerender.mjs automatically
npm test           # react-scripts test (Jest, interactive watch)
CI=true npm run build   # non-interactive build, use this to verify before push (matches Netlify CI)
```

No dedicated lint command — ESLint runs via `react-app`/`react-app/jest` config baked into CRA's build/test.

There is no test suite beyond CRA's default `App.test.js` — do not assume feature coverage exists; verify UI changes manually (dev server + browser) per repo convention.

## Architecture

Single-page CRA app (react-scripts 5, React 19, react-router-dom v7) for "Life in the UK" test prep, deployed to Netlify at lifeinukcoach.co.uk.

### Data model
- `src/mockExamsData.js` — the exam bank: `export const mockExams = [...]`, 45 exams × 24 questions. Each question: `{ text, choices[], multiple, correct, explanation, topic }`. `correct` is an index (single-answer) or array of indices (multiple-answer). `topic` values come from `src/studyGuideData.js`'s section names.
- `src/mockExamsData_pre_*_backup.js` — snapshots taken before one-off destructive script edits to the exam bank. Convention in this repo: **always `cp` the data file to a `_pre_<change>_backup.js` copy before running a script that rewrites `mockExamsData.js` in place.** These backups are never deleted or touched again — treat them as historical, not dead code to clean up.
- `src/studyGuideData.js` — the 42-section flashcard/study-guide content structure that topic tags and guide navigation are derived from.

### Persistence
Everything is `localStorage`-based (no backend DB, no user accounts). All reads/writes go through `src/safeStorage.js` (`safeGetItem`/`safeSetItem`/`safeRemoveItem` — guards against private-browsing/quota errors). Used for: premium flag (`lifeInUkPremium`), mock exam results + topic breakdowns, spaced-repetition state, Quick-Fire streaks, read-card tracking, guide checklists, theme, cookie consent, test date.

Cross-device sync is explicitly deferred (no accounts yet) — see `verifyPremium` function below for the one exception (email-based premium restore lookup against Stripe, not a general sync mechanism).

### Premium/paywall
- Client-side gate: `isPremium` state in `src/App.js`, seeded from `safeGetItem(PREMIUM_KEY)` where `PREMIUM_KEY = 'lifeInUkPremium'`.
- Netlify Functions (`netlify/functions/`, Node, CommonJS) back the paid flow:
  - `createCheckout.js` — starts Stripe Checkout session
  - `stripeWebhook.js` — Stripe webhook receiver, marks purchase complete server-side
  - `verifySession.js` — verifies a Checkout session client-side after redirect
  - `verifyPremium.js` — email-based premium restore: looks up Stripe customers by email and checks for a succeeded PaymentIntent, used when a user wants premium on a new device without an account system. Has basic in-memory per-IP rate limiting (resets per cold start, not distributed).
  - `validateRedeemCode.js` — redeem-code alternative unlock path
- All functions share a hardcoded `ALLOWED_ORIGINS` CORS allowlist pattern (production domain + www + localhost dev ports) — replicate this pattern if adding new functions rather than opening CORS wide.

### Routing (`src/App.js`)
`BrowserRouter` with routes for: `/` (flashcards home), `/mock-exams`, `/pricing`, `/cheat-sheet` (premium-gated), `/study-guide/british-history`, `/study-guide/government-and-law`, `/ilr-guide`, and a family of ILR/citizenship guide pages all rendered through one shared `<GuidePage guide={guideBySlug["<slug>"]} />` component fed by `src/pages/immigrationGuides/index.js`'s slug map. Adding a new guide page means adding content to that guides index, not a new page component.

### SEO prerendering
`scripts/prerender.mjs` runs as `postbuild`: spawns a local static server (`npx serve`) over the CRA `build/` output, then uses Puppeteer to visit a hardcoded `routes` array and snapshot each route's post-render HTML (after `useDocumentMeta` sets per-route `<title>`/meta/canonical/OG tags/JSON-LD) into `build/<route>/index.html`. **The `routes` array in this script must be kept in sync with `public/sitemap.xml` and with any new route added to `App.js`** — a route missing from this list won't get correct per-page meta tags and will hurt SEO (this was the original bug the script fixes: every route otherwise self-canonicalized to `/`).

Prerendering failures are non-fatal by design (`main().catch(...) => process.exit(0)`) — a broken Puppeteer/Chrome environment must not fail the whole Netlify deploy.

The server child process is spawned `detached: true` and killed via process-group (`process.kill(-server.pid, ...)`) specifically because killing only the `npx` wrapper process previously left the underlying `serve` process alive, hanging the Netlify build indefinitely after the prerender step.

### Key feature modules
- `src/MockExam.js` — exam-taking flow; exams are looked up by `.find(e => e.id === \`exam${n}\`)`, not positional array indexing (a past bug). Handles in-progress-attempt persistence/resume and must fully clear that state (`discardInProgressAttempt()`) when the user exits rather than just navigating away, or the next attempt resumes stale/mid-timer.
- `src/QuickFireChallenge.js` + `src/quickFireStats.js` — timed quiz mode with topic filtering (top-10-by-volume plus `MIXED`/`WEAK_SPOTS` sentinel options — intentionally not showing the full topic list or question counts, and not exposing every topic, per product decision) and persisted best-streak tracking.
- `src/spacedRepetition.js` — miss-count-weighted resurfacing algorithm for flashcards.
- `src/pages/CheatSheet.js` — in-app premium-gated cheat sheet route; PDF export goes through `src/utils/generateCheatSheet.js` (jsPDF), not the static `public/premium-cheat-sheet.html` (that file is legacy/unused — don't wire new features to it).

## One-off data scripts
`scripts/*.mjs` (e.g. `shuffle_exams_1_10.mjs`, `parse_pdfs_*.mjs`, `fix_mock_exams_data.mjs`) are one-shot mutation scripts against `mockExamsData.js`, typically loading the file via a regex extraction + `new Function('return ' + match)` eval and rewriting it via `JSON.stringify`. They are meant to be run once and are not part of the build pipeline — don't assume they're idempotent or safe to re-run without re-checking the current file state first (back up before running, per the backup convention above).
