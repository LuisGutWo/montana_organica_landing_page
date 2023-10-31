import Container from "react-bootstrap/Container";

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Conócenos un poco mas</h2>
          <div className="subtitle mb-5">
            aquí una mirada de nuestro concepto
          </div>
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
