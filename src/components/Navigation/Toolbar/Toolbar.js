import React, {Component} from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

class Toolbar extends Component {

    state = {
        loggedIn: false
    }

    render() {
        return(
            <header className={classes.Toolbar}>
                <Logo />
               
                <nav>
                   <NavigationItems />
                </nav>
            </header>
        );
    };
}

export default  Toolbar;