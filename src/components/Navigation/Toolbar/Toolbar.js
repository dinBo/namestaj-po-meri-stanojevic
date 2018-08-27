import React, {Component} from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'

class Toolbar extends Component {

    state = {
        loggedIn: false
    }

    render() {
        return(
            <header className={classes.Toolbar}>
                <Logo />
                
                <a href='#'>Početna</a>
                <a href='#'>Proizvodi</a>
                <a href='#'>O nama</a>
                <a href='#'>Kontakt</a>
                <a href='#'>Log in</a>
                <a href='#'>Sign Up</a>
                <nav>
                    ...
                </nav>
            </header>
        );
    };
}

export default  Toolbar;