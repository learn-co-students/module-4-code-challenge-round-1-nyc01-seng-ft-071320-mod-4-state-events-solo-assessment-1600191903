import React from 'react';

class Image extends React.Component {


    render() {
        return <img style={{"display": "block", "marginLeft": "auto", "marginRight": "auto"}} src={this.props.src} alt={this.props.alt} />
    }
}

export default Image