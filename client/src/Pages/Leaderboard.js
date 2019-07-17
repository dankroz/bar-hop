import React, { Component } from "react";
import "../Components/Background/style.css";
import Jumbotron from "../Components/Jumbotron/index"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom";



class Leaderboard extends Component {
    
state = {
    redirect: false
}    

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
            <div>
                <div className="title">
                    <h1 style={{color: "#0A2463"}}>Leaderboard</h1>
                </div>
                <Jumbotron/>
                {this.renderRedirect()}
                <Button  onClick={this.setRedirect}>
                    Back
                </Button>            
            </div>
        )
    }

}

export default Leaderboard;