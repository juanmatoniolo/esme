"use client";

import { useRouter } from "next/navigation";
import styles from "./AdmLayout.module.css";

export default function AdmLayout({ children }) {
    const router = useRouter();

    async function logout() {
        try {
            // 🔄 Llamada al API logout
            const res = await fetch("/api/logout", { method: "POST" });

            if (res.ok) {
                // 🧹 (opcional) Limpieza vieja, si todavía usabas localStorage
                localStorage.removeItem("adm_auth");
                localStorage.removeItem("adm_user");

                // 🚀 Redirección segura
                router.replace("/login");
            } else {
                alert("Error al cerrar sesión.");
            }
        } catch (err) {
            console.error("Logout error:", err);
            alert("Ocurrió un error al cerrar sesión.");
        }
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.brand}>Esme</div>
                <ul className={styles.navLinks}>
                    <li>
                        <button onClick={logout} className={styles.logout}>
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </nav>

            <main className={styles.main}>{children}</main>
        </div>
    );
}
