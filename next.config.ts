import type { NextConfig } from "next";

/**
 * Configuración global de Next.js.
 * Ver docs/development/technology-decisions.md para el detalle de cada opción.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Formatos modernos cuando el servidor de imágenes puede generarlos.
    formats: ["image/avif", "image/webp"],
  },

  // Los videos se sirven como archivos estáticos (public/videos) o desde
  // URLs externas (CDN / servicios de vídeo). Ver docs/content/media-organization.md
  async headers() {
    return [];
  },
};

export default nextConfig;
