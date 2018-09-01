import React, { Component } from 'react';
import classes from './Products.css';
import Product from './Product/Product';
import Kuhinje from '../../../assets/images/kuhinje.jpg';
import Ormari from '../../../assets/images/ormari.jpg';
import Plakari from '../../../assets/images/plakari.jpg';
import Kreveti from '../../../assets/images/kreveti.jpg';
import TVkomode from '../../../assets/images/komode.jpg';
import PredloziDizajna from '../../../assets/images/predlozi.jpg';



class Products extends Component{


state = {
    productsRow1: [
        {name: 'KUHINJE', image: Kuhinje, alt: 'Kuhinje', link: "/kuhinje"},
        {name: 'ORMARI', image: Ormari, alt: 'Ormari', link: "/ormari"},
        {name: 'PLAKARI', image: Plakari, alt: 'Plakari', link: "/plakari"}

    ],
    productsRow2: [
       
        {name: 'KREVETI', image: Kreveti, alt: 'Kreveti', link: "/kreveti"},
        {name: 'TV KOMODE', image: TVkomode, alt: 'TVkomode', link: "/tv-komode"},
        {name: 'PREDLOZI DIZAJNA', image: PredloziDizajna, alt: 'PredloziDizajna', link: "/predlozi-dizajna"}

    ]
}

    render () {
        
        return (
            <div className={classes.Products}>
            <hr></hr>
            <h1> N&nbsp;A&nbsp;Š&nbsp;&nbsp; P&nbsp;O&nbsp;R&nbsp;T&nbsp;F&nbsp;O&nbsp;L&nbsp;I&nbsp;O&nbsp;&nbsp; P&nbsp;R&nbsp;O&nbsp;I&nbsp;Z&nbsp;V&nbsp;O&nbsp;D&nbsp;A</h1>

           


             <div className={classes.ProductsFirst}>

            {this.state.productsRow1.map(product => {
                return <Product link={product.link} name={product.name} image={product.image} alt={product.alt}/>
            })}

             </div>
            <div className={classes.ProductsSecond}>
           
            {this.state.productsRow2.map(product => {
                return <Product link={product.link} name={product.name} image={product.image} alt={product.alt}/>
            })}

            </div>  

            </div>
            
        );
    }


}  

export default Products;