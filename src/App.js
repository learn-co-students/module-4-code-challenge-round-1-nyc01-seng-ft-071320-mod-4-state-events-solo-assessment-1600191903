import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((currentState) => ({clicked: !currentState.clicked}))
  }

  render() {
    return (
      <div onClick={this.clickHandler}> 
        {this.state.clicked ? <div className="yes">
          <h2>{yes['yes-statement']}</h2>
          <img src={yes['yes-image']}></img>
        </div> : <div className="no"> 
          <h2>{no['no-statement']}</h2>
          <img src={no['no-image']}></img>
        </div>
        }
      </div>
      
    )
  }
}



export default App;
