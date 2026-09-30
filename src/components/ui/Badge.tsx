import type { ReactNode } from "react";
import styles from "./ui.module.css";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent";
  className?: string;
}

/** Etiqueta pequeña (categorías, estados, avisos). */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  const classes = [
    styles.badge,
    tone === "accent" ? styles.badgeAccent : styles.badgeNeutral,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
