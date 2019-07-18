import React from "react";
import "./style.css";
import SampleImg from "./club.png"

export function Image(props) {
    return (
        <div className="bar-img">
            <img className="img-style" src={SampleImg} alt={"club"} />
        </div>
    )
}

export function Header(props) {
    return (
        <>
            <div className="header-container container">
                <div className="row mt-3">
                    <div className="container col-sm-12">
                        <div className="col-sm-6" style={{ fontSize: 14, color: "#0A2463", opacity: ".3" }}>Night Club</div>
                        <div className="d-flex bd-highlight">
                            <div className="ml-2 pl-1 bd-highlight" style={{ fontSize: 26, color: "#0A2463", opacity: "1" }}>Concourse</div>
                            <div className="ml-auto rating-bg d-flex justify-content-end">4.6</div>
                        </div>
                        <div className="col-sm-6" style={{ fontSize: 14, color: "#0A2463", opacity: ".3" }}>Philadelphia, PA</div>
                    </div>
                </div>
            </div>
            <hr className="line"></hr>
        </>
    )
}

export function MoreDetails(props) {
    return (
        <>
            <div className="details-container container">
                <div className="row">
                    <div className="container col-sm-12">
                        <div className="col-sm-6" style={{ fontSize: 17, color: "#0A2463", opacity: "1", fontWeight: "bold" }}>More Detail</div>
                    </div>
                    <div className="container col-sm-12">
                        <div className="col-sm-6 mt-3" style={{ fontSize: 14, color: "#0A2463", opacity: ".3", fontWeight: "bold" }}>ADDRESS</div>
                    </div>
                    <div className="container col-sm-12">
                    <div className="d-flex bd-highlight mt-3">
                        <div className="row">
                            <div className="col-md-2 bd-highlight" style={{ fontSize: 17, color: "#0A2463", opacity: "1", marginLeft: 14}}>123 Bar Street,</div>
                            <div className="col-md-2 bd-highlight" style={{ fontSize: 17, color: "#0A2463", opacity: "1", marginLeft: 14}}>Philadelphia PA 19070</div>
                        </div>
                        <div className="ml-auto graymap-bg d-flex justify-content-end"></div>
                    </div>
                    </div>
                    <div className="col-sm-6 mt-3 text-primary" style={{ fontSize: 14, opacity: "1", fontWeight: "bold", marginLeft: 14}}>Open in Map</div>
                </div>
            </div>
        </>

    )
}
export function Operation(props) {
    return (
        <div className="details-container container mt-2">
                <div className="row">
                    <div className="container col-sm-12">
                        <div className="col-sm-6 mt-3" style={{ fontSize: 14, color: "#0A2463", opacity: ".3", fontWeight: "bold" }}>OPERATION</div>
                        <div className="col-sm-6 mt-1" style={{ fontSize: 14, color: "#0A2463", opacity: "1"}}><b>Open • </b>Until 2am</div>
                    </div>

                </div>
            </div>

    )
}
export function BottomLink(props) {
    return (
        <div className="container txt-alignment">
            <p className="bottomText pt-2">Don't like this location? <a className="" href="/home"><u className="newDestinationFont">Find new destination</u></a></p>
        </div>

    )
}

// export default UserSignIn;