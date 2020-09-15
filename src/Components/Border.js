import React from 'react';
import Statement from './Statement.js'

class Border extends React.Component {


    render() {
        return(
            <div style={{"border-width": "5px", "border-style": "solid"}}>
                <Statement />
            </div>
        )
    }
}

export default Border