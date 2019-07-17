import React from "react";
import "./signin.css";
import facebook from "./Facebook.png"
import googlePlus from "./Google-Plus.png"



export function Title(props) {
    return (
        <div>
            <div class="container margin mx-auto d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12 mb-5 pb-5 d-flex mx-auto justify-content-center">
                        <h1 className="">
                            {props.children}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Facebook(props) {
    return (
        <div className="container">
            <div className="row fbMargin">
                <p className="col-md-12 text-center">{props.children} with Facebook or Google</p>
                </div>
            <div className="row d-flex mx-auto justify-content-center">
                <a href="/"><img className="facebook icon col-md-6" src={facebook} alt={"facebook"} /></a>
                <a href="/"><img className="google icon col-md-6" src={googlePlus} alt={"google"} /></a>
            </div>
        </div>

    )
}

// export default UserSignIn;