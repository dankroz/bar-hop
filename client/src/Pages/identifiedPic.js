import React, { Component } from "react";
import Button from "../Components/Button";
// import { generateKeyPair } from "crypto";
import Opener from "../Components/Home/index"

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
            <>
            <div style={background}>
            <Opener>
            <p className="d-flex justify-content-center mt-4"style={{fontSize: 20, color: "white", fontWeight: "bold"}}>
            IT'S A MATCH!<span  role="img" aria-label="beer">🍻</span>
            </p>
            OBJECT GOES HERE
            <p className="d-flex justify-content-center mt-4"style={{fontSize: 16, color: "white", opacity: ".3"}}>
            + 50 POINTS
            </p>
            </Opener>
            <Button onClick={this.clicked}>
            Next Challenge
            </Button>
            </div>
            </>
        )
    }

}

export default IdentifiedPic;