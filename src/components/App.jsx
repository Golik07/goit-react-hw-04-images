import {useState,useEffect} from "react"
import Searchbar from './Searchbar'
import css from "./app.module.css"
import Button from "./Button/Button"
import {api}  from './service/api';
import ImageGallery from "./ImageGallery";
import { Audio } from 'react-loader-spinner'

export const App = () => {

  const [cards,setCards] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [button,setButton] = useState(false);
  const [noData,setNoData] = useState(false);
  const [page,setPage] = useState(1);
  const [name,setName] = useState('');

const addValue = value => {
  if(value !== name){
    setCards([])
    setName(value);
    setIsLoading(true)
    setButton(false)
    setPage(1);
  }
  };

  useEffect(()=> {
    name &&
     api(name,page).then(({total,hits} ) => {
         if(total === 0){
             setCards([])
             setIsLoading(false)
             setNoData(true)
             setButton(false)
             return;
         }
         setIsLoading(true)
         setCards(prev => [...prev,...hits])
           setIsLoading(false)
           setNoData(false)
           setButton(true)
     }).catch((error) => console.log(error))
 },[name,page])

  const onClick = () => {
    setPage(prev => prev + 1)
 }

    return(
      <div className={css.App}>
        <Searchbar onSubmit={addValue}/>
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
        <ImageGallery values={cards} />
        {button && <Button click={onClick}/>}
      </div>
    )
  }

