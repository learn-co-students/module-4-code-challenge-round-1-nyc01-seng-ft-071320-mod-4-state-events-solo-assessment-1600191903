import React from 'react';
import Image from './Image.js'
import { yes, no } from '../objects.js';

class Statement extends React.Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    clickHandler = (e) => {
        if(this.state.clicked === true){
            return (
                <>
                <h1 style={{"textAlign": "center", "borderWidth":"1px", "borderStyle":"solid"}}>{yes["yes-statement"]}</h1>
                <Image src={yes["yes-image"]} alt={yes["yes-statement"]} />
                </>
                )
        } else if (this.state.clicked === false){
            return (
                <>
                <h1 style={{"textAlign": "center", "borderWidth":"1px", "borderStyle":"solid"}}>{no["no-statement"]}</h1>
                <Image src={no["no-image"]} alt={no["no-statement"]} />
                </>
                )
        }
    }

    updateClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div onClick={this.updateClick}>
                {this.clickHandler()}
            </div>
        )
    }
}

export default Statement;