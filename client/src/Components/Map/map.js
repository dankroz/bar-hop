import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// let long23;
// let lat23;
 
class SimpleMap extends Component {
  state = {
    center: {
      lat: 39.940689,
      lng: -75.198807
    },
    zoom: 15
  };

  // constructor(){
  //   super()
  //   this.getLocation()
    
  // }




  
  
 


  // getLocation = () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       //console.log("Hello: " + position.coords.latitude, position.coords.longitude); 
      
  //       long23 = position.coords.longitude
  //       lat23 = position.coords.latitude
        

  //        console.log("Lat23:" + long23 + ", Long23:" + lat23);
        
        
  //       })
  //       this.stateChange()
  // };

  // stateChange = () => {
  //   this.State =  this.state.center{lat: lat23, lng: long23};
    
  // }

  
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBSoOBTkgPxUM66mJCx_DPW2G5_N8sSP48" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default SimpleMap;