import React from 'react';
import './App.css';
import { yes, no } from './objects.js'

class App extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("clicked")
    this.setState((currentState) => ({clicked: !currentState.clicked}))
  }

  render() {
    return (
    <div>
      {this.state.clicked
      ? <h1 onClick={this.clickHandler}>{yes["yes-statement"]}</h1>
      : <h1 onClick={this.clickHandler}>{no["no-statement"]}</h1>
      }
      {this.state.clicked 
      ? <img onClick={this.clickHandler} src={yes["yes-image"]}></img>
      : <img onClick={this.clickHandler} src={no["no-image"]}></img>
      }
    </div>
    )
  }
}

export default App;
