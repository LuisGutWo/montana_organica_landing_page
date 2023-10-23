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
          <h2>Acerca de nosotros</h2>
          <div className="subtitle">conócenos mas de cerca</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image
              src={AboutImg}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            />
          </Col>
          <Col sm={6}>
            <p>
              Montaña orgánica es una empresa dedicada a la producción de súper
              alimentos motivando a las personas a escoger alimentos saludables
              para un mejor estilo y calidad de vida.
            </p>
            <p>
              <b>¿Por qué preferir Montaña Orgánica?</b>
              <br />
              Nos dedicamos a crear super alimentos de consumo diario para toda
              la familia y poder mantener una alimentación saludable para una
              mejor calidad de vida.
            </p>
            <br />
            <div className="progress-block">
              <img
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={AboutLogos}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
