# Arquitectura de medios (imágenes y vídeo)

## Estructura

```
public/
├── brand/        logo, favicon, iconos de marca
├── fonts/        tipografías web (cuando se definan)
├── images/
│   ├── hero/
│   ├── services/{audiovisual, design, branding, content, web}
│   ├── projects/
│   ├── team/
│   └── general/
└── videos/
    ├── hero/
    ├── projects/
    └── general/
```

La lógica de cada carpeta está explicada en
`docs/content/media-organization.md`.

## Principios

1. **Un asset, una ubicación.** No duplicar imágenes entre carpetas; si hace
   falta reutilizar, referenciar la misma ruta.
2. **Los proyectos no se organizan por servicio.** Un proyecto puede tocar
   varios servicios: sus recursos van en `images/projects/`.
3. **Referencias por ruta** en los datos (`/images/...`) o **URL externa**
   (`https://cdn...`). `src/utils/media.ts` distingue rutas reales de
   placeholders para no renderizar imágenes rotas.

## Imágenes

- Envolver siempre con `components/ui/Image` (`next/image`).
- Lazy loading por defecto; `priority` solo en hero/above-the-fold.
- `sizes` correcto según la rejilla (`100vw` en móvil, `33vw` en tarjetas).
- Formatos modernos AVIF/WebP habilitados en `next.config.ts`.
- Tamaño recomendado: ≤ 300 KB por imagen optimizada; origen ≥ 2000 px de ancho
  para hero, ~1200 px para tarjetas.
- Nombres: `kebab-case`, descriptivos, sin espacios
  (`proyecto-x-retrato-01.webp`).
- Todo asset necesita `alt` textual (o `alt=""` si es decorativo).

## Vídeo

- `<Video>` (`src/components/ui/Video.tsx`) con `preload="none"` en listados.
- Formato recomendado: MP4/H.264 + WebM como alternativa; 16:9; ≤ 1080p.
- **Los vídeos grandes NO se suben a Git** (ver `.gitignore` y más abajo).

### Estrategia para medios pesados (preparada, no implementada)

Cuando el peso lo exija, sustituir archivos locales por:

| Opción | Cuándo |
| --- | --- |
| **CDN** (`MEDIA_CDN_URL` en `.env.example`) | Muchos assets o audiencia distribuida. |
| **Almacenamiento externo** (S3/Backblaze/Dropbox público) | Vídeos grandes sin querer CDN completo. |
| **Servicio de vídeo** (Vimeo/Mux/YouTube embebido) | Vídeos de portfolio con streaming y control. |
| **URLs externas** en los datos (`project.videos[]`) | Ya soportado hoy: el modelo acepta URLs. |

Nada de esto requiere cambiar componentes: los modelos de datos ya aceptan
URLs externas.

## Reglas de Git

- Subir a Git: logos, favicon, iconos, imágenes optimizadas, fuentes.
- **No** subir: masters de vídeo, RAW, PSD/XD/AI pesados, temporales.
- Mantener `public/` por debajo de un tamaño razonable (objetivo: < 100 MB);
  si se supera, migrar medios a CDN/almacenamiento externo.
- Las carpetas vacías se conservan con `.gitkeep`.
