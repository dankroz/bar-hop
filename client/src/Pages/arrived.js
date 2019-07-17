import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import Opener from "../Components/Home/index";
import { Redirect } from "react-router-dom";

class Arrived extends Component {
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
      return <Redirect to="/bardetails" />;
    }
  };

  render() {
    return (
      <>
        <Opener>
          <p
            className="d-flex justify-content-center mt-4"
            style={{ margintop: "30px", fontSize: 16, color: "#0A2463" }}
          >
            You've Arrived!
          </p>
          {this.props.closestBar.name}
          <p
            className="d-flex justify-content-center mt-4"
            style={{
              margintop: "30px",
              fontSize: 16,
              color: "#0A2463",
              opacity: ".3"
            }}
          >
            POINTS GO HERE
          </p>
        </Opener>
        <div>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect}>Next</Button>
        </div>
      </>
    );
  }
}

export default Arrived;
