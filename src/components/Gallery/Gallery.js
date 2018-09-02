import React, { Component } from 'react';
import GalleryItems from './GalleryItems/GalleryItems';
import Modal from '../UI/Modal/Modal';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import classes from './Gallery.css';

class Gallery extends Component {

    state = {
        showModal: false,
        modalContent: null,
        modalContentType: null,
        items: []
    }

    showModalHandler = event => {
        //uzmi sliku
        console.log('Klik na showModalHandler!!!');
        console.log(event.target);

        let formatedModalContent = /*<div style={{height:'500px', width:'300px'}}>*/<img src={event.target.src} alt={event.target.alt} />/*</div>*/
        console.log(formatedModalContent);

        this.setState({ showModal: true, modalContent: formatedModalContent, modalContentType: 'galleryItem' });
    }

    hideModalHandler = () => {
        this.setState({ showModal: false });
    }


    componentDidMount() {
        console.log("props:");
        console.log(this.props);
       
        window.scrollTo(0, 0);
        this.loadProducts();
    }

    loadProducts = () => {
        axios.get('https://namestaj-po-meri-project.firebaseio.com/products/'+this.props.link +'.json')
            .then(response => {
                this.setState({ingredients: response.data});
            });
    }


    render() {
       
        return (
            <div className={classes.Gallery}>

            <div className={classes.MainContent}>

            <div className={classes.Description}><h1>{this.props.name}</h1>
                    <p>{this.props.desc}</p></div>
                <div className={classes.Picture}><img src={this.props.url} alt={this.props.alt} />
                </div>


            </div>
                

                <GalleryItems items={this.state.ingredients} show={this.showModalHandler} />

                
                <Modal
                    show={this.state.showModal}
                    hide={this.hideModalHandler}
                    content={this.state.modalContent}
                    type={this.state.modalContentType} />

            </div>
        );
    }
}


export default withRouter(Gallery);