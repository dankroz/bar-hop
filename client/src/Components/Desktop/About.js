import React, { Component } from "react";
import "./assets/styles/style.css";
import friends from "./assets/img/friends.jpg"
import brewery from "./assets/img/brewery.jpg"
import iphones from "./assets/img/iphones.png"
import mug from "./assets/img/mug.jpg"
import whiskey from "./assets/img/whiskey.jpg"


class About extends Component {
    render() {
        return (
            <div className="newBody">
                <div className="img-container">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="mainHeader col-md-12 text-center text-light">A BAR SCAVENGER HUNT</h1>
                            <h5 className="subtitle col-md-12 text-center text-light">For finding new drinking spots in Philadelphia</h5>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="iphoneImg" src={iphones} alt={"iphones"} />
                            </div>
                            <div className="container">
                                <div className="col-md-10 mx-auto my-auto d-flex justify-content-center">
                                    <p className="pageText text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={friends} alt={"friends"} />
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4 p-4 ">hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center order-md-first order-xs-first order-sm-first order-lg-last order-first">
                                <img className="shadow-lg breweryImg" src={brewery} alt={"brewery"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-container">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="mainHeader col-md-12 text-center text-light">FIND LOCAL DRINKING SPOTS</h1>
                            <h5 className="subtitle col-md-12 text-center text-light">With entertaining mini-games and challenges along the way</h5>
                        </div>
                    </div>
                </div>

                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center order-md-first order-sm-first 
                            order-xs-first
                            order-lg-last order-first">
                                <img className="shadow-lg mugImg" src={mug} alt={"mug"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={whiskey} alt={"whiskey"} />
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="pageText text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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