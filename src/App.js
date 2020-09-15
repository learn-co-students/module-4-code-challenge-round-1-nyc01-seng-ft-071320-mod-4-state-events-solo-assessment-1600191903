import React from 'react';
import './App.css';
import {yes, no} from './objects.js'


class App extends React.Component {

  state = {
    clicked: true
  }

  clickHandler = () => {
    console.log("logged a click")
    this.setState((previousState) => ({ clicked: !previousState.clicked }))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h1> You can do this!</h1>
        <h2> A random statement. </h2>
        {/* <img src="https://rb.gy/tewo7n"></img> */}
        {/* <img alt="Something meaningful" onClick={this.clickHandler}></img> */}
        {this.state.clicked 
            ? <img onClick={this.clickHandler} alt="Line25" src={yes["yes-image"]}></img> 
            : <img onClick={this.clickHandler} alt="Line25" src={no["no-image"]}></img>}
      </div>
    )
  }

}

export default App;
