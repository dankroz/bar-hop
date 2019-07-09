import React from "react";
import "./signinbtn.css";

function SignInBtn(props) {

  return (
    <>
    <div className="d-flex mx-auto justify-content-center">
        <button {...props} className="btn signInBtn" id="button">
            {props.children}
        </button>
    </div>
    </>
  );
}

export default SignInBtn;
