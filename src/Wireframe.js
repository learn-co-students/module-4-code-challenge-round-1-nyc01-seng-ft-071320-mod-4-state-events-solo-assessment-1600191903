import React, { Component } from 'react';
import {yes, no} from './objects';
import './Wireframe.css';

class Wireframe extends Component {
  
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({clicked: !previousState.clicked}));
  }
  
  render() { 
    return (
      <div className="container">
        <div className="statement">
          <h1>{this.state.clicked ? no["no-statement"] : yes["yes-statement"]}</h1>
        </div>
        <div>
          <img onClick={this.clickHandler} alt="" src={this.state.clicked ? no["no-image"] : yes["yes-image"]} />
        </div>
      </div>  
    )
  };
}

export default Wireframe;