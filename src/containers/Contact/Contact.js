import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Contact.css'
import Map from '../../components/Map/Map';
import ContactDesc from '../../components/ContactDesc/ContactDesc';


import Footer from '../../components/Footer/Footer';

class Contact extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render () {


        
        
        return (
            <Aux>

             <div className={classes.Contact}><p>NALAZIMO SE U BAJINOJ BAŠTI, ADRESA STEPE STEPANOVIĆA 1</p>
             <p>RADO SE ODAZIVAMO VAŠEM INTERESOVANJU ZA SARADNJOM SA NAŠOM FIRMOM I UGOVARAMO POSLOVE PO VAŠIM POTREBAMA</p>
             
             </div>       
            <Map />
            <ContactDesc />
            </Aux>
        );
    }


}  

export default Contact;