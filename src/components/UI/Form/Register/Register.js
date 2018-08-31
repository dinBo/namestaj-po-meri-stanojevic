import React from 'react';
import Aux from '../../../../hoc/_Aux';
import CredentialsItem from '../CredentialsItem/CredentialsItem';

const credentialsItems = [
    {label:'Email', type:'text'},
    {label:'Password', type:'password'},
    {label:'Confirm password', type:'password'}
]

const register = props => {
    
    return(
        <Aux>
            {credentialsItems.map((item) => {
                return <CredentialsItem label={item.label} type={item.type}/>
            })}
            <button>Register</button>
        </Aux>
    )
};

export default register;