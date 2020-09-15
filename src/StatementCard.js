import React from 'react'
import {yes, no} from './objects'

export default class StatementCard extends React.Component {

    state = {
        yes: true
    }

    clickHandler = () => {
        this.setState((previousState) => ({yes: !previousState.yes}))
    }

    render(){
        return(
            <div className="statement">
                {this.state.yes ? <h1>{yes["yes-statement"]}</h1> : <h1>{no["no-statement"]}</h1>}
                {this.state.yes ? <img src={yes["yes-image"]} onClick={this.clickHandler} alt="" ></img> : <img src={no["no-image"]} onClick={this.clickHandler} alt=""></img>}
            </div>
        
        )
    }



}


/* 
1. make a component to use in App.js called StatementCard
  1. declare the component as a class
      import object.js to use the objects: yesObj, noObj
  2. declare initial state with property -- yes: true
  3. make clickHandler that uses this.setState with !previousState.yes
      for toggling back and forth
  4. render an h1 for the statement in a ternary statement:
      {this.state.yes ? <h1>{yesObj.yes-statement}</h1> : <h1>{noObj.no-statement}</h1>}
  5. render an img tag based on this.state like above:
      {this.state.yes ? <img src={yesObj.yes-image} /> : <img src={noObj.no-image} />}
*/