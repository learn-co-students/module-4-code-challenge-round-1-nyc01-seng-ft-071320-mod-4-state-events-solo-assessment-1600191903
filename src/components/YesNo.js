import React, { Component } from 'react'
import App from '../App'
import {yes, no} from '../objects'

class YesNo extends Component {

    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState((previousState) => ({clicked: !previousState.clicked}))
    }


    render(){
        return(
            <>
            <h1> {yes['yes-statement']}</h1>
            <div onClick={this.clickHandler}>
                {this.state.clicked ? <img src={yes['yes-image']} alt="yes"/> : <img src={no['no-image']} alt="no"/> }
            </div>
            </>
        )
    }
}

export default YesNo

