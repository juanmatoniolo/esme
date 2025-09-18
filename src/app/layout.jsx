import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Esmeralda Perisset | Psicóloga Clínica",
  description:
    "Soy Esmeralda, psicóloga clínica. Descubrí mis talleres y mi libro 'Líneas sinceras'.",

  icons: {
    icon: [
      { url: "/favicon-32x32.webp", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-32x32-dark.webp", media: "(prefers-color-scheme: dark)" }
    ],
    apple: [
      { url: "/apple-touch-icon.webp", media: "(prefers-color-scheme: light)" },
      { url: "/apple-touch-icon-dark.webp", media: "(prefers-color-scheme: dark)" }
    ]
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Esmeralda Perisset | Psicóloga Clínica",
    description:
      "Talleres de autoconocimiento y el libro 'Líneas sinceras'.",
    images: ["/og-image.webp"]
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dancingScript.variable}`}>
      <body suppressHydrationWarning={true}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
