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

        let formatedModalContent = /*<div style={{height:'500px', width:'300px'}}>*/<img src={event.target.src} alt={event.target.alt}/>/*</div>*/
        console.log(formatedModalContent);
        
        this.setState({showModal: true, modalContent: formatedModalContent, modalContentType: 'galleryItem'});
    }

    hideModalHandler = () => {
        this.setState({showModal: false});
    }

    render() {
        return(
            <div className={classes.Gallery}>
                <div><h2>Naslov</h2>
                    <p>Firebase Remote Config can be a powerful and easy way to make changes in your
                        app, discover what resonates with your audience, and then quickly revert
                        those changes if needed. Previously, if you wanted to remember what values
                        you used in the past and how they changed over time, you had to keep track
                        of them manually. In one-person teams, this is a hassle.
                        But for large teams, where lots of different developers could be changing
                        the project's Remote Config values at once, this is a major headache.</p></div>
                <div>SLIKA</div>

                <GalleryItems show={this.showModalHandler}/>
                <Modal 
                    show={this.state.showModal}
                    hide={this.hideModalHandler}
                    content={this.state.modalContent}
                    type={this.state.modalContentType}/>

            </div>
        );
    }
}


export default Gallery;