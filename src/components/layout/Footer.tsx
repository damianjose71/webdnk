import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import styles from "./layout.module.css";

/**
 * Pie de página.
 * Los enlaces se centran desde src/data/navigation.
 * TODO: añadir datos de contacto reales, avisos legales y
 * redes sociales cuando estén definidos (docs/content/website-copy.md).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <nav aria-label="Navegación del pie de página">
          <ul className={styles.footerNav} role="list">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.footerLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.footerNote}>
          <span className="placeholder-note">
            TODO: añadir datos de contacto, avisos legales y redes sociales.
          </span>
        </p>

        <p className={styles.footerLegal}>
          © {year} DNK. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
