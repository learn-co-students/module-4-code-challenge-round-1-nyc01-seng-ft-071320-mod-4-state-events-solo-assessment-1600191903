import React from 'react';
import Statement from "./Statement.js";

class Border extends React.Component {

    render() {
        return (
            <>
            <div style={{"borderWidth": "2px", "borderStyle": "solid"}}>
                <Statement />
            </div>
            </>
        )
    }
}

export default Border;