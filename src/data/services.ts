export interface Service {
  icon: string;
  title: string;
  description: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    icon: "✈️",
    title: "Traslados al Aeropuerto",
    description:
      "Servicio puntual al Aeropuerto El Dorado. Te recojo a tiempo, monitoreo tu vuelo y te llevo sin estrés.",
    keywords: ["conductor aeropuerto bogotá", "traslado el dorado"],
  },
  {
    icon: "🎉",
    title: "Conductor para Eventos",
    description:
      "Bodas, reuniones, grados, rumbas. Llega y regresa tranquilo sin preocuparte por el tráfico ni el parqueo.",
    keywords: ["conductor eventos bogotá", "conductor para fiesta bogotá"],
  },
  {
    icon: "💼",
    title: "Conductor Empresarial",
    description:
      "Servicio para empresas: traslados ejecutivos, rutas corporativas y conductor asignado por día o semana.",
    keywords: ["conductor ejecutivo bogotá", "conductor para empresas"],
  },
  {
    icon: "🏠",
    title: "Conductor a Domicilio",
    description:
      "¿Tu carro, mi manejo? Voy donde estás, conduzco tu vehículo y llegas seguro a tu destino en Bogotá.",
    keywords: ["conductor a domicilio bogotá", "conductor particular bogotá"],
  },
  {
    icon: "🚗",
    title: "Servicio Diario",
    description:
      "Conductor fijo para tu rutina. Colegio, trabajo, diligencias — tarifas especiales por paquete mensual.",
    keywords: ["conductor diario bogotá", "conductor por horas bogotá"],
  },
  {
    icon: "🏥",
    title: "Traslados Médicos",
    description:
      "Acompañamiento a citas médicas, clínicas y hospitales. Paciencia, discreción y puntualidad garantizadas.",
    keywords: ["conductor para citas médicas bogotá"],
  },
];
