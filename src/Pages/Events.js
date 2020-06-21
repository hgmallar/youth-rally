import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Events" />

    <div id="events-page">
      <div className="row pt-2 pb-1">
        <div className="col-md-11 mx-auto">
          <h2 className="text-center">
            July 20th - 25th, 2020 Virtual Youth Rally
          </h2>
          <h2 className="text-center">
            July 12th-17th, 2021 Youth Rally in Boulder, Colorado
          </h2>
          <hr />
          <div className="row mx-auto">
            <div id="event-contact">
              <h2 className="purpleText">
                INTERESTED IN HAVING YOUR EVENT(S) SHOWCASED HERE?
              </h2>
              <p>
                Contact:{" "}
                <span className="greenText">
                  <a href="mailto:info@youthrally.org">Emily</a>
                </span>{" "}
                at{" "}
                <span className="greenText">
                  <a href="mailto:info@youthrally.org">info@youthrally.org</a>
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="row mx-auto d-block">
            <h2 className="purpleText">PAST EVENTS:</h2>
            <div className="col-md-12 text-center">
              <h2 className="text-center">
                June 9th, 2019 Pineapple's 2019 a'WEAR'ness Event
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 mx-2">
                <p>
                  Formally Pineapple's Cruise for Crohn's & Colitis, this year's
                  A"WEAR"NESS event will happen again at{" "}
                  <a href="https://www.thewestyisabar.com/">The Westy</a> (516 W
                  State St, Ithaca, New York). The Westy's opening the doors to
                  kids for this event (they might even put out the water
                  table!!!) on June 9th from 1PM - 4PM.{" "}
                </p>
                <p className="font-weight-bold">
                  $20 ticket price at the door includes:
                </p>
                <ul>
                  <li>Live music: Notorious Stringbusters </li>
                  <li>Catered snacks: Red's Place </li>
                  <li>Draft beer: Bacchus Brewing (+ cash bar OPEN) </li>
                  <li>Infamous Silent Auction </li>
                </ul>
                <p>Kids 12 & under - $10 </p>
                <p>Kids 4 & under - FREE </p>
                <p>
                  Once again, all proceeds will benefit the 2019 Youth Rally - a
                  week long summer camp for youth ages 11-17 living with
                  congenital birth defects, chronic illness, and others who have
                  been victims of physical trauma, many of whom WEAR ostomies or
                  other surgical openings as a result of life-saving/sustaining
                  surgery.{" "}
                </p>
                <p>
                  What each Youth Rally participant shares in common is some
                  disruption/diversion to their bowel and/or bladder system(s)
                  and a yearning to feel accepted among their peers. The Youth
                  Rally is particularly unique in that the volunteer counselors
                  live with the same conditions as the youth participants -
                  (including Ithaca's favorite Pineapple, Ostomate
                  extraordinaire!!!) creating an environment of mentor-ship and
                  self-advocacy where these children of varying physical
                  abilities gain independence and self-esteem while having fun
                  and without fear of being ostracized for their
                  medical/physical differences.{" "}
                </p>
                <p>Mark your calendar for this Sunday FUNday and JOIN US! </p>
                <p className="text-center font-weight-bold mb-0">
                  Can't make the event, but wish to contribute? Donate here:
                </p>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <p className="text-center mb-0">
                    <input name="cmd" type="hidden" value="_donations" />
                    <input
                      name="business"
                      type="hidden"
                      value="info@youthrally.org"
                    />
                    <input name="lc" type="hidden" value="US" />
                    <input
                      name="item_name"
                      type="hidden"
                      value="The Youth Rally Committee, Inc."
                    />
                    <input name="no_note" type="hidden" value="0" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input
                      name="bn"
                      type="hidden"
                      value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest"
                    />
                    <input
                      alt="PayPal - The safer, easier way to pay online!"
                      name="submit"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                      type="image"
                    />
                  </p>
                </form>
              </div>
              <div className="col-md-5 text-center">
                <img
                  className="mb-2 flyer-image"
                  src="/assets/images/aWEARness_Web.jpg"
                  alt="pineapple's fundraising flyer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
