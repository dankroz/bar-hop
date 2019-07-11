import React from "react";
import "./style.css";

export function Button(props) {

  return (
    <div className="d-flex mx-auto justify-content-center">
        <button {...props} className="btn whiteBtn" id="button">
            {props.children}
        </button>
    </div>
  );
}

export default Button;


