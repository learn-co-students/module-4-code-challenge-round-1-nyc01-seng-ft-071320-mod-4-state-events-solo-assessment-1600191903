import React from 'react'
import Statement from './Statement'
import App from './App'
import yes from './objects.js'
import no from './objects.js'

class Image extends React.Component{



    render() {
        return(
        <>
        <img src={this.props.yesImage}></img>
        </>
        )
    }


}

export default Image



