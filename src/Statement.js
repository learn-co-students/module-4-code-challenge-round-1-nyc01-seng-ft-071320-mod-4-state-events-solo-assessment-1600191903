import React from 'react'
import App from './App';



class Statement extends React.Component{

    state = {clicked: true}


    render() {
        return (
            <div>
               <h1>{this.props.yesStatement}</h1>
            </div>
        )
    }

    
}

export default Statement