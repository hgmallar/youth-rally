import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

export default () => (
  <Fragment>
    <div id="content">
      <div className="row justify-content-center mx-auto text-center">
        <Card className="col-md-3 my-auto no-border">
          <Card.Body className="px-0">
            <Card.Title className="purpleText">
              IMPORTANT 2020 YOUTH RALLY UPDATE
            </Card.Title>
            <Card.Text>
              In response to COVID-19, the 2020 Youth Rally will take place
              VIRTUALLY July 20th-25th.
            </Card.Text>
            <Button href="/virtualrally" className="green-btn">
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
              APPLICATIONS ARE (AGAIN) LIVE!
            </Card.Title>
            <Card.Text>
              Click on the button below to start/complete yours TODAY!
            </Card.Text>
            <Button
              href="http://app.campdoc.com/register/youthrally"
              className="green-btn mb-2"
              id="campers-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              START 2020 APPLICATIONS
            </Button>
          </Card.Body>
        </Card>

        {/* <Card className="col-md-3 my-auto no-border">
          <Card.Body>
            <Card.Title className="purpleText">
              <a
                href="https://youthrallyphotos.smugmug.com/"
                className="no-underline links"
              >
                CLICK HERE to view photos of the 2019 Youth Rally!
              </a>
            </Card.Title>
            <Card.Text>
              Pictures will be posted daily after camper arrival on July 8th!
            </Card.Text>
            <span className="greenText">
              <Card.Link href="https://youthrallyphotos.smugmug.com/">
                2019 Photos
              </Card.Link>
            </span>
            <hr />
            <Card.Title className="purpleText">
              Thanks to our 2019 Platinum Level Community Partners:
            </Card.Title>
            <Card.Text className="greenText">
              <Card.Link href="http://www.hollister.com/" className="ml-0">
                Hollister
              </Card.Link>
              {", "}
              <Card.Link href="http://www.gilead.com/" className="ml-0">
                Gilead Sciences
              </Card.Link>
              , and{" "}
              <Card.Link href="https://www.convatec.com/" className="ml-0">
                Convatec!
              </Card.Link>
            </Card.Text>

            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <a href="http://www.hollister.com/">
                  <img
                    className="d-block w-75 mx-auto"
                    src="/assets/images/sponsor_logos/slideshow/Hollister.jpg"
                    alt="Hollister"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="http://www.gilead.com/">
                  <img
                    className="d-block w-75 mx-auto"
                    src="/assets/images/sponsor_logos/slideshow/gilead.png"
                    alt="Gilead"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://www.convatec.com/">
                  <img
                    className="d-block w-75 mx-auto"
                    src="/assets/images/sponsor_logos/slideshow/Convatec.jpg"
                    alt="Convatec"
                  />
                </a>
              </Carousel.Item>
            </Carousel>
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
