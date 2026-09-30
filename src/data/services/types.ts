import type { SeoMetadata, ServiceSlug } from "@/data/types";

/** Paso del proceso de trabajo de un servicio. */
export interface ServiceProcessStep {
  title: string;
  description: string;
}

/**
 * Ficha completa de un servicio de DNK.
 *
 * Los cinco servicios comparten exactamente esta estructura para
 * que los componentes puedan renderizar cualquiera de ellos sin
 * cambios. El contenido se edita únicamente en src/data/services/*.
 */
export interface Service {
  /** Identificador único estable (no usar espacios ni tildes). */
  id: string;
  /** Slug de la ruta: /servicios/[slug] */
  slug: ServiceSlug;
  /** Nombre público del servicio. */
  name: string;
  /** Descripción corta (tarjetas, menús). Máx. ~160 caracteres. */
  shortDescription: string;
  /** Descripción larga (página del servicio). */
  description: string;
  /** Imagen representativa: ruta en /public o URL externa. */
  image: string;
  /** Identificador de icono (ver src/components/ui/Icon.tsx). */
  icon: string;
  /** Sub-servicios o entregables concretos. */
  services: string[];
  /** Beneficios / motivos para contratar el servicio. */
  benefits: string[];
  /** Proceso de trabajo paso a paso. */
  process: ServiceProcessStep[];
  /** Slugs de proyectos relacionados (ver src/data/projects). */
  featuredProjects: string[];
  /** SEO de la página del servicio. */
  seo: SeoMetadata;
}
