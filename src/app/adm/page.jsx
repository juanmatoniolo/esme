"use client";

import { useEffect, useState } from "react";
import { FiMail, FiTrash2, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Mensajes.module.css";

const RTDB_BASE = process.env.NEXT_PUBLIC_RTDB_BASE;

export default function MensajesPage() {
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [deleteId, setDeleteId] = useState(null); // 👈 ID en espera de confirmación

    // Traer mensajes
    async function fetchMensajes() {
        setLoading(true);
        try {
            const res = await fetch(`${RTDB_BASE}/contacts.json`);
            const data = await res.json();
            if (!data) {
                setMensajes([]);
            } else {
                const arr = Object.entries(data).map(([id, msg]) => ({
                    id,
                    mensajeLeido: msg.mensajeLeido ?? false,
                    ...msg,
                }));
                arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setMensajes(arr);
            }
        } catch (err) {
            console.error("Error al cargar mensajes", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMensajes();
    }, []);

    // Marcar como leído
    async function markAsRead(id) {
        await fetch(`${RTDB_BASE}/contacts/${id}.json`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mensajeLeido: true }),
        });
        fetchMensajes();
    }

    // Eliminar mensaje confirmado
    async function confirmDelete() {
        if (!deleteId) return;
        await fetch(`${RTDB_BASE}/contacts/${deleteId}.json`, { method: "DELETE" });
        setDeleteId(null);
        fetchMensajes();
    }

    // Filtrar mensajes
    const filteredMensajes = mensajes.filter((m) => {
        if (filter === "unread") return !m.mensajeLeido;
        if (filter === "read") return m.mensajeLeido;
        return true;
    });

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Mensajes recibidos</h1>

            <div className={styles.filters}>
                <button
                    className={filter === "all" ? styles.active : ""}
                    onClick={() => setFilter("all")}
                >
                    Todos
                </button>
                <button
                    className={filter === "unread" ? styles.active : ""}
                    onClick={() => setFilter("unread")}
                >
                    No leídos
                </button>
                <button
                    className={filter === "read" ? styles.active : ""}
                    onClick={() => setFilter("read")}
                >
                    Leídos
                </button>
            </div>

            {loading ? (
                <p>Cargando mensajes…</p>
            ) : filteredMensajes.length === 0 ? (
                <p>No hay mensajes.</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Mensaje</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMensajes.map((msg) => (
                            <tr key={msg.id}>
                                <td data-label="Fecha">
                                    {new Date(msg.createdAt).toLocaleString()}
                                </td>
                                <td data-label="Nombre">{msg.name}</td>
                                <td data-label="Email">{msg.email}</td>
                                <td data-label="Teléfono">{msg.phone || "-"}</td>
                                <td data-label="Mensaje">{msg.message}</td>
                                <td data-label="Estado">
                                    {msg.mensajeLeido ? (
                                        <span className={styles.read}>Leído</span>
                                    ) : (
                                        <span className={styles.unread}>No leído</span>
                                    )}
                                </td>
                                <td className={styles.actionsCell}>
                                    {!msg.mensajeLeido && (
                                        <button
                                            className={`${styles.iconBtn} ${styles.btnMark}`}
                                            onClick={() => markAsRead(msg.id)}
                                            title="Marcar como leído"
                                        >
                                            <FiCheckCircle />
                                        </button>
                                    )}

                                    {msg.email && (
                                        <a
                                            href={`mailto:${msg.email}?subject=Respuesta a tu consulta&body=Hola ${msg.name},`}
                                            className={`${styles.iconBtn} ${styles.btnMail}`}
                                            title="Responder por Email"
                                        >
                                            <FiMail />
                                        </a>
                                    )}
                                    {msg.phone && (
                                        <a
                                            href={`https://wa.me/${msg.phone.replace(
                                                /\D/g,
                                                ""
                                            )}?text=${encodeURIComponent(
                                                `Hola ${msg.name}, gracias por tu consulta ✨`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.iconBtn} ${styles.btnWhatsapp}`}
                                            title="Responder por WhatsApp"
                                        >
                                            <FaWhatsapp />
                                        </a>
                                    )}

                                    <button
                                        className={`${styles.iconBtn} ${styles.btnDanger}`}
                                        onClick={() => setDeleteId(msg.id)}
                                        title="Eliminar"
                                    >
                                        <FiTrash2 />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Confirmación personalizada */}
            {deleteId && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmBox}>
                        <p>¿Seguro que querés eliminar este mensaje?</p>
                        <div className={styles.confirmActions}>
                            <button
                                className={`${styles.btnSmall} ${styles.btnDanger}`}
                                onClick={confirmDelete}
                            >
                                Sí, eliminar
                            </button>
                            <button
                                className={`${styles.btnSmall}`}
                                onClick={() => setDeleteId(null)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
