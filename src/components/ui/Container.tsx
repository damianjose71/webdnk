import type { ElementType, ReactNode } from "react";
import styles from "./ui.module.css";

interface ContainerProps {
  /** Elemento HTML renderizado (div, section, nav...). */
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

/**
 * Contenedor con ancho máximo y padding lateral responsive.
 * Base de casi todos los bloques del sitio.
 */
export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
