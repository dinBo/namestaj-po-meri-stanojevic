import React from 'react';
import classes from './NavigationItem.css';

const NavItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default NavItem;