import React, { Component } from "react";
import greenBg from "../Components/Background/green-bg.png"
import "../Components/Background/style.css";
import Button from "../Components/Button"
import TextArea from "../Components/TextArea"


class Backup extends Component {
    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <div>
                <TextArea 
                    placeholder="Email"
                >
                </TextArea>
                <TextArea 
                    placeholder="Password"
                >
                </TextArea>
                <Button onClick={this.clicked1}>
                    Sign In
                </Button>

                <img className="greenBg" src={greenBg} alt={"greenBg"} />
                
            </div>
        )
    }

}

export default Backup;