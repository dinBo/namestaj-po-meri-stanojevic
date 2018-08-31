import React from 'react';

import classes from './Map.css';
import logoStanojevic from '../../assets/images/logo.png';

const Map = () => (
    <div className>
    <div style={{width: "100%"}}>
    <iframe className={classes.Map}
     src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Stepe%20Stepanovica%201%2C%20bajina%20basta+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=11&amp;iwloc=B&amp;output=embed"
    //   frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
    >
      <a href="https://www.maps.ie/create-google-map/">Google Maps iframe generator
      </a></iframe></div><br />
        
    </div>
    
    
);

export default Map;