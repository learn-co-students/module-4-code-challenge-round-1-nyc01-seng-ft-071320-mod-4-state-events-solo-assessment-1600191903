import React from 'react';
import './App.css';
import Image from './Components/Image'

class App extends React.Component {

  state = {
    imageClicked: false
  }

  render() {
    return(
      <div className="App">
        <Image />
      </div>
    )
  }
}

export default App;
