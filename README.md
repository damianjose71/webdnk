# DNK Web

Sitio web corporativo de **DNK**, agencia creativa integral. Este repositorio
contiene la **base del proyecto**: arquitectura, componentes, datos,
herramientas de desarrollo y documentación, preparada para construir la web
sección por sección sin reorganizarla.

> **Fase actual (v0.1.0): arquitectura, no diseño.**
> La identidad visual, el copy definitivo y las animaciones están pendientes;
> los contenidos no confirmados van marcados como `TODO:`.

---

## Qué es DNK

DNK comenzó como productora audiovisual y evoluciona hacia una agencia
creativa integral que ofrece cinco áreas de servicio:

1. Producción audiovisual
2. Diseño gráfico
3. Branding
4. Creación y estrategia de contenido
5. Desarrollo y creación de páginas web

---

## Objetivo del proyecto

Disponer de una base de código limpia, escalable, profesional y documentada
para desarrollar la web progresivamente (estrategia → sitemap → wireframes →
identidad → diseño → desarrollo final) sin tener que reorganizar el proyecto
cada vez que se agregue un servicio, proyecto, página o funcionalidad.

---

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, rendering estático) |
| Lenguaje | TypeScript 6 (strict) |
| UI | React 19, arquitectura por componentes |
| Estilos | CSS Modules + tokens CSS globales |
| Lint | ESLint 9 + `eslint-config-next` |
| Imágenes | `next/image` (AVIF/WebP, lazy loading) |
| Datos | Módulos TypeScript en `src/data` (sin CMS ni base de datos) |

Decisiones y alternativas: [`docs/development/technology-decisions.md`](docs/development/technology-decisions.md).

---

## Instalación

Requisitos: **Node.js ≥ 20** y npm.

```bash
git clone <URL_DEL_REPOSITORIO>
cd dnk-web
npm install
```

---

## Desarrollo local

```bash
npm run dev        # servidor de desarrollo → http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # comprobación de tipos
npm run build      # build de producción
npm run start      # sirve el build de producción
```

---

## Estructura

```
dnk-web/
├── .github/workflows/       CI (typecheck + lint + build)
├── public/
│   ├── brand/{logo,favicon,icons}
│   ├── images/{hero, services/*, projects, team, general}
│   ├── videos/{hero, projects, general}
│   └── fonts/
├── src/
│   ├── app/                 rutas (App Router), layout, sitemap, robots
│   ├── components/
│   │   ├── ui/              Button, Container, Heading, Badge, Icon, Image, Video
│   │   ├── layout/          MainLayout, Header, Footer, PageContainer
│   │   ├── navigation/      Navbar, NavLinks, MobileMenu
│   │   ├── sections/        Hero, About, Services, FeaturedProjects,
│   │   │                    Process, Testimonials, CTA, Contact
│   │   ├── cards/           ServiceCard, ProjectCard, TestimonialCard
│   │   └── forms/           ContactForm
│   ├── data/                services, projects, testimonials, navigation
│   ├── styles/              variables.css, globals.css, animations.css
│   ├── utils/               seo, validation, media
│   ├── config/              site.ts (nombre, descripción, URL base)
│   └── layouts / pages      → en App Router viven en src/app/<ruta>/page.tsx
├── docs/                    brand, strategy, architecture, content, development
├── AGENTS.md                instrucciones para agentes de OpenCode
├── opencode.json            configuración de OpenCode
├── CHANGELOG.md
└── README.md
```

---

## Organización de imágenes

```
public/images/
├── hero/                    imágenes de secciones principales
├── services/
│   ├── audiovisual/         vídeo, fotografía, grabación, iluminación
│   ├── design/              diseño gráfico, piezas, redes
│   ├── branding/            identidad, manuales, aplicaciones de marca
│   ├── content/             contenido, redes, estrategia digital
│   └── web/                 interfaces, landing pages, sitios web
├── projects/                proyectos reales (NO se agrupan por servicio)
├── team/                    integrantes de DNK
└── general/                 recursos que no encajan en otras carpetas
```

