import React from "react";
import "./style.css";

function Button(props) {

  return (
    <div className="flexbox">
        <button {...props} className="btn whiteBtn" id="button">
            {props.children}
        </button>
    </div>
  );
}

export default Button;
