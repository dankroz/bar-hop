import React from "react";
import "./style.css";
import "../Map/style.css";
import navImg from "./greenBanner.png"



function GreenBanner(props) {
    return (
        <div>
            <div className="container-text m-3">
                {/* <h1 className="p-3"><div>{props.children}</div></h1> */}
                <h2 className="p-3"><div>{props.children}</div></h2>
            </div> 
            <img className="greenBanner" src={navImg} alt={"nav"} />
        </div>
    )
}
export default GreenBanner;