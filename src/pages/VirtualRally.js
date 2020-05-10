import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Virtual Rally" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <h2 className="mx-auto">VIRTUAL RALLY COMING IN 2020!!!</h2>
          <p>
            We are sad to announce that the 2020 Youth Rally on site in San
            Diego has been CANCELED. That said, the 2020 Youth Rally will still
            happen in a virtual capacity July 20th-25th, 2020.
          </p>
          <h5>
            FOR OUR <span className="underline">CAMPERS</span>:
          </h5>
          <p>
            We will be re-opening the online registration system very soon –
            visit{" "}
            <a className="links" href="/applications">
              www.youthrally.org/applications
            </a>{" "}
            to start or complete yours - the system should re-open this week!
          </p>
          <h5>
            FOR OUR <span className="underline">FIRST-TIME COUNSELOR</span>{" "}
            APPLICANTS:
          </h5>
          <p>
            Our team will be evaluating the completed applications and will
            notify you of your acceptance to participate. Those of you invited
            to participate will still need to re-apply as a first-time counselor
            in future years. All of you can expect additional communication from
            our counselor leadership team in the days to come.
          </p>
          <h5>
            FOR <span className="underline">RETURNING COUNSELORS</span> AND{" "}
            <span className="underline">ALL NURSES</span>:
          </h5>
          <p>
            We will be re-opening the registration for you to complete your
            application in the coming week. Your roles and responsibilities by
            and large will be considerably less this year. If you are interested
            in supporting the program team in a particular way (for example:
            you’d like to host an online session on peristeen enemas) please
            contact{" "}
            <a className="links" href="mailto:info@youthrally.org">
              info@youthrally.org
            </a>
            . We may be contacting some of you specifically to garner your
            interest in facilitating events throughout the week.
          </p>
          <h5>FOR ALL PROSPECTIVE PARTICIPANTS:</h5>
          <ul>
            <li>
              <span className="font-weight-bold">2020 Registration Cost</span>:
              2020 Registration will be $50 for all participants, due with
              application.
              <ul>
                <li>
                  <span className="font-weight-bold">
                    Sponsorship for Campers
                  </span>
                  : Financial assistance is available for all campers in need.
                  If your camper requires sponsorship, start your registration
                  by creating a profile in our application system, then contact{" "}
                  <a className="links" href="mailto:Marybeth@youthrally.org">
                    Marybeth@youthrally.org
                  </a>{" "}
                  for more information.
                </li>
                <li>
                  <span className="font-weight-bold">Reimbursement</span>: Those
                  of you who have already paid the previous $100 application fee
                  (or perhaps more with add-ons and registration) – you will be
                  reimbursed all but the 2020 $50 registration cost. If you wish
                  to un-register entirely you can do so through CampDoc and we
                  will reimburse your current registration in its entirety. Of
                  course if you wish to donate more you may do so! Visit{" "}
                  <a className="links" href="/give">
                    www.youthrally.org/give
                  </a>{" "}
                  to view the various ways you can donate. Though we remain a
                  small non-profit with no paid employees, we still have and
                  will incur costs associated with registration and other
                  virtual application fees, conferences attended, promotional
                  materials (brochures) and site visits (for future Rallys!).
                </li>
                <li>
                  <span className="font-weight-bold">Funds Raised</span>: For
                  those of you who have chosen to fund-raise for the 2020 Youth
                  Rally through Firstgiving and other online platforms, you can
                  choose to put those dollars towards 2020 camper sponsorship
                  and other operating costs, or we can defer those funds to
                  cover your registration and travel in future years. Contact{" "}
                  <a className="links" href="mailto:Marybeth@youthrally.org">
                    Marybeth@youthrally.org
                  </a>{" "}
                  to direct how you wish your funds be distributed.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-weight-bold">2020 Tee shirt</span>: All
              participants will receive a complimentary 2020 Youth Rally
              tee-shirt. No additional 2020 gear will be available for purchase
              (outside what is already available on our website) – make sure
              your tee-shirt size and address for shipping is appropriately
              updated in your online Health Profile.
            </li>
            <li>
              <span className="font-weight-bold">Application Deadline</span>:
              All applications must be completed by June 1st for consideration
              for the 2020 (Virtual) Youth Rally. We understand this is a tight
              turnaround, but it is necessary as there is much planning that
              will need to happen and we need to have an idea of who our
              population is in order to best align programs and activities. The
              following pages of the Health Profile {""}
              <span className="underline">will not</span> be required for 2020:
              <ul>
                <li>Insurance Information</li>
                <li>Medications</li>
                <li>Allergies</li>
                <li>Medical Release (typically required for campers only)</li>
              </ul>
            </li>
            <li>
              <span className="font-weight-bold">
                What about the talent show?
              </span>{" "}
              We know you’re all wondering. As best we can we will include all
              previously planned 2020 educational and recreational events –
              including the talent show!! Who knows, we might even dedicate some
              time to allow some of our counselors to show off too!
            </li>
            <li>
              <span className="font-weight-bold">Save the Date</span>: Whether
              you join us in 2020 or not, mark your calendars for the 2021 Youth
              Rally in Boulder, Colorado, July 12th-17th.
            </li>
          </ul>
          <p>
            This is NEW for all of us. Our current program/leadership team holds
            full-time jobs in Hospital Administration, Nursing, Education,
            Public Health and Government Contracting – needless to say they’ve
            been keeping plenty busy during the pandemic. That said we are
            collectively committed to this organization and to making sure there
            is an outlet and resources available to the community we serve.{" "}
          </p>
          <p>
            We thank you for your patience. We know you will have many more
            questions – so do we!!! We will be working hard to get you more
            information in the coming weeks. For now – watch our website and
            look for the applications to re-open this week!
          </p>
          <p>SEE YOU IN JULY!</p>
        </div>
        <p className="row">Mary Beth & Emily</p>
      </div>
    </div>
  </Fragment>
);
