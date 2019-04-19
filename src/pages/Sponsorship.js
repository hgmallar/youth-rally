import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />
    
    <Header title="Sponsorship" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2>
            <span className="font-weight-bold greenText">
              SPONSORSHIP is available for ALL CAMPERS in need!
            </span>
          </h2>

          <p>
            Thanks to the generous efforts of Youth Rally volunteers, donors,
            and partners, in over 30 years of existence no child has ever been
            turned away due to lack of financial resources. The sponsorship
            application form is embedded in the camper application. Simply
            complete the application and state your need as prompted for
            registration ($425) and/or travel (variable) assistance. No coupon
            code required.
          </p>

          <p>
            Those requesting sponsorship for travel costs should complete their
            application as soon as possible to avoid costly, last-minute flight
            arrangements. Those who receive sponsorship for travel costs will be
            required to book airfare through the Youth Rally travel agent -
            contact information to be provided with notification of application
            acceptance.
          </p>

          <p>
            <span className="font-weight-bold">Note:</span> all applicants are
            subject to a $75 application fee. This helps the Youth Rally better
            plan for program and housing purposes.  If for some reason you
            absolutely cannot afford this payment please contact{" "}
            <a
              href="mailto:info@youthrally.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="purpleText">Emily Mallar</span>
            </a>
            .
          </p>

          <img
            src="/assets/images/soccer.jpg"
            className="mx-auto d-block"
            alt="campers playing soccer"
          />

          <p>
            <span className="purpleText font-weight-bold">
              HOW TO DO SOME FUNDRAISING ON YOUR OWN - 
            </span>
            The Youth Rally strongly encourages all participants to do some bit
            of fundraising on their own. There are many local/regional charities
            (Kiwanis, Rotary, church groups, WOCN affiliates, Hospitals,{" "}
            <a href="https://www.ostomy.org/ASGs_with_Websites.html/">
              UOAA affilliates
            </a>
            , etc.) that set aside funds for this very thing.
          </p>

          <p>
            Many campers and volunteers have additional success through personal
            fundraising sites. The Youth Rally is already establised with{" "}
            <span className="font-weight-bold">FirstGiving</span>.{" "}
            <span className="font-weight-bold greenText">
              <a href="http://info.firstgiving.com/individuals/create-a-page/">
                Click here
              </a>
            </span>
             to create your own grassroots fundraising page with FirstGiving
            today! Just set up your page, tell your story, and share it with
            family and friends. Funds raised will be put towards your
            registration/travel balance. Any funds raised above your own
            registration/travel costs will go to support another camper in need.
          </p>

          <p className="font-weight-bold purpleText">
            HOW DO I SPONSOR A CAMPER (and/or a volunteer)?  There are two ways:
          </p>
          <ol>
            <li>
              <span className="font-weight-bold greenText">SEND A CHECK </span>
              Please indicate in a memo if you intend to sponsor a specific
              camper, volunteer, or program activity. Checks should be made out
              to the "
              <span className="font-weight-bold font-italic">
                Youth Rally Committee, Inc.
              </span>
              " and mailed to:
              <p className="text-center purpleText">Youth Rally Committee, Inc</p>
              <p className="text-center purpleText">C/O Mary Beth Akers</p>
              <p className="text-center purpleText">949 Chestnut Oak Dr</p>
              <p className="text-center purpleText">St. Charles, MO 63303</p>
            </li>
            <li>
              <span className="font-weight-bold greenText">
                DONATE USING YOUR CREDIT CARD OR PAYPAL ACCOUNT{" "}
              </span>
              Credit Card and PayPal donations can be made via the link below.
              If sponsoring a child or volunteer, please indicate who upon
              "checkout".
              <div className="row justify-content-center">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="PWWKYKVHHVD7E"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                  />
                  <img
                    alt="paypal"
                    className="mx-auto d-block"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  />
                </form>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);
