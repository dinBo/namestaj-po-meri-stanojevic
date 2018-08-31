import React, {Component} from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/_Aux';
import Modal from '../../UI/Modal/Modal';

class Toolbar extends Component {

    state = {
        loggedIn: false,
        showModal: false,
        modalContentType: null
    }

    showModalHandler = (prop) => {
        console.log('showModal rerendered')
        this.setState({showModal: true, modalContentType: prop});
    }

    hideModalHandler = () => {
        this.setState({showModal: false});
    }

    registerUserHandler = () => {
        return;
    }

    loginUserHandler = () => {
        return;
    }

    logoutUserHandler = () => {
        return;
    }

    render() {
        return(
            <Aux>
                <header className={classes.Toolbar}>
                    <Logo />
                
                    <nav>
                        <NavigationItems 
                            showModal={this.showModalHandler}
                            logout={this.logoutUserHandler}
                            userLoggedIn={this.state.loggedIn}/>
                    </nav>
                </header>
                <Modal
                    show={this.state.showModal}
                    hide={this.hideModalHandler}
                    type={this.state.modalContentType}
                    loggedIn={this.state.loggedIn}
                    login={this.loginUserHandler}
                    logout={this.logoutUserHandler}
                    register={this.registerUserHandler}/>
            </Aux>
        );
    };
}

export default  Toolbar;