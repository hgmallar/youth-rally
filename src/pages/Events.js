import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />

    <Header title="Events" />

    <div id="events-page">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row d-block">
            <h2 className="text-center">
              June 9th, 2019 Pineapple's 2019 a'WEAR'ness Event
            </h2>
            <p>
              Formally Pineapple's Cruise for Crohn's & Colitis, this year's
              A"WEAR"NESS event will happen again at <a href="https://www.thewestyisabar.com/">The Westy</a> (516 W State St, Ithaca, New York). The Westy's
              opening the doors to kids for this event (they might even put out
              the water table!!!) on June 9th from 1PM - 4PM. </p>
              <p className="font-weight-bold">$20 ticket price at the door includes:</p>
              <ul>
              <li>Live music: Notorious Stringbusters </li>
              <li>Catered snacks: Red's Place </li>
              <li>Draft beer: Bacchus Brewing (+ cash bar OPEN) </li>
              <li>Infamous Silent Auction </li>
              </ul>
              <p>Kids 12 & under - $10 </p>
              <p>Kids 4 & under - FREE </p>
              <p>Once again, all proceeds will benefit the 2019 Youth Rally - a week
              long summer camp for youth ages 11-17 living with congenital birth
              defects, chronic illness, and others who have been victims of
              physical trauma, many of whom WEAR ostomies or other surgical
              openings as a result of life-saving/sustaining surgery. </p>
              <p>What each Youth Rally participant shares in common is some
              disruption/diversion to their bowel and/or bladder system(s) and a
              yearning to feel accepted among their peers. The Youth Rally is
              particularly unique in that the volunteer counselors live with the
              same conditions as the youth participants - (including Ithaca's
              favorite Pineapple, Ostomate extraordinaire!!!) creating an
              environment of mentor-ship and self-advocacy where these children
              of varying physical abilities gain independence and self-esteem
              while having fun and without fear of being ostracized for their
              medical/physical differences. </p>
              <p>Mark your calendar for this Sunday FUNday and JOIN US! </p>
            <h2 className="text-center">
              July 8th - 13th, 2019 Youth Rally in Seattle, WA
            </h2>
          </div>
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
            <h2 className="text-center">Pineapple's 2018 a'WEAR'ness Event</h2>
            <img
              className="mx-auto d-block w-25 h-25"
              src="/assets/images/pineapple_event_18.jpg"
              alt="pineapple's fundraising flyer"
            />
            <p className="text-center">
              Formerly "Pineapple's Cruise for Crohn's and Colitis" this is a
              day of celebration for all those who "wear" ostomies and those
              living with conditions that may someday lead to bowel/bladder
              diversion surgery!  All proceeds to benefit{" "}
              <span className="font-weight-bold">2018 Youth Rally</span>{" "}
              programming and camper sponsorship!
            </p>
            <p className="text-center">
              <span className="font-weight-bold">
                Included in your ticket purchase :
              </span>
              food catered by{" "}
              <span className="greenText">
                <a href="https://www.northstarpub.com/">NORTHSTAR HOUSE</a>
              </span>
              , complimentary draft beer (donated by The Westy), cash bar, live
              music by the{" "}
              <span className="greenText">
                <a href="https://www.facebook.com/pages/The-Notorious-String-Busters/119800364735399/">
                  NOTORIOUS STRINGBUSTERS
                </a>
              </span>
              , and access to an amazing SILENT AUCTION (that'll end ~3:30pm)!
            </p>
            <p className="text-center">Adults: $20</p>
            <p className="text-center">Kids* (12 and under): $10</p>
            <p className="text-center">*kids under 4 = FREE!</p>
            <p className="text-center">
              Join us Sunday, June 24th at{" "}
              <span className="greenText">
                <a href="https://www.thewestyisabar.com/">"The Westy"</a>
              </span>
              , 516 W. State St. in Ithaca, NY anytime from 1pm-4pm!! (sadly
              kids must vacate when The Westy opens its doors to the public at
              4, but adults are welcome to stay!)
            </p>

            <p className="text-center font-weight-bold">
              Can't make the event, but wish to contribute? Donate here:
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <p className="text-center">
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
            <p>
              <span className="font-weight-bold">
                Special thanks to this years' Silent Auction donors to date:
              </span>
              <a href="https://thewestyisabar.com">The Westy</a>,{" "}
              <a href="https://www.northstarpub.com/">NorthStar House</a>,
              Elaina Rogers,{" "}
              <a href="https://www.facebook.com/TheRhineHouse/">
                The Rhine House
              </a>
              ,{" "}
              <a href="https://www.latourelle.com//">
                LaTourelle Hotel & Bistro
              </a>
              ,{" "}
              <a href="https://www.facebook.com/frenchiesbijoux/">
                Frenchie's Bijoux
              </a>
              , <a href="https://www.redsplaceithaca.com/">Red's Place</a>,{" "}
              <a href="https://just-a-taste.com/">Just-A-Taste</a>,
              <a href="https://www.sciencenter.org/">The Ithaca Sciencenter</a>,{" "}
              <a href="https://www.maxies.com/index2.html">
                Maxie's Supper Club & Oyster Bar
              </a>
              , <a href="https://properpuss.com//">The Proper Puss</a>,{" "}
              <a href="https://emmysorganics.com">Emmy's Organics</a>,{" "}
              <a href="https://www.hasbro.com/en-us/">Hasbro</a>,{" "}
              <a href="https://www.fortyweightcoffee.com/">
                Forty Weight Coffee Roasaters
              </a>
              , <a href="https://www.cnytubs.com/">CNY Tubs</a>,{" "}
              <a href="https://www.agavarestaurant.com/">Agava Restaurant</a>,{" "}
              <a href="https://www.nypilates.info/">
                The Pilates Room & Antigravity Studio
              </a>
              ,
              <a href="https://www.islandhealthfitness.com/">
                Island Health & Fitness
              </a>
              , <a href="https://www.huntwines.com/">Hunt Country Vineyards</a>,{" "}
              <a href="https://www.twogoatsbrewing.com/">Two Goats Brewing</a>,{" "}
              <a href="https://www.luckyharebrewing.com/">Lucky Hare Brewing</a>
              ,{" "}
              <a href="https://fingerlakesdistilling.com/">
                Finger Lakes Distilling
              </a>
              ,{" "}
              <a href="https://www.bacchusbrewing.com/">
                Bacchus Brewing Company
              </a>
              , <a href="https://atlasbowl.com/">Atlas Bowl</a>,{" "}
              <a href="https://eventbritesites.com/tf/dspshows">
                Dan Smalls Presents
              </a>
              , <a href="https://gimmecoffee.com/">Gimme! Coffee</a>,{" "}
              <a href="https://www.rasaspa.com/">Rasa Spa</a>,{" "}
              <a href="https://www.elaangreenfield.com/">
                Elaan Greenfield Designs
              </a>
              ,{" "}
              <a href="https://www.fingerlakesciderhouse.com/">
                The Finger Lakes Cider House
              </a>
              , <a href="https://www.thewatershedithaca.com/">The Watershed</a>,
              and
              <a href="https://www.tiogadowns.com//">
                Tioga Downs Casion Resort
              </a>
            </p>
          </div>

          <div className="row mx-auto d-block">
            <h2 className="text-center">2018 PAINT FOR A CAUSE</h2>
            <a href="https://www.musepaintbar.com/events/55418">
              <img
                className="mx-auto d-block"
                src="/assets/images/paint_for_a_cause.jpg"
                alt="kid painting"
              />
            </a>
            <p className="text-center">
              Join host - and Youth Rally WOC Nurse - Rachelle Sideris for the
              2nd annual Paint and Sip Fundraiser to support Youth Rally camper
              sponsorship. $45 ticket price includes a guided lesson (from a
              professional artist), all painting materials as well as
              complementary food and non-alcoholic beverages (cash bar is open).
              Your creation is yours to take home and proudly display! Come and
              have fun while supporting an amazing cause!
            </p>
            <p className="text-center">
              ***FREE PARKING, KID & FAMILY FRIENDLY***
            </p>
            <p className="text-center">Date: Saturday, April 21st, 2018</p>
            <p className="text-center">
              Time: 11:15am-2:30pm (bar opens at 11:30am)
            </p>
            <p className="text-center">
              Location: Muse Paintbar, 837 Franklin Avenue, Garden City, NY,
              11530
            </p>

            <img
              className="mx-auto d-block"
              src="/assets/images/ostomy_awareness_17.jpg"
              alt="ostomy awareness day"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
