import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import AddToCart from "./../AddToCart";

const ItemCard = (props) => (
  <div className="col-md-3 m-1">
    <Card>
      <Card.Img
        variant="top"
        className="store-image"
        src={props.imageSource}
        alt={props.imageAlt}
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>Price(USD): ${props.price} </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
        <AddToCart
          price={props.price}
          incrementCart={props.incrementCart}
          sizedItem={false}
          baseName={props.baseName}
        />
      </Card.Body>
    </Card>
  </div>
);

export default ItemCard;

ItemCard.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  baseName: PropTypes.string.isRequired,
};
