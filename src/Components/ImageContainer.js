import React from 'react';
import { yes } from '../objects'
import { no } from '../objects'

function imageContainer(props) {
   let images = props.yes.map(image => <Image image={imageObj} />)
}



