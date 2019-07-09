import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button"
import TextArea from "../Components/TextArea"
import {Facebook} from "../Components/Input/sign-in";



class SignUp extends Component {
    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <>
                <TextArea 
                    placeholder="Username"
                >
                </TextArea>
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
                <Facebook/>
            </>
        )
    }

}

export default SignUp;