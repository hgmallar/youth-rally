import React, { Fragment } from "react";

import { Mission, Leaders, Partners } from "./";
import { Card } from "react-bootstrap";

export default () => (
  <Fragment>
    <section id="mission">
      <Mission />
      <Card className="col-md-8 mx-auto my-auto no-border p-1">
        <Card.Title className="purpleText mx-auto">Youth Rally Video</Card.Title>
        <Card.Body className="px-0 py-0 my-0  mx-auto justify-content-center">
          <video controls>
            <source
              src="/assets/images/youth_rally_promotional_video_web.mp4"
              type="video/mp4"
              className="my-auto"
            />
          </video>
        </Card.Body>
      </Card>
    </section>
    <section id="leaders">
      <Leaders />
    </section> 
    <section id="partners">
      <Partners />
      
    </section>
  </Fragment>
);
