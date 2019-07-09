import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import "../Components/Map/style.css";
import GreenBanner from "../Components/Banner/index.js";
import Button from "../Components/Button"

class Maps extends Component {
    clicked = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <div className="global">
                <GreenBanner>HINT GOES HERE </GreenBanner>
                <SimpleMap />
                <Button onClick={this.clicked}>
                    Check Progress
                </Button>
            </div>
        );
    }
}

export default Maps;