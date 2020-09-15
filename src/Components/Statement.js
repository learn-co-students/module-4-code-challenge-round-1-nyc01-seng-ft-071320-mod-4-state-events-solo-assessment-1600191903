import React from 'react'
import { yes, no } from '../objects'

function Statement(props) {
  return(
    <div className="Statement">
      {props.clicked ? yes["yes-statement"] : no["no-statement"]}
    </div>
  )
}

export default Statement
