import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Applications" />

    <div id="content ">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1 text-center">
          {/* <p>
            Camper and volunteer registration application is currently
            unavailable. Registration for the 2023 Youth Rally should open by the end of
            February, 20203. The 2023 Youth Rally should take place at San Diego State University
            in San Diego, California, July 10th-15th 2023. Volunteers will be expected to be present on site July 8th-15th. The Youth Rally does not recommend you book airfare without formal
            receipt of registration acceptance/approval.
          </p>
          <p className="pt-2">
            For assistance with registration please contact Mary Beth at{" "}
            <span className="greenText">
              <a className="links" href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>
            .
          </p>
          <p className="pt-2">
            For up to date announcements, visit us on FaceBook{" "}
            <span className="purpleText">
              <a
                className="links"
                href="https://www.facebook.com/YouthRallyInc"
              >
                https://www.facebook.com/YouthRallyInc
              </a>
            </span>
            .
          </p> */}
          <h3 className="font-weight-bold"> 
            The 2024 Youth Rally will take place July 8th-13th at the University of Colorado at Boulder in Boulder, CO*.
          </h3>
          <h3 className="font-weight-bold greenText">
            Registration is now OPEN! Click on the button below to complete your 2024 Registration TODAY!
          </h3> 
          <a
            href="https://app.campdoc.com/!/dn/login?r=youthrally"
            className="btn btn-primary green-btn mb-2 mt-1"
            id="campers-btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            START 2024 Registration
          </a>
          <p className="font-weight-bold">IMPORTANT DATES: </p>
          <p>
            <span className="font-weight-bold">April 1st, 2024</span> – Volunteer
            applications due
          </p>
          <p>
            <span className="font-weight-bold">June 1st, 2024</span> – Camper
            applications due
          </p>
          <p>
            <span className="font-weight-bold">*July 6th, 2024</span> – Arrival date for all volunteers
          </p>
          <p>
            <span className="font-weight-bold">July 8th, 2024</span> – Arrival date for all campers
          </p>
            <p>
            <span className="font-weight-bold">APPLICATION PROCESS </span>Click
            on the button above. Begin the application process by selecting your
            intended REGISTRATION (Camper, Counselor, or Medical Team). Work to
            complete the HEALTH PROFILE within. Applications will not be
            considered for approval until the HEALTH PROFILE is 100% complete.
          </p>
          <p>
            Once completed, your registration will go into an internal review
            process (we are 100% staffed by volunteers so this can take time).
            You may request a rushed approval by contacting{" "}
            <span className="greenText">
              <a className="links" href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>{" "}
            – we will do our best to accommodate these requests. Notification of
            acceptance will be sent via email to the email(s) listed as “Users”
            of the participant’s profile.
          </p>
          <p>
            <span className="font-weight-bold">SPONSORSHIP </span>is available
            for all campers in need. Should you need assistance with the registration costs due in 2023 please contact{" "}
            <span className="greenText">
              <a className="links" href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>.
          </p>
          <p className="font-weight-bold">Questions about the application process? </p>
          <p>Email <span className="greenText">
              <a className="links" href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span> or call 607-592-3728 (ET)</p>
        </div>
      </div>
    </div>
  </Fragment>
);
