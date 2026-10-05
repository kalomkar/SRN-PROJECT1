# SYSTEM ARCHITECTURE & TECHNICAL DESIGN
# SRN Mehta Modern Institutional Website (V1.0)

---

## 1. Architectural Overview
The application is architected as a high-performance, single-page application (SPA) built with React 19, TypeScript, Vite 8, and Tailwind CSS v4. The system is designed around a strictly typed local data repository layer that decouples institutional content from presentation components.

```
[ Institutional Data Layer ] (src/data/*.ts)
         │
         ▼
[ Presentation & Page Layer ] (src/pages/*.tsx)
         │
         ├── [ Global Layout Shell ] (Navbar, TopBar, Footer, Floating Action Hub)
         ├── [ UI Design System ] (Buttons, Cards, Modals, Lightbox, VideoPlayer, SectionHeaders)
         └── [ Motion & Transition Engine ] (Motion / Framer Motion / CSS Transitions)
         │
         ▼
[ Production Build Pipeline ] (Vite / PostCSS / TypeScript Compiler)
         │
         ▼
[ Edge Deployment Target ] (Vercel / Netlify / AI Studio Dev Server)
```

---

## 2. Technology Stack & Selection Rationale

| Technology | Purpose | Selection Rationale |
| :--- | :--- | :--- |
| **React 19 & TypeScript** | Component UI & Type Safety | Industry standard for modularity, strict data contracts, fast rendering, and maintainability. |
| **Vite 8** | Build Engine & Dev Server | Ultra-fast HMR, optimized production asset bundling, tree-shaking, and code splitting. |
| **Tailwind CSS v4** | Utility-First Styling System | Zero CSS runtime overhead, predictable responsive typography, design tokens, and clean maintenance. |
| **Motion (Framer Motion)** | Micro-Interactions & Transitions | Smooth layout transitions, orchestrating staggered entrance animations, and reduced-motion compliance. |
| **Lucide React** | Accessible Iconography | Lightweight, tree-shakeable SVG icons with standard ARIA attributes. |
| **React Router v7** | Client-Side Routing | Dynamic route matching, nested layouts, scroll restoration, and SEO-friendly slug parameters. |

---

## 3. Directory & File Organization

```
src/
├── assets/                  # Institutional logos, SVG badges, and fallback graphics
├── components/
│   ├── layout/              # AppShell, TopBar, HeaderNav, MobileDrawer, Footer
│   ├── navigation/          # Breadcrumbs, TabNav, FilterTabs
│   ├── hero/                # CinematicHero, StatCounters, AnnouncementTicker
│   ├── sections/            # AboutSummary, AcademicWings, FacilityGrid, VideoShowcase,
│   │                        # EventsFeed, NewsGrid, AccoladesRow, TestimonialsSlider
│   ├── gallery/             # GalleryGrid, LightboxModal, CategoryFilter
│   ├── media/               # ResponsiveVideoPlayer, OptimizedImage, MediaBadge
│   ├── forms/               # AdmissionInquiryForm, ContactForm, FormFeedback
│   └── ui/                  # Button, Badge, Modal, Card, SectionHeading, Accordion
├── data/
│   ├── institution.ts       # Core metadata, trust history, contact details, stats
│   ├── academics.ts         # Streams (CBSE, State, PU, Degree), curriculum, competitive coaching
│   ├── facilities.ts        # 16+ verified labs and infrastructure records
│   ├── events.ts            # Historical and upcoming events with media and timestamps
│   ├── news.ts              # Result notifications, press releases, circulars
│   ├── gallery.ts           # 50+ curated verified photographs across categories
│   ├── testimonials.ts      # Authentic parent video transcripts and quotes
│   ├── faculty.ts           # Leadership, academic heads, and department leads
│   └── navigation.ts        # Main menu, quick links, social channels
├── hooks/
│   ├── useScrollPosition.ts # Sticky header & scroll tracking
│   ├── useMediaFilter.ts    # Dynamic category filtering & search
│   └── useReducedMotion.ts  # Accessibility motion preference detection
├── types/
│   ├── institution.ts       # TypeScript interfaces for all content entities
│   └── forms.ts             # Contact and admission form schemas
├── utils/
│   ├── formatters.ts        # Date, slug, and text utilities
│   └── mediaFallbacks.ts    # Zero-broken-image fallback generators
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── AcademicsPage.tsx
│   ├── FacilitiesPage.tsx
│   ├── FacultyPage.tsx
│   ├── EventsPage.tsx
│   ├── EventDetailPage.tsx
│   ├── NewsPage.tsx
│   ├── NewsDetailPage.tsx
│   ├── GalleryPage.tsx
│   ├── ContactPage.tsx
│   ├── PrivacyPolicyPage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   └── tokens.css           # Institutional color palette & typography variables
├── App.tsx                  # Router configuration & root provider tree
└── main.tsx                 # Client bootstrap entry point
```

---

## 4. Visual Design System & Tokens
Adhering to the **Institutional / Museum-Editorial Design Constitution**:
- **Primary Color**: Deep Oxford Navy (`#0F172A` / `#1E3A8A`) conveying academic integrity and discipline.
- **Secondary Accent**: Imperial Crimson & Warm Gold (`#991B1B` / `#B45309`) echoing institutional emblems and distinction.
- **Canvas / Neutral**: Clean Alabaster & Chalk (`#F8FAFC` / `#FFFFFF`) with crisp hairline borders (`#E2E8F0`).
- **Typography Pairing**:
  - *Headings*: High-contrast editorial display serif (`Playfair Display`, `Cormorant Garamond`, or serif fallback).
  - *Body Text*: Clean, balanced sans-serif (`system-ui`, `-apple-system`, `Inter`, `sans-serif`) at 65–75 character measure.
- **Zero-Pill Discipline**: Metadata displayed as clean, unboxed text separated by typographic middots (`·`) rather than loud badge capsules.

---

## 5. Media & Asset Strategy
- **Authentic Scraped Media**: Utilizes verified images from `srnmehtaschool.com` (campus, labs, science expo, splash pool, NCC, awards) with descriptive alt attributes and lazy loading.
- **Zero-Broken-Image Policy**: All image components attach an `onError` fallback handler that replaces unreachable URLs with institutional SVG artwork containers.
- **Video Experience**: Implements parent testimonial videos with HTML5 video elements, poster frames, mute defaults, and real synchronized audio transcripts.
