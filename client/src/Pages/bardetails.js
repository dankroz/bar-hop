import React, { Component } from "react";
import "../Components/Background/style.css";
import {
 
  MoreDetails,
  Operation,
  BottomLink
} from "../Components/Yelp";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import "../Components/Yelp/style.css";

const whitebackground = {
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh"
};

class BarDetails extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/picpage" />;
    }
  };

  render() {
    console.log("The Bar: " + this.state.closestBar);
    return (
      <div style={whitebackground}>
        <div>

          <div className="bar-img">
            <img className="img-style" src={this.props.closestBar.image} alt={"club"} />
          </div>

          <div className="header-container container">
            <div className="row mt-3">
              <div className="container col-sm-12">
                <div
                  className="col-sm-6"
                  style={{ fontSize: 14, color: "#0A2463", opacity: ".3" }}
                >
                  {this.props.closestBar.type}
                </div>
                <div className="d-flex bd-highlight">
                  <div
                    className="ml-2 pl-1 bd-highlight"
                    style={{ fontSize: 26, color: "#0A2463", opacity: "1" }}
                  >
                    {this.props.closestBar.name}
                  </div>
                  <div className="ml-auto rating-bg d-flex justify-content-end">
                    4.6
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  style={{ fontSize: 14, color: "#0A2463", opacity: ".3" }}
                >
                  Philadelphia, PA
                </div>
              </div>
            </div>
          </div>
          <hr className="line" />
          <MoreDetails />
          <Operation />

          <div>
            {this.renderRedirect()}
            <Button
              style={{ backgroundColor: "#0BE9AF" }}
              onClick={this.setRedirect}
            >
              Start Challenges
            </Button>
          </div>

          <BottomLink />
        </div>
      </div>
    );
  }
}

export default BarDetails;
