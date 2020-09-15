import React from 'react';
import Image from './Image.js'

class Statement extends React.Component {
    constructor () {
        super();
        this.state = {
            word: true
        }
    }

    changeState = (e) => {
        if(e.type === "click"){
            return this.setState({
                word: !this.state.word
            })
        }
    }

    changeWord = () => {
        if(this.state.word === true) {
            return <h1 onClick={this.changeState}>Yes</h1>;
        }
    }

    render(){
        return (
            <div>
            {this.changeWord()}
            </div>
            <Image />
        )
    }
}

export default Statement