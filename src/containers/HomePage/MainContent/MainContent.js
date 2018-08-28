import React, {Component} from 'react';

import classes from './MainContent.css';
import BackgroundImage from '../../../assets/images/background.jpg';

var sectionStyle = {
    width: "100%",
    height: "680px",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
    // backgroundSize: "contain"
    
};

class MainContent extends Component {

    render(){

        return (
            <div className = {classes.MainContent} style = {sectionStyle}>
           

           <div className = {classes.Transbox}>
           <p ><b>PROIZVODIMO NAMEŠTAJ PO VAŠOJ MERI I ŽELJI</b></p>
           
           </div>
           <button>Kontaktirajte nas</button>

               
            </div>
        );
    }


    
}
    
    
    


export default MainContent;