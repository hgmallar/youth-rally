import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />
    
    <Header title="Get Involved" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2>Can't make it to Rally, but still want to help?</h2>
          <p>
            The Youth Rally, although a week-long camp, is a 365 day a year
            operation. Recruitment and fundraising efforts never cease and there
            are endless ways you can help support the cause, for example:
          </p>
          <ul>
            <li>
              Start a fundraising page through social media - ask your friends
              and families to help sponsor a child to come to camp
            </li>
            <li>
              Host a fundraiser (creativity is encouraged!) to support ongoing
              Youth Rally sponsorship and programming
            </li>
            <li>
              Contact{" "}
              <span className="purpleText">
                <a href="mailto:ABS626@aol.com">Abby Ryan</a>
              </span>{" "}
              for brochures to distribute to local healthcare professionals;
              please indicate “brochure request” in the subject line
            </li>
            <li>
              Contact your local UOAA or WOCN (Wound, Ostomy and Continence
              Nurses Society) chapter to help raise awareness
            </li>
            <li>
              Visit our{" "}
              <span className="purpleText">
                <a href="/resources">RESOURCES</a>
              </span>
               or
              <span className="purpleText">
                <a href="/photos"> PHOTOS & VIDEOS</a>
              </span>{" "}
              page to download promotional videos and presentations - use them
              to help raise awareness (and funds!)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
