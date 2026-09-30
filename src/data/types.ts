/**
 * Tipos compartidos por las colecciones de datos del sitio.
 *
 * Regla: los datos (src/data) nunca dependen de componentes;
 * los componentes dependen de los datos. Así el contenido se
 * puede actualizar sin tocar la presentación.
 */

/** Metadatos SEO opcionales de una entidad (página, servicio, proyecto). */
export interface SeoMetadata {
  /** Título de la pestaña / resultado de búsqueda. */
  title?: string;
  /** Meta description. Longitud recomendada: 140–160 caracteres. */
  description?: string;
  /** Ruta canónica, por ejemplo "/servicios/branding". */
  canonical?: string;
  /** Imagen para Open Graph / Twitter Cards (ruta pública o URL externa). */
  ogImage?: string;
}

/**
 * Identificador de un servicio de DNK.
 * Debe coincidir con los `slug` de src/data/services/*.
 */
export type ServiceSlug =
  | "audiovisual"
  | "diseno"
  | "branding"
  | "contenido"
  | "desarrollo-web";
