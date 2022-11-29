import React from "react";

import { Photograph } from "..";

const TwoColPhotoText = (props) => (
  <div className="row mx-2 pb-3">
    <div className="col-md-7">
      <Photograph imageSource={props.src} imageAlt={props.alt} />
    </div>
    <div className="col-md-5 my-auto">
      <p>{props.text}</p>
    </div>
  </div>
);

export default TwoColPhotoText;
