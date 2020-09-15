import React, { Component } from 'react';

class Card extends Component {
    
    state = {
        toggled: false
      };

      handleClick = () => {
        // console.log(this.state.toggled)
        console.log("click")
        this.setState(previousState => {
          return {
            toggled: !previousState.toggled
          }
        })
        console.log("frack")
        // console.log(toggled)
      }

    render() {
      console.log(this.props)
      return (
        <div >
            <span>
            <h2>{this.state.toggled ? this.props.yesState : this.props.noState}</h2>
            <img src={this.state.toggled ? this.props.yesImage : this.props.noImage}></img>
            {/* <p>{this.state.toggled ? this.props.yesState : this.props.noState}</p> */}
            </span>
            <p>
            <button onClick={this.handleClick}>{this.state.toggled ? "yes" : "no"}</button>
            </p>
        </div>
      )
    }
  }
  
  export default Card;