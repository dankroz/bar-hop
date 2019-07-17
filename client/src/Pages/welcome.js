import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import Opener from "../Components/Home/index"


class Welcome extends Component {
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
      return <Redirect to="/signin" />;
    }
  };

 


  // componentDidMount() {
  //   this.props.parentMethod();
  //   };

  

  render() {
    return (
        <div>
       <Opener>
            Welcome to Bar Hop!
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px", fontSize: 16, color: "#0A2463"}}>
            Click the Button below to get started
            </p>
        </Opener>
        
        {this.renderRedirect()}
        <Button onClick={this.setRedirect}>
        Start Bar Hop
        </Button>
     </div>
    );
  }
}

export default Welcome;