import React from 'react'
import {yes} from './objects'
import {no} from './objects'

// When the image is clicked, it should switch from 
        // the "no" image and statement to the "yes" image 
        // and statement. When clicked a second time it 
        // should flip again. 

class Image extends React.Component {
    state = {clicked: false}

    clickHandler = () => {
        if(this.state.clicked === false){
            this.setState = {clicked: true}
        } else {
            this.setState = {clicked: false}
        }  
    }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler}/>
                {this.state.clicked ? <img alt="" src={no.no-image}></img> : null}
            </div>
        )
    }
}

export default Image

//on click switch image from no to yes by grabbing object values


        // <button onClick={this.clickHandler}>Bark</button>
        // {this.state.clicked ? <span className="bark">
        //   <h2>Bark</h2>
        // </span> : null}


//will need to refactor statement component and alter state inside both components