import React from 'react';
import Image from './Image'
import { yes, no } from "../objects.js";

class Statment extends React.Component {
    state = {
        clicked: false
    }

    handleClick = (e) => {
        if (e.type === 'click') {
            this.setState({
                clicked: !this.state.clicked
            })
        }
    }

    getImage = () => {
        if (this.state.clicked === true) {
            return <Image src={yes["yes-image"]} />
        } else if (this.state.clicked === false) {
            return <Image src={no["no-image"]} />
        }
    }

    getStatement = () => {
        if (this.state.clicked === true) {
            return <h1>{yes["yes-statement"]} </h1>
        } else if (this.state.clicked === false) {
        return <h1> {no["no-statement"]}</h1>
        }
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                {this.getStatement()}
                {this.getImage()}
            </div>
            )
    }
}

export default Statment;
