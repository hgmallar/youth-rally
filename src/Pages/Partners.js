import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Our Community Partners" />

    <div id="content">
      <div className="row pt-2">
        <div className="col-md-10 mx-auto text-center">
          <h2 className="purpleText">THANK YOU TO OUR COMMUNITY PARTNERS!</h2>
          <h4>
            Youth Rally Community Partners provide financial and in-kind support
            for ongoing Youth Rally initiatives, including programming and
            camper sponsorship. Our community partners give because they care
            and we could never in words alone express our many thanks for their
            generous donations!
          </h4>
          {/*  <h2 className="purpleText">WANT TO BECOME A COMMUNITY PARTNER?</h2>
          <h5>
            <span className="greenText">
              <a
                href="/assets/documents/Community-Partnership-Packet.pdf"
                className="font-weight-bold links"
              >
                CLICK HERE
              </a>
            </span>{" "}
            to download a copy of the Youth Rally Community Partnership Packet
            and learn about the various levels of sponsorship opportunities.
          </h5> */}
        </div>
        <div className="w-100 mx-auto text-center">
          <Header
            title="2025 Platinum Level Sponsors"
            color="header-platinum font-weight-bold"
            size={2}
          />
          {/* <div className="partner-img-lg mx-auto mt-2 mb-1">
            <a href="https://www.hollister.com/" target="_blank" rel="noreferrer">
              <img
                className="img-lg mb-md-1 rounded"
                src="/assets/images/sponsor_logos/Hollister-2016.jpg"
                alt="hollister"
              />
            </a>
          </div> */}
          <div className="partner-img-lg mx-auto mb-2 mt-1">
            <a href="https://www.convatec.com/" target="_blank" rel="noreferrer">
              <img
                className="img-lg mb-lg-1 rounded"
                src="/assets/images/sponsor_logos/convatec.png"
                alt="Convatec logo"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-2 mt-1">
            <img
              className="img-lg rounded"
              src="/assets/images/sponsor_logos/daviddebhartley.jpg"
              alt="DavidDebHartley logo"
            />
            <img
              className="img-lg rounded"
              src="/assets/images/sponsor_logos/paul.jpg"
              alt="Paul Hastings logo"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-2 mt-1">
            <img
              className="img-lg rounded"
              src="/assets/images/sponsor_logos/northwest.jpg"
              alt="Northwest WOCN logo"
            />
            <img
              className="img-lg rounded"
              src="/assets/images/sponsor_logos/pacificcoast.jpg"
              alt="Pacific Coast WOCN logo"
            />
          </div>
          {/* <Header title="2025 Gold Level Sponsor" color="header-gold" size={2} />
          <div className="partner-img-md mx-auto mt-2 mb-2">
            <a href="https://www.convatec.com/" target="_blank" rel="noreferrer">
              <img
                className="img-md mb-md-1 rounded"
                src="/assets/images/sponsor_logos/Convatec.jpg"
                alt="Convatec"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </Fragment >
);
