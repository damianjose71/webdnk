# CHANGELOG

Las notas de versión siguen [Keep a Changelog](https://keepachangelog.com/).
Los cambios se agrupan en: `Added`, `Changed`, `Fixed`, `Removed`, `Security`.

## [0.1.0] — Configuración inicial

### Added

- Estructura inicial del proyecto.
- Arquitectura de componentes.
- Sistema inicial de servicios.
- Sistema inicial de proyectos.
- Sistema de navegación.
- Documentación.
- Organización de recursos multimedia.

### Detalle

- Base Next.js 16 (App Router) + React 19 + TypeScript 6 (strict) + ESLint 9.
- Carpetas de recursos: `public/brand`, `public/images` (hero, services/*,
  projects, team, general), `public/videos`, `public/fonts`.
- Componentes: `ui` (Container, Button, Heading, Badge, Icon, Image, Video),
  `layout` (MainLayout, Header, Footer, PageContainer),
  `navigation` (Navbar, NavLinks, MobileMenu),
  `sections` (Hero, About, Services, FeaturedProjects, Process, Testimonials,
  CTA, Contact), `cards` (ServiceCard, ProjectCard, TestimonialCard),
  `forms` (ContactForm).
- Datos independientes: 5 servicios, proyectos (con `example-project`),
  testimonios, navegación centralizada.
- Rutas: `/`, `/servicios` + 5 detalle, `/proyectos` + `[slug]`, `/nosotros`,
  `/contacto`, 404.
- SEO base: metadata por página, `sitemap.xml`, `robots.txt`, Open Graph /
  Twitter cards, canonical configurable.
- Estilos: tokens globales (`variables.css`), base (`globals.css`),
  arquitectura de animaciones (`animations.css`), CSS Modules por carpeta.
- Accesibilidad: HTML semántico, skip link, `aria-current`, labels y
  errores de formulario, focus visible, `prefers-reduced-motion`.
- Responsive desde la base (breakpoints 480/768/1024/1280/1536).
- Documentación en `docs/` (brand, strategy, architecture, content,
  development), `AGENTS.md`, `README.md`.
- Configuración: `opencode.json`, `.env.example`, `.gitignore`, CI en
  `.github/workflows/ci.yml`.
