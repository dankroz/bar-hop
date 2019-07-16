import React, { Component } from "react";
import "../Components/Background/style.css";
import Button from "../Components/Button"
import Opener from "../Components/Home/index"
import API from "../Utils/API"

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
        <div>
            <Opener>
                Welcome to Bar Hop!
                <p className="d-flex justify-content-center mt-4"style={{margintop: "30px", fontSize: 16, color: "#0A2463"}}>
                Click the link below to get started
                </p>
            </Opener>
            <Button onClick={this.loadBars}>
            Start Bar Hop
            </Button>
         </div>
        )
    }

}

export default Home;