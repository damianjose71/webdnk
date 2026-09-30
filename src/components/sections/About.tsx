import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import styles from "./sections.module.css";

/**
 * Sección "Nosotros" (resumen en la home).
 * TODO: redactar el texto definitivo en docs/content/website-copy.md.
 */
export function About() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Container>
        <Heading level={2} id="about-title">
          Nosotros
        </Heading>
        <p className={styles.lead}>
          <span className="placeholder-note">
            TODO: definir el texto de presentación de DNK (agencia creativa
            integral: estrategia, diseño, comunicación visual, producción
            audiovisual, contenido y desarrollo web).
          </span>
        </p>
      </Container>
    </section>
  );
}
