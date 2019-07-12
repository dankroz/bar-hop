import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button"

const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}

class Home extends Component {
    clicked = () => {
        return this.props.history.push("/map");
    }
    render() {
        return (
        <div style={background}>
            <Button onClick={this.clicked}>
            Start Bar Hop
            </Button>
         </div>
        )
    }

}

export default Home;