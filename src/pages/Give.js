import React, { Fragment } from "react";

import { Header, ImageWithText } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Ways to Give" />

    <div id="content">
      <div className="row pt-2 pb-1">
        <div className="col-md-10 mx-auto">
          <h1 className="font-weight-bold purpleText">
            Choose from several ways to give:
          </h1>

          <h2>BECOME A YOUTH RALLY COMMUNITY PARTNER</h2>
          <p className="font-weight-bold">
            <a
              href="/assets/documents/Community-Partnership-Packet.pdf"
              className="links"
            >
              <span className="purpleText">CLICK HERE</span>
            </a>{" "}
            to download a copy of the Youth Rally Community Partnership Packet
            and learn about the various levels of sponsorship opportunities.
          </p>

          <h2>SPONSOR A CAMPER (or a Counselor, or a Nurse!!)</h2>
          <p>
            Outside of campus/program costs, the majority of our donations go to
            support the costs associated with getting our camper participants to
            Youth Rally each year.  In over 40 years of operations NO CHILD has
            been turned away due to financial hardship and we appreciate YOUR
            HELP to continue this pattern!
          </p>

          <h2>SEND A CHECK</h2>
          <p>
            Please indicate in a memo if you intend to sponsor a specific
            camper, volunteer, or program activity. Checks should be made out to
            the "
            <span className="font-weight-bold font-italic">
              Youth Rally Committee, Inc.
            </span>
            " and mailed to:
          </p>
          <p className="text-center purpleText">Youth Rally Committee, Inc</p>
          <p className="text-center purpleText">C/O Mary Beth Akers</p>
          <p className="text-center purpleText">949 Chestnut Oak Dr</p>
          <p className="text-center purpleText">St. Charles, MO 63303</p>

          <h2>DONATE USING YOUR CREDIT CARD OR PAYPAL ACCOUNT</h2>
          <p>
            Credit Card and PayPal donations can be made via the link below. If
            sponsoring a child or volunteer, please indicate who upon
            "checkout".
          </p>
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

          <h2>AMAZON SMILE</h2>
          <p>
            Shop at Amazon?? Use{" "}
            <span className="font-weight-bold purpleText">
              <a href="http://smile.amazon.com" className="links">
                Amazon Smile
              </a>
            </span>{" "}
            to start your next purchase and Amazon will donate 0.5% of the price
            of your eligible purchases to Youth Rally. Just sign in, select the
            <span className="font-weight-bold font-italic">
              Youth Rally Committee, Inc.
            </span>{" "}
            from the list of charitable organizations, and start shopping!
          </p>
          <a href="https://smile.amazon.com/" className="links">
            <img
              className="mx-auto d-block resource-img"
              src="/assets/images/amazon.smile.jpg"
              alt="amazon smile"
            />
          </a>

          <h2>AMAZON WISH LIST</h2>
          <p>
            Wish to donate, but not sure how to give?  Consider a purchase from
            our{" "}
            <span className="font-weight-bold purpleText">
              <a
                href="https://www.amazon.com/gp/registry/wishlist/2HGUY4ZDZ8XNV"
                className="links"
              >
                AMAZON WISH LIST
              </a>
            </span>
            . Items on our wish list are needed for programming activities
            and/or our medical supply room. EVERY purchase made leaves more in
            our pocket to support camper sponsorship! 
          </p>
          <a
            href="https://www.amazon.com/gp/registry/wishlist/2HGUY4ZDZ8XNV"
            className="links"
          >
            <img
              className="mx-auto d-block resource-img"
              src="/assets/images/wishlist.png"
              alt="wishlist"
            />
          </a>

          <h2>SET UP YOUR OWN FUNDRAISING PAGE </h2>
          <p>
            Set up a personal fund-raising page and share it with family and
            friends, so they will also know about Youth Rally and have an
            opportunity to donate directly, via your page! The Youth Rally is
            already established with FirstGiving. 
            <span className="font-weight-bold purpleText">
              <a
                href="https://www.firstgiving.com/organization/26064"
                className="links"
              >
                Click here
              </a>
            </span>{" "}
            to create your own grassroots fundraising page with FirstGiving
            today!
          </p>

          <h2>EARMARK UNITED WAY FUNDS</h2>
          <p>
            Opt to participate in the "Donor Choice" program that allows
            directing your contribution to the 501(c)(3) charity of your choice.
            Enter the following to direct your donation to Youth Rally
            Committee, Inc.:
          </p>

          <p className="text-center">
            <span className="font-weight-bold">Name of Charity:</span> Youth
            Rally Committee, Inc
          </p>
          <p className="text-center">
            <span className="font-weight-bold">Fed Tax ID#:</span> 20-3579812
          </p>
          <p className="text-center">
            <span className="font-weight-bold">Address:</span> 949 Chestnut Oak
            Dr
          </p>
          <p className="text-center">
            <span className="font-weight-bold">City/State/Zip:</span> St.
            Charles, MO 63303
          </p>
          <p className="text-center">
            <span className="font-weight-bold">Phone:</span> (314)452-7759
          </p>
          <p className="text-center">
            <span className="font-weight-bold">Contact:</span> Mary Beth Akers,
            Treasurer
          </p>
          <h5 className="text-center">
            Please contact{" "}
            <span className="font-weight-bold purpleText">
              <a href="mailto:marybethakers13@gmail.com" className="links">
                Mary Beth
              </a>
            </span>{" "}
            with any questions
          </h5>
        </div>

        <div className="col-md-4 mx-auto">
          <ImageWithText
            imageSource="/assets/images/18grpshot.JPG"
            imageAlt="2018 campers"
            imageText="2018 Youth Rally Campers in Boulder, CO"
          />
        </div>
      </div>
    </div>
  </Fragment>
);
