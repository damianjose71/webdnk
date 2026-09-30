import { exampleProject } from "./example-project";
import type { Project } from "./types";

/**
 * Listado de proyectos de DNK.
 *
 * Para añadir un proyecto: crear un archivo propio en esta
 * carpeta y añadirlo aquí. Las páginas /proyectos y
 * /proyectos/[slug] se generan a partir de esta lista.
 *
 * Estado actual: solo existe el proyecto de ejemplo
 * (isExample: true) para validar el sistema.
 */
export const projects: Project[] = [exampleProject];

/** Selección destacada para la home. */
export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured,
);

/** Busca un proyecto por slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Slugs disponibles (usado por generateStaticParams). */
export const projectSlugs: string[] = projects.map((project) => project.slug);

export type { Project } from "./types";
