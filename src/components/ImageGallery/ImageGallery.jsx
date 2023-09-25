import ImageGalleryItem from "../ImageGalleryItem"
import css from "./ImageGallery.module.css"
import {useState,useEffect} from "react"
import {api}  from '../service/api';
import Button from "../Button/Button"
import { Audio } from 'react-loader-spinner'

const ImageGallery = ({value}) => {

    const [cards,setCards] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [button,setButton] = useState(false);
    const [noData,setNoData] = useState(false);
    const [page,setPage] = useState(1);


    const onClick = () => {
        
        const nextPage = page + 1;

        api(value,nextPage).then(({hits} ) => {
            setCards(prev => [...prev,...hits])
            setIsLoading(false)
            setPage(nextPage)
            setNoData(false)
            setButton(true)
        }).catch((error) => console.log(error))
    }


    useEffect(()=> {
       value &&
       
        api(value,page).then(({total,hits} ) => {
            
            if(total === 0){
                setCards([])
                setIsLoading(false)
                setNoData(true)
                setButton(false)
                return;
            }
            setIsLoading(true)
            setCards(hits)
              setIsLoading(false)
              setNoData(false)
              setButton(true)
        }).catch((error) => console.log(error))
    },[value])

        
        return (
            <div>
                <ul className={css.ImageGallery}>
                {isLoading && <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />}
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
        {button && <Button click={onClick}/>}
        </div>
            )
    }
export default ImageGallery;