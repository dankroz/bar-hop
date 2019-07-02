import React, { Component } from "react";
import SimpleMap from "./map";
import "./style.css";
import navImg from "./navbar.png"

class Maps extends Component {
    render() {
        return (
            <div className="global">
                    <h1>Hint: You will see beer</h1>
                    <img className="navbar" src={navImg} alt={"nav"} />
                <SimpleMap />
            </div>
        );
    }
}

export default Maps;