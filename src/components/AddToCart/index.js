import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const AddToCart = (props) => (
  <Button
    className="btn green-btn"
    onClick={() => {
      //If it's a sized item, check to make sure there is a size before incrementing the cart total.
      if (props.sizedItem) {
        if (!props.checkSize()) {
          props.incrementCart(props.baseName, props.price);
        }
      } else {
        props.incrementCart(props.baseName, props.price);
      }
    }}
  >
    Add to Cart
  </Button>
);

export default AddToCart;

AddToCart.propTypes = {
  price: PropTypes.number.isRequired,
  sizedItem: PropTypes.bool.isRequired,
  baseName: PropTypes.string.isRequired
};
