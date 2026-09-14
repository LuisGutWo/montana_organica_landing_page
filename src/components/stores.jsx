import Container from "react-bootstrap/Container";
import StoresSwipeCarousel from "../components/storesSwiperCarousel";
function AppStores() {
  return (
    <section
      id="stores"
      className="block stores-section stores-bg"
      aria-label="Tiendas y puntos de venta Montaña Orgánica"
    >
      <Container fluid>
        <div className="stores-intro">
          <div className="title-holder">
            <h2 data-aos="fade-right">¿Dónde comprar Montaña Orgánica?</h2>
            <div data-aos="fade-left" className="subtitle">
              Encuentra nuestros productos en tiendas y aliados ecológicos de Perú.
            </div>
          </div>
          <p className="stores-lede">
            Una red de espacios que comparte nuestra forma de entender el bienestar.
          </p>
          <span className="stores-count">15 aliados para descubrir</span>
        </div>
        <StoresSwipeCarousel />
      </Container>
    </section>
  );
}

export default AppStores;
