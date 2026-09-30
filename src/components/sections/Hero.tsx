import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import styles from "./sections.module.css";

interface HeroProps {
  /** H1 de la página (solo uno por página). */
  title: string;
  description?: string;
  /** Llamadas a la acción. */
  children?: ReactNode;
}

/**
 * Sección hero / principal.
 * Versión estructural mínima: sin decisiones visuales ni
 * animaciones (ver docs/architecture/component-map.md).
 */
export function Hero({ title, description, children }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <Heading level={1} id="hero-title">
          {title}
        </Heading>
        {description ? <p className={styles.lead}>{description}</p> : null}
        {children ? <div className={styles.actions}>{children}</div> : null}
      </Container>
    </section>
  );
}
