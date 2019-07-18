import React from "react";
import "./signin.css";



export function Title(props) {
    return (
        <div>
            <div className="container margin mx-auto d-flex justify-content-center">
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


// export default UserSignIn;