import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js';

class App extends Component {

  state = {
    src: yes["yes-image"]
  }

  // yesorno = () => {
  //   return ({ yes, no })
  // }

  clickHandler = () => {
    console.log("clicked")
    this.setState({ src: no["no-image"]})
  }
  
  render() {
    return (
      <div className="card">
        <div className="statement">
          <h1>{yes["yes-statement"]}</h1>
        </div>
        {/* <div className="image"> */}
          <img className="image" onClick={this.clickHandler} src={`${yes["yes-image"]}`}/>
          {/* {this.state.clicked ? <img className="image" src={`${yes["yes-image"]}`} /> : <img className="image" src={`${no["no-image"]}`}/>} */}
        {/* </div> */}
      </div>
    );
  }

}


export default App;
