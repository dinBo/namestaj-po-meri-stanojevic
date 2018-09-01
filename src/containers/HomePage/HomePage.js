import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import MainContent from './MainContent/MainContent';
import ProductsDesc from '../../components/ProductsDesc/ProductsDesc';
import Products from './Products/Products';
import ScrollableAnchor from 'react-scrollable-anchor';

import Footer from '../../components/Footer/Footer';







class HomePage extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
       


        return (
            <Aux>

                <MainContent />
                <ProductsDesc />
                 <ScrollableAnchor id={'products'}> 
                    <Products />
                 </ScrollableAnchor> 

                {/* <Footer />  */}
            </Aux>
        );
    }


}

export default HomePage;


