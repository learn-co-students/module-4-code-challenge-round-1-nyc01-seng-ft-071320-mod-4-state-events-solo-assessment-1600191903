import React, { Component } from 'react'
import {yes, no} from './objects'


class Image extends Component {
    
    state = {
        yesMode: false
    }
    
    clickHandler = () => {
        this.setState((prevState)=>{
            return {
                yesMode: !prevState.yesMode
            }
        })
    }


    render() {
        return (
            <div id="container">
                <h1>{this.state.yesMode ? yes["yes-statement"]:no["no-statement"]}</h1>
                <img onClick={this.clickHandler} src={this.state.yesMode ? yes["yes-image"]: no["no-image"]}></img>
            </div>
        )
    }
}

export default Image