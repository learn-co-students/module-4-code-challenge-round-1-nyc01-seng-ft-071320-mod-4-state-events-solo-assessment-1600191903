import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects'


class App extends Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }

  
  render() {
    console.log(this.state)
    return (
      
      <span className='card'>
        <h1>{yes['yes-statement']}</h1>
        <img onClick={this.clickHandler} alt='' src={yes['yes-image']} />
        {this.state.clicked ? <span className='card'> <h1>{no['no-statement']}</h1> <img alt='' src={no["no-image"]}/> </span> : null }
      </span>
    )
  }
}

export default App;
