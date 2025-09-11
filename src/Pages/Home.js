import React, { Fragment } from "react";
//import { Card, Button } from "react-bootstrap";
import Photograph from "./../Elements/Photograph";

export default () => (
  <Fragment>
    <div id="content">
      <div className="row justify-content-center mx-auto text-center">
        <div className="row mx-2">
          {/* <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/group_left_2024_sm.jpg"}
              imageAlt={"youth_rally_kid_group1"}
            />
          </div> */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Photograph
              imageSource={"/assets/images/group_2025_sm.JPG"}
              imageAlt={"youth_rally_kid_group2"}
            />
          </div>
          {/* <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/group_right_2024_sm.jpg"}
              imageAlt={"youth_rally_kid_group3"}
            />
          </div> */}
          <div className="col-md-6 d-flex align-items-center justify-content-center px-0 py-0 my-0 mx-auto">
            <video controls>
              <source
                src="/assets/images/video1.mp4"
                type="video/mp4"
                className="my-auto"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mx-auto text-center">
        <h4 className="font-weight-bold">
          The 2026 Youth Rally will take place at the University of Colorado
          in Boulder, CO from July 6th-11th.
        </h4>
        <h5 className="font-weight-bold">
          Volunteers will be expected to be present on site July 4th-11th.
        </h5>
        {/* <h3 className="font-weight-bold greenText mx-2">
          Registration for the 2024 Youth Rally is now closed. Check back in January/February to register for the 2025 Youth Rally.
        </h3>  */}
        {/* <h3 className="font-weight-bold greenText mx-auto text-center">
            Registration is now OPEN! Click on the button below to complete your
            2025 Registration TODAY!
          </h3>  */}

      </div>
      {/* <div className="row justify-content-center mx-auto text-center">
          <a
            href="http://app.campdoc.com/register/youthrally"
            className="btn btn-primary green-btn mb-2 mt-1"
            id="campers-btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            START 2025 Registration
          </a>
        </div> */}
      <div className="row justify-content-center">
        <a
          href="https://youthrally.smugmug.com/Youth-Rally-2025-Photos-1"
          className="btn btn-primary green-btn mb-2 mt-1"
          id="campers-btn"
          target="_blank"
          rel="noreferrer noopener"
        >
          2025 Youth Rally Photos
        </a>
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
