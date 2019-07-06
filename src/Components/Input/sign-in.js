import React from "react";
import "./signin.css";

function UserSignIn() {
    return (
        <div className="btn-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
                        <h1>Sign In</h1>
                    </div>
                    <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
                        <input placeholder="Email"></input>
                    </div>
                    <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
                        <input placeholder="Password"></input>
                    </div>
                    <div className="col-md-12 pt-2 d-flex mx-auto justify-content-center">
                        <div className="btn btn-primary" id="button">Sign in</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserSignIn;