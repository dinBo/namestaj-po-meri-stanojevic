import React from 'react';

import classes from './GalleryItem.css';

const GalleryItem = (props) => (
    <div className={classes.gallery}>

        <img src={props.url} alt="mira" onClick={(event) => props.click(event)}/>
        <div className={classes.desc}>{props.desc}</div>
        <p>{props.price}</p>

    </div>


);

export default GalleryItem;