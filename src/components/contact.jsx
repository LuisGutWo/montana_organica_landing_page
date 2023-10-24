import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contáctenos</h2>
          <div className="subtitle">cuéntanos en que te podemos ayudar</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Tu correo" required />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Numero telefónico"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Ingresa tu mensaje"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Enviar</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8888819422887!2d-76.79972422559607!3d-11.98219004070044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e84b7ff951ab%3A0x46087a59aaeb0092!2sUrbanizaci%C3%B3n%20El%20Cuadro!5e0!3m2!1ses-419!2scl!4v1694141661777!5m2!1ses-419!2scl"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              info@montanaorganica.pe
            </li>
            <li>
              <i className="fas fa-phone"></i>
              960147897 / 994205250
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Lima, Peru
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
