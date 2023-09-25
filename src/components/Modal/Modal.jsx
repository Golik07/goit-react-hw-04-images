import css from "./Modal.module.css"
import {useEffect} from "react"

const Modal = ({alt,largeImage,click}) => {


    useEffect(()=> {
        const handleKeydown = e => {
            if (e.code === 'Escape') {
                click();
            }
        } 
        window.removeEventListener('keydown', handleKeydown);

        window.addEventListener('keydown', handleKeydown);

    },[click])

        return(
            <div className={css.Overlay}>
                <div className={css.Modal}>
                    <img alt={alt} src={largeImage}/>
                </div>
            </div>
        )
    }

export default Modal