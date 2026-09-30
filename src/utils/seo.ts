import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_OG_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/config/site";
import type { SeoMetadata } from "@/data/types";

/**
 * Construye los metadatos de una página a partir de los campos
 * SEO definidos en los datos (src/data/**) o de valores por
 * defecto del sitio.
 *
 * El `title` se gestiona con el template del layout
 * ("%s | DNK"), por eso aquí solo se pasa el título propio.
 *
 * Uso:
 *   export const generateMetadata = async ({ params }) => {
 *     const item = ...;
 *     return { title: item.seo.title, ...buildMetadata(item.seo) };
 *   };
 *
 * Pendiente (documentado en docs/content/seo.md):
 * - structured data (JSON-LD)
 * - imágenes Open Graph por defecto
 */
export function buildMetadata(seo: SeoMetadata = {}): Metadata {
  const description = seo.description ?? SITE_DESCRIPTION;

  const canonical = seo.canonical
    ? new URL(seo.canonical, SITE_URL).toString()
    : undefined;

  return {
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "website",
      locale: SITE_OG_LOCALE,
      siteName: SITE_NAME,
      description,
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: seo.ogImage ? "summary_large_image" : "summary",
      description,
    },
  };
}
