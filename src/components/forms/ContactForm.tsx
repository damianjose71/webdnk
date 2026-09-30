"use client";

import { useState, type FormEvent } from "react";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/utils/validation";
import styles from "./forms.module.css";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

/**
 * Formulario de contacto.
 *
 * Estado actual:
 * - Validación de cliente (campos obligatorios + formato email).
 * - Labels asociados, errores con aria-describedby y role="alert".
 * - NO conectado a ningún servicio externo (decisión pendiente:
 *   proveedor de envío, anti-spam, RGPD). Ver .env.example y
 *   docs/development/roadmap.md.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }

    // TODO: conectar con el proveedor de envío elegido.
    setStatus(
      "Formulario validado, pero todavía no está conectado a ningún servicio de envío.",
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={styles.input}
          value={values.name}
          onChange={handleChange}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-error" className={styles.error} role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Correo electrónico
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={styles.input}
          value={values.email}
          onChange={handleChange}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-error" className={styles.error} role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          className={styles.textarea}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className={styles.error} role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className={styles.submit}>
        Enviar mensaje
      </button>

      {status ? (
        <p className={styles.status} role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
