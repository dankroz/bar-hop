import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker/Marker"
import nav from "../Nav/hop.png"

class SimpleMap extends Component {
  state = {
    center: {
      lat: 39.940689,
      lng: -75.198807
    },
    zoom: 15
  };

  render() {
    console.log(this.props.Userlat)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBSoOBTkgPxUM66mJCx_DPW2G5_N8sSP48" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.props.Userlat}
            lng={this.props.Userlong}
            name="My Marker"
          />
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default SimpleMap;