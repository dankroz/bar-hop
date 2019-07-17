import React, { Component } from "react";
import SmallBtn from "../Components/Button/SmallBtn";
import Jumbotron from "../Components/Jumbotron/index";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
// import { generateKeyPair } from "crypto";

const background = {
  backgroundColor: "#0A2463",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh"
};

class ExtraHelp extends Component {
    state = {
        redirect: false,
        addHint: false
      };
      addHint = () => {
        this.setState({addHint: true})
        
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        });
      };
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to="/map" />;
        }
      };
  render() {
    return (
      <div style={background}>
        <div className="title">
          <h1 style={{ color: "white" }}>Extra Help</h1>
        </div>
        <SmallBtn onClick={this.setRedirect}>X</SmallBtn>
        >
        {this.state.addHint === true && (<Jumbotron>{this.props.closestBar.hint2}</Jumbotron>)}
        <div>
            {this.renderRedirect()}
          <Button onClick={this.addHint}>
            Add Hint
            <p style={{ marginBottom: "0px", fontSize: 8, color: "#404040" }}>
              -10pts
            </p>
          </Button>
        </div>
      </div>
    );
  }
}

export default ExtraHelp;
