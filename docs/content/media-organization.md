# Organización de imágenes y vídeo

Fuente única de verdad para colocar recursos en `public/`.

## `public/images/`

### `hero/`

Imágenes de las secciones hero/principales de cada página (portada,
`/servicios`, `/nosotros`...). Una por página como máximo. Deben aguantar
texto encima: amplias, con espacio negativo y peso controlado.

### `services/`

Recursos visuales que representan a cada servicio. **Solo material
representativo del servicio en sí** (no de proyectos concretos).

#### `services/audiovisual/`
Producción audiovisual y fotografía: vídeo, cámaras, grabación, iluminación,
sonido, equipo, rodaje, postproducción.

#### `services/design/`
Diseño gráfico: piezas publicitarias, material para redes sociales, piezas
impresas, composición, ilustración gráfica.

#### `services/branding/`
Identidad visual: logotipos (de clientes), manuales de marca, aplicaciones de
marca, papelería, mockups de identidad.

#### `services/content/`
Creación y estrategia de contenido: redes sociales, comunicación digital,
planificación editorial, sesiones de contenido.

#### `services/web/`
Desarrollo web: interfaces, landing pages, sitios corporativos, capturas de
pantalla, dispositivos, UI.

> Los recursos de marca propios de DNK (logo, isotipo) **no** van aquí: van en
> `public/brand/`.

### `projects/`

Recursos de proyectos reales de clientes.

**Importante:** los proyectos NO se organizan por servicio, porque un mismo
proyecto puede incluir varios servicios (ejemplo: audiovisual + branding +
web). Aquí va todo lo que pertenezca a ese proyecto, identificado por nombre
de proyecto: `proyecto-x/portada.webp`, `proyecto-x/01.webp`, ...

Los datos del proyecto referencian estas rutas
(`coverImage`, `gallery[]`, `videos[]`).

### `team/`

Fotografías de los integrantes de DNK (para `/nosotros`).

### `general/`

Recursos visuales que no encajan en ninguna categoría anterior (texturas,
fondos, imágenes de acompañamiento de blog, etc.).

## `public/videos/`

```
public/videos/
├── hero/       loops o vídeos de portada
├── projects/   vídeos de proyectos (incluidos en gallery de datos)
└── general/    cualquier otro
```

- Vídeos pesados **no se suben a Git**; usar CDN, almacenamiento externo,
  servicio de vídeo o URLs externas (los modelos de datos ya aceptan URLs).
  Detalle en `docs/architecture/media-architecture.md`.

## Otras carpetas

- `public/brand/logo/` — logotipo, variantes, isotipo, versiones (horizontal,
  vertical, monocromo).
- `public/brand/favicon/` — favicons y metadatos de navegador.
- `public/brand/icons/` — iconografía de marca.
- `public/fonts/` — tipografías web cuando se definan.
- `.gitkeep` — marca carpetas vacías para que Git las conserve.

## Reglas de denominación

- `kebab-case`, sin espacios, sin tildes ni ñ: `retrato-director-01.webp`.
- Prefijo o carpeta por proyecto cuando aplique.
- Versiones: sufijo `-v2`, nunca "final", "final2", "ultimo".

## Reglas de publicación

1. Optimizar antes de subir (WebP/AVIF; PNG solo si necesita transparencia).
2. Prohibido subir RAW, PSD/XD/AI pesados o másters de vídeo.
3. Toda imagen publicada necesita `alt` descriptivo en los datos/componentes.
4. No duplicar: si una imagen sirve en dos sitios, referenciar la misma ruta.
