/**
 * Estructura de la navegación.
 * Centralizada: se consume desde Navbar, MobileMenu, Footer y
 * sitemap. Cambiar la navegación = cambiar solo estos archivos.
 */

export interface NavItem {
  /** Texto visible. */
  label: string;
  /** Ruta interna (comienza por "/") o URL externa. */
  href: string;
  /** Subelementos (ej.: los cinco servicios bajo "Servicios"). */
  children?: NavItem[];
  /** Marca enlaces externos (target/rel automáticos). */
  external?: boolean;
}

export interface NavigationData {
  /** Navegación principal (header). */
  main: NavItem[];
  /** Enlaces del pie de página (puede reutilizar los principales). */
  footer: NavItem[];
}
