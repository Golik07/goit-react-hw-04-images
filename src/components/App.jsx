import {useState} from "react";
import Searchbar from './Searchbar'
import css from "./app.module.css"

import ImageGallery from "./ImageGallery";

export const App = () => {

const [name,setName] = useState('');

const addValue = value => {
    setName(value);
  };

    return(
      <div className={css.App}>
        <Searchbar onSubmit={addValue}/>
        <ImageGallery  value={name} />
      </div>
    )
  }

