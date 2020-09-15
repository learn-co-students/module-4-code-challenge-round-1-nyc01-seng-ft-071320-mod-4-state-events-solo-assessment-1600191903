import React from 'react';
import './App.css';
import {yes, no} from './objects.js'

class App extends React.Component{


  state = {
    words: yes['yes-statement'],
    image: yes['yes-image']
  }

  clickHandler =() =>{
    if (this.state.words === yes['yes-statement']){
      this.setState({
        words: no['no-statement'],
        image: no['no-image']
      })
    }
    else if (this.state.words === no['no-statement']){
      this.setState({
        words: yes['yes-statement'],
        image: yes['yes-image']
      })
    }
  }
  
  
    render = () => {
      return(
        <div>
          <h2>{this.state.words}</h2>
          <img onClick={this.clickHandler} src={this.state.image}/>
          </div>
      )
    }
  

}


export default App;
