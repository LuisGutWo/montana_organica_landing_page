import { Archivo, Martian_Mono } from "next/font/google";
import PropTypes from "prop-types";
import "../src/styles/sistema.css";
import "../src/styles/secciones.css";

/**
 * Archivo lleva la voz: su eje de ancho hace de rotulación de zona, como la
 * letra ancha de una lámina de altitudes.
 * Martian Mono es el instrumento: msnm, gramaje y precio. Monoespaciada para
 * medición, no de disfraz.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--fuente-texto",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--fuente-instrumento",
});

export const metadata = {
  metadataBase: new URL("https://montanaorganica.pe"),
  title: "Montaña Orgánica | Superalimentos orgánicos del Perú",
  description:
    "Veintiocho superalimentos orgánicos peruanos, sin químicos ni aditivos: sal de Maras, blends de té e infusiones. Precio a la vista y pedido directo por WhatsApp.",
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Montaña Orgánica",
    title: "Montaña Orgánica | Superalimentos orgánicos del Perú",
    description:
      "Veintiocho superalimentos orgánicos peruanos. Precio a la vista y pedido directo por WhatsApp.",
  },
};

export const viewport = {
  themeColor: "#101c17",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${martian.variable}`}>
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
