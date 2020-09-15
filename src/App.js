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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU"></img>
      </>
    )

  }
}

export default App;
