import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects'
import Card from './Card'

class App extends Component {
  
  get = ()=>{
    let yesImage = yes["yes-image"]
    let yesState = yes["yes-statement"]
    let noImage = no["no-image"]
    let noState = no["no-statement"]
    // let {noState, noImage} = no
    console.log(yesState,yesImage,noState,noImage)
    return<Card yesState={yesState} yesImage={yesImage} noState={noState} noImage={noImage}/>
  }

  render() {
    // console.log(yes["yes-image"])
    return (
      <div>
        {this.get()}
      </div>
    )
  }
}

export default App;
