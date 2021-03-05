import React from "react";

import { ImageWithText } from "./../../Elements";

const TwoColTextImg = (props) => (
  <div className="row mx-2">
    <div className={`col-md-${props.colSize1}`}>
      {props.content.map((item, index) => (
        <p key={index}>
          <span className="font-weight-bold">{item.head}</span>
          <span className={item.class}>{item.text}</span>
        </p>
      ))}
    </div>
    <div className={`col-md-${props.colSize2}`}>
      <ImageWithText
        imageSource={props.src}
        imageAlt={props.alt}
        imageText={props.text}
      />
    </div>
  </div>
);

export default TwoColTextImg;
