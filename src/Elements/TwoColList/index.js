import React from "react";

const TwoColList = (props) => (
  <div className="row">
    <div className="col-md-6">
      <ul>
        {props.list1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="col-md-6">
      <ul>
        {props.list2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default TwoColList;
