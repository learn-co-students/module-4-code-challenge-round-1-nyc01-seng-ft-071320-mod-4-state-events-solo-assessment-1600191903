import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {
  
  state = { clicked: false }  

  clickHandler = () => { 
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }

  statement = () => {
// {this.state.clicked ? 
// <div className="statement">{no.statement}</div>
// <div className="statement">{yes.statement}</div>}

    if (this.state.clicked) {
      return <div className="statement" src={no.statement} />
    } else {
      return <div className="statement" src={yes.statement} />
    }
  }

  image = () => {
    if (this.state.clicked) {
      return <img className="image" src={no.image} />
    } else {
      return <img className="image" src={yes.image} />
    }
  }


  render() {
    console.log(yes, no)

    return (
      <div className="app-container">
        <div className="statement">statement:{this.state.statement}</div>
        <div className="image-container" onClick={this.clickHandler} alt="click" >
        image: {this.state.image}
        </div>
    </div>
    );
  }

} 

export default App;
