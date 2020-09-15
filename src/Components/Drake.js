import React from 'react'
import { yes, no } from '../objects.js'

class Drake extends React.Component {
    state = {
        bool: false
    }

    clickHandler = () => {
        this.state.bool ? this.setState({ bool: false }) : this.setState({ bool: true })
    }

    render() {
        return (
            <div id="main">
                <h2>{this.state.bool ? yes["yes-statement"] : no["no-statement"]}</h2>
                <img onClick={this.clickHandler} src={this.state.bool ? yes["yes-image"] : no["no-image"]} />
            </div>
        )

    }
}

export default Drake