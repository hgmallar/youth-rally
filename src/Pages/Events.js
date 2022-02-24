import React, { Fragment } from "react";

import { Header, ParaWithHeader } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Events" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <div>
            <h2>YOUTH RALLY 2022</h2>
            <p>
              Youth Rally will be in a virtual setting again in 2022. While we’d
              much rather be on-site, we’re excited to have the additional
              planning time in 2022.
            </p>
            <p>
              Thank you for your understanding and continued support. We
              recognize that this is a trying time for many. Given the
              availability of COVID-19 vaccine at this point (in particular for
              adolescents), the fragility of both our camper and volunteer
              populations, the continued restrictions on group gatherings, and
              the crisis that many of our communities currently face, we know
              this is the responsible choice.
            </p>
          </div>
          <div className="mx-auto">
            <h2 className="text-center">
              THE 2022 YOUTH RALLY WILL TAKE PLACE VIRTUALLY JULY 13th-16th
            </h2>
            <h5 className="text-center">
              Volunteers should plan to hold July 12th for a mandatory virtual
              orientation
            </h5>
          </div>
          <div>
            <ParaWithHeader
              head="CAMPERS:"
              content="As always, sponsorship is available for those who may require assistance – there is a page within the application that addresses any sponsorship need."
            />
            <ParaWithHeader
              head="FIRST TIME COUNSELORS (CITs):"
              content="Last year, with little advanced notice of a virtual setting, we
              invited all first-time applicants to join us as “observers,”
              knowing they would have to re-apply as “first time counselors” in
              2021. This year we intend to re-instate a more traditional
              “Counselor in Training (CIT)” leadership program for our
              first-time applicants. We anticipate the applications to be many
              and the open spots to be few and appreciate your understanding of
              the difficult decisions that need to be made in order to optimize
              the experience for our campers."
            />
            <ParaWithHeader
              head="EXPECTATIONS FOR ALL COUNSELORS, NURSES & VOLUNTEERS:"
              content="
              It is our expectation that you will be present and available for
              all Youth Rally 2022 sessions, including orientation on the 12th
              of July. Please plan to be available July 12th-16th 3PM-10PM EST
              if you intend to volunteer. If you have ideas of particular
              sessions you would like to facilitate or see included, please
              indicate that within your application."
            />
            <p>
              <span className="h5Font">2022 REGISTRATION FEES</span> – includes
              all materials and supplies needed for 2022 activities and events,
              including a signature tee and refillable water bottle:
            </p>
            <ul>
              <li>
                Campers - $100 (sponsorship is available – complete the
                sponsorship page in your 2022 registration)
              </li>
              <li>Volunteers - $50</li>
            </ul>
            <p className="font-weight-bold">SEE YOU IN JULY!</p>
          </div>
        </div>
        <p className="row">Mary Beth & Emily</p>
      </div>
    </div>
  </Fragment>
);
