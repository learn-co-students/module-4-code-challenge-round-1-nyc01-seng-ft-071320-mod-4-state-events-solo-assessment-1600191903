import React from 'react';
// import { yes, no } from "../objects.js";

class Image extends React.Component {

    // state = {
    //     clicked: false
    // }

    // handleClick = (e) => {
    //     if (e.type === 'click') {
    //         this.setState({
    //             clicked: !this.state.clicked
    //         })
    //     }
    // }

    // getImage = () => {
    //     if (this.state.clicked === true) {
    //         return <img onClick={this.handleClick} src={yes["yes-image"]} alt="yes" />
    //     } else if (this.state.clicked === false) {
    //         return <img onClick={this.handleClick} src={no["no-image"]} alt="no" />
    //     }
    // }


    render() {
        return <img src={this.props.src} alt={this.props.src} />
    }
}

export default Image;