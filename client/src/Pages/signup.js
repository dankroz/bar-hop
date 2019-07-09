import React, { Component } from "react";
import "../Components/Background/style.css";
import TextArea from "../Components/TextArea"
import {Facebook, Title} from "../Components/SignIn/sign-in";
import SignInBtn from "../Components/Button/SignInBtn"



class SignUp extends Component {
    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <>
            <Title>
                Sign Up
            </Title>
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
                <SignInBtn onClick={this.clicked1}>
                    Sign Up
                </SignInBtn>
                <p className="text-center pt-2">Already have an account? <a className="" href="/signin"><u>Sign In</u></a></p>
                <Facebook>Sign up</Facebook>
            </>
        )
    }

}

export default SignUp;