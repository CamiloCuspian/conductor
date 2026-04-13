export interface CityFaq {
  question: string;
  answer: string;
}

export interface City {
  slug: string;           // conductor-en-bogota (usado en la URL)
  name: string;           // Bogotá
  preposition: string;    // "en Bogotá" (para H1 y textos)
  title: string;          // <title> SEO
  description: string;    // meta description (150-160 chars)
  h1: string;             // H1 de la página
  intro: string;          // párrafo introductorio único por ciudad
  airport: string;        // nombre del aeropuerto
  geo: { lat: number; lng: number };
  zones: string[];        // barrios/zonas cubiertas
  stats: { number: string; label: string }[];
  faqs: CityFaq[];
}

export const cities: City[] = [
  {
    slug: "conductor-en-bogota",
    name: "Bogotá",
    preposition: "en Bogotá",
    title: "Conductor Privado en Bogotá | Conductor Elegido — 24/7",
    description:
      "Conductor privado en Bogotá disponible 24/7. Traslados al aeropuerto El Dorado, eventos, empresas y uso diario. Respuesta en 3 minutos. Llama ya: 316 569 5773.",
    h1: "Conductor Privado en Bogotá",
    intro:
      "¿Necesitas un conductor de confianza en Bogotá? Con más de 500 servicios completados en la ciudad, ofrezco traslados seguros, puntuales y profesionales en toda la capital. Ya sea para llegar al Aeropuerto El Dorado, asistir a una reunión de negocios en el centro financiero o disfrutar una noche en Usaquén, llego donde estás.",
    airport: "Aeropuerto Internacional El Dorado",
    geo: { lat: 4.711, lng: -74.0721 },
    zones: [
      "Chapinero", "Usaquén", "Suba", "Kennedy",
      "Fontibón", "Teusaquillo", "La Candelaria",
      "Barrios Unidos", "Engativá", "Bosa",
      "Chía", "Cajicá", "Zipaquirá",
    ],
    stats: [
      { number: "500+", label: "Viajes en Bogotá" },
      { number: "4.9★", label: "Calificación" },
      { number: "24/7", label: "Disponibilidad" },
      { number: "3 min", label: "Respuesta" },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un conductor privado en Bogotá?",
        answer:
          "El precio varía según la distancia, duración y tipo de servicio. Un traslado al Aeropuerto El Dorado desde el norte de Bogotá parte desde $35.000 COP. Solicita tu cotización por WhatsApp y recibes precio exacto en menos de 3 minutos.",
      },
      {
        question: "¿Haces traslados al Aeropuerto El Dorado a cualquier hora?",
        answer:
          "Sí. El aeropuerto El Dorado opera vuelos madrugadores y nocturnos, y mi servicio está disponible 24/7. Puedes agendar con anticipación y te envío recordatorio el día anterior.",
      },
      {
        question: "¿Conduces mi propio vehículo o el tuyo?",
        answer:
          "Puedes elegir. Si prefieres conductor para tu propio carro, voy donde estás y manejo tu vehículo. Si necesitas también el vehículo, cuéntame y lo coordinamos con vehículo particular.",
      },
      {
        question: "¿Cubres municipios fuera de Bogotá como Chía o Zipaquirá?",
        answer:
          "Sí. Tengo cobertura en toda la Sabana de Bogotá: Chía, Cajicá, Zipaquirá, La Calera, Sopó, Tocancipá y más. El precio incluye el recorrido completo sin cargos ocultos.",
      },
    ],
  },

  {
    slug: "conductor-en-cali",
    name: "Cali",
    preposition: "en Cali",
    title: "Conductor Privado en Cali | Conductor Elegido — 24/7",
    description:
      "Conductor privado en Cali disponible 24/7. Traslados al aeropuerto Alfonso Bonilla Aragón, eventos, empresas y rumba en Juanchito. Respuesta en 3 minutos.",
    h1: "Conductor Privado en Cali",
    intro:
      "¿Vas a una rumba en Juanchito, tienes un evento en el centro o necesitas llegar al Aeropuerto Alfonso Bonilla Aragón? Ofrezco servicio de conductor privado en Cali con puntualidad garantizada. Sin estrés por el tráfico de la Simón Bolívar ni preocupaciones por el parqueo.",
    airport: "Aeropuerto Internacional Alfonso Bonilla Aragón",
    geo: { lat: 3.4516, lng: -76.532 },
    zones: [
      "Ciudad Jardín", "El Ingenio", "Granada",
      "San Antonio", "Versalles", "Normandía",
      "Chipichape", "Unicentro", "El Norte",
      "Palmira", "Jamundí", "Yumbo",
    ],
    stats: [
      { number: "200+", label: "Viajes en Cali" },
      { number: "4.9★", label: "Calificación" },
      { number: "24/7", label: "Disponibilidad" },
      { number: "3 min", label: "Respuesta" },
    ],
    faqs: [
      {
        question: "¿Tienes servicio de conductor para rumba en Juanchito?",
        answer:
          "Sí. El servicio nocturno en Cali incluye traslados a Juanchito, Menga, Av. Sexta y zonas de rumba. Puedes ir y volver tranquilo sin preocuparte por conducir de noche o el tráfico.",
      },
      {
        question: "¿Cuánto tarda el traslado al Aeropuerto Alfonso Bonilla desde el centro de Cali?",
        answer:
          "El aeropuerto queda aproximadamente a 20-30 minutos del centro dependiendo del tráfico. Siempre recomiendo salir con 2.5 horas de margen para vuelos nacionales y 3 horas para internacionales. Yo monitoreo el tráfico en tiempo real.",
      },
      {
        question: "¿Haces recorridos a Palmira o Jamundí desde Cali?",
        answer:
          "Sí. Cubro toda el área metropolitana de Cali: Palmira, Jamundí, Yumbo y municipios cercanos. El precio se acuerda antes del servicio sin cobros adicionales al final.",
      },
      {
        question: "¿Puedo contratar conductor para eventos empresariales en Cali?",
        answer:
          "Absolutamente. Ofrezco servicio de conductor ejecutivo para reuniones, congresos y eventos corporativos en Cali. Puedo estar asignado por horas o por día según tu agenda.",
      },
    ],
  },

  {
    slug: "conductor-en-barranquilla",
    name: "Barranquilla",
    preposition: "en Barranquilla",
    title: "Conductor Privado en Barranquilla | Conductor Elegido — 24/7",
    description:
      "Conductor privado en Barranquilla disponible 24/7. Traslados al aeropuerto Ernesto Cortissoz, eventos, carnaval y empresas. Respuesta en 3 minutos.",
    h1: "Conductor Privado en Barranquilla",
    intro:
      "¿Necesitas conductor en Barranquilla para el Carnaval, un evento corporativo en El Prado o un vuelo en el aeropuerto Ernesto Cortissoz? Servicio profesional y puntual en La Arenosa. Sin preocuparte por el tráfico en la Circunvalar ni el calor de buscar parqueo.",
    airport: "Aeropuerto Internacional Ernesto Cortissoz",
    geo: { lat: 10.9639, lng: -74.7964 },
    zones: [
      "El Prado", "Riomar", "Altos del Limón",
      "Ciudad Jardín", "Bello Horizonte", "Las Delicias",
      "La Cumbre", "Villa Santos", "Alto Prado",
      "Soledad", "Malambo", "Puerto Colombia",
    ],
    stats: [
      { number: "150+", label: "Viajes en Barranquilla" },
      { number: "5.0★", label: "Calificación" },
      { number: "24/7", label: "Disponibilidad" },
      { number: "3 min", label: "Respuesta" },
    ],
    faqs: [
      {
        question: "¿Tienes conductor disponible durante el Carnaval de Barranquilla?",
        answer:
          "Sí. Durante el Carnaval la demanda de conductor privado en Barranquilla aumenta considerablemente. Recomiendo agendar con varios días de anticipación para asegurar disponibilidad en las fechas del evento.",
      },
      {
        question: "¿Cuánto cuesta un conductor desde Barranquilla al aeropuerto Ernesto Cortissoz?",
        answer:
          "El aeropuerto Ernesto Cortissoz está en Soledad, aproximadamente a 15-25 minutos del norte de Barranquilla. El costo parte desde $30.000 COP según el origen. Solicita cotización por WhatsApp para precio exacto.",
      },
      {
        question: "¿Cubres Puerto Colombia y municipios cercanos?",
        answer:
          "Sí. Tengo cobertura en toda el área metropolitana de Barranquilla: Soledad, Malambo, Puerto Colombia, Galapa y más. Todos los precios se acuerdan antes del servicio.",
      },
      {
        question: "¿Ofreces servicio de conductor para empresas en Barranquilla?",
        answer:
          "Sí. Barranquilla es una ciudad con mucha actividad empresarial y portuaria. Ofrezco servicio de conductor ejecutivo por horas, días o contratos mensuales para empresas que necesitan traslados frecuentes.",
      },
    ],
  },
];

// Helper: buscar una ciudad por su slug
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
