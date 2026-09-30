import type { Service } from "./types";

/**
 * SERVICIO: Producción audiovisual
 * Contenido PLACEHOLDER — ver docs/content/services-copy.md
 */
export const audiovisualService: Service = {
  id: "service-audiovisual",
  slug: "audiovisual",
  name: "Producción audiovisual",
  shortDescription:
    "TODO: definir descripción breve del servicio de producción audiovisual.",
  description:
    "TODO: definir descripción definitiva del servicio de producción audiovisual.",
  image: "/images/services/audiovisual/",
  icon: "camera",
  services: [
    "TODO: definir entregable del servicio de producción audiovisual.",
  ],
  benefits: [
    "TODO: definir beneficio del servicio de producción audiovisual.",
  ],
  process: [
    {
      title: "TODO: definir fase del proceso.",
      description: "TODO: describir la fase del proceso audiovisual.",
    },
  ],
  featuredProjects: [],
  seo: {
    title: "Producción audiovisual",
    description:
      "TODO: definir meta description del servicio de producción audiovisual.",
    canonical: "/servicios/audiovisual",
  },
};
