import React, { Fragment } from "react";

import { Header, TwoColTextImg } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Donate" />

    <div id="content">
      <div className="row pt-2 pb-1">
        <div className="col-md-10 mx-auto">
          <div>
            <a
              href="#donate"
              className="btn btn-primary green-btn mb-2 mt-1"
              id="campers-btn"
              rel="noreferrer noopener"
            >
              DONATE
            </a>
          </div>

          <h2>Click on the Donate button above to:</h2>
          <ul>
            <li>Send a one-time donation</li>
            <li>Set up a monthly donation</li>
            <li>Add your Credit or Debit card to "Round Up" your loose change</li>
          </ul>

          <h2>Where to send a check?</h2>
          <img
            src="/assets/images/check.png"
            alt="Youth Rally check"
          />
          <p>
            Checks should be made out to
            the "
            <span className="font-weight-bold font-italic">
              Youth Rally Committee, Inc.
            </span>
            " and mailed to:
          </p>
          <p className="purpleText font-weight-bold">Youth Rally Committee, Inc</p>
          <p className="purpleText font-weight-bold">C/O Mary Beth Akers</p>
          <p className="purpleText font-weight-bold">949 Chestnut Oak Dr</p>
          <p className="purpleText font-weight-bold">St. Charles, MO 63303</p>

          <h2>Earmark UNITED WAY funds through your employer:</h2>
          <p>
            Opt to participate in the "Donor Choice" program that allows
            directing your contribution to the 501(c)(3) charity of your choice.
            Enter the following to direct your donation to Youth Rally
            Committee, Inc.:
          </p>

          <p><span className="font-weight-bold">Name of Charity:</span> Youth Rally Committee, Inc</p>
          <p><span className="font-weight-bold">Fed Tax ID#:</span> 20-3579812</p>
          <p><span className="font-weight-bold">Address:</span> 949 Chestnut Oak Dr</p>
          <p><span className="font-weight-bold">City/State/Zip:</span> St. Charles, MO 63303</p>

          <h2>Got other questions or ideas?</h2>
          <p> Contact Emily at (607)592-3728 or email Emily@youthrally.org</p>

          <div className="mx-auto justify-content-center text-center">
            <img
              className="img-fluid"
              src="/assets/images/18grpshot.JPG"
              alt="2018 campers"
            />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
