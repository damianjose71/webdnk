# Mapa de componentes

Arquitectura por componentes: qué existe, dónde vive y quién lo usa.

## Reglas

- **Datos ≠ presentación**: los componentes reciben contenido de `src/data/`.
- Reutilizar antes de duplicar; si un componente crece mucho, moverlo a su
  carpeta con su `*.module.css`.
- `"use client"` solo para interactividad (hoy: navegación y formulario).

## `src/components/ui/` — primitivas reutilizables

| Componente | Archivo | Uso |
| --- | --- | --- |
| `Container` | `Container.tsx` | Ancho máximo + padding responsive. Base de secciones y layout. |
| `Button` | `Button.tsx` | Botón real o enlace (`href`) con variantes primary/secondary/ghost. |
| `Heading` | `Heading.tsx` | Encabezado semántico h1–h4 con `id` para `aria-labelledby`. |
| `Badge` | `Badge.tsx` | Etiquetas (categorías, "ejemplo"). |
| `Icon` | `Icon.tsx` | Set mínimo de iconos inline (`IconName`). Ampliar solo si es necesario. |
| `Image` | `Image.tsx` | Envoltorio de `next/image` con `alt` obligatorio. |
| `Video` | `Video.tsx` | `<video>` nativo con caption. |

## `src/components/layout/` — estructura

| Componente | Uso |
| --- | --- |
| `MainLayout` | Skip link + Header + `<main id="main-content">` + Footer. Montado en `src/app/layout.tsx`. |
| `Header` | Marca (placeholder de logo) + `Navbar`. |
| `Footer` | Enlaces desde `src/data/navigation` + avisos TODO. |
| `PageContainer` | Contenedor estándar de contenido de página. |

## `src/components/navigation/`

| Componente | Tipo | Uso |
| --- | --- | --- |
| `Navbar` | client | Alterna desktop/móvil, estado del menú, `aria-expanded`. |
| `NavLinks` | client | Lista de enlaces (horizontal con desplegable / stacked). Estado activo. |
| `MobileMenu` | client | Panel móvil `#mobile-menu`. |

## `src/components/sections/` — secciones grandes

| Sección | Usada en | Datos |
| --- | --- | --- |
| `Hero` | home | props (`title`, `description`) |
| `About` | home | *placeholder* |
| `Services` | home | `src/data/services` |
| `FeaturedProjects` | home | `src/data/projects` (`featured`) |
| `Process` | home | *placeholder* |
| `Testimonials` | home | `src/data/testimonials` |
| `CTA` | home | — |
| `Contact` | `/contacto` | `ContactForm` |

Estado: **estructurales**, sin acabado visual ni animaciones.

## `src/components/cards/`

| Componente | Datos |
| --- | --- |
| `ServiceCard` (+ `ServiceBadge`) | `Service` |
| `ProjectCard` | `Project` |
| `TestimonialCard` | `Testimonial` |

## `src/components/forms/`

| Componente | Tipo | Notas |
| --- | --- | --- |
| `ContactForm` | client | Validación local (`src/utils/validation.ts`), sin envío real. |

## Estilos

- Globales: `src/styles/variables.css`, `globals.css`, `animations.css`.
- Por carpeta (CSS Modules): `ui.module.css`, `layout.module.css`,
  `navigation.module.css`, `sections.module.css`, `cards.module.css`,
  `forms.module.css`.
- Por página de detalle: `servicio.module.css`, `proyecto.module.css`.

## Flujo de datos

```
src/data/*  ──▶  pages (src/app/**/page.tsx)  ──▶  sections/cards  ──▶  ui
     ▲                    │
     └── tipos (types.ts) ┘
```

## Animaciones

`src/styles/animations.css` contiene solo clases base (`dnk-fade-in`,
`dnk-fade-in-up`) y reservas. Toda animación nueva debe registrarse aquí y
respetar `prefers-reduced-motion`.
