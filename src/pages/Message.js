import React from "react";

import Header from "./../components/Header";
import Photograph from "./../components/Photograph"

export default () => (
  <div>
    <Header title="Message" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Photograph
              imageSource="/assets/images/paul1.jpg"
              imageAlt="paul"
            />
          </div>
          <div className="col-md-7">
            <h5>
              "Being a counselor is as much an amazing honor as it is a huge
              responsibility. Each year I learn something new about a child,
              another counselor, myself, and life. Seldom does one get the
              opportunity to be a mentor, friend, care provider, confidante, and
              at the same time have the ability to make a lasting impression on
              another human being who has overcome similar challenges.”  
            </h5>
            <p>
              -Paul Hastings, Youth Rally President and CEO (pictured on the
              left with a fellow counselor and 2 campers at the 2017 Youth Rally
              'Summer of Love' Dance), is not only an avid volunteer, but was
              born with Crohn’s Disease and has been living an active life since
              ileostomy surgery in 1979.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
