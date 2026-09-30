import NextImage from "next/image";
import type { ImageProps } from "next/image";

/**
 * Envoltorio del `<Image>` de Next.js.
 *
 * Puntos que garantiza/estandariza:
 * - `alt` siempre explícito (accesibilidad). Usar alt="" solo
 *   cuando la imagen sea puramente decorativa.
 * - Formatos modernos (AVIF/WebP) configurados en next.config.ts.
 * - Lazy loading por defecto y `priority` solo para imágenes
 *   above-the-fold (hero).
 * - Extensiones futuras previstas (sin implementar aún):
 *   placeholder blur, lightbox, fuentes responsivas automáticas.
 */
export interface MediaImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
}

export function Image({ alt, ...rest }: MediaImageProps) {
  return <NextImage alt={alt} {...rest} />;
}
