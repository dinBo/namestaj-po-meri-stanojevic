import React from 'react';
import classes from './NavigationItems.css';
import itemClasses from '../NavigationItems/NavigatiionItem/NavigationItem.css';
import NavigationItem from './NavigatiionItem/NavigationItem';
import Aux from '../../../hoc/_Aux';

const navigationItems = [
    { label: 'Pocetna', link: '/home' },
    { label: 'Proizvodi', link: '/home#products' },
    { label: 'O nama', link: '/about-us' },
    { label: 'Kontakt', link: '/contact' }
];

const NavItems = props => {
    let sessionItems = null;

    if (props.userLoggedIn) {
        sessionItems = <Aux>
            <li className={itemClasses.NavigationItem}>
                <a onClick={props.logout}>Izloguj se</a>
            </li>
        </Aux>
        /*sessionItems = <Aux>
            <NavigationItem click={props.logout}>Izloguj se</NavigationItem>
        </Aux>*/
    } else {
        sessionItems = <Aux>
            <li className={itemClasses.NavigationItem}>
                <a onClick={() => props.showModal('login')}>Uloguj se</a>
            </li>
            <li className={itemClasses.NavigationItem}>
                <a onClick={() => props.showModal('register')}>Registruj se</a>
            </li>
        </Aux>
        /*sessionItems = <Aux>
            <NavigationItem click={() => props.showModal('login')}>Uloguj se</NavigationItem>
            <NavigationItem click={() => props.showModal('register')}>Registruj se</NavigationItem>
        </Aux>*/
    }


    return(
        <ul className={classes.NavigationItems}>
            { navigationItems.map( item => (
                <NavigationItem link={item.link}>{item.label}</NavigationItem>
            )) }
            { sessionItems }
        </ul>
    );
}


/*(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Pocetna</NavigationItem>
        <NavigationItem link="/proizvodi">Proizvodi</NavigationItem>
        <NavigationItem link="/about-us">O nama</NavigationItem>
        <NavigationItem link="/contact">Kontakt</NavigationItem>
        <NavigationItem link="/uloguj-se">Uloguj se</NavigationItem>
        <NavigationItem link="/registruj-se">Registruj se</NavigationItem>
    </ul>
);*/

export default NavItems;