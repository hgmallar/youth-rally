import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Cost" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1">
          <h2>HOW MUCH DOES IT COST?</h2>
          <h3>
            There are two costs associated with Youth Rally Participation:
          </h3>
          <ol>
            <li>
              <span className="font-weight-bold">Registration.</span>  Registration
              cost for all campers is $500 and $350 for our volunteers.  We ask
              for $100 upfront with all applications to hold your spot, but also
              to help us with early costs associated with planning such a grand
              event.  Registration costs cover all room/board, meals,
              activities, and transportation throughout the week.  The Youth
              Rally encourages individual fundraising to support both
              registration and travel costs. Sponsorship is available for ALL
              campers who need it (there is a page within the application that
              addresses sponsorship needs/requests)!
            </li>
            <li>
              <span className="font-weight-bold">Travel.</span>  This refers to the
              cost it takes to get the participant to our location each year -
              that varies for everyone!  Again, the Youth Rally encourages
              individual fundraising and sponsorship is available for ALL
              campers who need it!
            </li>
          </ol>
        </div>
      </div>
    </div>
  </Fragment>
);
