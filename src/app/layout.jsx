import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

// Configuración tipografías
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

// Metadata SEO
export const metadata = {
  title: "Esmeralda Perisset | Psicóloga Clínica - Talleres y Libro",
  description:
    "Soy Esmeralda, psicóloga clínica. Descubrí mi curso online, talleres de autoconocimiento y mi libro 'Líneas sinceras'.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dancingScript.variable}`}>
      <body>
        <BootstrapClient />
        {children}</body>
    </html>
  );
}

