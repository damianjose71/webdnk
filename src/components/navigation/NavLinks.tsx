"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navigation";
import styles from "./navigation.module.css";

interface NavLinksProps {
  items: NavItem[];
  /** `horizontal` = menú desktop con desplegable; `stacked` = menú móvil. */
  layout?: "horizontal" | "stacked";
  /** Callback al pulsar un enlace (cierra el menú móvil). */
  onNavigate?: () => void;
}

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Lista de enlaces de navegación (reutilizada por el Navbar
 * desktop y por el menú móvil).
 * Muestra el estado activo con `aria-current="page"`.
 */
export function NavLinks({ items, layout = "horizontal", onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={layout === "horizontal" ? styles.navList : styles.navListStacked}
      role="list"
    >
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        const hasChildren = Boolean(item.children?.length);

        return (
          <li
            key={item.href}
            className={[
              styles.navItem,
              hasChildren && layout === "horizontal" ? styles.hasDropdown : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Link
              href={item.href}
              className={[styles.navLink, active ? styles.navLinkActive : ""]
                .filter(Boolean)
                .join(" ")}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {item.label}
            </Link>

            {hasChildren ? (
              <ul
                className={
                  layout === "horizontal" ? styles.dropdown : styles.subList
                }
                role="list"
              >
                {item.children?.map((child) => {
                  const childActive = isActivePath(pathname, child.href);

                  return (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={[
                          styles.navLink,
                          childActive ? styles.navLinkActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        aria-current={childActive ? "page" : undefined}
                        onClick={onNavigate}
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
