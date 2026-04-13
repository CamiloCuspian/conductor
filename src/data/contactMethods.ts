import { site, waUrl, telUrl } from "../config";

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isLink: boolean;
}

export function getContactMethods(): ContactMethod[] {
  return [
    {
      icon: "📱",
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: waUrl(site.whatsappMessageContrata),
      isLink: true,
    },
    {
      icon: "📞",
      label: "Llamar",
      value: site.phoneDisplay,
      href: telUrl,
      isLink: true,
    },
    {
      icon: "📍",
      label: "Cobertura",
      value: "Bogotá D.C. y municipios aledaños",
      isLink: false,
    },
    {
      icon: "⏰",
      label: "Disponibilidad",
      value: "Lunes a domingo, 24 horas",
      isLink: false,
    },
  ];
}

export const serviceOptions = [
  { value: "aeropuerto", label: "Traslado al aeropuerto" },
  { value: "evento", label: "Evento (boda, reunión, grado)" },
  { value: "empresarial", label: "Servicio empresarial" },
  { value: "domicilio", label: "Conductor a domicilio (tu carro)" },
  { value: "diario", label: "Servicio diario / mensual" },
  { value: "medico", label: "Traslado médico" },
  { value: "otro", label: "Otro" },
];
