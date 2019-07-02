import React, { Component } from "react";
import "./style.css";
import barhopLogo from "./barhopLogo.png"

class Desktop extends Component {
    render() {
        return (
            <div className="landing">
                <div className="img-container">
                        <img className="logo" src={barhopLogo} alt={"logo"} />
                </div>
            </div>
        );
    }
}

export default Desktop;