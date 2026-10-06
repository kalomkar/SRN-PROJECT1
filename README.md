# S.R.N. Mehta Institutions — Official Web Portal

> **Motto:** *"Teach Them, They Serve The Nation"*  
> **Governance:** Run by **Shri S.R.J. Naval Trust** (Est. 1991, Kalaburagi, Karnataka)  
> **Accreditation:** Ranked #1 in India for Community Services (CBSE Category) · CBSE Affiliation No. 830349 · Karnataka State Board · Gulbarga University  

---

## 🏛️ Academic Wings & Subject Departments

1. **CBSE Public School** (`/academics/cbse`): Pre-KG to Class 10 (NCERT, Smart Classrooms, English Communicative Fluency).
2. **Karnataka State Board High School** (`/academics/state-board`): Grade 1 to 10 (SSLC 100% Pass Record).
3. **Composite Pre-University College** (`/academics/pu-college`): Science (PCMB/PCMC) & Commerce (EBAC/SEBA) with Integrated NEET / IIT-JEE / KCET / CA Foundation coaching and 120-terminal ETutor computerized testing hub.
4. **S.R.N. Mehta Degree College** (`/academics/degree-college` & `/departments/:deptId`):
   - **Computer Applications (BCA)** (`/bca`, `/departments/computer-applications`)
   - **English Department** (`/english`, `/departments/english`)
   - **Hindi Department** (`/hindi`, `/departments/hindi`)
   - **Kannada Department** (`/kannada`, `/departments/kannada`)
   - **Mathematics Department** (`/mathematics`, `/departments/mathematics`)
   - **Commerce Department (B.Com)** (`/commerce`, `/departments/commerce`)

---

## ✨ Motion & Design System Hierarchy

- **Level 1 (Global)**: Tactile button micro-interactions (`active:scale-[0.98]`), link hover underlines, lightweight route page transitions (`PageTransition`), reading scroll progress bar (`ScrollProgress`).
- **Level 2 (Section)**: Viewport-triggered scroll reveals (`ScrollReveal` with `once: true`, GPU-accelerated transforms).
- **Level 3 (Hero)**: Sequential mask upward reveal (`MaskRevealText`) and animated statistics counting (`AnimatedCounter`).
- **Accessibility**: Full `prefers-reduced-motion: reduce` compliance across all motion primitives.

---

## 🚀 Quick Start & Windows Automation Scripts

All scripts are located in the `scripts/` directory and can be double-clicked on Windows or run from the command line:

| Script | Command | Purpose |
|---|---|---|
| **First-Time Setup** | `scripts\setup.bat` | Checks Node.js/npm and installs all dependencies |
| **Development Server** | `scripts\dev.bat` | Starts Vite local dev server at `http://localhost:3000` |
| **Production Build** | `scripts\build.bat` | Compiles production assets into `dist/` |
| **Preview Build** | `scripts\preview.bat` | Serves and tests the compiled production build locally |
| **Run Tests & Typecheck** | `scripts\test.bat` | Runs TypeScript compilation and project test suite |
| **Quality Check** | `scripts\check.bat` | Runs Node, npm, lint, and build verification |
| **Production Check** | `scripts\deploy-check.bat` | Full pre-deployment verification report |
| **Safe Cleanup** | `scripts\clean.bat` | Safely clears `dist/` (with confirmation for `node_modules`) |
| **Git Status** | `scripts\git-status.bat` | Shows current branch and modified files |

---

## 🛠️ CLI / Terminal Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# TypeScript typecheck / lint
npm run lint

# Compile production build
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Production Deployment (Vercel & Netlify)

1. **Vercel**:
   - `vercel.json` is configured with `npm install --legacy-peer-deps` and SPA rewrites.
   - Push code to GitHub (`main` branch) and link the repository in Vercel Dashboard.
2. **Netlify**:
   - `public/_redirects` (`/* /index.html 200`) provides seamless single-page application routing.

---

## 👥 Verified Degree College Faculty Roster

- **Computer Applications (BCA)**:
  - *Mr. Virupaksha M. Shastri* — Professor & HOD (MCA)
  - *Smt. Ambika Ganapur* — Asst. Prof. (MCA)
  - *Mr. Sourabh Kulkarni* — Asst. Prof. (MCA)
- **English**: *Prabha G. Hugar* — Asst. Prof. (M.A, B.Ed)
- **Hindi**: *Dr. Vaishali Mahajan* — Asst. Prof. (M.A, M.Phil, Ph.D)
- **Kannada**: *Smt. Tulasi Kumari* — Asst. Prof. (M.A, M.Ed, M.Phil)
- **Mathematics**: *Mr. Nikhil Nandikol* — Asst. Prof. (M.Sc, B.Ed)

---

## 👨‍💻 Developer Credit
**Developed by Omkar Kalshetti** (integrated into the official footer across all pages).
