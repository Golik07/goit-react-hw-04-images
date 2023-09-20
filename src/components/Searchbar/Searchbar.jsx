import React,{Component} from "react";
import css from "./Searchbar.module.css"


class Searchbar extends Component{
  state = {
    name:""
  };

    handleChange = (e) => {
      this.setState({name:e.currentTarget.value.toLowerCase().trim()})
    }

    handleSubmit = e => {
      e.preventDefault();
      const {name} = this.state;
      const {onSubmit} = this.props;
      if(name === ""){
        return alert("Введи что-то")
      }
      onSubmit(name);
    }

    render(){
      const {name} = this.state;
      
        return(
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange}
                />
              </form>
            </header>
        )
    }
}

export default Searchbar;