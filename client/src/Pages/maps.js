import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import Modal from "../Components/Map/modal";
import "../Components/Map/style.css";
import GreenBanner from "../Components/Banner/index.js";
import Button from "../Components/Button";
import SmallBtn from "../Components/Button/SmallBtn";
import { Redirect } from "react-router-dom";
//import Home from "../Components/Desktop";
//import API from "../Utils/API"

class Maps extends Component {
  state = {
    Userlat: "",
    Userlong: "",
    redirect: false,
    redirect1: false,
    wrong: false
  };



  componentDidMount() {
    //console.log(this.props.Userlong)
  }

  Loading = () => {
    // HTML5/W3C Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.UserLocation);
    }
    // Default to Washington, DC
    else console.log("No Geolocation");
  };

  UserLocation = position => {
    // this.NearestCity(position.coords.latitude, position.coords.longitude);

    this.setState({ Userlat: position.coords.latitude });
    this.setState({ Userlong: position.coords.longitude });

    console.log(
      "Lat11:" + this.state.Userlat + ", Long11:" + this.state.Userlong
    );
    this.checked();
  };

  checked = () => {
    let latEquals = this.state.Userlat - this.props.closestBar.latitude;
    let longEquals = this.state.Userlong - this.props.closestBar.longtitude;
    console.log("LongEquals" + longEquals);
    console.log("LatEquals" + latEquals);
    if (
      latEquals === 0.002 &&
      latEquals > -0.002 &&
      longEquals === 0.002 &&
      longEquals > -0.002
    ) {
    //   alert("well this was fun");
      this.setRedirect();
    } else {
    //   alert("Shit" + latEquals + "|G" + longEquals);
      this.setState({
        wrong: true
      });
    }
  };

  handleFormSubmit = () => {
    
    if (this.state.wrong === true) {
        this.setState({
            wrong: false
          });
      }
    };
        

  setRedirect = () => {
    this.setState({
      redirect: true
    });
    this.renderRedirect();
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/arrived" />;
    }
  };

  setRedirect1 = () => {
    this.setState({
      redirect1: true
    });
  };
  renderRedirect1 = () => {
    if (this.state.redirect1) {
      return <Redirect to="/help" />;
    }
  };

  clicked = () => {
    return this.props.history.push("/map");
  };

  render() {
    console.log("The Bar: " + this.props.closestBar.hint2);
    console.log("The Baraa: " + this.props.closestBar.latitude);
    return (
      <div className="global">
        <div>
          {this.renderRedirect1()}
          <SmallBtn onClick={this.setRedirect1}>?</SmallBtn>
        </div>

        <GreenBanner> {this.props.closestBar.hint1} </GreenBanner>
        <SimpleMap
          Userlong={this.props.Userlong}
          Userlat={this.props.Userlat}
        />
        {this.state.wrong === true && (<Modal  onClick={this.handleFormSubmit}/>)}
        <div>
          {this.renderRedirect()}
          <Button onClick={this.Loading}>Make A Guess</Button>
        </div>
      </div>
    );
  }
}

export default Maps;
