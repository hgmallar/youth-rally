import React from "react";

import { Photograph } from "./../../Elements";

const TwoColImgText = (props) => (
  <div className="row mx-2 align-items-center">
    <div className={`col-md-${props.colSize2}`}>
      <Photograph imageSource={props.src} imageAlt={props.alt} />
    </div>
    <div className={`col-md-${props.colSize1}`}>
      <h2>{props.header}</h2>
      {props.content.map((item, index) => (
        <p key={index}>
          <span className={item.class}>{item.text}</span>
        </p>
      ))}
    </div>
  </div>
);

export default TwoColImgText;
