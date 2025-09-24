import { cookies } from "next/headers";

// ✅ Esto evita el warning de cookies() en rutas dinámicas
export const dynamic = "force-dynamic";

export async function POST() {
	const cookieStore = cookies();

	// ✅ Eliminar la cookie
	cookieStore.delete("adm_auth");

	return new Response(JSON.stringify({ ok: true }), {
		headers: { "Content-Type": "application/json" },
	});
}
