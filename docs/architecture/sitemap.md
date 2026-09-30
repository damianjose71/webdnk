# Sitemap

Estructura de rutas actual (todas estáticas en build) y prevista.

## Rutas implementadas (v0.1.0)

| Ruta | Archivo | Origen del contenido |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Secciones de `src/components/sections/` |
| `/servicios` | `src/app/servicios/page.tsx` | `src/data/services` |
| `/servicios/audiovisual` | `src/app/servicios/[slug]/page.tsx` | `src/data/services/audiovisual.ts` |
| `/servicios/diseno` | ídem | `src/data/services/design.ts` |
| `/servicios/branding` | ídem | `src/data/services/branding.ts` |
| `/servicios/contenido` | ídem | `src/data/services/content.ts` |
| `/servicios/desarrollo-web` | ídem | `src/data/services/web.ts` |
| `/proyectos` | `src/app/proyectos/page.tsx` | `src/data/projects` |
| `/proyectos/[slug]` | `src/app/proyectos/[slug]/page.tsx` | `src/data/projects` |
| `/nosotros` | `src/app/nosotros/page.tsx` | *placeholder* |
| `/contacto` | `src/app/contacto/page.tsx` | `ContactForm` |
| `/robots.txt` | `src/app/robots.ts` | generado |
| `/sitemap.xml` | `src/app/sitemap.ts` | generado |
| 404 | `src/app/not-found.tsx` | — |

Árbol:

```
/
├── servicios/
│   ├── audiovisual
│   ├── diseno
│   ├── branding
│   ├── contenido
│   └── desarrollo-web
├── proyectos/
│   └── [slug]            (dinámico desde src/data/projects)
├── nosotros
└── contacto
```

## Cómo añadir una ruta nueva

1. Crear `src/app/<ruta>/page.tsx`.
2. Si tiene contenido editable: añadir datos en `src/data/` (no en la página).
3. Añadir la ruta a `src/app/sitemap.ts`.
4. Añadir el enlace a `src/data/navigation/index.ts` si debe navegar.
5. Añadir `seo.canonical`/`seo.description` en los datos.
6. Documentar en este archivo.

## Rutas candidatas (pendientes de decisión)

| Ruta | Motivo | Estado |
| --- | --- | --- |
| `/servicios` detalle por sub-servicio | si un servicio crece mucho | pendiente |
| `/legal/aviso-legal`, `/legal/privacidad`, `/legal/cookies` | obligación legal | pendiente |
| `/blog` o `/recursos` | estrategia de contenido | pendiente (decisión estratégica) |
| `/trabaja-con-nosotros` | no definido | descartado por ahora |

> Regla: no crear rutas sin una decisión documentada en
> `docs/strategy/` o `docs/architecture/`.

## Notas técnicas

- `/servicios/[slug]` y `/proyectos/[slug]` usan `generateStaticParams`: las
  rutas existentes se pre-renderizan en build; cualquier slug desconocido
  devuelve 404 (`notFound()`).
- El sitemap se genera automáticamente desde los mismos datos, así que una URL
  nueva de servicio/proyecto **no** requiere tocar `sitemap.ts`.
