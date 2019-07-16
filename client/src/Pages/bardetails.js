import React, { Component } from "react";
import "../Components/Background/style.css";
import {
  Image,
  Header,
  MoreDetails,
  Operation,
  BottomLink
} from "../Components/Yelp";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";

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
    return (
      <div style={whitebackground}>
        <div>
          <Image />
          <Header />
          <MoreDetails />
          <Operation />
          <div>
            {this.renderRedirect()}
            <Button style={{ backgroundColor: "#0BE9AF" }} onClick={this.setRedirect}>
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
