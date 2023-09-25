import ImageGalleryItem from "../ImageGalleryItem"
import css from "./ImageGallery.module.css"

const ImageGallery = ({values}) => {
        return (
            <div>
                <ul className={css.ImageGallery}>
            {values.map(({id,tags,webformatURL,largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                alt={tags}
                img={webformatURL}
                largeImage={largeImageURL}
                ></ImageGalleryItem>
            ))}
        </ul>
        </div>
            )
    }
export default ImageGallery;