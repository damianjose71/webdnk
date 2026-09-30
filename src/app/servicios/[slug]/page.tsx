import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ServiceBadge } from "@/components/cards/ServiceCard";
import { Heading } from "@/components/ui/Heading";
import { getServiceBySlug, services } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { buildMetadata } from "@/utils/seo";
import styles from "./servicio.module.css";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/** Genera las 5 rutas estáticas /servicios/[slug] desde los datos. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.seo.title ?? service.name,
    ...buildMetadata(service.seo),
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedProjects = service.featuredProjects
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project) => project !== undefined);

  return (
    <PageContainer>
      <nav className={styles.breadcrumb} aria-label="Migas de pan">
        <Link href="/servicios">Servicios</Link> / <span>{service.name}</span>
      </nav>

      <Heading level={1}>{service.name}</Heading>
      <p className={styles.lead}>{service.description}</p>

      {service.services.length > 0 ? (
        <section className={styles.block} aria-labelledby="service-deliverables">
          <Heading level={2} id="service-deliverables">
            Qué incluye
          </Heading>
          <ul className={styles.list}>
            {service.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {service.benefits.length > 0 ? (
        <section className={styles.block} aria-labelledby="service-benefits">
          <Heading level={2} id="service-benefits">
            Beneficios
          </Heading>
          <ul className={styles.list}>
            {service.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={styles.block} aria-labelledby="service-process">
        <Heading level={2} id="service-process">
          Proceso
        </Heading>
        <ol className={styles.list}>
          {service.process.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.block} aria-labelledby="service-projects">
        <Heading level={2} id="service-projects">
          Proyectos relacionados
        </Heading>
        {relatedProjects.length > 0 ? (
          <ul className={styles.list}>
            {relatedProjects.map((project) => (
              <li key={project.id}>
                <Link href={`/proyectos/${project.slug}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="placeholder-note">
            TODO: vincular proyectos reales a este servicio
            (featuredProjects en src/data/services).
          </p>
        )}
      </section>

      <nav className={styles.siblingNav} aria-label="Otros servicios">
        <ul className={styles.siblingList} role="list">
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <li key={item.id}>
                <ServiceBadge service={item} />
              </li>
            ))}
        </ul>
      </nav>
    </PageContainer>
  );
}
