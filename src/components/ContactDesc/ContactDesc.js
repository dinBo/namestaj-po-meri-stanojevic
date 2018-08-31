import React from 'react';

import classes from './ContactDesc.css';

const ContactDesc = () => (
    <div className={classes.ContactDesc}>

        <div className={classes.Column}>
            <h2>Nameštaj po meri Stanojević MN</h2>
            <p>Ivana Vane Ivanovića 2, 31250 Bajina Bašta</p>
            <h2>Telefon naše firme:</h2>
            <ul>
                <li>031/861-828</li>
                <li>064/29-62-760</li>
                <li>064/34-19-534</li>
            </ul>
           
        </div>
        <div className={classes.Column}>
        <h2>Radno vreme naše firme:</h2>
            <ul>
                <li>Radnim danima i subotom: 08-16h</li>
                <li>Nedeljom ne radimo </li>
            </ul>
            <h2>E-main adresa:</h2>
            <p>namestaj.stanojevic2004@gmail.com</p>
            <h2>Faks:</h2>
            <p>(031) 6474-234</p>

        </div>
        <div className={classes.Column}>
            <h2>Kontaktirajte nas putem forme:</h2>
            <form className={classes.Form}>
            <label>Ime i prezime: </label ><br /> <input type="text" size="40"></input><br />
            <label>E-mail: </label><br /> <input type="text"  size="40"></input><br />
            <label>Poruka: </label> <br /><textarea  rows="7" cols="41"></textarea><br />
            <button>Pošaljite</button>
            </form>

        </div>

    </div>


);

export default ContactDesc;