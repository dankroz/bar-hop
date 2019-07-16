import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import "../Components/Map/style.css";
import GreenBanner from "../Components/Banner/index.js";
import Button from "../Components/Button"
import SmallBtn from "../Components/Button/SmallBtn"
//import Home from "../Components/Desktop";
//import API from "../Utils/API"


class Maps extends Component {
    state = {
        Userlat:"",
        Userlong: ""
    }

    Loading = () => {
        // HTML5/W3C Geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.UserLocation);
              
        }      
        // Default to Washington, DC
        else
          console.log("No Geolocation")
      }
    
    UserLocation = (position)  => {
        // this.NearestCity(position.coords.latitude, position.coords.longitude);
        
        this.setState({Userlat: position.coords.latitude });
        this.setState({Userlong: position.coords.longitude })
      
        console.log("Lat11:" + this.state.Userlat + ", Long11:" + this.state.Userlong);
        this.checked() 
      }

    checked = () => {
        if ((this.state.Userlat - this.props.closestBar.latitude) < .002 || (this.state.Userlat - this.props.closestBar.latitude) > -.002 && (this.state.Userlong - this.props.closestBar.longitude) < .002 || (this.state.Userlong - this.props.closestBar.longitude) > -.002) {
            alert("well this was fun")
        }
        else{
            alert("Shit" + (this.state.Userlat - this.props.closestBar.latitude))
        }
    }

clicked = () => {
    return this.props.history.push("/map");
 }
 
 
render() {
        console.log("The Bar: " + this.props.closestBar.hint2)
        console.log("The Baraa: " + this.props.closestBar.latitude)
        return (
            <div className="global">
                <SmallBtn onClick={this.help}>
                    ?
                </SmallBtn>
                <GreenBanner > {this.props.closestBar.hint1} </GreenBanner>
                <SimpleMap />
              
                <Button onClick={this.Loading}>
                    Make A Guess
                </Button>
            </div>
        );
    }
}

export default Maps;