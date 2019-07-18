import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker/Marker"

class SimpleMap extends Component {
  state = {
    center: {
      lat: this.props.Userlat,
      lng: this.props.Userlong
    },
    zoom: 15
  };

  render() {
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