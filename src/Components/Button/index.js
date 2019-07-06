import React from "react";
import "./style.css";

function Button({ children }) {
    return (
        <div className="btn-flex">
            <div className="btn btn-primary whiteBtn" id="button">
                { children }
            </div>
        </div>

    )
}

export default Button;