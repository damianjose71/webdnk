import { ContactForm } from "@/components/forms/ContactForm";
import { Heading } from "@/components/ui/Heading";
import styles from "./sections.module.css";

/**
 * Sección de contacto (página /contacto).
 * No incluye su propio Container: se usa dentro de PageContainer
 * (evita contenedores anidados y desalineaciones).
 * Los datos de contacto reales (correo, dirección, redes) se
 * añaden cuando estén definidos.
 */
export function Contact() {
  return (
    <section className={styles.sectionFlush} aria-labelledby="contact-title">
      <Heading level={2} id="contact-title">
        Escríbenos
      </Heading>

      <p className={styles.lead}>
        <span className="placeholder-note">
          TODO: definir los datos de contacto públicos de DNK.
        </span>
      </p>

      <ContactForm />
    </section>
  );
}
