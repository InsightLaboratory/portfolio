# 🎯 Juan Manuel Torres - Professional Portfolio

**Geospatial Engineer & Full-Stack Developer**

---

## 📋 Executive Summary

Professional portfolio of Juan Manuel Torres, engineer specializing in full-stack development with focus on geospatial platforms for mineral exploration. The portfolio showcases production projects, technical skills, and experience in scalable software architecture.

---

## 🚀 Main Projects

### 1. **GEO-PLATFORM v3.0** ⭐ (Featured Project)
**Status:** ✅ Fully Live in Production | March 2026

A comprehensive mineral exploration platform featuring:

**Backend Infrastructure:**
- FastAPI 0.104.1 (Python 3.11.9)
- 9 REST API Endpoints
- Connection Pooling (2-10 connections)
- Deployed on Render.com
- Production logging & error handling

**Frontend Stack:**
- React 18 + TypeScript
- Vite 5.4.21 (Ultra-fast builds)
- Shadcn/ui Component Library
- Tailwind CSS Styling
- Dark/Light mode support
- Deployed on Vercel

**Geospatial & Database:**
- PostgreSQL 15 + PostGIS 3.4+
- Supabase Cloud Hosting
- 30+ Database Tables
- 13 Analytical SQL Views
- Data in EPSG:4326 (WGS84)

**Key Features:**
- 🗺️ Interactive maps with React-Leaflet 4.2
- 📊 Assay visualization with Recharts
- 📍 GeoJSON spatial analysis
- 🎨 Persistent theme system
- 📱 Fully responsive design
- ⚡ Type-safe API integration

