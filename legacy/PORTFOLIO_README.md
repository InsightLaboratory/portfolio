# 🎯 Juan Manuel Torres - Portafolio Profesional

**Geospatial Engineer & Full-Stack Developer**

---

## 📋 Resumen Ejecutivo

Portafolio profesional de Juan Manuel Torres, ingeniero especializado en desarrollo full-stack con enfoque en plataformas geoespaciales para exploración mineral. El portafolio destaca proyectos en producción, habilidades técnicas y experiencia en arquitectura de software escalable.

---

## 🚀 Proyectos Principales

### 1. **GEO-PLATFORM v3.0** ⭐ (Proyecto Principal)
**Estado:** ✅ Fully Live in Production | March 2026

Una plataforma integral de exploración mineral con:

**Backend:**
- FastAPI 0.104.1 (Python 3.11.9)
- 9 endpoints REST
- Connection Pooling (2-10 conexiones)
- Deployado en Render.com

**Frontend:**
- React 18 + TypeScript
- Vite 5.4.21 (builds ultra-rápidos)
- Shadcn/ui + Tailwind CSS
- Dark/Light mode
- Deployado en Vercel

**Geospatial & Data:**
- PostgreSQL 15 + PostGIS 3.4+
- Supabase hosting
- 30+ tablas
- 13 vistas analíticas
- Datos en EPSG:4326 (WGS84)

**Características:**
- 🗺️ Mapas interactivos con React-Leaflet
- 📊 Visualización de ensayos con Recharts
- 📍 GeoJSON con análisis espacial
- 🎨 Dark/Light mode con persistencia
- 📱 Diseño totalmente responsive

