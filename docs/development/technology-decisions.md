# Decisiones tecnológicas

> Documento generado durante la configuración inicial (v0.1.0).
> Cualquier cambio de stack debe registrarse aquí.

## Resumen

| Área | Elección | Motivo |
| --- | --- | --- |
| Framework | **Next.js 16 (App Router)** | Rendering estático/SSR, SEO (metadata API, sitemap, robots), rutas dinámicas y rendimiento en un solo framework. |
| Lenguaje | **TypeScript 6** (strict) | Seguridad de tipos entre datos, componentes y páginas. |
| UI | **React 19** | Arquitectura por componentes reutilizables. |
| Estilos | **CSS Modules + CSS global** (`src/styles`) | Sin dependencias extra, scope automático por componente, variables globales para tokens. |
| Lint | **ESLint 9 + eslint-config-next** | Reglas de Next.js y React; `eslint.config.mjs` (flat config). |
| Datos | **TypeScript plano** en `src/data` | Separa contenido de presentación sin CMS ni base de datos. |
| Imágenes | `next/image` | Lazy loading, formatos modernos (AVIF/WebP), imágenes responsivas. |
| Vídeos | `<video>` nativo + rutas en `public/videos` | Cero dependencias; preparado para CDN/URLs externas. |

## Por qué Next.js y no otro

- **SEO**: el sitio es la vitrina de una agencia; se necesita indexación, metadatos, Open Graph, sitemap y robots.txt desde el primer momento. Next.js los cubre de forma nativa (`app/sitemap.ts`, `app/robots.ts`, `generateMetadata`).
- **Rendimiento**: las páginas se generan de forma estática (SSG) en el build: todas las rutas actuales son estáticas, sin servidor dinámico innecesario.
- **Evolución**: si más adelante hace falta SSR/dinámico (formularios con API, CMS, auth), la misma arquitectura lo admite sin rehacer el proyecto.
- **Alternativas descartadas**:
  - *Astro*: excelente para sitios estáticos, pero añade un segundo modelo de componentes cuando ya se quiere React (formularios, menú interactivo).
  - *Svelte/Astro puro*: rompería la arquitectura por componentes React ya planificada.
  - *Vite + React SPA*: peor SEO (sin prerender) para un sitio de agencia.

## Decisiones concretas

### TypeScript estricto
- `strict: true` y `noUncheckedIndexedAccess: true`.
- `any` prohibido salvo justificación documentada (ver `docs/development/conventions.md`).
- Alias de rutas: `@/*` → `src/*`.

### CSS Modules por carpeta
- `src/styles/` mantiene los tokens y estilos globales (`variables.css`, `globals.css`, `animations.css`).
- Cada carpeta de componentes tiene su `*.module.css` (`ui`, `layout`, `navigation`, `sections`, `cards`, `forms`).
- Motivo: el scope automático evita colisiones y mantiene los estilos cerca de su componente, sin añadir preprocesadores ni frameworks CSS (Tailwind, etc.) que no se han pedido.

### Datos como módulos TypeScript
- Contenido en `src/data/*` con tipos propios (`types.ts`).
- Ventajas: autocompletado, validación en build, sin fetch ni CMS, cambios de contenido sin tocar componentes.
- Límite conocido: un cambio de contenido requiere deploy. Si se necesita edición por no-técnicos, evaluar CMS/headless (pendiente, ver `roadmap.md`).

### Rutas dinámicas generadas desde datos
- `/servicios/[slug]` → `generateStaticParams` desde `src/data/services`.
- `/proyectos/[slug]` → `generateStaticParams` desde `src/data/projects`.
- Evita duplicar código por cada servicio/proyecto.

### Estructura `src/app` en lugar de `src/pages`
- Next.js App Router unifica rutas y páginas en `src/app/<ruta>/page.tsx`.
- Es la única desviación respecto a la estructura propuesta inicialmente; conserva la filosofía (una carpeta por ruta, contenido separado de la presentación).

### Variables de entorno
- Solo `NEXT_PUBLIC_SITE_URL` se usa hoy (`src/config/site.ts`).
- `.env.example` documenta las integraciones futuras.

### Dependencias añadidas (y solo estas)
- Runtime: `next`, `react`, `react-dom`.
- Dev: `typescript`, `@types/*`, `eslint`, `eslint-config-next`.
- **No** se añadieron: librerías de animación, CMS, backend, auth, bases de datos, frameworks CSS ni utilidades generales.

### Incompatibilidad ESLint 10
- `eslint@10` rompe `eslint-plugin-react` (incluido en `eslint-config-next`): error
  `contextOrFilename.getFilename is not a function`.
- Solución: fijar `eslint@^9` en `devDependencies`.

## Decisiones pendientes (bloqueantes para el diseño)

1. Identidad visual (color, tipografía, logotipo) → `docs/brand/`.
2. Hosting y dominio → `docs/development/deployment.md`.
3. Proveedor de envío del formulario de contacto (+ RGPD).
4. Estrategia de medios pesados (CDN/almacenamiento externo).
5. Analítica y privacidad (cookies/consentimiento).
