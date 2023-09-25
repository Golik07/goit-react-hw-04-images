import {useState} from "react";
import css from "./Searchbar.module.css"


const Searchbar = ({onSubmit}) => {
  const [name,setName] = useState('')

    const handleChange = (e) => {
      const {value} = e.currentTarget;
      setName(value.toLowerCase().trim())
    }

    const handleSubmit = e => {
      e.preventDefault();
      if(name === ""){
        return alert("Введи что-то")
      }
      
      onSubmit(name);
    }
      
        return(
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button  type="submit" className={css.SearchForm_button}>
                Search
                </button>
                <input
                  value={name}
                  className={css.SearchForm_input}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  onChange={handleChange}
                />
              </form>
            </header>
        )
    }

export default Searchbar;