# IMPLEMENTATION PLAN & ROADMAP
# SRN Mehta Modern Institutional Website (Production Roadmap)

---

## Phase Overview & Progress

- [x] **PHASE 0: Discovery & Asset Ingestion**
  - Document collected media URLs, classify campus images, labs, events, awards, and videos.
  - Create `docs/ASSET_INVENTORY.md` and `docs/MEDIA_RIGHTS_CHECKLIST.md`.

- [x] **PHASE 1: Project Foundation & Documentation**
  - Create `PRD.md`, `Architecture.md`, `Implementation_plan.md`, `CLAUDE.md`, and `docs/DEPLOYMENT.md`.
  - Update `metadata.json` with official name, description, and permissions.
  - Sync `index.html` title, meta description, favicon, and OpenGraph headers.

- [x] **PHASE 2: Design System & Token Architecture**
  - Configure Tailwind CSS tokens, color variables, typography hierarchy, and global resets.
  - Implement zero-broken-image resilient image component and reusable UI primitives.

- [x] **PHASE 3: Structured Data Layer**
  - Build strong TypeScript contracts in `src/types/institution.ts`.
  - Populate verified institutional data (`institution.ts`, `academics.ts`, `facilities.ts`, `events.ts`, `news.ts`, `gallery.ts`, `testimonials.ts`, `faculty.ts`).

- [x] **PHASE 4: Global Shell & Accessible Navigation**
  - Top emergency announcement / admission alert bar.
  - 3-Zone Sticky Navigation Bar with active indicator, mobile drawer with body scroll lock.
  - Comprehensive institutional footer with trust marks, affiliation numbers, and quick links.

- [x] **PHASE 5: Cinematic Homepage Experience**
  - Editorial hero with admissions badge, video/media backdrop, and verified metrics counter.
  - Academic Wings selector (CBSE, State Board, PU College, Degree College).
  - Infrastructure & Modern Laboratories highlight grid.
  - Real Parent Testimonials video showcase with synchronized transcripts.
  - Featured Events & Annual Highlights (Science Expo, Mock Parliament, Shark Tank CCA).
  - Press Releases & 100% Board Distinction results announcement.
  - Quick Admission Inquiry / Callback request module.

- [x] **PHASE 6: Core Dedicated Pages**
  - `/about`: Trust history (Shri S.R.J. Naval Trust), Mission, Vision, Leadership, National Accolades.
  - `/academics`: Complete curriculum breakdown, ETutor exam system, integrated IIT-JEE / NEET / CA-CPT coaching.
  - `/facilities`: 16+ detailed lab & amenity dossiers (Physics, Chem, Bio, Electronics, Math, Computer, NCC, Pool).
  - `/faculty`: Leadership profiles and department heads.
  - `/events` & `/events/:slug`: Filterable chronological event feed with detailed slug pages.
  - `/news` & `/news/:slug`: Official press releases, board result circulars, vacancy notifications.
  - `/gallery`: High-performance categorized grid with full-screen keyboard-accessible Lightbox.
  - `/contact`: Office coordinates, Google Maps orientation, working validated inquiry form with state feedback.
  - `/privacy`: Institutional data privacy and student media consent policy.
  - `/404`: Custom institutional not found screen with return triggers.

- [x] **PHASE 7: Performance, Accessibility & SEO Polish**
  - JSON-LD structured organization schema.
  - Keyboard focus rings, ARIA roles, responsive validation across 320px–1920px.
  - Motion transitions honoring `prefers-reduced-motion`.

- [x] **PHASE 8: Production Build & Deployment Verification**
  - Execute `compile_applet` to ensure zero compilation or type errors.
  - Validate production readiness and document deployment guidelines in `docs/DEPLOYMENT.md`.
