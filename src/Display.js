import React from 'react'
import { yes, no } from './objects'
class Display extends React.Component {

    state = {
        clicked: true
    }

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    render() {
        return (
            <div className="display">
                {this.state.clicked ?
                    <>
                        <h1>{yes["yes-statement"]}</h1>
                        <img src={yes["yes-image"]} onClick={this.clickHandler} />
                    </> :

                    <>
                        <h1>{no["no-statement"]}</h1>
                        <img src={no["no-image"]} onClick={this.clickHandler} />
                    </>

                }

            </div>
        )
    }
}

export default Display