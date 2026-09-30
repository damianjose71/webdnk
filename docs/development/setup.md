# Guía de instalación y desarrollo

## Requisitos

- **Node.js ≥ 20** (recomendado: versión LTS actual, probado con Node 24).
- **npm ≥ 10**.
- Git.

> Nota: en la máquina donde se generó esta base no había Node instalado; se usó
> una distribución portable de Node 24 LTS para verificar la compilación.

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd dnk-web
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre <http://localhost:3000>.

## Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo (Turbopack). |
| `npm run build` | Build de producción (`next build`). |
| `npm run start` | Sirve el build de producción. |
| `npm run lint` | ESLint sobre todo el repositorio. |
| `npm run typecheck` | Comprobación de tipos sin emitir (`tsc --noEmit`). |

## Variables de entorno

1. Copia `.env.example` a `.env.local`.
2. Rellena `NEXT_PUBLIC_SITE_URL` con la URL definitiva (necesaria para
   canonical, Open Graph, sitemap y robots.txt).
3. `.env.local` está excluido de Git: nunca subas secretos.

Hoy el proyecto funciona sin variables de entorno (en desarrollo usa
`http://localhost:3000` como URL base).

## Verificación antes de entregar cambios

```bash
npm run typecheck
npm run lint
npm run build
```

Los tres deben pasar sin errores. En CI lo mismo se ejecuta en
`.github/workflows/ci.yml`.

## Estructura rápida

```
public/   recursos estáticos (brand, images, videos, fonts)
src/
  app/        rutas (App Router) + layout global + sitemap/robots
  components/ componentes (ui, layout, navigation, sections, cards, forms)
  data/       contenido: services, projects, testimonials, navigation
  styles/     variables, globals, animations
  utils/      seo, validation, media
  config/     configuración del sitio
docs/     documentación (brand, strategy, architecture, content, development)
AGENTS.md instrucciones para agentes de OpenCode
```

Detalle completo en `README.md` y `docs/architecture/`.
