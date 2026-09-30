import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ServiceBadge } from "@/components/cards/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Video } from "@/components/ui/Video";
import { getServiceBySlug } from "@/data/services";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata } from "@/utils/seo";
import { isImageFile, isVideoFile } from "@/utils/media";
import { Image } from "@/components/ui/Image";
import styles from "./proyecto.module.css";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Genera las rutas estáticas /proyectos/[slug] desde los datos. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.seo.title ?? project.title,
    ...buildMetadata(project.seo),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectServices = project.services
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service) => service !== undefined);

  return (
    <PageContainer>
      <nav className={styles.breadcrumb} aria-label="Migas de pan">
        <Link href="/proyectos">Proyectos</Link> / <span>{project.title}</span>
      </nav>

      <Heading level={1}>{project.title}</Heading>

      <div className={styles.meta}>
        {project.isExample ? <Badge tone="accent">Proyecto de ejemplo</Badge> : null}
        <span>{project.client}</span>
        {project.year ? <span>{project.year}</span> : null}
      </div>

      <p className={styles.lead}>{project.description}</p>

      {projectServices.length > 0 ? (
        <section className={styles.block} aria-labelledby="project-services">
          <Heading level={2} id="project-services">
            Servicios implicados
          </Heading>
          <ul className={styles.badgeList} role="list">
            {projectServices.map((service) => (
              <li key={service.id}>
                <ServiceBadge service={service} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={styles.block} aria-labelledby="project-gallery">
        <Heading level={2} id="project-gallery">
          Galería
        </Heading>

        {project.gallery.length > 0 ? (
          <div className={styles.gallery}>
            {project.gallery.map((image, index) =>
              isImageFile(image) ? (
                <Image
                  key={image}
                  src={image}
                  alt={`${project.title} — imagen ${index + 1}`}
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : null,
            )}
          </div>
        ) : (
          <p className="placeholder-note">
            TODO: añadir imágenes reales del proyecto en
            public/images/projects.
          </p>
        )}
      </section>

      {project.videos.length > 0 ? (
        <section className={styles.block} aria-labelledby="project-videos">
          <Heading level={2} id="project-videos">
            Vídeos
          </Heading>
          <div className={styles.gallery}>
            {project.videos.map((video) =>
              isVideoFile(video) ? (
                <Video key={video} src={video} preload="none" />
              ) : null,
            )}
          </div>
        </section>
      ) : null}

      {project.url ? (
        <p className={styles.block}>
          <a href={project.url} target="_blank" rel="noreferrer">
            Ver proyecto publicado
          </a>
        </p>
      ) : null}
    </PageContainer>
  );
}
