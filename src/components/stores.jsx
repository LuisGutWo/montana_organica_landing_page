import Container from "react-bootstrap/Container";
import StoresSwipeCarousel from "../components/storesSwiperCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function AppStores() {
  return (
    <section id="stores" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2 data-aos="fade-right">Encuentranos en</h2>
          <div data-aos="fade-left" className="subtitle">
            nuestros queridos colaboradores
          </div>
        </div>
        <StoresSwipeCarousel />
      </Container>
    </section>
  );
}

export default AppStores;
