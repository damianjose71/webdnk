/**
 * Configuración global del sitio.
 * Usada por layout, SEO (buildMetadata), sitemap y robots.txt.
 */

/** Nombre del proyecto / marca. */
export const SITE_NAME = "DNK";

/** Descripción global por defecto. TODO: definir texto definitivo. */
export const SITE_DESCRIPTION =
  "TODO: definir la meta description global del sitio de DNK.";

/**
 * URL canónica. En producción debe definirse NEXT_PUBLIC_SITE_URL
 * (ver .env.example). El fallback local es solo para desarrollo.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Idioma principal del contenido. */
export const SITE_LOCALE = "es";

/** Idioma del contenido para Open Graph (formato xx_XX). */
export const SITE_OG_LOCALE = "es_ES";
