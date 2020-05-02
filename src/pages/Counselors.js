import React from "react";

import Header from "./../components/Header";
import Photograph from "./../components/Photograph";

export default () => (
  <div>
    <Header title="Counselors" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1">
          <h2>Who are the Youth Rally Counselors?</h2>
          <div className="row">
            <div className="col-md-7">
              <p>
                Youth Rally Counselors are adults of all ages (minimum age to
                apply is 19), most of whom live with the same bowel and/or
                bladder conditions as the camper participants. Through their own
                life experiences with medical and surgical challenges,
                counselors and CITs have first-hand knowledge of what the
                campers are or may be facing and can provide the needed support
                to promote self-confidence and independence. They are leaders
                and mentors.  Many Youth Rally Counselors/CITs were once campers
                themselves.
              </p>

              <p>
                Youth Rally counselors have a number of responsibilities
                throughout the week including:
              </p>
              <ul>
                <li>
                  Facilitation of peer discussion and medical diagnosis groups
                </li>
                <li>Coordination/assistance with Youth Rally programming</li>
                <li>
                  Enforcement of all Youth Rally Policies and Camper Code of
                  Conduct
                </li>
                <li>Participation in and planning of Youth Rally activities</li>
                <li>Assisting Nurses as needed and as asked</li>
                <li>Ambassadors of FUN!</li>
              </ul>
            </div>
            <div className="col-md-5">
              <Photograph
                imageSource="/assets/images/Counselors.jpg"
                imageAlt="counselors"
              />
            </div>
          </div>
          <div className="col-md-12">
            <h2>First time Counselors</h2>
            <p className="mb-0">
              All first-time Youth Rally Counselors will participate in an
              on-site Counselor-in-Training (CIT) mentor-ship program - an
              extension of the on-site orientation that will continue throughout
              the week while at camp with specific focus on leadership. Read
              this{" "}
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
    </div>
  </div>
);
