# User flow

> **Estado: flujo base, pendiente de validar con wireframes.**
> No contiene decisiones visuales.

## Flujo principal esperado

```
Entrada (orgánica / redes / directo)
        │
        ▼
     HOME (/)
   ¿Qué hace DNK? → Servicios → Proyectos → Confianza → Contacto
        │
        ├─▶ /servicios ──▶ /servicios/[slug] ──▶ /proyectos relacionados
        │                        │
        │                        └─▶ /contacto
        ├─▶ /proyectos ──▶ /proyectos/[slug]
        │                        │
        │                        └─▶ servicios implicados ──▶ /contacto
        ├─▶ /nosotros
        └─▶ /contacto (conversión)
```

## Intenciones del visitante

1. **"¿Qué hacen?"** → home + `/servicios`.
2. **"¿Han hecho algo como lo mío?"** → `/proyectos` → ficha de proyecto →
   servicios implicados.
3. **"¿Quiénes son?"** → `/nosotros`.
4. **"Quiero presupuesto"** → `/contacto`.

## Puntos de conversión previstos

- CTA en el hero → servicios o contacto.
- CTA al final de cada página → `/contacto`.
- CTA en fichas de servicio y de proyecto.

## Recorridos de detalle (borrador para wireframes)

### Servicio
`/servicios` → tarjeta del servicio → `/servicios/[slug]` →
(sección "Qué incluye" → "Beneficios" → "Proceso" → "Proyectos relacionados"
→ servicios hermanos) → `/contacto`.

### Proyecto
`/proyectos` → tarjeta → `/proyectos/[slug]` →
(ficha + galería + servicios implicados) → `/servicios/<relacionado>` o
`/contacto`.

## Navegación

- Header: `src/data/navigation/index.ts` (fuente única).
- Desktop: enlaces horizontales; "Servicios" con desplegable CSS.
- Móvil (<768px): botón de menú + panel a pantalla completa con sublista.
- Pie: reutiliza los enlaces principales.

**Decisión pendiente**: si los 5 servicios se muestran en el desplegable
desktop o solo en `/servicios`. La estructura lo permite en ambos casos.

## Accesibilidad del flujo

- Skip link "Saltar al contenido principal" en todas las páginas.
- `aria-current="page"` en el enlace activo.
- Menú móvil con `aria-expanded` / `aria-controls`.
- Orden de tabulación = orden visual.

## Pendiente

- [ ] Definir CTA definitivos por página.
- [ ] Validar profundidad de menú (¿desplegable o mega-menú?).
- [ ] Definir recorrido de presupuesto (¿formulario multi-paso?).
- [ ] Breadcrumbs visibles en móviles (hoy solo en fichas de detalle).
