export interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: string;
  label: string;
}

export const steps: Step[] = [
  {
    number: "01",
    icon: "📱",
    title: "Contáctame",
    description:
      "Escríbeme por WhatsApp o completa el formulario con los detalles de tu servicio: fecha, hora, origen y destino.",
  },
  {
    number: "02",
    icon: "💬",
    title: "Cotización inmediata",
    description:
      "En menos de 3 minutos recibes confirmación del precio y disponibilidad. Sin letras pequeñas.",
  },
  {
    number: "03",
    icon: "✅",
    title: "Confirmación",
    description:
      "Aprobamos el servicio y quedas agendado. Te envío recordatorio el día anterior.",
  },
  {
    number: "04",
    icon: "🚗",
    title: "¡A bordo!",
    description:
      "Llego puntual, conduces tranquilo. Pago al finalizar: efectivo, transferencia o Nequi.",
  },
];

export const trustItems: TrustItem[] = [
  { icon: "🛡️", label: "Conductor verificado" },
  { icon: "🚗", label: "Vehículo con SOAT y revisión al día" },
  { icon: "📍", label: "Bogotá y alrededores" },
  { icon: "💳", label: "Efectivo, Nequi o transferencia" },
];
