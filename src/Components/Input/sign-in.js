import React from "react";
import "./signin.css";
import facebook from "./Facebook.png"
import googlePlus from "./Google-Plus.png"


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
                    <div className="col-md-12 pt-5 mt-1 d-flex mx-auto justify-content-center">
                        <div className="noAccount">Don't have an account? <a href="/" class="signUp">Sign Up</a></div>
                    </div>
                </div>

                <div className="d-flex mx-auto justify-content-center pt-5 pb-3 mt-5">Login with Facebook or Google</div>
                <div className="container-fluid d-flex mx-auto justify-content-center">
                    <div className="row">
                    <a href="/"><img className="facebook icon col-md-6" src={facebook} alt={"facebook"} /></a>
                    <a href="/"><img className="google icon col-md-6" src={googlePlus} alt={"google"} /></a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default UserSignIn;