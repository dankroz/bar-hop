import React from "react";
import "./style.css";
import logo from "../Desktop/assets/img/barhopLogo.png"



function Opener(props) {
    return (
        <div>
            <div className="container logoContainer">
                <div className="barhop" href="/">
                    <img className="logo" src={logo} alt={"logo"} />
                </div>
            </div>
            <h1 className="textContainer text-white">
                <div className="fontStyle text-center p-5">
                    {props.children}
                </div>
            </h1>
        </div>
    )
}
export default Opener;