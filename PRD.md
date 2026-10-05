# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# SRN Mehta Modern Institutional Website (V1.0 Production)

---

## 1. Project Overview
**SRN Mehta Modern Institutional Website** is an institutional web platform designed for S.R.N. Mehta CBSE & State Board School, PU College, and Degree College located in Kalaburagi (Gulbarga), Karnataka (Established by Shri S.R.J. Naval Trust; Motto: *"Teach Them, They Serve The Nation"*). The project transforms the institution's digital presence into a responsive web application tailored for prospective students, parents, faculty, alumni, education boards, and recruiters.

---

## 2. Problem Statement
The previous web presence lacked modern responsive ergonomics, fast media loading, structured academic pathways, interactive categorized galleries, and accessible admissions navigation. The new platform delivers an editorial institutional aesthetic, high-contrast legibility, zero-broken-image resilience, categorized events and press releases, and structured data models.

---

## 3. Goals & Success Metrics
- **Performance**: Sub-1.5s initial contentful paint, lazy-loaded media assets, optimized responsive imagery.
- **Visual Distinction**: Editorial academic aesthetic adhering to the Institutional Design Constitution (no generic purple AI gradients or floating gimmick capsules).
- **Usability**: 100% accessible navigation, interactive filters, lightbox image gallery, parent testimonial video showcase with captions, and client-validated contact/admissions inquiry engine.
- **Information Architecture**: Transparent presentation of academic streams (CBSE, State Board, Pre-University with integrated NEET/IIT-JEE/CA-CPT, Degree College), world-class infrastructure, awards, and verified achievements.

---

## 4. Target User Personas
1. **Prospective Parents & Students**: Seeking admission details, academic curriculum, safety standards (24/7 CCTV, RO water, infirmary, GPS transport), infrastructure (laboratories, sports, splash pool), and fee/scholarship inquiries.
2. **Current Students & Parents**: Reviewing school calendar, upcoming events (Science Expo, Mock Parliament, Shark Tank CCA), circulars, board results, and academic achievements.
3. **Faculty & Staff Candidates**: Exploring academic culture, institutional values, leadership profiles, and career vacancies.
4. **Alumni & Institutional Partners**: Tracking institutional accolades (Ranked #1 in India for Community Services in CBSE Category, ET TECH X School Excellence Award).

---

## 5. User Journeys
- **Journey 1: Discovery & Admission Inquiry**: Visitor lands on cinematic Hero -> reviews verified statistics & national accolades -> explores 360-degree academic wings -> reviews campus laboratories & sports -> submits an admission inquiry through the validated inquiry form.
- **Journey 2: Visual & Experiential Tour**: Visitor navigates to `/gallery` -> filters by category (Labs, Campus, Sports, Leadership, Events) -> opens high-resolution lightbox with keyboard navigation -> watches authentic parent video testimonials with verified transcripts.
- **Journey 3: Academic & Co-Curricular Verification**: Visitor navigates to `/academics` and `/facilities` -> inspects STEM & computer labs (with ETutor exam terminals), NCC training unit, science expo archives, and integrated competitive exam coaching pathways.

---

## 6. Core Features (In-Scope V1)
1. **Cinematic Hero & Institutional Announcement Bar**: Urgent notices, admission ticker, and hero presentation.
2. **Verified Trust & Quick Metrics**: 30+ Years of Academic Heritage, 100% Board Pass Rate, 25+ Modern Laboratories, State-of-the-art Sports & Splash Pool Facilities.
3. **Academic Wings & Streams Explorer**:
   - CBSE Wing (Affiliation No. 830349 - Pre-KG to Class 10)
   - Karnataka State Board High School Wing
   - Pre-University (PU) College (Science & Commerce with integrated IIT-JEE / NEET / KCET / CA-CPT)
   - S.R.N. Mehta Degree College
4. **Campus Infrastructure & Facilities Showcase**: Specialized Physics, Chemistry, Biology, Mathematics, Electronics, Computer Labs, Digital Library, NCC Ground, Splash Pool, Transport Fleet, Green Solar Campus.
5. **Interactive Filterable Gallery with Lightbox**: Multi-category media grid with smooth transitions, thumbnail previews, keyboard controls (ESC, Arrow Left/Right), and zoom modal.
6. **Parent Testimonial Showcase**: Multi-clip video experience with authentic transcripts from real parents, responsive controls, and audio fallback.
7. **Events & Calendar Module**: Categorized event listings (Academic, Cultural, Sports, Excursions, Leadership) with dedicated event detail view `/events/:slug`.
8. **Institutional News & Notices Bulletin**: Academic results, merit lists, press cuttings, vacancy alerts with detail view `/news/:slug`.
9. **Faculty & Leadership Directory**: Board of Trustees, Principal, Deans, and Heads of Departments.
10. **Interactive Admissions & Contact Hub**: Form validation, campus coordinates, office timings, direct communication channels.
11. **Comprehensive Accessibility (a11y)**: WCAG AA contrast, full keyboard navigation, skip-to-content links, ARIA labels, `prefers-reduced-motion` compliance.
12. **Complete SEO & OpenGraph**: Rich JSON-LD educational organization schema, semantic tags, OpenGraph card metadata.

---

## 7. Out-of-Scope (Deferred to Phase 2)
- Complex SQL/NoSQL backend database or live CMS editor (V1 leverages strongly-typed static local models for rock-solid stability, zero downtime, and zero hosting costs).
- Online Payment Gateway for student fee payment (Form initiates direct institutional counselor callback).
- Live Student Information Portal (SIS) login (Requires authenticated ERP integration).

---

## 8. Non-Functional Requirements
- **Browser Compatibility**: Evergreen browsers (Chrome, Firefox, Safari, Edge), iOS Safari, Android Chrome.
- **Breakpoints**: 320px (mobile compact), 375px (standard mobile), 768px (tablet), 1024px (laptop), 1440px (desktop), 1920px (large desktop).
- **Security**: Zero-runtime vulnerabilities, sanitized input fields, zero hardcoded API secrets in frontend bundles.
