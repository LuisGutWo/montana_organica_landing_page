import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/images/montana-organica-500x500.png";
import "animate.css";
import { useEffect, useState } from "react";

function AppHeader() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const navbarTop = document.querySelector(".navbar-top");
    const mainNavbar = document.querySelector(".main-navbar-sticky");
    const header = document.getElementById("header");
    let navbarTopHeight = 0;
    if (navbarTop) {
      navbarTopHeight = navbarTop.offsetHeight;
    }
    function handleScroll() {
      if (!navbarTop || !mainNavbar || !header) return;
      if (window.scrollY > 60) {
        navbarTop.style.transform = "translateY(-100%)";
        navbarTop.style.transition = "transform 0.3s";
        mainNavbar.classList.add("sticky-navbar");
        mainNavbar.style.top = "0";
        header.style.height = mainNavbar.offsetHeight + "px";
      } else {
        navbarTop.style.transform = "translateY(0)";
        mainNavbar.classList.remove("sticky-navbar");
        mainNavbar.style.top = navbarTopHeight + "px";
        header.style.height = "";
      }
    }
    // Inicializar top del mainNavbar
    if (mainNavbar && navbarTop) {
      mainNavbar.style.top = navbarTop.offsetHeight + "px";
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Cierra el menú si cambia a desktop
    function handleResize() {
      if (window.innerWidth >= 992) setExpanded(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="header">
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
      <Navbar
        bg="light"
        expand="lg"
        className="main-navbar-sticky"
        expanded={expanded}
      >
        <Container fluid className="main-navbar">
          <Navbar.Brand href="#">
            <img src={NavbarLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={() => setExpanded(false)}>
                Inicio
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                Nosotros
              </Nav.Link>
              <Nav.Link href="#products" onClick={() => setExpanded(false)}>
                Productos
              </Nav.Link>
              <Nav.Link href="#stores" onClick={() => setExpanded(false)}>
                Tiendas
              </Nav.Link>
              <Nav.Link href="#testimonials" onClick={() => setExpanded(false)}>
                Video
              </Nav.Link>
              <Nav.Link href="#blog" onClick={() => setExpanded(false)}>
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppHeader;
