import React from "react";
import "./style.css"


function bardetails({ props }) {
  return (
    <div className="centeredDiv">
      <div
        className="jumbotron"
      >
        {props.children}
      </div>

    </div>
  );
}

export default bardetails;