import React, { Fragment } from "react";

import { Header, TwoColTextPhoto } from "./../Elements/";

export default () => (
  <Fragment>
    <Header title="Counselors" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1">
          <h2>Who are the Youth Rally Counselors?</h2>
          <TwoColTextPhoto
            content={[
              {
                list: [],
                text:
                  "Youth Rally Counselors are adults of all ages (minimum age to apply is 19), most of whom live with the same bowel and/or bladder conditions as the camper participants. Through their own life experiences with medical and surgical challenges, counselors and CITs have first-hand knowledge of what the campers are or may be facing and can provide the needed support to promote self-confidence and independence. They are leaders and mentors.  Many Youth Rally Counselors/CITs were once campers themselves.",
              },
              {
                list: [],
                text:
                  "Youth Rally counselors have a number of responsibilities throughout the week including:",
              },
              {
                list: [
                  "Facilitation of peer discussion and medical diagnosis groups",
                  "Coordination/assistance with Youth Rally programming",
                  "Enforcement of all Youth Rally Policies and Camper Code of Conduct",
                  "Participation in and planning of Youth Rally activities",
                  "Assisting Nurses as needed and as asked",
                  "Ambassadors of FUN!",
                ],
                text: "",
              },
            ]}
            src="/assets/images/Counselors.jpg"
            alt="counselors"
          />
          <h2>First time Counselors</h2>
          <p className="mb-0">
            All first-time Youth Rally Counselors will participate in an on-site
            Counselor-in-Training (CIT) mentor-ship program - an extension of
            the on-site orientation that will continue throughout the week while
            at camp with specific focus on leadership. Read this{" "}
            <span className="purpleText">
              <a href="http://youthrally.org/callforleaders/" className="links">
                call for leaders
              </a>
            </span>{" "}
            written by YRC President and CEO, Paul Hastings.
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);
