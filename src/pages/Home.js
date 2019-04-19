import React from "react";

import Navbar from "./../components/Navbar";

export default () => (
  <div>
    <Navbar />
    
    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div id="home-page">
            <div className="row justify-content-center text-center">
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
              <div className="card col-md-3 mx-1 mt-2 my-auto no-border">
                <div className="card-body">
                  <h4 className="card-title">
                    2019 APPLICATIONS ARE NOW LIVE!
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
            </div>
            <div className="row justify-content-center text-center">
              <div className="card col-md-2 mx-1 mt-2">
                <div className="card-body">
                  <h5 className="card-title">
                    Now Available - The 2019 Youth Rally Brochure
                  </h5>
                  <span className="greenText">
                    <a
                      href="/assets/documents/2019-BROCHURE_1.jpg"
                      className="card-link"
                    >
                      front/back
                    </a>
                    <a
                      href="/assets/documents/2019-BROCHURE_2.jpg"
                      className="card-link"
                    >
                      center content
                    </a>
                  </span>
                </div>
              </div>
              <div className="card col-md-5 mx-1 mt-2 my-auto no-border">
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
              <div className="card col-md-2 mx-1 mt-2">
                <div className="card-body">
                  <h5 className="card-title">
                    Check out the 2018 Youth Rally Photos and Videos!
                  </h5>
                  <span className="greenText">
                    <a
                      href="https://youthrally.smugmug.com/"
                      className="card-link"
                    >
                      2018 Photos and Video
                    </a>
                  </span>
                </div>
              </div>
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
