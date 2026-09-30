"use client";

import { NavLinks } from "./NavLinks";
import { navigation } from "@/data/navigation";
import styles from "./navigation.module.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Menú móvil (panel a pantalla completa).
 * Se renderiza solo cuando está abierto; el botón que lo
 * controla vive en Navbar (aria-controls="mobile-menu").
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className={styles.mobilePanel} id="mobile-menu">
      <nav aria-label="Navegación principal (móvil)" className={styles.mobileNav}>
        <NavLinks
          items={navigation.main}
          layout="stacked"
          onNavigate={onClose}
        />
      </nav>
    </div>
  );
}
