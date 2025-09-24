"use server";

const RTDB_BASE = "https://esme-2719d-default-rtdb.firebaseio.com";

export async function sendContact(prevState, formData) {
	const name = (formData.get("name") || "").trim();
	const email = (formData.get("email") || "").trim();
	const phone = (formData.get("phone") || "").trim();
	const message = (formData.get("message") || "").trim();
	const honey = formData.get("company") || "";

	const issues = {};
	if (honey)
		return { ok: true, message: "Gracias por tu mensaje", issues: {} };

	if (name.length < 2) issues.name = "Ingresá tu nombre.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
		issues.email = "Ingresá un email válido.";
	if (message.length < 10)
		issues.message =
			"Contanos brevemente tu consulta (mín. 10 caracteres).";

	if (Object.keys(issues).length > 0) {
		return { ok: false, issues, message: "Revisá los campos." };
	}

	try {
		const payload = {
			name,
			email,
			phone,
			message,
			createdAt: new Date().toISOString(),
			source: "website",
		};

		const res = await fetch(`${RTDB_BASE}/contacts.json`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
			cache: "no-store",
		});

		if (!res.ok) {
			return {
				ok: false,
				issues: {},
				message:
					"No pudimos registrar tu consulta en este momento. Probá nuevamente.",
			};
		}
	} catch {
		return {
			ok: false,
			issues: {},
			message:
				"Ocurrió un inconveniente al enviar tu consulta. Intentá de nuevo en unos minutos.",
		};
	}

	return {
		ok: true,
		issues: {},
		message: "¡Mensaje enviado! En breve nos comunicamos con vos ✨",
	};
}
