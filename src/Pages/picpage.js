import React, { Component } from "react";
import greenBg from "../Components/Background/green-bg.png"
import "../Components/Background/style.css";



class PicPage extends Component {

    render() {
        return (
            <div>
                <div className="background">
                    <h1>Page to take a picture/challenge</h1>
                    <img className="greenBg" src={greenBg} alt={"greenBg"} />
                </div>
            </div>
        )
    }

}

export default PicPage;