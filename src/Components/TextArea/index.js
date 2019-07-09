import React from "react";
import "./style.css";
import "../Flexbox/flexbox.css";

function TextArea(props) {

    return (
        <div className="" id="area">
            <textarea {...props} />
        </div>
    );
}

export default TextArea;
