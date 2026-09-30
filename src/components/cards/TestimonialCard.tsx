import type { Testimonial } from "@/data/testimonials";
import { Badge } from "@/components/ui/Badge";
import styles from "./cards.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Tarjeta de testimonio.
 * Solo deben publicarse testimonios reales y autorizados
 * (los de ejemplo quedan marcados con un badge).
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>
        <p>{testimonial.content}</p>
      </blockquote>

      <figcaption className={styles.cardBody}>
        <p className={styles.cardTitle}>{testimonial.name}</p>
        <p className={styles.cardText}>
          {testimonial.role}
          {testimonial.company ? ` — ${testimonial.company}` : ""}
        </p>
        {testimonial.isExample ? (
          <Badge tone="accent">Testimonio de ejemplo</Badge>
        ) : null}
      </figcaption>
    </figure>
  );
}
