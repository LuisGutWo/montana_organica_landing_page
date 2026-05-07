import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../assets/images/Banner-Rose-tea_Mesa-de-trabajo-1-copia.png";
import CarouselImage2 from "../assets/images/Banner-Rose-tea_Mesa-de-trabajo-1.png";
import CarouselImage3 from "../assets/images/Banner-rose-tea.png";

const heroData = [
  {
    id: 1,
    image: CarouselImage1,
    alt: "Té de rosas - banner principal Montaña Orgánica",
    cta: {
      text: "Ver productos",
      link: "#products",
    },
  },
  {
    id: 2,
    image: CarouselImage2,
    alt: "Variedad de productos orgánicos Montaña Orgánica",
    cta: {
      text: "Explorar catálogo",
      link: "#products",
    },
  },
  {
    id: 3,
    image: CarouselImage3,
    alt: "Promoción especial en productos Montaña Orgánica",
    cta: {
      text: "Ver ofertas",
      link: "#products",
    },
  },
];

const AppHero = React.memo(function AppHero() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);
  return (
    <section id="home" className="hero-block" aria-label="Hero principal">
      <Carousel
        interval={7000}
        pause="hover"
        indicators
        nextLabel="Siguiente banner"
        prevLabel="Banner anterior"
        aria-label="Carrusel de banners principales"
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <div className="hero-carousel-img-wrapper">
              <img
                className="d-block w-100"
                src={hero.image}
                alt={hero.alt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              {hero.cta && (
                <div
                  className={
                    hero.id === 3
                      ? "hero-carousel-cta-wrapper hero-carousel-cta-wrapper--right"
                      : "hero-carousel-cta-wrapper"
                  }
                >
                  <a
                    href={hero.cta.link}
                    className="hero-carousel-cta"
                    tabIndex={0}
                  >
                    {hero.cta.text}
                  </a>
                </div>
              )}
              {/* Indicador accesible de progreso */}
              <div
                className="visually-hidden"
                aria-live="polite"
                aria-atomic="true"
                id="hero-carousel-status"
              >
                {`Banner ${activeIndex + 1} de ${heroData.length}`}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
});

export default AppHero;
