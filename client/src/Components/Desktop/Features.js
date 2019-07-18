import React, { Component } from "react";
// import "./assets/styles/style.css";
import "./assets/styles/Features.css";
import mobile from "./assets/img/barhop.png"
import yelp from "./assets/img/yelp.png"
import leaderboard from "./assets/img/leaderboard.png"
import challenge from "./assets/img/challenge.png"


class Features extends Component {
    render() {
        return (
            <div className="colorBody">
            <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="mainHeader col-md-12 text-center text-light mt-5">FEATURES</h1>
                            <h5 className="subtitle col-md-12 text-center text-light">More details about the mobile website</h5>
                        </div>
                    </div>
                <div className="color-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={mobile} alt={"mobile"} />
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                            <h1 className=" secondHeader
                            col-md-12 text-center mt-4">Mapping Your Course</h1>
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle mr-4 ml-4 pr-4 pl-4 mt-3">A hint will guide you towards the right location. Continue to check your progress as you walk. You will get an alert when you have arrived at the correct bar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={yelp} alt={"yelp"} />
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                            <h1 className=" secondHeader
                            col-md-12 text-center mt-4">Find the Bar</h1>
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle mr-4 ml-4 pr-4 pl-4 mt-3">Once you enter the bars radius, you will recieve information about the bar. This includes the bars address, hours, and yelp rating.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={challenge} alt={"challenge"} />
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                            <h1 className=" secondHeader
                            col-md-12 text-center mt-4">Complete Challenges</h1>
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle mr-4 ml-4 pr-4 pl-4 mt-3">Go head to head with your frineds to see who can collect the most points. You increase your score by completing mini challenges.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={leaderboard} alt={"leaderboard"} />
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                            <h1 className=" secondHeader
                            col-md-12 text-center mt-4">Compete with Friends</h1>
                            </div>
                            <div className="col-lg-12 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle mr-4 ml-4 pr-4 pl-4 mt-3">As you collect points you will climb the leaderboard. Keep playing to see if you can break into the top 5.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="footer-container">
                    <footer id="sticky-footer" className="py-4 bg-light text-dark-50">
                        <div className="container text-center">
                            <small>Copyright &copy; Barhop.com</small>
                        </div>
                    </footer>
                </div>
                </div>
        );
    }
}

export default Features;