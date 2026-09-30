/**
 * Validaciones mínimas del formulario de contacto.
 * Sin dependencias externas: si se necesita un esquema de
 * validación más robusto, evaluarlo entonces (ver
 * docs/development/technology-decisions.md).
 */

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
  // Comprobación deliberadamente simple y compatible.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/** Valida el formulario completo y devuelve los errores por campo. */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!isRequired(values.name)) {
    errors.name = "Indica tu nombre.";
  }

  if (!isRequired(values.email)) {
    errors.email = "Indica tu correo electrónico.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Introduce un correo electrónico válido.";
  }

  if (!isRequired(values.message)) {
    errors.message = "Escribe un mensaje.";
  }

  return errors;
}
