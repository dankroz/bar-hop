import React, { Component } from "react";
import "../Components/Background/style.css";
import SignInBtn from "../Components/Button/SignInBtn"
import TextArea from "../Components/TextArea"
import {Facebook, Title} from "../Components/SignIn/sign-in";



class Signin extends Component {
    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <>
            <Title>
                Sign In
            </Title>
                <TextArea 
                    placeholder="Email"
                >
                </TextArea>
                <TextArea 
                    placeholder="Password"
                >
                </TextArea>              
                <SignInBtn onClick={this.clicked1}>
                    Sign In
                </SignInBtn>
                <p className="text-center pt-2">Don't have an account? <a className="" href="/signup"><u>Sign Up</u></a></p>
                <Facebook>Sign in</Facebook>
            </>
        )
    }

}

export default Signin;