import css from "./Modal.module.css"
import React,{Component} from "react"

class Modal extends Component {

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeydown);
      };

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeydown);
      };
    

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.click();
        }
    } 

    render(){
        const {alt,largeImage} = this.props;
        return(
            <div className={css.Overlay}>
                <div className={css.Modal}>
                    <img alt ={alt} src={largeImage}/>
                </div>
            </div>
        )
    }
    
}

export default Modal