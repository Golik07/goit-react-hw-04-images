import css from "./ImageGalleryItem.module.css"
import React,{Component} from "react";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
    state={
        isModal:false
    }


    handleOpenModal = () => {
        this.setState({isModal:true});
    }


    handleCloseModal = (e) => {
       
        this.setState({isModal:false})
    }

    render (){
        const {alt,img,largeImage} = this.props;
        const {isModal} = this.state;
        return (
            <>
            <li  className={css.ImageGalleryItem}>
                <img 
                className={css.ImageGalleryItem_image} 
                src={img} 
                alt={alt}
                onClick={this.handleOpenModal}
                />
                {isModal &&(<Modal click={this.handleCloseModal} alt={alt} largeImage={largeImage}/>) }
            </li>
            </>
        );
    }
    
}

export default ImageGalleryItem;