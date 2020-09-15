import React from 'react'
import { yes, no } from '../objects.js'

class Statement extends React.Component {

    answerImage = no["no-image"]

    answerStatement = no["no-statement"]

    state = {
        clicked: false,
        // answerImage: no["no-image"],
        // answerStatement: no["no-statement"]
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                clicked: !previousState.clicked
            }
        })
    }

    clickLogic = () => {
        this.clickHandler()
        if(this.state.clicked) {
            this.answerImage = yes['yes-image']
            this.answerStatement = yes['yes-statement']
        } else {
            this.answerImage = no['no-image']
            this.answerStatement = no['no-statement']            
        }
    }


    render() {
        return(<React.Fragment>
            <h2>{this.answerStatement}</h2>
            <img src= {this.answerImage} onClick={this.clickLogic} ></img>
            </React.Fragment>)
    }


}

export default Statement