import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import MainContent from './MainContent/MainContent';
import ProductsDesc from '../../components/ProductsDesc/ProductsDesc';
import Products from './Products/Products';

class HomePage extends Component{


    render () {
        
        return (
            <Aux>
               
              <MainContent />
              <ProductsDesc />
               <Products /> 
            </Aux>
        );
    }


}  

export default HomePage;


