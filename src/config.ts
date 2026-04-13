export const site = {
  name: "Conductor Elegido",
  tagline: "Conductor Privado en Bogotá",
  description:
    "Servicio profesional de conductor privado en Bogotá. Puntual, seguro y disponible 24/7 para eventos, aeropuerto, empresas y uso diario.",

  phone: "3165695773",
  phoneDisplay: "+57 316 569 5773",
  phoneFull: "+573165695773",
  email: "Cuspianhuertas@gmail.com",

  base: "/conductor-bogota",
  siteUrl: "https://tu-usuario.github.io",

  whatsappMessage: "Hola%2C%20necesito%20un%20conductor%20en%20Bogot%C3%A1",
  whatsappMessageContrata:
    "Hola%2C%20quiero%20contratar%20un%20conductor%20en%20Bogot%C3%A1",

  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  city: "Bogotá",
  region: "Cundinamarca",
  country: "CO",
  geo: { latitude: 4.711, longitude: -74.0721 },

  stats: [
    { number: "500+", label: "Viajes completados" },
    { number: "4.9★", label: "Calificación promedio" },
    { number: "24/7", label: "Disponibilidad" },
    { number: "3 min", label: "Tiempo de respuesta" },
  ],
} as const;

export function waUrl(message = site.whatsappMessage): string {
  return `https://wa.me/${site.phoneFull.replace(/\+/, "")}?text=${message}`;
}

export const telUrl = `tel:${site.phoneFull}`;
