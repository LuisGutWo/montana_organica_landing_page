import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AboutImg from "../assets/images/nosotros-1-1024x682.jpg";
import AboutLogos from "../assets/images/iconos_vegan_gluten_non_white.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AppAbout() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Acerca de Nosotros</h2>
          <div className="subtitle">
            Superalimentos orgánicos para una vida saludable
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image
              src={AboutImg}
              alt="Productos orgánicos de Montaña Orgánica"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            />
          </Col>
          <Col sm={6}>
            <p>
              En <b>Montaña Orgánica</b> producimos superalimentos orgánicos
              100% naturales, sin químicos ni aditivos. Transformamos
              ingredientes premium en productos nutritivos que potencian tu
              bienestar y el de tu familia.
            </p>
            <p>
              <b>¿Por qué elegirnos?</b>
              <br />
              Cada producto es cuidadosamente elaborado con certificación
              orgánica, libre de gluten y apto para veganos. Nos comprometemos
              con tu salud y la sostenibilidad del planeta, ofreciendo alimentos
              que marcan la diferencia en tu calidad de vida.
            </p>
            <br />
            <div className="progress-block">
              <img
                alt="Certificaciones: Orgánico, Sin Gluten, Vegano"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                src={AboutLogos}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
