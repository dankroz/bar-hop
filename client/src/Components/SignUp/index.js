import React from "react";
import "./style.css";
import facebook from "../Input/Facebook.png";
import googlePlus from "../Input/Google-Plus.png";

function UserSignUp() {
  return (
    <div className="flexbox">
      <div className="container">
        <div className="row">
          <div id="header" className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
            <h1>Sign Up</h1>
          </div>
          <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
            <input placeholder="Name" />
          </div>
          <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
            <input placeholder="Email" />
          </div>
          <div className="col-md-12 pb-2 d-flex mx-auto justify-content-center">
            <input placeholder="Password" />
          </div>
          <div className="col-md-12 d-flex mx-auto justify-content-center">
            <div className="btn btn-primary" id="button">
              Sign Up
            </div>
          </div>
        </div>

        <div className="d-flex mx-auto justify-content-center pt-5 pb-3 mt-5">
          Sign Up with Facebook or Google
        </div>
        <div className="container-fluid d-flex mx-auto justify-content-center">
          <div className="row">
            <a href="/">
              <img
                className="facebook icon col-md-6"
                src={facebook}
                alt={"facebook"}
              />
            </a>
            <a href="/">
              <img
                className="google icon col-md-6"
                src={googlePlus}
                alt={"google"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
