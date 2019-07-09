import React, { Component } from "react";
import barhopLogo from "../Components/Desktop/barhopLogo.png";
import "../Components/Background/style.css";


class Home extends Component {

    render() {
        return (
        <div>
            <div className="d-flex mx-auto justify-content-center">
                <img className="barhop" src={barhopLogo} alt={"logo"} />
            </div>
        </div>
        )
    }

}

export default Home;