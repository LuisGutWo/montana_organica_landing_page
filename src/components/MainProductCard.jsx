import React from "react";
import Card from "react-bootstrap/Card";
import { formatPrice } from "../components/formatPrice";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function MainProductCard({ item }) {
  return (
    <Card data-aos="zoom-in" className="main-product-card">
      <Card.Img variant="top" src={item.img} className="card-image" />

      <Card.Body>
        <Card.Title className="card-title">{item.name}</Card.Title>
        <div className="card-container">
          <Card.Text>{item.desc}</Card.Text>
        </div>
        <div>
          <b className="card-price">{formatPrice(item.price)}</b>
        </div>
      </Card.Body>
    </Card>
  );
}
