import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {
  // console.log({yes, no})

  state = {
    toggle: true
  }

  clickHandler = () => {
    console.log("clicked")
    this.setState((previousState) => ({ toggle: !previousState.toggle }))
  }

  //if image is clicked, then change statement and the picture... vice-versa

  //I can't map over an object since it isn't an array of objects... so then what?

  // yesApiImage = () => {
  //   return (yes["yes-image"])
  // }
  
  //playing around with Object.entries() --> to try and make the object into an array
  // so that I can use .map
  
  // noApi = () => {
  //   no.entries(no).map(item => {console.log(item)})
  // }
  

  render() {
    //the console.logging works! 
    //console.log({yes, no})
    return (
      <>
        <span>
          <h1>{this.state.toggle ? Object.values(yes)[1] : Object.values(no)[1]}</h1>
        </span>
        <span>
          <img onClick={this.clickHandler} src={this.state.toggle ? Object.values(yes) : Object.values(no)[0]}></img>
        </span>
      </>
    );
  }
}



export default App;
