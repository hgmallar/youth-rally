import React from "react";

import { Photograph } from "./../../Elements";

const TwoColImgText = (props) => (
  <div className="row mx-2 my-2 align-items-start align-items-md-center">
    <div className={`col-${props.colSize2}`}>
      {props.src && <Photograph imageSource={props.src} imageAlt={props.alt} />}
    </div>
    <div className={`col-${props.colSize1}`}>
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
