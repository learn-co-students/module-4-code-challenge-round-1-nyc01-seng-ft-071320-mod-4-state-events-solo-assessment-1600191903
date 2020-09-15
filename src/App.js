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

        {this.state.clicked 
            ? <>
                <h2>{yes["yes-statement"]}</h2>
                <img onClick={this.clickHandler} alt="Line25" src={yes["yes-image"]}></img> 
              </>
            : <>
                <h2>{no["no-statement"]}</h2>
                <img onClick={this.clickHandler} alt="Line25" src={no["no-image"]}></img>
              </>
        }
      </div>
    )
  }

}

export default App;
