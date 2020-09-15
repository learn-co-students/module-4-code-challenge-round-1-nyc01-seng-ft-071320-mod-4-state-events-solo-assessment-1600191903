import React from 'react'


const yes = { "yes-image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU", "yes-statement": "google the answer" }

const no = { "no-image": "https://thumbs.gfycat.com/ElaborateShinyBernesemountaindog-size_restricted.gif", "no-statement": "learn problem solving, syntax, reading documentation" }

class Object extends React.Component {
    state = {
        clicked: false
    }
    
    clickHandler = () => {
        console.log('click heard')
        this.setState( (original)=>({clicked: !original.clicked})   )
    }
    
    render(){
        return(
            <>
            <div id='statement'>
                {this.state.clicked ? <h1>{yes['yes-statement']}</h1> : <h1>{no['no-statement']}</h1> } 
            </div>
      
            <div onClick={this.clickHandler} id='photo'>
                {this.state.clicked ? <img src={yes['yes-image']} alt=''/> : <img src={no['no-image']} alt=''/> }
            </div>
            </>
)
}

}
export default Object
export {Object, yes, no}

// yes: {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU",
//     statement: "google the answer"
// },
// no: {
//     img: "https://thumbs.gfycat.com/ElaborateShinyBernesemountaindog-size_restricted.gif",
//     statement: "learn problem solving, syntax, reading documentation"
// }
