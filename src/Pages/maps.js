import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import "../Components/Map/style.css";
import navImg from "../Components/Banner/greenBanner.png"
import Button from "../Components/Button"
import "../Components/Button/style.css";

class Maps extends Component {
    render() {
        return (
            <div className="global">
                <div className="navPackage">
                    <h1>Hint: You will see beer</h1>
                    <img className="greenBanner" src={navImg} alt={"nav"} />
                </div>
                <SimpleMap />
                <Button>
                    Check Progress
                </Button>
            </div>
        );
    }
}

export default Maps;