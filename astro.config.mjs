
import { defineConfig } from "astro/config";

export default defineConfig({
  // site: URL canónica completa de tu sitio (importante para SEO y sitemaps)
  site: "https://github.com/CamiloCuspian",

  // base: El subdirectorio del repo en GitHub Pages.
  // Cambia "conductor-bogota" por el nombre exacto de tu repositorio.
  // Si tienes dominio propio, borra esta línea completamente.
  base: "/conductor",

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
