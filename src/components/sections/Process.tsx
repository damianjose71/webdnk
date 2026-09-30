import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import styles from "./sections.module.css";

/**
 * Sección "Proceso" de trabajo.
 * No se inventa ningún proceso: queda la estructura lista para
 * cuando se defina en docs/strategy/ o docs/content/.
 */
export function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <Container>
        <Heading level={2} id="process-title">
          Cómo trabajamos
        </Heading>
        <p className={styles.lead}>
          <span className="placeholder-note">
            TODO: definir el proceso de trabajo de DNK por fases
            (estrategia → diseño → producción → entrega).
          </span>
        </p>
      </Container>
    </section>
  );
}
