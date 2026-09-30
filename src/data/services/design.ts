import type { Service } from "./types";

/**
 * SERVICIO: Diseño gráfico
 * Contenido PLACEHOLDER — ver docs/content/services-copy.md
 */
export const designService: Service = {
  id: "service-diseno",
  slug: "diseno",
  name: "Diseño gráfico",
  shortDescription: "TODO: definir descripción breve del servicio de diseño gráfico.",
  description:
    "TODO: definir descripción definitiva del servicio de diseño gráfico.",
  image: "/images/services/design/",
  icon: "palette",
  services: ["TODO: definir entregable del servicio de diseño gráfico."],
  benefits: ["TODO: definir beneficio del servicio de diseño gráfico."],
  process: [
    {
      title: "TODO: definir fase del proceso.",
      description: "TODO: describir la fase del proceso de diseño gráfico.",
    },
  ],
  featuredProjects: [],
  seo: {
    title: "Diseño gráfico",
    description: "TODO: definir meta description del servicio de diseño gráfico.",
    canonical: "/servicios/diseno",
  },
};
