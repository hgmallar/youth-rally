import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ImageWithText = (props) => (
  <Card className={`${props.className} mb-2`}>
    <Card.Img variant="top" src={props.imageSource} alt={props.imageAlt} />
    <Card.Body>
      <Card.Text>{props.imageText}</Card.Text>
    </Card.Body>
  </Card>
);

export default ImageWithText;

ImageWithText.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageText: PropTypes.string.isRequired,
};
