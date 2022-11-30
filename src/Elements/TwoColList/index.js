import React from "react";

const TwoColList = (props) => (
  <div className="row">
    <ul className="col-md-6 mb-0 mb-md-3">
      {props.list1.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <ul className="col-md-6">
      {props.list2.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default TwoColList;
