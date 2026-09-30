import type { ReactNode } from "react";
import styles from "./ui.module.css";

interface HeadingProps {
  /** Nivel semántico del encabezado. */
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  /** Id para vincular la sección (aria-labelledby). */
  id?: string;
  className?: string;
}

/**
 * Encabezado semántico.
 * Respeta la jerarquía de títulos (accesibilidad): no encadenar
 * niveles por estilo visual, usar la `size` CSS correspondiente.
 */
export function Heading({ level = 2, children, id, className }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  const classes = [styles.heading, styles[`heading${level}`], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
}
