import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

import classes from './GalleryItems.css';

const items = [
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''},
    {imageURL: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/55782_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg', desc: 'skdgkse ', price: ''}
]

const GalleryItems = props => (
    <div className={classes.GalleryItems}>
       
       {items.map(item => {
           return <GalleryItem click={props.show} url={item.imageURL} desc={item.desc} price={item.price}/>
       })}

        

    </div>


);

export default GalleryItems;