import React from 'react'
import Statement from './Statement'
import { yes, no } from '../objects'

class Image extends React.Component {
  state = {
    clicked: true
  }

  clickHandle = () => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    })
  }

  render() {
    return(
      <div>
        <Statement clicked={this.state.clicked}/>
        <div className="Image">
          <img onClick={this.clickHandle} src={this.state.clicked ? no["no-image"] : yes["yes-image"]} alt=""></img>
        </div>
      </div>
    )
  }
}

export default Image
