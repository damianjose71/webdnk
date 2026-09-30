import type { Project } from "./types";

/**
 * PROYECTO DE EJEMPLO — NO es un trabajo real de DNK.
 *
 * Existe únicamente para comprobar que el sistema de proyectos
 * funciona (rutas dinámicas, tarjetas, datos multi-servicio).
 * Ningún campo de este archivo debe interpretarse como contenido
 * publicable.
 */
export const exampleProject: Project = {
  id: "example-project",
  slug: "example-project",
  client: "[Cliente de ejemplo]",
  title: "Proyecto de ejemplo",
  category: "audiovisual",
  description:
    "TODO: descripción del proyecto. Este registro es una plantilla de demostración y no representa un trabajo real de DNK.",
  services: ["audiovisual", "branding", "desarrollo-web"],
  coverImage: "/images/projects/",
  gallery: [],
  videos: [],
  year: null,
  featured: false,
  seo: {
    title: "Proyecto de ejemplo",
    description:
      "TODO: definir meta description del proyecto. Registro de demostración, no es un caso real.",
    canonical: "/proyectos/example-project",
  },
  isExample: true,
};
