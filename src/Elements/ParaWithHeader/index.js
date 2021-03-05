import React from "react";

const ParaWithHeader = (props) => (
  <>
    <h5>{props.head}</h5>
    <p>{props.content}</p>
  </>
);

export default ParaWithHeader;
