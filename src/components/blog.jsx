import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BlogImage1 from "../assets/images/blogImg1.jpg";
import BlogImage2 from "../assets/images/blogImg2.png";
import BlogImage3 from "../assets/images/blogImg3.jpg";
import { Button } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const blogData = [
  {
    id: 1,
    image: BlogImage1,
    time: "6 Jun 2023",
    title:
      "Alimentos sanos indispensables para improvisar recetas fáciles y sanas",
    description:
      "Para hacer cenas rápidas y sanas y comidas saludables y rápidas ¿qué alimentos sanos no pueden faltar en tu menú semanal saludable?",
    link: "http://blancadieznutricionista.com/alimentos-sanos-indispensables-para-improvisar-recetas-faciles-y-sanas/",
  },
  {
    id: 2,
    image: BlogImage2,
    time: "10 Nov 2016",
    title:
      "Blog: Hacia sistemas alimentarios más saludables, sostenibles y equitativos en el Perú",
    description:
      "El plazo para el cumplimiento de la Agenda 2030 y sus 17 Objetivos de Desarrollo Sostenible (ODS) se está aproximando y resulta crítico cambiar nuestros sistemas alimentarios de forma integral.",
    link: "https://peru.un.org/es/146232-blog-hacia-sistemas-alimentarios-m%C3%A1s-saludables-sostenibles-y-equitativos-en-el-per%C3%BA",
  },
  {
    id: 3,
    image: BlogImage3,
    time: "07 Nov 2016",
    title: "¿Por qué promover la alimentación saludable en el Perú?",
    description:
      "El Perú es reconocido en el mundo por la calidad de su gastronomía y por una amplia agrobiodiversidad. Pero, esto no se traduce en un mayor acceso de la población a una alimentación saludable.",
    link: "https://especial.elcomercio.pe/perusostenible/por-que-promover-la-alimentacion-saludable-en-el-peru/",
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Blogs de la semana</h2>
          <div className="subtitle">
            un poco de nuestra selección de blogs orientados al bienestar y
            buena alimentación
          </div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  className="holder"
                >
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <Button href={blog.link}>
                        Leer mas <i className="fas fa-chevron-right"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
