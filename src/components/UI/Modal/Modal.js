import React from 'react';

import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Login from '../../UI/Form/Login/Login';
import Register from '../../UI/Form/Register/Register';

const modal = (props) => {
    
    let contentType = null;

    switch(props.type) {
        case 'login':
            contentType = <Login />;
            break;
        case 'register':
            contentType = <Register />;
            break;
        case 'galleryItem':
            contentType = props.content;
            break;
        default:
            contentType = null;
    }

    return(
        <Aux>
            <Backdrop show={props.show} hideModal={props.hide}/>
            <div
                className={classes.Modal}
                style={{ display: props.show ? 'block' : 'none' }}>
                { contentType }
            </div>
        </Aux>
    )
};

export default modal;