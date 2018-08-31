import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import MainContent from './MainContent/MainContent';
import ProductsDesc from '../../components/ProductsDesc/ProductsDesc';
import Products from './Products/Products';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component{


    render () {
        
        return (
            <Aux>
               
              <MainContent />
              <ProductsDesc />
               <Products />
               {/* <Footer />  */}
            </Aux>
        );
    }


}  

export default HomePage;


