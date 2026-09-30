# Despliegue

> **Estado: pendiente de decisión.** Todavía no hay hosting ni dominio
> definidos. Este documento deja preparada la base.

## Consideraciones del proyecto

- Sitio mayoritariamente **estático**: casi todas las páginas se generan en el
  build (SSG), así que cualquier hosting con soporte de Next.js sirve.
- Necesita: Node en build, soporte de `next start` (o export estático futuro),
  HTTPS y dominio propio.

## Checklist previo al primer despliegue

- [ ] Definir dominio y proveedor de hosting.
- [ ] Definir `NEXT_PUBLIC_SITE_URL` en las variables de entorno de producción.
- [ ] Sustituir placeholders de metadatos (ver `docs/content/seo.md`).
- [ ] Añadir favicons/OG images reales (`public/brand/favicon`).
- [ ] Revisar `robots.txt` (generado en `src/app/robots.ts`).
- [ ] Revisar accesibilidad y contraste con la paleta final.
- [ ] Conectar el formulario de contacto a un proveedor real.

## Proveedores evaluables (sin decidir)

- **Vercel / Netlify**: despliegue directo desde Git, cero configuración,
  CDN incluido. Alternativas comerciales habituales.
- **Servidor propio / VPS**: control total; requiere gestor de procesos
  (`next start`) y certificados HTTPS.
- **Static export** (`output: "export"`): máxima portabilidad; descarta
  funciones dinámicas (API routes) si se necesitan más adelante.

## Variables de entorno en producción

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sí | URL canónica, OG, sitemap, robots. |
| Futuras (formularios, CDN, analítica) | Según integración | Ver `.env.example`. |

## Flujo previsto

1. Push a la rama principal.
2. CI (`.github/workflows/ci.yml`): install → typecheck → lint → build.
3. Despliegue automático desde la rama principal (proveedor por definir).
4. Deploy de previsualización por rama/PR si el proveedor lo permite.
