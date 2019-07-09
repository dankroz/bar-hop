import React from "react";
import "./signin.css";
import facebook from "./Facebook.png"
import googlePlus from "./Google-Plus.png"



export function UserSignIn() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 pb-5 d-flex mx-auto justify-content-center">
                        <h1 className="">Sign In</h1>
                    </div>
                    <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
                        <input placeholder="Email"></input>
                    </div>
                    <div className="col-md-12 d-flex mx-auto justify-content-center">
                        <input placeholder="Password"></input>
                    </div>

                    {/* <Button className="col-md-12 d-flex mx-auto justify-content-center">
                        <div className="btn btn-primary" id="button">Sign in</div>
                    </Button>
                    <Button className="col-md-12 mt-2 d-flex mx-auto justify-content-center">
                        <div className="noAccount signUp">Don't have an account? <a href="/signup">Sign Up</a></div>
                    </Button> */}
                </div>
                </div>
        </div>

    )
}

export function Facebook() {
    return (
        <div>
            <div className="row d-flex mx-auto justify-content-center">
                <a href="/"><img className="facebook icon col-md-6" src={facebook} alt={"facebook"} /></a>
                <a href="/"><img className="google icon col-md-6" src={googlePlus} alt={"google"} /></a>
            </div>
        </div>

    )
}

// export default UserSignIn;