import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button"
import Opener from "../Components/Home/index"
import API from "../Utils/API"

class Arrived extends Component {
    state = {
        bars: [],   
      };
      
      componentDidMount() {
        this.getLocation();
        this.loadBars();
      }
    
    
    getLocation = () => { 
    
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
          });
    }
    
    loadBars = () => {
        API.getBars()
          .then(res => this.setState({ bars: res.data }))
          .catch(err => console.log(err));
        console.log(this.state.bars);
        
      };

    render() {

        return (
            <>
            <Opener>
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px",fontSize: 16, color: "#0A2463"}}>
            You've Arrived!
            </p>
            BAR NAME GOES HERE
            <p className="d-flex justify-content-center mt-4"style={{margintop: "30px",fontSize: 16, color: "#0A2463", opacity: ".3"}}>
            POINTS GO HERE
            </p>
            </Opener>
            <Button onClick={this.loadBars}>
            Next
            </Button>
            </>
        )
    }

}

export default Arrived;