import React, { Component } from "react";
import "./assets/styles/style.css";
import "./assets/styles/Features.css";
import mobile from "./assets/img/barhop.png"
import yelp from "./assets/img/yelp.png"
import leaderboard from "./assets/img/leaderboard.png"
import challenge from "./assets/img/challenge.png"


class Features extends Component {
    render() {
        return (
            <div className="FeaturesBody">
                <div className="color-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={mobile} alt={"mobile"} />
                            </div>
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-container">
                    <div className="container mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4 ">hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center order-md-first order-xs-first order-sm-first order-lg-last order-first">
                                <img className="shadow-lg friendsImg" src={yelp} alt={"yelp"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="ol-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={challenge} alt={"challenge"} />
                            </div>
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-6 mx-auto my-auto d-flex justify-content-center order-md-first order-sm-first 
                            order-xs-first
                            order-lg-last order-first">
                                <img className="shadow-lg friendsImg" src={leaderboard} alt={"leaderboard"} />
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