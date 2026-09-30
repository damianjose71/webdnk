import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { featuredProjects } from "@/data/projects";
import styles from "./sections.module.css";

/**
 * Selección de proyectos destacados (home).
 * Muestra los proyectos con `featured: true` en
 * src/data/projects. Si no hay, muestra un aviso en lugar de
 * contenido inventado.
 */
export function FeaturedProjects() {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-projects-title"
    >
      <Container>
        <Heading level={2} id="featured-projects-title">
          Proyectos destacados
        </Heading>

        {featuredProjects.length > 0 ? (
          <div className={styles.grid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p>
            <span className="placeholder-note">
              TODO: marcar proyectos reales como destacados
              (featured: true) en src/data/projects.
            </span>
          </p>
        )}

        <div className={styles.actions}>
          <Button href="/proyectos" variant="secondary">
            Ver todos los proyectos
          </Button>
        </div>
      </Container>
    </section>
  );
}
