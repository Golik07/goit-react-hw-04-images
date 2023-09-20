import ImageGalleryItem from "../ImageGalleryItem"
import css from "./ImageGallery.module.css"
import React,{Component} from "react"
import {api}  from '../service/api';
import Button from "../Button/Button"
import Loading from "../Loading/Loading";

class ImageGallery extends Component {
    state ={
        cards:[],
        isLoading:false,
        error:"",
        button:false,
        noData:false,
    }
    
    componentDidUpdate(prevProps,prevState){
        const {value,page} = this.props;
        
        if(prevProps.value !== value){
            console.log()
            this.setState({
                isLoading:true,
                noData:false,
                cards:[],
                button:false,
                page:1,})
            api(value,page).then(data  => {
                if(data.total === 0){
                  return  this.setState( {noData:true,button:false,cards:[],isLoading:false,});
                }
                console.log(data)
                this.setState({
                    isLoading:false,
                    cards:data.hits,
                    noData:false,
                    button:true,})
            } ).catch((error) => console.log(error))} 
            
    }

    onClick = () =>{
        const {page} = this.state;
        const {value} = this.props;

        const nextPage = page + 1;
        api(value,nextPage).then(({hits}) => this.setState(prevState => ({
            cards:[...prevState.cards,...hits],
            page:nextPage,
            button:true,
            isLoading:false,
        })))
    }


    render(){
        const {cards,isLoading,button,noData} = this.state;
        
        return (
            <div>
                <ul className={css.ImageGallery}>
                {isLoading &&  <Loading />}
                {noData && (<h1>No data found</h1>)}
            {cards && (cards.map(({id,tags,webformatURL,largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                alt={tags}
                img={webformatURL}
                largeImage={largeImageURL}
                ></ImageGalleryItem>
            ))) }
        </ul>
        {button && <Button click={this.onClick}/>}
        </div>
            )
    }
}
export default ImageGallery;