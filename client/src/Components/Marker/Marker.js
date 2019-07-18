import React from 'react';
import './Marker.css';
import hop from '../Nav/hop.png'
const Marker = (props) => {
    const { color, name } = props;
    return (
      <img src={hop} className="marker"
        text={name}
      />
    );
  };
  export default Marker;