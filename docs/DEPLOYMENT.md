# PRODUCTION DEPLOYMENT GUIDE
# SRN Mehta Modern Institutional Website

---

## 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended).
- **Package Manager**: `npm` or `bun`.
- **Target Platform**: Vercel (recommended) / Netlify / Cloudflare Pages.

---

## 2. Local Environment Setup & Verification
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (port 3000)
npm run dev

# 3. Type check and validation
npm run lint

# 4. Production build test
npm run build

# 5. Local production preview
npm run preview
```

---

## 3. Deployment Configuration

### Option A: Vercel Deployment (Recommended)
1. Push the repository to GitHub.
2. Log in to [Vercel Dashboard](https://vercel.com) and import the repository.
3. Configure Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Deploy. Vercel provisions instant global CDN caching and SSL certificates.

### Single Page Application (SPA) Routing for Vercel:
Create `vercel.json` in project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 4. Production Verification Checklist
- [x] Initial page loads under 1.5s with zero console errors.
- [x] All routes (`/`, `/about`, `/academics`, `/facilities`, `/faculty`, `/events`, `/news`, `/gallery`, `/contact`, `/privacy`) load without 404s on browser refresh.
- [x] Lightbox modal opens and navigates with arrow keys and touch swipes.
- [x] Testimonial video player renders seamlessly on desktop and mobile viewports.
- [x] Admission inquiry and contact forms validate required inputs and trigger feedback modals.
