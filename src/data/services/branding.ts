import type { Service } from "./types";

/**
 * SERVICIO: Branding
 * Contenido PLACEHOLDER — ver docs/content/services-copy.md
 */
export const brandingService: Service = {
  id: "service-branding",
  slug: "branding",
  name: "Branding",
  shortDescription: "TODO: definir descripción breve del servicio de branding.",
  description: "TODO: definir descripción definitiva del servicio de branding.",
  image: "/images/services/branding/",
  icon: "shape",
  services: ["TODO: definir entregable del servicio de branding."],
  benefits: ["TODO: definir beneficio del servicio de branding."],
  process: [
    {
      title: "TODO: definir fase del proceso.",
      description: "TODO: describir la fase del proceso de branding.",
    },
  ],
  featuredProjects: [],
  seo: {
    title: "Branding",
    description: "TODO: definir meta description del servicio de branding.",
    canonical: "/servicios/branding",
  },
};
