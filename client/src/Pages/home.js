import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button"
import API from "../Utils/API"

const background = {
    backgroundColor: "#0A2463",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh"
}

class Home extends Component {
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


//     clicked = () => {
//         return this.props.history.push("/map");
//     }

    render() {
        return (
        <div style={background}>
            <Button onClick={this.loadBars}>
            Start Bar Hop
            </Button>
         </div>
        )
    }

}


export default Home;