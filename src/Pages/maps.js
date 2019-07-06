import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import "../Components/Map/style.css";
import GreenBanner from "../Components/Banner/index.js";
import navImg from "../Components/Banner/greenBanner.png"
import Button from "../Components/Button"

class Maps extends Component {
    render() {
        return (
            <div className="global">
                <GreenBanner>HINT GOES HERE </GreenBanner>
                <SimpleMap />
                <Button>
                    Check Progress
                </Button>
            </div>
        );
    }
}

export default Maps;