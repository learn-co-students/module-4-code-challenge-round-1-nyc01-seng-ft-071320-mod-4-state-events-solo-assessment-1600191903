import React from 'react'
import { yes, no } from '../objects'

export default class ContentWrapper extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked ? true : false
    })
  }

  render(){
    return(
      <div className="content-wrapper">
        <h2 >{this.state.clicked ? yes["yes-statement"] : no["no-statement"]}</h2>
        <img onClick={this.clickHandler} alt="" src={this.state.clicked ? yes["yes-image"] : no["no-image"]}/> 
      </div>
    )
  }

}