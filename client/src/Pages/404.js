import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import Opener from "../Components/Home/index"
import Drunk from "../Components/Desktop/assets/img/drunk.png"

const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
  };

class Error extends Component {
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
      return <Redirect to="/" />;
    }
  };

 


  // componentDidMount() {
  //   this.props.parentMethod();
  //   };

  

  render() {
    return (
        <div style={background}>
       <Opener>
            404 Error
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px", fontSize: 16, color: "white"}}>
            This page does not exist
            </p>
        </Opener>
        <div className="d-flex justify-content-center mx-auto">
        <img className="d-flex justify-content-center mx-auto" style={{width: "50vw", height: "auto", position: "absolute", zIndex: 40, top:0, marginTop: 350 }} src={Drunk} alt={"drunk"} />
        </div>
        

        
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
        Go Home
        </Button>
     </div>
    );
  }
}

export default Error;