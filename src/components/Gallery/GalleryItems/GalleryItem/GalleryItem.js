import React from 'react';

import classes from './GalleryItem.css';

const GalleryItem = (props) => (
    <div className={classes.gallery}>

        <img src={props.url} alt={props.alt} onClick={(event) => props.click(event)} />
        <p style={{marginTop:"10px", lineHeight:"180%"}}>{props.desc}</p>
        <p  style={{marginTop:"10px"}}><b>Cena: &nbsp;{props.price}&nbsp;din.</b></p>
        <button>KUPI</button>

    </div>


);

export default GalleryItem;