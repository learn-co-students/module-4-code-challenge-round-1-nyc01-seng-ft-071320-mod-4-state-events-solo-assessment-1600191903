import React from 'react';
import Statement from './Statement.js'

class Border extends React.Component {

render() {
    return (
        <div style={{
            "border-width": "2px",
            "border-style": "solid",
            "border-color": "black",
            "margin-top" : "10px",
            "margin-left" : "10px",
            "margin-right" : "10px"
        }}>
            <Statement />
        </div>
    )
}

}

export default Border;