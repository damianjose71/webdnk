# Color

> **Estado: PENDIENTE — no existe paleta oficial de DNK.**
> Los colores actuales son **temporales**, usados solo para que el sistema
> visual funcione mientras se define la identidad.

## Token actual (placeholder)

Definidos en `src/styles/variables.css`:

| Token | Valor temporal | Uso |
| --- | --- | --- |
| `--color-primary` | `#1a1a2e` | Botones principales, marca |
| `--color-accent` | `#d1244a` | Acentos, hover, foco |
| `--color-text` | `#16161d` | Texto principal |
| `--color-text-muted` | `#5c5c6b` | Texto secundario |
| `--color-border` | `#dcdce3` | Bordes |
| `--color-surface` / `--color-surface-alt` | `#ffffff` / `#f5f5f8` | Fondos |
| `--color-success` / `--color-error` | verde / rojo | Estados de formulario |

> Estos valores **NO** son la identidad de DNK. Sustituirlos todos cuando
> exista la paleta oficial, editando únicamente `variables.css`.

## Qué definir

- [ ] Color primario de marca.
- [ ] Color de acento.
- [ ] Escala de neutros (fondos, texto, bordes).
- [ ] Estados: éxito, error, advertencia.
- [ ] Modo oscuro: ¿sí/no? (los tokens ya permiten añadirlo luego).
- [ ] Contraste mínimo AA (4.5:1 en texto, 3:1 en texto grande y controles).

## Reglas de uso

1. Todo color se consume desde `variables.css`; prohibido hardcodear
   valores hexadecimales en componentes.
2. Verificar contraste antes de aprobar cualquier combinación.
3. El color nunca es el único indicador de estado (acompañar con texto/icono).
