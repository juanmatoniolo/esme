"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact } from "./actions";
import styles from "./Contact.module.css";

const initialState = { ok: false, message: "", issues: {} };

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className={styles.submit}
            disabled={pending}
            aria-busy={pending ? "true" : "false"}
        >
            {pending ? <span className={styles.spinner} aria-hidden="true" /> : null}
            {pending ? "Enviando..." : "Enviar mensaje"}
        </button>
    );
}

function FieldError({ id, error }) {
    if (!error) return null;
    return (
        <span id={id} className={styles.fieldError} role="alert">
            {error}
        </span>
    );
}

function Toast({ show, text, onClose }) {
    useEffect(() => {
        if (!show) return;
        const t = setTimeout(onClose, 4000);
        return () => clearTimeout(t);
    }, [show, onClose]);

    return (
        <div
            className={`${styles.toast} ${show ? styles.toastShow : ""}`}
            role="status"
            aria-live="polite"
        >
            {text}
        </div>
    );
}

export default function ContactFormClient({ whatsappHref }) {
    const formRef = useRef(null);
    const [state, formAction] = useActionState(sendContact, initialState);
    const [toastOpen, setToastOpen] = useState(false);

    useEffect(() => {
        if (state?.ok) {
            formRef.current?.reset();
            setToastOpen(true);
        }
    }, [state?.ok]);

    return (
        <>
            {state?.message ? (
                <div
                    className={state.ok ? styles.alertSuccess : styles.alertError}
                    role={state.ok ? "status" : "alert"}
                    aria-live={state.ok ? "polite" : "assertive"}
                >
                    {state.message}
                </div>
            ) : null}

            <form ref={formRef} action={formAction} className={styles.form} noValidate>
                {/* Honeypot anti-bots */}
                <input
                    type="text"
                    name="company"
                    className={styles.honey}
                    tabIndex={-1}
                    autoComplete="off"
                />

                <div className={styles.field}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        className={styles.control}
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        aria-invalid={state?.issues?.name ? "true" : "false"}
                        aria-describedby={state?.issues?.name ? "err-name" : undefined}
                        required
                    />
                    <FieldError id="err-name" error={state?.issues?.name} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        className={styles.control}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tunombre@mail.com"
                        aria-invalid={state?.issues?.email ? "true" : "false"}
                        aria-describedby={state?.issues?.email ? "err-email" : undefined}
                        required
                    />
                    <FieldError id="err-email" error={state?.issues?.email} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="phone">Teléfono (opcional)</label>
                    <input
                        className={styles.control}
                        id="phone"
                        name="phone"
                        placeholder="Ej: (0341) 1234567"
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        className={styles.control}
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Contame brevemente tu consulta"
                        aria-invalid={state?.issues?.message ? "true" : "false"}
                        aria-describedby={state?.issues?.message ? "err-message" : undefined}
                        required
                    />
                    <FieldError id="err-message" error={state?.issues?.message} />
                </div>

                <div className={styles.actions}>
                    <SubmitButton />
                </div>

                <p className={styles.disclaimer}>
                    Al enviar aceptás ser contactad@ por los medios provistos. Podés solicitar la
                    eliminación de tus datos cuando quieras.
                </p>
            </form>

            <Toast
                show={toastOpen}
                text="¡Gracias! Recibimos tu consulta ✨"
                onClose={() => setToastOpen(false)}
            />
        </>
    );
}
