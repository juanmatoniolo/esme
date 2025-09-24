cookies().set({
	name: "adm_auth",
	value: token,
	httpOnly: true,
	sameSite: "lax",
	secure: process.env.NODE_ENV === "production",
	path: "/",
	maxAge: 60 * 60 * 8,
});
