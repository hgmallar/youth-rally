import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />
    
    <Header title="Photos" />

    <div id="content">
      <div className="col-md-10 mx-auto text-center font-weight-bold">
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2018-Rally-in-Boulder">
            2018 Youth Rally Photos and Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2017-Youth-Rally">
            2017 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2017-Rally-in-San-Diego-Video">
            2017 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/Youth-Rally-2016-in-Seattle">
            2016 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2016-Rally-in-Seattle-Videos">
            2016 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2015RallyinBoulder">
            2015 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2015-Rally-in-Boulder-Videos">
            2015 Youth Rally Videos
          </a>
        </p>
        <p className="greenText">
          <a href="https://youthrallyphotos.smugmug.com/2014RallyinSanDiego">
            2014 Youth Rally Photos
          </a>
        </p>
        <p className="purpleText">
          <a href="https://youthrallyphotos.smugmug.com/2014-Rally-in-San-Diego-Videos">
            2014 Youth Rally Videos
          </a>
        </p>
      </div>
    </div>
  </div>
);
