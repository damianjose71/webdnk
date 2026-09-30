/**
 * Testimonio de cliente.
 *
 * Regla: NO se inventan testimonios. Solo se publican
 * testimonios reales y autorizados. Mientras no existan,
 * se usa un registro de ejemplo marcado con isExample: true.
 */
export interface Testimonial {
  /** Identificador único. */
  id: string;
  /** Nombre de la persona. */
  name: string;
  /** Empresa u organización. */
  company: string;
  /** Cargo o función. */
  role: string;
  /** Texto del testimonio. */
  content: string;
  /** Foto (ruta en /public o URL externa). */
  image: string;
  /** Slug del proyecto relacionado, si lo hay. */
  relatedProject: string | null;
  /** true = dato de ejemplo, NO es un testimonio real. */
  isExample?: boolean;
}
