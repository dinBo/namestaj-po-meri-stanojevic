import React, { Component } from 'react';
import classes from './Product.css';
import { Link } from 'react-router-dom';


class Product extends Component{


    render () {
        
        return (
            <Link to={this.props.link}>
            
            <div className={classes.Product}>
           <img src={this.props.image} alt={this.props.alt}/>
           <p>{this.props.name}</p>
           </div>
            
            </Link>
           
        );
    }


}  

export default Product;