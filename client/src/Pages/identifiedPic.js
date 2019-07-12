import React, { Component } from "react";
import Button from "../Components/Button";
// import { generateKeyPair } from "crypto";


const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}

class IdentifiedPic extends Component {
    clicked = () => {
        return this.props.history.push("/picpage");
    }
    render() {
        return (
            <div style={background}>
                <div className="pt-5 pl-3 pr-1">
                    <p>
                        <span role="img" aria-label="Beer Cheers" style={{ fontSize: "48px" }}>
                            🍻
                        </span>
                    </p>
                    <h1 style={{ color: "white" }}>Its a match! You found a "enter prop here from pic data"</h1>
                    <br></br>
                    <h1 style={{ color: "white" }}>Click next challenge to try and earn more points</h1>
                </div>
                <Button onClick={this.clicked}>
                    Next Challenge
                    </Button>
            </div>
        )
    }

}

export default IdentifiedPic;