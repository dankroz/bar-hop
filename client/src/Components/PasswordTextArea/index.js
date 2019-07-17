import React from "react";
import "./style.css";

function PasswordTextArea(props) {

    return (
        <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center" id="area">
            <textarea {...props} />
            <label htmlFor="password"></label>
        </div>
    );
}

export default PasswordTextArea;
