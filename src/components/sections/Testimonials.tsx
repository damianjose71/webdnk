import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { testimonials } from "@/data/testimonials";
import styles from "./sections.module.css";

/**
 * Testimonios de clientes.
 * Solo muestra testimonios reales (los de ejemplo están
 * excluidos en src/data/testimonials/index.ts).
 */
export function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <Container>
        <Heading level={2} id="testimonials-title">
          Testimonios
        </Heading>

        {testimonials.length > 0 ? (
          <div className={styles.grid}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p>
            <span className="placeholder-note">
              TODO: añadir testimonios reales y autorizados en
              src/data/testimonials.
            </span>
          </p>
        )}
      </Container>
    </section>
  );
}
