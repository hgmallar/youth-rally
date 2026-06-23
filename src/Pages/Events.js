import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Events" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <h2>YOUTH RALLY 2027</h2>
          <div className="row">
            <div className="d-flex col-md-4 align-items-center">
              <img
                className="row mx-auto poster mb-2"
                src={"/assets/images/UMSL.png"}
                alt={"UMSL logo"}
              />
            </div>
            <div className="d-flex col-md-8 align-items-center mx-auto text-center">
              <p>
                The 2027 Youth Rally will take place at the University of Missouri
                in St. Louis, MO, July 12th-17th 2027. 
                Volunteers will be expected to be present on site July 10th-17th.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h2>Pineapple's Ostomy A-wear-ness Youth Rally Fundraiser</h2>
            <div className="mx-auto text-center"><h5 className="purpleText">June 14th, 2026 1pm-4pm at The Westy in Ithaca NY</h5></div>
            <img
              className="row mx-auto poster mb-2"
              src={"/assets/images/pineapple2026.jpg"}
              alt={"Pineapple's Fundraiser Poster"}
            />
            <p className="text-center">
              Donations can be made at <span className="greenText font-weight-bold"><a href="www.youthrally.org" target="_blank"
                rel="noreferrer" className="links">www.youthrally.org</a></span> - click the Donate button and select Pineapple's Pink Party
            </p>

            {/* <h2>Golden Ticket Reboot</h2>
            <a
              href="https://youthrally.harnessgiving.org/events/3790"
              target="_blank"
              rel="noreferrer"
            ><img
                className="row mx-auto poster mb-2"
                src={"/assets/images/GoldenTicketReboot.png"}
                alt={"Golden Ticket Reboot poster"}
              />
            </a>
            <p className="text-center">
              <span className="greenText font-weight-bold"><a href="www.youthrally.org" target="_blank"
                rel="noreferrer" className="links">Golden Ticket Reboot!! | The Youth Rally</a></span></p>
            <p className="text-center">Tickets available through June 30th!</p> */}

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
