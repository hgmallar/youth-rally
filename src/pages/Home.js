import React from "react";

import Navbar from "./../components/Navbar";

export default () => (
  <div>
    <Navbar />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div id="home-page">
            {/* <div className="row justify-content-center text-center">
              <div className="card col-md-3 mt-2 mx-1">
                <div className="text-center">
                  <img
                    className="card-img-top mt-1"
                    src="/assets/images/2018_campers.jpg"
                    alt="Campers"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Be a camper!</h5>
                  <p className="card-text">
                    July 8th - 13th, 2019 in Seattle, WA
                  </p>
                  <a
                    href="/campers"
                    className="btn btn-primary text-white mb-2"
                    id="campers-btn"
                  >
                    Campers
                  </a>
                </div>
              </div>
              <div className="card col-md-3 mx-1 mt-2">
                <div className="text-center">
                  <img
                    className="card-img-top mt-1"
                    src="/assets/images/2018_nurses.png"
                    alt="Nurses"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Be a counselor or nurse!</h5>
                  <p className="card-text">
                    July 8th - 13th, 2019 in Seattle, WA
                  </p>
                  <a
                    href="/nurses"
                    className="btn btn-primary text-white mb-2"
                    id="nurses-btn"
                  >
                    Nurses/Medical
                  </a>
                  <a
                    href="/counselors"
                    className="btn btn-primary text-white mb-2 mx-1"
                    id="counselors-btn"
                  >
                    Counselors
                  </a>
                </div>
              </div>
            </div> */}
            <div className="row justify-content-center text-center">
            <div className="card col-md-3 mx-1 mt-2 my-auto no-border">
                <div className="card-body">
                  <h4 className="card-title">
                    2020 APPLICATIONS ARE NOW LIVE!
                  </h4>
                  <h5>Click on the button below to start yours TODAY!</h5>
                  <a
                    href="/applications"
                    className="btn btn-primary text-white mb-2"
                    id="campers-btn"
                  >
                    Click Here
                  </a>
                </div>
              </div>
              <div className="card col-md-5 my-1 mt-2 my-auto no-border">
                <div className="card-body">
                  <video controls>
                    <source
                      src="/assets/images/youth_rally_promotional_video_web.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h5>Youth Rally Video</h5>
              </div>
              <div className="card col-md-3 mx-1 my-2">
                <div className="card-body">
                  <h5 className="card-title purpleText">
                    <a
                      href="https://youthrallyphotos.smugmug.com/"
                      className="no-underline"
                    >
                      CLICK HERE to view photos of the 2019 Youth Rally!
                    </a>
                  </h5>
                  <p>
                    Pictures will be posted daily after camper arrival on July
                    8th!
                  </p>
                  <span className="greenText">
                    <a
                      href="https://youthrallyphotos.smugmug.com/"
                      className="card-link"
                    >
                      2019 Photos
                    </a>
                  </span>
                  <hr />
                  <h5 className="card-title purpleText">
                    Thanks to our 2019 Platinum Level Community Partners:
                  </h5>
                  <p className="text-center">
                    <a
                      href="http://www.hollister.com/"
                      className="card-link ml-0"
                    >
                      Hollister
                    </a>
                    {", "}
                    <a href="http://www.gilead.com/" className="card-link ml-0">
                      Gilead Sciences
                    </a>
                    , and{" "}
                    <a
                      href="https://www.convatec.com/"
                      className="card-link ml-0"
                    >
                      Convatec!
                    </a>
                  </p>
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <a href="http://www.hollister.com/">
                          <img
                            className="d-block w-75 mx-auto"
                            src="/assets/images/sponsor logos/slideshow/Hollister.jpg"
                            alt="Hollister"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a href="http://www.gilead.com/">
                          <img
                            className="d-block w-75 mx-auto"
                            src="/assets/images/sponsor logos/slideshow/gilead.png"
                            alt="Gilead"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a href="https://www.convatec.com/">
                          <img
                            className="d-block w-75 mx-auto"
                            src="/assets/images/sponsor logos/slideshow/Convatec.jpg"
                            alt="Convatec"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Ostomy Day
              <div className="card col-md-3 mx-1 my-2">
                <div className="card-body">
                  <h5 className="card-title purpleText">
                    Join us in celebrating Ostomy Awareness Day!
                  </h5>
                  <p>
                    Visit{" "}
                    <a href="https://www.ostomy.org/" className="no-underline">
                      UOAA
                    </a>{" "}
                    to learn more about how you can participate in events in
                    your area!
                  </p>
                  <p>#OstomiesAreLifesavers #OstomyDay2019</p>
                  <a href="https://www.ostomy.org/" className="no-underline">
                    <img
                      className="d-block w-75 mx-auto"
                      src="/assets/images/lifesaver.png"
                      alt="LifeSaver"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
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
  </div>
);
