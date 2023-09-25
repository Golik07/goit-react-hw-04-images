import {useState} from "react";
import Searchbar from './Searchbar'
import css from "./app.module.css"

import ImageGallery from "./ImageGallery";

export const App = () => {

const [name,setName] = useState('');
const [page,setPage] = useState(1);

const addValue = value => {
    setName(value);
  };

    return(
      <div className={css.App}>
        <Searchbar onSubmit={addValue}/>
        <ImageGallery pages={page} value={name} />
      </div>
    )
  }

