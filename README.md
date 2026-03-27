# 🎯 Juan Manuel Torres - Professional Portfolio

**Geospatial Engineer & Full-Stack Developer**

> Modern, bilingual portfolio built with React 18, Vite 5, TypeScript, and Material-UI 5. Showcasing geospatial projects and full-stack development expertise.
>
> 🌐 **Live:** 
---

## 🚀 Stack & Features

| Category | Technologies |
|----------|-------------|
| ⚡ Build | Vite 5.0 — ultra-fast HMR & production builds |
| ⚛️ UI | React 18 + TypeScript 5.2 |
| 🎨 Components | Material-UI 5.14 + Emotion |
| ✏️ Typography | Space Grotesk (headings) + Inter (body) via Google Fonts |
| 🌐 i18n | react-i18next — ES/EN with localStorage persistence |
| 🌙 Theming | Dark mode (default) / Light mode toggle |
| 📱 Responsive | Mobile-first with hamburger menu, `clamp()` typography, adaptive padding |
| 🚀 Hosting | GitHub Pages via `gh-pages` branch |

---

## 📁 Project Structure

```
portfolio-work/
├── index.html                # Entry point (Google Fonts, meta tags)
├── vite.config.ts            # base: '/portfolio/'
├── package.json              # Dependencies & scripts
├── src/
│   ├── main.tsx              # React root
│   ├── App.tsx               # ThemeProvider + dark mode state
│   ├── index.css             # Global styles, scrollbar, selection
│   ├── app/
│   │   └── theme.ts          # Light/Dark MUI themes, shared typography
│   ├── components/
│   │   └── Navbar.tsx        # Responsive navbar with Drawer (mobile)
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── FeaturedProjectSection.tsx
│   │   ├── OtherProjectsSection.tsx
│   │   ├── ExpertiseSection.tsx
│   │   ├── ContactSection.tsx   # Formspree integration
│   │   └── Footer.tsx
│   └── i18n/
│       ├── index.ts          # i18next config
│       ├── es.json           # Spanish translations
│       └── en.json           # English translations
└── legacy/                   # Original static HTML/CSS/JS
```

---

## 🌟 Featured Project: GEO-PLATFORM v3.0

A production-ready mineral exploration platform featuring:

- **Backend:** FastAPI (Python 3.11.9) deployed on Render.com
- **Frontend:** React 18 + TypeScript deployed on Vercel
- **Database:** PostgreSQL 15 + PostGIS 3.4+ on Supabase
- **Geospatial:** Interactive maps, assay analytics, domain visualization

| Metric | Value |
|--------|-------|
| Drillholes | 4 |
| Samples | ~1,200 |
| Assay Results | 682 |
| API Endpoints | 9 |
| DB Tables | 30+ |

**Live Links:**
- 🚀 [Explore Demo](https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app)
- 📡 [API Documentation](https://geo-plataform.onrender.com)
- 💻 [GitHub Source](https://github.com/InsightLaboratory/Geo_Platform)

---

## 🛠️ Local Development

```bash
cd portfolio-work
npm install --legacy-peer-deps
npm run dev          # http://localhost:5173/portfolio/
```

## 🚀 Build & Deploy

```bash
# 1. Build
npm install --legacy-peer-deps
npx tsc -b
npx vite build

# 2. Deploy to gh-pages
# Copy dist → temp, switch to gh-pages, replace files, push, return to main
```

> **Note:** GitHub Actions is currently blocked by an org billing issue. Deploy manually via the `gh-pages` branch.

---

## 📞 Contact

- 🔗 [GitHub](https://github.com/InsightLaboratory)
- 💼 [LinkedIn](https://www.linkedin.com/in/juanmtorres23/)
- 🌐 [InsightLab](https://insightlaboratory.github.io)

---

**Last Updated:** March 2026 | **Status:** ✅ Production Ready & Live
