/**
 * Helpers para rutas de medios.
 *
 * Los datos guardan rutas ("/images/...") o URLs externas
 * (CDN). Estas funciones evitan renderizar imágenes rotas
 * mientras los assets todavía no existen.
 */

/** true si la ruta apunta a un archivo de imagen real. */
export function isImageFile(path: string): boolean {
  if (!path) return false;
  return /\.(avif|webp|png|jpe?g|gif|svg)$/i.test(path.split("?")[0] ?? "");
}

/** true si la ruta apunta a un archivo de vídeo real. */
export function isVideoFile(path: string): boolean {
  if (!path) return false;
  return /\.(mp4|webm|mov|m4v)$/i.test(path.split("?")[0] ?? "");
}
