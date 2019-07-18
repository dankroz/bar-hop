import React from "react";
import "./logoutModal.css";
import logo from "../Desktop/assets/img/barhopLogo.png"



function Opener(props) {
    return (
        <div>
            <div className="logoContainer ">
                <div className="pl-0" href="/">
                    <img className="d-flex justify-content-center mx-auto logo" src={logo} alt={"logo"} />
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