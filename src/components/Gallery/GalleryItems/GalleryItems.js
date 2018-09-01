import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

import classes from './GalleryItems.css';

const items = [
    {imageURL: 'https://www.god.co.rs/upload/images/zoom/kuhinje_po_meri_dj_031.jpg', price: '90.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://namestajpovasojmeri.com/wp-content/uploads/2012/04/zelenakuhinja.jpg', price: '75.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://www.sveosvemu.com/wp-content/uploads/tdomf/15353/kuhinja.jpg', price: '77.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://www.firmesrbije.rs/wp-content/uploads/2014/02/43.jpg', price: '80.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://www.parketarahrast.com/kuhinje/1.jpg', price: '55.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://www.garmann.rs/wp-content/uploads/2012/04/kuhinje-0021.jpg', price: '89.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://baumid.com/media/proizvodi/ALIM2480.938x570.JPG', price: '100.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://avatars.mds.yandex.net/get-pdb/921693/11974408-2c6f-4ffd-933e-77270f5f67d0/orig', price: '60.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://www.god.co.rs/upload/images/zoom/kuhinja-05.jpg', price: '78.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://www.god.co.rs/upload/images/zoom/img_1033_4_5banovo-brdo.jpg', price: '50.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://www.mojenterijer.rs/image.php/matis-kuhinje-kuhinje-po-meri-namestaj%20(32).jpg?width=600&height=400&cropratio=3:2&cropposition=&image=https://www.mojenterijer.rs/chest/top/matis-kuhinje-vec-od-18000-din/matis-kuhinje-kuhinje-po-meri-namestaj%20(32).jpg', price: '43.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://www.kuhinje-americkiplakari.com/galerija/kuhinje/126.jpg', price: '120.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://4.bp.blogspot.com/-U7C9zLKzB04/UiJtPEPl8ZI/AAAAAAAAAK4/mvkaWp1h3tk/s1600/kuhinja_po_meri.jpg', price: '95.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'http://kuhinje-pomeri.com/wp-content/uploads/2016/04/kuhinje.jpg', price: '100.000,00', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
    {imageURL: 'https://www.navidiku.rs/firme/proizvodgalerija/galerija11273/velike/kuhinje-po-meri-1---enterijer-pavlovic.jpg', price: '63.000', alt:'', desc:"Kuhinja pravljena od medijapana, jun 2018, vršimo ugradnju nakon kupovine. "},
]

const GalleryItems = props => (
    <div className={classes.Wrapper}>
    <div className={classes.GalleryItems}>
    <h2 >Naša online ponuda</h2>
       {items.map(item => {
           return <GalleryItem click={props.show} url={item.imageURL} alt={item.alt} desc={item.desc} price={item.price}/>
       })}
        

    </div>
    </div>

);

export default GalleryItems;