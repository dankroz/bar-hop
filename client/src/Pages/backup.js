import React, { Component } from "react";
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
            </div>
        )
    }

}

export default Backup;