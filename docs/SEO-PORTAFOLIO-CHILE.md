# Guía SEO para tu portafolio — Enfoque Chile

**Foco del portafolio:** Desarrollo en **Python** y **RPA** (automatización de procesos). La web es la vitrina; el perfil es Python, Selenium, UiPath y automatización.

**Objetivo SEO:** Que aparezca cuando busquen “desarrollador Python Chile”, “RPA automatización”, “Python Selenium”, “UiPath Chile”, o tu nombre.

---

## 1. Qué ya tienes implementado (en código)

- **Pre-renderizado:** El comando `npm run build:seo` genera HTML estático con todo el contenido. Los buscadores ven texto real, no una página vacía.
- **Meta tags:** Título, descripción, canonical y Open Graph en `index.html` (inyectados en el build).
- **Open Graph y Twitter Card:** Para compartir en redes (LinkedIn, WhatsApp, Twitter).
- **Schema.org JSON-LD:** Person + WebSite para rich results en Google.
- **Alt en imágenes:** Logo con `alt="Logo Cristopher Rivera - Portafolio"` y dimensiones para evitar CLS.
- **Placeholder Analytics:** Comentario en `index.html` antes de `</body>` para pegar el script de Google Analytics o GTM cuando tengas la cuenta.
- **Idioma y región:** `lang="es-CL"`, `og:locale` y `geo.region` para Chile.
- **Canonical:** Una sola URL canónica evita contenido duplicado.
- **robots.txt y sitemap.xml:** En `public/` (se copian a `dist/`).

**Para producción:** Usa siempre `npm run build:seo` (no solo `npm run build`) antes de subir a Proxmox/Caddy.

---

## 2. Configuración obligatoria antes de subir

### 2.1 URL real del sitio

En tu servidor (o en `.env` en build), define la URL final:

```bash
VITE_SITE_URL=https://rivcon.cl
```

Sin esto, los meta de Open Graph y canonical pueden apuntar a una URL incorrecta.

### 2.2 Imagen para redes (Open Graph)

- **Recomendado:** Imagen 1200×630 px (logo + nombre o cabecera de portafolio).
- **Mínimo:** Usar `/assets/RCtransparente.png` (ya configurado) si no tienes otra.
- Ubicación: `public/og-image.png` y en `vite.config.ts` poner `ogImage: SITE_URL + '/og-image.png'`.

Así al compartir el enlace en LinkedIn, WhatsApp o Twitter se verá una preview atractiva.

---

## 3. Objetivos SEO para un portafolio en Chile

| Objetivo | Acción |
|----------|--------|
| Aparecer por tu nombre | Título y meta description con "Cristopher Rivera" + "portafolio" o "desarrollador". |
| Aparecer por stack | Palabras clave en `index`: Python, automatización, RPA, Django, Chile. |
| Buen posicionamiento local | `geo.region` CL, `og:locale` es_CL, contenido en español. |
| Que compartan tu link | Open Graph y Twitter Card bien configurados (ya están en el HTML). |
| Indexación correcta | Canonical a una sola URL; `robots: index, follow` (ya en el HTML). |

---

## 4. Palabras clave sugeridas (Chile)

Incluirlas de forma natural en título, descripción y (si más adelante agregas texto extra) en la página:

- **Principales:** desarrollador Python, automatización de procesos, RPA, portafolio desarrollador Chile.
- **Secundarias:** Python Chile, Selenium, Django, analista programador, Ing. Informática, Santiago Chile.
- **Long-tail:** “desarrollador Python automatización Chile”, “portafolio programador Python Santiago”.

La descripción actual del `index` ya usa varias de estas; mantén esa línea al editarla.

---

## 5. Herramientas útiles (gratis)

- **Google Search Console:** Añade la propiedad de tu dominio (ej. rivcon.cl), envía el sitemap y revisa indexación y búsquedas.
- **Bing Webmaster Tools:** Importa desde GSC o añade el sitio; ayuda a aparecer en Bing y en búsquedas que usan Bing.
- **Probar rich results:** [Google Rich Results Test](https://search.google.com/test/rich-results) con la URL de tu portafolio.
- **Probar Open Graph:** [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

---

## 6. Sitemap y robots.txt (recomendado en producción)

En la raíz de tu dominio (junto a `index.html` en Caddy):

**robots.txt**
```txt
User-agent: *
Allow: /
Sitemap: https://rivcon.cl/sitemap.xml
```

**sitemap.xml** (un solo documento porque es una sola página):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rivcon.cl/</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Los archivos `public/robots.txt` y `public/sitemap.xml` ya están creados. Si tu dominio no es rivcon.cl, edita ambos y reemplaza `https://rivcon.cl` por tu URL (ej. `https://tudominio.cl`).

---

## 7. Checklist por fases (código vs manual)

### Semana 1 — Crítico (ya hecho en código ✅)

- [x] Optimizar velocidad: Vite minifica JS/CSS; logo con `width`/`height` para CLS.
- [x] Responsive mobile: media queries en `App.css`.
- [x] HTTPS: Cloudflare Tunnel + Caddy.
- [x] sitemap.xml y robots.txt en `public/`.

### Semana 2 — Importante

- [x] Meta tags y Open Graph (en `index.html` + vite.config).
- [x] Alt tags en imágenes (logo en Navbar).
- [x] Enlaces internos (nav con anclas #inicio, #proyectos, etc.).
- [ ] **Manual:** Registrar en Google Search Console y enviar sitemap.
- [ ] **Manual:** Crear cuenta Google Analytics y pegar el script donde indica el comentario en `index.html` (antes de `</body>`).

### Semana 3–4 — Construcción

- [x] Schema markup (Person + WebSite) en `index.html`.
- [x] Open Graph y social sharing (meta tags ya configurados).
- [ ] **Manual:** Contenido extra (blog, casos de éxito) si lo agregas más adelante.
- [ ] **Manual:** Registrar en directorios y Google My Business si aplica.

### Mes 2 en adelante

- [ ] **Manual:** Link building, contenido regular, monitoreo en Analytics.

---

## 8. Resumen

En el código ya tienes: pre-render, meta tags, Open Graph, Schema.org, alt en imágenes, placeholder para Analytics, sitemap y robots. Lo que queda por tu parte:

1. Definir `VITE_SITE_URL` y subir con `npm run build:seo`.
2. Dar de alta el sitio en Google Search Console y enviar el sitemap.
3. Cuando tengas Analytics, pegar el script en el lugar indicado en `index.html`.
4. (Opcional) Imagen OG 1200×630 en `public/og-image.png` para mejor preview al compartir.

Con eso el portafolio queda listo para trabajar el SEO en Chile.
