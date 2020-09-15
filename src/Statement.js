import React from 'react'
// import {yes} from './objects'
// import {no} from './objects'

class Statement extends React.Component {
    state = {clicked: false}

    clickHandler = () => {
        if(this.state.clicked === false){
            this.setState = {clicked: true}
        } else {
            this.setState = {clicked: false}
        }  
    }

     // When the image is clicked, it should switch from 
        // the "no" image and statement to the "yes" image 
        // and statement. When clicked a second time it 
        // should flip again. 


    render() {
        return (
            <div>
               
                "Statement component"
            </div>
        )
    }
}

export default Statement