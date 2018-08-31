import React from 'react';
import Aux from '../../../../hoc/_Aux';
import CredentialsItem from '../CredentialsItem/CredentialsItem';

const credentialsItems = [
    {label:'Email', type:'text'},
    {label:'Password', type:'password'}
]

const login = props => {
    
    return(
        <Aux>
            {credentialsItems.map((item) => {
                return <CredentialsItem label={item.label} type={item.type}/>
            })}
            <button>Log In</button>
        </Aux>
    )
};

export default login;