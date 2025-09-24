"use client";

import { useEffect, useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
    const [pending, setPending] = useState(false);
    const [msg, setMsg] = useState("");

    async function onSubmit(e) {
        e.preventDefault();
        setMsg("");
        setPending(true);

        const fd = new FormData(e.currentTarget);
        const user = String(fd.get("user") || "").trim();
        const pass = String(fd.get("pass") || "").trim();

        if (!user || !pass) {
            setMsg("Completá usuario y contraseña");
            setPending(false);
            return;
        }

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user, pass }),
            });

            if (res.ok) {
                window.location.assign("/adm");
            } else {
                setMsg("Credenciales inválidas");
                setPending(false);
            }
        } catch (err) {
            console.error(err);
            setMsg("Ocurrió un error. Intentá nuevamente.");
            setPending(false);
        }
    }

    return (
        <main className={styles.page}>
            <form onSubmit={onSubmit} className={styles.card}>
                <h1 className={styles.title}>Acceder al panel</h1>
                <p className={styles.subtitle}>Ingresá tus credenciales para continuar.</p>

                <label className={styles.label}>Usuario</label>
                <input name="user" className={styles.input} required />

                <label className={styles.label} style={{ marginTop: 10 }}>Contraseña</label>
                <input name="pass" type="password" className={styles.input} required />

                {msg && <div className={styles.alert}>{msg}</div>}

                <button type="submit" disabled={pending} className={styles.button}>
                    {pending ? "Ingresando..." : "Ingresar"}
                </button>
            </form>
        </main>
    );
}
