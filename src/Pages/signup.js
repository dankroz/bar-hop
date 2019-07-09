import React, { Component } from "react";
import "../Components/Background/style.css";
import UserSignUp from "../Components/SignUp";


class SignUp extends Component {

    render() {
        return (
            <div>
                <div className="background">
                    <UserSignUp/>
                </div>
            </div>
        )
    }

}

export default SignUp;