# Textos de servicios (services-copy)

> **Estado: placeholders.** El contenido definitivo se redacta en este
> documento y luego se vuelca a `src/data/services/<archivo>.ts`.
> No inventar entregables ni beneficios: confirmarlos con DNK.

## Fuente de verdad

Cada servicio vive en un archivo independiente con la **misma estructura**:

```
src/data/services/
├── audiovisual.ts   → Producción audiovisual      (/servicios/audiovisual)
├── design.ts        → Diseño gráfico              (/servicios/diseno)
├── branding.ts      → Branding                    (/servicios/branding)
├── content.ts       → Creación y estrategia de contenido (/servicios/contenido)
└── web.ts           → Desarrollo y creación de páginas web (/servicios/desarrollo-web)
```

## Campos y longitudes orientativas

| Campo | Dónde se ve | Longitud recomendada |
| --- | --- | --- |
| `name` | Menú, tarjetas, H1 | corto (2–5 palabras) |
| `shortDescription` | Tarjetas, meta de listados | ≤ 160 caracteres |
| `description` | Ficha del servicio | 60–150 palabras |
| `services[]` | "Qué incluye" | frases cortas, 4–8 elementos |
| `benefits[]` | "Beneficios" | 3–5 elementos |
| `process[]` | "Proceso" | 3–5 fases con título + descripción |
| `featuredProjects[]` | "Proyectos relacionados" | slugs de proyectos reales |
| `seo` | `<title>`, meta description, canonical | ver `docs/content/seo.md` |

## Pendiente por servicio

### 1. Producción audiovisual (`audiovisual.ts`)
- [ ] `shortDescription`
- [ ] `description`
- [ ] Entregables reales (ej.: ¿fotografía también? ¿solo vídeo?)
- [ ] Beneficios confirmados
- [ ] Proceso por fases
- [ ] Imagen de servicio (`public/images/services/audiovisual/`)

### 2. Diseño gráfico (`design.ts`)
- [ ] `shortDescription` / `description`
- [ ] Entregables reales (¿social media, impresión, editorial?)
- [ ] Beneficios
- [ ] Proceso
- [ ] Imagen (`public/images/services/design/`)

### 3. Branding (`branding.ts`)
- [ ] `shortDescription` / `description`
- [ ] Entregables reales (¿naming? ¿manual? ¿aplicaciones?)
- [ ] Beneficios
- [ ] Proceso
- [ ] Imagen (`public/images/services/branding/`)

### 4. Creación y estrategia de contenido (`content.ts`)
- [ ] `shortDescription` / `description`
- [ ] Entregables reales (redes, guiones, planificación…)
- [ ] Beneficios
- [ ] Proceso
- [ ] Imagen (`public/images/services/content/`)

### 5. Desarrollo y creación de páginas web (`web.ts`)
- [ ] `shortDescription` / `description`
- [ ] Entregables reales (¿landing? ¿corporativa? ¿e-commerce?)
- [ ] Beneficios
- [ ] Proceso
- [ ] Imagen (`public/images/services/web/`)

## Coherencia de arquitectura

- El sitio presenta a DNK como **agencia creativa integral**, no como
  productora con extras: cada servicio se documenta con la misma profundidad.
- El desarrollo web es una categoría de primer nivel, con su propia ruta,
  imagen y datos.
- Añadir un servicio nuevo = crear archivo en `src/data/services/` y
  añadirlo al array de `index.ts`. Rutas, menú, home y sitemap se actualizan
  solos.
