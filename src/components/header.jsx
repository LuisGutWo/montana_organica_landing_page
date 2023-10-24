import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/images/montana-organica-500x500.png";
import "animate.css";

function AppHeader() {
  return (
    <>
      <section className="navbar-top">
        <Container fluid>
          <section className="navbar-top__left-menu">
            <div className="inner">
              <i className="fa-regular fa-clock text-light"></i>
              <p>Lun a Sab: 24 horas</p>
            </div>
            <div className="inner">
              <i className="fa-regular fa-envelope text-light"></i>
              <a href="mailto:yourmail@email.com">info@montanaorganica.pe</a>
            </div>
          </section>
          <section className="navbar-top__right-menu">
            <ul className="navbar-top__social-links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </section>
        </Container>
      </section>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={NavbarLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Quienes somos</Nav.Link>
              <Nav.Link href="#products">Productos</Nav.Link>
              <Nav.Link href="#stores">Tiendas</Nav.Link>
              <Nav.Link href="#testimonials">Video</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppHeader;
