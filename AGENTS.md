# AGENTS.md — Instrucciones para agentes de OpenCode

Este documento es la referencia obligatoria para cualquier agente que
trabaje en este repositorio. Léelo **antes** de modificar nada.

---

## 1. Identidad del proyecto

**DNK es una agencia creativa.** Empezó como productora audiovisual y está
evolucionando hacia una agencia creativa integral. La web debe presentarla
como agencia capaz de combinar estrategia, diseño, comunicación visual,
producción audiovisual, contenido y tecnología/desarrollo web.

No plantear el sitio como "una productora que además hace otras cosas".

---

## 2. Servicios

Cinco áreas, con el mismo peso en la arquitectura:

1. Producción audiovisual — `/servicios/audiovisual`
2. Diseño gráfico — `/servicios/diseno`
3. Branding — `/servicios/branding`
4. Creación y estrategia de contenido — `/servicios/contenido`
5. Desarrollo y creación de páginas web — `/servicios/desarrollo-web`

Se manejan como **datos independientes** en `src/data/services/`.

---

## 3. Principios

- Mantener la arquitectura limpia y coherente con lo existente.
- Reutilizar componentes; no duplicar código.
- **Separar datos de presentación**: el contenido vive en `src/data/`.
- Priorizar rendimiento (menos JS, imágenes optimizadas, estático cuando se pueda).
- Priorizar accesibilidad (semántica, teclado, foco, labels, contraste).
- Mantener responsive (móvil / tablet / desktop / pantalla grande).
- **No inventar contenido** (ver §7).
- No modificar decisiones de branding sin autorización (ver `docs/brand/`).
- **No instalar dependencias innecesarias.** Justificar toda nueva librería en
  `docs/development/technology-decisions.md`.
- No eliminar archivos ni documentación sin comprobar sus dependencias.
- Mantener la documentación actualizada con cada cambio estructural.

---

## 4. Antes de modificar

1. Revisar `AGENTS.md` (este archivo).
2. Revisar `README.md`.
3. Revisar la documentación relevante de `docs/`
   (`architecture/`, `development/`, `content/`, `strategy/`, `brand/`).
4. Revisar la arquitectura existente (cómo está resuelto un caso similar).
5. **No reemplazar una arquitectura existente sin justificarlo** por escrito
   en `docs/development/`.

---

## 5. Imágenes y vídeo

Respetar siempre la estructura de `public/`:

```
public/images/
├── hero/
├── services/{audiovisual, design, branding, content, web}
├── projects/
├── team/
└── general/
public/videos/{hero, projects, general}
public/brand/{logo, favicon, icons}
public/fonts
```

- **Los proyectos NO se organizan por servicio**: los recursos de un proyecto
  van en `images/projects/`.
- No duplicar imágenes: una ruta, un asset.
- Videos pesados **no se suben a Git** (CDN / almacenamiento externo / URL
  externa; los modelos ya aceptan URLs).
- Detalle: `docs/content/media-organization.md`.

---

## 6. Proyectos

- Los proyectos son **entidades independientes** de los servicios.
- Un proyecto puede implicar varios servicios: `project.services: ServiceSlug[]`.
- Viven en `src/data/projects/`; rutas `/proyectos` y `/proyectos/[slug]`.
- No hardcodear proyectos ficticios como si fueran reales.
- El registro `example-project` es plantilla marcada con `isExample: true`;
  la interfaz lo etiqueta visiblemente.

---

## 7. Servicios (datos)

- Cada servicio: un archivo en `src/data/services/` + entrada en `index.ts`.
- Mismo `interface Service` para todos (ver `types.ts`).
- Rutas, menú, home y sitemap se generan desde los datos: **no duplicar listas**.
- Contenido pendiente: marcar `TODO: ...`.

### Contenido prohibido

Nunca inventar: clientes, testimonios, estadísticas, resultados, precios,
proyectos, fotografías, premios, cifras, años de experiencia ni información
comercial. Si falta información → **placeholder marcado**:

```
TODO: definir descripción definitiva del servicio.
```

---

## 8. Diseño (fase actual)

Esta fase es **arquitectura, no diseño**:

- No elegir estética definitiva ni colores corporativos inventados.
- No elegir tipografías definitivas.
- No añadir animaciones complejas ni efectos espectaculares.
- El orden de trabajo es: estrategia → sitemap → user flow → wireframes →
  identidad visual → diseño → animaciones → desarrollo final.

---

## 9. Código

- **TypeScript** en todo el proyecto (`strict`).
- Evitar `any` salvo razón documentada en el propio archivo.
- Componentes reutilizables y pequeños; `"use client"` solo cuando haya
  interactividad real.
- Nombres claros: componentes `PascalCase`, datos/archivos `kebab-case`,
  CSS Modules por carpeta.
- Tokens de estilo desde `src/styles/variables.css` (nada hardcodeado).
- Un solo `<h1>` por página; jerarquía semántica de encabezados.
- Elementos interactivos semánticos (`button`, `a`, `label`), nunca `div`
  con `onClick`.
- Editar contenido = editar `src/data/**`, nunca el componente.

---

## 10. Verificación obligatoria

Antes de dar por terminado un cambio:

```bash
npm run typecheck   # sin errores de TypeScript
npm run lint        # sin errores de ESLint
npm run build       # build de producción correcto
```

Comprobar además que las rutas afectadas responden y que no se rompe el
responsive básico.

---

## 11. Estructura rápida

```
src/
  app/         rutas (App Router), layout global, sitemap, robots
  components/  ui | layout | navigation | sections | cards | forms
  data/        services | projects | testimonials | navigation
  styles/      variables.css | globals.css | animations.css
  utils/       seo | validation | media
  config/      site.ts (nombre, descripción, URL base)
public/        brand | images | videos | fonts
docs/          brand | strategy | architecture | content | development
```

Devuelve siempre a esta estructura; si algo no encaja, proponer el cambio en la
documentación antes de implementarlo.
