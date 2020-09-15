import React from 'react'


const yes = { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU", "statement": "google the answer" }

const no = { "image": "https://thumbs.gfycat.com/ElaborateShinyBernesemountaindog-size_restricted.gif", "statement": "learn problem solving, syntax, reading documentation" }

class Object extends React.Component {
    state = {
        clicked: false
    }
    
    clickHandler = () => {
        console.log('click heard')
        this.setState( (original)=>({clicked: !original.clicked})   )
    }

    loadData =()=> {
       return  this.state.clicked ? yes : no 
    }
    
    render(){
        return(
            <>
           <div id='statement'>
                <h1> {this.loadData()['statement']} </h1>
            </div>
      
            <div onClick={this.clickHandler} id='photo'>
            <img src={this.loadData()['image']} alt=''/> 
            </div>
            </>
        )
    }

}
export default Object






