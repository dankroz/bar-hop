import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div className="centeredDiv">
      <div
        className="jumbotron"
        style={{fontSize: 24}}
      >
        {children}
      </div>

    </div>
  );
}

export default Jumbotron;