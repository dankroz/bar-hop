import React from "react";
import "./style.css";
// import "../Flexbox/flexbox.css";

function TextArea(props) {

    return (
        <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center" id="area">
            <textarea {...props} />
        </div>
    );
}

export default TextArea;
