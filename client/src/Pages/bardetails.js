import React, { Component } from "react";
import "../Components/Background/style.css";
import {Image, Header, MoreDetails, Operation, BottomLink} from "../Components/Yelp"
import Button from "../Components/Button"


const whitebackground = {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}


class BarDetails extends Component {

    render() {
        return (
            <div style={whitebackground}>
                <div>
                    <Image/>
                    <Header/>
                    <MoreDetails/>
                    <Operation/>
                    <Button style={{backgroundColor:"#0BE9AF"}}>
                     Start Challenges
                    </Button>
                    <BottomLink/>
                </div>
            </div>
        )
    }

}

export default BarDetails;