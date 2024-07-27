import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Financials" />

    <div id="content">
      <div className="row pt-2">
        <div className="col-md-10 mx-auto text-center">
          <h3 className="greenText">
            <a
              href={"/assets/documents/taxform23.pdf"}
              target="_blank"
              className="links"
            >
              IRS Form 990 for 2023
            </a>
          </h3>
          <h4>

          </h4>
        </div>


      </div>
    </div>
  </Fragment >
);
