import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Our Mission" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <h2 className="text-center">
          To provide an environment for adolescents living with conditions of
          the bowel and bladder that encourages self-confidence and independent
          living.
        </h2>
      </div>
    </div>
  </Fragment>
);
