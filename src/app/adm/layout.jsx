"use client";

import { useRouter } from "next/navigation";
import styles from "./AdmLayout.module.css";

export default function AdmLayout({ children }) {
    const router = useRouter();

    function logout() {
        localStorage.removeItem("adm_auth");
        localStorage.removeItem("adm_user");
        router.replace("/login");
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
