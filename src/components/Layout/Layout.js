import React from 'react';

import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;