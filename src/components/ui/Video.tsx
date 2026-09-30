import styles from "./ui.module.css";

interface VideoProps {
  /**
   * Ruta local (/public/videos/...) o URL externa
   * (CDN, YouTube/Vimeo embebido pendiente de evaluación).
   */
  src: string;
  /** Imagen de portada. */
  poster?: string;
  /** Texto visible bajo el vídeo. */
  caption?: string;
  /** `none` para no descargar nada hasta interacción (recomendado en listados). */
  preload?: "none" | "metadata" | "auto";
  className?: string;
}

/**
 * Reproductor de vídeo nativo (`<video>`), accesible y sin
 * dependencias.
 *
 * NOTA de rendimiento: los vídeos pesados NO deben subirse a
 * Git. Ver docs/content/media-organization.md (CDN / almacenamiento
 * externo / URLs externas).
 */
export function Video({
  src,
  poster,
  caption,
  preload = "metadata",
  className,
}: VideoProps) {
  const figureClasses = [styles.video, className].filter(Boolean).join(" ");

  return (
    <figure className={figureClasses}>
      <video
        className={styles.videoPlayer}
        controls
        playsInline
        preload={preload}
        poster={poster}
        src={src}
      >
        Tu navegador no reproduce vídeo HTML5.
        <a href={src}>Descargar el vídeo</a>.
      </video>
      {caption ? <figcaption className={styles.videoCaption}>{caption}</figcaption> : null}
    </figure>
  );
}
