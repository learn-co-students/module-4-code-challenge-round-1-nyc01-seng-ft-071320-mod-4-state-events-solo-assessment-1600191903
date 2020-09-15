import React from 'react';
import './App.css';
import { yes, no } from './objects.js'



// function App() {
//   return <h1>You Can Do This!</h1>;
// }



  class App extends React.Component {

    yesStatement = () => {
      return yes.map(element => key={element.yes_image})
    }

    render(){
      return (
        <>
        <h2> Something </h2>
        </>
      )
    }
  }

export default App;
