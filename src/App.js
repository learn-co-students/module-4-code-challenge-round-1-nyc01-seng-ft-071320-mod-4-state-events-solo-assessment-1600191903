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
      <h1>
        {/* statement */}
      </h1>
      <img onClick={this.clickHandler}>
        {/* img src */}
      </img>
    </div>
    )
  }
}

export default App;
