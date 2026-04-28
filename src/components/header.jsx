import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../assets/images/montana-organica-500x500.png";
import "animate.css";
import { useEffect } from "react";

function AppHeader() {
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
      <Navbar bg="light" expand="lg" className="main-navbar-sticky">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={NavbarLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
