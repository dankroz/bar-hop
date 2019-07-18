import React from 'react';
import './Marker.css';
import hop from '../Nav/hop.png'
const Marker = (props) => {
    const { name } = props;
    return (
      <img src={hop} className="marker"
        text={name} alt="your location"
      />
    );
  };
  export default Marker;