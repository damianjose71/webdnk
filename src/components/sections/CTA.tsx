import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import styles from "./sections.module.css";

/**
 * Llamada a la acción final (home y páginas interiores).
 * TODO: definir copy definitivo del CTA.
 */
export function CTA() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <Container>
        <Heading level={2} id="cta-title">
          Contacto
        </Heading>
        <p className={styles.lead}>
          <span className="placeholder-note">
            TODO: definir la llamada a la acción principal.
          </span>
        </p>
        <div className={styles.actions}>
          <Button href="/contacto">Hablar con DNK</Button>
        </div>
      </Container>
    </section>
  );
}
