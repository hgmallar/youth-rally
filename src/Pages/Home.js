import React, { Fragment } from "react";
//import { Card, Button } from "react-bootstrap";
import Photograph from "./../Elements/Photograph";

export default () => (
  <Fragment>
    <div id="content">
      <div className="row justify-content-center mx-auto text-center">
        <div className="row mx-2 flex-column align-items-center">
          {/* <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/group_left_2024_sm.jpg"}
              imageAlt={"youth_rally_kid_group1"}
            />
          </div> */}
          {/* <div>
            <img src="/assets/images/goldenticket/goldenticket.png" alt="golden_ticket" style={{ maxWidth: "300px", height: "auto" }} />
            <h5>YOUTH RALLY GOLDEN TICKET FUNDRAISER</h5>
            <div className="row justify-content-center">
              <a
                href="https://youthrally.harnessgiving.org/events/3443"
                className="btn btn-primary gold-btn mb-2 mt-1"
                id="campers-btn"
                target="_blank"
                rel="noreferrer noopener"
              >
                CLICK HERE TO PURCHASE YOUR GOLDEN TICKETS TODAY
              </a>
            </div>
            <p>This is your chance to help us raise necessary funds for 2026 Camper Sponsorship and be entered to win some cool prizes! Start your holiday shopping early this year and DONATE TODAY for your chance to win!</p>
            <p>How it works - Choose which prize to buy tickets for and make your donation accordingly. Limited tickets are available for each prize.</p>
            <ul>
              <li><span className="purpleText font-weight-bold">$5 Golden Ticket </span>– for a chance to win 2 custom-painted Youth Rally skateboards.</li>
              <li><span className="purpleText font-weight-bold">$35 Golden Ticket </span>– for a chance to win one of 2 signed Taylor Swift collectibles</li>
              <li><span className="purpleText font-weight-bold">$100 Golden Ticket </span>– for a chance to win one of 4 vacation packages</li>
            </ul>
            <p><a className="links" href="/goldenticket"><span className="greenText font-weight-bold">
              CLICK HERE
            </span></a> for more details and prize packages!</p>
            <p>Winning tickets will be drawn December 5th, 2025</p>
          </div> */}
          <div className="row mx-2 flex-row justify-content-center">
            <div className="col-md-6">
              <Photograph
                imageSource={"/assets/images/group_2025_sm.JPG"}
                imageAlt={"youth_rally_kid_group2"}
              />
            </div>
            <div className="col-md-6">
              <div>
                <video autoPlay muted loop playsInline controls>
                  <source
                    src="/assets/images/bothvideos.mp4"
                    type="video/mp4"
                    className="my-auto"
                  />
                </video>
                <p className="mb-2 credit purpleText">Video Credits: <a className="links" target="_blank" href="https://maddiemainphotofilm.mypixieset.com/" ><strong className="purpleText links">Maddie Main Photography + Journal Fims</strong></a></p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 d-none d-md-block">
            <Photograph
              imageSource={"/assets/images/group_right_2024_sm.jpg"}
              imageAlt={"youth_rally_kid_group3"}
            />
          </div> */}

        </div>
      </div>
      <div className="row justify-content-center mx-auto text-center">
        <h4 className="font-weight-bold">
          COMING SOON - 2026 Camper and Volunteer Applications!
        </h4>
        <h5 className="font-weight-bold">
        The 2026 Youth Rally will take place at the University of Colorado
          in Boulder, CO from July 6th-11th.</h5>
        <h5 className="font-weight-bold">
          Volunteers will be expected to be present on site July 4th-11th.
        </h5>
        {/* <h3 className="font-weight-bold greenText mx-2">
          Registration for the 2024 Youth Rally is now closed. Check back in January/February to register for the 2025 Youth Rally.
        </h3>  */}
        {/* <h3 className="font-weight-bold greenText mx-auto text-center">
            Registration is now OPEN! Click on the button below to complete your
            2025 Registration TODAY!
          </h3>  */}

      </div>
      {/* <div className="row justify-content-center mx-auto text-center">
          <a
            href="http://app.campdoc.com/register/youthrally"
            className="btn btn-primary green-btn mb-2 mt-1"
            id="campers-btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            START 2025 Registration
          </a>
        </div> */}
      <div className="row justify-content-center">
        <a
          href="https://youthrally.smugmug.com/Youth-Rally-2025-Photos-1"
          className="btn btn-primary green-btn mb-2 mt-1"
          id="campers-btn"
          target="_blank"
          rel="noreferrer noopener"
        >
          2025 Youth Rally Photos
        </a>
      </div>
    </div>

    <div className="text-center p-2 banner">
      <h1 className="display-4 mission">Our Mission</h1>
      <p className="lead mission">
        To provide an environment for adolescents living with conditions of the
        bowel and bladder that encourages self-confidence and independent
        living.
      </p>
    </div>
  </Fragment>
);