**Acceso:**
- 🚀 [Demo en Vivo](https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app)
- 📡 [API Docs](https://geo-plataform.onrender.com)
- 💾 [Código Fuente](https://github.com/InsightLaboratory/Geo_Platform)

**Dataset:**
- 4 Drillholes
- ~1,200 Samples
- 682+ Assay Results
- Lithology, Alteration, Mineralization Logs

---

### 2. **Google Earth Engine Applications**
**Tecnología:** JavaScript • Geospatial Analysis • Satellite Imagery

Aplicaciones interactivas para análisis geoespacial a escala global:

- **Highest-Points-of-Argentina-Glaciar-Hydro-DEM:** 
  - Visualización 3D de picos andinos (4,000+ metros)
  - Análisis integrado: DEM, glaciares, hidrografía, estructuras geológicas
  - Landsat imagery de alta resolución

- **Cordobaengine:**
  - Análisis topográfico de Sierras Pampeanas
  - Modelos digitales de elevación interactivos
  - Análisis de estructuras geológicas

**Acceso:**
- [Repository de GitHub](https://github.com/InsightLaboratory/MisAplicaciones)

---

### 3. **InsightLab - Portfolio Web**
Sitio de ciencia y tecnología que destaca:
- Herramientas geoespaciales (Ventusky, OpenStreetMap, Gaia GPS)
- Recursos de exploración espacial (Asterank, Galaxies)
- Herramientas de paleontología

**Acceso:** [insightlaboratory.github.io](https://insightlaboratory.github.io)

---

## 💼 Habilidades Técnicas

### Backend Development
- **Python:** FastAPI, Uvicorn, Connection Pooling
- **API Design:** RESTful architecture, CORS, error handling
- **Performance:** Query optimization, connection pooling

### Frontend Development
- **React 18** + TypeScript
- **Build Tools:** Vite, webpack optimization
- **UI Libraries:** Shadcn/ui, Tailwind CSS
- **Visualization:** Recharts, interactive charts

### Geospatial Technologies
- **PostGIS:** Geometry, spatial queries, GeoJSON
- **Mapping:** Leaflet.js, React-Leaflet, OpenStreetMap
- **Data Processing:** GDAL, GeoPandas
- **Coordinate Systems:** EPSG:4326 (WGS84)

### Databases
- **PostgreSQL 15+:** Advanced queries, optimization
- **PostGIS 3.4+:** Spatial data management
- **Supabase:** Cloud database hosting
- **Schema Design:** Normalized architecture, UUID keys, interval modeling

### Cloud & DevOps
- **Deployment:** Render.com (backend), Vercel (frontend)
- **Databases:** Supabase Cloud
- **CI/CD:** Auto-deployment on git push
- **Infrastructure:** SSL/TLS, CORS configuration

### Domain Expertise
- **Mineral Exploration:** Drillhole data, assay analysis, grade estimation
- **Geological Modeling:** Domain interpretation, lithology/alteration/mineralization
- **Data Visualization:** Interactive maps, charts, real-time data
- **Database Modeling:** Complex geological schemas

---

## 📊 Arquitectura & Tecnologías

### Stack Completo
```
Frontend:
├── React 18 + TypeScript
├── Vite (Ultra-fast builds)
├── Shadcn/ui (Component library)
├── Tailwind CSS (Styling)
├── Recharts (Data visualization)
└── React-Leaflet 4.2 (Mapping)

Backend:
├── FastAPI 0.104.1
├── Python 3.11.9
├── Uvicorn (Server)
├── Connection Pooling
└── Logging & Error Handling

Database:
├── PostgreSQL 15
├── PostGIS 3.4+
├── UUID Primary Keys
├── 30+ Tables
└── 13 Analytical Views

Deployment:
├── Render.com (Backend)
├── Vercel (Frontend)
├── Supabase (Database)
└── Automated CI/CD
```

---

## 📈 Modelos de Datos (Geo-Platform)

### Tablas Principales (30+)
- `drillholes` - Información de perforaciones
- `collars` - Ubicación con PostGIS geometry
- `samples` - Intervalos de muestreo
- `assay_results` - Resultados de ensayos
- `elements` - Catálogo de elementos (Au, Cu, As, etc.)
- `lithology_intervals` - Intervalos litológicos
- `alteration_events` - Eventos de alteración
- `mineralization_intervals` - Intervalos de mineralización
- `geological_domains` - Dominios geológicos

### Vistas Analíticas (13+)
- `v_sample_geology` - Datos geológicos integrados
- `v_drillhole_summary` - Estadísticas por perforación
- `v_drillhole_locations` - Ubicaciones GeoJSON
- `v_domain_statistics` - Estadísticas por dominio
- `v_downhole_composites` - Compuestos de 5 metros
- `v_high_grade_intersections` - Intersecciones de alta ley
- `v_ml_dataset` - Datasets para ML

---

## 🔌 API Endpoints (9 Disponibles)

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/drillholes` | GET | Listado con paginación |
| `/drillholes/{id}/summary` | GET | Resumen de perforación |
| `/drillholes/{id}/assays` | GET | Resultados de ensayos |
| `/drillholes/{id}/lithology` | GET | Intervalos litológicos |
| `/geospatial/drillhole-locations` | GET | GeoJSON con ubicaciones |
| `/geospatial/domains` | GET | Geometrías de dominios |
| `/geospatial/drillholes-geojson` | GET | Todos como GeoJSON |

**Características:**
- Paginación: `page=1&limit=50`
- Filtrado: `element=Au&from_depth=0&to_depth=100`
- CRS: EPSG:4326 (WGS84)

---

## 📱 Características del Frontend

### Hero Section
- 5-segundo value proposition claro
- Highlights visuales de características
- Overview del dataset

### Search & Filter Panel
- Búsqueda por nombre de perforación
- Slider dual Au grade range
- Feedback visual de Min/Max ppb
- Botón Reset

### Map Explorer
- 🗺️ Ubicaciones interactivas de perforaciones
- 📍 Click popups con datos
- 📊 Estadísticas integradas
- 🌙 Dark/Light mode

### TopDrillholes Ranking
- Ranking de top 4 perforaciones
- Barras de progreso normalizadas
- Conteo de muestras
- Promedio de Au por pozo

---

## 🌐 Información de Contacto

**Redes Profesionales:**
- 🔗 [GitHub Profile](https://github.com/InsightLaboratory)
- 💼 [LinkedIn](https://www.linkedin.com/in/juanmtorres23/)
- 🌐 [InsightLab Website](https://insightlaboratory.github.io)

**Proyectos en Vivo:**
- 🌍 [Geo-Platform Demo](https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app)
- 📡 [Geo-Platform API](https://geo-plataform.onrender.com)

---

## 📋 Resumen de Logros

✅ **Plataforma de Exploración Mineral en Producción**
- Full-stack development end-to-end
- Base de datos geoespacial compleja (30+ tablas)
- API con 9 endpoints
- Frontend moderno con interactividad avanzada

✅ **Architect de Soluciones Geoespaciales**
- Diseño de esquemas PostgreSQL/PostGIS
- Integración de datos geológicos
- Visualización interactiva de datos

✅ **Full-Stack Engineer**
- Backend: Python/FastAPI
- Frontend: React/TypeScript
- DevOps: Render, Vercel, Supabase
- Databases: PostgreSQL/PostGIS

✅ **Domain Expert**
- Mineral Exploration workflows
- Geological modeling
- Geochemical data analysis
- Spatial data management

---

## 🎓 Especialidades

- Desarrollo Full-Stack
- Arquitectura de APIs
- Bases de datos relacionales avanzadas
- Análisis geoespacial
- Exploración mineral
- Visualización de datos científicos
- Cloud deployment & DevOps
- Production-ready applications

---

## 📝 Notas

- Todos los proyectos están activos y en mantenimiento
- El código es modular, escalable y bien documentado
- Siguiendo mejores prácticas de desarrollo profesional
- Stack moderno: React 18, FastAPI, PostgreSQL/PostGIS
- Deployado en infraestructura cloud production-ready

---

**Última Actualización:** Marzo 2026 | **Versión:** v3.0 | **Estado:** ✅ Producción
