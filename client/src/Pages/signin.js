import React, { Component } from "react";
import "../Components/Background/style.css";
import SignInBtn from "../Components/Button/SignInBtn"
import TextArea from "../Components/TextArea"
import { Facebook, Title } from "../Components/SignIn/sign-in";



class Signin extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
    };


    render() {
        return (
            <>
                <Title>
                    Sign In
            </Title>
                <TextArea
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <TextArea
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                >
                </TextArea>
                <SignInBtn onClick={this.handleFormSubmit}>
                    Sign In
                </SignInBtn>
                <p className="text-center pt-2">Don't have an account? <a className="" href="/signup"><u>Sign Up</u></a></p>
                <Facebook>Sign in</Facebook>
            </>
        )
    }

}

export default Signin;