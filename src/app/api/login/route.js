import { cookies } from "next/headers";
import { getEnvCreds, signSession } from "@/lib/auth";

// ✅ Esta línea elimina el warning sobre dynamic routes y cookies
export const dynamic = "force-dynamic";

export async function POST(req) {
	const { user, pass } = await req.json();
	const { user: validUser, pass: validPass } = getEnvCreds();

	if (user.trim() !== validUser.trim() || pass.trim() !== validPass.trim()) {
		return new Response("Credenciales inválidas", { status: 401 });
	}

	const token = await signSession(user.trim());

	const cookieStore = cookies(); // seguro de usar dentro de la función

	cookieStore.set("adm_auth", token, {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 60 * 60 * 8,
	});

	return new Response(JSON.stringify({ ok: true }), {
		headers: { "Content-Type": "application/json" },
	});
}
