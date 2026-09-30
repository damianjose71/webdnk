# Textos del sitio (website copy)

> **Estado: plantilla, sin contenido definitivo.**
> Regla del proyecto: no inventar información de DNK. Todo lo pendiente se
> marca con `TODO:` y se redacta aquí antes de volcarlo a los datos.

## Próximo paso

1. Redactar los textos en este documento (revisión humana).
2. Copiarlos a los archivos de datos (`src/data/**`).
3. Revisar extensión SEO (`docs/content/seo.md`).

## Portada `/`

| Bloque | Estado | Texto |
| --- | --- | --- |
| H1 | TODO | TODO: definir titular principal de DNK. |
| Subtítulo | TODO | TODO: definir la propuesta de valor en una frase. |
| CTA principal | TODO | TODO: definir llamada a la acción (probable: contacto/presupuesto). |
| CTA secundario | TODO | TODO: definir (probable: ver proyectos o servicios). |
| Nosotros (resumen) | TODO | TODO: párrafo de presentación de DNK como agencia creativa integral. |
| Servicios | datos | Se genera desde `src/data/services` (cortas aún con TODO). |
| Proyectos destacados | datos | Requiere proyectos reales con `featured: true`. |
| Proceso | TODO | TODO: definir fases de trabajo reales. |
| Testimonios | datos | Requiere testimonios reales autorizados. |
| CTA final | TODO | TODO: definir copy del CTA. |

## `/servicios`

| Bloque | Estado | Texto |
| --- | --- | --- |
| H1 + introducción | TODO | TODO: texto que presente las cinco áreas. |
| Tarjetas | datos | `shortDescription` de cada servicio (pendiente). |

## `/nosotros`

| Bloque | Estado | Texto |
| --- | --- | --- |
| H1 | TODO | TODO |
| Historia / evolución | TODO | TODO: de productora audiovisual a agencia creativa integral (hecho conocido, redacción pendiente). |
| Equipo | TODO | TODO: nombres y roles reales + `public/images/team`. |
| Valores / forma de trabajo | TODO | TODO |

## `/contacto`

| Bloque | Estado | Texto |
| --- | --- | --- |
| Datos de contacto | TODO | TODO: correo, teléfono, dirección, redes. |
| Texto de acompañamiento | TODO | TODO |
| Formulario | implementado | Nombre, correo, mensaje (sin envío conectado). |

## `/proyectos`

| Bloque | Estado | Texto |
| --- | --- | --- |
| Introducción | TODO | TODO |
| Listado | datos | Requiere proyectos reales. |

## Fichas de detalle

- **Servicio** (`src/data/services/*.ts`): `shortDescription`, `description`,
  `services[]`, `benefits[]`, `process[]`.
- **Proyecto** (`src/data/projects/*`): `client`, `title`, `description`,
  `year`.
- **Testimonio** (`src/data/testimonials/*`): nombre, empresa, cargo,
  contenido — solo reales y autorizados.

## Estilo (borrador, a validar)

- Tuteo o trato: **por decidir**.
- Tono: profesional y directo; sin exageraciones ni promesas sin base.
- Prohibido: cifras, premios, años de experiencia, clientes o resultados que
  no estén documentados.
- Textos cortos por bloque; párrafos de 2–4 líneas.

## Pendiente

- [ ] Definir tratamiento (tú/usted) y tono.
- [ ] Textos definitivos de home.
- [ ] Textos de las cinco fichas de servicio.
- [ ] Texto de `/nosotros`.
- [ ] Proyectos y testimonios reales.
- [ ] Textos legales (aviso legal, privacidad, cookies).
