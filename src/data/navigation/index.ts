import { services } from "@/data/services";
import type { NavItem, NavigationData } from "./types";

/**
 * Navegación centralizada del sitio.
 *
 * - Los enlaces de servicios se derivan de src/data/services:
 *   añadir un servicio nuevo actualiza el menú automáticamente.
 *   (Si un día se necesita otro texto en el menú que el nombre
 *   público, añadir un `navLabel` al modelo de servicio.)
 * - Que un elemento aparezca o no en el navbar final es una
 *   decisión de diseño/UX pendiente; la estructura ya lo
 *   permite (ver docs/architecture/user-flow.md).
 */

const serviceLinks: NavItem[] = services.map((service) => ({
  label: service.name,
  href: `/servicios/${service.slug}`,
}));

const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios", children: serviceLinks },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const navigation: NavigationData = {
  main: mainNav,
  footer: mainNav,
};

export type { NavItem, NavigationData } from "./types";
