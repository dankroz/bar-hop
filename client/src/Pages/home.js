import React, { Component } from "react";
import barhopLogo from "../Components/Desktop/barhopLogo.png";
import "../Components/Background/style.css";
import greenBg from "../Components/Background/green-bg.png"


class Home extends Component {

    render() {
        return (
        <div>
            <div className="background">
                <div className="flex">
                        <img className="greenBg" src={greenBg} alt={"greenBg"} />
                    </div>
                <img className="barhop" src={barhopLogo} alt={"logo"} />
            </div>
        </div>
        )
    }

}

export default Home;