# Conductor Elegido — Sitio Web

Sitio web estático para el servicio de conductor designado **Conductor Elegido**, construido con [Astro](https://astro.build). Incluye SEO local por ciudad, chatbot de solicitudes integrado con Google Sheets y despliegue gratuito en Netlify o GitHub Pages.

---

## Tecnologías

- **Astro 4** — generador de sitios estáticos
- **TypeScript** — tipado en archivos de datos y configuración
- **CSS modular** — variables, utilidades reutilizables y estilos por componente
- **Google Apps Script** — backend gratuito para recibir solicitudes en Google Sheets

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ChatBot.astro        # Chatbot flotante — guía al usuario y envía datos a Sheets
│   ├── CityTemplate.astro   # Plantilla reutilizable para páginas de ciudad
│   ├── ContactForm.astro    # Formulario de contacto conectado a Google Sheets
│   ├── FAQ.astro            # Acordeón de preguntas + schema FAQPage
│   ├── Footer.astro
│   ├── Header.astro         # Nav con dropdown de ciudades
│   ├── Hero.astro
│   ├── HowItWorks.astro
│   ├── SEO.astro            # Meta tags, Open Graph, schema LocalBusiness
│   ├── SectionHeader.astro  # Badge + título + subtítulo reutilizable
│   ├── Services.astro
│   └── WhatsAppButton.astro # Botón con variantes: default, float, full, sm
│
├── data/
│   ├── cities.ts            # Datos SEO de cada ciudad (slug, FAQs, zonas, geo)
│   ├── contactMethods.ts    # Métodos de contacto y opciones del formulario
│   ├── services.ts          # Lista de servicios ofrecidos
│   └── steps.ts             # Pasos del proceso + items de confianza
│
├── layouts/
│   └── BaseLayout.astro     # Layout base: Header + slot + Footer + ChatBot
│
├── pages/
│   ├── index.astro                        # Página principal
│   ├── conductor-en-bogota/index.astro    # Página SEO local Bogotá
│   ├── conductor-en-cali/index.astro      # Página SEO local Cali
│   └── conductor-en-barranquilla/index.astro
│
├── styles/
│   ├── global.css           # Variables CSS, reset, botones, tipografía fluida
│   └── universales.css      # 32 clases de layout reutilizables (wrapper, two_columns, etc.)
│
└── config.ts                # Fuente única de verdad: teléfono, email, nombre, stats
```

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción → carpeta dist/
npm run build

# Vista previa del build
npm run preview
```

---

## Configuración

Todos los datos del negocio están centralizados en **`src/config.ts`**. Para cambiar teléfono, correo o nombre del negocio, edita solo ese archivo:

```ts
export const site = {
  name: "Conductor Elegido",
  phone: "3165695773",
  email: "Cuspianhuertas@gmail.com",
  // ...
};
```

Para agregar una nueva ciudad, añade un objeto al array en **`src/data/cities.ts`** y crea el archivo `src/pages/conductor-en-[ciudad]/index.astro` importando `CityTemplate`.

---

## Backend (Google Sheets)

El formulario de contacto y el chatbot envían datos a una hoja de cálculo de Google mediante **Google Apps Script** desplegado como Web App.

La URL del script está en `src/components/ContactForm.astro` y `src/components/ChatBot.astro` en la constante `APPS_SCRIPT_URL`.

Columnas de la hoja: `Timestamp · Nombre · Teléfono · Servicio · Fecha · Hora · Mensaje · Fuente`

El campo **Fuente** indica si la solicitud llegó por `Formulario web` o `Chat Bot`.

---

## Despliegue

### Netlify (recomendado)
1. Sube el repositorio a GitHub
2. Conecta el repo en [netlify.com](https://netlify.com)
3. Netlify detecta Astro automáticamente
4. Build command: `npm run build` — Publish directory: `dist`

### GitHub Pages
1. En el repositorio, ve a **Settings → Pages**
2. Selecciona **GitHub Actions** como fuente
3. Crea `.github/workflows/deploy.yml` con el [workflow oficial de Astro](https://docs.astro.build/en/guides/deploy/github/)

---

## SEO implementado

Cada página incluye:
- `<title>` y `<meta description>` únicos por ciudad
- Schema **LocalBusiness** con coordenadas geográficas
- Schema **FAQPage** para rich results en Google
- Open Graph para redes sociales
- Sitemap automático vía `@astrojs/sitemap`
- URLs limpias y semánticas (`/conductor-en-bogota/`)