- Los recursos de marca (logo, favicon) van en `public/brand/`.
- Vídeos en `public/videos/{hero,projects,general}`; **los pesados no van a
  Git** (CDN / almacenamiento externo / URL externa).
- Guía completa: [`docs/content/media-organization.md`](docs/content/media-organization.md).

---

## Organización de servicios

Cinco archivos independientes con la misma estructura (`interface Service`):

```
src/data/services/
├── audiovisual.ts   → /servicios/audiovisual
├── design.ts        → /servicios/diseno
├── branding.ts      → /servicios/branding
├── content.ts       → /servicios/contenido
├── web.ts           → /servicios/desarrollo-web
└── index.ts         → catálogo + helpers
```

Cada servicio puede contener `id`, `slug`, `name`, `shortDescription`,
`description`, `image`, `icon`, `services`, `benefits`, `process`,
`featuredProjects` y `seo`.

**Añadir un servicio = crear el archivo y añadirlo al array**: las rutas
(`/servicios/[slug]`), el menú, la home y el sitemap se actualizan solos.

---

## Organización de proyectos

```
src/data/projects/
├── example-project.ts   → plantilla marcada (isExample: true)
├── types.ts
└── index.ts
```

Campos: `id`, `slug`, `client`, `title`, `category`, `description`,
`services[]`, `coverImage`, `gallery[]`, `videos[]`, `year`, `featured`,
`url`, `seo`.

- Los proyectos son **entidades independientes** de los servicios: un
  proyecto puede implicar varios (`services: ["audiovisual", "branding",
  "desarrollo-web"]`).
- `/proyectos/[slug]` se genera desde los datos (sin código duplicado).
- **No se inventan proyectos**: solo registros reales; el de ejemplo existe
  para validar el sistema y aparece con badge "Ejemplo".

---

## Documentación

| Carpeta | Contenido |
| --- | --- |
| `docs/brand/` | Guía de marca, color, tipografía, estilo visual (pendientes) |
| `docs/strategy/` | Posicionamiento, público, propuesta de valor, modelo de negocio |
| `docs/architecture/` | Sitemap, user flow, mapa de componentes, arquitectura de medios |
| `docs/content/` | Textos, textos de servicios, SEO, organización de medios |
| `docs/development/` | Setup, convenciones, despliegue, roadmap, decisiones técnicas |
| `AGENTS.md` | Instrucciones obligatorias para agentes de OpenCode |

---

## Flujo de trabajo con Git

1. Crear una rama desde `main`: `feat/…`, `fix/…`, `docs/…`.
2. Trabajar por cambios pequeños y coherentes.
3. Verificar antes de commitear:

   ```bash
   npm run typecheck && npm run lint && npm run build
   ```

4. Commit con mensaje claro (`feat(servicios): …`).
5. Abrir PR; la CI (`.github/workflows/ci.yml`) repite la verificación.
6. Revisar y fusionar en `main`.

Reglas: no commitear `.env`, `node_modules/`, `.next/`; mantener
`AGENTS.md`, `README.md` y `docs/` actualizados con los cambios estructurales.

---

## Variables de entorno

1. Copia `.env.example` → `.env.local`.
2. Define `NEXT_PUBLIC_SITE_URL` (URL canónica para canonical, Open Graph,
   sitemap y robots.txt).

| Variable | Estado | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | activa (requerida en producción) | SEO base |
| Integraciones futuras | preparadas en `.env.example` | formularios, CDN, analítica |

No subir nunca archivos `.env` reales.

---

## Estado y pendientes

La base está construida y verificada (`typecheck` + `lint` + `build` en verde).
Pendiente: identidad visual, copy real, proyectos/testimonios reales,
conexión del formulario y despliegue. Detalle en
[`docs/development/roadmap.md`](docs/development/roadmap.md).
