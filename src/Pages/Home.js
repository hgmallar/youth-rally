import React, { Fragment } from "react";
//import { Card, Button } from "react-bootstrap";
import Photograph from "./../Elements/Photograph";

export default () => (
  <Fragment>
    <div id="content">
      <div className="row justify-content-center mx-auto text-center">
        <div className="row mx-2">
          <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/yr_photo1.jpg"}
              imageAlt={"youth_rally_kid_group1"}
            />
          </div>
          <div className="col-md-4">
            <Photograph
              imageSource={"/assets/images/youth_rally_group_2019.jpg"}
              imageAlt={"youth_rally_kid_group2"}
            />
          </div>
          <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/yr_photo3.jpg"}
              imageAlt={"youth_rally_kid_group3"}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <h3 className="font-weight-bold">
            The 2023 Youth Rally will take place July 10th-15th at San Diego
            State University in San Diego, CA.
          </h3>
          <h3 className="font-weight-bold greenText">
            Registration is now OPEN! Click on the button below to complete your
            2023 Registration TODAY!
          </h3>
        </div>
        <div className="row mx-auto">
          <a
            href="https://app.campdoc.com/!/dn/login?r=youthrally"
            className="btn btn-primary green-btn mb-2 mt-1"
            id="campers-btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            START 2023 Registration
          </a>
        </div>
      </div>
    </div>

    <div className="text-center p-2 banner">
      <h1 className="display-4 mission">Our Mission</h1>
      <p className="lead mission">
        To provide an environment for adolescents living with conditions of the
        bowel and bladder that encourages self-confidence and independent
        living.
      </p>
    </div>
  </Fragment>
);
