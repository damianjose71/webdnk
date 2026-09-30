import { exampleTestimonials } from "./examples";
import type { Testimonial } from "./types";

/**
 * Testimonios publicados.
 *
 * Por defecto solo se exponen los testimonios reales
 * (los marcados como ejemplo se excluyen de las secciones
 * públicas; se mantienen aquí para desarrollo y pruebas).
 */
export const allTestimonials: Testimonial[] = [...exampleTestimonials];

/** Testimonios aptos para publicar. */
export const testimonials: Testimonial[] = allTestimonials.filter(
  (testimonial) => !testimonial.isExample,
);

export type { Testimonial } from "./types";
