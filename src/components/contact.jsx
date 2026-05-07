import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactWhatsappButton from "react-whatsapp-button";
import { useState } from "react";

function AppContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const validate = {
    name: (v) => v.trim().length > 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    phone: (v) => /^\d{7,}$/.test(v.replace(/\D/g, "")),
    message: (v) => v.trim().length > 5,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const isValid = Object.keys(validate).every((k) => validate[k](form[k]));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Por favor, completa todos los campos correctamente.");
      setStatus("");
      return;
    }
    setError("");
    setStatus("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setTouched({});
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contáctenos</h2>
          <div className="subtitle">cuéntanos en que te podemos ayudar</div>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit} noValidate>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !validate.name(form.name)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingresa tu nombre completo (mínimo 3 caracteres).
              </Form.Control.Feedback>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Tu correo"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !validate.email(form.email)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingresa un correo válido.
              </Form.Control.Feedback>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Número telefónico"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.phone && !validate.phone(form.phone)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingresa un número válido (mínimo 7 dígitos).
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Ingresa tu mensaje"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.message && !validate.message(form.message)}
                required
              />
              <Form.Control.Feedback type="invalid">
                El mensaje debe tener al menos 6 caracteres.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <div className="btn-holder mt-3">
            <Button type="submit" disabled={!isValid}>
              Enviar
            </Button>
            <DraggableY style={{ marginLeft: 16 }}>
              <ReactWhatsappButton
                title="Chatea con nosotros"
                className="whatsapp-button"
                size="large"
                language="es"
                number="+51960147597"
                message="Hola, quiero hacer una consulta"
                showLabel={true}
                label="Chatea con nosotros"
                color="#25D366"
                country="CO"
                countryCode="51"
                phoneNumber="960147597"
                animated
                style={{ verticalAlign: "middle" }}
              />
            </DraggableY>
          </div>
          {error && (
            <div style={{ color: "#e74c3c", marginTop: 10 }}>{error}</div>
          )}
          {status && (
            <div style={{ color: "#3bb77e", marginTop: 10 }}>{status}</div>
          )}
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

// Componente para hacer draggable solo en eje Y
import { useRef, useEffect } from "react";

export default AppContact;
export { DraggableY };
function DraggableY({ children, style }) {
  const ref = useRef();
  const [top, setTop] = useState(0);
  const dragging = useRef(false);
  function startDrag() {
    dragging.current = true;
    document.body.style.userSelect = "none";
  }
  function stopDrag() {
    dragging.current = false;
    document.body.style.userSelect = "";
  }
  function onDrag(e) {
    if (!dragging.current) return;
    let clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const min = 0;
    const max = window.innerHeight - (ref.current?.offsetHeight || 60);
    let newTop = Math.max(min, Math.min(max, clientY - 30));
    setTop(newTop);
  }
  useEffect(() => {
    function move(e) {
      onDrag(e);
    }
    function up() {
      stopDrag();
    }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);
  return (
    <span
      ref={ref}
      style={{
        position: "fixed",
        right: 0,
        top,
        zIndex: 9999,
        cursor: dragging.current ? "grabbing" : "grab",
        ...style,
      }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {children}
    </span>
  );
}

DraggableY.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};
