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
        {this.state.clicked ? <h2 >{yes["yes-statement"]}</h2> : <h2>{no["no-statement"]}</h2>}
        { this.state.clicked ? <img onClick={this.clickHandler} alt="" src={yes["yes-image"]}/> : <img onClick={this.clickHandler} alt="" src={no["no-image"]}/>}
      </div>
    )
  }

}