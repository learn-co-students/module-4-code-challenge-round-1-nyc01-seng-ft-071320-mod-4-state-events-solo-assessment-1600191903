import React from 'react';
import App from './App';
import { yes, no } from './objects';

class Wireframe extends React.Component{

    let state = {yes}  // oh boy, not sure what i'm doing here...
    console.log({yes, no}.state)
    image = () => {yes, no}   // need to toggle between yes and no, then append to dom with render()
    render() {
        // console.log({yes, no}.no["no-image"])
        // console.log({yes, no}.yes["yes-image"])

    return <button>{image}</button>

    }

}


export default Wireframe