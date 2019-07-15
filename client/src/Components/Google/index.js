import React from "react";
import "./style.css";

function Google() {
    return (
        <a href="http://localhost:3001/auth/google/" className="button">
            <div>
                <span className="button-label">Sign in with Google</span>
            </div>
        </a>
    )

}

export default Google;