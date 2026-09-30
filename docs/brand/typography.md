# Tipografía

> **Estado: PENDIENTE — no existe tipografía oficial de DNK.**

## Stack actual (placeholder)

En `src/styles/variables.css`:

- `--font-sans`: pila de sistema (interfaz, texto corrido).
- `--font-display`: hoy apunta a la misma pila; reservada para titulares.
- `--font-mono`: monoespaciada (código).

Ventaja de la pila de sistema: cero descargas, buen rendimiento.
Inconveniente: no aporta personalidad de marca.

## Escala actual (fluida, `clamp()`)

| Token | Rango |
| --- | --- |
| `--text-xs` … `--text-3xl` | de ~0.75rem a ~3.5rem |
| `--leading-tight` / `--leading-normal` | 1.15 / 1.6 |
| `--weight-regular` / `--medium` / `--bold` | 400 / 500 / 700 |

Los títulos usan `--text-3xl`…`--text-lg` y escalan con la ventana, lo que ya
cubre móvil → pantalla grande sin necesidad de breakpoints adicionales.

## Qué definir

- [ ] Tipografía de titulares (¿familia propia o web font?).
- [ ] Tipografía de texto.
- [ ] Pesos a contratar/licenciar (licencia de uso web: revisar).
- [ ] Escala definitiva y jerarquía (h1–h4, cuerpo, etiquetas).
- [ ] Carga de fuentes: self-hosted en `public/fonts/` (recomendado por
      rendimiento y privacidad) con `font-display: swap`.

## Reglas

1. Máximo 2 familias (titulares + texto) salvo decisión justificada.
2. Tamaños desde tokens; prohibido fijar px en componentes.
3. Medida de lectura: 45–75 caracteres por línea.
4. Si se añaden web fonts: declarar `preload` y `swap`, y medir impacto en
   Core Web Vitals.
