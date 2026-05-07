import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import shape1 from "../assets/images/footer-v1-shape1.png";
import shape2 from "../assets/images/footer-v1-shape2.png";
import LogoWhite from "../assets/images/montaña organica-125x125.png";
// import ReactWhatsappButton from "react-whatsapp-button";
import "animate.css";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer-one" aria-label="Pie de página Montaña Orgánica">
      <div className="shape1 float-bob-y">
        <img src={shape1} alt="Decoración fondo Montaña Orgánica" />
      </div>
      <div className="shape2 float-bob-y">
        <img src={shape2} alt="Decoración fondo Montaña Orgánica" />
      </div>
      <Container fluid>
        <section className="row justify-content-center align-items-center ps-5">
          <div className="col-lg-6 col-md-8 text-start">
            <img
              src={LogoWhite}
              className="img-thumbnail animate__animated animate__pulse animate__infinite animate__slow"
              alt="Logo Montaña Orgánica"
              width={90}
              height={90}
            />
            <h4 className="mb-2">Montaña Orgánica</h4>
            <p className="footer-par">
              Inspiramos bienestar a través de superalimentos orgánicos,
              sostenibles y deliciosos.
              <br />
              Nuestra misión es mejorar la calidad de vida de las familias
              peruanas, promoviendo una alimentación consciente y responsable
              con el planeta.
            </p>
            <ul className="footer-links">
              <li>
                <a href="#contact">Contacto</a>
                <a href="#" aria-label="Política de privacidad">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" aria-label="Términos y condiciones">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="socials">
          <h4>Redes sociales</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/MontanaOrganicaPeru/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Montaña Orgánica"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/montanaorganicaperu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Montaña Orgánica"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Montaña Orgánica"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-cta mt-3 mb-2">
          <span>¿Tienes dudas o quieres comprar directo?</span>
        </div>
        <div
          className="footer-newsletter mt-3 mb-2"
          style={{ textAlign: "center" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Gracias por suscribirte!");
            }}
            style={{ display: "inline-block", maxWidth: 320 }}
          >
            <label
              htmlFor="newsletter-email"
              style={{ marginRight: 8, fontWeight: 500 }}
            >
              Suscribete a nuestro newsletter:
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Tu correo"
              required
              style={{
                padding: "0.4em 1em",
                borderRadius: 8,
                border: "1px solid #e0ded9",
                marginRight: 8,
              }}
            />
            <br />
            <button
              type="submit"
              style={{
                background: "#3bb77e",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.4em 1.2em",
                fontWeight: 600,
                cursor: "pointer",
                marginTop: "0.7em",
              }}
            >
              Suscribirme
            </button>
          </form>
        </div>
        <div className="copyright mt-2">
          <p>
            &copy; {new Date().getFullYear()} Montaña Orgánica & LAGmedia. Todos
            los derechos reservados.
            <br />
            Sitio desarrollado con ❤️ por el equipo de LAGmedia.
          </p>
        </div>
        {showTopBtn && (
          <div
            className="go-top"
            onClick={goTop}
            aria-label="Volver arriba"
          ></div>
        )}
      </Container>
    </footer>
  );
}

export default AppFooter;
