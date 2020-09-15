import React from 'react'



class Renderer extends React.Component {

   state = {
      yes: true,
      no: false
   }

   clickHandler = () => {
      console.log("before state change", this.state)
      if ((this.state.yes === true) && (this.state.no === false)) {
         this.state.yes = false
         this.state.no = true
      }
      else {
         this.state.yes = true
         this.state.no = false
      }
      this.setState()
      console.log("after state change", this.state)
   }
   
      
      render() {
      return (
         <div className="card">
            <span className="content">
               <h2>{this.props.text}</h2>
            </span>
            <span onClick={this.clickHandler} className="img">
               img
               {this.yes}
            </span>
         </div>
      )
   }
}

export default Renderer

