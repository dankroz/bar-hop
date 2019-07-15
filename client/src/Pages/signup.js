import React, { Component } from "react";
import "../Components/Background/style.css";
import TextArea from "../Components/TextArea"
import { Title } from "../Components/SignIn/sign-in";
import SignInBtn from "../Components/Button/SignInBtn";
import queryString from "query-string";
import Google from "../Components/Google";




class SignUp extends Component {
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

    componentWillMount() {
        var query = queryString.parse(this.props.location.search);
        if (query.token) {
          window.localStorage.setItem("jwt", query.token);
          this.props.history.push("/");
       }
    }
    
    render() {
        return (
            <>
                
                <Title>
                    Sign Up
                </Title>

                <Google></Google>

                <TextArea
                    placeholder="Username"
                >
                </TextArea>
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
                    Sign Up
                </SignInBtn>
                <p className="text-center pt-2">Already have an account? <a className="" href="/signin"><u>Sign In</u></a></p>

            </>
        )
    }

}

export default SignUp;