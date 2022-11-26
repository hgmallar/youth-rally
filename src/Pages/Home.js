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
        {/* <Card className="col-md-3 my-auto no-border">
          <Card.Body className="px-0">
            <Card.Title className="purpleText">
              IMPORTANT 2022 UPDATE
            </Card.Title>
            <Card.Text>Our 2022 Dates and Plans have changed</Card.Text>
            <Button
              href="/assets/documents/2022_Virtual_Announcement.pdf"
              className="green-btn"
            >
              CLICK HERE FOR MORE DETAILS
            </Button>
          </Card.Body>
        </Card>

        <Card className="col-md-5 my-auto no-border">
          <Card.Body className="px-0 py-0 my-0 justify-content-center">
            <video controls>
              <source
                src="/assets/images/youth_rally_promotional_video_web.mp4"
                type="video/mp4"
                className="my-auto"
              />
            </video>
          </Card.Body>
          <Card.Title className="purpleText">Youth Rally Video</Card.Title>
        </Card>

        <Card className="col-md-3 my-auto no-border">
          <Card.Body className="px-0">
            <Card.Title className="purpleText">
              Registration for the 2022 Virtual Rally is LIVE!
            </Card.Title>
            <Button href="/applications" className="green-btn mb-2">
              Applications
            </Button>
          </Card.Body>
        </Card> */}

        {/* <Card className="col-md-3 my-auto no-border">
          <Card.Body>
            <Card.Title className="purpleText">
              <a
                href="https://youthrallyphotos.smugmug.com/"
                className="no-underline links boldHover"
              >
                CLICK HERE to view photos of the 2019 Youth Rally!
              </a>
            </Card.Title>
            <Card.Text>
              Pictures will be posted daily after camper arrival on July 8th!
            </Card.Text>
            <Card.Link
              className="greenText boldHover"
              href="https://youthrallyphotos.smugmug.com/"
            >
              2019 Photos
            </Card.Link>
          </Card.Body>
        </Card> */}
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
