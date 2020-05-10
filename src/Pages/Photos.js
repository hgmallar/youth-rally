import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Photos" />

    <div id="content">
      <div className="col-md-10 mx-auto text-center font-weight-bold pt-2 pb-1">
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2019-Rally-in-Seattle-Photos" className="links">
            2019 Youth Rally Photos and Videos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2018-Rally-in-Boulder" className="links">
            2018 Youth Rally Photos and Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2017-Youth-Rally" className="links">
            2017 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2017-Rally-in-San-Diego-Video" className="links">
            2017 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/Youth-Rally-2016-in-Seattle" className="links">
            2016 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2016-Rally-in-Seattle-Videos" className="links">
            2016 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2015RallyinBoulder" className="links">
            2015 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2015-Rally-in-Boulder-Videos" className="links">
            2015 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2014RallyinSanDiego" className="links">
            2014 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText mb-0">
          <a href="https://youthrallyphotos.smugmug.com/2014-Rally-in-San-Diego-Videos" className="links">
            2014 Youth Rally Videos
          </a>
        </p>
      </div>
    </div>
  </Fragment>
);
