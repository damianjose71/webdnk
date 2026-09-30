import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Image } from "@/components/ui/Image";
import { isImageFile } from "@/utils/media";
import styles from "./cards.module.css";

interface ProjectCardProps {
  project: Project;
}

/**
 * Tarjeta de proyecto (/proyectos y destacados de la home).
 * Un proyecto puede agrupar varios servicios: se muestran como
 * badges, nunca se duplica la tarjeta por servicio.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/proyectos/${project.slug}`} className={styles.cardMediaLink}>
        {isImageFile(project.coverImage) ? (
          <Image
            src={project.coverImage}
            alt={`Imagen del proyecto ${project.title}`}
            width={640}
            height={400}
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.cardMediaPlaceholder}>
            <span className="placeholder-note">
              TODO: imagen de portada del proyecto
            </span>
          </div>
        )}
      </Link>

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          {project.isExample ? <Badge tone="accent">Ejemplo</Badge> : null}
          {project.year ? <span>{project.year}</span> : null}
        </div>

        <h3 className={styles.cardTitle}>
          <Link href={`/proyectos/${project.slug}`} className={styles.cardLink}>
            {project.title}
          </Link>
        </h3>

        <p className={styles.cardText}>{project.client}</p>
        <p className={styles.cardText}>{project.description}</p>
      </div>
    </article>
  );
}
