import React from 'react';

import classes from './Logo.css';
import logoStanojevic from '../../assets/images/logo.png';

const Logo = () => (
    <div className={classes.Logo}>

        <h3>PROIZVODNJA NAMEŠTAJA <br/><span>StanojevicMN</span></h3>
        <img src={logoStanojevic} alt="namestaj_stanojevic" />
    </div>
    
    
);

export default Logo;