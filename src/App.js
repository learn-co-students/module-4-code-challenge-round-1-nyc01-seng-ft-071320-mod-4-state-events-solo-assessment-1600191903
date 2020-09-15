import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {
  // console.log({yes, no})

  // state = {
  //   shown: true
  // }

  clickHandler = () => {
    console.log("clicked")
  }

  //if image is clicked, then change statement and the picture... vice-versa


  yesApiImage = () => {
    return (yes["yes-image"])
  }

  noApiImage = () => {
    return (no["no-image"])
  }
  

  render() {
    // console.log({yes, no})
    return (
      <>
        <span>
          <h1>You Can Do This!</h1>
        </span>
        <span>
          <img src={this.yesApiImage}></img>
        </span>
      </>
    );
  }
}



export default App;
