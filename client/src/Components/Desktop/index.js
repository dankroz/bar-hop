import React, { Component } from "react";
import "./style.css";
import barhopLogo from "./barhopLogo.png"
import friends from "./friends.jpg"
import brewery from "./brewery.jpg"
import iphones from "./iphones.png"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap/';

class Home extends Component {
    render() {
        return (
            <div className="newBody">
                <Navbar className="shadow-md" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand className="barhop" ref="#home"><img classNameName="logo" src={barhopLogo} alt={"logo"} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="img-container flexbox">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="col-md-12 text-center text-light">A BAR SCAVENGER HUNT</h1>
                            <h5 className="col-md-12 text-center text-light">For finding new drinking spots in Philadelphia</h5>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 mx-auto my-auto d-flex justify-content-center">
                                <img className="iphoneImg" src={iphones} alt={"iphones"} />
                            </div>
                            <div class="container">
                                <div className="col-md-10 mx-auto my-auto d-flex justify-content-center">
                                    <p className="text-center fontStyle m-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="beer-container flexboxm">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="col-md-12 text-center text-light">FIND LOCAL DRINKING SPOTS</h1>
                            <h5 className="col-md-12 text-center text-light">With entertaining mini-games and challenges along the way</h5>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={friends} alt={"friends"} />
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row ">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg breweryImg" src={brewery} alt={"brewery"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-container flexboxm">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h1 className="col-md-12 text-center text-light">FIND LOCAL DRINKING SPOTS</h1>
                            <h5 className="col-md-12 text-center text-light">With entertaining mini-games and challenges along the way</h5>
                        </div>
                    </div>
                </div>

                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row ">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg breweryImg" src={brewery} alt={"brewery"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white-container">
                    <div className="container mt-5 mx-auto my-auto d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <img className="shadow-lg friendsImg" src={friends} alt={"friends"} />
                            </div>
                            <div className="col-md-12 col-lg-6 mx-auto my-auto d-flex justify-content-center">
                                <p className="text-center fontStyle m-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

                {/* footer starts */}

            </div>
        );
    }
}

export default Home;