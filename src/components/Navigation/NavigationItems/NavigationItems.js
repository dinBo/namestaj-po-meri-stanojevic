import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigatiionItem/NavigationItem';

const NavItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Pocetna</NavigationItem>
        <NavigationItem link="/">Proizvodi</NavigationItem>
        <NavigationItem link="/">O nama</NavigationItem>
        <NavigationItem link="/">Kontakt</NavigationItem>
        <NavigationItem link="/">Uloguj se</NavigationItem>
        <NavigationItem link="/">Registruj se</NavigationItem>
    </ul>
);

export default NavItems;