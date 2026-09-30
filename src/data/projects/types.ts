import type { SeoMetadata, ServiceSlug } from "@/data/types";

/**
 * Proyecto real de DNK.
 *
 * IMPORTANTE: los proyectos son ENTIDADES INDEPENDIENTES de los
 * servicios. Un mismo proyecto puede involucrar varios servicios
 * (ejemplo: audiovisual + branding + web), por eso `services`
 * es una lista.
 *
 * No se inventan clientes, cifras ni resultados. Mientras no
 * existan proyectos reales documentados, solo hay un proyecto
 * de ejemplo (isExample: true) para validar el sistema.
 */
export interface Project {
  /** Identificador único estable. */
  id: string;
  /** Slug de la ruta: /proyectos/[slug] */
  slug: string;
  /** Nombre del cliente. TODO: rellenar con clientes reales. */
  client: string;
  /** Título público del proyecto. */
  title: string;
  /** Categoría principal (usada para filtros/agrupaciones). */
  category: ServiceSlug;
  /** Descripción del proyecto. */
  description: string;
  /** Todos los servicios implicados en el proyecto. */
  services: ServiceSlug[];
  /** Imagen de portada: ruta en /public o URL externa. */
  coverImage: string;
  /** Imágenes del proyecto en orden de visualización. */
  gallery: string[];
  /** Videos asociados: rutas en /public o URLs externas (CDN). */
  videos: string[];
  /** Año de publicación. null mientras no haya dato confirmado. */
  year: number | null;
  /** Si debe aparecer en la selección destacada de la home. */
  featured: boolean;
  /** URL externa del proyecto (caso de uso: trabajo publicado en otro sitio). */
  url?: string;
  /** SEO de la página del proyecto. */
  seo: SeoMetadata;
  /**
   * true = plantilla/dato de ejemplo, NO es un trabajo real.
   * La interfaz lo etiqueta visiblemente. Eliminar o sustituir
   * por proyectos reales antes del lanzamiento.
   */
  isExample?: boolean;
}
