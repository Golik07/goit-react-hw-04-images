import css from "./ImageGalleryItem.module.css"
import {useState} from "react";
import Modal from "../Modal";

const ImageGalleryItem = ({alt,img,largeImage}) => {
const [isModal,setIsModal] = useState(false)


    const handleOpenModal = () => {
        setIsModal(true)
    }

    const handleCloseModal = () => {
        setIsModal(false)
    }
        return (
            <>
            <li  className={css.ImageGalleryItem}>
                <img 
                className={css.ImageGalleryItem_image} 
                src={img} 
                alt={alt}
                onClick={handleOpenModal}
                />
                {isModal &&(<Modal click={handleCloseModal} alt={alt} largeImage={largeImage}/>) }
            </li>
            </>
        );
}

export default ImageGalleryItem;