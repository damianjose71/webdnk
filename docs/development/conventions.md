# Convenciones de código

## TypeScript

- TypeScript estricto (`strict`, `noUncheckedIndexedAccess`).
- **No usar `any`** salvo que exista una razón documentada en el propio archivo
  (comentario explicando el porqué).
- Preferir tipos e interfaces exportados desde `src/data/**/types.ts` o desde el
  componente que los define.
- Prefijos de tipo en datos de ejemplo: marcar con `isExample: true` y comentario.

## Nombres

- Componentes: `PascalCase` (`ServiceCard.tsx` → `ServiceCard`).
- Archivos de datos: `kebab-case` (`example-project.ts`).
- Estilos: `nombre-carpeta.module.css` (`cards.module.css`).
- Clases CSS: `camelCase` en CSS Modules; utilidades globales en `kebab-case`
  (`.placeholder-note`, `.card-grid`, `.sr-only`).
- Rutas/Slugs: en español, sin tildes ni espacios (`desarrollo-web`).

## Componentes

- Funcionales, con tipos en `interface Props` exportados si se reutilizan.
- Presentación pura: **el componente no contiene contenido editorial**; todo
  el texto editable vive en `src/data/`.
- Un solo `<h1>` por página; los componentes usan `Heading` con el nivel
  semántico correcto (nunca por tamaño visual).
- Elementos interactivos semánticos: `<button>`, `<a>`, `<label>`. Prohibido
  `div` con `onClick` para navegar o activar.
- `"use client"` solo donde haga falta (menú, formulario). El resto del sitio
  permanece como Server Component.

## Estilos

- Tokens siempre desde `variables.css` (`var(--color-accent)`), jamás valores
  hardcodeados de color/tipografía/espaciado.
- Breakpoints usados como literales: `480 / 768 / 1024 / 1280 / 1536 px`
  (mantener sincronizados con `variables.css`).
- Sin anchos fijados en píxeles para bloques de contenido: usar `max-width` +
  `clamp()`/`minmax()` para que el diseño escale de móvil a pantalla grande.
- Respetar `prefers-reduced-motion` (ya global en `globals.css`).

## Accesibilidad (obligatorio en cada cambio)

- HTML semántico y `alt` explícito en toda imagen (`alt=""` solo si es
  decorativa).
- Labels visibles en todos los campos de formulario.
- Estados de foco visibles (no eliminar `:focus-visible`).
- Contraste AA como mínimo cuando se definan los colores.

## Contenido

- **No inventar** clientes, testimonios, cifras, premios, precios ni años de
  experiencia.
- Todo texto pendiente se marca: `TODO: descripción...`
- Los registros de prueba van marcados `isExample: true` y con badge visible.

## Antes de modificar algo estructural

1. Leer `AGENTS.md`.
2. Leer `README.md`.
3. Leer la documentación relevante de `docs/`.
4. Revisar la arquitectura existente.
5. No reemplazar una arquitectura sin justificarlo por escrito en
   `docs/development/`.

## Commits

Formato convencional (en inglés o español, mantener consistencia):

```
feat(servicios): añadir campo navLabel al modelo de servicio
fix(navegación): cerrar menú móvil al navegar
docs(architecture): actualizar sitemap con ruta /legal
chore(deps): actualizar Next.js
```
