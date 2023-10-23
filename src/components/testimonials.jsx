import Container from "react-bootstrap/Container";
import YouTube from "react-youtube";

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Conócenos un poco mas</h2>
          <div className="subtitle mb-5">aquí una mirada de nuestro concepto</div>
          <YouTube videoId="AhvNSJ7eGro" autoplay={true} fluid />
        </div>
      </Container>
    </section>
  );
}

export default AppTestimonials;
