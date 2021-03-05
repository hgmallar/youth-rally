import React from "react";

import { Photograph } from "./../../Elements";

const TwoColTextPhoto = (props) => (
  <div className="row mx-2">
    <div className="col-md-7">
      {props.content.map((item, index) => (
        <div key={index}>
          <p>{item.text}</p>
          <ul>
            {item.list.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="col-md-5">
      <Photograph imageSource={props.src} imageAlt={props.alt} />
    </div>
  </div>
);

export default TwoColTextPhoto;
