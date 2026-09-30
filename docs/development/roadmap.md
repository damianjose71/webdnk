# Roadmap

Orden previsto (heredado de la estrategia de fases del proyecto):

1. **Estrategia** — posicionamiento, audiencia, propuesta de valor
   (`docs/strategy/`).
2. **Sitemap y user flow** — `docs/architecture/sitemap.md`,
   `user-flow.md`.
3. **Wireframes** — estructura de páginas antes del estilo.
4. **Identidad visual** — color, tipografía, logo (`docs/brand/`).
5. **Diseño** — acabado visual por sección.
6. **Animaciones** — con moderación (`src/styles/animations.css` ya preparado).
7. **Desarrollo final** — páginas y secciones definitivas.
8. **Contenido real** — textos, proyectos, testimonios, SEO.
9. **Despliegue** — `docs/development/deployment.md`.

## Base ya construida (v0.1.0)

- [x] Estructura de carpetas y configuración del proyecto.
- [x] Arquitectura de componentes (ui, layout, navigation, sections, cards, forms).
- [x] Sistema de servicios (5 servicios, rutas dinámicas).
- [x] Sistema de proyectos (entidades independientes, ruta dinámica).
- [x] Sistema de testimonios y navegación centralizada.
- [x] SEO base: metadata por página, sitemap.xml, robots.txt.
- [x] Accesibilidad base: HTML semántico, skip link, labels, focus visible.
- [x] Responsive base: móvil/tablet/desktop con tokens y breakpoints.
- [x] Documentación (`docs/`, `AGENTS.md`, `README.md`, `CHANGELOG.md`).

## Pendiente inmediato (bloquea el diseño)

- [ ] Definir identidad visual (color/tipografía/logo).
- [ ] Definir copy real de portada y servicios.
- [ ] Decidir qué enlaces aparecen en el navbar final.
- [ ] Definir el proceso de trabajo por fases (sección Process).

## Pendiente funcional

- [ ] Conectar `ContactForm` a un proveedor de envío (+ antispam + RGPD).
- [ ] Páginas legales: aviso legal, privacidad, cookies.
- [ ] Proyectos y testimonios reales.
- [ ] Imágenes y vídeos reales (optimizados, `srcset`, `loading`).
- [ ] Datos estructurados JSON-LD (Organization, Service, BreadcrumbList).
- [ ] Analítica (decisión de privacidad pendiente).
- [ ] Evaluar CDN/almacenamiento externo cuando los medios pesen.
- [ ] Evaluar CMS si hace falta edición por no-técnicos.
- [ ] Evaluar animaciones/interacciones (sin librerías aún: CSS primero).

## Criterios de calidad en cada entrega

- `npm run typecheck`, `npm run lint` y `npm run build` en verde.
- Sin contenido inventado; TODOs marcados.
- Responsive verificado (≈360px, 768px, 1280px, 1536px).
- Navegación por teclado y foco visibles.
