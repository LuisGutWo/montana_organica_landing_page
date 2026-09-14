import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import "../src/index.css";
import "../src/App.css";
import "../src/styles/components.css";
import PropTypes from "prop-types";

export const metadata = {
  title: "Montaña Orgánica | Superalimentos ecológicos en Perú",
  description:
    "Descubre superalimentos orgánicos, saludables y sostenibles para toda la familia. Compra directo de Montaña Orgánica, calidad y bienestar desde Perú.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
