# 🚀 Desplegar Portafolio a GitHub Pages

## ✨ Estado Actual

Tu portafolio está en: **https://github.com/InsightLaboratory/portfolio**

Los cambios han sido hecho push a GitHub:
- ✅ Portafolio profesional completo
- ✅ README con documentación
- ✅ .gitignore configurado
- ✅ 4 archivos de documentación

---

## 📍 Próximos Pasos: Habilitar GitHub Pages

### Opción 1: GitHub Pages (Recomendado) 

1. **Ir a GitHub**
   - Abre: https://github.com/InsightLaboratory/portfolio
   - Click en **Settings** (esquina superior derecha)

2. **Configurar Pages**
   - En la izquierda, busca **Pages** (en el menú inferior)
   - Bajo "Build and deployment"
   - **Source:** Selecciona `Deploy from a branch`
   - **Branch:** Selecciona `main` y `/root`
   - Click en **Save**

3. **Esperar a que se despliegue**
   - GitHub ejecutará una acción automática
   - En 1-2 minutos, tu portafolio estará en vivo

4. **Tu portafolio estará en:**
   ```
   https://insightlaboratory.github.io/portfolio
   ```

---

## ✅ Verificación

Una vez habilitado GitHub Pages:

1. **Visita tu portafolio en vivo:**
   - 🌐 https://insightlaboratory.github.io/portfolio

2. **Comparte el enlace:**
   - Con reclutadores
   - En LinkedIn
   - En tu CV

---

## 📱 Características Habilitadas

- ✅ Portafolio totalmente funcional
- ✅ Formulario de contacto con Formspree
- ✅ Enlaces a GitHub, LinkedIn, InsightLab
- ✅ Enlaces a proyectos en vivo (Geo-Platform)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode ready
- ✅ Smooth scrolling y animaciones

---

## 🎨 Ver en Desarrollo Local

Mientras configuras GitHub Pages, puedes seguir viendo el portafolio localmente:

```bash
cd "a:\ARQUITECTURA DE SOFTWARE\Geo_Platform\portfolio-work"

# Opción 1: Python
python -m http.server 8000
# Visita: http://localhost:8000

# Opción 2: VS Code
# Right-click en index.html → "Open with Live Server"
```

---

## 📋 Archivos en el Repositorio

```
portfolio/
├── index.html                  # Página principal
├── styles.css                  # Estilos (responsivo, animaciones)
├── script.js                   # Interactividad (smooth scroll, validación)
├── README.md                   # Documentación del repositorio
├── PORTFOLIO_README.md         # Perfil detallado (español)
├── PORTFOLIO_README_EN.md      # Perfil detallado (inglés)
├── SETUP_GUIDE.md             # Guía de configuración
├── EVIDENCE_ANALYSIS.md       # Análisis de evidencia
└── .gitignore                 # Gitignore estándar
```

---

## 💡 Consejos

### Actualizar el Portafolio
Futuras actualizaciones:
```bash
cd portfolio-work
# Edita los archivos
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

### Agregar un Dominio Custom
1. En Settings → Pages
2. Bajo "Custom domain", ingresa tu dominio
3. Configura DNS records en tu proveedor de dominios

### Google Analytics
Agregar a `index.html` antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Considera Agregar

- [ ] Página 404 personalizada
- [ ] GitHub Actions workflow
- [ ] Meta descripción mejorada
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] robots.txt

---

## ⏱️ Checklist Final

- [ ] Acciones completadas
  - [x] Portafolio creado
  - [x] Git inicializado
  - [x] Commit hecho
  - [x] Push a GitHub completado
  
- [ ] Próximos pasos
  - [ ] Habilitar GitHub Pages en Settings
  - [ ] Verificar que funciona en https://insightlaboratory.github.io/portfolio
  - [ ] Compartir con reclutadores

---

## 📞 Contacto & Redes

**Tu Portafolio Tiene:**
- 🔗 Enlace a [GitHub](https://github.com/InsightLaboratory)
- 💼 Enlace a [LinkedIn](https://www.linkedin.com/in/juanmtorres23/)
- 🌐 Enlace a [InsightLab](https://insightlaboratory.github.io)
- 📧 Formulario de contacto funcional

---

## 🎉 ¡Listo!

Tu portafolio profesional está en GitHub y listo para producción.

**Repositorio:** https://github.com/InsightLaboratory/portfolio

**Próximo paso:** Habilitar GitHub Pages en Settings

---

**Última actualización:** Marzo 2026
**Estado:** ✅ Listo para producción
