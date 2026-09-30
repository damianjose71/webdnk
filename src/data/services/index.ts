import { audiovisualService } from "./audiovisual";
import { brandingService } from "./branding";
import { contentService } from "./content";
import { designService } from "./design";
import { webService } from "./web";
import type { Service } from "./types";

/**
 * Catálogo único de servicios de DNK.
 *
 * Para añadir o modificar un servicio: editar el archivo propio
 * dentro de esta carpeta. No hace falta tocar componentes ni
 * rutas: /servicios/[slug] se genera a partir de esta lista.
 */
export const services: Service[] = [
  audiovisualService,
  designService,
  brandingService,
  contentService,
  webService,
];

/** Devuelve un servicio por su slug. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Slugs disponibles (usado por generateStaticParams). */
export const serviceSlugs: string[] = services.map((service) => service.slug);

export type { Service, ServiceProcessStep } from "./types";
