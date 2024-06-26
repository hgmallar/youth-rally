import React, { Fragment } from "react";

import { Header } from "../Elements";

export default () => (
  <Fragment>
    <Header title="Get Involved" />

    <div id="content">
      <div className="row pt-2">
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
              and families to help sponsor a child to come to camp.
            </li>
            <li>
              Host a fundraiser (creativity is encouraged!) to support ongoing
              Youth Rally sponsorship and programming.
            </li>
            <li>
              Contact{" "}
              <span className="purpleText">
                <a href="mailto:ABS626@aol.com" className="links">Abby Ryan</a>
              </span>{" "}
              for brochures to distribute to local healthcare professionals;
              please indicate “brochure request” in the subject line.
            </li>
            <li>
              Contact your local UOAA or WOCN (Wound, Ostomy and Continence
              Nurses Society) chapter to help raise awareness.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);
