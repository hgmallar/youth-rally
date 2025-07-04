import React, { Fragment } from "react";

import { Header } from "./../Elements";

import { Button } from "react-bootstrap";

export default () => (
  <Fragment>
    <Header title="Events" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <div>
            <h2>YOUTH RALLY 2025</h2>
            <p>
              The 2025 Youth Rally will take place in San Diego, CA, July 14th-19th 2025.
            </p>
            <p>
              Volunteers will be expected to be present on site July 12th-19th.
            </p>
            <h2>Pineapple's Ostomy A-wear-ness Youth Rally Fundraiser</h2>
            <a
                href="https://youthrally.harnessgiving.org/events/1793"
                target="_blank"
                rel="noreferrer"
                ><img
              className="row mx-auto poster mb-2"
              src={"/assets/images/pineapple2025.jpg"}
              alt={"Pineapple's Fundraiser Poster"}
            />
            </a>
            <p className="text-center">
              Unable to attend but wish to contribute to support camper travel
              and registration costs?
            </p>
            <div className="text-center">
            <a
                href="https://youthrally.harnessgiving.org/events/1793"
                target="_blank"
                rel="noreferrer"
                ><Button
                className="btn mx-auto purpleButton"
              >
                Give
              </Button>
              </a>
            </div>
            {/* <h2>YOUTH RALLY 2023</h2>
            <p>
              The 2023 Youth Rally will take place at San Diego State University
              in San Diego, California, July 10th-15th 2023.
            </p>
            <p>
              Volunteers will be expected to be present on site July 8th-15th.
            </p> */}
          </div>
          {/* <div>
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
        <p className="row">Mary Beth & Emily</p>  */}
        </div>
      </div>
    </div>
  </Fragment>
);
