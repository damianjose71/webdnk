"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { navigation } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import styles from "./navigation.module.css";

/**
 * Navegación principal.
 * - Desktop (≥768px): enlaces horizontales con desplegable de
 *   servicios (CSS puro, sin JS).
 * - Tablet/Móvil (<768px): botón hamburguesa + MobileMenu.
 *
 * La visibilidad definitiva de cada enlace en el navbar es una
 * decisión de diseño pendiente; cambiarla = editar
 * src/data/navigation/index.ts.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  // El menú se cierra al pulsar cualquier enlace (onNavigate en
  // NavLinks → onClose en MobileMenu); no hace falta cerrarlo
  // desde un effect al cambiar de ruta.

  // Bloquea el scroll del body con el menú abierto.
  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <>
      <nav
        className={styles.desktopNav}
        aria-label="Navegación principal"
      >
        <NavLinks items={navigation.main} layout="horizontal" />
      </nav>

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "menu"} size={24} />
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
