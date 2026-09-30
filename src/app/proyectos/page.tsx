import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Heading } from "@/components/ui/Heading";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Proyectos",
  ...buildMetadata({
    title: "Proyectos",
    description:
      "TODO: definir meta description de la página de proyectos de DNK.",
    canonical: "/proyectos",
  }),
};

/**
 * Listado de proyectos.
 * Un proyecto puede incluir varios servicios: se lista UNA vez,
 * nunca se duplica por categoría.
 */
export default function ProyectosPage() {
  return (
    <PageContainer>
      <Heading level={1}>Proyectos</Heading>
      <p className="placeholder-note">
        TODO: definir el texto de introducción de la página de proyectos.
      </p>

      {projects.length > 0 ? (
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="placeholder-note">
          TODO: añadir proyectos reales en src/data/projects.
        </p>
      )}
    </PageContainer>
  );
}
