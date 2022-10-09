import React, { Fragment } from "react";

import { Header, ParaWithHeader } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Events" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <div>
            <h2>YOUTH RALLY 2023</h2>
            <p>
              The 2023 Youth Rally should take place at San Diego State
              University in San Diego, California, July 10th-15th 2023.
            </p>
            <p>
              Volunteers will be expected to be present on site July 8th-15th.
            </p>
          </div>
          <div>
            <ParaWithHeader
              head="CAMPERS:"
              content="As always, sponsorship is available for those who may require assistance – there is a page within the registration that addresses any sponsorship need."
            />
            <ParaWithHeader
              head="FIRST TIME ON-SITE COUNSELORS:"
              content="If you have not yet volunteered as a counselor on-site, please consider yourself a 1st-time volunteer when filling out your registration."
            />
            <ParaWithHeader
              head="EXPECTATIONS FOR ALL COUNSELORS, NURSES & VOLUNTEERS:"
              content="
              It is our expectation that you will be present and available for all Youth Rally 202e sessions, including orientation/set up on the 8th and 9th. If you have ideas of particular sessions you would like to facilitate or see included, please indicate that within your registration."
            />
            <p>
              <span className="h5Font">2023 REGISTRATION FEES </span> – includes
              all room, board, meals, activities, and transportation once you
              arrive in San Diego and for the duration of camp. Additional costs
              associated with a stay beyond the 15th will be the responsibility
              of the party incurring them.
            </p>
            <ul>
              <li>
                Campers - $500 (sponsorship is available – complete the
                sponsorship page in your 2023 registration)
              </li>
              <li>Volunteers - $250</li>
            </ul>
            <p className="font-weight-bold">SEE YOU IN JULY!</p>
          </div>
        </div>
        <p className="row">Mary Beth & Emily</p>
      </div>
    </div>
  </Fragment>
);
