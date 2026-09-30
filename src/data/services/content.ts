import type { Service } from "./types";

/**
 * SERVICIO: Creación y estrategia de contenido
 * Contenido PLACEHOLDER — ver docs/content/services-copy.md
 */
export const contentService: Service = {
  id: "service-contenido",
  slug: "contenido",
  name: "Creación y estrategia de contenido",
  shortDescription:
    "TODO: definir descripción breve del servicio de creación y estrategia de contenido.",
  description:
    "TODO: definir descripción definitiva del servicio de creación y estrategia de contenido.",
  image: "/images/services/content/",
  icon: "content",
  services: [
    "TODO: definir entregable del servicio de creación y estrategia de contenido.",
  ],
  benefits: [
    "TODO: definir beneficio del servicio de creación y estrategia de contenido.",
  ],
  process: [
    {
      title: "TODO: definir fase del proceso.",
      description: "TODO: describir la fase del proceso de contenido.",
    },
  ],
  featuredProjects: [],
  seo: {
    title: "Creación y estrategia de contenido",
    description:
      "TODO: definir meta description del servicio de creación y estrategia de contenido.",
    canonical: "/servicios/contenido",
  },
};
