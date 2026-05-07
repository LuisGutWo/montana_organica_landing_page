import Container from "react-bootstrap/Container";
import author1 from "../assets/images/author1.jpg";
import author2 from "../assets/images/author2.jpg";
import author3 from "../assets/images/author3.jpg";

const testimonials = [
  {
    name: "María López",
    text: "Los productos de Montaña Orgánica cambiaron mi rutina. Son deliciosos y me siento con más energía cada día.",
    rating: 5,
    image: author1,
  },
  {
    name: "Carlos Fernández",
    text: "Excelente atención y productos de calidad. Recomiendo la marca a todos mis amigos.",
    rating: 4,
    image: author2,
  },
  {
    name: "Lucía Torres",
    text: "Me encanta la variedad y el compromiso ecológico. ¡Sigan así!",
    rating: 5,
    image: author3,
  },
];

function renderStars(rating) {
  return (
    <span
      style={{ color: "#ffe066", fontSize: "1.2em" }}
      aria-label={`Calificación: ${rating} estrellas`}
    >
      {Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join("")}
    </span>
  );
}

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Conócenos un poco más</h2>
          <div className="subtitle mb-5">
            aquí una mirada de nuestro concepto
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-md-4 mb-3 d-flex align-items-stretch">
              <div
                className="testimonial-card"
                style={{
                  background: "#fff",
                  borderRadius: "1.2em",
                  boxShadow: "0 2px 12px #e0ded9",
                  padding: "1.5em",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src={t.image}
                  alt={`Foto de ${t.name}`}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "1em",
                    border: "2px solid #3bb77e",
                  }}
                />
                <div
                  className="testimonial-text"
                  style={{
                    fontStyle: "italic",
                    marginBottom: "0.7em",
                    textAlign: "center",
                  }}
                >
                  “{t.text}”
                </div>
                <div
                  className="testimonial-author"
                  style={{ fontWeight: 600, color: "#3bb77e" }}
                >
                  {t.name}
                </div>
                <div className="testimonial-rating mt-1">
                  {renderStars(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center video-container">
          <iframe
            width="100%"
            height="492"
            src="https://www.youtube.com/embed/AhvNSJ7eGro"
            title="Montaña Organica"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default AppTestimonials;
