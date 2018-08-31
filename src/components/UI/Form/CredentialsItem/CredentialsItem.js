import React from 'react';
import Aux from '../../../../hoc/_Aux';

const credentialsItem = props => {
    
    return(
        <Aux>
            <p>{props.label}</p>
            <input type={props.type}/>
        </Aux>
    )
};

export default credentialsItem;