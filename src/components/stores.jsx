import Container from "react-bootstrap/Container";
import StoresSwipeCarousel from "../components/storesSwiperCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AppStores() {
  return (
    <section
      id="stores"
      className="block blog-block"
      aria-label="Tiendas y puntos de venta Montaña Orgánica"
    >
      <Container fluid>
        <div className="title-holder">
          <h2 data-aos="fade-right">¿Dónde comprar Montaña Orgánica?</h2>
          <div data-aos="fade-left" className="subtitle">
            Descubre nuestros puntos de venta y aliados ecológicos en Perú.
            Encuentra productos orgánicos certificados cerca de ti.
          </div>
        </div>
        <StoresSwipeCarousel />
      </Container>
    </section>
  );
}

export default AppStores;
