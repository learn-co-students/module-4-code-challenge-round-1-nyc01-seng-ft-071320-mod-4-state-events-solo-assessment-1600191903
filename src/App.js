import React from 'react';
import './App.css';
import {yes, no} from './objects'



class App extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("State: ", this.state)
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }

  render () {
    return (
      <>
      <h1 onClick={this.ClickHandler}> I'm not sure if I can do this...</h1>
      {this.state.clicked 
        ? <img onClick={this.clickHandler} alt="" src={yes["yes-image"]}></img>   
        : <img onClick={this.clickHandler} alt="" src={no["no-image"]}></img>
      }
      </>
    )

  }
}

export default App;
