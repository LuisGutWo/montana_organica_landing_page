import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "react-bootstrap/Container";
import author1 from "../assets/images/author1.jpg";
import author2 from "../assets/images/author2.jpg";
import author3 from "../assets/images/author3.jpg";

const testimonials = [
  { name: "María López", text: "Los productos de Montaña Orgánica cambiaron mi rutina. Son deliciosos y me siento con más energía cada día.", rating: 5, image: author1 },
  { name: "Carlos Fernández", text: "Excelente atención y productos de calidad. Recomiendo la marca a todos mis amigos.", rating: 4, image: author2 },
  { name: "Lucía Torres", text: "Me encanta la variedad y el compromiso ecológico. ¡Sigan así!", rating: 5, image: author3 },
];

function renderStars(rating) {
  return (
    <span className="testimonial-stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (index < rating ? "★" : "☆")).join("")}
    </span>
  );
}

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="testimonials-intro">
          <div className="title-holder">
            <span className="testimonials-kicker">Historias que inspiran</span>
            <h2>Una forma más consciente de vivir</h2>
            <div className="subtitle">Conoce la experiencia de quienes ya hicieron espacio para lo natural.</div>
          </div>
          <p className="testimonials-lede">Productos honestos, sabores reales y pequeños cambios que se sienten en la rutina.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <Quote className="testimonial-quote-icon" aria-hidden="true" size={28} />
              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="testimonial-person">
                <Image src={testimonial.image} width={64} height={64} alt={`Foto de ${testimonial.name}`} />
                <div>
                  <div className="testimonial-author">{testimonial.name}</div>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                    <span className="visually-hidden">Calificación: {testimonial.rating} de 5 estrellas</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="testimonial-video-block">
          <div className="testimonial-video-copy">
            <span className="testimonials-kicker">Detrás de la marca</span>
            <h3>Del origen a tu mesa</h3>
            <p>Una mirada cercana al propósito y al cuidado que ponemos en cada producto.</p>
          </div>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/AhvNSJ7eGro" title="Conoce el concepto de Montaña Orgánica" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AppTestimonials;
