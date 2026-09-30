import { Container } from "@/components/ui/Container";
import styles from "./layout.module.css";

interface PageContainerProps {
  children: React.ReactNode;
  /** Clase adicional para la página. */
  className?: string;
}

/**
 * Contenedor estándar del contenido de cada página
 * (ritmo vertical consistente entre páginas).
 * No renderiza un encabezado: cada página pone su propio <h1>
 * (una única H1 por página, accesibilidad).
 */
export function PageContainer({ children, className }: PageContainerProps) {
  const classes = [styles.page, className].filter(Boolean).join(" ");

  return (
    <Container as="div" className={classes}>
      {children}
    </Container>
  );
}
