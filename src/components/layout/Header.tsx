import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/ui/Container";
import styles from "./layout.module.css";

/**
 * Cabecera del sitio. Contiene la marca (placeholder) y la
 * navegación principal. Fija o estática = decisión de diseño
 * pendiente (no se fija nada en esta fase).
 */
export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="DNK — ir al inicio">
          {/* TODO: sustituir por el logo oficial (public/brand/logo/) */}
          DNK
        </Link>
        <Navbar />
      </Container>
    </header>
  );
}
