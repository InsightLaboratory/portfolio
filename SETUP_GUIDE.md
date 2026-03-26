# 👁️ Cómo Ver el Portafolio

## Opción 1: Abrir en VS Code Live Server
1. En VS Code, haz clic derecho en `index.html`
2. Selecciona "Open with Live Server"
3. El portafolio se abrirá en `http://localhost:5500`

## Opción 2: Abrir Directamente en el Navegador
1. Ve a `a:\ARQUITECTURA DE SOFTWARE\Geo_Platform\portfolio-work\`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

## Opción 3: Servidor Local Python
```bash
cd a:\ARQUITECTURA DE SOFTWARE\Geo_Platform\portfolio-work\
python -m http.server 8000
# Accede a http://localhost:8000
```

---

## 📋 Estructura del Portafolio

### Secciones Principales

1. **HEADER** - Presentación profesional
   - Nombre y titulación
   - Descripción del perfil
   - Botones de acción (GitHub, LinkedIn)

2. **SKILLS** - 6 áreas técnicas principales
   - Backend Development (Python/FastAPI)
   - Frontend Development (React/TypeScript)
   - Geospatial Technologies (PostGIS/Leaflet)
   - Databases (PostgreSQL)
   - Cloud Deployment (Render/Vercel/Supabase)
   - Data Analysis & Visualization

3. **FEATURED PROJECT** - Geo-Platform v3.0
   - Descripción completa
   - Stack tecnológico detallado
   - Enlaces a demo, API, código
   - Estadísticas del proyecto

4. **OTHER PROJECTS** - Google Earth Engine & InsightLab
   - Descripción de aplicaciones
   - Enlaces a repositorios
   - Tecnologías utilizadas

5. **EXPERTISE** - 6 dominios especializados
   - Geospatial Analysis
   - Mineral Exploration
   - Full-Stack Architecture
   - Database Design
   - Data Visualization
   - Cloud DevOps

6. **CONTACT** - Formulario y redes
   - Formulario funcional (Formspree)
   - Enlaces a GitHub, LinkedIn, InsightLab
   - Intereses profesionales

7. **FOOTER** - Información final
   - Copyright
   - Estado de actualización

---

## 🎨 Características de Diseño

### Colores
- **Primario:** Azul profesional (#2563eb)
- **Secundario:** Púrpura (#7c3aed)
- **Acento:** Cian (#06b6d4)
- **Fondos:** Gris claro (#f9fafb) y blanco

### Tipografía
- Fuente: Google Sans (moderno y limpio)
- Fallbacks: System fonts
- Escalas de tamaño profesional

### Animaciones
- Transiciones suaves (0.3s)
- Hover effects en cards y botones
- Scroll animations on load
- Intersection Observer para elementos

### Responsive
- Mobile-first approach
- Tablets: Grid 2 columnas
- Desktop: Grid 3+ columnas
- Breakpoint: 768px

---

## 🔗 Enlaces Importantes

### En Vivo
- **Demo Geo-Platform:** https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app
- **API Geo-Platform:** https://geo-plataform.onrender.com
- **GitHub InsightLaboratory:** https://github.com/InsightLaboratory
- **InsightLab Website:** https://insightlaboratory.github.io

### Repositorios
- **Geo_Platform:** https://github.com/InsightLaboratory/Geo_Platform
- **MisAplicaciones (Earth Engine):** https://github.com/InsightLaboratory/MisAplicaciones

### Social
- **LinkedIn:** https://www.linkedin.com/in/juanmtorres23/

---

## 💡 Consejos de Uso

1. **Editar Contenido:**
   - HTML: `index.html` - Contenido
   - CSS: `styles.css` - Estilos
   - JS: `script.js` - Interactividad

2. **Personalizar Colores:**
   - Editar `:root` variables en `styles.css`
   - Todos los colores centralizados

3. **Agregar Secciones:**
   - Copiar estructura de cards
   - Mantener consistencia de clases
   - Verificar responsive en DevTools (F12)

4. **Optimizaciones:**
   - Comprimir imágenes
   - Minificar CSS/JS en producción
   - Usar CDN para Font Awesome icons

---

## 📱 Prueba de Responsive

Abre DevTools (F12) y prueba:
- **Mobile:** 320px - 480px
- **Tablet:** 768px - 1024px
- **Desktop:** 1200px+

---

## ✅ Checklist de Funcionalidad

- [x] Smooth scroll working
- [x] Form validation active
- [x] Links open in new tabs
- [x] Dark/Light mode ready
- [x] Animations on scroll
- [x] Mobile menu responsive
- [x] All images optimized
- [x] SEO meta tags present
- [x] Performance optimized
- [x] Accessibility ready

---

## 🚀 Deploy en Producción

### Opción 1: Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 2: GitHub Pages
1. Push a GitHub
2. Activar GitHub Pages en Settings
3. Seleccionar rama `main`

### Opción 3: Custom Server
- Copiar archivos a servidor web
- Asegurar HTTPS
- Configurar gzip compression

---

**Portafolio Creado:** Marzo 2026
**Versión:** 1.0
**Estado:** ✅ Listo para producción
