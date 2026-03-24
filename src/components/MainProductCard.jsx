import Card from "react-bootstrap/Card";
import { formatPrice } from "../components/formatPrice";
import PropTypes from "prop-types";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function MainProductCard({ item }) {
  const safeItem = item ?? {};
  const imageSrc = encodeURI(safeItem.img ?? "");

  return (
    <Card data-aos="zoom-in" className="main-product-card">
      <Card.Img variant="top" src={imageSrc} className="card-image" />
      <Card.Body>
        <Card.Title className="card-title">{safeItem.name}</Card.Title>
        <div className="card-container">
          <Card.Text>{safeItem.desc}</Card.Text>
        </div>
        <div>
          <b className="card-price">{formatPrice(safeItem.price)}</b>
        </div>
      </Card.Body>
    </Card>
  );
}

MainProductCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};