**Access:**
- 🚀 [Live Demo](https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app)
- 📡 [API Documentation](https://geo-plataform.onrender.com)
- 💾 [GitHub Source](https://github.com/InsightLaboratory/Geo_Platform)

**Dataset Scale:**
- 4 Drillholes
- ~1,200 Samples
- 682+ Assay Results
- Complete Lithology, Alteration, Mineralization Logs

---

### 2. **Google Earth Engine Applications**
**Technologies:** JavaScript • Geospatial Analysis • Satellite Imagery

Interactive applications for global-scale geospatial analysis:

- **Highest-Points-of-Argentina-Glaciar-Hydro-DEM:**
  - 3D visualization of Andean peaks (4,000+ meters)
  - Integrated analysis: DEM, glaciers, hydrology, geological structures
  - High-resolution Landsat imagery

- **Cordobaengine:**
  - Topographic analysis of Sierra Pampeanas
  - Interactive digital elevation models
  - Geological structure analysis

**Access:**
- [GitHub Repository](https://github.com/InsightLaboratory/MisAplicaciones)

---

### 3. **InsightLab - Science & Technology Portfolio**
Showcasing geospatial and scientific tools:
- Meteorological Data (Ventusky)
- Collaborative Mapping (OpenStreetMap)
- Outdoor & Geoscience (Gaia GPS)
- Space Exploration (Asterank, Galaxies)
- Paleontology (PaleoDatabase)

**Visit:** [insightlaboratory.github.io](https://insightlaboratory.github.io)

---

## 💼 Technical Expertise

### Backend Development
- **Python:** FastAPI, Uvicorn, Connection Pooling
- **API Architecture:** RESTful design patterns, CORS handling
- **Performance:** Query optimization, connection pooling, logging

### Frontend Development
- **React 18** + TypeScript
- **Build Systems:** Vite, webpack optimization
- **UI Frameworks:** Shadcn/ui, Tailwind CSS
- **Data Visualization:** Recharts, D3.js patterns

### Geospatial Technologies
- **PostGIS:** Geometric operations, spatial queries, GeoJSON
- **Mapping Libraries:** Leaflet.js, React-Leaflet, OpenStreetMap
- **Data Processing:** GDAL, GeoPandas, GDAL Python bindings
- **Coordinate Systems:** EPSG:4326 (WGS84), projections

### Databases
- **PostgreSQL 15+:** Advanced SQL, optimization, tuning
- **PostGIS 3.4+:** Spatial data management, geometric analysis
- **Supabase:** Cloud hosting, real-time updates
- **Schema Design:** Normalized models, UUID keys, interval-based geometry

### Cloud & DevOps
- **Deployment:** Render.com (Python), Vercel (React)
- **Databases:** Supabase Cloud PostgreSQL
- **CI/CD:** Automated git push deployments
- **Infrastructure:** SSL/TLS, CORS configuration, scaling

### Domain Expertise
- **Mineral Exploration:** Drillhole databases, assay workflows
- **Geological Modeling:** Domain interpretation, grade estimation
- **Geochemical Analysis:** Multi-element assays, pattern recognition
- **Data Visualization:** Scientific visualization, real-time dashboards

---

## 📊 Architecture & Technology Stack

### Complete Tech Stack
```
Frontend Layer:
├── React 18 + TypeScript
├── Vite 5.4.21 (Module bundler)
├── Shadcn/ui (Component library)
├── Tailwind CSS (Styling)
├── Recharts (Data visualization)
└── React-Leaflet 4.2 (Map library)

Backend Layer:
├── FastAPI 0.104.1
├── Python 3.11.9
├── Uvicorn (ASGI server)
├── psycopg2 pooling
└── Structured logging

Data Layer:
├── PostgreSQL 15
├── PostGIS 3.4+
├── UUID primary keys
├── 30+ domain tables
└── 13 analytical views

Deployment:
├── Render.com (Backend)
├── Vercel (Frontend)
├── Supabase (Database)
└── GitHub Actions (CI/CD)
```

---

## 📈 Data Model (Geo-Platform)

### Core Tables (30+)
- `drillholes` - Drillhole metadata and status
- `collars` - Collar locations with PostGIS geometry
- `samples` - Sample intervals using numrange type
- `assay_results` - Multi-element assay data
- `elements` - Element catalog (Au, Cu, As, etc.)
- `lithology_intervals` - Rock type classifications
- `alteration_events` - Alteration mineral associations
- `mineralization_intervals` - Ore mineral percentages
- `geological_domains` - Domain boundaries and types

### Analytical Views (13+)
- `v_sample_geology` - Integrated geological dataset
- `v_drillhole_summary` - Statistics per drillhole
- `v_drillhole_locations` - GeoJSON-ready features
- `v_domain_statistics` - Grade statistics by domain
- `v_downhole_composites` - 5-meter weighted composites
- `v_high_grade_intersections` - Au ≥ 1 g/t intersections
- `v_ml_dataset` - Machine learning feature set

---

## 🔌 API Endpoints (9 Available)

| Endpoint | Method | Description | Features |
|----------|--------|-------------|----------|
| `/health` | GET | API health check | Uptime monitoring |
| `/drillholes` | GET | List all drillholes | Pagination support |
| `/drillholes/{id}/summary` | GET | Drillhole summary stats | Total samples, Au grade, depth |
| `/drillholes/{id}/assays` | GET | Assay results | Filterable by element, depth |
| `/drillholes/{id}/lithology` | GET | Lithology intervals | By depth range |
| `/geospatial/drillhole-locations` | GET | Location features | GeoJSON-formatted |
| `/geospatial/domains` | GET | Domain geometries | Polygon features |
| `/geospatial/drillholes-geojson` | GET | All drillholes | FeatureCollection |

**Query Examples:**
- Pagination: `?page=1&limit=50`
- Filtering: `?element=Au&from_depth=0&to_depth=100`
- CRS: All spatial data in EPSG:4326

---

## 📱 Frontend Components

### Hero Section
- 5-second project overview
- Visual feature highlights
- Dataset metrics
- Call-to-action buttons

### Search & Filter Panel
- Real-time drillhole name search
- Dual-handle Au grade slider
- Min/Max ppb visual feedback
- Reset filters button

### Interactive Map
- 🗺️ Real-time drillhole locations
- 📍 Click popups with data
- Integrated statistics
- Dark/Light mode support

### TopDrillholes Ranking
- Top 4 drillholes by max Au
- Normalized progress bars
- Sample counts & average grades
- Click-to-select integration

### Assay Charts
- Depth vs. Au relationships
- Interactive Recharts
- Multi-element visualization
- Export-friendly formats

---

## 📡 Production Deployment

### Backend (Render.com)
```
FastAPI Application
├── 9 REST endpoints
├── Connection pooling (2-10)
├── CORS enabled
├── Error handling
└── Structured logging
```

### Frontend (Vercel)
```
React Application
├── Auto-deployment on push
├── CDN distribution
├── SSL/TLS
├── Performance optimization
└── Analytics ready
```

### Database (Supabase)
```
PostgreSQL 15 + PostGIS
├── Cloud-hosted
├── Automated backups
├── Row-level security
├── Real-time capable
└── API auto-generated
```

---

## 🌐 Contact & Presence

**Professional Networks:**
- 🔗 [GitHub Profile](https://github.com/InsightLaboratory)
- 💼 [LinkedIn](https://www.linkedin.com/in/juanmtorres23/)
- 🌐 [InsightLab Website](https://insightlaboratory.github.io)

**Live Projects:**
- 🌍 [Geo-Platform Explorer](https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app)
- 📡 [Geo-Platform API](https://geo-plataform.onrender.com)
- 🛰️ [Earth Engine Apps](https://github.com/InsightLaboratory/MisAplicaciones)

---

## 🎯 Summary of Achievements

✅ **Production Mineral Exploration Platform**
- End-to-end full-stack development
- Complex geospatial database (30+ tables)
- REST API with 9 endpoints
- Modern interactive frontend

✅ **Geospatial Solutions Architect**
- PostgreSQL/PostGIS schema design
- Geological data integration
- Interactive spatial visualization

✅ **Full-Stack Engineer**
- Backend: Python/FastAPI
- Frontend: React/TypeScript
- DevOps: Render, Vercel, Supabase
- Database: PostgreSQL/PostGIS advanced

✅ **Domain Specialist**
- Mineral exploration workflows
- Geological data modeling
- Geochemical analysis
- Production-ready systems

---

## 🎓 Core Competencies

- Full-Stack Software Development
- API Architecture & Design
- Advanced Relational Databases
- Geospatial Data Analysis
- Mineral Exploration Technology
- Scientific Data Visualization
- Cloud Infrastructure & DevOps
- Production System Development

---

## 📝 Notes

- All projects are actively maintained and production-ready
- Code is modular, scalable, and well-documented
- Following professional development best practices
- Modern stack: React 18, FastAPI, PostgreSQL/PostGIS
- Deployed on cloud infrastructure with auto-scaling

---

**Last Updated:** March 2026 | **Version:** 3.0 | **Status:** ✅ Production
