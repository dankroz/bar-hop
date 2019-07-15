import React, { Component } from "react";
import "./assets/styles/location.css";
import "./assets/styles/style.css";



class Locations extends Component {
    render() {
        return (
            <>
            <div>
                <div className="philly-container">
                    <div className="container">
                        <div className="row fontStyle mx-auto my-auto d-flex justify-content-center">
                            <h5 className="subtitle col-md-12 text-center text-light">CURRENTLY LOCATED IN</h5>
                            <h1 className="mainHeader col-md-12 text-center text-light">Philadelphia, PA</h1>
                        </div>
                    </div>
                </div>
           </div>
            <div className="footer-location">
            <footer id="sticky-footer" className="py-4 bg-light text-dark-50">
                <div className="container text-center">
                    <small>Copyright &copy; Barhop.com</small>
                </div>
            </footer>
        </div>
        </>
        );
    }
}

export default Locations;