import React from "react";
import "./smallBtn.css";

function SmallBtn(props) {

  return (
    <>
    <div className="">
        <button {...props} className="btn smallBtn text-center" id="smallButton">
            {props.children}
        </button>
    </div>
    </>
  );
}

export default SmallBtn;
