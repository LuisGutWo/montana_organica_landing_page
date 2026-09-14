import Image from "next/image";
import Card from "react-bootstrap/Card";
import { formatPrice } from "../components/formatPrice";
import PropTypes from "prop-types";

export default function MainProductCard({ item }) {
  const safeItem = { ...item };
  const imageSrc = safeItem.img;
  const webpSrc = imageSrc.replace(".jpg", ".webp");

  return (
    <Card data-aos="zoom-in" className="main-product-card">
      <div className="product-image-wrap">
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <Image
            src={imageSrc}
            width={600}
            height={600}
            className="card-image"
            sizes="(max-width: 600px) 100vw, 33vw"
            alt={safeItem.name}
            title={safeItem.name}
          />
        </picture>
        {/* {badge} */}
      </div>
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
