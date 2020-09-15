import React, { Component } from 'react';
import {yes, no} from './objects.js'

class YesNo extends Component {
    state = {
        image: yes['yes-image']
    }

    clickHandler = () => {
        this.setState(previousState => this.toggleState(previousState))
    }

    toggleState(previousState) {
        return (
           previousState.image === no['no-image'] ? {image: yes['yes-image']} : {image: no['no-image']}
        ) 
    }

    render() {
        return <img class='jello-horizontal' onClick={this.clickHandler} src={this.state.image} alt="yes or no"/>
    }
}

export default YesNo