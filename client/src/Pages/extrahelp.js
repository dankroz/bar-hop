import React, { Component } from "react";
import SmallBtn from "../Components/Button/SmallBtn"
import Jumbotron from "../Components/Jumbotron/index"
import Button from "../Components/Button"
// import { generateKeyPair } from "crypto";


const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}

class ExtraHelp extends Component {

    render() {
        return (
            <div style={background}>
                <div className="title">
                    <h1 style={{ color: "white"}}>Extra Help</h1>
                </div>
                    <SmallBtn>
                        X
                    </SmallBtn>
                    <Jumbotron />
                    <Button onClick={this.clicked}>
                        Add Hint
                        <p style={{marginBottom: "0px", fontSize: 8, color: "#404040"}}>
                        -10pts
                        </p>
                    </Button>
            </div>
        )
    }

}

export default ExtraHelp;