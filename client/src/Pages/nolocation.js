import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import Opener from "../Components/Home/index"


class NoLocation extends Component {
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
      return <Redirect to="/home" />;
    }
  };

 


  // componentDidMount() {
  //   this.props.parentMethod();
  //   };

  

  render() {
    return (
        <div>
       <Opener>
            Location is Not Available
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px", fontSize: 16, color: "#0A2463"}}>
            Check your browser settings and try again
            </p>
        </Opener>
        
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
        Go Back
        </Button>
     </div>
    );
  }
}

export default NoLocation;