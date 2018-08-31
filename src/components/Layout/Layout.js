import React from 'react';

import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import Footer from '../Footer/Footer';

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main>
            {props.children}
        </main>
        <Footer/>
    </Aux>
);

export default Layout;