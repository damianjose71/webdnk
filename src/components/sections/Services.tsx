import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { services } from "@/data/services";
import styles from "./sections.module.css";

/**
 * Sección de servicios (home).
 * Renderiza el catálogo completo desde src/data/services:
 * añadir un servicio no requiere tocar este componente.
 */
export function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <Container>
        <Heading level={2} id="services-title">
          Servicios
        </Heading>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className={styles.actions}>
          <Button href="/servicios" variant="secondary">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
