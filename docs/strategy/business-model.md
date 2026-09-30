# Modelo de negocio

> **Estado: pendiente.** No se han inventado precios, márgenes ni cifras.
> Solo se registra lo necesario para orientar la web.

## Conocido

- DNK vende servicios profesionales en cinco áreas (audiovisual, diseño,
  branding, contenido, web).
- Evolución de productora audiovisual a agencia creativa integral.
- No se dispone de información sobre precios, paquetes, forma de facturación
  ni contratación.

## Decisiones que afectan a la web (por definir)

| Decisión | Impacto | Estado |
| --- | --- | --- |
| ¿Publicar precios o rangos? | Página de servicios, FAQ | Pendiente |
| ¿Presupuesto a medida o packs? | CTA, formulario de contacto | Pendiente |
| ¿Suscripciones/recurrente (contenido, gestión)? | Estructura de servicios | Pendiente |
| Zona geográfica / idiomas | Localización, SEO local | Pendiente (solo español hoy) |
| Ciclo de venta | Necesidad de nurturing (blog, casos) | Pendiente |

## Implicaciones inmediatas para el formulario

`ContactForm` pide nombre, correo y mensaje: suficiente para un primer
contacto sin preguntar presupuesto (decisión reversible). Cuando se defina el
proceso comercial, valorar añadir:

- servicio de interés (select desde `src/data/services`),
- presupuesto estimado (opcional),
- plazo.

Conectar siempre con proveedor de envío + antispam + RGPD (ver
`.env.example` y `docs/development/roadmap.md`).

## Reglas

- No publicar precios inventados.
- No publicar datos de facturación, clientes ni contratos sin autorización.
