import React from 'react'
import { yes } from './objects'
import { no } from './objects'


class Renderer extends React.Component {

   state = {
      clicked: false
   }

   clickHandler = () => {
      console.log("clicking")
      this.setState((previousState) => ({ clicked: !previousState.clicked }), () => console.log("State: ", this.state))
   }
   
   yesMeme = yes[1]
      
      render() {
      console.log(this.meme)
      return (
         <div className="card">
            <span className="content">
               <h2>{this.props.text}</h2>
            </span>
            <span className="img">
               <button onClick={this.clickHandler}>img</button>
               {this.state.clicked ? <span className="img">
                  <div>
                     {this.yesMeme}
                  </div>
                  </span> : null}
            </span>
         </div>
      )
   }
}

export default Renderer

