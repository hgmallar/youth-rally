import React, { Fragment } from "react";

import { Header, TwoColTextImg } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Ways to Give" />

    <div id="content">
      <div className="row pt-2 pb-1">
        <div className="col-md-10 mx-auto">
          <h1 className="font-weight-bold purpleText">
            Choose from several ways to give:
          </h1>

          {/* <h2>BECOME A YOUTH RALLY COMMUNITY PARTNER</h2>
          <p className="font-weight-bold">
            <a
              href="/assets/documents/Community-Partnership-Packet.pdf"
              className="links"
            >
              <span className="purpleText">CLICK HERE</span>
            </a>{" "}
            to download a copy of the Youth Rally Community Partnership Packet
            and learn about the various levels of sponsorship opportunities.
          </p> */}

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

          <h2>DONATE USING YOUR CREDIT CARD OR BANK ACCOUNT</h2>
          <p>
            Credit Card and Bank Account donations can be made via the link below. If
            sponsoring a child or volunteer, please add a donation note/comment and indicate the person.
          </p>
          <div className="row justify-content-center mx-auto text-center">
            <a
              href="#donate"
              className="btn btn-primary green-btn mb-2 mt-1"
              id="campers-btn"
              rel="noreferrer noopener"
            >
              DONATE
            </a>
          </div>

          {/* <h2>AMAZON WISH LIST</h2>
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
          </a> */}

          <h2>EARMARK UNITED WAY FUNDS</h2>
          <p>
            Opt to participate in the "Donor Choice" program that allows
            directing your contribution to the 501(c)(3) charity of your choice.
            Enter the following to direct your donation to Youth Rally
            Committee, Inc.:
          </p>

          <TwoColTextImg
            colSize1={6}
            colSize2={6}
            content={[
              {
                head: "Name of Charity:",
                class: "",
                text: " Youth Rally Committee, Inc",
              },
              {
                head: "Fed Tax ID#:",
                class: "",
                text: " 20-3579812",
              },
              { head: "Address:", class: "", text: " 949 Chestnut Oak Dr" },
              {
                head: "City/State/Zip:",
                class: "",
                text: " St. Charles, MO 63303",
              },
              { head: "Phone:", class: "", text: " (314)452-7759" },
              {
                head: "Contact:",
                class: "",
                text: " Mary Beth Akers, Treasurer",
              },
            ]}
            src="/assets/images/18grpshot.JPG"
            alt="2018 campers"
            text="2018 Youth Rally Campers in Boulder, CO"
          />

          <h5>
            Please contact{" "}
            <span className="font-weight-bold purpleText">
              <a href="mailto:marybethakers13@gmail.com" className="links">
                Mary Beth
              </a>
            </span>{" "}
            with any questions.
          </h5>
        </div>
      </div>
    </div>
  </Fragment>
);
