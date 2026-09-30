import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ui.module.css";

interface ButtonProps {
  children: ReactNode;
  /** Si se indica, se renderiza como enlace interno (Next Link). */
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  /** Solo aplica cuando NO hay href. */
  type?: "button" | "submit";
  /** Solo aplica cuando NO hay href. */
  onClick?: () => void;
  disabled?: boolean;
  /** Etiqueta accesible cuando el contenido visible no es suficiente. */
  ariaLabel?: string;
  className?: string;
}

/**
 * Botón base reutilizable.
 * - Con `href` renderiza un enlace (navegación real, accesible).
 * - Sin `href` renderiza un `<button>` real (nunca un div).
 */
export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
  ariaLabel,
  className,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`button${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
