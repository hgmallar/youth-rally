import React from "react";
import { Carousel } from "react-bootstrap";

function DonorSlideshow(props) {
  return (
    <Carousel controls={false} indicators={false}>
      {props.donors.map((donor) => (
        <Carousel.Item key={donor.id}>
          <a href={donor.href}>
            <img className="d-block w-100" src={donor.src} alt={donor.alt} />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DonorSlideshow;
