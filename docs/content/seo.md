# SEO

> **Estado: arquitectura lista, contenido SEO pendiente.**
> No se ha escrito ningún texto SEO definitivo.

## Qué está implementado

| Elemento | Implementación |
| --- | --- |
| `lang` y HTML semántico | `src/app/layout.tsx` (`<html lang="es">`) |
| Título con template | `%s | DNK` en `layout.tsx` |
| Meta description global | `SITE_DESCRIPTION` en `src/config/site.ts` (TODO) |
| Descripción por página | `buildMetadata(seo)` + campos `seo` de los datos |
| Canonical | `seo.canonical` → `alternates.canonical` |
| Open Graph | `openGraph` (siteName, locale, description, image opcional) |
| Twitter/X cards | `twitter.card` + description |
| `metadataBase` | `NEXT_PUBLIC_SITE_URL` |
| Sitemap | `src/app/sitemap.ts` (rutas + servicios + proyectos) |
| Robots.txt | `src/app/robots.ts` |
| Rutas estáticas rápidas | SSG en build (mejor Core Web Vitals) |
| Imágenes | `next/image` (AVIF/WebP, lazy, responsive) |

## Pendiente

- [ ] Redactar `SITE_DESCRIPTION` global (140–160 caracteres).
- [ ] Redactar `title` y `description` de cada página (están como `TODO:`).
- [ ] Añadir imagen OG por defecto (`seo.ogImage` en datos /
      `openGraph.images` en layout) — requiere definir imagen de marca.
- [ ] Favicons y `apple-touch-icon` (`public/brand/favicon/`).
- [ ] **Datos estructurados JSON-LD**: `Organization` (home), `Service` (cada
      servicio), `BreadcrumbList` (fichas de detalle), `Project`/`CreativeWork`.
- [ ] Sitemap con `lastModified` real cuando haya fechas de publicación.
- [ ] Canonical absoluta en producción: comprobar `NEXT_PUBLIC_SITE_URL`.
- [ ] Enlaces internos: mantener home → servicios → proyectos → contacto.
- [ ] Analítica (decisión de privacidad pendiente).

## Reglas de metadatos

- **Título**: 50–60 caracteres, keyword principal al inicio, sin relleno.
- **Description**: 140–160 caracteres, distinta por página, con llamada
  implícita a la acción.
- **H1 único** por página; jerarquía h2 → h3 sin saltos por estilo.
- Evitar contenido duplicado: una URL = un contenido (evitar www/no-www y
  http/https sin canonical — resolver con `NEXT_PUBLIC_SITE_URL`).

## Dónde se edita cada cosa

| Dónde | Qué |
| --- | --- |
| `src/config/site.ts` | Nombre, descripción global, URL base |
| `src/data/services/*.ts` | `seo` de cada servicio |
| `src/data/projects/*.ts` | `seo` de cada proyecto |
| `src/app/<ruta>/page.tsx` | `metadata` de páginas estáticas |
| `src/app/sitemap.ts` / `robots.ts` | Mapa del sitio y rastreo |

## Comprobación previa al lanzamiento

1. `NEXT_PUBLIC_SITE_URL` correcto en producción.
2. Visitar `/sitemap.xml` y `/robots.txt`.
3. Validar metadatos con la extensión de Rich Results / Sharing Debugger.
4. Probar vista previa de enlaces (Open Graph) con la imagen definitiva.
5. Auditar accesibilidad y rendimiento (Lighthouse ≥ 90 objetivo).
