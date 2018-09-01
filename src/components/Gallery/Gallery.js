import React, { Component } from 'react';
import GalleryItems from './GalleryItems/GalleryItems';
import Modal from '../UI/Modal/Modal';

import classes from './Gallery.css';

class Gallery extends Component {

    state = {
        showModal: false,
        modalContent: null,
        modalContentType: null
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
        window.scrollTo(0, 0);
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
                

                <GalleryItems show={this.showModalHandler} />

                
                <Modal
                    show={this.state.showModal}
                    hide={this.hideModalHandler}
                    content={this.state.modalContent}
                    type={this.state.modalContentType} />

            </div>
        );
    }
}


export default Gallery;