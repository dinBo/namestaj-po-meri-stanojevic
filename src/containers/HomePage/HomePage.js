import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import MainContent from './MainContent/MainContent';
import ProductsDesc from '../../components/ProductsDesc/ProductsDesc';
import Products from './Products/Products';

import Footer from '../../components/Footer/Footer';







class HomePage extends Component {


    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {



        return (
            <Aux>

                <section id='top'>
                    <MainContent />
                </section>
                <ProductsDesc />
                <section id='products'>
                    <Products />
                </section>

                {/* <Footer />  */}
            </Aux>
        );
    }


}

export default HomePage;


