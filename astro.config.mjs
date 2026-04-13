// astro.config.mjs
// ─────────────────────────────────────────────────────────
// JEKYLL vs ASTRO:
//   Jekyll usa _config.yml para configuración global.
//   Astro usa este archivo JS — más flexible porque puedes
//   usar lógica real, importar plugins, etc.
//
// GITHUB PAGES:
//   Si tu repo se llama "conductor-bogota" y tu usuario es "miusuario",
//   tu sitio estará en: https://miusuario.github.io/conductor-bogota/
//   En ese caso, cambia base a "/conductor-bogota".
//   Si usas dominio personalizado (ej. conductorbogota.com), borra la línea base.
// ─────────────────────────────────────────────────────────

import { defineConfig } from "astro/config";

export default defineConfig({
  // site: URL canónica completa de tu sitio (importante para SEO y sitemaps)
  site: "https://tu-usuario.github.io",

  // base: El subdirectorio del repo en GitHub Pages.
  // Cambia "conductor-bogota" por el nombre exacto de tu repositorio.
  // Si tienes dominio propio, borra esta línea completamente.
  base: "/conductor-bogota",

  // output: 'static' genera HTML puro, ideal para GitHub Pages
  // (no necesitas servidor Node — GitHub Pages sirve archivos estáticos)
  output: "static",

  // Integrations: plugins que extienden Astro
  integrations: [],

  // Build optimizations
  build: {
    assets: "assets",
    inlineStylesheets: "auto", // Inline estilos pequeños para mejor rendimiento
  },

  // Optimizaciones de imagen (útil cuando se agreguen imágenes)
  image: {
    // Configuración por defecto está bien optimizada
  },
});
