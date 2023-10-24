import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import shape1 from "../assets/images/footer-v1-shape1.png";
import shape2 from "../assets/images/footer-v1-shape2.png";
import LogoWhite from "../assets/images/montaña organica-125x125.png";
import ReactWhatsappButton from "react-whatsapp-button";
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
    <footer className="footer-one">
      <div className="shape1 float-bob-y">
        <img src={shape1} alt="#" />
      </div>
      <div className="shape2 float-bob-y">
        <img src={shape2} alt="#" />
      </div>
      <Container fluid>
        <section className="row justify-content-center align-items-center ps-5">
          <div className="col-lg-6 col-md-8 text-start">
            <img
              src={LogoWhite}
              className="img-thumbnail animate__animated animate__pulse animate__infinite animate__slow"
              alt=""
            />
            <h4>Somos Montaña Organica</h4>
            <p className="footer-par">
              Nos dedicamos a crear super alimentos de consumo diario para toda
              la familia y poder mantener una alimentación saludable para una
              mejor calidad de vida.
            </p>
          </div>
        </section>
        <div className="socials">
          <h4>Síguenos en las redes sociales</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/MontanaOrganicaPeru/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2023 Montaña Organica. LGWebmedia Todos los derechos
          reservados.
        </div>
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
        <ReactWhatsappButton
          countryCode="51"
          phoneNumber="960147597"
          animated
          style={{ margin: "auto", bottom: "5%", right: "5%" }}
        />
      </Container>
    </footer>
  );
}

export default AppFooter;
