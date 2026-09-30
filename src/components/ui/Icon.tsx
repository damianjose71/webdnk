import type { ReactElement, SVGProps } from "react";

/**
 * Iconos inline del proyecto.
 *
 * Conjunto mínimo inicial: se amplía SOLO cuando un icono sea
 * realmente necesario (regla: no acumular iconos decorativos).
 * Todos los iconos son decorativos por defecto (aria-hidden),
 * con texto alternativo externo cuando se necesite.
 */

export type IconName =
  | "arrow-right"
  | "menu"
  | "close"
  | "camera"
  | "palette"
  | "shape"
  | "content"
  | "code";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Tamaño en px. */
  size?: number;
}

const PATHS: Record<IconName, ReactElement> = {
  "arrow-right": <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  // Placeholders gráficos: sustituir por la iconografía de marca.
  camera: <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Zm8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  palette: <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.2-1.7-.5-.9.1-2 1.2-2H17a4 4 0 0 0 4-4c0-5-4-8.3-9-8.3Zm-4 9h.01M12 7h.01M16 9h.01" />,
  shape: <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Zm0 0v18" />,
  content: <path d="M5 4h14v16H5V4Zm3 4h8M8 12h8M8 16h5" />,
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />,
};

/**
 * @example <Icon name="arrow-right" size={20} />
 */
export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
