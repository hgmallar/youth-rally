import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

const Photograph = (props) => (
  <Image
    src={props.imageSource}
    alt={props.imageAlt}
    thumbnail
    className="mx-auto d-block mw-100 mh-100"
  />
);

export default Photograph;

Photograph.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};
