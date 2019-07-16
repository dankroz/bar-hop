import React, { Component } from "react";
import SimpleMap from "../Components/Map/map";
import "../Components/Map/style.css";
import GreenBanner from "../Components/Banner/index.js";
import Button from "../Components/Button"
import SmallBtn from "../Components/Button/SmallBtn"
//import Home from "../Components/Desktop";
//import API from "../Utils/API"


class Maps extends Component {
//     state = {
//         bars: [],
//         Userlong: "",
//         Userlat: "",
//         closest: "",
//         closestBar: "",
//       };
      

  
//     componentDidMount() {
//         this.getLocation();
       
       
        
        
//       };
    
    
//     getLocation = () => { 
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log("hello")
//             console.log(position.coords.latitude, position.coords.longitude);
              
//           })
//           this.loadBars(); 
//     };
    
//     loadBars = () => {
//         API.getBars()
//             // .then(res => console.log(res.data))
//           .then(res => this.setState({ bars: res.data }))
//           .catch(err => console.log(err));
          
//         console.log(this.state.bars);
//         // console.log(this.getLocation())
//         this.loadBars1();
//       };

//     loadBars1 = () => {
//         API.getBars()
//           .then(res => this.setState({ bars: res.data }))
//           .catch(err => console.log(err));
//         console.log(this.state.bars);
//         // console.log(this.getLocation())
//         this.Loading();
//         // return  this.props.history.push("/map")
//       };


//     Loading = () => {
//         // HTML5/W3C Geolocation
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(this.UserLocation);     
//         }      
//         // Default to Washington, DC
//         else
//           console.log("No Geolocation")
//       }

//     UserLocation = (position)  => {
//         this.NearestCity(position.coords.latitude, position.coords.longitude);
        
//         this.setState({Userlat: position.coords.latitude });
//         this.setState({Userlong: position.coords.longitude })
      
//         console.log("Lat:" + this.state.Userlat + ", Long:" + this.state.Userlong);
//       }
    

//     NearestCity = (latitude, longitude) => {
        
//         var minDif = 99999;
//         var closest;
        
//         for (var index = 0; index < this.state.bars.length; ++index) {
//           var dif = this.PythagorasEquirectangular(latitude, longitude, this.state.bars[index].latitude, this.state.bars[index].longtitude);
//             console.log("Facts: " + this.state.bars[index].latitude, this.state.bars[index].longtitude)
//           if (dif < minDif) {
//             closest = index;
//             minDif = dif;
//           }
//         }
//         console.log("asdaf: " + closest);
//         this.setState({closest: closest });
//         console.log(this.state.bars[closest]);
//         this.setState({closestBar:this.state.bars[closest]});
//         //console.log("The Closest bar to our location is " + this.state.closestBar.name);
//         //this.clicked()
// }

//     PythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
//         lat1 = this.Deg2Rad(lat1);
//         lat2 = this.Deg2Rad(lat2);
//         lon1 = this.Deg2Rad(lon1);
//         lon2 = this.Deg2Rad(lon2);
//         var R = 6371; // km
//         var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
//         var y = (lat2 - lat1);
//         var d = Math.sqrt(x * x + y * y) * R;
//         return d;
//       }

//       Deg2Rad = (deg) => {
//         return deg * Math.PI / 180;
//       }




    clicked = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        
        return (
            <div className="global">
                <SmallBtn>
                    ?
                </SmallBtn>
                <GreenBanner > {this.props.closestBar.hint1} </GreenBanner>
                <SimpleMap />
              
                <Button onClick={this.loadBars}>
                    Start Game
                </Button>
            </div>
        );
    }
}

export default Maps;