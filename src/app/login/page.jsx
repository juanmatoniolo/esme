"use client";

import { useEffect, useState } from "react";
import styles from "./login.module.css";

const ENV_USER = process.env.NEXT_PUBLIC_USER ?? "";
const ENV_PASS = process.env.NEXT_PUBLIC_PASS ?? "";

export default function LoginPage() {
    const [pending, setPending] = useState(false);
    const [msg, setMsg] = useState("");

    // Si ya está logueado, ir directo al /adm
    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("adm_auth") === "1") {
            window.location.replace("/adm");
        }
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        setMsg("");
        setPending(true);

        try {
            const fd = new FormData(e.currentTarget);
            const user = String(fd.get("user") || "").trim();
            const pass = String(fd.get("pass") || "").trim();

            if (!user || !pass) {
                setMsg("Completá usuario y contraseña");
                setPending(false);
                return;
            }

            if (user === ENV_USER && pass === ENV_PASS) {
                // Sesión en cliente (baja seguridad, como pediste)
                localStorage.setItem("adm_auth", "1");
                localStorage.setItem("adm_user", user);

                // Fuerza navegación sí o sí, sin query params
                window.location.assign("/adm");
                return;
            }

            setMsg("Credenciales inválidas");
            setPending(false);
        } catch {
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