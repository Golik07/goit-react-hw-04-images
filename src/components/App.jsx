import React,{Component} from "react";
import Searchbar from './Searchbar'
import css from "./app.module.css"

import ImageGallery from "./ImageGallery";

export class App extends Component {

state = {
  name:"",
  page:1,
}

addValue = value => {
  
    this.setState({name:value})
}

  render(){
const {name,page} = this.state;

    return(
      <div className={css.App}>
        <Searchbar onSubmit={this.addValue}/>
        <ImageGallery value={name} page={page}/>
      </div>
    )
  }
}

