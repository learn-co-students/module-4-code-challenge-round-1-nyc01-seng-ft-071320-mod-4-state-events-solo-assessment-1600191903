import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {

  state={
    toggle: false
  }

  clickHandler = () => {
    console.log("clicking")
    this.setState((previousState) => ({ toggle: !previousState.toggle }), () => console.log("State: ", this.state))
  }
  
  render(){
    // console.log(Object.values(yes))
    // console.log(this.state)
    return (
      <>
  <h1>You Can Do This!</h1>
  <img onClick={this.clickHandler} src={this.state.toggle ? Object.values(yes) : Object.values(no)[0]}/>
  </>
  )

  }
}

export default App;
