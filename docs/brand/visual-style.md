# Estilo visual

> **Estado: PENDIENTE.** Sin dirección artística definida todavía.

## Qué define este documento

Cuando se defina el estilo, quedará registrado aquí:

- **Fotografía**: tratamiento, tono, encuadre, uso de imagen real vs.
  abstracta.
- **Ilustración y gráfica**: ¿hay? qué estilo.
- **Iconografía**: set propio o de librería; grosor y estilo.
- **Composición**: retícula, densidad, uso del espacio en blanco.
- **Superficies**: bordes, sombras, esquinas (hoy: tokens placeholder en
  `variables.css`).
- **Movimiento**: intención de las animaciones, velocidad, cuándo aplicarlas.

## Estado actual del sistema visual

- Sistema de tokens listo (`src/styles/variables.css`) para cambiar la
  estética completa sin tocar componentes.
- Componentes con estilos neutros y genéricos (tarjetas con borde, botones
  rectos, fondos alternos) — deliberadamente **sin acabado distintivo**.
- Animaciones: solo clases base en `src/styles/animations.css`; ninguna
  animación compleja en esta fase.

## Decisiones pendientes

- [ ] Dirección artística (minimalista / editorial / oscuro / expresivo…).
- [ ] Tratamiento de imagen de marca.
- [ ] Iconografía definitiva (hoy hay un set placeholder en `Icon.tsx`).
- [ ] Nivel de animación permitido en la v1 (recomendación: sutil).

## Regla

No se elige estética definitiva en esta fase: primero estrategia, sitemap,
user flow, wireframes y esta guía de marca; después diseño y movimiento.
