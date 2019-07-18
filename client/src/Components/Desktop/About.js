import React, { Component } from "react";
import "./assets/styles/about.css";
import iphones from "./assets/img/iphones.png"
import friends from "./assets/img/friends.jpg"
// import brewery from "./assets/img/brewery.jpg"
// import mug from "./assets/img/mug.jpg"
import whiskey from "./assets/img/whiskey.jpg"


class About extends Component {
    render() {
        return (
            <div className="newBody">
                <div className="img-container">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="mainHeader col-md-12 text-center text-light">A BAR SCAVENGER HUNT</h1>
                            <h5 className="subtitle col-md-12 text-center text-light">A game for finding new drinking spots</h5>
                        </div>
                    </div>
                </div>
                <div className="mt-5 mb-5 white-container">
                    <div className="container mt-5 mb-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="iphoneImg" src={iphones} alt={"iphones"} />
                            </div>
                            <div className="container">
                                <div className="col-md-10 mx-auto my-auto d-flex justify-content-center">
                                    <p className="pageText text-center fontStyle m-4">Bar Hop is a new way to find great bars in your area. The mobile website is programmed to guide you towards nearby bars, pubs, brewery's, nightclubs and speakeasy's that you may never have known about. You will not be given the name of the bar until you arrived, follow the hints to find your way. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="beer-container">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="mainHeader col-md-12 text-center text-light">FIND LOCAL DRINKING SPOTS</h1>
                            <h5 className="subtitle col-md-12 text-center text-light">With entertaining mini-games and challenges along the way</h5>
                        </div>
                    </div>
                </div>
                <div className="white-container mt-5">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={friends} alt={"friends"} />
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4">Bar Hop is a social experience that encourages spending time with friends. Travel from bar to bar with your friends experience a fun new way to explore the city. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4 ">The bars you will encounter will have a wide selection of craft beers, coctails, wine and spirits. Have fun exploring the wide variety of pubs, restraunts, and bars that your city has to offer.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center order-md-first order-xs-first order-sm-first order-lg-last order-first">
                                <img className="shadow-lg friendsImg" src={whiskey} alt={"whiskey"} />
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

export default About;